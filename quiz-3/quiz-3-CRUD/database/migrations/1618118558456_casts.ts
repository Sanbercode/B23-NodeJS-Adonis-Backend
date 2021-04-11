import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Casts extends BaseSchema {
  protected tableName = 'casts'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('movie_id', 10).unsigned().references('id').inTable('movies');
      table.integer('actor_id', 10).unsigned().references('id').inTable('actors');
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
