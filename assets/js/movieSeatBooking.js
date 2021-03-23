const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.querySelector("#count");
const total = document.querySelector("#total");
const movieSelect = document.querySelector("#movie");
var ticketPrice = parseInt(movieSelect.value);

populateUI();

//save Selected Movie Index and Price
function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem("selectedMovieIndex", movieIndex);
  localStorage.setItem("selectedMoviePrice", moviePrice);
}

function updateSelectedCount() {
  const selectedSeat = document.querySelectorAll(".row .seat.selected");
  const seatIndex = [...selectedSeat].map((seat) => {
    return [...seats].indexOf(seat);
  });
  localStorage.setItem("selectedSeat", JSON.stringify(seatIndex));
  const selectedSeatCount = selectedSeat.length;
  count.innerText = selectedSeatCount;
  total.innerText = selectedSeatCount * ticketPrice;
  setMovieData(movieSelect.selectedIndex, movieSelect.value);
}
function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem("selectedSeat"));
  if (selectedSeats != null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add("selected");
      }
    });
  }
  const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");
  if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex;
  }
}
//Movie Select Event
movieSelect.addEventListener("change", (e) => {
  ticketPrice = parseInt(e.target.value);
});

//Seat Click Event
container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");
  }
  updateSelectedCount();
});
updateSelectedCount();
