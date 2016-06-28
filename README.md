# Bravaudio

[Bravaudio live][heroku] **NB:**

[heroku]: http://www.bravaudio.com

Bravaudio is a full-stack web application inspired by SoundCloud.  It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Flux architectural framework on the frontend.  

## Features & Implementation

Bravaudio is a music playing app that allows users to play music through tracks and playlists of other users.

### Single-Page App

Bravaudio is truly a single-page; all content is delivered on one static page.  The root page listens to a `SessionStore` and renders content based on a call to `SessionStore.currentUser()`.  Sensitive information is kept out of the frontend of the app by making an API call to `SessionsController#current_user`.

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

  On the database side, the tracks are stored in one table in the database, which contains columns for `id`, `author_id`, `description`, `created_at`, `image_url`, `audio_url` and `updated_at`.  Upon login, an API call is made to the database which joins the user table and the note table on `user_id` and filters by the current user's `id`.  These tracks are held in the `TrackStore` until the user's session is destroyed.  

  Music plays when the track is pushed into the `MusicStore` which the music bar listens to. The user also have the option to push playlists to the music bar which the music bar will display.



### Tracks

Tracks are implemented through the `Track` Table in the data base. The table has image and audio url's to pull images and tracks from a cloud storage.

###Playlists

Playlists are stored in the playlist table. The tracks are connected to the playlist by track-playlist join table.
