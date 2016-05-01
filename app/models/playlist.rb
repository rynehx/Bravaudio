class Playlist < ActiveRecord::Base

  has_many(
    :playlist_track_joinings
  )

  has_many(
    :tracks,
    through: :playlist_track_joinings,
    source: :tracks
  )


end
