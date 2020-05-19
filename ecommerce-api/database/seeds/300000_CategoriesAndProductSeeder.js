'use strict'

/*
|--------------------------------------------------------------------------
| 300000_CategoriesAndProductSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class CategoriesAndProductSeeder {
  async run () {
    const categories = await Factory.model(
      'App/Models/Category').createMany(5)

      await Promise.all(
        categories.map(async category => {
          const categories = await Factory.model(
            'App/Models/Product').createMany(5)

          await Promise.all(
            products.map(async product => {
              await product.categories().attach([category.id])
            })
          )
        })
      )
  }
}

module.exports = CategoriesAndProductSeeder
