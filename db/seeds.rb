# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Track.destroy_all

demo = User.create({email: "demo@aol.com", password: "123456", username: "GNOMEE", age: "28", gender:"male"})
scott = User.create({email: "scott@aol.com", password: "hunter12", username: "Scotty2Potty", age: "30", gender:"male"})
sera = User.create({email: "sera@aol.com", password: "password123", username: "PrincessSera", age: "24", gender:"female"})

track1 = Track.create({title: "Gangsta", genre: "Progressive", artist_id: demo.id})
track2 = Track.create({title: "Harmonic Voltage", genre: "Progressive Trance", artist_id: demo.id})
track3 = Track.create({title: "Yugen", genre: "Progressive", artist_id: demo.id})