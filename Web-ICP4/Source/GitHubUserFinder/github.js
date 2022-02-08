function lookupAccount(){

    var request = new XMLHttpRequest();

    var url = "https://api.github.com/users/aha85b";
    request.open("GET", url, false);
    document.getElementById("")
    request.send();

    var json = request.responseText;
    var data = JSON.parse(request.responseText);

    return data
}

