function fetchAndPrintPostContent(userId, postId) {

    return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => response.json())
        .then(postContent => {
            console.log('...Doing lab 9.1...\n');
            if (postContent.userId == userId) {
                console.log(`Title: ${postContent.title}`);
                console.log(`Body: ${postContent.body}`);
            } else {
                console.log('Nothing found');
            }
        })
        .catch(error => console.error('Error:', error));
}

function fetchAndPrintAllPosts(userId) {
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then(response => response.json())
        .then(postsContents => {
            console.log('...Doing lab 9.2...\n');

            console.log(`All posts by userID ${userId}:`);
            postsContents.forEach(post => {
                console.log(`\nTitle: ${post.title}`);
                console.log(`Body: ${post.body}`);
            });
        })
        .catch(error => console.error('Error:', error));
}

function main() {
    const prompt = require('prompt-sync')({ sigint: true });
    new Promise((resolve) => {
        const userId = prompt('Please enter userId:');
        const postId = prompt('Please enter postId:');
        resolve({ userId, postId });
    })
        .then(({ userId, postId }) => {
            return fetchAndPrintPostContent(userId, postId)
                .then(() => fetchAndPrintAllPosts(userId));
        });
}

main();