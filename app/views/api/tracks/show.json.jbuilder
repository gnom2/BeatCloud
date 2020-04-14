json.track do
  json.partial! "api/tracks/track", track: @track
  end
  
json.artist do
  json.set! @artist.id do 
    json.id @artist.id
    json.username @artist.username
    json.photoUrl @artist.photoUrl 
  end
end

json.comments do 
  @comments.each do |comment|
    json.set! comment.id do 
      json.id comment.id 
      json.body comment.body 
      json.track_id comment.track_id 
      json.author_id comment.author_id
      json.created_at comment.created_at
    end
  end
end