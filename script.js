function search() {
    let textToSearch = document.getElementById("searchedText").value;
    let paragraph = document.getElementById("paragraph");
    textToSearch = textToSearch.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");
    let pattern = new RegExp(`${textToSearch}`,"gi");
    paragraph.innerHTML = paragraph.textContent.replace(pattern, match => `<mark>${match}</mark>`)
    
}