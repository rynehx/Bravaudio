json.extract! @playlist, :title, :description,:author_id,:image_url


json.tracks  do
  json.array! (@playlist.tracks), :title, :audio_url, :image_url
end
