
const form = document.querySelector('#search-form');
const container = document.querySelector('#container');



form.addEventListener('submit',async function(e){
    e.preventDefault();
    
    const searchTerm = form.elements.query.value;

    const config = { params: { q:searchTerm}}
    const res = await axios.get(`http://api.tvmaze.com/search/shows`,config);

    clear();
    displayShows(res.data);

    form.elements.query.value='';
})

const displayShows = (shows) =>{
    for (let res of shows){
        
        if(res.show.image){
            const div = addShow(res);
            container.appendChild(div);
        }
        
    }
}

const addShow = (res) => {
            
            const div=document.createElement('DIV');

            const img=document.createElement('IMG');
            img.src = res.show.image.medium;

            const spanName=document.createElement('P');
            spanName.textContent=res.show.name;

            div.append(img);

            return div;
}

function clear(shows){
    container.innerHTML = '';
}