window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

function inputRecv1() {
  const x = document.getElementById("input-1");
  /*var text = "";
  var i;
  for (i = 0; i < x.length; i++) {
    text += x.elements[i].value + "<br>";
  }*/
  let y = document.forms["input-1"]["fname"].value;
  if (y.includes("<")) {
    //
  }
  else {
    document.getElementById("xss-1").innerHTML = "Hello, " + x.elements[0].value;
  }
}

function inputRecv2() {
  const x = document.getElementById("input-2");
  /*var text = "";
  var i;
  for (i = 0; i < x.length; i++) {
    text += x.elements[i].value + "<br>";
  }*/
  document.getElementById("xss-1").innerHTML = "Hello, " + x.elements[0].value;
}

function validateForm() {
  let x = document.forms["input-1"]["fname"].value;
  if (x.includes("<")) {
    return false;
  }
}

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  let user = getCookie("username");
  if (user != "") {
    //Do nothing 

  } else {
    user = prompt("Please enter your name:", "");
    if (user != "" && user != null) {
      setCookie("username", user, 1);
    }
  }
}