
json.tracks do
  json.array! @output_t do |track_arr|
    track = track_arr.first
    json.rank track_arr[1]
    json.id track.id
    json.extract! track, :title, :image_url
    json.author track.author.username
    json.type "track"
  end
end



json.playlists do
  json.array! @output_p do |playlist_arr|
    playlist = playlist_arr.first
    json.rank playlist_arr[1]
    json.id playlist.id
    json.extract! playlist, :title, :image_url
    json.author playlist.author.username
    json.type "playlist"
  end
end


json.users do
    json.array! @output_u do |user_arr|
      user = user_arr.first
      json.rank user_arr[1]
      json.id user.id
      json.title user.username
      json.image_url user.profile_picture_url
      json.type "user"
    end
end
