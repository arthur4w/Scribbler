function editPost(postTitle, postContent) {
    document.getElementById("editPost").style.display = 'block';
    document.getElementById("inputTitle").value = document.getElementById(postTitle).innerText;
    document.getElementById("inputPost").value = document.getElementById(postContent).innerText;
    document.getElementById("postContainer").style.display = 'none';
}

function updatePost(postTitle, postContent) {
    document.getElementById("postContainer").style.display = 'block';
    document.getElementById(postTitle).innerText = `Updated: ${document.getElementById("inputTitle").value}`;
    document.getElementById(postContent).innerText = `Updated: ${document.getElementById("inputPost").value}`;
    document.getElementById("editPost").style.display = 'none';
}

function showLiked() {
    document.getElementById("likeSection").style.display = 'none';
    document.getElementById("likedSection").style.display = 'block';
}

function addComment(id) {
    if (document.getElementById(id).value) {    
        var para = document.createElement("P");                       
        var t = document.createTextNode(document.getElementById(id).value);     
        para.appendChild(t);
        document.getElementById("comment").appendChild(para);
        document.getElementById(id).value = "";
    }
    
}