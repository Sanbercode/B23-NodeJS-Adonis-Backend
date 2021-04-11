import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import GenreValidator from "App/Validators/GenreValidator";
import Database from "@ioc:Adonis/Lucid/Database";

export default class GenresController {

  public async index ({response}: HttpContextContract) {
    const data = await Database.query().select([
      'id', 'name'
    ]).from('genres');

    return response.status(200).json({
      response_code: "00",
      response_message: "Data Fetched",
      data
    });
  }

  public async store ({request, response}: HttpContextContract) {
    const name = request.input('name');
    await request.validate(GenreValidator);

    const [ lastInsertId] = await Database.table('genres').insert({
      name
    });

    const data = await Database.query().select(
      ['id', 'name']
    ).from('genres').where('id', lastInsertId).firstOrFail();

    return response.status(201).json({
      response_code: "00",
      response_message: "Data Stored",
      data
    });
  }

  public async show ({response, params}) {
    const id = params.id;

    try {
      const data = await Database.query().select([
        'id', 'name'
      ]).from('genres').where('id', id).firstOrFail();

      return response.status(200).json({
        response_code: "00",
        response_message: `Data ${id} Fetched`,
        data
      })
    } catch (errors) {
      return response.json({
        response_code: "01",
        response_message: `Data Not Found`,
        error_message: errors.message
      })
    }
  }

  public async update ({request, response, params}: HttpContextContract) {
    const id = params.id;
    const name = request.input('name');

    try {
      await request.validate(GenreValidator);

      await Database.from('genres').where('id', id).update({ name });

      const data = await Database.query().select([
        'id', 'name'
      ]).from('genres').where('id', id).firstOrFail();

      return response.status(201).json({
        response_code: "00",
        response_message: `Data ${id} Successfully Updated`,
        data
      });
    } catch (errors) {
      return response.json({
        response_code: "01",
        error_message: errors.message
      })
    }
  }

  public async destroy ({response, params}) {
    const id = params.id;

    try {
      await Database.from('genres').where('id', id).delete();

      return response.status(202).json({
        response_code: "00",
        response_message: `Data ${id} Successfully Deleted`
      })
    } catch (errors) {
      return response.json({
        response_code: "01",
        error_message: errors.message
      });
    }
  }

}
