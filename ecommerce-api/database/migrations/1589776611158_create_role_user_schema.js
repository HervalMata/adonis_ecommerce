'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RoleUserTableSchema extends Schema {
  up () {
    this.create('role_users', (table) => {
      table.increments()
      table
        .integer('role_id')
        .unsigned().index()
      table
        .foreign('role_id')
        .references('id')
        .inTable('roles')
        .onDeletew('cascade')
      table
        .integer('user_id')
        .unsigned().index()
      table
        .foreign('user_id')
        .references('id')
        .inTable('users')
        .onDeletew('cascade')
      table.timestamps()
    })
  }

  down () {
    this.drop('role_users')
  }
}

module.exports = RoleUserTableSchema
