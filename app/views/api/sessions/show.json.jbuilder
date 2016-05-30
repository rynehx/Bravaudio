json.extract! @user, :id, :username, :city, :state, :country, :name, :created_at, :profile_picture_url


json.liked_tracks do
json.array! @liked_tracks do |like|
  json.id = like.id
  json.title = like.title
end
end

json.liked_playlists do
json.array! @liked_playlists do |like|
  json.id = like.id
  json.title = like.title
end
end
