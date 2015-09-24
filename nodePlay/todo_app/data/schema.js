var Schema = {
  todos: {
    id: {type: 'increments', nullable: false, primary: true},
    name: {type: 'string', maxlength: 150, nullable: false},
    description: {type: 'string', maxlength: 500, nullable: false},
    completed: {type: 'boolean', nullable: false},
    created_at: {type: 'dateTime', nullable: false},
    updated_at: {type: 'dateTime', nullable: true}
  }
}

module.exports = Schema;