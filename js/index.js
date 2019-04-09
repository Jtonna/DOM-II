// Your code goes here
const siteContent = {
    '.main-navagation': {
      'nav-item-1': 'Services',
      '': '',
    }
}

// mouse over

const logo = document.querySelector('.logo-heading');
logo.addEventListener('mouseover', () => { 
    logo.style.color = 'red';
    // reset the color after a short delay
    setTimeout(function() {
        logo.style.color = 'green';
      }, 1500);
    }, false);