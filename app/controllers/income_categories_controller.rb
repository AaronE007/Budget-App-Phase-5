class IncomeCategoriesController < ApplicationController
  before_action :set_income_category, only: [:show, :update, :destroy]

  # GET /income_categories
  def index
    @income_categories = IncomeCategory.all

    render json: @income_categories
  end

  # GET /income_categories/1
  def show
    render json: @income_category
  end

  # POST /income_categories
  def create
    @income_category = IncomeCategory.new(income_category_params)

    if @income_category.save
      render json: @income_category, status: :created, location: @income_category
    else
      render json: @income_category.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /income_categories/1
  def update
    if @income_category.update(income_category_params)
      render json: @income_category
    else
      render json: @income_category.errors, status: :unprocessable_entity
    end
  end

  # DELETE /income_categories/1
  def destroy
    @income_category.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_income_category
      @income_category = IncomeCategory.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def income_category_params
      params.require(:income_category).permit(:name, :type)
    end
end
