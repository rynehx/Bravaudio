
json.array! @likes do |like|
  json.id like.id
  json.type like.class.to_s.downcase
  json.author like.author.username
  json.title like.title
  json.description like.description
  json.image_url like.image_url

  if like.class.to_s == "Playlist"
    json.tracks like.tracks
  else
    json.audio_url like.audio_url
  end

end
