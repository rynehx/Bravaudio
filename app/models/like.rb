class Like < ActiveRecord::Base
  belongs_to :likeable, polymorphic: true

  belongs_to(
  :author,
  foreign_key: :author_id,
  class_name: "User"
  )




end
