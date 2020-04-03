class CreateTracks < ActiveRecord::Migration[5.2]
  def change
    create_table :tracks do |t|
      t.string :title, null: false 
      t.string :genre, null: false
      t.integer :artist_id, null: false 
      t.text :description
      t.index :artist_id

      t.timestamps
    end
  end
end
