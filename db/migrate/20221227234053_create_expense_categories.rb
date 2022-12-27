class CreateExpenseCategories < ActiveRecord::Migration[6.1]
  def change
    create_table :expense_categories do |t|
      t.string :name
      t.integer :balance
  
      t.timestamps
    end
  end
 end
 
