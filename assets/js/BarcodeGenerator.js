const text = document.querySelector(".textInput");
const generate = document.querySelector(".generate");

generate.addEventListener("click", (event) => {
  let value = text.value;
  if (value === "") {
    alert("Enter proper value");
  } else {
    JsBarcode("#barcode", value);
  }
});
