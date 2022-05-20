const { usersData } = require('../models/User');

exports.getUserFromDatabase = (login) => {
  const isUserExist = usersData.some((user) => user.login === login);
  const user = usersData.find((user) => user.login === login);

  if (!isUserExist) {
    return null;
  }

  return user;
};
