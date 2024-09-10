class Post {
    constructor(userId, id, title, body) {
        this._title = title;
        this._body = body;
        this._userId = userId;
        this._id = id;
    }
}

module.exports = Post;