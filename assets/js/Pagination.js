let content = document.querySelector(".content")

async function getData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const apiData = await response.json();
    return apiData;
}

let elementsPerPage = 10; // Assumption

function printElments(startingElement, numberOfElements) {
    getData().then(data => {
        data = data.splice(startingElement, numberOfElements);
        let str = "";
        data.forEach(item => {
            str += `<p>${item.id}. ${item.title}</p>`
        });
        content.innerHTML = str;
    })
}

printElments(0, elementsPerPage)

// Pagination functionality
let paginationLink = document.querySelectorAll(".pagination__link")

paginationLink.forEach(item => {
    item.addEventListener("click", loadPageData)
})

function loadPageData() {
    let pageNumber = parseInt(this.textContent)
    printElments(pageNumber * 10 - 10, elementsPerPage)
}