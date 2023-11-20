document.addEventListener('DOMContentLoaded', function () {
  const publishBtn = document.getElementById('publish-btn');
  const publishOptions = document.getElementById('publish-options');
  const textInput = document.getElementById('text-input');
  const mediaInput = document.getElementById('media-input');
  const textPublishBtn = document.getElementById('text-publish-btn');
  const mediaPublishBtn = document.getElementById('media-publish-btn');
  const postsContainer = document.getElementById('posts-container');

  publishBtn.addEventListener('click', function () {
    publishOptions.style.display = 'block';
  });

  textPublishBtn.addEventListener('click', function () {
    const textContent = document.getElementById('text-content').value;
    createTextPost(textContent);
  });

  mediaPublishBtn.addEventListener('click', function () {
    const mediaFile = document.getElementById('media-file').files[0];
    const mediaCaption = document.getElementById('media-caption').value;
    createMediaPost(mediaFile, mediaCaption);
  });

  function createTextPost(content) {
    const post = document.createElement('div');
    post.className = 'post';
    post.innerHTML = `<p>${content}</p><span class="delete-btn" onclick="deletePost(this)">حذف</span>`;
    postsContainer.appendChild(post);
    resetInputs();
  }

  function createMediaPost(file, caption) {
    const post = document.createElement('div');
    post.className = 'post';
    const mediaElement = file.type.includes('image')
      ? `<img src="${URL.createObjectURL(file)}" alt="صورة" class="media-item">`
      : `<video src="${URL.createObjectURL(file)}" controls class="media-item"></video>`;
    post.innerHTML = `${mediaElement}<p>${caption}</p><span class="delete-btn" onclick="deletePost(this)">حذف</span>`;
    postsContainer.appendChild(post);
    resetInputs();
  }

  function resetInputs() {
    document.getElementById('text-content').value = '';
    document.getElementById('media-file').value = '';
    document.getElementById('media-caption').value = '';
    publishOptions.style.display = 'none';
    textInput.style.display = 'none';
    mediaInput.style.display = 'none';
  }

  window.deletePost = function (deleteBtn) {
    const post = deleteBtn.parentNode;
    postsContainer.removeChild(post);
  };
});
