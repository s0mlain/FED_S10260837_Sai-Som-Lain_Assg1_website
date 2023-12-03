// To open the login form
function openLoginForm() {
    document.getElementById("loginForm").style.display = "block";
}

// To close the login form
function closeLoginForm() {
    document.getElementById("loginForm").style.display = "none";
}

// To make it so that the account user logo opens the login form
document.querySelector('.fas.fa-user').addEventListener('click', function(event) { 
    event.preventDefault(); // To prevent the default action of the link
    openLoginForm(); // function to open the login form
});
