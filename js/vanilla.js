//add the 3 icon bars to the (responsive) navigation bar dynamically instead of hard-coding it in the index.html
var icon_array = [];

var icon = function(){
    for(var i = 0; i < 3; i++){
        var icon_bar = document.createElement('span');
        icon_bar.setAttribute('class', 'icon-bar');
        icon_array.push(icon_bar);
        console.log(icon_array);

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

console.log(navbar_toggle);

//Waseem Nawaz in the navbar

var waseem = document.querySelector('.navbar-brand');

var waseemInner = document.createElement('a');
waseemInner.setAttribute('href', '#');
waseemInner.innerHTML ='WASEEM NAWAZ';

waseem.appendChild(waseemInner);
console.log(waseem);

//navbar titles added dynamically in li elements
let navbar_right = document.querySelector('.navbar-right');

let slugs_array = ["#work", "#intro", "#kntkto"];
let new_slugs_array = [];

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
        console.log(nav_li);
        navbar_right.appendChild(nav_li);
    }
};

// slugs_array.forEach(function(item){
//     nav_li = document.createElement('li');
//     nav_li_a = document.createElement('a');
//     nav_li_a.setAttribute('href', item);
//     nav_li.appendChild(nav_li_a);
//     //new_slugs_array.push(nav_li);
//     //console.log(new_slugs_array);
//     return nav_li;
// });

add_slugs_to_nav_lis();

console.log(navbar_right);

//add innerHTML to the added li elements above

// var add_elements_to_nav = function(){
//     for(var j = 0; j < navbarElements.length; j++){
//         nav_li = document.createElement('li');
//         nav_li_a = document.createElement('a');
//         nav_li_a.innerHTML = navbarElements[j];
//         nav_li.appendChild(nav_li_a);
//         //new_slugs_array.push(nav_li);
//         console.log(nav_li);
//         navbar_right.appendChild(nav_li);
//     }
// };

// add_elements_to_nav();