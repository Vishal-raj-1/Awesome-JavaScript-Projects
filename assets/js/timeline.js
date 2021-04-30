const list=[
    // {
    //     "title":"29 Jan",
    //     "description":"This is auspicious day ",
    //     "date":"29-jan"
    // },
    // {
    //     "title":"29 Jan",
    //     "description":"This is auspicious day ",
    //     "date":"29-jan"
    // },
    // {
    //     "title":"29 Jan",
    //     "description":"This is auspicious day ",
    //     "date":"29-jan"
    // },
];

function render (){
    // 
    var mainBox=document.createElement('div');
    mainBox.id="mainBox"

    list.map(val=>{
        var title=document.createElement('h3');
        var titleText = document.createTextNode(val.title);
        title.appendChild(titleText);
        
        var description=document.createElement('h4');
        var descriptionText = document.createTextNode(val.description);
        description.appendChild(descriptionText);

        var date=document.createElement('h6');
        var dateText = document.createTextNode(val.date);
        date.appendChild(dateText);

        var box=document.createElement('div');
        box.className="content"
        box.appendChild(title);
        box.appendChild(description)
        box.appendChild(date)

        console.log(box)
        mainBox.appendChild(box);
    })
    var main=document.getElementById("main")

    main.appendChild(mainBox);
}