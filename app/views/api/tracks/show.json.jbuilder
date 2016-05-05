
  json.id @track.id
  json.author_id @track.author_id
  json.title @track.title
  json.description @track.description
  json.image_url @track.image_url
  json.audio_url @track.audio_url
  json.times_played @track.times_played
  json.created_at @track.created_at
  json.author @track.author.username
  json.playlists do
    json.array! @track.playlists do |playlist|
      json.id playlist.id
      json.title playlist.title
      json.author playlist.author.username
      json.image_url playlist.image_url
    end
  end
