$( document ).ready(function() {
    /* handlers for text box to handle button click and enter key events*/
    $('#submitAccount').click(function(){
        lookupAccount(($('#accountInput').val()));

    });

    $(document).on('keypress',function(e) {
        if(e.which == 13) {
            lookupAccount(($('#accountInput').val()));
        }
    });
    /* hides account detail section until an account has been searched*/
    $('#details').css("visibility",'hidden');


});
function addProfileLinks(url)
{
    /* adds links to github URL to all account detail elements */
    $("a").each(function() {
        this.href = url;
    })
}

function lookupAccount(account){
    /* queries Github's public API
    https://docs.github.com/en/rest/reference/users*/
    var request = new XMLHttpRequest();

    var url = "https://api.github.com/users/"+account;
    request.open("GET", url, false);
    request.send();

    var json = request.responseText;
    var data = JSON.parse(request.responseText);

    showAccountDetails(data)
    addProfileLinks(data.html_url)
    $('#details').css("visibility",'visible');

    return data
}

function showAccountDetails(accountData)
{
    /* displays github account info on page */
    document.getElementById("accountAvatar").src = accountData.avatar_url
    document.getElementById("accountLogin").innerHTML = accountData.login
    document.getElementById("accountName").innerHTML = accountData.name
    document.getElementById("accountId").innerHTML = accountData.id



}
