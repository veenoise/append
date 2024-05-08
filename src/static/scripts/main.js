document.querySelector('#menuButton').addEventListener('click', function() {
  document.querySelector('.sidebar').style.display = "block";
});

document.querySelector('#closeMenu').addEventListener('click', function() {
  document.querySelector('.sidebar').style.display = "none";
});