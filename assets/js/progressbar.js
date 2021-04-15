       //Selecting items
        let btnHtml = document.querySelectorAll('.btn-move');
        let htmlProgress = document.querySelector('.html-progress');
        let cssProgress = document.querySelector('.css-progress');
        let reactProgress = document.querySelector('.js-progress');
        let jsProgress = document.querySelector('.react-progress');
        let wordpressProgress = document.querySelector('.wordpress-progress');



btnHtml.forEach(function(eachBtn){
    //console.log(e);
    eachBtn.addEventListener('click', function(moverProgress){
        var i = 0;
        var moveBtn = moverProgress.currentTarget.classList;
       // console.log(moveBtn);
        if(moveBtn.contains('btn-html')){
            i = 1;
            var progress = htmlProgress;
            var width = 1;
            var id = setInterval(frame, 10);
            
            function frame(){
                if(width >= 80){
                    clearInterval(id);
                    i = 0;
                }else {
                    width++;
                    progress.style.width = width + '%';
                    progress.textContent = width  + '%';
                }
            }
            

        } else if( moveBtn.contains('btn-css')){
            i = 1;
            var progress = cssProgress;
            var width = 1;
            var id = setInterval(frame, 10);
            
            function frame(){
                if(width >= 70){
                    clearInterval(id);
                    i = 0;
                }else {
                    width++;
                    progress.style.width = width + '%';
                    progress.textContent = width  + '%';
                }
            }
        } else if( moveBtn.contains('btn-js')){
            i = 1;
            var progress = jsProgress;
            var width = 1;
            var id = setInterval(frame, 10);
            
            function frame(){
                if(width >= 50){
                    clearInterval(id);
                    i = 0;
                }else {
                    width++;
                    progress.style.width = width + '%';
                    progress.textContent = width  + '%';
                }
            }
        } else if( moveBtn.contains('btn-react')){
            i = 1;
            var progress = reactProgress;
            var width = 1;
            var id = setInterval(frame, 10);
            
            function frame(){
                if(width >= 45){
                    clearInterval(id);
                    i = 0;
                }else {
                    width++;
                    progress.style.width = width + '%';
                    progress.textContent = width  + '%';
                }
            }
        } else if( moveBtn.contains('btn-wordpress')){
            i = 1;
            var progress = wordpressProgress;
            var width = 1;
            var id = setInterval(frame, 10);
            
            function frame(){
                if(width >= 95){
                    clearInterval(id);
                    i = 0;
                }else {
                    width++;
                    progress.style.width = width + '%';
                    progress.textContent = width  + '%';
                }
            }
        }
    });

});