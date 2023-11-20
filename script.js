document.addEventListener('DOMContentLoaded', function () {
    const postButton = document.getElementById('postButton');
    const postsContainer = document.getElementById('postsContainer');

    postButton.addEventListener('click', function () {
        const postContent = prompt('أدخل نص, صورة, أو رابط فيديو:');
        if (postContent) {
            const postElement = document.createElement('div');
            postElement.classList.add('post');

            // اضف الكود هنا لعرض المحتوى بناءً على نوعه (نص، صورة، أو فيديو)

            postsContainer.appendChild(postElement);
        }
    });
});