class CreateUserBills < ActiveRecord::Migration[6.1]
  def change
    create_table :user_bills do |t|
      t.string :name
      t.string :description
      t.integer :amount
      t.references :user, foreign_key: true, null: false
      t.references :expense_category, foreign_key: true, null: false


      t.timestamps
    end
  end
end
