json.extract! user, :id, :email, :username, :age, :gender, :description
json.photoUrl url_for(user.photo) if user.photo.attached?