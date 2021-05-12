function changeImageSrc(source) {
  console.log(source);
  var shoe = document.getElementById("shoeImg");
  shoe.src = `../assets/Images/ProductCard/${source}.png`;
}
