json.set! @comment.id do
    json.id @comment.id
    json.body @comment.body
    json.author_id @comment.author_id
    json.track_id @comment.track_id
    json.created_at @comment.created_at
  end
  