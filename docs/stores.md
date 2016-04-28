## Stores

###MusicBar Store
  * `contains the tracks that have been played in the past`
  * `tracks are stored as a hash`
  * `keeps historic tracks playing time`
  * `current playing track must contain playlist they are instantiated`

###Track Store
  * `contain the show page information for the currently displaying track`
  * `may contain an array of tracks for index (trending)`

### Track Store Method
  * `updateCurrentTrack`
    0. looks through the entire `_Tracks` and see if there is a match, if so replace Current Track with the found track. If track not found call fetchCurrentTrack to prob data base.

###Playlist Store
  * `contain the show page information for the current displaying playlist`

###Search Store
  * `contains the current search query`
  * `contains all returned matches separated into users/playlists/tracks`

###User Store
  * `keep track of current user`


##question
          1. what is the advantage of using ajax request relations vs keeping the relations in a store.
          2. if I do use ajax would I keep a listener on the store and call a user refetch every time I submit a relational property (e.g. adding a commit on a track. commit is a property on track and not in store)
