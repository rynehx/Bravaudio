# Schema Information

## tracks
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
description | text      |
author_id   | integer   | not null, foreign key (references users), indexed
image_url   | string    | not null
audio_url   | string    | not null
times_played| integer   | not null, initial 0

## playlists
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
title       | string    | not null
description | string    |
image_url   | string    |

## playlist_track_joining
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
track_id    | integer   | not null,
playlist_id | integer   |     


## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
body        | string    | not null
track_id    | integer   | foreign key (references notes), indexed, unique [track_id]
playlist_id | integer   | foreign key (references notes), indexed, unique [playlist_id]
author_id   | integer   | foreign key (references notes), indexed, unique [author_id]
comment_id  | integer   | foreign key (references notes), indexed, unique [comment_id]
time_mark   | integer   | not null

## likes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
track_id    | integer   | foreign key (references notes), indexed, unique [track_id]
playlist_id | integer   | foreign key (references notes), indexed, unique [playlist_id]
author_id   | integer   | foreign key (references notes), indexed, unique [author_id]


## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
tag_id      | integer   | foreign key (references notes), indexed, unique [tag_id]
track_id    | integer   | foreign key (references notes), indexed, unique [track_id]
playlist_id | integer   | foreign key (references notes), indexed, unique [playlist_id]


## users
column name         | data type | details
--------------------|-----------|-----------------------
id                  | integer   | not null, primary key
username            | string    | not null, indexed, unique
name                | string    | not null
location_city       | string    | not null
location_state      | string    | not null
location_country    | string    | not null
profile_picture_url | string    |  
password_digest     | string    | not null
session_token       | string    | not null, indexed, unique


##following
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | foreign key , indexed, unique [user_id]

## reposts
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
track_id    | integer   | foreign key (references notes), indexed, unique [track_id]
playlist_id | integer   | foreign key (references notes), indexed, unique [playlist_id]
author_id   | integer   | foreign key (references notes), indexed, unique [author_id]
