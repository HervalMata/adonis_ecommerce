'use strict'

/*
|--------------------------------------------------------------------------
| 400000CartSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const User = use('App/Models/User')
const Database = use('database')

class CartSeeder {
  async run () {
    const clients = await User.query()
    .whereHas('roles', (builder) => builder.where('slug', 'client' )).fetch()

    const productIds = await Database.from('products').pluck('id')

    await Promiserequest.all(
      clients.rows.map(async client => {
        const cart = await Factory.model('App/Models/Cart').make()
        await client.carts().save()
      })
    )
  }
}

module.exports = CartSeeder
