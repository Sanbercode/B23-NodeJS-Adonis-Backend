import {HttpContextContract} from "@ioc:Adonis/Core/HttpContext";
import UserValidator from "App/Validators/UserValidator";
import User from "App/Models/User";
import OtpCode from "App/Models/OtpCode";
import {DateTime} from "luxon";
import {rules, schema} from "@ioc:Adonis/Core/Validator";
import Mail from "@ioc:Adonis/Addons/Mail";

export default class AuthController {
  public async login ({request, auth, response}: HttpContextContract) {
    const email = request.input('email');
    const password = request.input('password');

    const user = await User.query().where('email', email).firstOrFail();

    if(!user.verifiedAt) {
      return response.status(401).json({
        response_code: "01",
        response_message: "Silahkan verifikasi terlebih dahulu"
      });
    }

    const token = await auth.use('api').attempt(email, password, {
      expiresIn: '1 days',
    });

    return response.status(200).json({
      response_code: "00",
      response_message: "Login Success",
      token
    })
  }

  public async register ({request, response}: HttpContextContract) {
    let email = request.input('email');
    let password = request.input('password');
    let fullName = request.input('full_name');
    let phone = request.input('phone');

    await request.validate(UserValidator);

    const data = await User.create({
      email, password, role: 'user', fullName, phone
    });

    const digits = '0123456789';
    let otpCode: string = "";
    for (let i = 0; i < 6; i++ ) {
      otpCode += digits[Math.floor(Math.random() * 10)];
    }
    const expiresAt = DateTime.now().plus({minutes: 5});

    await OtpCode.create({
      userId: data.id,
      // @ts-ignore
      otpCode,
      expiresAt
    })

    await Mail.sendLater((message) => {
      message
        .from('admin@venue.com')
        .to(email)
        .subject('OTP Verification')
        .htmlView('emails/verification', { full_name: fullName, otpCode })
    })

    return response.status(201).json({
      response_code: "00",
      response_message: "Register Success, Please Verify",
      data
    });

  }

  public async verification ({request, response}: HttpContextContract) {
    const otpCode = request.input('otp_code');

    const otpSchema = schema.create({
      otp_code: schema.number()
    });

    await request.validate({schema: otpSchema});

    const otp = await OtpCode.query().where('otp_code', otpCode).first();

    if (!otp) {
      return response.status(401).json({
        response_code: "01",
        response_message: "Invalid OTP Code"
      });
    }

    const now = (DateTime.now()).toString();
    const expires = otp.expiresAt.toString();
    if (now > expires) {
      return response.status(401).json({
        response_code: "01",
        response_message: "OTP Code Expired, Please Regenerate OTP"
      })
    }

    const user_id = otp.userId
    await User.query().where('id', user_id).update({
      verified_at: DateTime.now().toString()
    });

    await otp.delete();

    return response.status(200).json({
      response_code: "00",
      response_message: "Verification Success",
      verified_at: DateTime.now().toFormat('dd LLL yyyy HH:mm:ss')
    })
  }

  public async regenerateOtp ({request, response}: HttpContextContract) {
    const email = request.input('email');

    const emailSchema = schema.create({
      email: schema.string({}, [
        rules.email()
      ])
    });

    await request.validate({schema: emailSchema});

    const user = await User.query().where('email', email).first();

    if (!user) {
      return response.status(400).json({
        response_code: "01",
        response_message: "Email Address Not Found"
      })
    }

    if (user.verifiedAt) {
      return response.status(400).json({
        response_code: "01",
        response_message: "Email is Verified, please login"
      })
    }

    const digits = '0123456789';
    let otpCode: string = "";
    for (let i = 0; i < 6; i++ ) {
      otpCode += digits[Math.floor(Math.random() * 10)];
    }

    const userId = user.id;
    const expiresAt = DateTime.now().plus({minutes: 5});

    await OtpCode.query().where('user_id', userId).update({
      user_id: userId,
      otp_code: otpCode,
      expires_at: expiresAt.toString()
    });

    await Mail.sendLater((message) => {
      message
        .from('admin@venue.com')
        .to(email)
        .subject('OTP Verification')
        .htmlView('emails/verification', { full_name: user.fullName, otpCode })
    })

    return response.status(200).json({
      response_code: "00",
      response_message: "OTP Code updated successfully, please verify"
    })
  }
}
