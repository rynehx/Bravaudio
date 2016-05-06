# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160501062828) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "playlist_track_joinings", force: :cascade do |t|
    t.integer  "track_id",    null: false
    t.integer  "playlist_id", null: false
    t.integer  "order",       null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "playlist_track_joinings", ["order"], name: "index_playlist_track_joinings_on_order", using: :btree
  add_index "playlist_track_joinings", ["playlist_id"], name: "index_playlist_track_joinings_on_playlist_id", using: :btree
  add_index "playlist_track_joinings", ["track_id"], name: "index_playlist_track_joinings_on_track_id", using: :btree

  create_table "playlists", force: :cascade do |t|
    t.string   "title",       null: false
    t.string   "description"
    t.integer  "author_id",   null: false
    t.string   "image_url"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "playlists", ["author_id"], name: "index_playlists_on_author_id", using: :btree
  add_index "playlists", ["title"], name: "index_playlists_on_title", using: :btree

  create_table "tracks", force: :cascade do |t|
    t.string   "title",                    null: false
    t.string   "description"
    t.string   "image_url"
    t.string   "audio_url",                null: false
    t.integer  "times_played", default: 0
    t.integer  "author_id",                null: false
    t.datetime "created_at",               null: false
    t.datetime "updated_at",               null: false
  end

  add_index "tracks", ["author_id"], name: "index_tracks_on_author_id", using: :btree
  add_index "tracks", ["times_played"], name: "index_tracks_on_times_played", using: :btree
  add_index "tracks", ["title"], name: "index_tracks_on_title", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",            null: false
    t.string   "password_digest",     null: false
    t.string   "session_token",       null: false
    t.string   "city"
    t.string   "state"
    t.string   "country"
    t.string   "profile_picture_url"
    t.string   "name"
    t.datetime "created_at",          null: false
    t.datetime "updated_at",          null: false
  end

  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
