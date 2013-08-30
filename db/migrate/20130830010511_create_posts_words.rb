class CreatePostsWords < ActiveRecord::Migration
  def up
  	create_table :posts_words do |t|
  		t.integer :post_id
  		t.integer :word_id
  	end
  end

  def down
  	drop_table :posts_words
  end
end
