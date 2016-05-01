class CreateTracks < ActiveRecord::Migration
  def change
    create_table :tracks do |t|
      t.string :title, null: false, index: true
      t.string :description
      t.string :image_url
      t.string :audio_url, null: false
      t.integer :times_played, default: 0, index: true
      t.integer :author_id, null: false, index: true
      t.timestamps null: false
    end
  end
end
