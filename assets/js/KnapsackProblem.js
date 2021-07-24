let count = 1;
let totalProfit = 0;

function addItem(){
    count = count + 1;
    let container = document.getElementById("itemInformations");
    container.appendChild(document.createTextNode("Item " + count + " "));
    // Create an <input> element, set its type and name attributes
    let input = document.createElement("input");
    input.type = "number";
    input.name = "item" + count;
    input.id = "item" + count;
    input.class = "item";
    input.placeholder = "Enter Weight (KG)"
        
    container.appendChild(input);

    container.appendChild(document.createTextNode(" Profit " + count + " "));
    // Create an <input> element, set its type and name attributes
    let input2 = document.createElement("input");
    input2.type = "number";
    input2.name = "profit" + count;
    input2.id = "profit" + count;
    input.class = "item";
    input2.placeholder = "Enter Profit";
        
    container.appendChild(input2);

    // Append a line break 
    container.appendChild(document.createElement("br"));
}

function deleteItem(){
    
    // Container <div> where dynamic content will be placed
    let container = document.getElementById("itemInformations");
    // 5 remove child is called to remove child (br, input ,text) for 1 item
    if (container.hasChildNodes() && count!=1) {
        container.removeChild(container.lastChild);
        container.removeChild(container.lastChild);
        container.removeChild(container.lastChild);
        container.removeChild(container.lastChild);
        container.removeChild(container.lastChild);
        count = count - 1;
    }
}

function resetBtn(){
    let resultContainer = document.getElementById("result");

    while(resultContainer.hasChildNodes){
        resultContainer.removeChild(container.lastChild);
    }
}

let theItems = [];

function calculate(){
    
    for(let i = 0; i< count; i++){
        theItems[i] = { name: "thename", weight: 0, profit: 0, profitWeight: 0, amount: 0};
    }
    //let profitWeight = [count];
    let knapsackWeight = document.getElementById("knapsackWeight").value;
    
    container = document.getElementById("itemInformations");

    if(count >= 1){
        for(let x = 1, j = 0; j < count; j++, x++){
            
            let itemName = "item" + x.toString();
            let profitName = "profit" + x.toString();

            let weight = document.getElementById(itemName).value;
            let profit = document.getElementById(profitName).value;
            
            theItems[j].profit = profit;
            theItems[j].weight = weight;
            theItems[j].name = itemName;
            theItems[j].profitWeight = profit/weight;
            
        }
        let flag = count;

        //sorting the array of items decending order of profitWeight
        theItems.sort(function(a,b){
            if (a.profitWeight > b.profitWeight)
            return -1;
            if (a.profitWeight < b.profitWeight)
            return 1;

            return 0;
        });
        
        for(let i = 0; i < count; i++){
            
            if (knapsackWeight >= theItems[i].weight){
                //
                knapsackWeight = knapsackWeight - theItems[i].weight;
                //setting the amount to 1 as it will be chosen
                theItems[i].amount = 1;
                totalProfit += theItems[i].profit;

            }
            else{
                //set the amount to be taken as 0 as it will not be pick
                theItems[i].amount = 0;
            }
        }




    }

    theItems.sort(function(a,b){
        if (a.name < b.name)
        return -1;
        if (a.name > b.name)
        return 1;

        return 0;
    });
    


    let finalResult = "";
    for(let i = 0; i < count; i++){
        finalResult = finalResult.concat(theItems[i].amount.toString()) + " , ";
    }

    finalResult = finalResult.replace(/,\s*$/, "");

    let resultContainer = document.getElementById("result");

    

    resultContainer.appendChild(document.createTextNode("( " + finalResult + ")"));

    resultContainer.appendChild(document.createElement("br"));

    
    

}
