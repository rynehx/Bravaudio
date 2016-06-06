class Api::UsersController < ApplicationController

  def index
    @users = User.all()
  end

  def show
    @user = User.find(params[:id])
  end


  def create
  		@user = User.new(user_params)
  		if @user.save
  			login(@user)
  			render "api/users/show"
  		else
  			@errors = @user.errors.full_messages
  			render "api/shared/error", status: 422
  		end
  end

  def destroy
    @user = User.find(params[:id])

    if @user.destroy
      render "root"
    else
      render "api/shared/error", status: 422
    end

  end

  def username
    @user = User.find_by(username: params[:username])
    if @user
      render "api/users/show"
    else
      @errors = ['user not found']
      render "api/shared/error", status: 404
    end
  end



	private

	def user_params
		params.require(:user).permit(:username, :password, :city, :state, :country, :profile_picture_url, :name)
	end
end
