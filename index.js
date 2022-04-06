//fetch the data from json
async function getUsers() {
  let response = await fetch(`users.json`);
  let users = await response.json();
  return users;
}

//make getUserDiv a function that takes the user input and returns divs of username and others
function getUserDiv(user) {
  return `<div id="my-online-user">

  <div id="user-username">${user.username}</div>
  
  <div id="user-online"></div> 
  
  </div>`;
}

//we call back our fetched getUsers function from the first line of code and to say that we want to get the username for the first user indicated by users[0]

//then we make a userDiv variable that's equal to the getUserDiv function we created in line 9 that takes the sampleUser input we just made in line 23 which is the first user (which is indicated by an index of 0)

//then we say the inner html of our div with an id of users that we created in index.html is equal to a new div id called my online users which takes in all the users and maps them with an input of user so that each user in users is called then it calls the getUserDiv function in line 9 and makes it based on user and we put a .join to get rid of excess

//${users.map((user) => {getUserDiv(user) will make it return the divs from line 10 through 16 for all the users which is only the username so far

getUsers().then((users) => {
  let sampleUser = users[0];
  let userDiv = getUserDiv(sampleUser);
  document.getElementById(
    `users`
  ).innerHTML = `<div id="my-online-users">${users
    .map((user) => {
      return getUserDiv(user);
    })
    .join(``)}</div>`;
});
//here we make a div to display our online users and usernames received from our fetched json
