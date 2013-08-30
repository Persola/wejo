class Picture < ActiveRecord::Base
  attr_accessible :caption, :author

  belongs_to :author, class_name: 'User'
end