json.array! @playlists do |playlist|
  json.id playlist.id
  json.title playlist.title
  json.description playlist.description
  json.author_id playlist.author_id
  json.image_url playlist.image_url
  json.created_at playlist.created_at
  json.tracks do
    json.array! playlist.tracks, :id, :author_id, :title, :description, :image_url, :audio_url, :times_played, :created_at


    end
end
