let canvas, ctx, w, h;
const size = 256;
const colors = ["#003F63", "#F2B138", "#A6BF4B", "#D94C1A", "#FF665A", "#FFF587", "#3EB595", "#F2ACB9", "#1FFF00", "#FF3534"];
const font = 100;


const draw = () => {
    // set background
    let bg = document.querySelector("#profilePic");
    bg.style.background = colors[ran(0, colors.length - 1)];

    // getting name
    let name = document.querySelector("#name").value;
    name = name.split(" ");
    let firstNameInitial = "", lastNameInitial = "";
    if (name.length >= 1) {
        firstNameInitial = name[0][0];
        if (name.length >= 2) {
            lastNameInitial = name[1][0];
        }
    }
    let printText = firstNameInitial + lastNameInitial;
    // console.log(printText);

    // printing name
    let txt = document.querySelector("#text");
    let err = document.querySelector("#errorText");
    if (printText.trim().length == 0) {
        err.innerText = 'Warning : Text field is empty !!';
        xt.innerText = "GS";
    } else {
        err.innerText = "";
        txt.innerText = printText.toUpperCase();
    }


}

const ran = (min = 0, max = 1) => {
    return Math.floor(Math.random() * (max - min) + min);
}

let download = () => {

    let profilePic = document.querySelector("#profilePic");
    let name = document.querySelector("#name").value;
    name = name.split(" ").join("_") + "_profilePic";
    profilePic.style.borderRadius = "0px";
    html2canvas(profilePic).then((canvas) => {
        // Convert the canvas to blob
        canvas.toBlob((blob) => {
            let link = document.createElement("a");
            link.download = `${name}.png`;
            link.href = URL.createObjectURL(blob);
            link.click();
            profilePic.style.borderRadius = "50%";

        }, 'image/png');
    });
}

//event listeners for onload & resize
document.querySelector("#btn").addEventListener("click", () => {
    draw();
})
window.addEventListener("keypress", (e) => {
    // console.log(e.key);
    if (e.key == "Enter") {
        draw();
    }
})

document.querySelector("#download").addEventListener("click", () => {
    download();
})
