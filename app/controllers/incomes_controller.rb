class IncomesController < ApplicationController
  before_action :set_income, only: [:show, :update, :destroy]

  # GET /incomes
  def index
    @incomes = Income.all

    render json: @incomes
  end

  # GET /incomes/1
  def show
    render json: @income
  end

  # POST /incomes
  def create
    income = Income.create(income_params)
    render json: income
  end

  # PATCH/PUT /incomes/1
  def update
    if @income.update(income_params)
      render json: @income
    else
      render json: @income.errors, status: :unprocessable_entity
    end
  end

  # DELETE /incomes/1
  def destroy
    @income.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_income
      @income = Income.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def income_params
      params.require(:income).permit(:name, :description, :amount, :time_period)
    end
end

