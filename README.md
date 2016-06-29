# Bravaudio

[Bravaudio live][heroku]

[heroku]: http://www.bravaudio.com

Bravaudio is a full-stack web application inspired by SoundCloud.  It utilizes Ruby on Rails on the back-end, a PostgreSQL database, and React.js with a Flux architectural framework on the front-end.  

![home]
[home]: https://s3-us-west-1.amazonaws.com/bravaudio/readme/bravaudio+-+home.png

## Features & Implementation

Bravaudio is a music playing app that allows users to play music through tracks and playlists of other users. Users, tracks, and playlists all have distinct pages. A likes feature is implemented for tracks and playlists. A user's liked tracks and playlists are shown on the user's show page and the user's collections page. Each track and playlist page shows users whom liked the track or playlist. Fuzzy search for users, tracks, and playlist is implemented using a ranking algorithm that checks the proximity of the queried characters.

## Single-Page App

Bravaudio is truly a single-page. All content is delivered on one static page. Page navigation is handled by React.js components.

### Audio

Music plays when a track is added to the `MusicStore` which the `Audio-Bar` React component listens to. The `Audio-Bar` works similarly for playlists. When a playlist is added the `MusicStore`, the store keeps track of the different tracks of the playlists. Each time a track is finished or the fast forward button is pressed, the `MusicStore` updates the current track which persists to the `Audio-Bar` component.

A drag interface is implemented to allow easy playing time navigation on the `Audio-Bar`.

![audiobar]
[audiobar]: https://s3-us-west-1.amazonaws.com/bravaudio/readme/bravaudio+-+musicbar.png

### Tracks

The track page includes information regarding the track including, playlists it is in, users whom liked the track, option to like the track, author of the track, and the option to add to a playlist.

![trackpage]
[trackpage]: https://s3-us-west-1.amazonaws.com/bravaudio/readme/bravaudio+-+track.png


When the user clicks on the add to playlist button, a modal opens up with option to add to existing playlists or to create a new playlist.

![addtrack]
[addtrack]: https://s3-us-west-1.amazonaws.com/bravaudio/readme/bravaudio+-+add+to+playlist.png

###Playlists

The playlist page includes its owner, all the tracks in the playlist, and users whom liked the playlists. In addition to the tracks of the playlist, users have the option to like each of the displayed tracks or add them to their playlist.

![playlist]
[playlist]: https://s3-us-west-1.amazonaws.com/bravaudio/readme/bravaudio+-+playlist.png

For playlists that are owned by the user, an edit and delete button is available. Users can edit the order that the tracks are store in the playlist (by a draggable interface), delete existing tracks, and edit the title and description.

![edittrack]
[edittrack]: https://s3-us-west-1.amazonaws.com/bravaudio/readme/bravaudio+-+edit+playlist.png

###Likes

A user's likes is persisted on the user's page.

![user_likes]
[user_likes]: https://s3-us-west-1.amazonaws.com/bravaudio/readme/bravaudio+-+userlikes.png

User's who liked a track/playlists is persisted on that item's page.

![track_likes]
[track_likes]: https://s3-us-west-1.amazonaws.com/bravaudio/readme/bravaudio+-+track+likes.png

###Collections

Bravaudio features a collection page to display all the user's activities. The page includes all the user's tracks, playlist and likes.

![collection]
[collection]: https://s3-us-west-1.amazonaws.com/bravaudio/readme/bravaudio+-+collection.png

###Users

Each individual user have their own page which includes their tracks, playlists, and liked items.

![users]
[users]: https://s3-us-west-1.amazonaws.com/bravaudio/readme/bravaudio+-+user.png

###Search

A search bar is implemented on the top nav bar. Fuzzy search is used to find matched results.

![search_drake]
[search_drake]: https://s3-us-west-1.amazonaws.com/bravaudio/readme/bravaudio+-+search+drake.png

![search_hot]
[search_hot]: https://s3-us-west-1.amazonaws.com/bravaudio/readme/bravaudio+-+search+hot.png
