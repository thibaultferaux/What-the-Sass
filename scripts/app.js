const topBar = document.querySelector('.headerContainer');
const navBar = document.querySelector('.navigation');
const logo = document.querySelector('.logo img');
const links = document.querySelector('.link');

const setStickyNavbar = () => {
    const offsetNavBar = navBar.offsetTop + navBar.offsetHeight;
    const offsetTopBar = topBar.offsetTop + topBar.offsetHeight;
    if(window.innerWidth <= 1024) {
        if(window.pageYOffset > offsetTopBar) {
            setStyling("fixed", "70px", "center", "5px 12% 5px 15px", "./img/logo_sticky.svg");
            logo.classList.remove('hide');
            links.classList.add('hide');
            navBar.classList.remove('hide');
        }
        else if(window.pageYOffset === 0) {
            setStyling("absolute", "90px", "flex-start", "15px 12%", "./img/logo.svg");
            logo.classList.remove('hide');
            links.classList.add('hide');
            navBar.classList.remove('hide');
        }
    } else {
        if(window.pageYOffset > offsetNavBar) {
            setStyling("fixed", "70px", "center", "5px 10% 5px 15px", "./img/logo.svg");
            logo.classList.add('hide');
            links.classList.remove('hide');
            navBar.classList.add('hide');
        }
        else if(window.pageYOffset === 0) {
            setStyling("absolute", "90px", "flex-start", "15px 12%", "./img/logo.svg");
            logo.classList.remove('hide');
            links.classList.add('hide');
            navBar.classList.remove('hide');
        }
    }
}

const setStyling = (position, height, align, padding, src) => {
    topBar.style.position = position;
    topBar.style.height = height;
    topBar.style.alignItems = align;
    topBar.style.padding = padding;
    logo.src = src;
}


document.addEventListener('scroll', () => {
    if(window.innerWidth > 768) setStickyNavbar();
});

window.addEventListener('resize', () => {
    if(window.innerWidth > 768) setStickyNavbar();
    else {
        setStyling("fixed", "55px", "center", "10px 15px", "./img/logo.svg");
    };
});