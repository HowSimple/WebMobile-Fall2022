$( document ).ready(function() {

    $('#submitAccount').click(function(){
        lookupAccount(($('#accountInput').val()));

    });

    $(document).on('keypress',function(e) {
        if(e.which == 13) {
            lookupAccount(($('#accountInput').val()));
        }
    });


});
function lookupAccount(account){

    var request = new XMLHttpRequest();

    var url = "https://api.github.com/users/"+account;
    request.open("GET", url, false);
    request.send();

    var json = request.responseText;
    var data = JSON.parse(request.responseText);

    showAccountDetails(data)

    return data
}

function showAccountDetails(accountData)
{
    document.getElementById("accountAvatar").src = accountData.avatar_url

    document.getElementById("accountLogin").innerHTML = accountData.login
    document.getElementById("accountName").innerHTML = accountData.name
    document.getElementById("accountId").innerHTML = accountData.id
    document.getElementById("accountLink").innerHTML = accountData.html_url
    document.getElementById("accountRepositoryCount").innerHTML = accountData.public_repos
    console.log(accountData.public_repos)


}
