## Stores

###MusicBar Store
  * `contains the tracks that have been played in the past`
  * `tracks are stored as a hash`
  * `keeps historic tracks playing time`
  * `current playing track must contain playlist they are instantiated`

###Tracks Store
  * `contain the show page information for the currently displaying track`
  * `may contain an array of tracks for index (trending)`


###Playlists Store
  * `contain the show page information for the current displaying playlist`


###Session Store
  * `keep track of current user`
###Users Store
  * `keep track of other people`





##question
          1. what is the advantage of using ajax request relations vs keeping the relations in a store.
          2. if I do use ajax would I keep a listener on the store and call a user refetch every time I submit a relational property (e.g. adding a commit on a track. commit is a property on track and not in store)
