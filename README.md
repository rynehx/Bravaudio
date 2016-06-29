# Bravaudio

[Bravaudio live][heroku]

[heroku]: http://www.bravaudio.com

Bravaudio is a full-stack web application inspired by SoundCloud.  It utilizes Ruby on Rails on the back-end, a PostgreSQL database, and React.js with a Flux architectural framework on the front-end.  

![home]
[home]: https://s3-us-west-1.amazonaws.com/bravaudio/readme/bravaudio+-+home.png

## Features & Implementation

Bravaudio is a music playing app that allows users to play music through tracks and playlists of other users. Users, tracks, and playlists all have distinct pages. A likes feature is implemented for tracks and playlists. A user's liked tracks and playlists are shown on the user's show page and the user's collections page. Each track and playlist page shows users whom liked the track or playlist. Fuzzy search for users, tracks, and playlist is implemented using a ranking algorithm that checks the proximity of the queried characters.

## Single-Page App

Bravaudio is truly a single-page. All content is delivered on one static page. Page navigation is handled by different React.js components.

### Audio

![audiobar]
[audiobar]: https://s3-us-west-1.amazonaws.com/bravaudio/readme/bravaudio+-+musicbar.png

Music plays when a track is added to the `MusicStore` which the audio-bar React component listens to. The `Audio-Bar` works similarly for playlists. When a playlist is added the `MusicStore`, the store keeps track of the different tracks of the playlists. Each time a track is finished or the fast forward button is pressed, the music store updates the current track which persists to the `Audio-Bar` component.

A drag interface is implemented to allow easy playing time navigation on the `Audio-Bar`.

### Tracks
![trackpage]
[trackpage]: https://s3-us-west-1.amazonaws.com/bravaudio/readme/bravaudio+-+track.png

###Playlists

Playlists are stored in the playlist table. The tracks are connected to the playlist by track-playlist join table.

###Likes


###Search
