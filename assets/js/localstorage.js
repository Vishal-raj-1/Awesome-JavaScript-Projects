const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];
const refresh = document.querySelector('.refresh');

        //to clear the whole list
        refresh.addEventListener('click',function(){
          localStorage.clear();
          location.reload();
        })

        function addItem(e){
            // below will stop the page from reloading
          e.preventDefault();
          const text = (this.querySelector('[name=item]')).value;
          const item = {
              text,
              done: false
          };
          items.push(item);
          populateList(items, itemsList);
          localStorage.setItem('items', JSON.stringify(items));
          this.reset();
        }

      //delete the list item
      function delItem(e){
        const item = e.target;
        if(item.classList[0]==='delete'){
            const list = item.parentElement;
            removelocalItems(list);
            list.remove();
        }
      }

      //remove item from local storage
      function removelocalItems(item){
        const index = item.children[0].innerText;
        items.splice(items.indexOf(index),1);
        localStorage.setItem("items",JSON.stringify(items));
      }

      //update the item list
        function populateList(plates = [], platesList) {
            platesList.innerHTML = plates.map((plate,i) => {
                return `
                <li>
                <input type = "checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
                <label for="item${i}">${plate.text}</label>
                <svg class ="delete" data-index=${i} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path  d="M292.7 840h438.6l24.2-512h-487z"></path><path d="M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zm-504-72h304v72H360v-72zm371.3 656H292.7l-24.2-512h487l-24.2 512z"></path></svg>
                </li>
                `;
            }).join('');
        }

        //to toggle between done or not done
        function toggleDone(e){
          if (!e.target.matches('input')) return; //skip this unless it's an input
          const el = e.target;
          const index = el.dataset.index;
          items[index].done = !items[index].done;
          localStorage.setItem('items', JSON.stringify(items));
          populateList(items, itemsList);

        }

        addItems.addEventListener('submit', addItem);
        itemsList.addEventListener('click', toggleDone);
        itemsList.addEventListener('click', delItem);

        populateList(items, itemsList);