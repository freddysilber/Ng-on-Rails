class Api::UsersController < ApplicationController
	def index
		render json: User.all
		# @users = User.all
		# render json: UserSerializer.new(@users)
	end
end