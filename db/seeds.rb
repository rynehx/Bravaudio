# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)





  Track.create({title: "Come my Way", description: "cuz I go hard in this ish",
    image_url: "http://res.cloudinary.com/bravaudio/image/upload/v1461868384/a4ddb3a5d3dd9dc6103d4f328db55d26.500x500x1_wwsow4.jpg",
    audio_url: "http://res.cloudinary.com/bravaudio/video/upload/v1461867581/Fetty_Wap_ft._Drake_-_My_Way_Remix_CDQ_cuaq28.mp3",
    author_id: 1});

  Track.create({title: "Pursuit of Happiness", description: "Luv me bck",
    image_url: "http://res.cloudinary.com/bravaudio/image/upload/v1461899137/kid-cudi-man-on-the-moon-the-end-of-day-cover-1_ckt7tz.jpg",
    audio_url: "http://res.cloudinary.com/bravaudio/video/upload/v1461867581/Fetty_Wap_ft._Drake_-_My_Way_Remix_CDQ_cuaq28.mp3",
    author_id: 2});


  Track.create({title: "Boomin", description: "infooo",
  image_url: "http://res.cloudinary.com/bravaudio/image/upload/v1461899190/82f7a2ef_axhjwk.jpg",
  audio_url: "http://res.cloudinary.com/bravaudio/video/upload/v1461899073/10_Boomin_v6jauy.mp3",
  author_id: 2});


  Track.create({title: "Black Hole Sun", description: "infooo",
  image_url: "http://res.cloudinary.com/bravaudio/image/upload/v1461899160/Soundgarden-Superunknown_qncwxg.jpg",
  audio_url: "http://res.cloudinary.com/bravaudio/video/upload/v1461899068/07_-_Black_Hole_Sun_zfrw3x.mp3",
  author_id: 3});


  Track.create({title: "4th of July", description: "infooo",
  image_url: "http://res.cloudinary.com/bravaudio/image/upload/v1461899160/Soundgarden-Superunknown_qncwxg.jpg",
  audio_url: "http://res.cloudinary.com/bravaudio/video/upload/v1461899077/13_-_4th_Of_July_kahhei.mp3",
  author_id: 4});

  Track.create({title: "Wild for Night", description: "infooo",
  image_url: "http://res.cloudinary.com/bravaudio/image/upload/v1461899234/AtLongLastASAPCover_ncw4ac.jpg",
  audio_url: "http://res.cloudinary.com/bravaudio/video/upload/v1461899057/08_Wild_For_The_Night_feat._Skrillex_cpvzjw.mp3",
  author_id: 4});

  Track.create({title: "Legend", description: "infooo",
  image_url: "http://res.cloudinary.com/bravaudio/image/upload/v1461899374/square_drakequote_agp7y0.png",
  audio_url: "http://res.cloudinary.com/bravaudio/video/upload/v1461899800/01-01_-_Legend_oh32so.flac",
  author_id: 1});

  Track.create({title: "Trap Queen", description: "infooo",
  image_url: "http://res.cloudinary.com/bravaudio/image/upload/v1461899190/82f7a2ef_axhjwk.jpg",
  audio_url: "http://res.cloudinary.com/bravaudio/video/upload/v1461899071/01_Trap_Queen_grjdrs.mp3",
  author_id: 2});

  Track.create({title: "Day n Nite", description: "Luv me bck",
    image_url: "http://res.cloudinary.com/bravaudio/image/upload/v1461899137/kid-cudi-man-on-the-moon-the-end-of-day-cover-1_ckt7tz.jpg",
    audio_url: "http://res.cloudinary.com/bravaudio/video/upload/v1461899076/07-kid_cudi-day_n_nite_jzvdvj.mp3",
    author_id: 1});

  Playlist.create([
    {title: "drake", author_id: 2},{title: "soundgarden", author_id:2}
    ])


  PlaylistTrackJoining.create([{
      track_id: 1, playlist_id: 1
    },{
      track_id: 7, playlist_id: 1
    },{
      track_id: 4, playlist_id: 2
    },{
      track_id: 5, playlist_id: 2
    }])


  # Track.create({title: "", description: "infooo",
  # image_url: "",
  # audio_url: "",
  # author_id: 1});
