this.id = "";

function showConsentModal (id) {
    this.id = id;
    var modal = document.getElementById("consentModal");
    var span = document.getElementsByClassName("close-consent-modal")[0];
    modal.style.display = "block";
    span.onclick = function() {
        modal.style.display = "none";
    }
    var modalPostContentModal = document.getElementById("postContentModal");
    modalPostContentModal.style.display = 'none';
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            modalPostContentModal.style.display = 'none';
        }
    }
}

function deletePost() {
    document.getElementById(this.id).style.display = 'none';
    var modal = document.getElementById("consentModal");
    modal.style.display = 'none';
}

function hideConsentModal() {
    var modal = document.getElementById("consentModal");
    modal.style.display = "none";
}