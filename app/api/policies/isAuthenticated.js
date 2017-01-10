/**
 * isAuthenticated
 *
 */
var jwt = require('express-jwt');

var authCheck = jwt({
  secret: new Buffer('cBCunsd-ldjZji_JiSjBJoSzHFBNke889jYm8zX52V5ul7Ty--qHRnBSv-MrYAtP'),
  audience: 'GBVuG4oL20zxf9SCIB9sXn7Sz3XNZcr5'
});

module.exports = authCheck;