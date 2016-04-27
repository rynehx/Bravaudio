## Data Required per Page

Each page/route of the App requires certain data from the data base to be displayed. This document is used to organize what actions/stores are required for each page/route in order to display the necessary data.

### Music Bar
  * `Current Playing Track` the track is currently playing
    0. `Current Playlist` the playlist where the current track is from. Can be null if track has no               playlist. The playlist is shown where the track playing is instantiated. Only exists if play action is from a playlist component.
    0. `Liked or Not`
    0. `Current Playing Time of Track`
    0. `Current Volume of Track`

### Navigation Bar
  * `Current User` the user who is logged in
    0. `Profile Picture`
    0. `Notification`
    0. `Messages`

### Search Bar
  * `Matched Tracks, Users, Playlists from the Search Query`
### Tracks Page
  * `Currently Displayed Track` the track that is currently being displayed on the page. If played will update the currently playing track
    0. `Comments`
    0. `Tags`
    0. `Likes`
    0. `In Playlists` playlists that contain the currently displayed track.
    0. `Current Playing Time` this is synced with music bar

### Playlists Page
  * `Currently Displayed Playlist`
    0. ``
    0. ``

### User Profile Page

### Upload  Page

### Collection  Page

### Home Page


### Splash Page
