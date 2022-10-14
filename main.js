let arrayOfUsers = [];

window.onload = function() {
    getUsers()
  }

const getUsers = () => {
    fetch('https://randomuser.me/api/')
    .then((res) => res.json())
    .then(function(user) {
        const randomUser = user.results[0]
        arrayOfUsers.push(randomUser)
    })
    .catch(error => {throw(error)})
}

const consoleUsers = () => {
    console.log(arrayOfUsers)
}

const fetchMe = document.getElementById('fetch-button');

fetchMe.addEventListener('click', function(){
    fetch('https://randomuser.me/api/')
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
            console.log(data.results)
            const randomUser = document.getElementById('all-users')
            const d = data.results[0]
            randomUser.innerHTML = `
            <img src="${d.picture.large}"> <br>
            Name: ${d.name.first} <br>
            Age: ${d.dob.age} <br>
            Email: ${d.email} <br>
            Mobile: ${d.cell}
            `;
        });
})