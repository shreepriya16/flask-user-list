// Fetch data from Flask backend
fetch('/users')     // calls the be route /users
    .then(response => response.json())     //converts the json data into js object
    .then(data => {
        const userList = document.getElementById('userList');
        data.forEach(user => {
            const li = document.createElement('li');
            li.textContent = user.name;
            userList.appendChild(li);
        });
    })
    .catch(error => console.error('Error fetching users:', error));