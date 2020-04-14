
json.array! @comments do |comment|
    json.extract! comment, :id, :author_id, :track_id, :body, :created_at
    json.author do 
        json.id comment.author.id
        json.username comment.author.username
        json.photoUrl comment.author.photo.photoUrl if comment.author.photo.attached?
    end
end