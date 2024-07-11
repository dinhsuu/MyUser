'use strict';
import con from '../../config/db.config';

var User = function (user) {
  this.name = employee.name;
  this.password = employee.password;
};

User.getAll = function (result) {
  con.query('Select * from Users', function (err, res) {
    if (err) result(null, err);
    result(null, res);
  });
};
export default User;
