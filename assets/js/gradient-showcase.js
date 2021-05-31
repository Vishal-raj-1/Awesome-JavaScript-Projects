const gradients = [
    {
        background: "linear-gradient(to bottom right, red, rgba(255,0,0,0))",
        inner: "Linear with transparency",
    },
    {
        background:
            "linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)",

        inner: "Gradient with multiple color stops",
    },
    {
        background: "linear-gradient(135deg, red, red 60%, blue)",

        inner: "Gradient that starts at 60% of the gradient line",
    },
    {
        background: "linear-gradient(135deg, red, blue)",

        inner: "Gradient at a 45 degree angle",
    },
    {
        background: "linear-gradient( to left top, blue, red)",

        inner: "Bottom Right to Top Left",
    },
    {
        background: "linear-gradient(#ffa949, firebrick)",

        inner: "Basic Top to Bottom Gradient",
    },
    {
        background: "linear-gradient(steelblue, darkslateblue)",

        inner: "Basic Top to Bottom Gradient",
    },
    {
        background: "linear-gradient(to top, #ffa949, firebrick)",

        inner: "Bottom to Top Gradient",
    },
    {
        background: "linear-gradient(to top, #ffa949, firebrick)",

        inner: "Right to Left Gradient",
    },
    {
        background: "linear-gradient(45deg, #ffa949, firebrick)",

        inner: "45 degree gradient",
    },
    {
        background: "linear-gradient(90deg, #ffa949, firebrick)",

        inner: "90 degree gradient",
    },
    {
        background:
            "linear-gradient(90deg, #ffa949 0%, firebrick 50%, dodgerblue 100%)",

        inner: "90 degree gradient with three color stops at specified positions",
    },
    {
        background: "radial-gradient(#ffa949, firebrick)",

        inner: "Basic Radial gradient",
    },
    {
        background: "radial-gradient(circle, #ffa949, firebrick)",

        inner: "Basic Radial gradient (circle)",
    },
    {
        background: "radial-gradient(circle at top, #ffa949, firebrick)",

        inner: "Basic Radial gradient (circle at top)",
    },
    {
        background: "radial-gradient(circle at right, #ffa949, firebrick)",

        inner: "Basic Radial gradient (circle at right)",
    },
    {
        background:
            " radial-gradient(circle at right, #ffa949 0%, firebrick 50%, dodgerblue 100%)",

        inner: "Radial gradient with three color stops at specified positions",
    },
    {
        background:
            "radial-gradient(circle at top right, #ffa949 0%, firebrick 20%, dodgerblue 100%)",

        inner: "Radial gradient with three color stops at specified positions",
    },
    {
        background:
            " repeating-linear-gradient(180deg, rgb(26,198,204), rgb(26,198,204) 7%, rgb(100,100,100) 10%)",

        inner: "Repeating gradient",
    },
    {
        background: "repeating-linear-gradient(45deg, blue, red)",
        inner: "",
    },
    {
        background: "repeating-linear-gradient(to left top, blue, red)",
        inner: "",
    },
    {
        background: "repeating-linear-gradient(0deg, blue, green 40%, red)",
        inner: "",
    },
    {
        background:
            " radial-gradient(farthest-side ellipse at 10% 0, rgba(102,105,104,0.9), rgba(93,112,119,0.89), rgba(160,174,150,0.9))",
        inner: "",
    },
    {
        background: "radial-gradient(farthest-side ellipse at 10% 0, red, blue)",
        inner: "",
    },
    {
        background:
            "radial-gradient(farthest-side ellipse at 10% 0, rgba(74,121,147,0.89), rgba(204,204,204,0.85) 80%, rgba(185,135,131,0.87) 120%)",
        inner: "",
    },
    {
        background: "linear-gradient(135deg, #62c3de 0%,#f5b5d2 50%,#e6007e 100%)",
        inner: "",
    },

    {
        background: "-webkit-linear-gradient(left,#25a1c3 0,#64bc5b 100%)",
        inner: "",
    },
];

const ul = document.querySelector("ul");
async function addShadow(gradient) {
    const li = document.createElement("li");

    li.style.background = gradient.background;
    li.innerHTML = `<h2>${gradient.inner}</h2><br>
        <p>${gradient.background}</p>`;
    li.addEventListener("mouseenter", function () {
        document.body.style.background = gradient.background;
    });
    li.addEventListener("onmouseout", function () {
        document.body.style.background = "transparent";
    });

    ul.appendChild(li);
}

async function processArray(array) {
    for (const item of gradients) {
        await addShadow(item);
    }
}

processArray(gradients);
