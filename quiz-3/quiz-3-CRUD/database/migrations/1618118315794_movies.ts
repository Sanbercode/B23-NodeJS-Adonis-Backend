import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Movies extends BaseSchema {
  protected tableName = 'movies'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');
      table.string('title', 100).notNullable();
      table.text('resume').notNullable();
      table.dateTime('release_date').notNullable();
      table.integer('genre_id', 10).unsigned().references('id').inTable('genres');
      table.timestamps();
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName);
  }
}
