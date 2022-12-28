class CreateIncomes < ActiveRecord::Migration[6.1]
  def change
    create_table :incomes do |t|
      t.string :name
      t.string :type
      t.integer :amount
      t.string :time_period
      t.references :user, foreign_key: true, null: false
      t.references :income_category, foreign_key: true, null: false
  
      t.timestamps
    end
  end
 end
 