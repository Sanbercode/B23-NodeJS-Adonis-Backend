import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Actors extends BaseSchema {
  protected tableName = 'actors'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');
      table.string('name').notNullable();
      table.text('bio');
      table.dateTime('birth_date');
      table.timestamps();
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
