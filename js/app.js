/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
sectionGenerator(4);
var divToAddLink=document.getElementById('myTopnav');
var sectionAll = document.querySelectorAll('.sectionGeneral');
var sectionClass = document.querySelectorAll('landing__container');
var fragment = document.createDocumentFragment();
var newLink;
var prevLink;

/*var t=document.getElementById('section4');
t.style.backgroundColor="red";
*/
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function myFunction() {
    
    if (divToAddLink.className === "topnav") {
        divToAddLink.className += " responsive";
    } else {
        divToAddLink.className = "topnav";
    }
  }

function sectionGenerator( numSection){
    var num=numSection;
    var addSection= document.querySelector('.mainClass');
    addSection.insertAdjacentHTML('beforeend',  '<section class="sectionGeneral" id='+'section'+num +' '+ 'data-nav='+'Section'+ num+' ><div class="landing__container"><h2>Section '+num +' '+'</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p><p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p></div></section>');


}
function topfn() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    var linkss = document.querySelectorAll("a");
    linkss.forEach(function(one){
        
            one.style.backgroundColor="#333";
        })

  }
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
var topbutton = document.getElementById("topBtn");
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("myTopnav").style.top = "0";
    topbutton.style.display = "block";
  } else {
    document.getElementById("myTopnav").style.top = "-50px";
    topbutton.style.display = "none";
  }
  prevScrollpos = currentScrollPos;
}

sectionAll.forEach(function(element){

    var newLink =document.createElement('a');
    prevLink=newLink;
    var SectionName= element.getAttribute('data-nav');
    var textNode=document.createTextNode(SectionName);
    newLink.appendChild(textNode);
    fragment.appendChild(newLink);
    

    newLink.addEventListener('click',function(e){
        
        prevLink.style.backgroundColor = "#333";
        newLink.style.backgroundColor = "blue";
        prevLink=newLink;
        e.preventDefault();
        element.scrollIntoView({behavior:"smooth"})});
        
        
        
    
});
divToAddLink.appendChild(fragment);

window.addEventListener('scroll',function(){
    sectionAll.forEach(function(section){
        var boundry=section.getBoundingClientRect();
        if (boundry.top>= -100 && boundry.top<= 200){
            sectionAll.forEach(function( setClass){
                setClass.className="normalClass";
                
      /*          var x = document.querySelectorAll("a");
                var i;
                for (i = 0; i < x.length; i++) {
                      x[i].style.backgroundColor = "#333";
}*/
            })
            section.className="activeClass";
            var links = document.querySelectorAll("a");
            links.forEach(function(oneLink){
            if (section.getAttribute('data-nav')==oneLink.textContent){
                oneLink.style.backgroundColor="blue"
            }
            else{
                oneLink.style.backgroundColor="#333"
            }
            });
        }
    })  
})
// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/


// Build menu 

// Scroll to section on link click

// Set sections as active
