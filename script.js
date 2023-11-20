
document.addEventListener('DOMContentLoaded', function () {
    const postButton = document.getElementById('postButton');
    const postsContainer = document.getElementById('postsContainer');

    postButton.addEventListener('click', function () {
        const postType = prompt('اختر نوع المنشور: "نص" أو "فيديو/صورة"');
        
        if (postType) {
            if (postType.toLowerCase() === 'نص') {
                const textContent = prompt('أدخل النص:');
                if (textContent) {
                    createPost('نص: ' + textContent);
                }
            } else if (postType.toLowerCase() === 'فيديو/صورة') {
                const fileInput = document.createElement('input');
                fileInput.type = 'file';
                fileInput.accept = 'image/*, video/*';

                fileInput.addEventListener('change', function () {
                    const file = fileInput.files[0];
                    if (file) {
                        const textContent = prompt('أدخل نصاً للصورة أو الفيديو:');
                        if (textContent) {
                            createPost('صورة/فيديو: ' + textContent, file);
                        }
                    }
                });

                fileInput.click();
            } else {
                alert('اختيار غير صالح');
            }
        }
    });

    function createPost(content, file) {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = content;

        if (file) {
            const mediaElement = document.createElement(file.type.startsWith('image') ? 'img' : 'video');
            mediaElement.src = URL.createObjectURL(file);
            mediaElement.controls = true;
            mediaElement.style.width = '100%';
            postElement.appendChild(mediaElement);
        }

        postsContainer.appendChild(postElement);
    }
});
