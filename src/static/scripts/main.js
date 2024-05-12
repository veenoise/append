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

// Filter button interaction
document.addEventListener('DOMContentLoaded', function() {
  let filterClick = 0;
  document.querySelector('#filter').addEventListener('click', function () {
    if (filterClick % 2 === 0) {
      document.querySelector('#filterOptions').style.display = 'block';
    } else {
      document.querySelector('#filterOptions').style.display = 'none';
    }

    filterClick++;
  })  
});