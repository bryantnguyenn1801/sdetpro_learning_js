async function fetchAndPrintPostContent(userId, postId) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        const post = await response.json();
        if (post.userId == userId) {
            console.log(`Title: ${post.title}`);
            console.log(`Body: ${post.body}`);
        } else {
            console.log('No post found for the given User ID and Post ID.');
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

async function fetchAndPrintAllPosts(userId) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        const posts = await response.json();
        console.log(`All posts by User ID ${userId}:`);
        posts.forEach(post => {
            console.log(`\nTitle: ${post.title}`);
            console.log(`Body: ${post.body}`);
        });
    } catch (error) {
        console.error('Error:', error);
    }
}

async function main() {
    const prompt = require('prompt-sync')({ sigint: true });
    const userId = prompt('Please enter userId:');
    const postId = prompt('Please enter postId:');

    await fetchAndPrintPostContent(userId, postId)
    await fetchAndPrintAllPosts(userId);

}

main();