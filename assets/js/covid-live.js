const tab = document.getElementById('tab');

const live = async id => {
    const url = 'https://api.covid19india.org/data.json';
    const res = await fetch(url)
    const data = await res.json()
    for (let i = 0; i < 38; i++) {
        console.log(data.statewise[i]);

        const t = document.createElement('tr')
        const innerH = `

        <td>${data.statewise[i].state}</td>
        <td>${data.statewise[i].confirmed}</td>
        <td>${data.statewise[i].recovered}</td>
        <td>${data.statewise[i].deaths}</td>
        <td>${data.statewise[i].active}</td>
       
        `
        t.innerHTML = innerH
        tab.appendChild(t)
    }
}
live()

