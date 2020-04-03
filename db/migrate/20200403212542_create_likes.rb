class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.integer :user_id, null: false
      t.integer :track_id, null: false 
      t.index :user_id 
      t.index :track_id 

      t.timestamps
    end
  end
end
