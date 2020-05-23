document.querySelector(".project1").addEventListener('mouseover',el => {
    ruby = document.querySelector(".ruby_icon");
    ruby.style = 'filter: grayscale(0%);';
})

document.querySelector(".project1").addEventListener('mouseleave',el => {
    ruby = document.querySelector(".ruby_icon");
    ruby.style = 'filter: grayscale(100%);';
})
//----------------------------------------------------------------------------
document.querySelector(".project3").addEventListener('mouseover',el => {
    html_i = document.querySelector(".html_icon");
    html_i.style = 'filter: grayscale(0%);'; 
    css_i = document.querySelector(".css_icon");
    css_i.style = 'filter: grayscale(0%);';
    js_i = document.querySelector(".js_icon");
    js_i.style = 'filter: grayscale(0%);';
})

document.querySelector(".project3").addEventListener('mouseleave',el => {
    html_i = document.querySelector(".html_icon");
    html_i.style = 'filter: grayscale(100%);';
    css_i = document.querySelector(".css_icon");
    css_i.style = 'filter: grayscale(100%);';
    js_i = document.querySelector(".js_icon");
    js_i.style = 'filter: grayscale(100%);';
})
//-----------------------------------------------------------------------------
document.querySelector(".project2").addEventListener('mouseover',el => {
    html_i = document.querySelector(".html_icon");
    html_i.style = 'filter: grayscale(0%);'; 
    css_i = document.querySelector(".css_icon");
    css_i.style = 'filter: grayscale(0%);';
})

document.querySelector(".project2").addEventListener('mouseleave',el => {
    html_i = document.querySelector(".html_icon");
    html_i.style = 'filter: grayscale(100%);';
    css_i = document.querySelector(".css_icon");
    css_i.style = 'filter: grayscale(100%);';
})

    