"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTask = createTask;
exports.getTasks = getTasks;
exports.singlesTask = singlesTask;
exports.deletedTask = deletedTask;
exports.updateTask = updateTask;
exports.getTaskByProject = getTaskByProject;

var _Tasks = _interopRequireDefault(require("../models/Tasks"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function createTask(req, res) {
  var _req$body, name, done, projectid, newTask;

  return regeneratorRuntime.async(function createTask$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, name = _req$body.name, done = _req$body.done, projectid = _req$body.projectid;
          _context.next = 3;
          return regeneratorRuntime.awrap(_Tasks["default"].create({
            name: name,
            done: done,
            projectid: projectid
          }, {
            fields: ['name', 'done', 'projectid']
          }));

        case 3:
          newTask = _context.sent;
          res.json({
            mensaje: 'Nueva tarea creada',
            data: newTask
          });

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
}

;

function getTasks(req, res) {
  var tasks;
  return regeneratorRuntime.async(function getTasks$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(_Tasks["default"].findAll({
            attributes: ['id', 'projectid', 'name', 'done'],
            order: [['id', 'DESC']]
          }));

        case 2:
          tasks = _context2.sent;
          res.json({
            mensaje: 'Tareas Obtenidas satisfatoriamente',
            datos: tasks
          });

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
}

;

function singlesTask(req, res) {
  var id, oneTask;
  return regeneratorRuntime.async(function singlesTask$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          id = req.params.id;
          _context3.next = 3;
          return regeneratorRuntime.awrap(_Tasks["default"].findOne({
            attributes: ['id', 'name', 'done', 'projectid'],
            where: {
              id: id
            }
          }));

        case 3:
          oneTask = _context3.sent;
          res.json(oneTask);

        case 5:
        case "end":
          return _context3.stop();
      }
    }
  });
}

;

function deletedTask(req, res) {
  var id, deletedTask;
  return regeneratorRuntime.async(function deletedTask$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          id = req.params.id;
          _context4.next = 3;
          return regeneratorRuntime.awrap(_Tasks["default"].destroy({
            where: {
              id: id
            }
          }));

        case 3:
          deletedTask = _context4.sent;
          res.json({
            mensaje: 'Tarea eliminada',
            datos: deletedTask
          });

        case 5:
        case "end":
          return _context4.stop();
      }
    }
  });
}

;

function updateTask(req, res) {
  var id, _req$body2, name, done, projectid, task, updateTask;

  return regeneratorRuntime.async(function updateTask$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          id = req.params.id;
          _req$body2 = req.body, name = _req$body2.name, done = _req$body2.done, projectid = _req$body2.projectid;
          _context5.next = 4;
          return regeneratorRuntime.awrap(_Tasks["default"].findOne({
            attributes: ['id', 'name', 'done', 'projectid'],
            where: {
              id: id
            }
          }));

        case 4:
          task = _context5.sent;
          _context5.next = 7;
          return regeneratorRuntime.awrap(_Tasks["default"].update({
            name: name,
            done: done,
            projectid: projectid
          }, {
            where: {
              id: id
            }
          }));

        case 7:
          updateTask = _context5.sent;
          res.json({
            mensaje: 'Tarea Actualizada',
            nuevaTarea: updateTask
          });

        case 9:
        case "end":
          return _context5.stop();
      }
    }
  });
}

;

function getTaskByProject(req, res) {
  var projectid, tareas;
  return regeneratorRuntime.async(function getTaskByProject$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          projectid = req.params.projectid;
          _context6.next = 3;
          return regeneratorRuntime.awrap(_Tasks["default"].findAll({
            attributes: ['id', 'projectid', 'done', 'name'],
            where: {
              projectid: projectid
            }
          }));

        case 3:
          tareas = _context6.sent;
          res.json({
            tareas: tareas
          });

        case 5:
        case "end":
          return _context6.stop();
      }
    }
  });
}