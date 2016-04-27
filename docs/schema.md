# Schema Information

## Tracks
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
description | text      | not null
author_id   | integer   | not null, foreign key (references users), indexed
image_url   | string    | not null
music_url   | string    | not null

## Playlists
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
title       | string    | not null
description | string    |
track_id    | string    |
image_url   | string    |

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
body        | string    | not null
track_id    | integer   | foreign key (references notes), indexed, unique [tag_id]
playlist_id | integer   | foreign key (references notes), indexed, unique [tag_id]
author_id   | integer   | foreign key (references notes), indexed, unique [tag_id]
time_mark   | integer   |

## likes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
track_id    | integer   | foreign key (references notes), indexed, unique [track_id]
user_id     | integer   | foreign key (references notes), indexed, unique [user_id]

## favorites
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
playlist_id | integer   | foreign key (references notes), indexed, unique [tag_id]
user_id     | integer   | foreign key (references notes), indexed, unique [tag_id]


## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
tagging_id  |
tagging_type
track_id    | integer   | foreign key (references notes), indexed, unique [tag_id]
playlist_id | integer   | foreign key (references notes), indexed, unique [tag_id]
tag_id      | integer   | not null, foreign key (references tags), indexed

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## reposts
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
track_id    | integer   | foreign key (references notes), indexed, unique [tag_id]
playlist_id | integer   | foreign key (references notes), indexed, unique [tag_id]
author_id   | integer   | foreign key (references notes), indexed, unique [tag_id]
