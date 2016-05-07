## Data Required per Page

Each page/route of the App requires certain data from the data base to be displayed. This document is used to organize what actions/stores are required for each page/route in order to display the necessary data.

### Music Bar
    0. `Current Playing Track` the track is currently playing. Use store to keep track of all tracks that has been played to keep track of previous time (hash of objects).
    0. `Current Playlist` the playlist where the current track is from. Can be null if track has no               playlist. The playlist is shown where the track playing is instantiated. Only exists if play action is from a playlist component.
    0. `Current Playing Time of Track`
    0. `Current Volume of Track`

### Navigation Bar
  * `Current User` the user who is logged in
    0. `Profile Picture`

### Tracks Page
  * `Currently Displayed Track` the track that is currently being displayed on the page. If played will update the currently playing track
    0. `In Playlists` playlists that contain the currently displayed track.


### Playlists Page
  * `Currently Displayed Playlist` fetched as a json with containing info (using includes with nesting)
    0. `All tracks included` fetched as json
    0. `Owner`


### User Profile Page
  * `User Information`
    0. `Tracks Owned`
    0. `Playlists Owned`




### Home Page
  * `News Feed`
    0. `Site wide tracks`

### Splash Page
  * `Intro video`
