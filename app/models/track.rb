class Track < ActiveRecord::Base

  belongs_to(
    :author,
    foreign_key: :author_id,
    class_name: "User"
  )

  has_many(
    :playlist_track_joinings
  )

  has_many(
    :playlists,
    through: :playlist_track_joinings,
    source: :playlists
  )

  has_many :likes, as: :likeable, dependent: :destroy

  has_many :likings, :through => :likes, :source => :likeable,
    :source_type => "Track"

end
