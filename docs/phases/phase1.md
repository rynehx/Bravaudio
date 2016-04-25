# Phase 1: User Authentication, Track Model and JSON API

## Rails
### Models
* Models
1. Tracks
    1. music file
    2. uploaded artist
    3. album
    4. likes
    5. comments
    6. times played
    7. tags
    8. upload time
    9. name
    10. track picture
    11. description
2. Users (Artists)
    1. auth
    2. likes
    3. follows
    4. followers
    5. tracks
    6. playlists
    8. bio
    9. reposts
    10. based in (location)
3. Comments
    1. belongs to track
    2. belongs to user
    3. belongs to comment
    4. belongs to concert **
    5. contain body
    6. contain time stamp for the song
4. Likes
    1. belongs to track
    2. belongs to user
    3. belong to playlist
    4. belong to comment
5. Playlists
    1. tracks
    2. likes
    3. reposts
    4. belongs to user
    5. picture
    6. time made
    7. comments **
6. Reposts
    1. belongs to trackless
    2. belongs to track
    3. belongs to user
7. Tags
    1. name
8. Taggings
    1. belongs to tags
    2. belongs to tracks
    3. belongs to playlists
8. Concerts**
    1. location
    2. venue
    3. time
    4. description
    5. band (artist)
    6. followers
    7. goers
    8. comments
    9. likes
    10. reposts



### Controllers
* UsersController (create, new)
* SessionsController (create, new, destroy)
* Api::TracksController (create, destroy, index, show, update)
* Api::CommentsController (create, destroy, show, update)
* Api::LikesController (create, destroy, show)
* Api::PlaylistsController (create, destroy, update, show)
* Api::RepostsController (create,destroy, show)
* Api::TagsController (create, destroy, show, update)

### Views
* users/new.html.erb
* session/new.html.erb
* tracks/index.json.jbuilder
* tracks/show.json.jbuilder
* playlists/index.json.jbuilder
* playlists/show.json.jbuilder
* likes/index.json.jbuilder
* comments/index.json.jbuilder
* reposts/index.json.jbuilder
* tags/index.json.jbuilder

## Flux

### Views (React Components)
* components/home.jsx
* components/collection.jsx
* components/track.jsx
* components/playlist.jsx
* components/sidebar.jsx
* components/navBar.jsx
* components/musicBar.jsx
* components/artist.jsx

### Stores
  * stores/tracks.js
  * stores/playlists.js
  * stores/likes.js
  * stores/comments.js
  * stores/tags.js
  * stores/reposts.js
  * stores/users.js
### Actions
  * actions/tracks/client_action.js
  * actions/tracks/server_action.js
  * actions/playlists/client_action.js
  * actions/playlists/server_action.js
  * actions/likes/client_action.js
  * actions/likes/server_action.js
  * actions/comments/client_action.js
  * actions/comments/server_action.js
  * actions/taggings/client_action.js
  * actions/taggings/server_action.js
  * actions/reposts/client_action.js
  * actions/reposts/server_action.js
  * actions/users/client_action.js
  * actions/users/server_action.js
### ApiUtil
  * utils/api_utils.js
## Gems/Libraries
* BCrypt (Gem)
* React
* React-dom
* babel
