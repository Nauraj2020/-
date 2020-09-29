function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
$(function () {
    const htmlList = document.querySelector("#list");
    var ajax = new XMLHttpRequest();
    ajax.open("get", "https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid=a6ca5ebe6caee435e9c312d71da36e3f&pref=PREF46&hit_per_page=50&id");
    ajax.responseType = 'json';
    ajax.send();
    ajax.onload = function (e) {
        let array = e.target.response.rest;
        let total_hit = e.target.response.total_hit_count;
        total_hit = 50;
        let textcontent;
        for( let i = 0; i < total_hit; i++ ){
            textcontent =
            '<div class="hotel_box">' + '<img src ="' + array[i].image_url.shop_image1 + '">'+  
            '<ul><li>' + array[i].name + '</li>' + 
            '<li>' + array[i].name_kana + '</li>' + 
            '<li>' + array[i].address + '</li>' + '</ul>' + 
            '<div class = "hotel_child">' + '<p>予算￥'+array[i].budget +'～</p></div>'
            '<a href ="' + array[i].url + '"> 詳細情報へ</a></div></div>';
            console.log(textcontent)
            htmlList.innerHTML += textcontent;
        };
    };
});
