let container = document.getElementById("data");
fetch("https://reqres.in/api/users?page=2")
  .then((result) => {
    console.log(result);
    let data = result.json();

    return data;
  })
  .then((myData) => {
    for (let i = 0; i < myData.data.length; i++) {
      let div = document.createElement("div");
      div.className = "div-style";
      let image = document.createElement("img");
      image.className = "img-style";
      image.setAttribute("src", myData.data[i].avatar);
      div.appendChild(image);
      let span = document.createElement("span");
      span.className = "span-style";
      let spanText = document.createTextNode(`UserName : ${myData.data[i].first_name} ${myData.data[i].last_name}`);
      span.appendChild(spanText);
      div.appendChild(span);
      let email = document.createElement("a");
      email.className = "email-style";
      email.setAttribute("href", myData.data[i].email);
      let emailText = document.createTextNode(`Email : ${myData.data[i].email}`);
      email.appendChild(emailText);
      div.appendChild(email);
      container.appendChild(div);
    }
  });
