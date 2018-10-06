class Api::SessionsController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user.save
      login(@user)
    else
      render json: @user.errors.full_messages, status: 404
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render json: {}
    else
      render json: ['User is not currently signed in!'], status: 404
    end
  end
end
