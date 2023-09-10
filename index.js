let UserId;
function userName() {
  let UserName = prompt("please Enter Your UserName", "");
  if(UserName == null || UserName == "")
  {
    userName();

  }else {
    UserId = UserName;
  }
}
userName();

async function getData() {
  //const person = "mohamed000123";
  let response = await fetch(`https://api.github.com/users/${UserId}`);
  personData = await response.json();
  console.log(personData);
  let followersResponse = await fetch(personData.followers_url);
  let follwers = await followersResponse.json()
  console.log(follwers)
  
  for(let i=0; i<follwers.length;i++){
    const followersCont = document.getElementById("followers");
    followersCont.innerHTML += `
<h2> ${follwers[i].login} </h2>
<h2> ${follwers[i].id} </h2>
<a href=${follwers[i].html_url}> profile link: </a>
<h2> Type: ${follwers[i].type} </h2>
<img src=${follwers[i].avatar_url}/>
<hr>
`;
  }

  const container = document.getElementById("container");
  container.innerHTML = `
<h2> ${personData.name} </h2>
<h2> ${personData.login} </h2>
<a href=${personData.html_url}> profile link: </a>
<h2> folders number: ${personData.public_repos} </h2>
<img src=${personData.avatar_url}/>
<hr>
`;
}
getData();
