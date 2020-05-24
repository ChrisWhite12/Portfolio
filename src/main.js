if (window.matchMedia("(max-width: 800px)").matches)        //small screen
{
    var markup = `<li><img src="./img/menu.svg" alt="menu" class="menu_nav"></li>`
    var markup2 = `<div class="main_menu">
                        <ul class="drop_menu_list">
                            <li><a href="./home.html" class="home_nav">Home</a></li>
                            <li><a href="./projects.html" class="projects_nav">Projects</a></li>
                            <li><a href="./blog.html" class="blog_nav">Blog</a></li>
                            <li><a href="./about.html" class="about_nav">About</a></li>
                            <li><a href="./contact.html" class="contact_nav">Contact</a></li>
                        </ul>
                    </div>`
    
    document.querySelector(".navbar").insertAdjacentHTML('beforeend',markup);
    document.querySelector("body").insertAdjacentHTML('beforeend',markup2);
    document.querySelector(".navbar").style = 'justify-content: flex-start';
}
else if(window.matchMedia("(min-width: 800px)").matches)    //large screen
{
    var markup = `<li><a href="./home.html" class="home_nav">Home</a></li>
    <li><a href="./projects.html" class="projects_nav">Projects</a></li>
    <li><a href="./blog.html" class="blog_nav">Blog</a></li>
    <li><a href="./about.html" class="about_nav">About</a></li>
    <li><a href="./contact.html" class="contact_nav">Contact</a></li>`
    document.querySelector(".navbar").insertAdjacentHTML('beforeend',markup)
    document.querySelector(".navbar").style = 'justify-content: space-evenly';
}

document.querySelector('.menu_nav').addEventListener('click', el => {
    console.log(document.querySelector(".main_menu").style.display)
    
    if (document.querySelector(".main_menu").style.display == 'inline-block'){
        document.querySelector(".main_menu").style.display = 'none'
        document.querySelector('.menu_nav').src = './img/menu.svg'
    }
    else{
        document.querySelector(".main_menu").style.display = 'inline-block'
        document.querySelector('.menu_nav').src = './img/close-outline.svg'
    }
})