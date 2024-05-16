
function createPlaylist(initialSongs = []) {
  var songs = initialSongs.slice();
  let currentElement = null;
  let currentIndex = -1;
  let length =0;
  var len=()=>{
      for(song of songs){
          length++;
      }
      return this.length=length;
  }
  len();
  function find(callback){
      for (let i = 0; i < length; i++) {
          if (callback(songs[i])) {
            return i;
          }
        }
        return -1;
  }
  function filter(callback){
      const filteredSongs = [];
      for (let i = 0; i < length; i++) {
          if (callback(songs[i])) {
              filteredSongs.push(songs[i]);
          }
      }
      return filteredSongs;
  }
  function reverse(){
      for (let i = 0; i < Math.floor(length / 2); i++) {
          const temp = songs[i];
          songs[i] = songs[length - 1 - i];
          songs[length - 1 - i] = temp;
        }
        return reverseSongs=songs;
  }
  function insertAt(index,song){
      if (index >= 0 && index <= length) {
          for (let i = length; i > index; i--) {
            songs[i] = songs[i - 1];
          }
          
          songs[index] = song;
          length++;
          if (index <= currentIndex) {
            currentIndex++;
            this.songs=songs
            return {
                  songs,
                  length,
                  currentElement,
                  currentIndex
              };
          }
          return false;
        }
  }
  function deleteAt(index) {
      if (index >= 0 && index < length) {
        const deletedSong = songs[index];
        const newSongs = [];
        for (let i = 0; i < length; i++) {
          if (i !== index) {
            newSongs.push(songs[i]);
          }
        }
        songs = newSongs;
        length = newSongs.length;
        if (index === currentIndex) {
          currentIndex = Math.max(currentIndex - 1, 0);
        }
        currentElement = songs[currentIndex] || null;
        return {
          deletedSong,
          newlength: length,
          currentElement,
          currentIndex        
        };
      }
      return false;
    }
  function next(){
      currentIndex = Math.min(currentIndex + 1, length - 1);
      currentElement = songs[currentIndex] || null;
      return{
          currentElement,
          currentIndex
      }
  }
  function previous(){
      currentIndex = Math.max(currentIndex - 1, 0);
      currentElement = songs[currentIndex] || null;
      return{
          currentElement,
          currentIndex
      }
  }
  function last(){
      currentIndex = length - 1;
      currentElement = songs[currentIndex] || null;
      return{
          currentElement,
          currentIndex
      }
  }
  function first(){
      currentIndex = 0;
      currentElement = songs[currentIndex] || null;
      return{
          currentElement,
          currentIndex
      }
  }
  function getSongs(){
      return songs.slice();
  }
  return {
      next,
      insertAt,
      deleteAt,
      find,
      filter,
      reverse,
      previous,
      first,
      last,
      length,
      getSongs
    };
}
var playlist = createPlaylist(["S1", "Song 2","Song 3","Song 4","Song 5"]);
console.log(`No.of songs is: ${length}`);

const nextSong1=playlist.next();
console.log(`current playing song is: ${nextSong1.currentElement}`);
console.log(`current playing song index: ${nextSong1.currentIndex}`);
const nextSong2=playlist.next();
console.log(`current playing song is: ${nextSong2.currentElement}`);
console.log(`current playing song index is: ${nextSong2.currentIndex}`);

const updatedSongs=playlist.insertAt(1,"Song 0");
console.log(`The updated playlist is: ${updatedSongs.songs}`);
console.log(`No. of songs after updation: ${updatedSongs.length}`);
console.log(`current playing song is: ${updatedSongs.currentElement}`);
console.log(`current playing song index is: ${updatedSongs.currentIndex}`);

const deleteSong=playlist.deleteAt(2);
console.log(`Song deleted from playlist is: ${deleteSong.deletedSong}`);
console.log(`current playing song is: ${deleteSong.currentElement}`);
console.log(`current playing song index is: ${deleteSong.currentIndex}`);


const songsAfterDelete=playlist.getSongs();
console.log(`The updated playlist is: ${songsAfterDelete}`);
console.log(`No. of songs after deletion is: ${deleteSong.newlength}`);

const lastSong=playlist.last();
console.log(`The last song in the playlist is: ${lastSong.currentElement}`);
const firstSong=playlist.first();
console.log(`The first song in the playlist is: ${firstSong.currentElement}`);

playlist.reverse()
console.log(`Playlis after reversing is: ${reverseSongs}`)

function isLong(song){
  return song.length>3;
}
const longSongs=playlist.filter(isLong);
console.log(`Playlist after filtering is: ${longSongs}`);

/*
No.of songs is: 5
current playing song is: S1
current playing song index: 0
current playing song is: Song 2
current playing song index is: 1
The updated playlist is: S1,Song 0,Song 2,Song 3,Song 4,Song 5
No. of songs after updation: 6
current playing song is: Song 2
current playing song index is: 2
Song deleted from playlist is: Song 2
current playing song is: Song 0
current playing song index is: 1
The updated playlist is: S1,Song 0,Song 3,Song 4,Song 5
No. of songs after deletion is: 5
The last song in the playlist is: Song 5
The first song in the playlist is: S1
Playlis after reversing is: Song 5,Song 4,Song 3,Song 0,S1
Playlist after filtering is: Song 5,Song 4,Song 3,Song 0
*/