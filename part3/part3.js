let container = document.getElementById("data");
let request = new XMLHttpRequest();
request.open("GET", "https://reqres.in/api/users?page=2");
request.send();
// console.log(request);
request.onload = function () {
  // console.log(request.readyState);
  // console.log(request.status);
  if (this.readyState === 4 && this.status === 200) {
    // console.log(this.responseText);
    let jsData = JSON.parse(this.responseText);
    console.log(jsData.data);
    for (let i = 0; i < jsData.data.length; i++) {
      let div = document.createElement("div");
      div.className = "div-style";
      let image = document.createElement("img");
      image.className = "img-style";
      image.setAttribute("src", jsData.data[i].avatar);
      div.appendChild(image);
      let span = document.createElement("span");
      span.className = "span-style";
      let spanText = document.createTextNode(`UserName : ${jsData.data[i].first_name} ${jsData.data[i].last_name}`);
      span.appendChild(spanText);
      div.appendChild(span);
      let email = document.createElement("a");
      email.className = "email-style";
      email.setAttribute("href", jsData.data[i].email);
      let emailText = document.createTextNode(`Email : ${jsData.data[i].email}`);
      email.appendChild(emailText);
      div.appendChild(email);
      container.appendChild(div);
    }
  }
};
