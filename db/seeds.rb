# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'
User.destroy_all
Track.destroy_all

demo = User.create({email: "demo@aol.com", password: "123456", username: "GNOMEE", age: "28", gender:"male"})
scott = User.create({email: "scott@aol.com", password: "hunter12", username: "Scotty2Potty", age: "30", gender:"male"})
sera = User.create({email: "sera@aol.com", password: "password123", username: "PrincessSera", age: "24", gender:"female"})

track1 = Track.create({title: "loveFiction", genre: "Lo-Fi Hip Hop", artist_id: demo.id})
track1_photo = open('https://active-storage-beatcloud-seeds.s3.amazonaws.com/lovefiction.jpg')
track1.photo.attach(io: track1_photo, filename: 'lovefiction.jpg')
track1_track = open('https://active-storage-beatcloud-seeds.s3.amazonaws.com/lovefiction.mp3')
track1.track.attach(io: track1_track, filename: 'lovefiction.mp3')

track2 = Track.create({title: "frenchInhale", genre: "Lo-Fi Hip Hop", artist_id: demo.id})
track2_photo = open('https://active-storage-beatcloud-seeds.s3.amazonaws.com/frenchinhale.jpg')
track2.photo.attach(io: track2_photo, filename: 'frenchinhale.jpg')
track2_track = open('https://active-storage-beatcloud-seeds.s3.amazonaws.com/french_inhale.mp3')
track2.track.attach(io: track2_track, filename: 'french_inhale.mp3')

track3 = Track.create({title: "unforgetTable", genre: "Lo-Fi Hip Hop", artist_id: demo.id})
track3_photo = open('https://active-storage-beatcloud-seeds.s3.amazonaws.com/unforgettable.jpg')
track3.photo.attach(io: track3_photo, filename: 'unforgettable.jpg')
track3_track = open('https://active-storage-beatcloud-seeds.s3.amazonaws.com/unforgettable.mp3')
track3.track.attach(io: track3_track, filename: 'unforgettable.mp3')

