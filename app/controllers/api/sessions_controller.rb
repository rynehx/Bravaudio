class Api::SessionsController < ApplicationController


  	def create
  		@user = User.find_by_credentials(params[:user][:username], params[:user][:password])
  		if @user
  			login(@user)
        @liked_playlists = @user.liked_playlists
        @liked_tracks = @user.liked_tracks
  			render "api/sessions/show"
  		else
  			@errors = ['invalid credentials']
  			render "api/shared/error", status: 401
  		end
  	end

  	def destroy
  		@user = current_user
  		if @user
  			logout
  			render "api/users/show"
  		else
  			@errors = ['no one logged in']
  			render "api/shared/error", status: 404
  		end
  	end

  	def show
  		if current_user
  			@user = current_user
        @liked_playlists = @user.liked_playlists
        @liked_tracks = @user.liked_tracks
  			render "api/sessions/show"
  		else
  			@errors = nil
  			render "api/shared/error", status: 404
  		end
  	end


end
