# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

### Users

- `GET /users/new`
- `POST /users`
- `PATCH /users`

### Session

- `GET /session/new`
- `POST /session`
- `DELETE /session`

## JSON API

### Tracks

- `GET /api/tracks`
  - Tracks index/search
  - accepts `tag_name` query param to list tracks by tag
- `POST /api/tracks`
- `GET /api/tracks/:id`
- `PATCH /api/tracks/:id`
- `DELETE /api/tracks/:id`

### Playlists

- `GET /api/playlists`
- `POST /api/playlists`
- `GET /api/playlists/:id`
- `PATCH /api/playlists/:id`
- `DELETE /api/playlists/:id`
- `GET /api/playlists/:id/tracks`
  - index of all tracks for a playlist

### Tags

- A track's tags will be included in the track show template
- `GET /api/tracks/:track_id/tags`
  - includes query param for typeahead suggestions
- `POST /api/tracks/:track_id/tags`: add tag to track by name
  - if track doesn't already exist, it will be created
- `DELETE /api/tracks/:track_id/tags/:tag_name`: remove tag from track by
  name
- A track's tags will be included in the playlist show template
- `GET /api/playlists/:playlist_id/tags`
  - includes query param for typeahead suggestions
- `POST /api/playlists/:playlists_id/tags`: add tag to track by name
  - if track doesn't already exist, it will be created
- `DELETE /api/playlists/:playlist_id/tags/:tag_name`: remove tag from track by
  name

### Comments

  - A Track's comments will be displayed on the show page
  - `GET api/tracks/:track_id/comments`
  - `POST /api/tracks/:track_id/comments`: add comment to track by name
    - if track doesn't already exist, it will be created
  - `UPDATE /api/tracks/:track_id/comments/:comment_id`
  - `DELETE /api/tracks/:track_id/comments/:comment_id`: remove comment from track by name
  - A User's comments will be displayed on the user's show page
  - `GET api/users/:user_id/comments`
  - `POST /api/users/:user_id/comments`: add comment to track by name
    - if track doesn't already exist, it will be created
  - `UPDATE /api/users/:user_id/comments/:comment_id`
  - `DELETE /api/users/:user_id/comments/:comment_id`: remove comment from t


### Likes

- A Track's likes will be displayed on the show page and on tracks on the playlists show page

- `GET api/tracks/:track_id/likes`
- `POST /api/tracks/:track_id/likes`
- `DELETE /api/tracks/:track_id/likes/:like_id`

- A Track's likes will be displayed on the show page and on tracks on the playlists show page

- `GET api/playlists/:playlist_id/likes`
- `POST /api/playlists/:playlist_id/likes`
- `DELETE /api/playlists/:playlist_id/likes/:like_id`

- A User's show page will display their likes
- `GET api/users/:user_id/likes`
- `POST /api/users/:user_id/likes`
- `DELETE /api/users/:user_id/likes/:like_id`

### Reposts

  - Tracks  will display user reposts

  - `GET api/tracks/:track_id/likes`
  - `POST /api/tracks/:track_id/likes`
  - `DELETE /api/tracks/:track_id/likes/:like_id`

  - Playlists will display user reposts

  - `GET api/playlists/:playlist_id/likes`
  - `POST /api/playlists/:playlist_id/likes`
  - `DELETE /api/playlists/:playlist_id/likes/:like_id`

  - A User's show page will display their likes
  - `GET api/users/:user_id/likes`
  - `POST /api/users/:user_id/likes`
  - `DELETE /api/users/:user_id/likes/:like_id`
