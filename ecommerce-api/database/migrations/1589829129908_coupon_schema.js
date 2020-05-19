'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CouponSchema extends Schema {
  up () {
    this.create('coupons', (table) => {
      table.increments()
      table.string('name', 100)
      table.decimal('discount', 12, 2)
      table.datetime('valid_from').defaultTo(this.fn.now())
      table.datetime('valid_until')
      table.integer('quantity').defaultTo(1)
      table.enu('type', ['free', 'percent', 'currency']).defaultTo('currency')
      table.boolean('recursive').defaultTo(false)
    })
  }

  down () {
    this.drop('coupons')
  }
}

module.exports = CouponSchema
