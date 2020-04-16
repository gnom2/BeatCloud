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
demo_photo = open('https://active-storage-beatcloud-seeds.s3.amazonaws.com/profileart.png')
demo.photo.attach(io: demo_photo, filename: 'profileart.png')
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


armin =  User.create({email: "armin@gmail.com", password: "123456", username: "Armin Van Buuren"})
anb = User.create({email: "anb@gmail.com", password: "123456", username: "Above & Beyond"})
cshock = User.create({email: "cshock@gmail.com", password: "123456", username: "Culture Shock"})
feint = User.create({email: "feint@gmail.com", password: "123456", username: "Feint"})
gareth = User.create({email: "gareth@gmail.com", password: "123456", username: "Gareth Emery"})
skrillex = User.create({email: "skrillex@gmail.com", password: "123456", username: "Skrillex"})
eliminate = User.create({email: "eliminate@gmail.com", password: "123456", username: "Eliminate"})
fredv = User.create({email: "fredv@gmail.com", password: "123456", username: "Fred V & Grafix"})
sfocus = User.create({email: "sfocus@gmail.com", password: "123456", username: "Sub Focus"})
porter = User.create({email: "porter@gmail.com", password: "123456", username: "Porter Robinson"})
nomana = User.create({email: "nomana@gmail.com", password: "123456", username: "No Mana"})


home_track1 = Track.create({title: "This Is What It Feels Like", genre: "HOMETEST", artist_id: armin.id })
home_track1_track = open('https://active-storage-beatcloud-seeds.s3.amazonaws.com/tracks/track1.mp3')
home_track1.track.attach(io: home_track1_track, filename: 'track1.mp3')

home_track1_photo = open('https://active-storage-beatcloud-seeds.s3.amazonaws.com/track1.png')
home_track1.photo.attach(io: home_track1_photo, filename: 'track1.png')

home_track2 = Track.create({title: "See The End", genre: "HOMETEST", artist_id: anb.id })
home_track2_track = open('https://active-storage-beatcloud-seeds.s3.amazonaws.com/tracks/track2.mp3')
home_track2.track.attach(io: home_track2_track, filename: 'track2.mp3')

home_track2_photo = open('https://active-storage-beatcloud-seeds.s3.amazonaws.com/track2.png')
home_track2.photo.attach(io: home_track2_photo, filename: 'track2.png')

home_track3 = Track.create({title: "Bunker", genre: "HOMETEST", artist_id: cshock.id })
home_track3_track = open('https://active-storage-beatcloud-seeds.s3.amazonaws.com/tracks/track3.mp3')
home_track3.track.attach(io: home_track3_track, filename: 'track3.mp3')

home_track3_photo = open('https://active-storage-beatcloud-seeds.s3.amazonaws.com/track3.png')
home_track3.photo.attach(io: home_track3_photo, filename: 'track3.png')

home_track4 = Track.create({title: "We Won't Be Alone", genre: "HOMETEST", artist_id: feint.id })
home_track4_track = open('https://active-storage-beatcloud-seeds.s3.amazonaws.com/tracks/track4.mp3')
home_track4.track.attach(io: home_track4_track, filename: 'track4.mp3')

home_track4_photo = open('https://active-storage-beatcloud-seeds.s3.amazonaws.com/track4.png')
home_track4.photo.attach(io: home_track4_photo, filename: 'track4.png')

home_track5 = Track.create({title: "You'll Be Ok", genre: "HOMETEST", artist_id: gareth.id })
home_track5_track = open('https://active-storage-beatcloud-seeds.s3.amazonaws.com/tracks/track5.mp3')
home_track5.track.attach(io: home_track5_track, filename: 'track5.mp3')

home_track5_photo = open('https://active-storage-beatcloud-seeds.s3.amazonaws.com/track5.png')
home_track5.photo.attach(io: home_track5_photo, filename: 'track5.png')

home_track6 = Track.create({title: "Mumbai Power", genre: "HOMETEST", artist_id: skrillex.id })
home_track6_track = open('https://active-storage-beatcloud-seeds.s3.amazonaws.com/tracks/track6.mp3')
home_track6.track.attach(io: home_track6_track, filename: 'track6.mp3')

home_track6_photo = open('https://active-storage-beatcloud-seeds.s3.amazonaws.com/track6.png')
home_track6.photo.attach(io: home_track6_photo, filename: 'track6.png')

home_track7 = Track.create({title: "Mula", genre: "HOMETEST", artist_id: eliminate.id })
home_track7_track = open('https://active-storage-beatcloud-seeds.s3.amazonaws.com/tracks/track7.mp3')
home_track7.track.attach(io: home_track7_track, filename: 'track7.mp3')

home_track7_photo = open('https://active-storage-beatcloud-seeds.s3.amazonaws.com/track7.png')
home_track7.photo.attach(io: home_track7_photo, filename: 'track7.png')

home_track8 = Track.create({title: "Altitude", genre: "HOMETEST", artist_id: fredv.id })
home_track8_track = open('https://active-storage-beatcloud-seeds.s3.amazonaws.com/tracks/track8.mp3')
home_track8.track.attach(io: home_track8_track, filename: 'track8.mp3')

home_track8_photo = open('https://active-storage-beatcloud-seeds.s3.amazonaws.com/track8.png')
home_track8.photo.attach(io: home_track8_photo, filename: 'track8.png')

home_track9 = Track.create({title: "Solar System", genre: "HOMETEST", artist_id: sfocus.id })
home_track9_track = open('https://active-storage-beatcloud-seeds.s3.amazonaws.com/tracks/track9.mp3')
home_track9.track.attach(io: home_track9_track, filename: 'track9.mp3')

home_track9_photo = open('https://active-storage-beatcloud-seeds.s3.amazonaws.com/track9.png')
home_track9.photo.attach(io: home_track9_photo, filename: 'track9.png')

home_track10 = Track.create({title: "Divinity (REZZ Remix)", genre: "HOMETEST", artist_id: porter.id })
home_track10_track = open('https://active-storage-beatcloud-seeds.s3.amazonaws.com/tracks/track10.mp3')
home_track10.track.attach(io: home_track10_track, filename: 'track10.mp3')

home_track10_photo = open('https://active-storage-beatcloud-seeds.s3.amazonaws.com/track10.png')
home_track10.photo.attach(io: home_track10_photo, filename: 'track10.png')

home_track11 = Track.create({title: "Bottle Service", genre: "HOMETEST", artist_id: nomana.id })
home_track11_track = open('https://active-storage-beatcloud-seeds.s3.amazonaws.com/tracks/track11.mp3')
home_track11.track.attach(io: home_track11_track, filename: 'track11.mp3')

home_track11_photo = open('https://active-storage-beatcloud-seeds.s3.amazonaws.com/track11.png')
home_track11.photo.attach(io: home_track11_photo, filename: 'track11.png')

home_track12 = Track.create({title: "Blue Monday", genre: "HOMETEST", artist_id: anb.id })
home_track12_track = open('https://active-storage-beatcloud-seeds.s3.amazonaws.com/tracks/track12.mp3')
home_track12.track.attach(io: home_track12_track, filename: 'track12.mp3')

home_track12_photo = open('https://active-storage-beatcloud-seeds.s3.amazonaws.com/track12.png')
home_track12.photo.attach(io: home_track12_photo, filename: 'track12.png')
