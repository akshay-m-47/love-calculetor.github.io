window.onload = function(){
    let button = document.getElementById('calculate');
    button.addEventListener("click",calculatelove);
}

function calculatelove(){
    let yourname = document.getElementById('your name').value;
    let crushname = document.getElementById('crush name').value;

    if (yourname != "" && crushname != ""){
        let percentage=Math.floor(Math.random()* 101);
        document.getElementById('reasult message').innerText=yourname + " and "+ crushname + 's love percentage is :'
        document.getElementById('reasult percentage').innerText=percentage.toString() + "%";
    }
}