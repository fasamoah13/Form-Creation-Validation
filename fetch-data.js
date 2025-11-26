// Async function to fetch and display user data
async function fetchUserData() {
    // API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Select the data container
    const dataContainer = document.getElementById('api-data');

    try {
        // Fetch data from API
        const response = await fetch(apiUrl);
        const users = await response.json();

        // Clear loading message
        dataContainer.innerHTML = '';

        // Create a list element
        const userList = document.createElement('ul');

        // Loop through users and add each name to the list
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Append list to the container
        dataContainer.appendChild(userList);

    } catch (error) {
        // Error handling
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
    }
}

// Run fetchUserData after the DOM loads
document.addEventListener('DOMContentLoaded', fetchUserData);
