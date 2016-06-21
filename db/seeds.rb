#seeds for bravaudio

profile_pic = [
    "",
    "https://s3-us-west-1.amazonaws.com/bravaudio/images/profile_pic/user1.jpg",
    "https://s3-us-west-1.amazonaws.com/bravaudio/images/profile_pic/user2.jpg",
    "https://s3-us-west-1.amazonaws.com/bravaudio/images/profile_pic/user3.jpg",
    "https://s3-us-west-1.amazonaws.com/bravaudio/images/profile_pic/user4.jpg",
    "https://s3-us-west-1.amazonaws.com/bravaudio/images/profile_pic/user5.jpg",
    "https://s3-us-west-1.amazonaws.com/bravaudio/images/profile_pic/user6.jpg",
    "https://s3-us-west-1.amazonaws.com/bravaudio/images/profile_pic/user7.jpg",
    "https://s3-us-west-1.amazonaws.com/bravaudio/images/profile_pic/user8.jpg",
    "https://s3-us-west-1.amazonaws.com/bravaudio/images/profile_pic/user9.png",
    "https://s3-us-west-1.amazonaws.com/bravaudio/images/profile_pic/user10.jpg",
    "https://s3-us-west-1.amazonaws.com/bravaudio/images/profile_pic/user11.jpg",
    "https://s3-us-west-1.amazonaws.com/bravaudio/images/profile_pic/user12.jpg",
    "https://s3-us-west-1.amazonaws.com/bravaudio/images/profile_pic/user13.jpg",
    "https://s3-us-west-1.amazonaws.com/bravaudio/images/profile_pic/user14.jpg",
    "https://s3-us-west-1.amazonaws.com/bravaudio/images/profile_pic/user15.jpg",
    "https://s3-us-west-1.amazonaws.com/bravaudio/images/profile_pic/user16.jpg",
    "https://s3-us-west-1.amazonaws.com/bravaudio/images/profile_pic/user17.png",
    "https://s3-us-west-1.amazonaws.com/bravaudio/images/profile_pic/user18.jpg",
    "https://s3-us-west-1.amazonaws.com/bravaudio/images/profile_pic/user19.jpeg",
    "https://s3-us-west-1.amazonaws.com/bravaudio/images/profile_pic/user20.jpg",
    "https://s3-us-west-1.amazonaws.com/bravaudio/images/profile_pic/user21.jpg",
  ];






User.create([
  {username: "guest", password:"password" , name: "Guest", profile_picture_url: profile_pic[1] , city: "San Francisco", state: "California", country: "USA", session_token: "dir"},
  {username: "Rynehx", password:"password" , name: "Henry Lean", profile_picture_url: profile_pic[2] , city: "Houston", state: "Texas", country: "USA", session_token: "dir"},
  {username: "Walid", password:"password" , name: "Walid Argen", profile_picture_url: profile_pic[3] , city: "Seattle", state: "Washington", country: "USA", session_token: "dir"},
  {username: "teal_leaves", password:"password" , name: "Megan S", profile_picture_url: profile_pic[4] , city: "Savannah", state: "Georgia", country: "USA", session_token: "dir"},
  {username: "sky_blue", password:"password" , name: "Brit J", profile_picture_url: profile_pic[5] , city: "Dallas", state: "Texas", country: "USA", session_token: "dir"},
  {username: "NVR_WNTER", password:"password" , name: "SARA S", profile_picture_url: profile_pic[6] , city: "Auburn", state: "Alabama", country: "USA", session_token: "dir"},
  {username: "water_flarez", password:"password" , name: "Jean T", profile_picture_url: profile_pic[7] , city: "New York City", state: "New York", country: "USA", session_token: "dir"},
  {username: "blues", password:"password" , name: "Claudia E", profile_picture_url: profile_pic[8] , city: "Singapore City", state: "Singapore", country: "Singapore", session_token: "dir"},
  {username: "Roar_YY", password:"password" , name: "Sean Live", profile_picture_url: profile_pic[9] , city: "Auckland", state: "Auckland", country: "New Zealand", session_token: "dir"},
  {username: "Limitless", password:"password" , name: "Jessica O", profile_picture_url: profile_pic[10] , city: "Pittsburgh", state: "Pennsylvania", country: "USA", session_token: "dir"},
  {username: "Limitless", password:"password" , name: "Kasper O", profile_picture_url: profile_pic[11] , city: "Pittsburgh", state: "Pennsylvania", country: "USA", session_token: "dir"},
  {username: "Beach_LIFE", password:"password" , name: "Tim Brown", profile_picture_url: profile_pic[12] , city: "Austin", state: "Texas", country: "USA", session_token: "dir"},
  {username: "MountainMan", password:"password" , name: "James Hatcher", profile_picture_url: profile_pic[13] , city: "Austin", state: "Texas", country: "USA", session_token: "dir"},
  {username: "ICE_ICE_BBY", password:"password" , name: "Ice Cool", profile_picture_url: profile_pic[14] , city: "London", state: "England", country: "UK", session_token: "dir"},
  {username: "DJ Sona", password:"password" , name: "Sona Sound", profile_picture_url: profile_pic[15] , city: "Las Vegas", state: "Nevada", country: "USA", session_token: "dir"},
  {username: "TYTX", password:"password" , name: "Jennier I", profile_picture_url: profile_pic[16] , city: "Litte Rock", state: "Arkansas", country: "USA", session_token: "dir"},
  {username: "Shadow_Boxer", password:"password" , name: "Raymond C", profile_picture_url: profile_pic[17] , city: "Litte Rock", state: "Arkansas", country: "USA", session_token: "dir"},
  {username: "JamesH", password:"password" , name: "James Harden", profile_picture_url: profile_pic[18] , city: "San Diego", state: "California", country: "USA", session_token: "dir"},
  {username: "OVO", password:"password" , name: "Drizzy B", profile_picture_url: profile_pic[19] , city: "Toronto", state: "Ontario", country: "Canada", session_token: "dir"},
  {username: "EDCC", password:"password" , name: "Bun B", profile_picture_url: profile_pic[20] , city: "Los Angeles", state: "California", country: "USA", session_token: "dir"},
  {username: "ACER", password:"password" , name: "Quinn D", profile_picture_url: profile_pic[21] , city: "Los Angeles", state: "California", country: "USA", session_token: "dir"},
  ])







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


###############

Track.create({title: "Gary Moore - Still Got The Blues", description: "Listen to the blues",
image_url: "https://s3-us-west-1.amazonaws.com/bravaudio/images/track/Stillgottheblues.jpg",
audio_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/top100/001.+Gary+Moore+-+Still+Got+The+Blues.mp3",
author_id: 10});

Track.create({title: "Toni Braxton - Un-Break My Heart", description: "Un-break my Heart =(",
image_url: "https://s3-us-west-1.amazonaws.com/bravaudio/images/track/ToniBraxtonUnBreakMyHeartCDSingleCover.jpg",
audio_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/top100/002.+Toni+Braxton+-+Un-Break+My+Heart.mp3",
author_id: 11});

Track.create({title: "Marlon Roudette - New Age", description: "Welcome to the New Age",
image_url: "https://s3-us-west-1.amazonaws.com/bravaudio/images/track/NewAg72dpi_380_380_s_cy_100_sha.jpg",
audio_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/top100/003.+Marlon+Roudette+-+New+Age.mp3",
author_id: 12});


Track.create({title: "David Usher - Black Black Heart", description: "new single BBH",
image_url: "https://s3-us-west-1.amazonaws.com/bravaudio/images/track/black+black+heart.jpg",
audio_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/top100/004.+David+Usher+-+Black+Black+Heart.mp3",
author_id: 13});

Track.create({title: "George Benson - Nothing's Gonna Change My Love For You", description: "<3",
image_url: "https://s3-us-west-1.amazonaws.com/bravaudio/images/track/georgeBenson_myloveforyou.jpg",
audio_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/top100/005.+George+Benson+-+Nothing%27s+Gonna+Change+My+Love+For+You.mp3",
author_id: 13});

Track.create({title: "Lionel Richie - How Long", description: "too long, too long",
image_url: "https://s3-us-west-1.amazonaws.com/bravaudio/images/track/lionel-howlong.jpg",
audio_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/top100/006.+Lionel+Richie+-+How+Long.mp3",
author_id: 13});


Track.create({title: "Whitney Houston - Saving All My Love For You", description: "all for you",
image_url: "https://s3-us-west-1.amazonaws.com/bravaudio/images/track/Whitney-Houston-Saving-All-My-Love-For-You-single-cover-500x489.jpg",
audio_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/top100/007.+Whitney+Houston+-+Saving+All+My+Love+For+You.mp3",
author_id: 13});

Track.create({title: "Lara Fabian - Je T'aime", description: "I love you",
image_url: "https://s3-us-west-1.amazonaws.com/bravaudio/images/track/lara_fabian1.jpg",
audio_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/top100/008.+Lara+Fabian+-+Je+T%27aime.mp3",
author_id: 13});


Track.create({title: "ATB - Missing", description: "lost then found",
image_url: "https://s3-us-west-1.amazonaws.com/bravaudio/images/track/missingATB.jpeg",
audio_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/top100/009.+ATB+-+Missing.mp3",
author_id: 13});


Track.create({title: "Backstreet Boys - Show Me The Meaning Of Being Lonely", description: "SHOW ME",
image_url: "https://s3-us-west-1.amazonaws.com/bravaudio/images/track/BSB_ShowMeTheMeaning.jpg",
audio_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/top100/010.+Backstreet+Boys+-+Show+Me+The+Meaning+Of+Being+Lonely.mp3",
author_id: 14});


Track.create({title: "Linkin Park - What I've Done", description: "what I've done!",
image_url: "https://s3-us-west-1.amazonaws.com/bravaudio/images/track/linkinpark.jpg",
audio_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/top100/011.+Linkin+Park+-+What+I%27ve+Done.mp3",
author_id: 14});


Track.create({title: "Sting - Shape Of My Heart", description: "heart shaped",
image_url: "https://s3-us-west-1.amazonaws.com/bravaudio/images/track/Fields-of-gold-sting.jpg",
audio_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/top100/012.+Sting+-+Shape+Of+My+Heart.mp3",
author_id: 14});

Track.create({title: "Toni Braxton - Spanish Guitar", description: "guitarrrr",
image_url: "https://s3-us-west-1.amazonaws.com/bravaudio/images/track/ToniBraxtonUnBreakMyHeartCDSingleCover.jpg",
audio_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/top100/013.+Toni+Braxton+-+Spanish+Guitar.mp3",
author_id: 16});

Track.create({title: "Britney Spears - Born To Make You Happy", description: "be happy",
image_url: "https://s3-us-west-1.amazonaws.com/bravaudio/images/track/Born_to_Make_You_Happy.png",
audio_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/top100/014.+Britney+Spears+-+Born+To+Make+You+Happy.mp3",
author_id: 16});


Track.create({title: "Metallica - The Unforgiven", description: "one",
image_url: "https://s3-us-west-1.amazonaws.com/bravaudio/images/track/metallica.jpg",
audio_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/top100/021.+Metallica+-+The+Unforgiven.mp3",
author_id: 16});

Track.create({title: "Sia - Chandelier", description: "SWING",
image_url: "https://s3-us-west-1.amazonaws.com/bravaudio/images/track/sia.jpg",
audio_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/top100/039.+Sia+-+Chandelier+Piano+Version.mp3",
author_id: 16});

Track.create({title: "Lana Del Rey - Young And Beautiful", description: "orchestra version",
image_url: "https://s3-us-west-1.amazonaws.com/bravaudio/images/track/BornToDieAlbumCover.png",
audio_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/top100/070.+Lana+Del+Rey+-+Young+And+BeautifulDHOrchestralVersion.mp3",
author_id: 19});

Track.create({title: "Madonna - Take A Bow", description: "take a bow",
image_url: "https://s3-us-west-1.amazonaws.com/bravaudio/images/track/Madonna%2C_debut_album_cover.png",
audio_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/top100/097.+Madonna+-+Take+A+Bow.mp3",
author_id: 18});

Track.create({title: "Red Hot Chili Peppers - Californication", description: "Californication!",
image_url: "https://s3-us-west-1.amazonaws.com/bravaudio/images/track/RedHotChiliPeppersCalifornication.jpg",
audio_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/top100/081.+Red+Hot+Chili+Peppers+-+Californication.mp3",
author_id: 18});




#strokes - Angeles
Track.create({title: "The Strokes - Machu Picchu", description: "mountain to claim",
image_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/2011+-+Angles/Cover.jpg",
audio_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/2011+-+Angles/01+-+Machu+Picchu.mp3",
author_id: 18});

Track.create({title: "The Strokes - Under Cover of Darkness", description: "Track 2 of angles",
image_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/2011+-+Angles/Cover.jpg",
audio_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/2011+-+Angles/02+-+Under+Cover+Of+Darkness.mp3",
author_id: 18});


Track.create({title: "The Strokes - Two Kinds of Happiness", description: "Track 3 of angles",
image_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/2011+-+Angles/Cover.jpg",
audio_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/2011+-+Angles/03+-+Two+Kinds+Of+Happiness.mp3",
author_id: 18});

Track.create({title: "The Strokes - Your're So Right", description: "Track 4 of angles",
image_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/2011+-+Angles/Cover.jpg",
audio_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/2011+-+Angles/04+-+You%27re+So+Right.mp3",
author_id: 18});


Track.create({title: "The Strokes - Taken For A Fool", description: "Track 5 of angles",
image_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/2011+-+Angles/Cover.jpg",
audio_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/2011+-+Angles/05+-+Taken+For+A+Fool.mp3",
author_id: 18});

Track.create({title: "The Strokes - Games", description: "Track 6 of angles",
image_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/2011+-+Angles/Cover.jpg",
audio_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/2011+-+Angles/06+-+Games.mp3",
author_id: 18});

Track.create({title: "The Strokes - Call Me Back", description: "Track 7 of angles",
image_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/2011+-+Angles/Cover.jpg",
audio_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/2011+-+Angles/07+-+Call+Me+Back.mp3",
author_id: 18});

Track.create({title: "The Strokes - Gratisfaction", description: "Track 8 of angles",
image_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/2011+-+Angles/Cover.jpg",
audio_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/2011+-+Angles/08+-+Gratisfaction.mp3",
author_id: 18});

Track.create({title: "The Strokes - Metabolism", description: "Track 9 of angles",
image_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/2011+-+Angles/Cover.jpg",
audio_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/2011+-+Angles/09+-+Metabolism.mp3",
author_id: 18});

Track.create({title: "The Strokes - Life Is Simple In The Moonlight", description: "Track 10 of angles",
image_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/2011+-+Angles/Cover.jpg",
audio_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/2011+-+Angles/10+-+Life+Is+Simple+In+The+Moonlight.mp3",
author_id: 18});
###

Track.create({title: "The Strokes - What Ever Happened", description: "Track 1 of Room On Fire",
image_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/2003+-+Room+On+Fire/Cover.jpg",
audio_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/2003+-+Room+On+Fire/01+-+What+Ever+Happened!.mp3",
author_id: 7});


Track.create({title: "The Strokes - Reptilla", description: "Track 2 of Room On Fire",
image_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/2003+-+Room+On+Fire/Cover.jpg",
audio_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/2003+-+Room+On+Fire/02+-+Reptilia.mp3",
author_id: 7});

Track.create({title: "The Strokes - Automatic Stop", description: "Track 3 of Room On Fire",
image_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/2003+-+Room+On+Fire/Cover.jpg",
audio_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/2003+-+Room+On+Fire/03+-+Automatic+Stop.mp3",
author_id: 7});

Track.create({title: "The Strokes - 12-51", description: "Track 4 of Room On Fire",
image_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/2003+-+Room+On+Fire/Cover.jpg",
audio_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/2003+-+Room+On+Fire/04+-+12-51.mp3",
author_id: 7});

Track.create({title: "The Strokes - You Talk Way Too Much", description: "Track 5 of Room On Fire",
image_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/2003+-+Room+On+Fire/Cover.jpg",
audio_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/2003+-+Room+On+Fire/05+-+You+Talk+Way+Too+Much.mp3",
author_id: 7});

Track.create({title: "The Strokes - Between Love and Hate", description: "Track 6 of Room On Fire",
image_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/2003+-+Room+On+Fire/Cover.jpg",
audio_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/2003+-+Room+On+Fire/06+-+Between+Love+%26+Hate.mp3",
author_id: 7});

Track.create({title: "The Strokes - Meet Me In The Bathroom", description: "Track 7 of Room On Fire",
image_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/2003+-+Room+On+Fire/Cover.jpg",
audio_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/2003+-+Room+On+Fire/07+-+Meet+Me+In+The+Bathroom.mp3",
author_id: 7});

Track.create({title: "The Strokes - Under Control", description: "Track 8 of Room On Fire",
image_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/2003+-+Room+On+Fire/Cover.jpg",
audio_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/2003+-+Room+On+Fire/08+-+Under+Control.mp3",
author_id: 7});

Track.create({title: "The Strokes - The Way It Is", description: "Track 9 of Room On Fire",
image_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/2003+-+Room+On+Fire/Cover.jpg",
audio_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/2003+-+Room+On+Fire/09+-+The+Way+It+Is.mp3",
author_id: 7});

##the weekend
Track.create({title: "The Weekend - Real Life", description: "Track 1 of Method Behind The Madness",
image_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/The+Weeknd+-+Beauty+Behind+the+Madness/a75b689c.jpg",
audio_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/The+Weeknd+-+Beauty+Behind+the+Madness/01+Real+Life.mp3",
author_id: 7});

Track.create({title: "The Weekend - Losers", description: "Track 2 of Method Behind The Madness",
image_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/The+Weeknd+-+Beauty+Behind+the+Madness/a75b689c.jpg",
audio_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/The+Weeknd+-+Beauty+Behind+the+Madness/02+Losers+(feat.+Labrinth).mp3",
author_id: 7});

Track.create({title: "The Weekend - Tell Your Friends", description: "Track 3 of Method Behind The Madness",
image_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/The+Weeknd+-+Beauty+Behind+the+Madness/a75b689c.jpg",
audio_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/The+Weeknd+-+Beauty+Behind+the+Madness/03+Tell+Your+Friends.mp3",
author_id: 7});

Track.create({title: "The Weekend - Often", description: "Track 4 of Method Behind The Madness",
image_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/The+Weeknd+-+Beauty+Behind+the+Madness/a75b689c.jpg",
audio_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/The+Weeknd+-+Beauty+Behind+the+Madness/04+Often.mp3",
author_id: 7});

Track.create({title: "The Weekend - The Hills", description: "Track 5 of Method Behind The Madness",
image_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/The+Weeknd+-+Beauty+Behind+the+Madness/a75b689c.jpg",
audio_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/The+Weeknd+-+Beauty+Behind+the+Madness/05+The+Hills.mp3",
author_id: 7});

Track.create({title: "The Weekend - Acquainted", description: "Track 6 of Method Behind The Madness",
image_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/The+Weeknd+-+Beauty+Behind+the+Madness/a75b689c.jpg",
audio_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/The+Weeknd+-+Beauty+Behind+the+Madness/06+Acquainted.mp3",
author_id: 7});


Track.create({title: "The Weekend - I Can't Feel My Face", description: "Track 7 of Method Behind The Madness",
image_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/The+Weeknd+-+Beauty+Behind+the+Madness/a75b689c.jpg",
audio_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/The+Weeknd+-+Beauty+Behind+the+Madness/07+Can%27t+Feel+My+Face.mp3",
author_id: 7});


##views
Track.create({title: "Drake - Feel No Way", description: "Track from Album Views",
image_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/Views/Drakeviewsfromthe6.jpg",
audio_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/Views/04+Feel+No+Ways.m4a",
author_id: 7});

Track.create({title: "Drake - Controlla", description: "Track from Album Views",
image_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/Views/Drakeviewsfromthe6.jpg",
audio_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/Views/11+Controlla.m4a",
author_id: 7});

Track.create({title: "Drake - One Dance", description: "Track from Album Views",
image_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/Views/Drakeviewsfromthe6.jpg",
audio_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/Views/12+One+Dance+(feat.+Wizkid+%26+Kyla).m4a",
author_id: 7});

Track.create({title: "Drake - Pop Style", description: "Track from Album Views",
image_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/Views/Drakeviewsfromthe6.jpg",
audio_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/Views/15+Pop+Style.m4a",
author_id: 7});

Track.create({title: "Drake - Too Good", description: "Track from Album Views",
image_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/Views/Drakeviewsfromthe6.jpg",
audio_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/Views/16+Too+Good+(feat.+Rihanna).m4a",
author_id: 7});

Track.create({title: "Drake - With You", description: "Track from Album Views",
image_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/Views/Drakeviewsfromthe6.jpg",
audio_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/Views/08+With+You+(feat.+PARTYNEXTDOOR).m4a",
author_id: 7});

Track.create({title: "Drake - Hotline Bling", description: "You use to call me on my cellphone",
image_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/singles/hotlinebling.jpg",
audio_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/singles/01+Hotline+Bling.m4a",
author_id: 7});
##
Track.create({title: "Kanye - Famous", description: "Track from Life of Pablo",
image_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/LOP/1035x1035-8c74ca69.jpeg",
audio_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/LOP/Famous.mp3",
author_id: 7});

Track.create({title: "Kanye - FeedBack", description: "Track from Life of Pablo",
image_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/LOP/1035x1035-8c74ca69.jpeg",
audio_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/LOP/Feedback.mp3",
author_id: 7});

Track.create({title: "Kanye - Highlights", description: "Track from Life of Pablo",
image_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/LOP/1035x1035-8c74ca69.jpeg",
audio_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/LOP/Highlights.mp3",
author_id: 7});

Track.create({title: "Kanye - I Love Kanye", description: "Track from Life of Pablo",
image_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/LOP/1035x1035-8c74ca69.jpeg",
audio_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/LOP/I+Love+Kanye.mp3",
author_id: 7});

Track.create({title: "Kanye - Ultralight Beam", description: "Track from Life of Pablo",
image_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/LOP/1035x1035-8c74ca69.jpeg",
audio_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/LOP/Ultralight+Beam.mp3",
author_id: 7});

Track.create({title: "Kanye - Wolves", description: "Track from Life of Pablo",
image_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/LOP/1035x1035-8c74ca69.jpeg",
audio_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/LOP/Wolves.mp3",
author_id: 7});

#Pure heroine

Track.create({title: "Lorde - 400 LUX", description: "Track from Pure Heroine",
image_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/pure+heroine/LORDE-PURE-HEROINE.jpg",
audio_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/pure+heroine/400+Lux.mp3",
author_id: 7});

Track.create({title: "Lorde - A World Alone", description: "Track from Pure Heroine",
image_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/pure+heroine/LORDE-PURE-HEROINE.jpg",
audio_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/pure+heroine/A+World+Alone.mp3",
author_id: 7});

Track.create({title: "Lorde - Bravaudio", description: "Track from Pure Heroine",
image_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/pure+heroine/LORDE-PURE-HEROINE.jpg",
audio_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/pure+heroine/Bravado.mp3",
author_id: 7});


Track.create({title: "Lorde - Royal", description: "Track from Pure Heroine",
image_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/pure+heroine/LORDE-PURE-HEROINE.jpg",
audio_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/pure+heroine/Royals.mp3",
author_id: 7});



Track.create({title: "Lorde - Team", description: "Track from Pure Heroine",
image_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/pure+heroine/LORDE-PURE-HEROINE.jpg",
audio_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/pure+heroine/Team.mp3",
author_id: 7});


Track.create({title: "Lorde - Tennis Court", description: "Track from Pure Heroine",
image_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/pure+heroine/LORDE-PURE-HEROINE.jpg",
audio_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/pure+heroine/Tennis+Court.mp3",
author_id: 7});

#graduation
Track.create({title: "Kanye - Flashing Lights", description: "Track from Graduation",
image_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/graduation/afa9da9d.jpg",
audio_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/graduation/Flashing+Lights.m4a",
author_id: 7});

Track.create({title: "Kanye - Good Life", description: "Track from Graduation",
image_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/graduation/afa9da9d.jpg",
audio_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/graduation/Good+Life.m4a",
author_id: 7});

Track.create({title: "Kanye - Homecoming", description: "Track from Graduation",
image_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/graduation/afa9da9d.jpg",
audio_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/graduation/Homecoming.m4a",
author_id: 7});

Track.create({title: "Kanye - I Wonder", description: "Track from Graduation",
image_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/graduation/afa9da9d.jpg",
audio_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/graduation/I+Wonder.m4a",
author_id: 7});

Track.create({title: "Kanye - Stronger", description: "Track from Graduation",
image_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/graduation/afa9da9d.jpg",
audio_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/graduation/Stronger.m4a",
author_id: 7});

##
# Track.create({title: "Drake - Crew Love", description: "Track from Take Care",
# image_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/take+care/90efbd9ee9091147cdd46cb6b5f55e64.600x600x1.jpg",
# audio_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/take+care/Crew+Love.flac",
# author_id: 7});
#
# Track.create({title: "Drake - Headlines", description: "Track from Take Care",
# image_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/take+care/90efbd9ee9091147cdd46cb6b5f55e64.600x600x1.jpg",
# audio_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/take+care/Headlines.flac",
# author_id: 7});
#
# Track.create({title: "Drake - Over My Dead Body", description: "Track from Take Care",
# image_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/take+care/90efbd9ee9091147cdd46cb6b5f55e64.600x600x1.jpg",
# audio_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/take+care/Over+My+Dead+Body.flac",
# author_id: 7});
#
# Track.create({title: "Drake - Take Care", description: "Track from Take Care",
# image_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/take+care/90efbd9ee9091147cdd46cb6b5f55e64.600x600x1.jpg",
# audio_url: "https://s3-us-west-1.amazonaws.com/bravaudio/audio/take+care/Take+Care.flac",
# author_id: 7});
