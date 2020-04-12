json.extract! track, :id, :title, :genre, :artist_id, :description, :created_at
json.photoUrl url_for(track.photo) if track.photo.attached?
json.trackUrl url_for(track.track) if track.track.attached?