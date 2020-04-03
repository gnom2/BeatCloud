class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email, null: false, unique: true
      t.string :age, null: false
      t.string :gender, null: false
      t.text :description
      t.string :password_digest, null: false
      t.string :session_token, null: false, unique: true 
      t.index :email 
      t.index :session_token

      t.timestamps
    end
    
  end
end
