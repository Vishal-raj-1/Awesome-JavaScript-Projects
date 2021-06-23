//SETTINGS PANEL
let settings = {
    straightness: 50,
    height: 100,
    frequency: 15,
    hueStartColor: 310,
    saturationStartColor: 80,
    lightnessStartColor: 70,
    hueEndColor: 350,
    saturationEndColor: 80,
    lightnessEndColor: 10,
    smoothness: 0.6,
    angle: 0,
    fill: true,
    crazyness: true
}


//SVG
let svg = document.getElementById('svg'),
    winW = window.innerWidth,
    winH = window.innerHeight,
    Colors = [],
    Paths = [],
    Mouse = {
        x: winW / 2,
        y: winH / 2
    },
    overflow,
    startColor,
    endColor,
    gui;


//PATH
class Path {
    constructor (y, fill, angle) {
        this.rootY = y;
        this.fill = fill;
        this.angle = angle;
    };
    
    createRoot() {
        this.root = [];
        let angle = this.angle;
        let x = -overflow + angle;
        let y = 0;
        let rootY = this.rootY;
        let upSideDown = 0;

        this.root.push({ x: x, y: rootY});

        while (x < winW) {
            let value = Math.random() > 0.5 ? 1 : -1;

            // Crazyness
            if (settings.crazyness) {
                x += parseInt((Math.random() * settings.straightness / 2) + (settings.straightness / 2));
                y = (parseInt((Math.random() * settings.height / 2) + (settings.height / 2)) * value) + rootY;
            } else {
            // Geometric
                upSideDown = !upSideDown;
                value = (upSideDown == 0) ? 1 : -1;

                x += settings.straightness;
                y = settings.height * value + rootY;
            }

            this.root.push({ x: x, y: y}); 
        };

        this.root.push({ x: winW + overflow, y: rootY});
    };

    createCircles() {
        const fill = '#fff';
        this.root.forEach(function(key, obj) {
            const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            circle.setAttribute('r', 1);
            circle.setAttribute('cx', key.x);
            circle.setAttribute('cy', key.y);
            circle.setAttribute(fill, 'rgba(255, 255, 255, .3)');
            svg.appendChild(circle);
        })
    };

    createPath(){
        const root = this.root;
        const fill = this.fill;
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('fill', fill);
        path.setAttribute('stroke', fill);
        svg.appendChild(path);
        if (settings.fill) {
            svg.setAttribute('class','path');
        } else {
            svg.setAttribute('class','stroke');
        }

        // first & second points
        let d = `M -${overflow} ${winH + overflow}`;
        d += ` L ${root[0].x} ${root[0].y}`;

        // magic points
        for (let i = 1; i < this.root.length - 1; i++) {
            let prevPoint = root[i - 1];
            let actualPoint = root[i];
            let diffX = (actualPoint.x - prevPoint.x) / settings.smoothness;
            let x1 = prevPoint.x + diffX;
            let x2 = actualPoint.x - diffX;
            let x = actualPoint.x;
            let y1 = prevPoint.y;
            let y2 = actualPoint.y;
            let y = actualPoint.y;
            
            d += ` C ${x1} ${y1}, ${x2} ${y2}, ${x} ${y}`;
        }

        // Second last
        const reverseRoot = root.reverse();
        d += ` L ${reverseRoot[0].x} ${reverseRoot[0].y}`;
        root.reverse();

        // Last point
        d += ` L ${winW + overflow} ${winH + overflow}`;

        // Close path
        d += ` Z`;

        path.setAttribute('d', d);
    };

    createfrequency(){
        const root = this.root;
        const fill = this.fill;
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('fill', fill);
        path.classList.add('path');
        svg.appendChild(path);

        // first & second points
        let d = `M -${overflow} ${winH + overflow}`;
        d += ` L ${root[0].x} ${root[0].y}`;

        // Magic points
        for (let i = 1; i < root.length - 1; i++) {
            d += ` L ${root[i].x} ${root[i].y}`;
        }

        // Second last & last points
        const reverseRoot = root.reverse();
        d += ` L ${reverseRoot[0].x} ${reverseRoot[0].y}`;
        d += ` L ${winW + overflow} ${winH + overflow}`;
        root.reverse();

        // Close path
        d += ` Z`;

        path.setAttribute('d', d);
    };
};


//func
function func(){
    // Overflow
    overflow = Math.abs(settings.frequency * settings.angle);
    // Colors
    startColor = `hsl(${settings.hueStartColor}, ${settings.saturationStartColor}%, ${settings.lightnessStartColor}%)`;
    endColor = `hsl(${settings.hueEndColor}, ${settings.saturationEndColor}%, ${settings.lightnessEndColor}%)`;
    Colors = chroma.scale([startColor, endColor]).mode('lch').colors(settings.frequency + 2);
    // Reset
    Paths = [];
    document.body.removeChild(svg);
    svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute('id', 'svg');
    document.body.appendChild(svg);
    // Background
    if (settings.fill) {
        svg.style.backgroundColor = Colors[0];
    } else {
        svg.style.backgroundColor = '#000';
    }
    // frequency
    for (let i = 0; i < settings.frequency + 1; i++) {
        let rootY = parseInt(winH / settings.frequency * i);
        const path = new Path(rootY, Colors[i + 1], settings.angle * i);
        Paths.push(path);
        path.createRoot();
    }
    Paths.forEach(function(path) {
        path.createPath();
    });
};
func();


//RESIZING WINDOW
window.addEventListener('resize', function() {
    winW = window.innerWidth;
    winH = window.innerHeight;
    func();
});


//DAT GUI
function datgui(){
    gui = new dat.GUI();

    // Settings
    let guiSettings = gui.addFolder('Settings');
    guiSettings.add(settings, 'frequency', 5, 50).step(1).onChange(func);
    guiSettings.add(settings, 'straightness', 20, 300).step(1).onChange(func);
    guiSettings.add(settings, 'height', 0, 200).step(1).onChange(func);
    guiSettings.add(settings, 'angle', -20, 20).step(1).onChange(func);
    guiSettings.add(settings, 'smoothness', 0.5, 10).step(0.2).onChange(func);
    guiSettings.add(settings, 'fill', false).onChange(func);
    guiSettings.add(settings, 'crazyness', false).onChange(func);
    guiSettings.open();

    // Start Color
    let guiStartColor = gui.addFolder('Start Color');
    guiStartColor.add(settings, 'hueStartColor', 0, 360).step(1).onChange(func);
    guiStartColor.add(settings, 'saturationStartColor', 0, 100).step(1).onChange(func);
    guiStartColor.add(settings, 'lightnessStartColor', 0, 100).step(1).onChange(func);
    guiStartColor.open();

    // End Color
    let guiEndColor = gui.addFolder('End Color');
    guiEndColor.add(settings, 'hueEndColor', 0, 360).step(1).onChange(func);
    guiEndColor.add(settings, 'saturationEndColor', 0, 100).step(1).onChange(func);
    guiEndColor.add(settings, 'lightnessEndColor', 0, 100).step(1).onChange(func);
    guiEndColor.open();

    // Randomize
    let guiButtons = { 
      randomize:function(){ randomize() },
      download: function () {
        var svgNode = document.getElementById('svg');
        svgNode.setAttribute("title", 'background');
        svgNode.setAttribute("version", 1.1);
        svgNode.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        var svgStr = svgNode.outerHTML;
        var blob = new Blob([svgStr], {type: "image/svg+xml;charset=utf-8"});
        saveAs(blob, "background.svg");
      }
    };
    gui.add(guiButtons,'randomize');
    gui.add(guiButtons,'download');

    return gui;
}
datgui();

//Randomize
function randomize(){
    settings = {
        frequency: parseInt(5 + Math.random() * 45),
        straightness: parseInt(20 + Math.random()* 300),
        height: parseInt(Math.random() * 200),
        hueStartColor: parseInt(Math.random() * 360),
        saturationStartColor: 74,
        lightnessStartColor: 67,
        hueEndColor: parseInt(Math.random() * 360),
        saturationEndColor: 90,
        lightnessEndColor: 14,
        smoothness: 1 + parseInt(Math.random() * 9),
        angle: parseInt(-20 + Math.random() * 40),
        fill: Math.random() * 1 > 0.3 ? true : false,
        crazyness:  Math.random() * 1 > 0.9 ? true : false
    }
    func();
    gui.destroy();
    datgui();
}
