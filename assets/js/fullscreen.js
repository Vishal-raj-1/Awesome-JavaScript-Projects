(function () {

    var fsicon = document.createElement('img');
    var srcFSI = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAI1JREFUeNrsV0EOwCAI6w/8/6lP8gk8ZTuPLUoirltCEy8mpY0iIAAcg0WsgxONreIRE4+bhnzYr05AkgO2wQQHV3wxwAmBieJe6xY8w0Q0BlcDZHOngXqA1zPziE68BTjNmWDGM4qKexNEoVAoJPVzWSGSlmJpM3q1HcsHEvlI9omhtL5m9TWT5cApwAD/IigEZttSgAAAAABJRU5ErkJggg==';
    var srcFSIexit = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABVQTFRFAAAAAAAAAAAAAAAAAAAAAAAAAAAAEgEApAAAAAZ0Uk5TAA+fz9/vpTOW9gAAAJNJREFUKM/NkkEKwyAUBSeeQOoFDAX3duERcoQcQJN3/yN08RVLUui2fyE4Ph/IyPLiY56eoDj3TpmiOkFSI2lEPE6qtgSA3A+TtBaA9pAq4KRTANr77SQZUO93E1j9sg9wegDCTGQAygTN80fz+3FsAxx8T1w7nHQY2CySpJgAqpMq3QVANA3mwo/6eld5k339Dm89PDdxiEGVaQAAAABJRU5ErkJggg==';
    fsicon.src = srcFSI;
    fsicon.id = 'fsicon';
    
    fsicon.style.opacity = 0.5;
    fsicon.style.filter = 'alpha( opacity=50 )';
    fsicon.style.cursor = 'pointer';
    fsicon.style.zIndex = 2000;
    fsicon.style.top = '10px';
    fsicon.style.right = '10px';
    fsicon.style.position = 'fixed';
        
        
    var cto; 
    fsicon.style.transitionDuration = '1s'; 
    document.onmousemove = function(){ 
        clearTimeout(cto); 
        fsicon.style.opacity = 0.5;  
        cto = setTimeout(function(){fsicon.style.opacity = 0;},5000);
    }
    
    document.body.appendChild(fsicon);
    
    
        var fsicon = document.getElementById("fsicon");
    
        if (fsicon) {
            fsicon.addEventListener("click", function () {
              if(fsicon.getAttribute('src')!=srcFSIexit){
                    var docElm = document.documentElement;
                    if (docElm.requestFullscreen) {
                        docElm.requestFullscreen();
                    }
                    else if (docElm.mozRequestFullScreen) {
                        docElm.mozRequestFullScreen();
                    }
                    else if (docElm.webkitRequestFullScreen) {
                        docElm.webkitRequestFullScreen();
                    }
                }else{
                    if (document.exitFullscreen) {
                        document.exitFullscreen();
                    }
                    else if (document.mozCancelFullScreen) {
                        document.mozCancelFullScreen();
                    }
                    else if (document.webkitCancelFullScreen) {
                        document.webkitCancelFullScreen();
                    }
                }
                
            }, false);
        }
        if (fsicon) {
            document.addEventListener("fullscreenchange", function () {
                 if(document.fullscreenElement){
                    fsicon.setAttribute('src',srcFSIexit);
                 }else{
                    fsicon.setAttribute('src',srcFSI);
                 };
                
            }, false);
            
            document.addEventListener("mozfullscreenchange", function () {
                if(document.mozFullScreen){
                    fsicon.setAttribute('src',srcFSIexit);
                 }else{
                    fsicon.setAttribute('src',srcFSI);
                 };
            }, false);
            
            document.addEventListener("webkitfullscreenchange", function () {
                if(document.webkitIsFullScreen){
                    fsicon.setAttribute('src',srcFSIexit);
                 }else{
                    fsicon.setAttribute('src',srcFSI);
                 };
            }, false);
        }
        
    })();