function factorial () {

    const x = document.getElementById("number").value;

    let fact = 1;
    for (let i=1; i<=x; i++) {
        fact = fact * i;
    }

    document.getElementById("answer").innerHTML = `${x}! = ${fact}`;
}