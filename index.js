const navBar = document.querySelector("#navBar");
const hamburger = document.querySelector("#hamburger");

hamburger.addEventListener('click', () => {

    hamburger.classList.toggle("active");

    if (hamburger.classList.contains("active")) {
    hamburger.src = "../images/icon-close.svg";
    toggle();
    } 
    
    else {
    hamburger.src = "../images/icon-hamburger.svg";
    toggle();
    }

    nav();

})


document.onclick = (e) => {
    if(e.target !== navBar && e.target !== hamburger) {
        if(navBar.classList.contains('active') && hamburger.classList.contains('active')) {
            toggle();
            nav();
        }

        hamburger.classList.remove('active');
        hamburger.src ='../images/icon-hamburger.svg';
    }
}


function nav () {

    if (navBar.classList.contains('block') && navBar.classList.contains('active')) {
        navBar.classList.toggle('active');

        setTimeout(() => {
            navBar.classList.toggle('block');
        }, 500);
    }

    else {
    navBar.classList.toggle('block');

    setTimeout(() => {
        navBar.classList.toggle('active');
        }, 0);
    }
}

function toggle () {
    hamburger.classList.add('toggle')
  
    setTimeout(() => {
      hamburger.classList.remove('toggle')
    }, 200);
  }
  