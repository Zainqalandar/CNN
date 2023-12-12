
function toggleSubnav() {
    var subnav = document.getElementById('subnavFooterSection');
    subnav.style.display = (subnav.style.display === 'block') ? 'none' : 'block';
    let openicon = document.getElementsByClassName("header__menu-icon-svg")[0]
    openicon.classList.toggle("open-icon");
    let closeicon = document.getElementsByClassName("header__close-icon-svg")[0]
    closeicon.classList.toggle("close-icon")
}
function togglebtn() {
    console.log('Hello World');
    let rotatebtn = document.getElementsByClassName("icon-ui-caret-down")[0];
    rotatebtn.classList.toggle("rotate");
    for (let i = 1; i <= 4; i++) {
        let hidenchild = document.getElementsByClassName("subnav_title")[i];
        hidenchild.classList.toggle("hidden_subnav_title");
    }
}