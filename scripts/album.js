var albumPicasso = {
    title: 'The Colors',
    artist: 'Pablo Picasso',
    label: 'Cubism',
    year: '1881',
    albumArtUrl: 'assets/images/album_covers/01.png',
    songs: [
        { title: 'Blue', duration: '4:26' },
        { title: 'Green', duration: '3:14' },
        { title: 'Red', duration: '5:01' },
        { title: 'Pink', duration: '3:21'},
        { title: 'Magenta', duration: '2:15'}
    ]
};

var albumMarconi = {
    title: 'The Telephone',
    artist: 'Guglielmo Marconi',
    label: 'EM',
    year: '1909',
    albumArtUrl: 'assets/images/album_covers/20.png',
    songs: [
        { title: 'Hello, Operator?', duration: '1:01' },
        { title: 'Ring, ring, ring', duration: '5:01' },
        { title: 'Fits in your pocket', duration: '3:21'},
        { title: 'Can you hear me now?', duration: '3:14' },
        { title: 'Wrong phone number', duration: '2:15'}
    ]
};

var albumNoelle = {
    title: 'Where to next?',
    artist: 'N.E.L.',
    label: 'Femme',
    year: '1989',
    albumArtUrl: 'assets/images/album_covers/nel.jpg',
    songs: [
        { title: 'Who I am', duration: '1:01' },
        { title: 'Travel 2 Worlds', duration: '2:21' },
        { title: 'Home sweet home', duration: '3:78'},
        { title: 'Try that again', duration: '7:30' },
        { title: 'I\'m back', duration: '20:17'}
    ]
};

var createSongRow = function(songNumber, songName, songLength) {
     var template =
        '<tr class="album-view-song-item">'
      + '  <td class="song-item-number">' + songNumber + '</td>'
      + '  <td class="song-item-title">' + songName + '</td>'
      + '  <td class="song-item-duration">' + songLength + '</td>'
      + '</tr>'
      ;

     return template;
 };

 // #1
 var albumTitle = document.getElementsByClassName('album-view-title')[0];
 var albumArtist = document.getElementsByClassName('album-view-artist')[0];
 var albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
 var albumImage = document.getElementsByClassName('album-cover-art')[0];
 var albumSongList = document.getElementsByClassName('album-view-song-list')[0];


 var setCurrentAlbum = function(album) {
    //  // #1
    //  var albumTitle = document.getElementsByClassName('album-view-title')[0];
    //  var albumArtist = document.getElementsByClassName('album-view-artist')[0];
    //  var albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
    //  var albumImage = document.getElementsByClassName('album-cover-art')[0];
    //  var albumSongList = document.getElementsByClassName('album-view-song-list')[0];

     // #2
     albumTitle.firstChild.nodeValue = album.title;
     albumArtist.firstChild.nodeValue = album.artist;
     albumReleaseInfo.firstChild.nodeValue = album.year + ' ' + album.label;
     albumImage.setAttribute('src', album.albumArtUrl);

     // #3
     albumSongList.innerHTML = '';

     // #4
     for (var i = 0; i < album.songs.length; i++) {
         albumSongList.innerHTML += createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
     }
 };

 //var albumCover = setCurrentAlbum();

 var albums = [albumPicasso, albumMarconi, albumNoelle];


 window.onload = function() {
   var n = 0;
   setCurrentAlbum(albums[0]);

   albumImage.addEventListener("click", function(event){
   setCurrentAlbum(albums[n]);
   n++;
   if (n == albums.length){
     n = 0;
 };
 });
 }

 // window.onclick = function() {
 //   if (albums[n] === albums[0]){
 //     albumImage.addEventListener("click", function(event){
 //     setCurrentAlbum(albums[1]);
 //   });
 // } else if (albums[n] === albums[1]){
 //   albumImage.addEventListener("click", function(event){
 //   setCurrentAlbum(albums[2]);
 // });
 // } else {
 //   setCurrentAlbum(albums[0]);
 // }
 // };

//albumImage.addEventListener("click", setCurrentAlbum(albums[1]);


// document.getElementsByClassName('album-cover-art')[0].addEventListener("click", function(){
//   for (var j= 0; j <= albums.length; j++){
//        setCurrentAlbum(albums[j]);
//      }
// });


 // var toggleAlbums = function(){
 //   for (var j= 0; j <= albums.length; j++){
 //     setCurrentAlbum(albums[j]);
 //   }
 // };
 //
 // document.getElementsByClassName('album-cover-art')[j].addEventListener('click',toggleAlbums);
