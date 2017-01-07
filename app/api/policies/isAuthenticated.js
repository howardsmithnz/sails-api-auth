/**
 * isAuthenticated
 *
 */
var jwt = require('express-jwt');

var authCheck = jwt({
  secret: new Buffer('pFgatPyyjLtE23mNUfhOj8ULm_USqjYULNBTWW9zgVnu0JDsLKwXLAcY6PAv1Bw6', 'base64'),
  audience: 'GBVuG4oL20zxf9SCIB9sXn7Sz3XNZcr5'
});

module.exports = authCheck;