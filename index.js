function addDarkmodeWidget() {
    new Darkmode().showWidget();
}
window.addEventListener('load', addDarkmodeWidget);

const options = {
    bottom: '100px', // default: '32px'
    right: 'unset', // default: '32px'
    left: '32px', // default: 'unset'
    time: '0.9s', // default: '0.3s'
    mixColor: '#fff', // default: '#fff'
    backgroundColor: '#fff', // default: '#fff'
    buttonColorDark: '#100f2c', // default: '#100f2c'
    buttonColorLight: '#fff', // default: '#fff'
    saveInCookies: true, // default: true,
    label: '🌓', // default: ''
    autoMatchOsTheme: true // default: true
}

const darkmode = new Darkmode(options);
darkmode.showWidget();

(
    function (w, d) {
        w.CollectId = "60b4f9907948c2395d09a422";
        var h = d.head || d.getElementsByTagName("head")[0];
        var s = d.createElement("script");
        s.setAttribute("type", "text/javascript");
        s.async = true;
        s.setAttribute("src", "https://collectcdn.com/launcher.js");
        h.appendChild(s);
    })
    (window, document);