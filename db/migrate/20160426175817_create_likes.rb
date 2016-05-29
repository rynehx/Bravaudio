class CreateLikes < ActiveRecord::Migration
  def change
    create_table :likes do |t|
      t.integer :author_id, null: false, index: true
      t.references :likeable, polymorphic: true, index: true
      t.timestamps null: false
    end
  end
end
