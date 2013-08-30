class CreateWords < ActiveRecord::Migration
  def change
    create_table :words do |t|
    	t.string :body, limit: 60
    	
      t.timestamps
    end
  end
end
