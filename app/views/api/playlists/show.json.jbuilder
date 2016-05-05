json.extract! @playlist,:id, :title, :description,:author_id,:image_url, :created_at

json.author @playlist.author.username

json.tracks  do
  json.array! (@tracks) do |track|
    json.id track.id
    json.author_id track.author_id
    json.title track.title
    json.description track.description
    json.image_url track.image_url
    json.audio_url  track.audio_url
    json.times_played track.times_played
    json.created_at track.created_at
    json.author track.author.username


   end

end
