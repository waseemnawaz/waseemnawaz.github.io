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
        text: "A complete working Ruby on Rails website created as part of my Web Development course at Careerfoundry."

    },

    {
        href: "https://maurowgomez.herokuapp.com/",
        scr: "img/maurow.jpg",
        title: "Maurow Gómez",
        text: "A personal website, including a blog, made using Ruby on Rails." 
    },

    {
        href: "https://mynewblogg.herokuapp.com/",
        scr: "img/forest.jpg",
        title: "Waseem's blog",
        text: "A blog made using Ruby on Rails."

    },

    {
        href: "https://alpacasweatr.herokuapp.com/",
        scr: "img/sweatr12.jpg",
        title: "Sweatr",
        text: "A Ruby on Rails website for selling handmade knitware made in Peru by artisan craftswomen."
    },

    {
        href: "http://director-karl-30485.bitballoon.com/",
        scr: "img/laleche.jpg",
        title: "Cebichería La Leche",
        text: "A static website for a cebiche restaurant in Lima, Peru."
    },

    {
        href: "https://uneteperu.github.io/",
        scr: "img/unete.jpg",
        title: "Unete",
        text: "A static website for an organisation that helps students from socially and economically disadvantaged backgrounds create networks and find employment."
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

    //add the h3 tag 
    workh3 = document.createElement('h3');
    workhref2 = document.createElement('a');
    workhref2.setAttribute('href', worksamples[i].href);
    workhref2.innerHTML = worksamples[i].title;
    workh3.appendChild(workhref2);
    portfolio_item.appendChild(workh3);

    //console.log(workhref);
    //console.log(workh3);
}
//portfolio_item.appendChild(workhref);
};

add_info_to_work();
console.log(rowes);

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
    "Javascript"
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

var add_pics_to_gallery = function(array){
    for(var i = 0; i < array.length; i++){
        // the div
        divGallery = document.createElement('div');
        divGallery.classList.add('col-md-3', 'col-xs-6');
        links.appendChild(divGallery);

        // the a href
        
        console.log(intro);
    }
    //console.log(intro);
}

add_pics_to_gallery(photosobject);


console.log(intro);