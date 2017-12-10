function baidu() {
    go("https://www.baidu.com/s?wd=" + $("content").value + "&rsv_spt=1&rsv_iqid=0xa218d3c50007187d&issp=1&f=8&rsv_bp=1&rsv_idx=2&ie=utf-8&rqlang=cn&tn=baiduhome_pg&rsv_enter=1&oq=pacs%25E7%25B3%25BB%25E7%25BB%259F&inputT=1778&rsv_t=f6f9E5MOfE9KRK2H65t328%2FFuVzd29CWqun7%2FEAcwUN76tbnejFyeZ12ntICauFS8yQy&rsv_sug3=17&rsv_sug1=12&rsv_sug7=101&rsv_pq=8c3b34ee00077738&bs=pacs%E7%B3%BB%E7%BB%9F");
}

function google() {
    var href = "https://www.google.com/search?ei=xOYrWoylJYn68QWW-pDICg&q=" + $("content").value + "&oq=" + $("content").value + "&gs_l=psy-ab.3...4429.4584.0.4896.4.3.0.0.0.0.0.0..0.0....0...1c.1.64.psy-ab..4.0.0....0.mz_cMo5q3gc"
    go(href);
}

function translate1() {
    var href = "http://fanyi.baidu.com/translate?aldtype=16047&query=aaa&keyfrom=baidu&smartresult=dict&lang=auto2zh#en/zh/" + $("content").value ;
    go(href);
}

function youtube() {
    var href = "https://www.youtube.com/results?search_query=" + $("content").value;
    go(href);
}

function sogou() {
    var href = "http://fanyi.baidu.com/translate?aldtype=16047&query=" + $("content").value + "&keyfrom=baidu&smartresult=dict&lang=auto2zh#en/zh/" + $("content").value;
    go(href);
}

function unregListner() {
    document.getElementsByTagName("body")[0].removeEventListener('keyup', controlButton, false);
}

function regListner(event) {
    document.getElementsByTagName("body")[0].addEventListener("keyup", controlButton)
}

function controlButton(event) {
    var buttonArray = document.getElementsByTagName("button");
    alert(event.keyCode);
    //i =73 b 66 y ==89 s =83 t=84
    switch (event.keyCode) {
        //输入框 i = 73 
        case 73:
            $("content").focus();
            break;
            // 百度 b = 66
        case 66:
            buttonArray[0].click();
            break;
            // google
        case 71:
            buttonArray[1].click();
            break;
            //youtube
        case 89:
            buttonArray[2].click();
            break;
            // Sogou 
        case 83:
            buttonArray[3].click();
            break;
        case 84:
            buttonArray[4].click();
            break;
    }
};

function go(href) {
    window.open(href);
}

function $(id) {
    return document.getElementById(id);
}
