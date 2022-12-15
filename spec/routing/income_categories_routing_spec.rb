require "rails_helper"

RSpec.describe IncomeCategoriesController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/income_categories").to route_to("income_categories#index")
    end

    it "routes to #show" do
      expect(get: "/income_categories/1").to route_to("income_categories#show", id: "1")
    end


    it "routes to #create" do
      expect(post: "/income_categories").to route_to("income_categories#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/income_categories/1").to route_to("income_categories#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/income_categories/1").to route_to("income_categories#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/income_categories/1").to route_to("income_categories#destroy", id: "1")
    end
  end
end
