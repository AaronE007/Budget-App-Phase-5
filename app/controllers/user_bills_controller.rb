class UserBillsController < ApplicationController
  before_action :set_user_bill, only: [:show, :update, :destroy]

  # GET /user_bills
  def index
    @user_bills = UserBill.all

    render json: @user_bills
  end

  # GET /user_bills/1
  def show
    render json: @user_bill
  end

  # POST /user_bills
  def create
    @user_bill = UserBill.new(user_bill_params)

    if @user_bill.save
      render json: @user_bill, status: :created, location: @user_bill
    else
      render json: @user_bill.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /user_bills/1
  def update
    if @user_bill.update(user_bill_params)
      render json: @user_bill
    else
      render json: @user_bill.errors, status: :unprocessable_entity
    end
  end

  # DELETE /user_bills/1
  def destroy
    @user_bill.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user_bill
      @user_bill = UserBill.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def user_bill_params
      params.require(:user_bill).permit(:name, :description, :amount)
    end
end
