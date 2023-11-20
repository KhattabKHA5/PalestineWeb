body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f8f8f8;
}

.container {
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
    background-color: #fff;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
}

.sidebar {
    width: 20%;
    background-color: #3498db;
    padding: 20px;
    color: #fff;
    text-align: center;
}

.sidebar #userName {
    margin-bottom: 20px;
    font-size: 18px;
    font-weight: bold;
    color: #fff;
}

.sidebar button {
    background-color: #2ecc71;
    color: #fff;
    padding: 12px;
    border: none;
    cursor: pointer;
    width: 80%;
    margin-top: 20px;
    font-size: 16px;
    transition: background-color 0.3s ease;
}

.sidebar button:hover {
    background-color: #27ae60;
}

.main-content {
    width: 80%;
    padding: 20px;
    display: flex;
    flex-direction: column; /* عرض المنشورات بشكل عمودي */
    align-items: center; /* محاذاة المنشورات في وسط الصفحة */
}

.post {
    position: relative;
    width: 80%; /* تحديد عرض المنشور */
    margin-bottom: 20px;
    border: 1px solid #ddd;
    padding: 15px;
    box-sizing: border-box;
    background-color: #fff;
    border-radius: 8px;
    transition: box-shadow 0.3s ease;
}

.post:hover {
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
}

.post img, .post video {
    max-width: 100%;
    height: auto;
    border-radius: 6px;
    margin-top: 10px;
    transition: transform 0.3s ease;
}

.post img.enlarged, .post video.enlarged {
    transform: scale(1.2);
}

.post .delete-button {
    position: absolute;
    top: 5px;
    right: 5px;
    background-color: #e74c3c;
    color: #fff;
    padding: 5px;
    border: none;
    cursor: pointer;
    border-radius: 50%;
    font-size: 12px;
    display: none;
}

.post:hover .delete-button {
    display: block;
}
