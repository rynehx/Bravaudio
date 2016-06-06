json.extract! @user, :id, :username, :city, :state, :country, :name, :created_at, :profile_picture_url

json.liked_tracks do
json.array!  do |like|

end
end

json.liked_playlists do
json.array!  do |like|

end
end
