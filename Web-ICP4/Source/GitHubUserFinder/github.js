function lookupAccount(){

    var request = new XMLHttpRequest();

    var url = "https://api.github.com/users/aha85b";
    request.open("GET", url, false);
    document.getElementById("")
    request.send();

    var json = request.responseText;
    var data = JSON.parse(request.responseText);

    showAccountDetails(data)

    return data
}

function showAccountDetails(accountData)
{
    
    document.getElementById("accountLogin").innerHTML = accountData.login
    document.getElementById("accountName").innerHTML = accountData.name
    document.getElementById("accountId").innerHTML = accountData.id
    document.getElementById("accountLink").innerHTML = accountData.html_url
    document.getElementById("accountRepositoryCount").innerHTML = accountData.public_repos

    document.getElementById("accountAvatar").innerHTML = accountData.avatar_url


}
