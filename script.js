window.onscroll = function() {myFunction()};
var header = document.getElementById("myHeader");
var sticky = header.offsetTop;
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}


const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'parent');

for (i = 1; i < 121; i++) {
  var item = document.createElement("div");
  item.setAttribute('class', 'item');

  item.appendChild(document.createTextNode("Element "+i+""));
  container.appendChild(item);
}

app.appendChild(container);
