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

// Promise to swap two blocks
function swap(el1, el2) {
	return new Promise((resolve) => {

		// For exchanging styles of two blocks
		var temp = el1.style.transform;
		el1.style.transform = el2.style.transform;
		el2.style.transform = temp;

		window.requestAnimationFrame(function() {

			// For waiting for .25 sec
			setTimeout(() => {
				container.insertBefore(el2, el1);
				resolve();
			}, 250);
		});
	});
}

// Asynchronous BubbleSort function
async function BubbleSort(delay = 100) {
	var blocks = document.querySelectorAll(".block");

	// BubbleSort Algorithm
	for (var i = 0; i < blocks.length; i += 1) {
		for (var j = 0; j < blocks.length - i - 1; j += 1) {

			// To change background-color of the
			// blocks to be compared
			blocks[j].style.backgroundColor = "#FF4949";
			blocks[j + 1].style.backgroundColor = "#FF4949";

			// To wait for .1 sec
			await new Promise((resolve) =>
				setTimeout(() => {
					resolve();
				}, delay)
			);

			console.log("run");
			var value1 = Number(blocks[j].childNodes[0].innerHTML);
			var value2 = Number(blocks[j + 1]
						.childNodes[0].innerHTML);

			// To compare value of two blocks
			if (value1 > value2) {
				await swap(blocks[j], blocks[j + 1]);
				blocks = document.querySelectorAll(".block");
			}

			// Changing the color to the previous one
			blocks[j].style.backgroundColor = "#00ccff";
			blocks[j + 1].style.backgroundColor = "#00ccff";
		}

		//changing the color of greatest element
		//found in the above traversal
		blocks[blocks.length - i - 1]
				.style.backgroundColor = "#13CE66";
	}
     // To enable the button "Generate New Array" after final(sorted)
  document.getElementById("Button1").disabled = false;
  document.getElementById("Button1").style.backgroundColor = "#6f459e";
  
  // To enable the button "Bubble Sort" after final(sorted)
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
  
  // To disable the button "Bubble Sort"
  document.getElementById("Button2").disabled = true;
  document.getElementById("Button2").style.backgroundColor = "#d8b6ff";  
}
