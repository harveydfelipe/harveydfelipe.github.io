function like(x) {
    if (x.getAttribute('src')==="./heart.png") {
        x.setAttribute('src', "./heart_fill.png");
        document.getElementById('count').innerHTML="4,990";
    }
    else {
        x.setAttribute('src', "./heart.png");
        document.getElementById('count').innerHTML="4,989";
    }
}