const upBtn = document.querySelector('#upBtn');
const boutBtn = document.querySelector('#goAbout');
const contBtn = document.querySelector('#contact');
const aboutme = document.querySelector('#title');

function rollUp() {
    window.scrollTo(0, 0);
}

upBtn.addEventListener("click", rollUp);

function goBout() {
    window.scrollTo(0, 1700);
}

boutBtn.addEventListener("click", goBout);

function goCont() {
    window.scrollTo(0, 3575);
}

contBtn.addEventListener("click", goCont);

function hide() {
    let posY = aboutme.getBoundingClientRect().y;
    if(posY < 900) {
        upBtn.classList.add('showUp');
    } else {
        upBtn.classList.remove('showUp');
    }
}

window.addEventListener("scroll", hide);

function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    let captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
}