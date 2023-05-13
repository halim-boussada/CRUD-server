var Todo = require("../model/todo.js");

module.exports = new (class TodoService {
  create(data) {
    return Todo.create(data);
  }
  get() {
    return Todo.find();
  }
  delete(_id) {
    return Todo.findOneAndDelete({ _id });
  }
  update(_id, data) {
    console.log({ data, _id });
    return Todo.findOneAndUpdate({ _id }, data);
  }
})();
