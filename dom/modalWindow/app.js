var modal = document.getElementById('jsModal');
var btnOpen = document.getElementById('jsBtn');
var btnClose = document.getElementById('jsClose');

btnOpen.onclick = show => {
    modal.style.display = "block";
}

btnClose.onclick = close => {
    modal.style.display = "none";
}

/* Можно закрывать кликнув по любой области экрана */
modal.onclick = close => {
    modal.style.display = "none";
}