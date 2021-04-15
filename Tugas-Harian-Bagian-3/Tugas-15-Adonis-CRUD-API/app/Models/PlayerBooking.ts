import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'


export default class PlayerBooking extends BaseModel {
  @column()
  public bookingId: number

  @column()
  public playerId: string
}
