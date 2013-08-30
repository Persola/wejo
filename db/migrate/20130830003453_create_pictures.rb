class CreatePictures < ActiveRecord::Migration
  def change
    create_table :pictures do |t|
    	t.text :caption
    	t.integer :author_id

      t.timestamps
    end
  end
end
