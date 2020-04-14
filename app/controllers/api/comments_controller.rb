class Api::CommentsController < ApplicationController
    def index

        @comments = Comment.includes(:track, :author).where(track_id: params[:comment][:trackId]).order(created_at: :desc)

    end

    def create
        @comment = Comment.new(comment_params)
        @comment.author = current_user 

        if @comment.save! 

            @comments = Comment.includes(:track, :author).where(track_id: params[:comment][:track_id])
            render :index
        else
            render json: { errors: @comment.errors.full_messages }, status: 422
        end
    end

    def destroy 
        @comment = Comment.find(params[:id])
        if @comment.destroy
            render json: {}
        else
            render json: { errors: @comment.errors.full_messages}, status: 422
        end
    end

    private 

    def comment_params 
        params.require(:comment).permit(:body, :track_id, :author_id, :created_at)
    end
end