json.array! @likes do |like| #likes is users
  json.id like.id
  json.username like.username
  json.image_url like.profile_picture_url
end
