function blink() {
    let sup = document.querySelector('#sup');
    if (sup.style.visibility == 'hidden')
    {
        sup.style.visibility = 'visible';
    }
    else
    {
        sup.style.visibility = 'hidden';
    }
}

window.setInterval(blink, 500);