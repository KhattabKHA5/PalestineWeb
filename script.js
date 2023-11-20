document.addEventListener('DOMContentLoaded', function () {
    const postButton = document.getElementById('postButton');
    const postsContainer = document.getElementById('postsContainer');
    const userNameElement = document.getElementById('userName');
    let userName = prompt('مرحبًا! الرجاء إدخال اسمك:');
    
    if (userName) {
        userNameElement.textContent = 'اسم: ' + userName;
    }

    postButton.addEventListener('click', function () {
        const postType = prompt('اختر نوع المنشور: "نص" أو "فيديو/صورة"');
        
        if (postType) {
            if (postType.toLowerCase() === 'نص') {
                const textContent = prompt('أدخل النص:');
                if (textContent) {
                    createPost(textContent, userName);
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
                            createPost(textContent, userName, file);
                        }
                    }
                });

                fileInput.click();
            } else {
                alert('اختيار غير صالح');
            }
        }
    });

    function createPost(content, userName, file) {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = 'اسم: ' + userName + '<br>' + content;

        if (file) {
            const mediaElement = document.createElement(file.type.startsWith('image') ? 'img' : 'video');
            mediaElement.src = URL.createObjectURL(file);
            mediaElement.controls = true;
            mediaElement.style.width = '100%';

            // أضف تكبير الصورة أو الفيديو
            mediaElement.addEventListener('click', function () {
                mediaElement.classList.toggle('enlarged');
            });

            postElement.appendChild(mediaElement);
        }

        // أضف زر حذف
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        deleteButton.textContent = 'X';

        deleteButton.addEventListener('click', function () {
            postsContainer.removeChild(postElement);
        });

        postElement.appendChild(deleteButton);

        postsContainer.appendChild(postElement);
    }
});
