class User < ActiveRecord::Base
  attr_accessible :name

  has_many :pictures
  has_many :posts
end
