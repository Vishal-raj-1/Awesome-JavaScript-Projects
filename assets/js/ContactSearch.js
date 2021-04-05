let filterInput = document.querySelector('#filterInput');
filterInput.addEventListener('input', filterNames);

function filterNames(){
    let filterValue = filterInput.value.toUpperCase();

    let ul = document.querySelector('#names');

    let li = ul.querySelectorAll('.collection-item');

    for(let i = 0;i < li.length;i++){
      let a = li[i].getElementsByTagName('a')[0];

      if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
        li[i].style.display = '';
      } else {
        li[i].style.display = 'none';
      }

  }

}