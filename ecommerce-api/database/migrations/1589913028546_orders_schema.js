'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OrdersSchema extends Schema {
  up () {
    this.create('orders', (table) => {
      table.increments()
      table.decimal('subtotal', 12, 2).notNullable()
      table.decimal('discount', 12, 2).notNullable().defaultTo(0.0)
      table.decimal('total', 12, 2).notNullable()
      table.enu('status', ['awaiting', 'cancelled', 'shipped', 'paid']).defaultTo('awaiting')
      table.integer('cart_id').unsigned()

      table
        .foreign('cart_id')
        .references('id')
        .inTable('carts')
        .onDelete('cascade')

      table.timestamps()
    })
  }

  down () {
    this.drop('orders')
  }
}

module.exports = OrdersSchema
