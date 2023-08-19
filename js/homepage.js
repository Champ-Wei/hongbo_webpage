document.addEventListener('DOMContentLoaded', function() {
    // Alert user
    document.querySelector('form').addEventListener('submit', function(event) {
        let name = document.querySelector('#name').value;
        alert('Hello, ' + name);
        event.preventDafault;
    });

    // Like and love buttons
    let like = 0;
    let love = 0;

    document.querySelector('#add_like').onclick = function() {
        like += 1;
        document.querySelector('#score_like').innerHTML = like;
    }

    document.querySelector('#add_love').onclick = function() {
        love += 1;
        document.querySelector('#score_love').innerHTML = love;
    }
});

function blink() {
    let body = document.querySelector('#me');
    if (body.style.visibility == 'hidden')
    {
        body.style.visibility = 'visible';
    }
    else
    {
        body.style.visibility = 'hidden';
    }
}

window.setInterval(blink, 500);
