const express = require("express");

const Services = require("./src/service");

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (request, response) => {
  response.json({
    message: "User list",
    body: Services.getUsers(),
  });
});

app.get("/:id", (request, response) => {
  let {
    params: { id },
  } = request; //another method: let id = request.params.id;
  let user = Services.getUser(id);
  response.json({
    message: `User ${id}`,
    body: user,
  });
});

app.post("/", (request, response) => {
  let { body: newUser } = request;
  let user = Services.createUser(newUser);
  response.status(201).json({
    message: "User created",
    body: user,
  });
});

app.put("/:id", (request, response) => {
  const user = Services.getUser(request.params.id);
  let { params: { id }  } = request;
  let { body: newUserData } = request;
  let userModified;

  if (!user) {
    response.status(404).json({
      message: `User ${id} cannot find`
    });
    
  } else {
    userModified = Services.updateUser(id, newUserData);
  }

  response.status(201).json({
    message: `User ${id} modified`,
    body: userModified,
  });
});

app.delete("/:id", (request, response) => {
  const user = Services.getUser(request.params.id);
  let { params: { id }  } = request;
  if (!user) {
    response.status(404).json({
      message: `User ${id} doesnt exist`
    });
  } else {
    userDelete = Services.deleteUser(id);
  }
  response.status(201).json({
    message: `User ${id} deleted`,
    body: userDelete,
  });
});

app.listen(PORT, () => {
  console.log(`Server created on: http://localhost:${PORT}/`);
});
