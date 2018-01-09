function getRepositories() {
  const req = new XMLHttpRequest()
  req.open("GET", 'https://api.github.com/users/octocat/repos')
  req.send()
}

function showRepositories(event, data) {
  var repos = JSON.parse(this.responseText)
  console.log(repos)
  const repoList = `<ul>${repos.map(r => '<li>' + r.name + '</li>').join('')}</ul>`
  document.getElementById("repositories").innerHTML = repoList
}
//   let repoList = "<ul>"
//   for(var i = 0; i < this.responseText.length; i++) {
//     repoList += "<li>" + this.responseText[i]["name"] + "</li>"
//   }
//   repoList += "</ul>"
//   document.getElementById("repositories").innerHTML = repoList
// }
