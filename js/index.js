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
    setTimeout(() => {
        logo.style.color = 'green';
      }, 1500);
});

// key down

const backgroundColor = document.querySelector('html');
backgroundColor.addEventListener('keydown', () => {
    backgroundColor.style.background = '#F7AEF8';
    // adds a color gradient on reset
    setTimeout(() => {
        backgroundColor.style.background = "lightgreen";
        alert ("Damnit, you broke something. Click \"OK\" to fix it!");
    }, 100);
    
    // changes colors 
    setInterval( ()=> {
        backgroundColor.style.background = '#8093F1';
    }, 200);
    setInterval( ()=> {
        backgroundColor.style.background = '#F43B38';
    }, 300);
    setInterval ( ()=>{
        backgroundColor.style.background = '#F7AEF8';
    }, 400);
    setInterval ( ()=> {
        backgroundColor.style.background = '#72DDF7';
    }, 500);
    setTimeout (()=>{
        alert ("Yeah, you really broke things... click \"OK\" and then press the SPACEBAR to fix it!")
    },10000);
});

// Custom Key Down
backgroundColorBody = document.querySelector('body');
backgroundColorBody.addEventListener('keydown', function(){
    if (event.keyCode == '32') {
        backgroundColorBody.style.background = "white";
    }
});