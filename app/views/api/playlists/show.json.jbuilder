json.extract! @playlist, :title, :description,:author_id,:image_url, :created_at


json.tracks  do
  json.array! (@playlist.tracks), :title, :audio_url, :image_url
end
