const APIController = (function () {
  
    //private methods
  
    //Function to get Token
    const _getToken = async () => {
      const result = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: 'Basic ' + btoa('2a3547845b8b4aac94ec6a200722186e' + ':' + '2c766ffbd67e4b23b0e44e77d289a230'),
        },
        body: 'grant_type=client_credentials',
      })
      const data = await result.json()
      return data.access_token
    }
  
    //Function to get Genres
    const _getGenres = async (token) => {
      const result = await fetch(
        `https://api.spotify.com/v1/browse/categories?locale=sv_US`,
        {
          method: 'GET',
          headers: { Authorization: 'Bearer ' + token },
        },
      )
  
      const data = await result.json()
      return data.categories.items
    }
  
    //Function to get playlist by selected genre
    const _getPlaylistByGenre = async (token, genreId) => {
      const limit = 10
  
      const result = await fetch(
        `https://api.spotify.com/v1/browse/categories/${genreId}/playlists?limit=${limit}`,
        {
          method: 'GET',
          headers: { Authorization: 'Bearer ' + token },
        },
      )
  
      const data = await result.json()
      return data.playlists.items
    }
  
    // Function to get tracks
    const _getTracks = async (token, tracksEndPoint) => {
      const limit = 10
  
      const result = await fetch(`${tracksEndPoint}?limit=${limit}`, {
        method: 'GET',
        headers: { Authorization: 'Bearer ' + token },
      })
  
      const data = await result.json()
      return data.items
    }
  
    // Function to get individual track
    const _getTrack = async (token, trackEndPoint) => {
      const result = await fetch(`${trackEndPoint}`, {
        method: 'GET',
        headers: { Authorization: 'Bearer ' + token },
      })
  
      const data = await result.json()
      return data
    }
  
    return {
      getToken() {
        return _getToken()
      },
      getGenres(token) {
        return _getGenres(token)
      },
      getPlaylistByGenre(token, genreId) {
        return _getPlaylistByGenre(token, genreId)
      },
      getTracks(token, tracksEndPoint) {
        return _getTracks(token, tracksEndPoint)
      },
      getTrack(token, trackEndPoint) {
        return _getTrack(token, trackEndPoint)
      },
    }
  })()
  
  //UI class
  
  const UIController = (function () {
    const DOMElements = {
      selectGenre: '#select_genre',
      selectPlaylist: '#select_playlist',
      buttonSubmit: '#btn_submit',
      divSongDetail: '#song-detail',
      hfToken: '#hidden_token',
      divSonglist: '.song-list',
    }
  
    return {
      inputField() {
        return {
          genre: document.querySelector(DOMElements.selectGenre),
          playlist: document.querySelector(DOMElements.selectPlaylist),
          tracks: document.querySelector(DOMElements.divSonglist),
          submit: document.querySelector(DOMElements.buttonSubmit),
          songDetail: document.querySelector(DOMElements.divSongDetail),
        }
      },
      createGenre(text, value) {
        const html = `<option value="${value}">${text}</option>`
        document
          .querySelector(DOMElements.selectGenre)
          .insertAdjacentHTML('beforeend', html)
      },
  
      createPlaylist(text, value) {
        const html = `<option value="${value}">${text}</option>`
        document
          .querySelector(DOMElements.selectPlaylist)
          .insertAdjacentHTML('beforeend', html)
      },
  
      createTrack(id, name) {
        const html = `<a href="#" class="list-group-item list-group-item-action list-group-item-light" id="${id}">${name}</a>`
        document
          .querySelector(DOMElements.divSonglist)
          .insertAdjacentHTML('beforeend', html)
      },
  
      createTrackDetail(img, title, artist) {
        const detailDiv = document.querySelector(DOMElements.divSongDetail)
        detailDiv.innerHTML = ''
  
        const html = `
              <div class="holder">
                  <div class="row col-sm-12 px-0" align="center">
                      <img src="${img}" alt="">        
                  </div>
                  <div class="row col-sm-12 px-0" align="center">
                      <label for="Genre" class="form-label col-sm-12 genre">${title}</label>
                  </div>
                  <div class="row col-sm-12 px-0" align="center">
                      <label for="artist" class="form-label col-sm-12 artist">By ${artist}</label>
                  </div> 
              </div>
              `
  
        detailDiv.insertAdjacentHTML('beforeend', html)
      },
  
      resetTrackDetail() {
        this.inputField().songDetail.innerHTML = ''
      },
  
      resetTracks() {
        this.inputField().tracks.innerHTML = ''
        this.resetTrackDetail()
      },
  
      resetPlaylist() {
        this.inputField().playlist.innerHTML = ''
        this.resetTracks()
      },
  
      storeToken(value) {
        document.querySelector(DOMElements.hfToken).value = value
      },
  
      getStoredToken() {
        return {
          token: document.querySelector(DOMElements.hfToken).value,
        }
      },
    }
  })()
  
  const APPController = (function (UICtrl, APICtrl) {
    // get input field object ref
    const DOMInputs = UICtrl.inputField()
  
    // get genres on page load
    const loadGenres = async () => {
      //get token
      const token = await APICtrl.getToken()
      //store the token onto the page
      UICtrl.storeToken(token)
      //get the genres
      const genres = await APICtrl.getGenres(token)
      //populate our genres select element
      genres.forEach((element) => UICtrl.createGenre(element.name, element.id))
    }
  
    // create genre change event listener
    DOMInputs.genre.addEventListener('change', async () => {
      //reset the playlist
      UICtrl.resetPlaylist()
      //get the token that's stored on the page
      const token = UICtrl.getStoredToken().token
      // get the genre select field
      const genreSelect = UICtrl.inputField().genre
      // get the genre id associated with the selected genre
      const genreId = genreSelect.options[genreSelect.selectedIndex].value
      // ge the playlist based on a genre
      const playlist = await APICtrl.getPlaylistByGenre(token, genreId)
      // create a playlist list item for every playlist returned
      playlist.forEach((p) => UICtrl.createPlaylist(p.name, p.tracks.href))
    })
  
    // create submit button click event listener
    DOMInputs.submit.addEventListener('click', async (e) => {
      // prevent page reset
      e.preventDefault()
      // clear tracks
      UICtrl.resetTracks()
      //get the token
      const token = UICtrl.getStoredToken().token
      // get the playlist field
      const playlistSelect = UICtrl.inputField().playlist
      // get track endpoint based on the selected playlist
      const tracksEndPoint =
        playlistSelect.options[playlistSelect.selectedIndex].value
      // get the list of tracks
      const tracks = await APICtrl.getTracks(token, tracksEndPoint)
      // create a track list item
      tracks.forEach((el) => UICtrl.createTrack(el.track.href, el.track.name))
    })
  
    // create song selection click event listener
    DOMInputs.tracks.addEventListener('click', async (e) => {
      // prevent page reset
      e.preventDefault()
      UICtrl.resetTrackDetail()
      // get the token
      const token = UICtrl.getStoredToken().token
      // get the track endpoint
      const trackEndpoint = e.target.id
      //get the track object
      const track = await APICtrl.getTrack(token, trackEndpoint)
      // load the track details
      UICtrl.createTrackDetail(
        track.album.images[2].url,
        track.name,
        track.artists[0].name,
      )
    })
  
    return {
      init() {
        console.log('App is starting')
        loadGenres()
      },
    }
  })(UIController, APIController)
  
  //Call a method to load the genres on page load
  APPController.init()