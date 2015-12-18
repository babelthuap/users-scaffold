'use strict';

module.exports = {
  expTime: {num: 7, unit: 'days'},
  refresh: true,
  saltRounds: 10,
  validatePassword: function(password) {
    return true;
  },
  validateUsername: function(username) {
    return true;
  }
};
