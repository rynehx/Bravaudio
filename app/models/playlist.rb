class Playlist < ActiveRecord::Base

  has_many(
    :playlist_track_joinings,
    -> { order(:order => :asc) },
    dependent: :destroy
  )

  has_many(
    :tracks,
    through: :playlist_track_joinings,
    source: :tracks
  )

  belongs_to(
    :author,
    foreign_key: :author_id,
    class_name: "User"
  )

  has_many :likes, as: :likeable, dependent: :destroy
  has_many :likings, :through => :likes, :source => :author
  # has_many :likings, :through => :likes, :source => :likeable,
  #   :source_type => "Playlist"

end
