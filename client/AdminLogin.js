document.getElementById('AdminLogin').addEventListener('click',() => {
  console.log("clicked");
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "https://cuddly-palm-tree-vx56vw5qpj92x46q-8088.app.github.dev/LoginCheck", true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        let body = JSON.parse(xhr.responseText);
        console.log(body);
        sessionStorage.setItem("token",body.token);

        location.reload();
      }
      else{
        alert("Wrong User Password");
      }
    }
  };
  
  xhr.send(
    JSON.stringify({
        UserEmail: document.getElementById('userName').value,
        UserPassword: document.getElementById('userPassword').value,
    })
  );
});

if(sessionStorage.getItem("token") != null){
  document.getElementById("LoginAndLogOut").innerHTML = `
    <i class="fa-solid fa-user" onclick=LogOut()></i> LogOut
    `;
}
function LogOut(){
  sessionStorage.removeItem("token");
  location.reload();
}




