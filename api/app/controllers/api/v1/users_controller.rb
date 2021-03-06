module Api
  module V1
    class UsersController < ApplicationController
        def create
          @user = User.create! user_params

          payload = Jwt::TokenProvider.refresh_tokens @user
          payload[:user] = @user

          render json: { status: :success,
                         token: { access_token: payload[:access_token],
                                  refresh_token: payload[:refresh_token]
                                },
                         user: payload[:user]
                       }
        end

        private
        def user_params
          params.require(:user)
                .permit(:name, :email, :password, :password_confirmation)
        end
      end
    end
  end