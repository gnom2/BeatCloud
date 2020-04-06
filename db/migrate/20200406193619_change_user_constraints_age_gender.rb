class ChangeUserConstraintsAgeGender < ActiveRecord::Migration[5.2]
  def change
    change_column_null :users, :age, true
    change_column_null :users, :gender, true
  end
end
