'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PermissionUserTableSchema extends Schema {
  up () {
    this.create('permission_users', (table) => {
      table.increments()
      table
        .integer('permission_id')
        .unsigned().index()
      table
        .foreign('permission_id')
        .references('id')
        .inTable('permissions')
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
    this.drop('permission_users')
  }
}

module.exports = PermissionUserTableSchema
