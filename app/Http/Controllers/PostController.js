'use strict'

class PostController {

  * index(request, response) {
    const allPosts = yield allPosts.with('posts').fetch();
    response.json(allPosts);
  }

  * store(request, response) {
    const input = request.only('body');
    input.user_id = request.authUser.id;

    const newPost = yield newPost.create(input);
    yield newPost.related('user').load();
    response.status(201).json(newPost);
  }
}

module.exports = PostController
