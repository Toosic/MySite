function mobileMenu()
{
    let menu = document.querySelector('.header ul');
    let btn = document.querySelector('.header button');

    if(btn.innerText === 'MENU')
    {
        menu.style.display = 'block';
        btn.innerText = 'CLOSE';
    }
    else
    {
        menu.style.display = 'none';
        btn.innerText = 'MENU';
    }
}

function mobileMenuu(){
    let menu = document.querySelector('.header ul');
    let btn = document.querySelector('.header button');

    if(btn.innerText === 'MENI')
    {
        menu.style.display = 'block';
        btn.innerText = 'ZATVORI';
    }
    else
    {
        menu.style.display = 'none';
        btn.innerText = 'MENI';
    }
}

function git()
{
    window.open('https://github.com/Toosic')
}

function disc(){
    window.open('https://discord.com/channels/@me')
}

function fb(){
    window.open('https://www.facebook.com/stefan.tosic.902')
}

function insta(){
    window.open('https://www.instagram.com/_tosic10/')
}

function scrollInot(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
}

function scrollAbout(){
    window.scrollTo({
        top: 840,
        left: 0,
        behavior: 'smooth'
      });
}

function scrollSkills(){
    window.scrollTo({
        top: 1890,
        left: 0,
        behavior: 'smooth'
      });
}

function scrollProjects(){
    window.scrollTo({
        top: 3300,
        left: 0,
        behavior: 'smooth'
      });
}

function scrollContact(){
    window.scrollTo({
        top: 5600,
        left: 0,
        behavior: 'smooth'
      });
}

function site1(){
    window.open('https://toosic.github.io/BMWM2/');
}

function site2(){
    window.open('https://toosic.github.io/EnglishProject/');
}

function site3(){
    window.open('https://toosic.github.io/DomesticAnimals/');
}


