// alert("message");

let fSubmit = document.querySelector(".submit");
fSubmit.onclick = function (e) {
  var userInput = document.getElementById("user-name");
  var userValue = userInput.value;
  let userRe = /^([a-z0-9_\.]){8,20}$/gi;
  let userValidate = userRe.test(userValue);
  var pass = document.getElementById("pw");
  let passValue = pass.value;
  let passRe = /(?=(.*[1-9]))(?=(.*[a-z]))(?=.*[\!@#$%^&*\()\-\\_+=,:;<>\}\{\[\]|?]){8,}/gi;
  let testValidate = passRe.test(passValue);

  if (testValidate === true && userValidate === true) {
    console.log("welcome");
    var resultContainer = document.createElement("p");
    console.log(resultContainer);
    var resultValue = document.createTextNode("Welcome");
    console.log(resultValue);
    resultContainer.appendChild(resultValue);
    resultContainer.classList.add("style");
    var divContainer = document.getElementById("result");
    document.body.appendChild(resultContainer, divContainer);
    console.log(divContainer);
    divContainer.appendChild(resultContainer);
    document.body.appendChild(divContainer);
    return true;
  } else {
    var resContainer = document.createElement("p");
    var resValue = document.createTextNode("Enter Valid Data");
    resContainer.appendChild(resValue);
    var divContainer = document.getElementById("result");
    resContainer.classList.add("style");
    divContainer.appendChild(resContainer);
    document.body.appendChild(divContainer);
    console.log("Enter Valid Data");
    e.preventDefault();
  }
};

// function data(event) {
//   var userInput = document.getElementById("user-name");
//   var val = document.getElementById("pw");
//   var userName = "admin";
//   var password = "123";
//   var userValue = userInput.value;
//   var inp = val.value;
//   // console.log(password);
//   // console.log(inp);
//   // console.log(userName);
//   // console.log(userValue);
//   // console.log(typeof password);
//   // console.log(typeof inp);
//   // console.log(typeof userName);
//   // console.log(typeof userValue);
//   if (userValue === userName && inp === password) {
//     console.log("welcome");
//     var resultContainer = document.createElement("p");
//     console.log(resultContainer);
//     var resultValue = document.createTextNode("Welcome");
//     console.log(resultValue);
//     resultContainer.appendChild(resultValue);
//     resultContainer.classList.add("style");
//     var divContainer = document.getElementById("result");
//     document.body.appendChild(resultContainer, divContainer);
//     console.log(divContainer);
//     divContainer.appendChild(resultContainer);
//     document.body.appendChild(divContainer);
//   } else {
//     // var resContainer = document.createElement("p");
//     // var resValue = document.createTextNode("not registered");
//     // resContainer.appendChild(resValue);
//     // var divContainer = document.getElementById("result");
//     // resContainer.classList.add("style");
//     // divContainer.appendChild(resContainer);
//     // document.body.appendChild(divContainer);
//     console.log("not registered");
//   }
//   event.preventDefault;
// }
//=============================================================================

