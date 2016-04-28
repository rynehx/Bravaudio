# Flux Cycles

Flux loops are organized by data type. Under each data type, there may
be sub-categories, and each action is listed with the sequence of events
that result from its invocation, ending with the API or store. Finally,
store listeners are listed at the end.

You should be able to use this document trace an **action** starting
with where it was invoked, through the **API**/**store** involved, and
finally to the **components** that update as a result. This is important
because once you start implementing your flux loops, that's precisely
what you'll need to do.

##Stores

* `MusicBar Store`
* `Track Store`
* `Playlist Store`
* `Search Store`
* `User Store`


## Track Cycles

### Tracks API Request Actions

* `fetchDisplayedTrack`
  0. invoked from `Track` `didMount`/`willReceiveProps`
  0. `GET /api/tracks/id` is called.
  0. `receiveDisplayedTrack` is set as the callback.

### Tracks API Response Actions

* `receiveAllTracks`
  0. invoked from an API callback.
  0. `Track` store updates `_Track` by replacing the displayed song and emits change.

### Store Listeners

* `Track` component listens to `Track` store.


## MusicBar Cycles

### Tracks API Request Actions

* `fetchCurrentTrack`
  0. invoked from `MusicBar` `onClick`
  0. `GET /api/tracks/id` is called.
  0. `receiveCurrentTrack` is set as the callback.

### Tracks API Response Actions

* `receiveCurrentTrack`
  0. invoked from an API callback.
  0. `Track` store updates `_Tracks` by adding into the hash and emits change.

### Store Listeners

* `MusicBar` component listens to `MusicBar` store.

## User Cycles

### User API Request Actions

* `fetchCurrentUser`
  0. invoked from `NavBar` `didMount`/`willReceiveProps`
  0. `GET /api/users/id` is called.
  0. `receiveCurrentUser` is set as the callback.

### User API Response Actions

* `receiveCurrentUser`
  0. invoked from an API callback.
  0. `User` store updates `_currentUser` by adding into the hash and emits change.

### Store Listeners

* `NavBar` component listens to `User` store.


## Playlist Cycles

### Playlist API Request Actions

* `fetchCurrentPlaylist`
  0. invoked from `Playlist` `didMount`/`willReceiveProps`
  0. `GET /api/playlists/id` is called.
  0. `receiveCurrentPlaylist` is set as the callback.

### Playlist API Response Actions

* `receiveCurrentPlaylist`
  0. invoked from an API callback.
  0. `Playlist` store updates `_currentPlaylist` by replacing previous and emit change.

### Store Listeners

* `Playlist` component listens to `Playlist` store.

## Search Cycles

### Search API Request Actions

* `fetchQuery`
  0. invoked from `NavBar/SearchBar` `didMount`/`willReceiveProps`
  0. `GET /api/search` is called.
  0. `receiveQueryResults` is set as the callback.

### Playlist API Response Actions

* `receiveQueryResults`
  0. invoked from an API callback.
  0. `Search` store updates `_searchResults` by replacing previous and emit change.

### Store Listeners

* `SearchBar` component listens to `Search` store.
