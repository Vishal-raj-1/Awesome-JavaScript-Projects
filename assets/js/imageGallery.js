
let Gallery = function(selector) {
    isTrue = false;
    this.argumens = arguments;
    this.gallerySelector = document.querySelectorAll(selector);
    this.activeImage; // active (open) image
    this.bodyCover = document.createElement('div');
    
    if (!document.querySelector('.body-cover')) {
        document.body.appendChild(this.bodyCover);
        this.bodyCover.classList.add('body-cover');
        document.body.appendChild(this.bodyCover);
        var bodyCoverDeps = `<div>
           
            <div class="gallery-arrow next-btn">
            <a href="#" class="next round">&#8250;</a>
            </div>
            <div class="gallery-arrow prev-btn">
            <a href="#" class="previous round">&#8249;</a>
            </div>
            <a href="#" class="closeButton" >&times;</a>
        </div>`;
        bodyCoverDeps = document.createRange().createContextualFragment(bodyCoverDeps).firstElementChild
        this.bodyCover.appendChild(bodyCoverDeps);
    }

    this.nextBtn = document.querySelector('.next-btn'); // next button
    this.prevBtn = document.querySelector('.prev-btn'); // previous button
    this.closeBtb = document.querySelector('.closeButton'); // close image button

    this.gallerySequence = 0; // gallery
    this.galleryItemSequence = 0; // gallery image

    // Adding cols class
    this.gallerySelector[0].classList.add(`cols-${this.argumens[1].cols}`);

    // Original images
    this.originalImages = {} // galleries with images

    // init functions
    this.generateItems();
    this.closeImage();
    this.styles();
}
//ON hovering at images
$(document).ready(function(){
    $(".fg-gallery img").hover(function(){
      $(this).css("opacity", "1");
      }, function(){
      $(this).css("opacity", "0.8");
    });
  });
// Generate image items
Gallery.prototype.generateItems = function() {
    let This = this;
    this.gallerySelector.forEach(function(galleryContainer, i) {
        This.originalImages[`gallery${i}`] = []

        galleryContainer.querySelectorAll('img').forEach(function(imageItems, key) {
            This.originalImages[`gallery${i}`].push(imageItems); // Save original images

            // create new image elements
            var newImages = '';
            newImages += `<div class="gallery-items" style="background: url(${imageItems.src}) center / cover; "></div>`
            newImages = galleryContainer.appendChild(document.createRange().createContextualFragment(newImages).firstElementChild);
            imageItems.remove(); // Remove original images
            
            // open image
            newImages.onclick = function() {
                This.galleryItemSequence = key;
                This.gallerySequence = i;
                This.next();
                This.back();

                This.bodyCover.classList.add('active'); // active background cover
                This.activeImage = This.originalImages[`gallery${i}`][key].cloneNode(true);
                This.bodyCover.appendChild(This.activeImage);
                imagePopResize(This.activeImage);
            }

            // sizing image on window resize
            window.addEventListener('resize', function() {
				if (This.activeImage) {
                    imagePopResize(This.activeImage);
                }
			})
                
            // sizing image
            function imagePopResize(elem) {
				if (elem.naturalWidth < window.innerWidth && elem.naturalHeight < window.innerHeight ) {
					elem.style.width = 'auto';
					elem.style.height = 'auto';
				} 

				if (elem.offsetWidth > window.innerWidth) {
                    elem.style.width = 'auto';
					elem.style.height = '60%';
				}

				if (elem.offsetHeight > window.innerHeight) {
                    elem.style.width = '50%';
					elem.style.height = 'auto';
				}
			}
        })
    })
}
// next
Gallery.prototype.next = function() {
    this.nextBtn.onclick = () => {
        this.galleryItemSequence++
        if (this.galleryItemSequence < this.originalImages[`gallery${this.gallerySequence}`].length) {
            this.activeImage.src = this.originalImages[`gallery${this.gallerySequence}`][this.galleryItemSequence].src;
        } else {
            this.galleryItemSequence = 0
            this.activeImage.src = this.originalImages[`gallery${this.gallerySequence}`][0].src;
        }
    }
}

// back
Gallery.prototype.back = function() {
    this.prevBtn.onclick = () => {
        this.galleryItemSequence--;
        if (this.galleryItemSequence > -1) {
            this.activeImage.src = this.originalImages[`gallery${this.gallerySequence}`][this.galleryItemSequence].src
        } else {
            this.galleryItemSequence = this.originalImages[`gallery${this.gallerySequence}`].length - 1
            this.activeImage.src = this.originalImages[`gallery${this.gallerySequence}`][this.galleryItemSequence].src
        }
    }
}

// close image
Gallery.prototype.closeImage = function() {
    this.bodyCover.onclick = (e) => {
    if (e.target.classList.contains('active') || e.target.classList.contains('closeButton') || e.target.classList.contains('close-svg')) {
            this.bodyCover.classList.remove('active');
           this.bodyCover.querySelector('img').remove();
        }
    }
}

// applying styles 
Gallery.prototype.styles = function() {
    if (typeof this.argumens[1].style) {
        for (const key in this.argumens[1].style) {
            document.querySelectorAll(`${this.argumens[0]} .gallery-items`).forEach(items => {
                items.style[key] = this.argumens[1].style[key]
            })
        }        
    }
}
