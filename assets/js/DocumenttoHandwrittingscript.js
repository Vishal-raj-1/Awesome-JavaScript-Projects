window.onload = function () {
    var fileupload = document.getElementById("pageUploader");
    var button = document.getElementById("btnPageUpload");
    button.onclick = function () {
        fileupload.click();
    };
    fileupload.onchange = function () {
        console.log("page Uploader Triggered.")
        var reader = new FileReader();
        reader.readAsDataURL(fileupload.files[0]);
        reader.onload = function (e) {
            img = loadImage(e.target.result);
        }
    };

    var fontupload = document.getElementById("fontUploader");
    button = document.getElementById("btnFontUpload");
    button.onclick = function () {
        fontupload.click();
    };
    fontupload.onchange = function () {
        console.log("font Uploader Triggered.")
        var reader = new FileReader();
        reader.readAsDataURL(fontupload.files[0]);
        reader.onload = function (e) {
            myFont.push(loadFont(e.target.result))
            myFonts += 1
            fontNum = myFonts - 1
        }
    };


    loadDarkModeFromLocalStorage();
    darkLightToggle()
};

function loadDarkModeFromLocalStorage(){
    isDark = boolean(localStorage.isDark)
    document.getElementById('darkmode').checked = isDark
}

function darkLightToggle() {
    saveLocalStorageDarkMode();
    isDark = document.getElementById('darkmode').checked
    if (isDark) {
        var link = document.createElement('link');  
        link.rel = 'stylesheet';  
        link.type = 'text/css'; 
        link.href = '../assets/css/DocumenttoHandwrittingdark.css';  
        link.id = "darkcss";
        document.getElementsByTagName('head')[0].appendChild(link)
    } else {
        if (document.contains(document.getElementById("darkcss"))) {
            document.getElementById('darkcss').remove()
        }
    }
 }

 function saveLocalStorageDarkMode(){
    isDark = document.getElementById('darkmode').checked
    localStorage.isDark = isDark
 }
