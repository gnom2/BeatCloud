class Api::TracksController < ApplicationController
    def index
        @tracks = Track.all 
        if @tracks
            render 'api/tracks/index'
        else
            render json: ["Tracks not found"], status: 404
        end
    end

    def show
        @track = Track.find(params[:id])
        @artist = User.find(@track.artist_id)
        if @track 
            render 'api/tracks/show'
        else
            render json: ["Track not found"], status: 404
        end
    end

    def create
        @track = Track.new(track_params)

        if @track.save
            render '/api/tracks/show'
        else
            render json: @track.errors.full_messages, status: 422
        end  
    end

    def destroy
        @track = Track.find(params[:id])
        if @track
            @track.destroy
            render "api/tracks/show"
        else
            render json: ["Track not found"], status: 422
        end
    end

    private

    def track_params
        params.require(:track).permit(:title, :artist_id, :genre, :description)
    end

end