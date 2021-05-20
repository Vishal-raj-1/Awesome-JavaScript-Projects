function productCount(product){
    const inputBtn = document.getElementById('input').value;
    const newInputBtn = parseInt(inputBtn);
    let total = newInputBtn;
    if(product == true){
     total = newInputBtn + 1;
    }
    if(product == false && newInputBtn > 0){
     total = newInputBtn - 1;
    }
    document.getElementById('quantity').innerText = document.getElementById('input').value = total;
    
 }

 const buyBtn = document.getElementById('buy');
 buyBtn.addEventListener('click', function(){
    const inputBtn =   document.getElementById('quantity').innerText =  document.getElementById('input').value;
    const newInputBtn = parseInt(inputBtn);

    const total = newInputBtn * 78;
    document.getElementById('total-price').innerText = total;
 })