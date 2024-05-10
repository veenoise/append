document.querySelector('#menuButton').addEventListener('click', function() {
  document.querySelector('.sidebar').style.display = "block";
});

document.querySelector('#closeMenu').addEventListener('click', function() {
  document.querySelector('.sidebar').style.display = "none";
});

// User icon iteraction
let userIconClick = 0;
document.querySelector('#userIcon').addEventListener('click', function() {
  if (userIconClick % 2 === 0) {
    document.querySelector('#userOptions').style.display = "block";
  } else {
    document.querySelector('#userOptions').style.display = "none";
  }

  userIconClick++;
})
