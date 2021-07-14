const form = document.getElementById("input-form");
const x = document.getElementById("x");
const y = document.getElementById("y");
const table = document.getElementById("data-table");
const btn = document.getElementById("plot-btn");

var ctx = document.getElementById("myChart").getContext("2d");
const data = {
  datasets: [
    {
      label: "Scatter Dataset",
      data: [
        // {  //example
        //   x: -10,
        //   y: 0,
        // },
      ],
      // backgroundColor: "rgb(255, 99, 132)",
    },
  ],
};

var myChart = new Chart(ctx, {
  type: "scatter",
  data: data,
  options: {
    scales: {
      x: {
        type: "linear",
        position: "bottom",
      },
    },
    responsive: true,
  },
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const row = document.createElement("tr");
  let color = getRandomColor();
  data.datasets[0].data.push({ x: x.value, y: y.value });
  data.datasets[0].backgroundColor = color;
  row.innerHTML = `<td>${data.datasets[0].data.length}</td><td>${x.value}</td><td>${y.value}</td>`;
  table.appendChild(row);
  form.reset();
  btn.style.backgroundColor = color;
  myChart.update();
});

// Returns random color
function getRandomColor() {
  let hexDigits = "0123456789ABCDEF";
  let hexCodeColor = "#";

  for (let i = 0; i < 6; i++) {
    hexCodeColor += hexDigits[Math.floor(Math.random() * 16)];
  }
  return hexCodeColor;
}
