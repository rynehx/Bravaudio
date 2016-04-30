class Track < ActiveRecord::Base

  belongs_to(
  :users,
  foreign_key: :author_id,
  class_name: "User"
  )


end
