class User < ApplicationRecord
    validates :email, presence: true, uniqueness: true 
    validates :password, length: { minimum: 6, allow_nil: true}
    validates :password_digest, :session_token, presence: true 

    has_many :tracks,
        foreign_key: :artist_id,
        class_name: :Track,
        dependent: :destroy

    has_many :comments,
        foreign_key: :artist_id,
        class_name: :comment,
        dependent: :destroy

    has_many :likes,
        foreign_key: :user_id,
        class_name: :Like

    attr_reader :password 

    after_initialize :ensure_session_token

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil unless user
        user.is_password?(password) ? user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save!
        self.session_token
    end

end
