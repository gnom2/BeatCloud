class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.text :body, null: false 
      t.integer :author_id, null: false 
      t.integer :track_id, null: false 
      t.index :author_id 
      t.index :track_id

      t.timestamps
    end
  end
end
