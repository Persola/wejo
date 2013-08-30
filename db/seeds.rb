User.destroy_all!
Post.destroy_all!
Word.destroy_all!
Picture.destroy_all!


mo = User.create!(name: "Mohamed")

rev_post = Post.create!(author: mo, body: "Today there was a revolution.")
fire_post = Post.create!(author: mo, body: "San Francisco is on fire.")


Picture.create!(author: mo, caption: "Youth in revolt!")
Picture.create!(author: mo, caption: "A summer's day")
Picture.create!(author: mo, caption: "San Francisco burning down!")


violence_tag = Word.create!(body: "Violence")
violence_tag.posts << rev_post

Word.create!(body: "Revolution")
Word.create!(body: "Constitution")