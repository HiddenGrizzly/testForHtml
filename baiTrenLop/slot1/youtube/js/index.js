document.addEventListener("DOMContentLoaded", function(event){
    var inputSearch = document.getElementById("keyword");
    inputSearch.onkeydown = function(event){
        if (event.keyCode == 13) {
            loadVideo(this.value);
        }
    }
});