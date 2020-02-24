function showSignUpModal () {
    var modal = document.getElementById("signUpModal");
    var span = document.getElementsByClassName("close")[0];
    modal.style.display = "block";
    span.onclick = function() {
        modal.style.display = "none";
    }
    var modalSignIn = document.getElementById("signInModal");
    modalSignIn.style.display = 'none';
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

function showSignInModal () {
    var modal = document.getElementById("signInModal");
    var span = document.getElementsByClassName("close-signin")[0];
    modal.style.display = "block";
    span.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

function showCreatePostModal() {
    var modal = document.getElementById("postContentModal");
    var span = document.getElementsByClassName("close-postmodal")[0];
    modal.style.display = "block";
    span.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}