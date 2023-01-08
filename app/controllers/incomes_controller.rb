class IncomesController < ApplicationController

  # GET /incomes
  def index
    incomes = current_user.incomes
    render json: incomes
  end

  # POST /incomes
  def create
    income_category = IncomeCategory.find_or_create_by(name: params['income_category'])
    income = Income.create(income_params)
    render json: income
  end

  # PATCH/PUT /incomes/1
  def update
   if income = current.user.incomes.find(params[:id])
    income.update!(income_params)
    income.reload
    render json: income
   else 
    no_route
   end 
  end

  # DELETE /incomes/1
  def destroy
    income = current_user.incomes.find(params[:id])
    income.destroy
  end

  private

    # Only allow a list of trusted parameters through.
    def income_params
      params.require(:income).permit(:name, :description, :amount, :time_period)
    end
end

