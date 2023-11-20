document.addEventListener('DOMContentLoaded', function () {
    const postsContainer = document.getElementById('postsContainer');
    const actionsContainer = document.querySelector('.actions-container');
    const shareButton = document.getElementById('shareButton');
    const shareOptions = document.getElementById('shareOptions');
    const savedUserName = localStorage.getItem('userName');
    let userName;

    if (savedUserName) {
        userName = savedUserName;
    } else {
        userName = prompt('مرحبًا! الرجاء إدخال اسمك:');
        localStorage.setItem('userName', userName);
    }

    fetchAndDisplayPosts();

    function fetchAndDisplayPosts() {
        // استرجاع المنشورات من Local Storage
        const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
        savedPosts.forEach(post => createPost(post.content, post.userName, post.file));
    }

    function toggleShareOptions() {
        shareOptions.style.display = shareOptions.style.display === 'flex' ? 'none' : 'flex';
    }

    function shareText() {
        const textContent = prompt('أدخل النص:');
        if (textContent) {
            createPost('اسم الناشر: ' + userName + '<br>' + textContent, userName);
            toggleShareOptions();
        }
    }

    function shareMedia() {
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/*, video/*';

        fileInput.addEventListener('change', function () {
            const file = fileInput.files[0];
            if (file) {
                const textContent = prompt('أدخل نصاً للصورة أو الفيديو:');
                if (textContent) {
                    createPost('اسم الناشر: ' + userName + '<br>' + textContent, userName, file);
                    toggleShareOptions();
                }
            }
        });

        fileInput.click();
    }

    function createPost(content, userName, file) {
        const postElement = document.createElement('div');
        postElement.classList.add('post');

        if (file) {
            const mediaElement = document.createElement(file.type.startsWith('image') ? 'img' : 'video');
            mediaElement.src = URL.createObjectURL(file);
            mediaElement.controls = true;
            mediaElement.style.width = '100%';
            postElement.appendChild(mediaElement);
        }

        const postContentElement = document.createElement('div');
        postContentElement.classList.add('post-content');
        postContentElement.innerHTML = content;

        // أضف زر حذف
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        deleteButton.textContent = 'حذف';

        deleteButton.addEventListener('click', function () {
            postsContainer.removeChild(postElement);
            savePosts();
        });

        // أضف زر تعليق
        const commentButton = document.createElement('button');
        commentButton.classList.add('comment-button');
        commentButton.textContent = 'تعليق';

        commentButton.addEventListener('click', function () {
            const commentContent = prompt('أدخل تعليق:');
            if (commentContent) {
                const commentElement = document.createElement('div');
                commentElement.innerHTML = '<strong>' + userName + ':</strong> ' + commentContent;
                postContentElement.appendChild(commentElement);
                savePosts();
            }
        });

        postElement.appendChild(postContentElement);
        postElement.appendChild(deleteButton);
        postElement.appendChild(commentButton);

        postsContainer.appendChild(postElement);

        // حفظ المنشورات في Local Storage
        savePosts();
    }

    function savePosts() {
        const allPosts = Array.from(document.querySelectorAll('.post')).map(postElement => {
            const content = postElement.querySelector('.post-content').innerHTML;
            const fileElement = postElement.querySelector('img, video');
            const file = fileElement ? fileElement.src : null;

            return { content, userName, file };
        });

        localStorage.setItem('posts', JSON.stringify(allPosts));
    }
});
