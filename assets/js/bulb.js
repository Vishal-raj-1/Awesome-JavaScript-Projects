function turnOnOff() {	
    var image = document.getElementById('Image'); 
    var Switch= document.getElementById('Switch');
    
    if (image.src.match("RHIGZ")) 
    {
        Switch.src="https://cdn.pixabay.com/photo/2012/04/16/13/27/switch-36000__340.png";
        image.src = "https://t4.ftcdn.net/jpg/00/51/20/61/240_F_51206163_eQGOsejUkqB13Y519PKhKVxwqRonQxiu.jpg"; 
    }
    else
    {
        Switch.src="https://cdn.pixabay.com/photo/2012/04/18/13/25/light-switch-37017__340.png"
        image.src = "https://t4.ftcdn.net/jpg/00/51/20/61/240_F_51206166_RHIGZE9tHv5v5nhgktJJOJLSzMZvU85m.jpg"; 
    }
}