# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)





  Track.create({title: "Drake & Fetty Wap - Come my Way", description: "cuz I go hard in this ish",
    image_url: "http://res.cloudinary.com/bravaudio/image/upload/v1461868384/a4ddb3a5d3dd9dc6103d4f328db55d26.500x500x1_wwsow4.jpg",
    audio_url: "http://res.cloudinary.com/bravaudio/video/upload/v1461867581/Fetty_Wap_ft._Drake_-_My_Way_Remix_CDQ_cuaq28.mp3",
    author_id: 3});

  Track.create({title: "Kid Cudi - Pursuit of Happiness", description: "Luv me bck",
    image_url: "http://res.cloudinary.com/bravaudio/image/upload/v1461899137/kid-cudi-man-on-the-moon-the-end-of-day-cover-1_ckt7tz.jpg",
    audio_url: "http://res.cloudinary.com/bravaudio/video/upload/v1461899083/13-kid_cudi-pusuit_of_happiness_ft._mgmt_ratatat_zdvcbq.mp3",
    author_id: 3});


  Track.create({title: "Fetty Wap -Boomin", description: "infooo",
  image_url: "http://res.cloudinary.com/bravaudio/image/upload/v1461899190/82f7a2ef_axhjwk.jpg",
  audio_url: "http://res.cloudinary.com/bravaudio/video/upload/v1461899073/10_Boomin_v6jauy.mp3",
  author_id: 3});


  Track.create({title: "Soundgarden - Black Hole Sun", description: "infooo",
  image_url: "http://res.cloudinary.com/bravaudio/image/upload/v1461899160/Soundgarden-Superunknown_qncwxg.jpg",
  audio_url: "http://res.cloudinary.com/bravaudio/video/upload/v1461899068/07_-_Black_Hole_Sun_zfrw3x.mp3",
  author_id: 3});


  Track.create({title: "SoundGarden - 4th of July", description: "infooo",
  image_url: "http://res.cloudinary.com/bravaudio/image/upload/v1461899160/Soundgarden-Superunknown_qncwxg.jpg",
  audio_url: "http://res.cloudinary.com/bravaudio/video/upload/v1461899077/13_-_4th_Of_July_kahhei.mp3",
  author_id: 4});

  Track.create({title: "A$AP Rocky - Wild for Night", description: "infooo",
  image_url: "http://res.cloudinary.com/bravaudio/image/upload/v1461899234/AtLongLastASAPCover_ncw4ac.jpg",
  audio_url: "http://res.cloudinary.com/bravaudio/video/upload/v1461899057/08_Wild_For_The_Night_feat._Skrillex_cpvzjw.mp3",
  author_id: 4});


  Track.create({title: "Fetty Wap - Trap Queen", description: "infooo",
  image_url: "http://res.cloudinary.com/bravaudio/image/upload/v1461899190/82f7a2ef_axhjwk.jpg",
  audio_url: "http://res.cloudinary.com/bravaudio/video/upload/v1461899071/01_Trap_Queen_grjdrs.mp3",
  author_id: 3});

  Track.create({title: "Kid Cudi - Day n Nite", description: "Luv me bck",
    image_url: "http://res.cloudinary.com/bravaudio/image/upload/v1461899137/kid-cudi-man-on-the-moon-the-end-of-day-cover-1_ckt7tz.jpg",
    audio_url: "http://res.cloudinary.com/bravaudio/video/upload/v1461899076/07-kid_cudi-day_n_nite_jzvdvj.mp3",
    author_id: 3});



  Track.create([{title: "Drake & Future - Jumpman", description: "boomin on production, WOW",
image_url: "http://res.cloudinary.com/bravaudio/image/upload/v1462315350/9cd0f669d4df4cd85d57b059f6ff29f3.1000x1000x1_wemnkw.jpg",
audio_url: "http://res.cloudinary.com/bravaudio/video/upload/v1462314743/09_Jumpman_iqy603.mp3",
author_id: 1},
 {title: "DJ Sona - Kinetic", description: "Energize!!",
 image_url: "http://res.cloudinary.com/bravaudio/image/upload/v1462315513/hqdefault_ukscof.jpg",
 audio_url: "http://res.cloudinary.com/bravaudio/video/upload/v1462315064/DJ_Sona_Kinetic_The_Crystal_Method_x_Dada_Life_sqdwhq.mp3",
 author_id: 2},
 {title: "DJ Sona - Concussive", description: "Bass Drop!!",
 image_url: "http://res.cloudinary.com/bravaudio/image/upload/v1462315655/hqdefault_ypm2ag.jpg",
 audio_url: "http://res.cloudinary.com/bravaudio/video/upload/v1462315060/DJ_Sona_Concussive_Bassnectar_x_Renholde%CC%88r_rirkay.mp3",
 author_id: 2},
 {title: "DJ Sona - Ethereal", description: "Serenity!!",
 image_url: "http://res.cloudinary.com/bravaudio/image/upload/v1462315589/hqdefault_usb3fy.jpg",
 audio_url: "http://res.cloudinary.com/bravaudio/video/upload/v1462315063/DJ_Sona_Ethereal_Nosaj_Thing_x_Pretty_Lights_yu5g3v.mp3",
 author_id: 2},
 {title: "Drake & Future - Digital Dash", description: "dashing",
 image_url: "http://res.cloudinary.com/bravaudio/image/upload/v1462315350/9cd0f669d4df4cd85d57b059f6ff29f3.1000x1000x1_wemnkw.jpg",
 audio_url: "http://res.cloudinary.com/bravaudio/video/upload/v1462314720/01_Digital_Dash_fssh5h.mp3",
 author_id: 1},
 {title: "Drake & Future - Big Rings", description: "We are talking about teams",
 image_url: "http://res.cloudinary.com/bravaudio/image/upload/v1462315350/9cd0f669d4df4cd85d57b059f6ff29f3.1000x1000x1_wemnkw.jpg",
 audio_url: "http://res.cloudinary.com/bravaudio/video/upload/v1462314719/02_Big_Rings_canhws.mp3",
 author_id: 1},
 {title: "Drake & Future - Live From The Gutter", description: "Gutta Guttta",
 image_url: "http://res.cloudinary.com/bravaudio/image/upload/v1462315350/9cd0f669d4df4cd85d57b059f6ff29f3.1000x1000x1_wemnkw.jpg",
 audio_url: "http://res.cloudinary.com/bravaudio/video/upload/v1462314702/03_Live_From_the_Gutter_bjdsga.mp3",
 author_id: 1},
 {title: "Drake & Future - Diamonds Dancing", description: "Bling",
 image_url: "http://res.cloudinary.com/bravaudio/image/upload/v1462315350/9cd0f669d4df4cd85d57b059f6ff29f3.1000x1000x1_wemnkw.jpg",
 audio_url: "http://res.cloudinary.com/bravaudio/video/upload/v1462314702/03_Live_From_the_Gutter_bjdsga.mp3",
 author_id: 1},
 {title: "Drake & Future - Scholarships", description: "college",
 image_url: "http://res.cloudinary.com/bravaudio/image/upload/v1462315350/9cd0f669d4df4cd85d57b059f6ff29f3.1000x1000x1_wemnkw.jpg",
 audio_url: "http://res.cloudinary.com/bravaudio/video/upload/v1462314678/05_Scholarships_azmphv.mp3",
 author_id: 1},
 {title: "Drake & Future - Plastic Bag", description: "empty",
 image_url: "http://res.cloudinary.com/bravaudio/image/upload/v1462315350/9cd0f669d4df4cd85d57b059f6ff29f3.1000x1000x1_wemnkw.jpg",
 audio_url: "http://res.cloudinary.com/bravaudio/video/upload/v1462314715/06_Plastic_Bag_i40a61.mp3",
 author_id: 1},
 {title: "Drake & Future - I'm The Plug", description: "dont pull please",
 image_url: "http://res.cloudinary.com/bravaudio/image/upload/v1462315350/9cd0f669d4df4cd85d57b059f6ff29f3.1000x1000x1_wemnkw.jpg",
 audio_url: "http://res.cloudinary.com/bravaudio/video/upload/v1462314710/07_I_m_the_Plug_j1fmpf.mp3",
 author_id: 1},
 {title: "Drake & Future - Change Locations", description: "moving away",
 image_url: "http://res.cloudinary.com/bravaudio/image/upload/v1462315350/9cd0f669d4df4cd85d57b059f6ff29f3.1000x1000x1_wemnkw.jpg",
 audio_url: "http://res.cloudinary.com/bravaudio/video/upload/v1462314749/08_Change_Locations_az1pir.mp3",
 author_id: 1},
 {title: "Drake & Future - Jersey", description: "beach",
 image_url: "http://res.cloudinary.com/bravaudio/image/upload/v1462315350/9cd0f669d4df4cd85d57b059f6ff29f3.1000x1000x1_wemnkw.jpg",
 audio_url: "http://res.cloudinary.com/bravaudio/video/upload/v1462314775/10_Jersey_euhrif.mp3",
 author_id: 1},
 {title: "Drake & Future - 30 for 30 Freestyle", description: "beach",
 image_url: "http://res.cloudinary.com/bravaudio/image/upload/v1462315350/9cd0f669d4df4cd85d57b059f6ff29f3.1000x1000x1_wemnkw.jpg",
 audio_url: "http://res.cloudinary.com/bravaudio/video/upload/v1462314785/11_30_for_30_Freestyle_okk1xw.mp3",
 author_id: 1},
 {title: "Evanescence - Bring Me To Life", description: "Spooky",
  image_url: "http://res.cloudinary.com/bravaudio/image/upload/v1462512309/Album-Cover-evanescence-1019990_600_600_fbxid3.bmp",
  audio_url: "http://res.cloudinary.com/bravaudio/video/upload/v1462314818/Evanescence_-_Bring_Me_To_Life_oomzo3.mp3",
  author_id: 4},
  {title: "Evanescence - My Immortal", description: "the new track",
  image_url: "http://res.cloudinary.com/bravaudio/image/upload/v1462512309/Album-Cover-evanescence-1019990_600_600_fbxid3.bmp",
  audio_url: "http://res.cloudinary.com/bravaudio/video/upload/v1462314836/Evanescence_-_My_Immortal_ta5pwx.mp3",
  author_id: 4},
  {title: "Muse - Unnatural Selection", description: "Spooky",
  image_url: "http://res.cloudinary.com/bravaudio/image/upload/v1462512463/Unnatural-Selection-cover-muse-24031001-320-349_jg8sak.png",
  audio_url: "http://res.cloudinary.com/bravaudio/video/upload/v1462314790/06_Unnatural_Selection_uev4yc.mp3",
  author_id: 4},
  {title: "Muse - Exogenesis", description: "Spooky",
  image_url: "http://res.cloudinary.com/bravaudio/image/upload/v1462512601/18af2a73d33e4c2898f2eaae615c9bd9_ca3xk6.png",
  audio_url: "http://res.cloudinary.com/bravaudio/video/upload/v1462314800/11_Exogenesis_Symphony_Part_3_hzs2rx.mp3",
  author_id: 4},
  {title: "Muse - Uprising", description: "Spooky",
  image_url: "http://res.cloudinary.com/bravaudio/image/upload/v1462512716/b7330d0e_dtkqit.jpg",
  audio_url: "http://res.cloudinary.com/bravaudio/video/upload/v1462314761/01-Uprising_yzfdir.mp3",
  author_id: 4},
  {title: "Muse - Guiding Light", description: "Spooky",
  image_url: "http://res.cloudinary.com/bravaudio/image/upload/v1462512875/Theresistance_aoztjk.jpg",
  audio_url: "http://res.cloudinary.com/bravaudio/video/upload/v1462314790/05_Guiding_Light_g4euxw.mp3",
  author_id: 4},
  {title: "Muse - The Resistance", description: "Spooky",
  image_url: "http://res.cloudinary.com/bravaudio/image/upload/v1462512875/Theresistance_aoztjk.jpg",
  audio_url: "http://res.cloudinary.com/bravaudio/video/upload/v1462314784/02-Resistance_mfdabh.mp3",
  author_id: 4},
  {title: "Muse - United States of Eurasia", description: "Spooky",
  image_url: "http://res.cloudinary.com/bravaudio/image/upload/v1462512980/United_States_of_Eurasia__Muse_single_-_cover_art_jz9nxq.jpg",
  audio_url: "http://res.cloudinary.com/bravaudio/video/upload/v1462314816/04_United_States_of_Eurasia_Collateral_Damage_pnp8hj.mp3",
  author_id: 4},

])








  Playlist.create([
    {title: Faker::Company.buzzword, author_id: 1, description: Faker::Hacker.say_something_smart, image_url: "https://cdn.colorlib.com/wp/wp-content/uploads/sites/2/2014/02/instagram-logo.jpg"},
    {title: Faker::Company.buzzword, author_id: 2, description: Faker::Hacker.say_something_smart, image_url: "http://www.flat-e.com/flate5/wp-content/uploads/cover-960x857.jpg"},
    {title: Faker::Company.buzzword, author_id: 3, description: Faker::Hacker.say_something_smart, image_url: "http://illusion.scene360.com/wp-content/uploads/2014/10/computergraphics-album-covers-2014-03.jpg"},
    {title: Faker::Company.buzzword, author_id: 4, description: Faker::Hacker.say_something_smart, image_url: "http://img11.deviantart.net/bd94/i/2013/361/7/5/lights_album_art_by_bonvallet-d6ylvvi.png"},
    {title: Faker::Company.buzzword, author_id: 5, description: Faker::Hacker.say_something_smart, image_url: "http://www.designyourway.net/diverse/2/albumart/41184568255.jpg"},
    {title: Faker::Company.buzzword, author_id: 6, description: Faker::Hacker.say_something_smart, image_url: "https://upload.wikimedia.org/wikipedia/en/4/46/Run_Kid_Run_-_Love_At_The_Core_(Album_Art).jpg"},
    {title: Faker::Company.buzzword, author_id: 1, description: Faker::Hacker.say_something_smart, image_url: "https://le0pard13.files.wordpress.com/2013/08/pink-floyd-dark-side-of-the-moon-album-cover.jpg"},
    {title: Faker::Company.buzzword, author_id: 2, description: Faker::Hacker.say_something_smart, image_url: "http://art-sponge.com/wp-content/uploads/2011/02/iron_and_wine_kiss_each_other_clean-1024x1024.jpg"},
    {title: Faker::Company.buzzword, author_id: 1, description: Faker::Hacker.say_something_smart, image_url: "https://s-media-cache-ak0.pinimg.com/736x/dc/75/62/dc75620a85349b109b529e0f555897ca.jpg"},
    {title: Faker::Company.buzzword, author_id: 2, description: Faker::Hacker.say_something_smart, image_url: "http://www.billboard.com/files/media/Green-Day-American-Idiot-album-covers-billboard-1000x1000.jpg"},
    {title: Faker::Company.buzzword, author_id: 3, description: Faker::Hacker.say_something_smart, image_url: "http://images.rapgenius.com/7a4d222fe114a84612c546abfe8f3a21.1000x1000x1.jpg"},
    {title: Faker::Company.buzzword, author_id: 4, description: Faker::Hacker.say_something_smart, image_url: "http://kingxqueen.com/wp-content/uploads/2016/04/VFT6-cover.jpg"},
    {title: Faker::Company.buzzword, author_id: 5, description: Faker::Hacker.say_something_smart, image_url: "http://www.billboard.com/files/media/disclosure-caracal-album.jpg"},
    {title: Faker::Company.buzzword, author_id: 6, description: Faker::Hacker.say_something_smart, image_url: "http://ecx.images-amazon.com/images/I/815U3MK2jrL._SL1500_.jpg"},
    {title: Faker::Company.buzzword, author_id: 1, description: Faker::Hacker.say_something_smart, image_url: "http://groundctrl.s3.amazonaws.com/clients/taylorswift/media/02/14/images/assets/large.uXdB-5khn8a_1F2p7-KX0xCiRnOXiK5cwgonO0va294.jpg"},
    {title: Faker::Company.buzzword, author_id: 2, description: Faker::Hacker.say_something_smart, image_url: "https://upload.wikimedia.org/wikipedia/en/e/e8/Taylor_Swift_-_Red.png"},
    {title: Faker::Company.buzzword, author_id: 1, description: Faker::Hacker.say_something_smart, image_url: "https://upload.wikimedia.org/wikipedia/en/2/29/BornToDieAlbumCover.png"},
    {title: Faker::Company.buzzword, author_id: 2, description: Faker::Hacker.say_something_smart, image_url: "http://ecx.images-amazon.com/images/I/81Hj5Wf1Z7L._SL1500_.jpg"},
    {title: Faker::Company.buzzword, author_id: 3, description: Faker::Hacker.say_something_smart, image_url: "https://upload.wikimedia.org/wikipedia/en/2/29/Disclosure_-_Latch_(feat._Sam_Smith).png"},
    ])


  PlaylistTrackJoining.create([
    {track_id:1 , playlist_id: 1, order: 1},
    {track_id:2 , playlist_id: 1, order: 2},
    {track_id:13 , playlist_id: 1, order: 3},
    {track_id:4 , playlist_id: 1, order: 4},
    {track_id:18 , playlist_id: 1, order: 5},
    {track_id:6 , playlist_id: 1, order: 6},
    {track_id:30 , playlist_id: 1, order: 7},
    {track_id:7 , playlist_id: 1, order: 8},
    {track_id:10 , playlist_id: 1, order: 9},
    {track_id:25 , playlist_id: 1, order: 10},
    {track_id:21 , playlist_id: 1, order: 11},


    {track_id:10 , playlist_id: 2, order: 1},
    {track_id:12 , playlist_id: 2, order: 2},
    {track_id:1 , playlist_id: 2, order: 3},
    {track_id:3 , playlist_id: 2, order: 4},
    {track_id:24 , playlist_id: 2, order: 5},
    {track_id:6 , playlist_id: 2, order: 6},
    {track_id:29 , playlist_id: 2, order: 7},
    {track_id:28 , playlist_id: 2, order: 8},
    {track_id:27 , playlist_id: 2, order: 9},
    {track_id:4 , playlist_id: 2, order: 10},
    {track_id:21 , playlist_id: 2, order: 11},

    {track_id:14 , playlist_id: 3, order: 1},
    {track_id:13 , playlist_id: 3, order: 2},
    {track_id:12 , playlist_id: 3, order: 3},
    {track_id:4 , playlist_id: 3, order: 4},
    {track_id:2 , playlist_id: 3, order: 5},
    {track_id:1 , playlist_id: 3, order: 6},
    {track_id:27 , playlist_id: 3, order: 7},
    {track_id:30 , playlist_id: 3, order: 8},


    {track_id:14 , playlist_id: 13, order: 1},
    {track_id:13 , playlist_id: 13, order: 2},
    {track_id:12 , playlist_id: 13, order: 3},
    {track_id:4 , playlist_id: 13, order: 4},
    {track_id:2 , playlist_id: 13, order: 5},
    {track_id:1 , playlist_id: 13, order: 6},
    {track_id:27 , playlist_id: 13, order: 7},
    {track_id:30 , playlist_id: 13, order: 8},


    {track_id:8 , playlist_id: 4, order: 1},
    {track_id:7 , playlist_id: 4, order: 2},
    {track_id:6 , playlist_id: 4, order: 3},
    {track_id:5 , playlist_id: 4, order: 4},
    {track_id:4 , playlist_id: 4, order: 5},
    {track_id:3 , playlist_id: 4, order: 6},
    {track_id:2 , playlist_id: 4, order: 7},
    {track_id:1 , playlist_id: 4, order: 8},

    {track_id:16 , playlist_id: 5, order: 1},
    {track_id:15 , playlist_id: 5, order: 2},
    {track_id:14 , playlist_id: 5, order: 3},
    {track_id:13 , playlist_id: 5, order: 4},
    {track_id:12 , playlist_id: 5, order: 5},
    {track_id:11 , playlist_id: 5, order: 6},
    {track_id:10 , playlist_id: 5, order: 7},
    {track_id:9 , playlist_id: 5, order: 8},

    {track_id:24 , playlist_id: 6, order: 1},
    {track_id:23 , playlist_id: 6, order: 2},
    {track_id:22 , playlist_id: 6, order: 3},
    {track_id:21 , playlist_id: 6, order: 4},
    {track_id:20 , playlist_id: 6, order: 5},
    {track_id:19 , playlist_id: 6, order: 6},
    {track_id:18 , playlist_id: 6, order: 7},
    {track_id:17 , playlist_id: 6, order: 8},

    {track_id:2 , playlist_id: 7, order: 1},
    {track_id:1 , playlist_id: 7, order: 2},
    {track_id:30 , playlist_id: 7, order: 3},
    {track_id:29 , playlist_id: 7, order: 4},
    {track_id:28 , playlist_id: 7, order: 5},
    {track_id:27 , playlist_id: 7, order: 6},
    {track_id:26 , playlist_id: 7, order: 7},
    {track_id:25 , playlist_id: 7, order: 8},

    {track_id:3 , playlist_id: 8, order: 1},
    {track_id:5 , playlist_id: 8, order: 2},
    {track_id:7 , playlist_id: 8, order: 3},
    {track_id:9 , playlist_id: 8, order: 4},
    {track_id:11 , playlist_id: 8, order: 5},
    {track_id:13 , playlist_id: 8, order: 6},
    {track_id:15 , playlist_id: 8, order: 7},
    {track_id:17 , playlist_id: 8, order: 8},


    {track_id:4 , playlist_id: 9, order: 1},
    {track_id:6 , playlist_id: 9, order: 2},
    {track_id:8 , playlist_id: 9, order: 3},
    {track_id:10 , playlist_id: 9, order: 4},
    {track_id:12 , playlist_id: 9, order: 5},
    {track_id:14 , playlist_id: 9, order: 6},
    {track_id:16 , playlist_id: 9, order: 7},
    {track_id:18 , playlist_id: 9, order: 8},


    {track_id:5 , playlist_id: 10, order: 1},
    {track_id:7 , playlist_id: 10, order: 2},
    {track_id:9 , playlist_id: 10, order: 3},
    {track_id:11 , playlist_id: 10, order: 4},
    {track_id:13 , playlist_id: 10, order: 5},
    {track_id:15 , playlist_id: 10, order: 6},
    {track_id:17 , playlist_id: 10, order: 7},
    {track_id:19 , playlist_id: 10, order: 8},

    {track_id:6 , playlist_id: 10, order: 1},
    {track_id:8 , playlist_id: 10, order: 2},
    {track_id:10 , playlist_id: 10, order: 3},
    {track_id:12 , playlist_id: 10, order: 4},
    {track_id:14 , playlist_id: 10, order: 5},
    {track_id:16 , playlist_id: 10, order: 6},
    {track_id:18 , playlist_id: 10, order: 7},
    {track_id:20 , playlist_id: 10, order: 8},

    {track_id:7 , playlist_id: 11, order: 1},
    {track_id:9 , playlist_id: 11, order: 2},
    {track_id:11 , playlist_id: 11, order: 3},
    {track_id:13 , playlist_id: 11, order: 4},
    {track_id:15 , playlist_id: 11, order: 5},
    {track_id:17 , playlist_id: 11, order: 6},
    {track_id:19 , playlist_id: 11, order: 7},
    {track_id:21 , playlist_id: 11, order: 8},


    {track_id:8 , playlist_id: 12, order: 1},
    {track_id:10 , playlist_id: 12, order: 2},
    {track_id:12 , playlist_id: 12, order: 3},
    {track_id:14 , playlist_id: 12, order: 4},
    {track_id:16 , playlist_id: 12, order: 5},
    {track_id:18 , playlist_id: 12, order: 6},
    {track_id:20 , playlist_id: 12, order: 7},
    {track_id:24 , playlist_id: 12, order: 8},

    {track_id:9 , playlist_id: 14, order: 1},
    {track_id:11 , playlist_id: 14, order: 2},
    {track_id:13 , playlist_id: 14, order: 3},
    {track_id:15 , playlist_id: 14, order: 4},
    {track_id:17 , playlist_id: 14, order: 5},
    {track_id:19 , playlist_id: 14, order: 6},
    {track_id:21 , playlist_id: 14, order: 7},
    {track_id:23 , playlist_id: 14, order: 8},

    {track_id:10 , playlist_id: 15, order: 1},
    {track_id:12 , playlist_id: 15, order: 2},
    {track_id:14 , playlist_id: 15, order: 3},
    {track_id:16 , playlist_id: 15, order: 4},
    {track_id:18 , playlist_id: 15, order: 5},
    {track_id:20 , playlist_id: 15, order: 6},
    {track_id:22 , playlist_id: 15, order: 7},
    {track_id:24 , playlist_id: 15, order: 8},


    {track_id:1 , playlist_id: 16, order: 1},
    {track_id:4 , playlist_id: 16, order: 2},
    {track_id:7 , playlist_id: 16, order: 3},
    {track_id:10 , playlist_id: 16, order: 4},
    {track_id:13 , playlist_id: 16, order: 5},
    {track_id:16 , playlist_id: 16, order: 6},
    {track_id:19 , playlist_id: 16, order: 7},
    {track_id:26 , playlist_id: 16, order: 8},

    {track_id:2 , playlist_id: 17, order: 1},
    {track_id:5 , playlist_id: 17, order: 2},
    {track_id:8 , playlist_id: 17, order: 3},
    {track_id:11 , playlist_id: 17, order: 4},
    {track_id:14 , playlist_id: 17, order: 5},
    {track_id:18 , playlist_id: 17, order: 6},
    {track_id:20 , playlist_id: 17, order: 7},
    {track_id:24 , playlist_id: 17, order: 8},

    {track_id:3 , playlist_id: 18, order: 1},
    {track_id:6 , playlist_id: 18, order: 2},
    {track_id:9 , playlist_id: 18, order: 3},
    {track_id:12 , playlist_id: 18, order: 4},
    {track_id:15 , playlist_id: 18, order: 5},
    {track_id:18 , playlist_id: 18, order: 6},
    {track_id:21 , playlist_id: 18, order: 7},
    {track_id:27 , playlist_id: 18, order: 8},

    {track_id:30 , playlist_id: 19, order: 1},
    {track_id:29 , playlist_id: 19, order: 2},
    {track_id:28 , playlist_id: 19, order: 3},
    {track_id:27 , playlist_id: 19, order: 4},
    {track_id:26 , playlist_id: 19, order: 5},
    {track_id:25 , playlist_id: 19, order: 6},
    {track_id:24 , playlist_id: 19, order: 7},
    {track_id:23 , playlist_id: 19, order: 8}
    ])


    User.create([
      {username: "rynehx", password:"123456" , name: "Levon", profile_picture_url: "https://lh5.googleusercontent.com/-ZadaXoUTBfs/AAAAAAAAAAI/AAAAAAAAAGA/19US52OmBqc/photo.jpg" , city: "Calgary", state: "Alberta", country: "Canada", session_token: "dir"},
      {username: "OVO", password:"password" , name: "Drake", profile_picture_url: "https://www.morganstanley.com/assets/images/people/tiles/karlene-quigley-large.jpg" , city: "Toronto", state: "Ontario", country: "Canada", session_token: "dir"},
      {username: "TIMID_neuce", password:"password" , name: "Andy", profile_picture_url: "http://www.google.com/+/images/learnmore/getstarted/feat-profile.png" , city: "Houston", state: "Texas", country: "USA", session_token: "dir"},
      {username: "hatcher_man", password:"password" , name: "James", profile_picture_url: "https://www.cheme.cornell.edu/engineering/customcf/iws_ai_faculty_display/ai_images/ads10-profile.jpg" , city: "Austin", state: "Texas", country: "USA", session_token: "dir"},
      {username: "guest", password:"password" , name: "Guest", profile_picture_url: "http://www.outsidemediakit.com/images/cntntimgs_aud_demprofile_2015_01.jpg" , city: "San Francisco", state: "California", country: "USA", session_token: "dir"},
      {username: "dieselpwr", password:"password" , name: "Steve", profile_picture_url: "https://i.vimeocdn.com/portrait/12321126_300x300.jpg" , city: "Oakland", state: "California", country: "USA", session_token: "dir"},
      {username: "zyrtantar", password:"password" , name: "Mitch", profile_picture_url: "https://expertbeacon.com/sites/default/files/advice_for_men_on_selecting_your_online_dating_profile_photo.jpg" , city: "Los Angeles", state: "California", country: "USA", session_token: "dir"}
      ])

  # Track.create({title: "", description: "infooo",
  # image_url: "",
  # audio_url: "",
  # author_id: 1});
