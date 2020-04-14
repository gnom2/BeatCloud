class Api::CommentsController < ApplicationController
    def index
        
        @comments = Comment.all.order(created_at: :desc)
        # @comments = Comment.includes(:track, :author).where(track_id: params[:comment][:trackId]).order(created_at: :asc)
    end

    def show 
        
        @comments = Comment.where(track_id: params[:id])
        render :show
    end

    def create
        @comment = Comment.new(comment_params)
        @comment.author = current_user 

        if @comment.save
            render :show
        else
            render json: { errors: @comment.errors.full_messages }, status: 422
        end
    end

    def destroy 
        @comment = Comment.find(params[:id])

        if @comment.destroy
          render :show
        else
          render json: @comment.errors.full_messages, status: 422
        end
    end

    private 

    def comment_params 
        params.require(:comment).permit(:body, :track_id, :author_id, :created_at)
    end
end