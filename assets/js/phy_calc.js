const menu = document.getElementById("menu");
// SIDEBAR
const sidebar = document.querySelector('.sidebar');
const sidebar_items = document.getElementById('sidebar-items');
const constant = document.getElementById("constant");
const constant_items = document.querySelector('.constant-items');
const unit = document.getElementById("unit");
const unit_items = document.querySelector('.unit-items');
const more = document.getElementById("more");

const darkmode = document.getElementById('darkmode');

// darkmode feature
let darkmodeEnabled = false;

darkmode.addEventListener('click', () => {
  darkmodeEnabled = !darkmodeEnabled;
  const root = document.documentElement;

  if (darkmodeEnabled) {
    root.style.setProperty('--mainbackground', '#232323');
    root.style.setProperty('--textcolor', 'white');
    root.style.setProperty('--secondarybackground', '#171717');
    root.style.setProperty('--filter', 'invert(1)');
  } else {
    root.style.setProperty('--mainbackground', 'white');
    root.style.setProperty('--textcolor', 'black');
    root.style.setProperty('--secondarybackground', '#F3F0F0');
    root.style.setProperty('--filter', 'none');
  }
})

menu.addEventListener('click', () => {
  if (sidebar.className.includes('show_sidebar')) {
    sidebar.classList.remove('show_sidebar');
    menu.src = "/assets/svg/phy_calc2.svg";
  } else {
    sidebar.classList.add("show_sidebar");
    menu.src = "/assets/svg/phy_calc3.svg";
  }
})

sidebar_items.addEventListener('click', (e) => {
  try {
    const current_El = e.target;
    const current_El_Id = current_El.id;
    const current_Img = current_El.children[1];
    const current_List = document.querySelector(`.${current_El_Id}-items`);
    if (current_Img.style.transform === 'rotate(180deg)') {
      current_Img.style.transform = 'rotate(0deg)'
      current_List.classList.remove('show');

    } else {
      current_Img.style.transform = 'rotate(180deg)'
      current_List.classList.add('show');
    }
  }
  catch {
    console.log('Something went wrong');
  }
})


function formatInput(input) {
  if (input.search("e") != -1) {
    let index = input.search("e");
    let x = input.substr(0, index);
    let y = input.substr(index + 1,);
    return Math.pow(parseFloat(x), parseFloat(y));
  } else {
    return parseFloat(input);
  }

}


const quantites = document.getElementById('quantites');
let current = '';
for (let i = 0; i < quantites.children.length; i++) {
  const item = quantites.children.item(i);

  item.childNodes.forEach(ele => {
    ele.addEventListener('change', () => {
      current = ele.parentNode;
      Calculator(current);

    })

  })
}


//calcualtion part using formulas
function Calculator(current) {
  let inputs = current.getElementsByTagName('input');
  let values = []
  for (let i = 0; i < inputs.length; i++) {
    values.push(formatInput(inputs[i].value));
  }


  let G = 6.67 * Math.pow(10, -11);
  let g = 9.8;          //m/s^2
  let C = 0.70;
  let m;
  let d;
  let t;
  let airDensity = 1.21 // kg/m^3
  switch (current.id) {
    case 'gravity': {
      let [m1, m2, r] = values;
      result = G * m1 * m2 / r * r;
      inputs[inputs.length - 1].value = result;
      break;
    }
    case 'force': {                            // F = m * a
      let [m, a] = values;
      let result = m * a;
      inputs[inputs.length - 1].value = result;
      break;
    }
    case 'AverageSpeed': {                         // S = d / t
      let [d, t] = values;
      let result = d / t;
      inputs[inputs.length - 1].value = result;

      break;
    }
    case 'acceleration': {                         // a = v - u / t
      let [u, v, t] = values;
      let result = u * v / t;
      inputs[inputs.length - 1].value = result;
      break;
    }
    case 'drag': {                                                // F = 1 pCAv^2
      let [A, v] = values;
      let result = 1 / 2 * airDensity * C * A * Math.pow(v, 2);
      inputs[inputs.length - 1].value = result;
      break;
    }
    case 'density': {                             // D = m / V
      let[m, V] = values;
      let result = m / V;
      inputs[inputs.length - 1].value = result;
      break;
    }


    case 'pressure': {                            // P = F / A
      let [f, A] = values;
      let result = f / A;
      inputs[inputs.length - 1].value = result;
      break;
    }

    case 'work': {
      let [f, d] = values;
      let result = f * d;
      inputs[inputs.length - 1].value = result;
      break;
    }

    default: 'default'
  }


}