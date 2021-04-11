import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from "@ioc:Adonis/Lucid/Database";
import MovieValidator from "App/Validators/MovieValidator";

export default class MoviesController {

  public async index ({response}: HttpContextContract) {
    const data = await Database.query().select([
      'id', 'title', 'resume', 'release_date', 'genre_id'
    ]).from('movies');

    return response.status(200).json({
      response_code: "00",
      response_message: "Data Fetched",
      data
    })
  }

  public async show ({response, params}: HttpContextContract) {
    const id = params.id;

    try {
      let data = await Database.query().select(['genre_id']).from('movies').where('id', id).firstOrFail();
      const genre_id = data['genre_id'];

      const query_genre_name = await Database.query().select(['name']).from('genres').where('id', genre_id).firstOrFail();
      const genre_name = query_genre_name['name'];

      data = await Database.query().select([
        'id', 'title', 'resume', 'release_date'
      ]).from('movies').where('id', id).firstOrFail();

      data['genre'] = genre_name;

      return response.status(200).json({
        response_code: "00",
        response_message: `Data ${id} Fetched`,
        data
      });
    } catch (errors) {
      return response.json({
        response_code: "01",
        error_message: errors.message
      })
    }


  }

  public async store ({request, response}: HttpContextContract) {
    const title = request.input('title');
    const resume = request.input('resume');
    const release_date = request.input('release_date');
    const genre_id = request.input('genre_id');

    await request.validate(MovieValidator);

    try {
      const query_id_genre = await Database.query().select('id').from('genres').where('id', genre_id).firstOrFail();
      const id_genre = query_id_genre['id'];
      const [ lastInsertId ] = await Database.table('movies').insert({
        title, resume, release_date, genre_id: id_genre
      });

      const data = await Database.query().select(
        ['id', 'title', 'resume', 'release_date', 'genre_id']
      ).from('movies').where('id', lastInsertId).firstOrFail();

      return response.status(201).json({
        response_code: "00",
        response_message: "Data Stored",
        data
      })
    } catch (errors) {
      return response.json({
        response_code: "01",
        response_message: errors.message,
      })
    }
  }

  public async update ({request, response, params}: HttpContextContract) {
    const id = params.id;
    const title = request.input('title');
    const resume = request.input('resume');
    const release_date = request.input('release_date');
    const genre_id = request.input('genre_id');

    await request.validate(MovieValidator);

    try {
      const query_id_genre = await Database.query().select('id').from('genres').where('id', genre_id).firstOrFail();
      const id_genre = query_id_genre['id'];

      await Database.from('movies').where('id', id).update({
        title, resume, release_date, genre_id: id_genre
      });

      const data = await Database.query().select(
        ['id', 'title', 'resume', 'release_date', 'genre_id']
      ).from('movies').where('id', id).firstOrFail();

      return response.status(201).json({
        response_code: "00",
        response_message: `Data ${id} Updated`,
        data
      });

    } catch (errors) {
      return response.json({
        response_code: "01",
        response_message: errors.message,
      })
    }
  }

  public async destroy ({response, params}: HttpContextContract) {
    const id = params.id;

    await Database.from('movies').where('id', id).delete();

    return response.status(202).json({
      response_code: "00",
      response_message: `Data ${id} Successfully Deleted`
    })
  }

}
