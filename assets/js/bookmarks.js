


if (localStorage.length > 0)
{
    showBookmarks();
}

let form = document.getElementById("form");

form.addEventListener("submit", (e) =>
{
    e.preventDefault();

    let title = document.getElementById("title");
    let desc = document.getElementById("desc");
    let url = document.getElementById("url");

    let bookmarks = localStorage.getItem("bookmarks");

    if (bookmarks == null)
    {
        bookmarksObj = [];
    }
    else
    {
        bookmarksObj = JSON.parse(bookmarks);
    }

    let data = {
        title: title.value,
        desc: desc.value,
        url: url.value,
    }

    bookmarksObj.push(data);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarksObj));

    title.value = "";
    desc.value = "";
    url.value = "";

    showBookmarks();
})

function showBookmarks()
{
    let bookmarks = localStorage.getItem("bookmarks");

    if (bookmarks == null)
    {
        bookmarksObj = [];
    }
    else
    {
        bookmarksObj = JSON.parse(bookmarks);
    }

    let html = "";

    if (bookmarksObj.length >= 0)
    {
        bookmarksObj.forEach((el, i) =>
        {
            html += `
            
            <div class="card ${ i % 2 === 0 ? "dark" : "light" }">
        <div class="card__title">
        <a class="card_link"  href="${ el.url }" target="_blank"> <h3> ${ el.title } </h3> </a>
            <span id=${ i } onClick="delete_bookmark(this.id)"> &times; </span>
        </div>
        <div class="card__content">
            <p> ${ el.desc } </p>
        </div>
        </div>
            `;
        })

        let mainDiv = document.getElementById("mainDiv");
        mainDiv.innerHTML = html;
    }
}


function delete_bookmark(id)
{
    let bookmarks = localStorage.getItem("bookmarks");

    if (bookmarks.length === 0)
    {
        bookmarksObj = [];
    }
    else
    {
        bookmarksObj = JSON.parse(bookmarks);
    }

    if (bookmarksObj.length > 0)
    {
        bookmarksObj.splice(id, 1);
        localStorage.setItem("bookmarks", JSON.stringify(bookmarksObj));
    }

    showBookmarks();
}

