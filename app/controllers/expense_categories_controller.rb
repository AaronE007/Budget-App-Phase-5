class ExpenseCategoriesController < ApplicationController
  
  # GET /expense_categories
  def index
    expense_categories = current_user.expense_categories
    render json: expense_categories
  end


  # POST /expense_categories
  def create
    expense_category = current_user.expense_categories.create!(expense_category_params)
    render json: expense_category
  end

  # DELETE /expense_categories/1
  def destroy
    expense_category = current_user.expense_categories.find(params[:id])
    expense_category.destroy
    render json: {message: "Expense Category Deleted"}
  end

  private
   
    def expense_category_params
      params.require(:expense_category).permit(:name, :balance)
    end
end
