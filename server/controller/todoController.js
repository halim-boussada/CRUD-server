const TodoService = require("../service/todoService.js");

module.exports = {
  async getTodo(req, res, next) {
    try {
      var Todo = await TodoService.get();
      res.send(Todo);
    } catch (next) {
      res.status(401).json(next);
    }
  },

  async deleteByParams(req, res, next) {
    try {
      var Todo = await TodoService.delete(req.params.id);
      res.send({ msg: "deleted" });
    } catch (next) {
      res.status(401).json(next);
    }
  },
  async updated(req, res, next) {
    try {
      console.log(req.body, req.params.id);
      var Todo = await TodoService.update(req.params.id, req.body);
      res.send({ msg: "updated" });
    } catch (next) {
      res.status(401).json(next);
    }
  },
  async create(req, res, next) {
    try {
      var Todo = await TodoService.create(req.body);
      res.send({ msg: "inserted" });
    } catch (next) {
      console.log(next);
      res.status(401).json(next);
    }
  },
};
