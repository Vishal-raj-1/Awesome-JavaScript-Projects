
const youTube_Search_URL ='https://www.googleapis.com/youtube/v3/search';

function getList(searchTerm) {
    $.getJSON(youTube_Search_URL, {
        part: 'snippet',
        key: 'AIzaSyD8toFF1LTsCzBZLwEgtHDy2ArttyNfmhE',
        q: searchTerm,
        maxResults: 10,
    },
  function (data) {
      if(data.pageInfo.totalResults === 0) {
          alert('No Results!');
      }
      displayResults(data.items);
  }
 );
}

function displayResults(videos) {
    let html = "";
    $.each(videos, function(index,video) {
        console.log(video.snippet.title);
        console.log(video.snippet.thumbnails.high.url);
        html = html + "<li><p>" + 
        video.snippet.title + 
        "</p><a target='_blank' href='https://www.youtube.com/watch?v=" + video.id.videoId + "'><img src='" + video.snippet.thumbnails.high.url + "'/></a></li>";
    });
    $('.resultsBox ul').html(html);
}
function searchResults() {
$('.js-search-form').submit(function(event) {
    event.preventDefault();
    getList($('#search-term').val());
  });
}

function handleSearch() {
    getList();
    displayResults();
    searchResults();
}

$(handleSearch);