class Post < ActiveRecord::Base
  attr_accessible :author, :body

  belongs_to :author, class_name: 'User'
  has_and_belongs_to_many :words
end
