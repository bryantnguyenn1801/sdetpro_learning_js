const PostController = require('./Controller');

const BASE_URL = 'https://jsonplaceholder.typicode.com';
const SLUG = '/posts';

main();

async function main() {
    const userId = 1;
    const postId = 1;

    const postController = new PostController(BASE_URL, SLUG);

    const allPostsByUserId = await postController.getAllPostsUserId(userId);
    console.log(`All posts for user ${userId}`);
    console.log(allPostsByUserId);

    const post = await postController.getPostByUserIdAndPostId(userId, postId);
    console.log(`PostId ${postId}'s content:`);
    console.log(post);
}

