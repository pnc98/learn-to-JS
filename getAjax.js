//封装Ajax
function getAjax(requestType, httpUrl, callbakFn) {
    var xhr = new XMLHttpRequest;
    xhr.open(requestType, httpUrl, true);
    xhr.send();
    xhr.onreadystatechange = function() {
        if (xhr.status == 200 && xhr.readyState == 4) {
            callbakFn(xhr);
        }
    }
}