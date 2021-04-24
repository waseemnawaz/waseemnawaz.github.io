//add the 3 icon bars to the (responsive) navigation bar dynamically instead of hard-coding it in the index.html
var icon_array = [];

var icon = function(){
    for(var i = 0; i < 3; i++){
        var icon_bar = document.createElement('span');
        icon_bar.setAttribute('class', 'icon-bar');
        icon_array.push(icon_bar);
        //console.log(icon_array);

    }
};

icon();

var navbar_toggle = document.querySelector('.navbar-toggle');

var add_icon_bars = function(){
    for(var i = 0; i < icon_array.length; i++){
        navbar_toggle.appendChild(icon_array[i]);
    }
};

add_icon_bars();

//console.log(navbar_toggle);

//Waseem Nawaz in the navbar

var waseem = document.querySelector('.navbar-brand');

var waseemInner = document.createElement('a');
waseemInner.setAttribute('href', '#');
waseemInner.innerHTML ='WASEEM NAWAZ';

waseem.appendChild(waseemInner);
//console.log(waseem);

//navbar titles and innerHTML added dynamically in li elements
let navbar_right = document.querySelector('.navbar-right');

let slugs_array = ["#work", "#intro", "#kntkto"];
//let new_slugs_array = [];

let nav_li;
let nav_li_a;

var navbarElements = ["Work", "About/CV", "Contact"];

var add_slugs_to_nav_lis = function(){
    for(var i = 0; i < slugs_array.length; i++){
        nav_li = document.createElement('li');
        nav_li_a = document.createElement('a');
        nav_li_a.setAttribute('href', slugs_array[i]);
        nav_li_a.innerHTML = navbarElements[i];
        nav_li.appendChild(nav_li_a);
        //new_slugs_array.push(nav_li);
        //console.log(nav_li);
        navbar_right.appendChild(nav_li);
    }
};

add_slugs_to_nav_lis();

//console.log(navbar_right);

// //The introduction

// var workintro = document.createElement('div');
// workintro.setAttribute('class', 'workintro');

// var work = document.getElementById('work');

// var h31 = document.createElement('h3');
// var h31text = document.createTextNode('Hello Waseem Nawaz, Web Developer for hire.');
// h31.appendChild(h31text);
// //h31.innerText = "Hello Waseem Nawaz, Web Developer for hire.";

// var p1 = document.createElement('p');
// p1.innerHTML = "Below are the static and Ruby on Rails sites that I created myself. Some of the pages are slow to load at first as they are hosted on Heroku for free. So please be patient. The link to my Github is in the Contact section.";

// work.appendChild(workintro);
// workintro.appendChild(h31);
// workintro.appendChild(p1);
// console.log(rowes);

//Creating the Object for the work samples

var worksamples = 
[
    {
        href: "https://bikeberlin.herokuapp.com/",
        scr: "img/bike1.jpg",
        title: "BikeBerlin",
        text: "A Ruby on Rails ecommerce website I created when I first learned web development. Basically a CRUD app where a user can log in, log out, create, read, update and delete bikes. Gem Devise for authentication and CanCanCan for Authorization. Totally fake website hosted on Heroku."

    },

    {
        href: "https://maurowgomez.herokuapp.com/",
        scr: "img/maurow.jpg",
        title: "Maurow Gómez",
        text: "A personal website, including a blog, made using Ruby on Rails. This was a bit of an overkill I guess. You don't need a Ruby on Rails website for a simple blog but this was created for a friend shortly after I learned web development. I had no idea that WordPress even existed. So I copied and pasted the code for the bike shop (Bike Berlin) and I created this website." 
    },

    {
        href: "https://mynewblogg.herokuapp.com/",
        scr: "img/forest.jpg",
        title: "Waseem's blog",
        text: "A blog made using Ruby on Rails. THIS IS NOT MY BLOG! Again, shortly after completing a course with Careerfoundry I decided to copy paste the rails commands and ruby codes in order to create a blog. It was just for show. Hosted on Heroku, gem Devise for Authentication and CanCanCan for Authorization."

    },

    {
        href: "https://alpacasweatr.herokuapp.com/",
        scr: "img/sweatr12.jpg",
        title: "Sweatr",
        text: "A totally fake ecommerce website, like the other Ruby on Rails websites on here. It's hosted on Heroku. I adapted the code from the Bike Berlin website in order to practise my coding skills."
    },

    {
        href: "http://director-karl-30485.bitballoon.com/",
        scr: "img/laleche.jpg",
        title: "Cebichería La Leche",
        text: "A static website for a cebiche restaurant in Lima, Peru. It's currently hard coded HTML, CSS and very little JS, almost all JQuery."
    },

    {
        href: "https://uneteperu.github.io/",
        scr: "img/unete.jpg",
        title: "Unete",
        text: "A website for an organisation that helps poor students find jobs in Lima. It's hard coded HTML, CSS and a tiny little bit of JQuery."
    }
   
];

//work section details added dynamically to rowes div
var rowes = document.getElementById('rowes');
var portfolio_item;
var workhref;
var workimg;
var workh3;
var workhref2;
var workp;
var workptext
var somenumber;
var allportfolioitems;
var portfolioArray = [];

//console.log(portfolio_item);

var add_info_to_work = function(){
for(var i = 0; i < worksamples.length; i++){
    portfolio_item = document.createElement('div');
    //portfolio_item.setAttribute('class', 'col-md-4');
    portfolio_item.classList.add('col-md-4', 'portfolio-item');
    //console.log(portfolio_item);
    rowes.append(portfolio_item);

    //add the href to portfolio_item
    workhref = document.createElement('a');
    workhref.setAttribute('href', worksamples[i].href);
    portfolio_item.appendChild(workhref);

    //create the img element
    workimg = document.createElement('img');
    workimg.setAttribute('class', 'img-responsive');
    workimg.setAttribute('src', worksamples[i].scr);
    workimg.setAttribute('alt', '');

    workhref.appendChild(workimg);
    console.log(workhref);
    console.log(portfolio_item);
    //portfolio_item needs to include the pic!
    //portfolio_item.appendChild(workhref); rubbish....

    //add the h3 tag 
    workh3 = document.createElement('h3');
    workhref2 = document.createElement('a');
    //I only want the pic to be clickable but how?
    workhref2.setAttribute('href', worksamples[i].href);
    //workhref2.innerText = worksamples[i].title;
    workhref2.innerHTML = worksamples[i].title;
    workh3.appendChild(workhref2);
    portfolio_item.appendChild(workh3);

    //add the description
    workp = document.createElement('p');
    workptext = document.createTextNode(worksamples[i].text);
    workp.appendChild(workptext);
    workp.style.display = "none"; //does not show on the main page
    //workp.textContent = worksamples[i].text;
    //I commented it out because adding text screws up the bootstrap layout for some reason.
    portfolio_item.appendChild(workp); 
    console.log(worksamples[i].href);
    console.log(worksamples[i].text);

    //how can I randomise the gallery here? 
    somenumber = Math.floor(Math.random() * worksamples.length);
    console.log(somenumber);

    portfolioArray.push(portfolio_item);
    console.log(portfolioArray);

    rowes.appendChild(portfolioArray[Math.floor(Math.random() * portfolioArray.length)]);
    //this did it!!!!!
}
//portfolio_item.appendChild(workhref);
};

add_info_to_work();
console.log(rowes);
console.log(portfolio_item);


//The introduction

var workintro = document.createElement('div');
workintro.setAttribute('class', 'workintro');

var work = document.getElementById('work');

var h31 = document.createElement('h3');
var h31text = document.createTextNode('Hello Waseem Nawaz, Web Developer for hire.');
h31.appendChild(h31text);
//h31.innerText = "Hello Waseem Nawaz, Web Developer for hire.";

var p1 = document.createElement('p');
p1.innerHTML = "Below are the static and Ruby on Rails sites that I created myself. Some of the pages are slow to load at first as they are hosted on Heroku for free. So please be patient. The link to my Github is in the Contact section.";

work.insertBefore(workintro, rowes);
workintro.appendChild(h31);
workintro.appendChild(p1);
//console.log(rowes);

//Programming skills

var skillsArray = ["HTML and CSS",
    "Bootstrap Front End Framework",
    "Ruby on Rails MVC Framework",
    "User Authentication and Authorization",
    "Git Version Control",
    "Heroku",
    "Javascript",
    "WordPress"
];

var codingskillz = document.querySelector('.codingskillz');
var codeul = document.createElement('ul');
codingskillz.appendChild(codeul);
var lisCode;

var add_lis_to_ul_skills = function(){

for(var i = 0; i < skillsArray.length; i++){
lisCode = document.createElement('li');
lisCode.innerHTML = skillsArray[i];
codeul.appendChild(lisCode);
}
};

add_lis_to_ul_skills();

// the more about me section


var intro = document.getElementById('intro');
var firstpage = document.querySelector('.firstpage');
var links = document.getElementById('links');
var trabajos = document.querySelector('.trabajos');
var divGallery;
var divImg;
var divHref;

//headlines and paragraph
var firstpageh3;
var firstpagep;

firstpageh3 = document.createElement('h3');
firstpageh3.innerHTML = "More about me";
firstpage.appendChild(firstpageh3);

firstpagep = document.createElement('p');
firstpagep.innerHTML = "I was born in Luxembourg. I went to school in Luxembourg, the UAE and the United Kingdom, where I also went to university. I have a degree in European Community Studies, a graduate Diploma in Economics and a Master's degree in Economics with special reference to Latin America. I speak fluent English, French, German, Luxembourgish and Spanish. I worked in Luxembourg, Nicaragua and Peru. My professional background is mainly non-profit and tourism. I even had a restaurant of my own at one point (I did most of the sweets and cakes there), so I have an entrepreneurial streak as well. I love getting to know different cultures and I have a special interest for Latin America, since I lived there for such a long time. I like learning languages (most recently Portuguese), spending time with friends, conversations, the gym (I try to do my best...), amongst other things. In 2015 I became interested in the web and its technologies. So I decided to learn to code. I then did an online web development course offered by Careerfoundry, specialising in Ruby on Rails.</p>";
firstpage.appendChild(firstpagep);

//the photos

var photosobject = [

    {
        img: "img/snow1.jpg",
        img2: "img/snow1.jpg"
    },

    {
        img: "img/snow3.jpg",
        img2: "img/snow3.jpg"
    },

    {
        img: "img/blacktee.jpg",
        img2: "img/blacktee.jpg"
    },

    {
        img: "img/snow4.jpg",
        img2: "img/snow4.jpg"
    },

    {
        img: "img/IMG_1569.jpg",
        img2: "img/IMG_0712manlisboa.jpg"
    },

    {
        img: "img/IMG_0654.jpg",
        img2: "img/IMG_0654.jpg"
    },

    {
        img: "img/nata1.jpg",
        img2: "img/nata1.jpg"
    },

    {
        img: "img/IMG_0987.jpg",
        img2: "img/IMG_0987.jpg"
    }

];

var photosArray = [];

var add_pics_to_gallery = function(array){
    for(var i = 0; i < array.length; i++){
        // the div
        divGallery = document.createElement('div');
        //divGallery.classList.add('col-md-3', 'col-xs-6');
        divGallery.classList.add('col-md-3');
        links.appendChild(divGallery);

        // the a href
        divHref = document.createElement('a');
        divHref.setAttribute('href', array[i].img);
        divGallery.appendChild(divHref);

        //the img
        divImg = document.createElement('img');
        divImg.setAttribute('src', array[i].img2);
        divImg.classList.add('works', 'img-responsive', 'fadez');
        divHref.appendChild(divImg);
        
        //divGallery.appendChild(divImg);

        if(array[i].img2 === "img/blacktee.jpg" || array[i].img2 === "img/IMG_0987.jpg"){
            divImg.classList.add('grey');
        }

        if(array[i].img2 === "img/snow4.jpg"){
            divImg.classList.add('crazy');
        }
        
        //console.log(divGallery);
        //random pics in gallery
        photosArray.push(divGallery);
        links.appendChild(photosArray[Math.floor(Math.random() * photosArray.length)]);
    }
    //console.log(intro);
}

add_pics_to_gallery(photosobject);


console.log(links);

//contact section 

//there are two elements with the class black. Take the second one. 
//save that to theresult

var black = document.querySelectorAll('.black'); 
var secondblack = function(){
    for(var i = 0; i < black.length; i++){
        console.log(black[1]);
        return black[1];
    }
};

var theresult = secondblack();
console.log(theresult);

//create the contact me headline section

var contacts;
var kntkto = document.getElementById('kntkto');
console.log(kntkto);

contacts = document.createElement('div');
contacts.setAttribute('class', 'contacts');

var contactsH3 = document.createElement('h3');
contactsH3.innerHTML = "Contact me";
contacts.appendChild(contactsH3);

theresult.appendChild(contacts);
kntkto.appendChild(theresult);
console.log(theresult);

//the first column

var rowz = document.querySelector('#kntkto .row');
console.log(rowz);
/*var lastrow = function(){
    for(var i = 0; i < rowz.length; i++){
        console.log(rowz[rowz.length - 2]);
        return rowz[rowz.length - 2];
    }
};
 var thelastRow = lastrow();

 console.log(thelastRow);*/


 console.log(rowz.firstElementChild);
 var firstColLastRow = rowz.firstElementChild;
 
 var imail = document.createElement('div');
 imail.setAttribute('class', 'imail');

var pimail1 = document.createElement('p');
pimail1.innerHTML = "You can write me an email:";

var pimail2 = document.createElement('p');
pimail2.setAttribute('class', 'iimail');

var pimail2Href = document.createElement('a');
pimail2Href.setAttribute('class', 'mail');
pimail2Href.setAttribute('href', 'mailto:waseemhijodenawaz@yahoo.es');
pimail2Href.innerHTML = "waseemhijodenawaz at yahoo dot es";

var pimail3 = document.createElement('p');
pimail3.innerHTML = "Reach out to me on the social media platforms below or by filling out the form:"

imail.appendChild(pimail1);

pimail2.appendChild(pimail2Href);
imail.appendChild(pimail2);

imail.appendChild(pimail3);

firstColLastRow.appendChild(imail);
console.log(firstColLastRow);

//social media array with the respective data
//but I did not use this. See below.

var socialmediaArray = [
    {
        href: "https://github.com/waseemnawaz",
        src: "img/Github1.png",
        class: "img-responsive social"
    },
    {
        href: "https://twitter.com/guasimnaguaz",
        src: "img/Twitter1.png",
        class: "img-responsive social"
    },
    {
        href: "https://www.linkedin.com/in/waseem72nawaz",
        src: "img/LinkedIn1.png",
        class: "img-responsive social"
    }
];

//what if I just cloned the whole thing?
//so i cloned the whole thing and what is shown is the dynamic bit. 
//i leave it because it's a learning experience

console.log(imail);
console.log(imail.previousElementSibling);

var socialMediaThing = imail.previousElementSibling;
//var newMedia = socialMediaThing.cloneNode(true);
var newMedia;
var newnewMedia = function(){
    newMedia = socialMediaThing.cloneNode(true);
    //socialMediaThing.style.display = "none";
    socialMediaThing.remove();
    console.log(socialMediaThing);
    return newMedia;
};

var thenewnewmedia = newnewMedia();
console.log(thenewnewmedia);

theresult.insertBefore(contacts, rowz);//this puts the contact above the other paragraphs
firstColLastRow.appendChild(thenewnewmedia);

//the contact 

//i will not recreate the contact form on the fly because I am bored of that. 
//The footer

var copyright = document.querySelector('.copyright');
var d = new Date();
copyright.innerHTML = "&copy;" + " Waseem Nawaz " + d.getFullYear();

//Plan: on change or blur or focus, do something using event object in contact form


var formGroup = document.querySelector('.form-group');
var firstInput = formGroup.firstElementChild.nextElementSibling; 
//firstInput.style.backgroundColor = 'red';
console.log(firstInput);
var contactFormColor = function(event){
    event.preventDefault();
    event.target.style.backgroundColor = '#acd7e6';
    event.target.placeholder = "Come on, enter your name please!";
    //event.target.placeholder.value = "Yes your name!!!!";
};
firstInput.addEventListener('keyup', contactFormColor, true);


//email field
var emailInForm = document.querySelectorAll('.form-group')[1].firstElementChild.nextElementSibling;
console.log(emailInForm);


var contactFormColorInEmail = function(event){
    event.preventDefault();
    event.target.style.backgroundColor = '#ffe9ec';
    event.target.placeholder = "Come on, enter your email please!";
};

emailInForm.addEventListener('keyup', contactFormColorInEmail, true );

var textarea = document.querySelector('textarea');
console.log(textarea);

var contactFormColorInTextarea = function(event){
    event.preventDefault();
    event.target.style.backgroundColor = '#ffffd4';
    event.target.placeholder = "Come on, enter your message please!";
};

textarea.addEventListener('keyup', contactFormColorInTextarea, true);

var button = document.querySelector('button[type="submit"]');
console.log(button);
var visibleComment = document.querySelector('#visible-comment');
console.log(visibleComment);

//i don't really want people using this form. 

var emailWhenSubmit = function(event){
    if (firstInput.value === '' && emailInForm.value === '' && textarea.value === ''){
        event.preventDefault();
        visibleComment.innerHTML = 'You need to provide a name, an email and a little message please! '; 
        visibleComment.style.color = 'white';
        visibleComment.style.fontSize = '1.5em';
    } else if (firstInput.value.length < 4 || !emailInForm.value.includes('@') || textarea.value.length < 20){
        event.preventDefault();
        visibleComment.innerHTML = 'You need to provide a full name, a proper email and a small message (a few words...) please! '; 
        firstInput.placeholder = '';
        emailInForm.placeholder = '';
        visibleComment.style.color = 'white';
        visibleComment.style.fontSize = '1.5em';
    } else if (firstInput.value.length >= 4 && emailInForm.value.includes('@') && textarea.value.length >= 20){
        event.preventDefault();
        event.target.style.display = "none";
        visibleComment.style.color = 'white';
        firstInput.placeholder === '';
        emailInForm.placeholder === '';
        textarea.style.fontWeight = 'bold';
        textarea.style.fontSize = '1.5em';
        textarea.style.color = '#ff748c';
        //textarea.value = "On second thought, this contact form is really just for decoration purposes. Please click on the email below to write me a message. Thanks."
        visibleComment.innerHTML = '<a class="mail" href="mailto:waseemhijodenawaz@yahoo.es">waseemhijodenawaz@yahoo.es</a>';
        visibleComment.style.fontSize = '1.5em';
        console.log(firstInput.value);
        console.log(emailInForm.value);
        console.log(textarea.value);
        contactsH3.innerHTML = "The Annoying Contact Form";
        contactsH3.style.color = '#ff748c';

    }

    /*event.preventDefault();
    event.target.style.display = "none";
    visibleComment.style.color = 'white';
    firstInput.value = '';
    emailInForm.value = '';
    textarea.style.fontWeight = 'bold';
    textarea.style.fontSize = '1.5em';
    textarea.style.color = '#ff748c';
    textarea.value = "On second thought, this contact form is really just for decoration purposes. Please click on the email below to write me a message. Thanks."
    visibleComment.innerHTML = '<a class="mail" href="mailto:waseemhijodenawaz@yahoo.es">waseemhijodenawaz@yahoo.es</a>';
    visibleComment.style.fontSize = '1.5em';*/
};

//Actually, I want them to use it so this button event is commented out!
button.addEventListener('click', emailWhenSubmit, true);

console.log(pimail2Href.outerHTML);


//event to reverse my name if mouse hovers over my name

var reverseMe = function(event){

    var text = event.target.innerHTML;
    event.target.innerHTML = text.split("").reverse().join("");
};

waseemInner.addEventListener('mouseenter', reverseMe, true);
waseemInner.addEventListener('mouseleave', reverseMe, true);

//randomise pics on mouseover over photo gallery. 

var randomImages = function(event){
    event.preventDefault();
    //console.log(event.target.parentElement);
    event.currentTarget.parentElement.appendChild(photosArray[Math.floor(Math.random() * photosArray.length)]);
    //event.currentTarget.parentElement.appendChild(photosArray[Math.floor(Math.random() * photosArray.length)]);
    
};

//i don't like the effect because it's crazy and so i commented out the event listener!!!!!!!!!!!!
photosArray.forEach(function(item){
//item.addEventListener('click', randomImages, true );
//item.addEventListener('mouseleave', randomImages, true);
})

//links.addEventListener('mouseover', randomImages, true );
//links.addEventListener('mouseleave', randomImages, true);


//event to hide the portfolio gallery when a person clicks on one pic
// use the rowesone div

var rowesone = document.getElementById('rowesone');
console.log(rowesone);
console.log(portfolioArray);

/*var showRowesOne = function(){
    for(var i = 0; i < portfolioArray.length; i++){
       console.log(portfolioArray[i].innerHTML);
    }

};*/ //do the event in the thing below

//var resultShowRowesOne = showRowesOne();

//create the single page div for the works details

/*var rowesoneDiv2 = document.createElement('div');
rowesoneDiv2.classList.add('col-md-6', 'portfolio-item');
rowesone.appendChild(rowesoneDiv2);
rowesoneDiv2.innerHTML = 'Back to portfolio';*/

var rowesoneDiv = document.createElement('div');
//rowesoneDiv.setAttribute('class', 'portfolio-item');
rowesoneDiv.classList.add('col-md-6', 'portfolio-item');
//rowesoneDiv.style.paddingLeft = '10em';
rowesone.appendChild(rowesoneDiv);

//create the a tag and img
var rowesoneA = document.createElement('a');
//rowesoneA.setAttribute('href', ??);
rowesoneDiv.appendChild(rowesoneA);

var rowesoneImg = document.createElement('img');
rowesoneImg.classList.add('img-responsive', 'alt');
rowesoneA.appendChild(rowesoneImg);

//add the h3 and the innerText
var rowesoneH3 = document.createElement('h3');
var rowesoneA2 = document.createElement('a');
rowesoneH3.appendChild(rowesoneA2);
rowesoneDiv.appendChild(rowesoneH3);

//the p element
var rowesoneP = document.createElement('p');
rowesoneDiv.appendChild(rowesoneP);

//second div
var rowesoneDiv2 = document.createElement('div');
rowesoneDiv2.classList.add('col-md-6', 'portfolio-item');
rowesone.appendChild(rowesoneDiv2);
//rowesoneDiv2.innerHTML = 'Back to portfolio';
//rowesoneDiv2.innerHTML.style.float = 'right';

rowesoneDiv2H3 = document.createElement('h3');
rowesoneDiv2H3.setAttribute('class', 'floattotheright');
//rowesoneDiv2H3.innerHTML = 'Back to portfolio';
rowesoneDiv2.appendChild(rowesoneDiv2H3);

//a href inside the h3 back to portfolio button
var rowesoneDiv2H3A = document.createElement('a');
rowesoneDiv2H3A.setAttribute('href', '');
//rowesoneDiv2H3A.innerHTML = "Back to portfolio";
rowesoneDiv2H3.appendChild(rowesoneDiv2H3A);
//var rR = document.querySelector('#rowesone');


var hideIndPortfolio = function(event){
    rowes.style.display = 'block';
    rowesone.style.display = 'none';
    console.log(rowesone);
    //event.target.parentElement.parentElement.parentElement.style.display = 'none';
};

/*setTimeout(function(){
    rowesoneDiv2H3.addEventListener('click', hideIndPortfolio, true);
}, 3000);*/

rowesoneDiv2H3.addEventListener('click', hideIndPortfolio, true);


console.log(rowesone);

var hidePortfolioPic = function(event){

    event.preventDefault();
    event.currentTarget.parentElement.style.display = "none";
    //rowes.style.display = 'none';
    /*rowesone.style.height = '5em';
    rowesone.style.backgroundColor = "red";*/
    rowesone.style.display = 'block';

    //create a new function for showing this!
    console.log(event.currentTarget.outerHTML);
    //rowesoneH3.innerHTML = event.target.parentElement.nextElementSibling.firstElementChild.innerText;
    rowesoneA.setAttribute('href', event.target.parentElement.href);
    rowesoneImg.setAttribute('src', event.target.src);
    rowesoneA2.setAttribute('href', event.target.parentElement.href);
    rowesoneA2.innerText = event.target.parentElement.nextElementSibling.firstElementChild.innerText;
    rowesoneP.innerText = event.target.parentElement.parentElement.firstElementChild.nextElementSibling.nextElementSibling.innerText;
    rowesoneDiv2H3A.innerHTML = "Back to portfolio";

    console.log(event.target.parentElement.href);
    console.log(event.target.src);
    console.log(event.target);
    console.log(event.target.parentElement.parentElement);
    console.log(event.target.parentElement.nextElementSibling.firstElementChild.innerText);
    console.log(event.target.parentElement.parentElement.firstElementChild.nextElementSibling.nextElementSibling.innerText);
    console.log(event.target.parentElement.nextElementSibling.firstElementChild);
};

//i think having a separate click for the pic and the title is not practical. So I will pause this. 
portfolioArray.forEach(function(item){
    //item.addEventListener('click', hidePortfolioPic, true);
});

console.log(portfolioArray);

//how do you make the h3 below the pic in the portfolio link to the single portfolio thing. 
//i had completely forgotten!

var clickOnTitle = function(event){
    event.preventDefault();
    console.log(event.target);
    rowes.style.display = 'none';
    rowesone.style.display = 'block';
    //event.target.parentElement.nextElementSibling.firstElementChild.innerHTML = 'Click on the pic above please.';
};

portfolioArray.forEach(function(item){
    //item.addEventListener('click', clickOnTitle, true);
});

var titlezArray = [];

var getTheTitleInPortfolio = function(){

   for(var i = 0; i < portfolioArray.length; i++){
    titlezArray.push(portfolioArray[i].firstElementChild.nextElementSibling.firstElementChild);
   } 
};

var titlezResult = getTheTitleInPortfolio();
console.log(titlezArray);

/*var redTitle = function(event){

    event.preventDefault();
    rowes.style.display = 'none';
    rowesone.style.display = 'blocked';
    console.log(rowesoneDiv);
    console.log(event.target);
    rowesoneA.setAttribute('href', event.target.parentElement.previousElementSibling.href);
    rowesoneImg.setAttribute('src', event.target.parentElement.previousElementSibling.firstElementChild.src);
    rowesoneA2.setAttribute('href', event.target.href);
    rowesoneA2.innerText = event.target.innerText;
    rowesoneP.innerText = event.target.parentElement.nextElementSibling.innerText;
    rowesoneDiv2H3A.innerHTML = "Back to portfolio";
};*/

var myName;
//var rowestwo = document.getElementById('rowestwo');

var redTitle = function(event){
    event.preventDefault();
    console.log(event.target);
    //myName = event.target.parentElement.parentElement;
    myName = event.currentTarget;
    console.log(myName);
    event.currentTarget = myName;
    console.log(myName);
    rowes.style.display = 'none';
    rowesone.style.display = 'block';
    //rowesone.innerHTML = "hello";
    rowesoneA.setAttribute('href', myName.firstElementChild.href);
    rowesoneImg.setAttribute('src', myName.firstElementChild.firstElementChild.src);
    rowesoneA2.setAttribute('href', myName.firstElementChild.nextElementSibling.firstElementChild.href);
    rowesoneA2.innerText = myName.firstElementChild.nextElementSibling.firstElementChild.innerText;
    rowesoneP.innerText = myName.lastElementChild.innerText;
    rowesoneDiv2H3A.innerHTML = "Back to portfolio";
    console.log(rowesone);
    console.log(rowesoneA2);
    console.log(event.currentTarget);
};

portfolioArray.forEach(function(item){
    item.addEventListener('click', redTitle, true);
});

//click event gives me a js error, so I will pause this. 
titlezArray.forEach(function(item){
    //item.addEventListener('click', redTitle, true);
});

//does not behave consistently
// setInterval(function(){
//     titlezArray.forEach(function(item){
//         item.addEventListener('mouseover', redTitle, true);
//     });

// }, 2000);

console.log(portfolioArray);
var theItemH3Href;
var theItemH3HrefTitle; 
portfolioArray.forEach(function(item){
    //theItemH3Href = item.firstElementChild.nextElementSibling.firstElementChild.style.display = 'none';
    /*theItemH3HrefTitle = document.createElement('h3');
    theItemH3HrefTitle.innerHTML = item.firstElementChild.nextElementSibling.firstElementChild.innerHTML;
    item.appendChild(theItemH3HrefTitle);
    console.log(theItemH3Href);*/
});

//nothing works: make the image the solo event.target!

console.log(rowes);

