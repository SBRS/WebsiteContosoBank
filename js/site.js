function openChat() {
    var frame = document.getElementById("chatFrame");
    frame.className = "";
    var img = document.getElementById("chatbutton");
    img.className = "hide";
}
function closeChat() {
    var frame = document.getElementById("chatFrame");
    frame.className = "hide";
    var img = document.getElementById("chatbutton");
    img.className = "";
}
