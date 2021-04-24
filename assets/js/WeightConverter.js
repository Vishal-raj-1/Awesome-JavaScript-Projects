const kg = document.getElementById("kg");
const g = document.getElementById("g");
const p = document.getElementById("p");
const mg = document.getElementById("mg");


function convert() {

    let kgv = kg.value;
    let gv = g.value;
    let pv = p.value;
    let mgv = mg.value;

    if (kgv != 0) {
        gv = kgv * 1000;
        pv = kgv * 2.2046
        mgv = kgv * 1000000;

    } else if (gv != 0) {
        kgv = gv / 1000;
        pv = gv * 0.002204;
        mgv = gv * 1000;

    } else if (pv != 0) {
        kgv = pv * 0.45359237;
        gv = pv * 453.59237;
        mgv = pv * 453592.37;

    } else if (mgv!=0) {
        kgv = mgv / 1000000;
        gv = mgv / 1000;
        pv = mgv * 0.000002204;
    }

    kg.value = kgv;
    g.value = gv;
    p.value = pv;
    mg.value = mgv;
}

function reset() {
    kg.value = 0;
    g.value = 0;
    p.value = 0;
    mg.value = 0;
}