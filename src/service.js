const data = require("./MOCK_DATA.json");

const getUsers = () => data;

const getUser = (id) => {
  let identifyer = Number(id);
  let user = data.find((person) => person.id === identifyer);
  return user;
};

const createUser = (dataUser) => {
  let newUser = {
    id: data.length + 1,
    ...dataUser,
  };
  data.push(newUser);
  return newUser;
};

const updateUser = (id, newUserData) => {
  let identificador = Number(id);
  var userData = data.find((person) => person.id === identificador);
  if (!userData) {
    return `User ${id} doesnt exist`;
  }
  userData.first_name = newUserData.first_name;
  userData.last_name = newUserData.last_name;
  userData.email = newUserData.email;
  return userData;
};

const deleteUser = (id) => {
  let identificador = Number(id);
  let userToDelete = data.find((person) => person.id === identificador);
  if (!userToDelete) {
    return `User ${id} doesnt exist`;
  }else{
    delete data[identificador-1];
    return userToDelete;
  }
}

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
};
