# Bravaudio

[Bravaudio live][heroku]

[heroku]: http://www.bravaudio.com

Bravaudio is a full-stack web application inspired by SoundCloud.  It utilizes Ruby on Rails on the back-end, a PostgreSQL database, and React.js with a Flux architectural framework on the front-end.  

![home]
[home]: https://s3-us-west-1.amazonaws.com/bravaudio/readme/bravaudio+-+home.png

## Features & Implementation

Bravaudio is a music playing app that allows users to play music through tracks and playlists of other users. Users, tracks, and playlists all have distinct pages. A likes feature is implemented for tracks and playlists. A user's liked tracks and playlists are shown on the user's show page and the user's collections page. Each track and playlist page shows users whom liked the track or playlist. Fuzzy search for users, tracks, and playlist is implemented using a ranking algorithm that checks the proximity of the queried characters.

### Single-Page App

Bravaudio is truly a single-page; all content is delivered on one static page.  The root page listens to a `SessionStore` and renders content based on a call to `SessionStore.currentUser()`.  Sensitive information is kept out of the front-end of the app by making an API call to `SessionsController#current_user`.

```ruby
class Api::SessionsController < ApplicationController
    def current_user
      if current_user
        render :current_user
      else
        render json: errors.full_messages
      end
    end
 end
  ```

### Track and Playlist Playing

On the database side, the tracks are stored in one table in the database, which contains columns for `id`, `author_id`, `description`, `times_played`, `image_url`, and `audio_url`.  




Music plays when a track or playlist is pushed into the `MusicStore` which the music bar React component listens to.



### Tracks

Tracks are implemented through the `Track` Table in the data base. The table has image and audio url's to pull images and tracks from a cloud storage.

###Playlists

Playlists are stored in the playlist table. The tracks are connected to the playlist by track-playlist join table.

###Likes


###Search
