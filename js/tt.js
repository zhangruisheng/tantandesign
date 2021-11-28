//联系我展开与关闭
var open1 = document.getElementById("menu");
var close1 = document.getElementById("menu-x");




open1.onclick = function () {
    "use strict";
    document.getElementById("nav").setAttribute("class", "nav-open");
    document.getElementById("menu").setAttribute("class", "menu-o");
    document.getElementById("menu-x").setAttribute("class", "menu-x");
    
    // document.getElementById("zzhao").setAttribute("class", "zzhao");

};


close1.onclick = function () {
    "use strict";
    document.getElementById("nav").setAttribute("class", "nav");
    document.getElementById("menu").setAttribute("class", "menu");
    document.getElementById("menu-x").setAttribute("class", "menu-x-o");
    // document.getElementById("zzhao").setAttribute("class", "zzzhao");
};