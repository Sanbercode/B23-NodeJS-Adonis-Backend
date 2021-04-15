import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Verify {
  public async handle ({auth, response}: HttpContextContract, next: () => Promise<void>) {
    // code for middleware goes here. ABOVE THE NEXT CALL
    let user = auth.user?.verifiedAt;
    if (user) {
      await next()
    } else {
      console.log(user);
      return response.unauthorized({
        response_code: "01",
        response_message: "Email Unverified, please verify"
      })
    }
  }
}
