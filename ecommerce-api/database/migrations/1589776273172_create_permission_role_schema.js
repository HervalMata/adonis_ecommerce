'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PermissionRoleTableSchema extends Schema {
  up () {
    this.create('permission_roles', (table) => {
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
        .integer('role_id')
        .unsigned().index()
      table
        .foreign('role_id')
        .references('id')
        .inTable('roles')
        .onDeletew('cascade')
      table.timestamps()
    })
  }

  down () {
    this.drop('permission_roles')
  }
}

module.exports = PermissionRoleTableSchema
