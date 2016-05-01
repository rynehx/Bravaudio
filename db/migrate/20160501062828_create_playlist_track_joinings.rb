class CreatePlaylistTrackJoinings < ActiveRecord::Migration
  def change
    create_table :playlist_track_joinings do |t|
      t.integer :track_id, null: false
      t.integer :playlist_id, null: false

      t.timestamps null: false
    end
  end
end
