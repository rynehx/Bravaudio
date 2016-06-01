
json.tracks do
  json.array! @output_t do |track|
    json.id track.id
    json.extract! track, :title, :image_url
    json.author track.author.username
    json.type "track"
  end
end



json.playlists do
  json.array! @output_p do |playlist|
    json.id playlist.id
    json.extract! playlist, :title, :image_url
    json.author playlist.author.username
    json.type "playlist"
  end
end


json.users do
    json.array! @output_u do |user|
      json.id user.id
      json.title user.username
      json.image_url user.profile_picture_url
      json.type "user"
    end
end
