var container = document.getElementById("array");

// Function to generate the array of blocks
function generatearray() {

	// Creating an array
	var arr = [];

	// Filling array with random values
	for (var i = 0; i < 20; i++) {

		// Return a value from 1 to 100 (both inclusive)
		var val = Number(Math.ceil(Math.random() * 100));
		arr.push(val);
	}

	// Sorting Array in ascending order
	arr.sort(function(a, b) {
		return a - b;
	});

	for (var i = 0; i < 20; i++) {
		var value = arr[i];

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

// Asynchronous TernarySearch function
async function TernarySearch(delay = 700) {
	var blocks = document.querySelectorAll(".block");
	var output = document.getElementById("text");

	// Extracting the value entered by the user
	var num = document.getElementById("fname").value;

	// Colouring all the blocks voilet
	for (var i = 0; i < blocks.length; i += 1) {
		blocks[i].style.backgroundColor = "#00ccff";
	}

	output.innerText = "";

	// TernarySearch Algorithum
	var start = 0;
	var end = 19;
	var flag = 0;
	while (start <= end) {
		var mid1 = Math.floor(start + (end - start) / 3);
		var mid2 = Math.floor(end - (end - start) / 3);

		// Extracting values of mid1 and mid2 blocks
		var value1 = Number(blocks[mid1].childNodes[0].innerHTML);
		var value2 = Number(blocks[mid2].childNodes[0].innerHTML);

		// Changing color to red
		blocks[mid1].style.backgroundColor = "#FF4949";
		blocks[mid2].style.backgroundColor = "#FF4949";

		// To wait for .1 sec
		await new Promise((resolve) =>
			setTimeout(() => {
				resolve();
			}, delay)
		);

		// Number entered by the user equals to
		// element at mid1
		if (value1 == num) {
			output.innerText = "Element Found";
			blocks[mid1].style.backgroundColor = "#13CE66";
			flag = 1;
			break;
		}

		// Number entered by the user equals to
		// element at mid2
		if (value2 == num) {
			output.innerText = "Element Found";
			blocks[mid2].style.backgroundColor = "#13CE66";
			flag = 1;
			break;
		}

		if (num < value1) {
			end = mid1 - 1;
		} else if (num > value2) {
			start = mid2 + 1;
		} else {
			start = mid1 + 1;
			end = mid2 - 1;
		}
	}

	if (flag === 0) {
		output.innerText = "Element Not Found";
	}
     // To enable the button "Generate New Array" after final(sorted)
  document.getElementById("Button1").disabled = false;
  document.getElementById("Button1").style.backgroundColor = "#6f459e";
  
  // To enable the button "Ternary Search" after final(sorted)
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
  
  // To disable the button "Ternary Search"
  document.getElementById("Button2").disabled = true;
  document.getElementById("Button2").style.backgroundColor = "#d8b6ff";  
}