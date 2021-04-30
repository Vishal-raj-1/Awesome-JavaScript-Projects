function showPreview() {
    var htmlCode = document.getElementById("htmlCode").value;
    var cssCode = "<style>" +document.getElementById("cssCode").value+"</style>";
    var jsCode = "<scri"+"pt>" + document.getElementById("jsCode").value + "</scri"+"pt>";
    var frame = document.getElementById("preview-window").contentWindow.document;
    frame.open();
    frame.write(htmlCode + cssCode + jsCode);
    frame.close();
}

