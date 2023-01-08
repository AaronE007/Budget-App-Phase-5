class CreateIncomes < ActiveRecord::Migration[6.1]
  def change
    create_table :incomes do |t|
      t.string :name
      t.string :description
      t.decimal :amount
      t.string :time_period
      t.references :user, foreign_key: true, null: false
  
      t.timestamps
    end
  end
 end
 