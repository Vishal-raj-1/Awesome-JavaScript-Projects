let l = document.querySelectorAll('.list');
let item = document.querySelectorAll('.itembox');

for(let i=0; i<l.length; i++)
{
    // here use addEventListener,when you click then the function called
    l[i].addEventListener('click', function(){
        for(let j=0;j<l.length; j++)
        {
            l[j].classList.remove('active');
        }
        this.classList.add('active');

        let dataFilter = this.getAttribute('data-filter');

        for(let j=0; j<item.length; j++)
        {
            item[j].classList.remove('active');
            item[j].classList.add('hide');

            if(item[j].getAttribute('data-item') == dataFilter || dataFilter == "all")
            {
                item[j].classList.remove('hide');
                item[j].classList.add('active');
            }
        }
    })
}



