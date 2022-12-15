class CreateUserBills < ActiveRecord::Migration[6.1]
  def change
    create_table :user_bills do |t|
      t.string :name
      t.string :description
      t.integer :amount

      t.timestamps
    end
  end
end
