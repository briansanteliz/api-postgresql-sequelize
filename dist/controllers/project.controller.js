"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createProject = createProject;
exports.getProjects = getProjects;
exports.getSinglesProject = getSinglesProject;
exports.deletedProject = deletedProject;
exports.updateProject = updateProject;

var _Projects = _interopRequireDefault(require("../models/Projects"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// controller-routes
function createProject(req, res) {
  var _req$body, name, priority, description, deliverydate, newProject;

  return regeneratorRuntime.async(function createProject$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, name = _req$body.name, priority = _req$body.priority, description = _req$body.description, deliverydate = _req$body.deliverydate;
          _context.next = 4;
          return regeneratorRuntime.awrap(_Projects["default"].create({
            name: name,
            priority: priority,
            description: description,
            deliverydate: deliverydate
          }, {
            fields: ['name', 'priority', 'description', 'deliverydate']
          }));

        case 4:
          newProject = _context.sent;

          if (!newProject) {
            _context.next = 7;
            break;
          }

          return _context.abrupt("return", res.json({
            message: 'proyecto creado',
            data: newProject
          }));

        case 7:
          _context.next = 13;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
          res.status(500).json({
            message: 'algo fue mal',
            data: {}
          });

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 9]]);
}

;

function getProjects(req, res) {
  var getProjects;
  return regeneratorRuntime.async(function getProjects$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(_Projects["default"].findAll());

        case 2:
          getProjects = _context2.sent;
          res.json({
            datos: getProjects
          });

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
}

;

function getSinglesProject(req, res) {
  var id, project;
  return regeneratorRuntime.async(function getSinglesProject$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          id = req.params.id;
          _context3.next = 3;
          return regeneratorRuntime.awrap(_Projects["default"].findOne({
            where: {
              id: id
            }
          }));

        case 3:
          project = _context3.sent;
          res.json({
            mensaje: 'Usuario Obtenido satisfactoriamente',
            data: project
          });

        case 5:
        case "end":
          return _context3.stop();
      }
    }
  });
}

;

function deletedProject(req, res) {
  var id, deletedProject;
  return regeneratorRuntime.async(function deletedProject$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          id = req.params.id;
          _context4.next = 3;
          return regeneratorRuntime.awrap(_Projects["default"].destroy({
            where: {
              id: id
            }
          }));

        case 3:
          deletedProject = _context4.sent;
          res.json({
            mensaje: 'proyecto eliminado satisfactoriamente',
            data: deletedProject
          });

        case 5:
        case "end":
          return _context4.stop();
      }
    }
  });
}

;

function updateProject(req, res) {
  var id, _req$body2, name, priority, description, deliverydate, projects;

  return regeneratorRuntime.async(function updateProject$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          id = req.params.id;
          _req$body2 = req.body, name = _req$body2.name, priority = _req$body2.priority, description = _req$body2.description, deliverydate = _req$body2.deliverydate;
          _context6.next = 4;
          return regeneratorRuntime.awrap(_Projects["default"].findAll({
            attributes: ['id', 'name', 'priority', 'description', 'deliverydate'],
            where: {
              id: id
            }
          }));

        case 4:
          projects = _context6.sent;

          if (projects.length > 0) {
            projects.forEach(function _callee(project) {
              return regeneratorRuntime.async(function _callee$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return regeneratorRuntime.awrap(project.update({
                        name: name,
                        priority: priority,
                        description: description,
                        deliverydate: deliverydate
                      }));

                    case 2:
                    case "end":
                      return _context5.stop();
                  }
                }
              });
            });
          }

          return _context6.abrupt("return", res.json({
            mensaje: 'Proyecto actualizado',
            datos: projects
          }));

        case 7:
        case "end":
          return _context6.stop();
      }
    }
  });
}

;