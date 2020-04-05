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
        if logged_in?
            logout!
            render '/api/users/show'
        else
            render json: ['You are not logged in'], status: 404
        end
    end
end
