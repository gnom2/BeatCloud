class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user 
            login!(@user)
            render '/api/users/show'
        else
            render json: ['Invalid Email or Password'], status: 422
        end
    end

    def destroy
        
        @user = current_user
        if @user
            logout!
            render json: ['You are logged out']
        else
            render json: ['You are not logged in'], status: 404
        end
    end
end
