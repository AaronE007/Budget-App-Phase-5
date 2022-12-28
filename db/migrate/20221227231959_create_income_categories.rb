class CreateIncomeCategories < ActiveRecord::Migration[6.1]
  def change
    create_table :income_categories do |t|
      t.string :name
      t.string :type
  
      t.timestamps
    end
  end
 end
 