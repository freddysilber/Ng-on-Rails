class Api::UsersController < ApplicationController
	def index
		render json: User.all
		# @users = User.all
		# render json: UserSerializer.new(@users)
	end

	def show
		render json: User.find(params[:id])
	end
end