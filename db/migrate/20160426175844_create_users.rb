class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
        t.string :username, null: false
        t.string :password_digest, null: false
        t.string :session_token, null: false
        t.string :city
        t.string :state
        t.string :country
        t.string :profile_picture_url
        t.string :name
        t.timestamps null: false
    end
     add_index :users, :username, unique: true
  end
end
