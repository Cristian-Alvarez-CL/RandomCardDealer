const numeroCarta = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
const img        = ['&spades;', '&clubs;', '&hearts;', '&diams;'];

function carta () 
{
    let randomImg = img[Math.floor(Math.random() * img.length)];
    let randomNumeroCarta = numeroCarta[Math.floor(Math.random() * numeroCarta.length)];

    document.getElementById("headerImg").innerHTML   = randomImg;
    document.getElementById("section").innerHTML = randomNumeroCarta;
    document.getElementById("footerImg").innerHTML = randomImg;

   if (randomImg === "&hearts;" || randomImg === "&diams;"){
        tope.classList.add('rojo');
        bottom.classList.add('rojo');
        numero.classList.add('rojo');
    }else {
        tope.classList.add('negro');
        bottom.classList.add('negro');
        numero.classList.add('negro');
    }
}

window.onload = carta();