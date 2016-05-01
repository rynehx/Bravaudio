class CreatePlaylists < ActiveRecord::Migration
  def change
    create_table :playlists do |t|
      t.string :title, null: false, index: true
      t.string :description
      t.integer :author_id, null: false, index: true
      t.string :image_url
      t.timestamps null: false
    end

  end
end
