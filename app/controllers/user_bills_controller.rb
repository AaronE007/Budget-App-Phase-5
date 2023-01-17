class UserBillsController < ApplicationController

  # GET /user_bills
  def index
    bills = current_user.user_bills
    render json: bills
  end


  # POST /user_bills
  def create
    expense_category = ExpenseCategory.find_or_create_by(name: params['expense_category'])
    user_bill = UserBill.create!(user_bill_params.merge(expense_category_id: expense_category.id, user_id: current_user.id))
    render json: user_bill
  end

  # PATCH/PUT /user_bills/1
  def update
    if user_bill = current_user.user_bills.find(params[:id])
     user_bill.update!(user_bill_params)
     user_bill.reload
     render json: user_bill
    else 
     no_route
    end 
   end

  # DELETE /user_bills/1
  def destroy
    user_bill = current_user.user_bills.find(params[:id])
    user_bill.destroy
  end

  private
    def user_bill_params
      params.require(:user_bill).permit(:name, :description, :amount, :expense_category)
    end
end
