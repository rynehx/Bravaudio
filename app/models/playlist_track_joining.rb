class PlaylistTrackJoining < ActiveRecord::Base

  belongs_to(
    :tracks,
    foreign_key: :track_id,
    class_name: Track
  )

  belongs_to(
    :playlists,
    foreign_key: :playlist_id,
    class_name: Playlist
  )

end
