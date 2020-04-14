class Comment < ApplicationRecord
    validates :body, :author_id, :track_id, presence: true
    
    belongs_to :author,
    foreign_key: :author_id,
    class_name: :User
    
    belongs_to :track,
    foreign_key: :track_id,
    class_name: :Track 
end
