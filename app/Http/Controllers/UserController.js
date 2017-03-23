'use strict'

class UserController {

  * index(request, response) {
    const users = yield User.all()
    response.JSON(users)
  }

  * create(request, response) {
    //
  }

  * store(request, response) {
  // const username = request.only('username', 'password'),username
  // const password = request.only('username', 'password'),password
  const { email, username, password } = request.only('email', 'username', 'password');

  const user = yield User.create({ email, username, password: yield Hash.make(password) });

  response.send(user);
}

  * show(request, response) {
    //
  }

  * edit(request, response) {
    //
  }

  * update(request, response) {
    //
  }

  * destroy(request, response) {
    //
  }

}

module.exports = UserController
