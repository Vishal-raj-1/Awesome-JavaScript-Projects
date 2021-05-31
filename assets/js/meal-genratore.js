

  function getrecipe(){
    recipe()
   }
   
   function getrandom(){
       rrecipe()
   }
   const recipe =async id =>{
       const search = document.getElementById("item").value;
       const box=document.getElementById('box')
       const eatingImg=document.getElementById('eating-img')
       eatingImg.style.display='none'
       box.innerHTML=''
       const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
       const res= await fetch(url)
       const data=await res.json()
       if(data.meals==null){
           box.innerHTML="<h6>Sorry, there is no such mill !</h6>"
       }
       else{
           
        for(let i=0;i<data.meals.length;i++){
            const box=document.getElementById('box')
            const each = document.createElement('div')
            let title = document.createElement("h5");
            let src = document.createElement("h5");
   
            let img = document.createElement('p')
            let button = document.createElement('button')
            
   
            img1 =`<img src=${data.meals[i].strMealThumb}>`
            title1=`${data.meals[i].strMeal}`
   
           src1=`<a href=${data.meals[i].strSource}' target="_b">Get the Recipe</a>`  
            title.innerHTML=title1;
            img.innerHTML=img1
            src.innerHTML=src1
            each.appendChild(title)
   
            each.appendChild(img)
            each.appendChild(src)
            box.appendChild(each)
            box.classList.remove("box1");
   
            box.classList.add('box')
            each.classList.add('each')

        }
       }
    
   }
   
   const rrecipe =async id =>{
       const box=document.getElementById('box')
       const eatingImg=document.getElementById('eating-img')
       eatingImg.style.display='none'
   
       box.innerHTML=''
       const url='https://www.themealdb.com/api/json/v1/1/random.php'
       const res= await fetch(url)
       const data=await res.json()
           
            const each = document.createElement('div')
            let title = document.createElement("h5");
            let src = document.createElement("h5");
   
            let img = document.createElement('p')
            let button = document.createElement('button')
            
   
            img1 =`<img src=${data.meals[0].strMealThumb}>`
            title1=`${data.meals[0].strMeal}`
   
           src1=`<a href=${data.meals[0].strSource}' target="_b">Get the Recipe</a>`  
            title.innerHTML=title1;
            img.innerHTML=img1
            src.innerHTML=src1
            each.appendChild(title)
   
            each.appendChild(img)
            each.appendChild(src)
            box.appendChild(each)
            box.classList.remove("box");
   
            box.classList.add('box1')
            each.classList.add('each')
             
       
   }
   
   
   