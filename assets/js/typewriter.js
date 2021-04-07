//METHOD 1
/*const TypeWriter = function (txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait);
    this.type();
    this.isDeleting = false;
}

//Type Method
TypeWriter.prototype.type = function () {
    //current index of word
    const current = this.wordIndex % this.words.length;
    //Get full text of current word
    const fullTxt = this.words[current];

    //Check if deleting
    if (this.isDeleting) {
        //remove char
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        //add char
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    //Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
    //Initial Type Speed
    let typeSpeed = 300;
    if (this.isDeleting) {
        typeSpeed /= 2;
    }
    //If word is complete
    if (!this.isDeleting && this.txt === fullTxt) {
        //3 second pause at end
        typeSpeed = this.wait;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        //Move to the next word
        this.wordIndex++;
        //Pause before start typing
        typeSpeed = 500;
    }
    setTimeout(() => this.type(), 500);
}*/
//METHOD 2
//ES6 class
class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait);
    this.type();
    this.isDeleting = false;
  }
  type() {
    //current index of word
    const current = this.wordIndex % this.words.length;
    //Get full text of current word
    const fullTxt = this.words[current];

    //Check if deleting
    if (this.isDeleting) {
      //remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      //add char
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    //Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
    //Initial Type Speed
    let typeSpeed = 300;
    if (this.isDeleting) {
      typeSpeed /= 2;
    }
    //If word is complete
    if (!this.isDeleting && this.txt === fullTxt) {
      //3 second pause at end
      typeSpeed = this.wait;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      //Move to the next word
      this.wordIndex++;
      //Pause before start typing
      typeSpeed = 500;
    }
    setTimeout(() => this.type(), typeSpeed);
  }
}
//Init on DOM Load
document.addEventListener("DOMContentLoaded", init);

//Init App
function init() {
  const txtElement = document.querySelector(".txt-type");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");
  //Init TypeWrite
  new TypeWriter(txtElement, words, wait);
}
