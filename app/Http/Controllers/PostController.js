'use strict'

class PostController {
  * store(request, response) {
    const input = request.only('body');
    input.user_id = request.authUser.id;

    const newPost = yield newPost.create(input);
    yield newPost.related('user').load();
    response.status(201).json(newPost);
  }
}

module.exports = PostController
