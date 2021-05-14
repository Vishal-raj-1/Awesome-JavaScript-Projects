var container = document.getElementById("array");

// Function to generate the array of blocks
function generatearray() {
for (var i = 0; i < 20; i++) {

	// Return a value from 1 to 100 (both inclusive)
	var value = Math.ceil(Math.random() * 100);

	// Creating element div
	var array_ele = document.createElement("div");

	// Adding class 'block' to div
	array_ele.classList.add("block");

	// Adding style to div
	array_ele.style.height = `${value * 3}px`;
	array_ele.style.transform = `translate(${i * 30}px)`;

	// Creating label element for displaying
	// size of particular block
	var array_ele_label = document.createElement("label");
	array_ele_label.classList.add("block_id");
	array_ele_label.innerText = value;

	// Appending created elements to index.html
	array_ele.appendChild(array_ele_label);
	container.appendChild(array_ele);
}
}

// Function to generate the indexes
var count_container = document.getElementById("count");
function generate_idx() {
for (var i = 0; i < 20; i++) {

	// Creating element div
	var array_ele2 = document.createElement("div");

	// Adding class 'block2' to div
	array_ele2.classList.add("block2");

	// Adding style to div
	array_ele2.style.height = `${20}px`;
	array_ele2.style.transform = `translate(${i * 30}px)`;

	// Giving indexes
	var array_ele_label2 = document.createElement("label");
	array_ele_label2.classList.add("block_id3");
	array_ele_label2.innerText = i;

	// Appending created elements to index.html
	array_ele2.appendChild(array_ele_label2);
	count_container.appendChild(array_ele2);
}
}

// Asynchronous Heapify function
async function Heapify(n, i) {
var blocks = document.querySelectorAll(".block");
var largest = i; // Initialize largest as root
var l = 2 * i + 1; // left = 2*i + 1
var r = 2 * i + 2; // right = 2*i + 2

// If left child is larger than root
if (
	l < n &&
	Number(blocks[l].childNodes[0].innerHTML) >
	Number(blocks[largest].childNodes[0].innerHTML)
)
	largest = l;

// If right child is larger than largest so far
if (
	r < n &&
	Number(blocks[r].childNodes[0].innerHTML) >
	Number(blocks[largest].childNodes[0].innerHTML)
)
	largest = r;

// If largest is not root
if (largest != i) {
	var temp1 = blocks[i].style.height;
	var temp2 = blocks[i].childNodes[0].innerText;
	blocks[i].style.height = blocks[largest].style.height;
	blocks[largest].style.height = temp1;
	blocks[i].childNodes[0].innerText =
	blocks[largest].childNodes[0].innerText;
	blocks[largest].childNodes[0].innerText = temp2;

	await new Promise((resolve) =>
	setTimeout(() => {
		resolve();
	}, 450)
	);

	// Recursively Hapify the affected sub-tree
	await Heapify(n, largest);
}
}

// Asynchronous HeapSort function
async function HeapSort(n) {
var blocks = document.querySelectorAll(".block");

// Build heap (rearrange array)
for (var i = n / 2 - 1; i >= 0; i--) {
	await Heapify(n, i);
}

// One by one extract an element from heap
for (var i = n - 1; i > 0; i--) {

	// Move current root to end
	var temp1 = blocks[i].style.height;
	var temp2 = blocks[i].childNodes[0].innerText;
	blocks[i].style.height = blocks[0].style.height;
	blocks[0].style.height = temp1;
	blocks[i].childNodes[0].innerText =
	blocks[0].childNodes[0].innerText;
	blocks[0].childNodes[0].innerText = temp2;

	await new Promise((resolve) =>
	setTimeout(() => {
		resolve();
	}, 250)
	);
    blocks[i].style.backgroundColor="rgb(49, 226, 13)";
	// Call max Heapify on the reduced heap
	await Heapify(i, 0);
}
blocks[i].style.backgroundColor="rgb(49, 226, 13)";
// To enable the button "Generate New Array" after final(sorted)
document.getElementById("Button1").disabled = false;
document.getElementById("Button1").style.backgroundColor = "#6f459e";

// To enable the button "Heap Sort" after final(sorted)
document.getElementById("Button2").disabled = false;
document.getElementById("Button2").style.backgroundColor = "#6f459e";
}

// Calling generatearray function
generatearray();

// function to generate new random array 
function generate()
{
  window.location.reload();
 }
  
//  function to disable the button
function disable()
{
  // To disable the button "Generate New Array"
  document.getElementById("Button1").disabled = true;
  document.getElementById("Button1").style.backgroundColor = "#d8b6ff";
  
  // To disable the button "Heap Sort"
  document.getElementById("Button2").disabled = true;
  document.getElementById("Button2").style.backgroundColor = "#d8b6ff";  
}
// Calling generate_idx function
generate_idx();


