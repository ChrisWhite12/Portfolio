ruby_i = document.querySelector(".ruby_icon");
html_i = document.querySelector(".html_icon");
css_i = document.querySelector(".css_icon");
js_i = document.querySelector(".js_icon");

if (window.matchMedia("(min-width: 800px)").matches)
{
    document.querySelector(".project1").addEventListener('mouseover',el => {
        ruby_i.style = 'animation: icon_hover_in 1s linear 0s 1 normal both;';
    })
    
    document.querySelector(".project1").addEventListener('mouseleave',el => {
        ruby_i.style = 'animation: icon_hover_out 1s linear 0s 1 normal both;';
    })
    //----------------------------------------------------------------------------
    document.querySelector(".project3").addEventListener('mouseover',el => {
        
        html_i.style = 'animation: icon_hover_in 1s linear 0s 1 normal both;'; 
        css_i.style = 'animation: icon_hover_in 1s linear 0s 1 normal both;';
        js_i.style = 'animation: icon_hover_in 1s linear 0s 1 normal both;';
    })
    
    document.querySelector(".project3").addEventListener('mouseleave',el => {
        html_i.style = 'animation: icon_hover_out 1s linear 0s 1 normal both;';
        css_i.style = 'animation: icon_hover_out 1s linear 0s 1 normal both;';
        js_i.style = 'animation: icon_hover_out 1s linear 0s 1 normal both;';
    })
    //-----------------------------------------------------------------------------
    document.querySelector(".project2").addEventListener('mouseover',el => {
        html_i.style = 'animation: icon_hover_in 1s linear 0s 1 normal both;'; 
        css_i.style = 'animation: icon_hover_in 1s linear 0s 1 normal both;';
    })
    
    document.querySelector(".project2").addEventListener('mouseleave',el => {
        html_i.style = 'animation: icon_hover_out 1s linear 0s 1 normal both;';
        css_i.style = 'animation: icon_hover_out 1s linear 0s 1 normal both;';
    })

}


    