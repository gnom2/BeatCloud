class Api::TracksController < ApplicationController
    def index
        @tracks = Track.all 
        if @tracks
            render 'api/tracks'
        else
            render json: ["Tracks not found"], status: 404
        end
    end

    def show
        @track = @track.find(params[:id])
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
            render json: ['Upload has failed']
        end  
    end

    private

    def track_params
        params.require(:track).permit(:title, :artist_id, :genre, :description)
    end

end