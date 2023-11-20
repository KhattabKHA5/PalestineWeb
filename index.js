// Sample data structure for posts
let posts = [];

// Function to publish a post
function publishPost() {
    const username = document.getElementById('username').value;
    const postText = document.getElementById('post-text').value;
    const fileInput = document.getElementById('file-input');
    const selectedFile = fileInput.files[0];

    if (username && (postText || selectedFile)) {
        const newPost = {
            username: username,
            text: postText,
            file: selectedFile,
        };

        posts.push(newPost);
        displayPosts();
        clearInputFields();
    }
}

// Function to display posts
function displayPosts() {
    const postsSection = document.getElementById('postsSection');
    postsSection.innerHTML = '';

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.innerHTML = `<p><strong>${post.username}:</strong> ${post.text}</p>`;
        if (post.file) {
            // Display image/video here
            const fileType = post.file.type.startsWith('image') ? 'image' : 'video';
            postElement.innerHTML += `<${fileType} controls><source src="${URL.createObjectURL(post.file)}" type="${post.file.type}"></${fileType}>`;
        }
        postsSection.appendChild(postElement);
    });
}

// Function to clear input fields after publishing
function clearInputFields() {
    document.getElementById('username').value = '';
    document.getElementById('post-text').value = '';
    document.getElementById('file-input').value = '';
}

// You can add more functionalities and improve the code as needed
