# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

### Users

- `GET /:user
- `POST /users`
- `PATCH /users`

### Session

- `GET /session/new`
- `POST /session`
- `DELETE /session`

## JSON API

### Tracks

- `GET /api/:user/track/:track`
  - Tracks index/search
- `GET /api/:user/tracks`

### Playlists

- `GET /api/:user/playlist/:playlist`
- `GET /api/:user/playlists`
