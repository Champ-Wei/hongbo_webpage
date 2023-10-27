// Maniqulate the table
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