var gameState = "start";
//images and animations
var bg2_Img;
var door_Img;
var thiefImg;
var thiefAttack_Img;
var thiefDead_Img;
var thiefIdle_Img;
var thiefthrow_Img;
var thiefGlide_Img;
var thiefSlide_Img;
var thiefJump_Img;
var thiefJumpAttack_Img;
var thiefAttack_Img;
var thiefClimb_Img;
var princess_Img;
var player_Img;
var playerWalk_Img;
var playerJumpAttack_Img;
var playerJump_Img;
var playerIdle_Img;
var playerleftWalk_Img;
var crate_img;
var TombStone2_img;
var Tree_img;
var Skeleton_img;
var deadBush_Img
var bush1_img;
var bush2_img;
var arrow_Img;
var Sign_Img;
var cavebg_Img;
var tile1_Img;
var tile2_Img;
var tile3_Img;
var tile4_Img;
var tile5_Img;
var tile6_Img;
var tile7_Img
var tile8_Img
var tile9_Img
var tile10_Img
var tile11_Img
var tile12_Img
var knife_Img;
//over images and animations

var stand1P;
var stand2P;
var stand3P;
var stand4P;
var stand5P;
var stand6P;

var stand1P2;
var stand2P2;
var stand3P2;
var stand4P2;
var stand5P2;
var stand6P2;
var stand7P2;
var stand8P2;
var stand9P2;
var stand10P2;
var stand11P2;
var stand12P2;
var stand13P2;
var stand14P2;
var stand15P2;
var stand16P2;

var stand1P3;
var stand2P3
var stand3P3
var stand4P3

var stand1P4
var stand2P4
var stand3P4

var stand1P5
var stand2P5
var stand3P5
var stand4P5
var stand5P5
var tomb1;
var tomb2;
var tomb3;
var tomb4;
var crate1;
var player;
var thief1;
var thief2;
var inv1T;
var inv2T;
var inv3T;
var inv4T;
//for creating arrows
var lives = 3;
var arrow
var kunaiCount = 3;
var arrowGr;
var thornGr;
var no1 = 3;
var count1 = 0;
var count11 = 0;
var no2 = 4;
var count2 = 0;
var count22 = 0;
var playerIdle2_Img;
var thorn;
playerC = 0;
var door;
// options 
var opt1;
var opt2;
var opt3;
var opt4;
var gameState2 = "q"
function preload() {
  //playing and non - playing characters of the game
  player_Img = loadAnimation("player_images/png/Run (1).png", "player_images/png/Run (2).png", "player_images/png/Run (3).png", "player_images/png/Run (4).png", "player_images/png/Run (5).png", "player_images/png/Run (6).png", "player_images/png/Run (7).png", "player_images/png/Run (8).png", "player_images/png/Run (9).png")
  playerWalk_Img = loadAnimation("player_images/png/Walk (1).png", "player_images/png/Walk (2).png", "player_images/png/Walk (3).png", "player_images/png/Walk (4).png", "player_images/png/Walk (5).png", "player_images/png/Walk (6).png", "player_images/png/Walk (7).png", "player_images/png/Walk (8).png", "player_images/png/Walk (9).png", "player_images/png/Walk (10).png")
  playerleftWalk_Img = loadAnimation("player_images/png/image.png", "player_images/png/image (1).png", "player_images/png/image (2).png", "player_images/png/image (3).png", "player_images/png/image (4).png", "player_images/png/image (5).png", "player_images/png/image (6).png", "player_images/png/image (7).png", "player_images/png/image (8).png", "player_images/png/image (9).png")
  playerJumpAttack_Img = loadAnimation("player_images/png/JumpAttack (1).png", "player_images/png/JumpAttack (2).png", "player_images/png/JumpAttack (3).png", "player_images/png/JumpAttack (4).png", "player_images/png/JumpAttack (5).png", "player_images/png/JumpAttack (6).png", "player_images/png/JumpAttack (7).png", "player_images/png/JumpAttack (8).png", "player_images/png/JumpAttack (9).png")
  playerJump_Img = loadAnimation("player_images/png/Jump (1).png", "player_images/png/Jump (2).png", "player_images/png/Jump (3).png", "player_images/png/Jump (4).png", "player_images/png/Jump (5).png", "player_images/png/Jump (6).png", "player_images/png/Jump (7).png", "player_images/png/Jump (8).png", "player_images/png/Jump (9).png")
  playerIdle_Img = loadAnimation("player_images/png/Idle (1).png", "player_images/png/Idle (2).png", "player_images/png/Idle (3).png", "player_images/png/Idle (4).png", "player_images/png/Idle (5).png", "player_images/png/Idle (6).png", "player_images/png/Idle (7).png", "player_images/png/Idle (8).png", "player_images/png/Idle (9).png")
  playerIdle2_Img = loadAnimation("player_images/png/Dead (1).png", "player_images/png/Dead (2).png", "player_images/png/Dead (3).png", "player_images/png/Dead (4).png", "player_images/png/Dead (5).png", "player_images/png/Dead (6).png", "player_images/png/Dead (7).png", "player_images/png/Dead (8).png", "player_images/png/Dead (9).png", "player_images/png/Dead (10).png", "player_images/png/Dead (10).png", "player_images/png/Dead (10).png", "player_images/png/Dead (10).png", "player_images/png/Dead (10).png")
  playerDead_Img = loadAnimation("player_images/Dead__000.png", "player_images/Dead__001.png", "player_images/Dead__002.png", "player_images/Dead__003.png", "player_images/Dead__004.png", "player_images/Dead__005.png", "player_images/Dead__006.png", "player_images/Dead__007.png", "player_images/Dead__008.png", "player_images/Dead__009.png")
  playerRun_Img = loadAnimation("player_images/Run__000.png", "player_images/Run__001.png", "player_images/Run__002.png", "player_images/Run__002.png", "player_images/Run__003.png", "player_images/Run__004.png", "player_images/Run__005.png", "player_images/Run__006.png", "player_images/Run__007.png", "player_images/Run__008.png", "player_images/Run__009.png")
  playerAttack_Img = loadAnimation("player_images/Attack__000.png", "player_images/Attack__001.png", "player_images/Attack__002.png", "player_images/Attack__003.png", "player_images/Attack__004.png", "player_images/Attack__005.png", "player_images/Attack__006.png", "player_images/Attack__007.png", "player_images/Attack__008.png", "player_images/Attack__009.png")
  thiefImg = loadAnimation("thief_Images/Run__000.png", "thief_Images/Run__001.png", "thief_Images/Run__002.png", "thief_Images/Run__003.png", "thief_Images/Run__004.png", "thief_Images/Run__005.png", "thief_Images/Run__006.png", "thief_Images/Run__007.png", "thief_Images/Run__008.png", "thief_Images/Run__009.png")
  thiefAttack_Img = loadAnimation("thief_Images/Attack__000.png", "thief_Images/Attack__001.png", "thief_Images/Attack__002.png", "thief_Images/Attack__003.png", "thief_Images/Attack__004.png", "thief_Images/Attack__005.png", "thief_Images/Attack__006.png", "thief_Images/Attack__007.png", "thief_Images/Attack__008.png", "thief_Images/Attack__009.png")
  thiefDead_Img = loadAnimation("thief_Images/Dead__000.png", "thief_Images/Dead__001.png", "thief_Images/Dead__002.png", "thief_Images/Dead__003.png", "thief_Images/Dead__004.png", "thief_Images/Dead__005.png", "thief_Images/Dead__006.png", "thief_Images/Dead__007.png", "thief_Images/Dead__008.png", "thief_Images/Dead__009.png", "thief_Images/Dead__009.png", "thief_Images/Dead__009.png", "thief_Images/Dead__009.png", "thief_Images/Dead__009.png", "thief_Images/Dead__009.png", "thief_Images/Dead__009.png", "thief_Images/Dead__009.png", "thief_Images/Dead__009.png", "thief_Images/Dead__009.png", "thief_Images/Dead__009.png", "thief_Images/Dead__009.png", "thief_Images/Dead__009.png", "thief_Images/Dead__009.png", "thief_Images/Dead__009.png", "thief_Images/Dead__009.png", "thief_Images/Dead__009.png", "thief_Images/Dead__009.png", "thief_Images/Dead__009.png", "thief_Images/Dead__009.png", "thief_Images/Dead__009.png", "thief_Images/Dead__009.png", "thief_Images/Dead__009.png", "thief_Images/Dead__009.png")
  thiefIdle_Img = loadAnimation("thief_Images/idle__000.png", "thief_Images/idle__001.png", "thief_Images/idle__002.png", "thief_Images/idle__003.png", "thief_Images/idle__004.png", "thief_Images/idle__005.png", "thief_Images/idle__006.png", "thief_Images/idle__007.png", "thief_Images/idle__008.png", "thief_Images/idle__009.png")
  thiefthrow_Img = loadAnimation("thief_Images/Throw__000.png", "thief_Images/Throw__001.png", "thief_Images/Throw__002.png", "thief_Images/Throw__003.png", "thief_Images/Throw__004.png", "thief_Images/Throw__005.png", "thief_Images/Throw__006.png", "thief_Images/Throw__007.png", "thief_Images/Throw__008.png", "thief_Images/Throw__009.png")
  thiefGlide_Img = loadAnimation("thief_Images/Glide_000.png", "thief_Images/Glide_001.png", "thief_Images/Glide_002.png", "thief_Images/Glide_003.png", "thief_Images/Glide_004.png", "thief_Images/Glide_005.png", "thief_Images/Glide_006.png", "thief_Images/Glide_007.png", "thief_Images/Glide_008.png", "thief_Images/Glide_009.png")
  thiefSlide_Img = loadAnimation("thief_Images/Slide__000.png", "thief_Images/Slide__001.png", "thief_Images/Slide__002.png", "thief_Images/Slide__003.png", "thief_Images/Slide__004.png", "thief_Images/Slide__005.png", "thief_Images/Slide__006.png", "thief_Images/Slide__007.png", "thief_Images/Slide__008.png", "thief_Images/Slide__009.png")
  thiefJump_Img = loadAnimation("thief_Images/Jump__000.png", "thief_Images/Jump__001.png", "thief_Images/Jump__002.png", "thief_Images/Jump__003.png", "thief_Images/Jump__004.png", "thief_Images/Jump__005.png", "thief_Images/Jump__006.png", "thief_Images/Jump__007.png", "thief_Images/Jump__008.png", "thief_Images/Jump__009.png")
  thiefJumpAttack_Img = loadAnimation("thief_Images/Jump_Attack__000.png", "thief_Images/Jump_Attack__001.png", "thief_Images/Jump_Attack__002.png", "thief_Images/Jump_Attack__003.png", "thief_Images/Jump_Attack__004.png", "thief_Images/Jump_Attack__005.png", "thief_Images/Jump_Attack__006.png", "thief_Images/Jump_Attack__007.png", "thief_Images/Jump_Attack__008.png", "thief_Images/Jump_Attack__009.png")
  thiefAttack_Img = loadAnimation("thief_Images/Attack__000.png", "thief_Images/Attack__001.png", "thief_Images/Attack__002.png", "thief_Images/Attack__003.png", "thief_Images/Attack__004.png", "thief_Images/Attack__005.png", "thief_Images/Attack__006.png", "thief_Images/Attack__007.png", "thief_Images/Attack__008.png", "thief_Images/Attack__009.png")
  thiefClimb_Img = loadAnimation("thief_Images/Climb_000.png", "thief_Images/Climb_001.png", "thief_Images/Climb_002.png", "thief_Images/Climb_003.png", "thief_Images/Climb_004.png", "thief_Images/Climb_005.png", "thief_Images/Climb_006.png", "thief_Images/Climb_007.png", "thief_Images/Climb_008.png", "thief_Images/Climb_009.png")

  princess_Img = loadAnimation("princess/tile008.png", "princess/tile007.png", "princess/tile006.png", "princess/tile005.png", "princess/tile010.png", "princess/tile011.png", "princess/tile012.png", "princess/tile013.png")
  //objects of the game
  crate_img = loadImage("bg_Images/Objects/Crate.png")
  TombStone_img = loadImage("bg_Images/Objects/TombStone (1).png")
  TombStone2_img = loadImage("bg_Images/Objects/TombStone (2).png")
  Tree_img = loadImage("bg_Images/Objects/Tree.png")
  Skeleton_img = loadImage("bg_Images/Objects/Skeleton.png")
  deadBush_Img = loadImage("bg_Images/Objects/DeadBush.png")
  bush1_img = loadImage("bg_Images/Objects/Bush (1).png")
  bush2_img = loadImage("bg_Images/Objects/Bush (2).png")
  arrow_Img = loadImage("bg_Images/Objects/ArrowSign.png")
  Sign_Img = loadImage("bg_Images/Objects/Sign.png")
  tile1_Img = loadImage("bg_Images/Objects/Tile (1).png")
  tile2_Img = loadImage("bg_Images/Objects/Tile (2).png")
  tile3_Img = loadImage("bg_Images/Objects/Tile (3).png")
  tile4_Img = loadImage("bg_Images/Objects/Tile (4).png")
  tile5_Img = loadImage("bg_Images/Objects/Tile (5).png")
  tile6_Img = loadImage("bg_Images/Objects/Tile (6).png")
  tile7_Img = loadImage("bg_Images/Objects/Tile (7).png")
  tile8_Img = loadImage("bg_Images/Objects/Tile (8).png")
  tile9_Img = loadImage("bg_Images/Objects/Tile (9).png")
  tile10_Img = loadImage("bg_Images/Objects/Tile (10).png")
  tile11_Img = loadImage("bg_Images/Objects/Tile (11).png")
  tile12_Img = loadImage("bg_Images/Objects/Tile (12).png")
  tile13_Img = loadImage("bg_Images/Objects/Tile (13).png")
  tile14_Img = loadImage("bg_Images/Objects/Tile (14).png")
  tile15_Img = loadImage("bg_Images/Objects/Tile (15).png")
  tile16_Img = loadImage("bg_Images/Objects/Tile (16).png")
  kunai_Img = loadImage("thief_Images/Kunai.png")
  knife_Img = loadImage("img.png")
  door_Img = loadImage("door1.png")
  //backgrounds
  cavebg_Img = loadImage("bg_Images/png/BG.png")
  bg2_Img = loadImage("bg3/BG.png")
}
function setup() {
  createCanvas(displayWidth - 5, displayHeight - 5)
  player = createSprite(20, 530)
  player.addAnimation("playerImage", thiefIdle_Img)
  player.addAnimation("player2_ani", thiefImg)
  player.addAnimation("thiefattack", thiefAttack_Img)
  player.addAnimation("thiefthrow", thiefthrow_Img)
  player.addAnimation("thdead", playerIdle2_Img)
  player.scale = 0.2;

  // thief1 cordinates
  thief1 = createSprite(411, 585)
  thief1.addAnimation("thiefleftwalk", playerleftWalk_Img)
  thief1.addAnimation("thiefrightwalk", player_Img)
  thief1.addAnimation("thiefattack", playerJumpAttack_Img)
  thief1.addAnimation("thiefrun", player_Img)
  thief1.addAnimation("thieftand", playerIdle_Img)
  thief1.addAnimation("dead", playerIdle2_Img)

  thief1.scale = 0.17
  thief1.velocityX = 3;
  inv1T = createSprite(380, 500, 10, 400)
  inv1T.visible = false;
  inv4T = createSprite(700, 500, 10, 400)
  inv4T.visible = false;

  // thief2 cordinates
  thief2 = createSprite(400, 250)
  thief2.addAnimation("thiefleftwalk", playerleftWalk_Img)
  thief2.addAnimation("thiefrightwalk", player_Img)
  thief2.addAnimation("thiefattack", playerJumpAttack_Img)
  thief2.addAnimation("thiefrun", player_Img)
  thief2.addAnimation("thieftand", playerIdle_Img)
  thief2.addAnimation("dead", playerIdle2_Img)
  //thief2.setCollider("rectangle",0,0,340,600)
  thief2.scale = 0.17
  thief2.velocityX = 3;
  //thief2.debug = true;

  inv2T = createSprite(400, 100, 10, 400)
  inv2T.visible = false;
  inv3T = createSprite(750, 100, 10, 400)
  inv3T.visible = false;

  opt1 = createSprite(280, 246, 100, 100)
  opt1.visible = false;
  opt2 = createSprite(819, 246, 100, 100)
  opt2.visible = false;
  opt3 = createSprite(280, 446, 100, 100)
  opt3.visible = false;
  opt4 = createSprite(819, 446, 100, 100)
  opt4.visible = false;

  stand1P = createSprite(50, 620)
  stand1P.addImage(tile1_Img)
  stand1P.scale = 0.8;
  stand2P = createSprite(152, 620)
  stand2P.addImage(tile2_Img)
  stand2P.scale = 0.8;
  stand3P = createSprite(252, 620)
  stand3P.addImage(tile3_Img)
  stand3P.scale = 0.8;
  stand4P = createSprite(50, 720)
  stand4P.addImage(tile4_Img)
  stand4P.scale = 0.8;
  stand5P = createSprite(152, 720)
  stand5P.addImage(tile5_Img)
  stand5P.scale = 0.8;
  stand6P = createSprite(252, 720)
  stand6P.addImage(tile6_Img)
  stand6P.scale = 0.8;

  stand1P2 = createSprite(440, 700)
  stand1P2.addImage(tile1_Img)
  stand2P2 = createSprite(568, 700)
  stand2P2.addImage(tile2_Img)
  stand3P2 = createSprite(690, 700)
  stand3P2.addImage(tile7_Img)
  stand4P2 = createSprite(805, 610)
  stand4P2.addImage(tile4_Img)
  stand4P2.scale = 0.8;
  stand5P2 = createSprite(805, 510)
  stand5P2.addImage(tile1_Img)
  stand5P2.scale = 0.8;
  stand6P2 = createSprite(805, 710)
  stand6P2.addImage(tile8_Img)
  stand6P2.scale = 0.8;
  stand7P2 = createSprite(907, 510)
  stand7P2.addImage(tile2_Img)
  stand7P2.scale = 0.8;
  stand8P2 = createSprite(907, 610)
  stand8P2.addImage(tile5_Img)
  stand8P2.scale = 0.8;
  stand9P2 = createSprite(907, 710)
  stand9P2.addImage(tile5_Img)
  stand9P2.scale = 0.8;
  stand10P2 = createSprite(1009, 510)
  stand10P2.addImage(tile3_Img)
  stand10P2.scale = 0.8;
  stand11P2 = createSprite(1109, 610)
  stand11P2.addImage(tile11_Img)
  stand11P2.scale = 0.8;
  stand12P2 = createSprite(1009, 610)
  stand12P2.addImage(tile10_Img)
  stand12P2.scale = 0.8;
  stand13P2 = createSprite(1209, 610)
  stand13P2.addImage(tile3_Img)
  stand13P2.scale = 0.8;
  stand14P2 = createSprite(1209, 710)
  stand14P2.addImage(tile6_Img)
  stand14P2.scale = 0.8;
  stand15P2 = createSprite(1009, 710)
  stand15P2.addImage(tile5_Img)
  stand15P2.scale = 0.8;
  stand16P2 = createSprite(1109, 710)
  stand16P2.addImage(tile5_Img)
  stand16P2.scale = 0.8;

  stand1P3 = createSprite(420, 350)
  stand1P3.addImage(tile14_Img)
  stand1P3.scale = 0.8;
  stand1P3.setCollider("rectangle", 0, -20, 100, 60)
  stand2P3 = createSprite(620, 350)
  stand2P3.addImage(tile15_Img)
  stand2P3.scale = 0.8;
  stand2P3.setCollider("rectangle", 0, -20, 100, 60)
  stand3P3 = createSprite(720, 350)
  stand3P3.addImage(tile16_Img)
  stand3P3.scale = 0.8;
  stand3P3.setCollider("rectangle", 0, -20, 100, 60)
  stand4P3 = createSprite(520, 350)
  stand4P3.addImage(tile15_Img)
  stand4P3.scale = 0.8;
  stand4P3.setCollider("rectangle", 0, -20, 100, 60)

  stand1P4 = createSprite(30, 230)
  stand1P4.addImage(tile15_Img)
  stand1P4.scale = 0.7;
  stand2P4 = createSprite(200, 230)
  stand2P4.addImage(tile16_Img)
  stand2P4.scale = 0.7;
  stand3P4 = createSprite(120, 230)
  stand3P4.addImage(tile15_Img)
  stand3P4.scale = 0.7;

  stand1P5 = createSprite(20, 50)
  stand1P5.addImage(tile9_Img)
  stand1P5.scale = 0.8;
  stand2P5 = createSprite(120, 50)
  stand2P5.addImage(tile9_Img)
  stand2P5.scale = 0.8;
  stand3P5 = createSprite(220, 50)
  stand3P5.addImage(tile9_Img)
  stand3P5.scale = 0.8;
  stand4P5 = createSprite(320, 50)
  stand4P5.addImage(tile9_Img)
  stand4P5.scale = 0.8;
  stand5P5 = createSprite(320, 50)
  stand5P5.addImage(tile13_Img)
  stand5P5.scale = 0.8;

  stand1P6 = createSprite(1130, 230)
  stand1P6.addImage(tile1_Img)
  stand1P6.scale = 0.7;
  stand2P6 = createSprite(1220, 230)
  stand2P6.addImage(tile2_Img)
  stand2P6.scale = 0.7;
  stand3P6 = createSprite(1310, 230)
  stand3P6.addImage(tile2_Img)
  stand3P6.scale = 0.7;
  stand4P6 = createSprite(1130, 320)
  stand4P6.addImage(tile12_Img)
  stand4P6.scale = 0.7;
  stand5P6 = createSprite(1220, 320)
  stand5P6.addImage(tile9_Img)
  stand5P6.scale = 0.7;
  stand6P6 = createSprite(1310, 320)
  stand6P6.addImage(tile9_Img)
  stand6P6.scale = 0.7;

  tomb1 = createSprite(520, 610)
  tomb1.addImage(TombStone_img)
  tomb2 = createSprite(580, 600)
  tomb2.addImage(TombStone2_img)
  tomb3 = createSprite(100, 545)
  tomb3.addImage(TombStone_img)
  tomb4 = createSprite(230, 515)
  tomb4.addImage(TombStone2_img)

  crate1 = createSprite(710, 600)
  crate1.addImage(crate_img)
  crate1.scale = 0.8;

  crateA1 = createSprite(710, 600)
  push()
  tint("red")
  crateA1.addImage(kunai_Img)
  pop()
  crateA1.scale = 0.4;
  crateA1.rotation = -90;

  crate2 = createSprite(40, 145)
  crate2.addImage(crate_img)
  crate2.scale = 0.8;

  tree = createSprite(590, 205)
  tree.addImage(Tree_img)
  tree.scale = 0.8

  deadbush = createSprite(720, 270)
  deadbush.addImage(deadBush_Img)
  deadbush.scale = 0.8

  bush1 = createSprite(520, 280)
  bush1.addImage(bush2_img)
  bush1.scale = 0.8

  skeleton1 = createSprite(430, 280)
  skeleton1.addImage(Skeleton_img)
  skeleton1.scale = 0.8

  sign = createSprite(150, 145)
  sign.addImage(Sign_Img)
  sign.scale = 0.3;

  door = createSprite(1283, 121, 20, 20)
  door.addImage(door_Img)
  door.scale = 0.4

  arrowGr = createGroup();
  thornGr = createGroup();
  console.log(bush1.depth)
//2
player2 = createSprite(20, 530)
player2.addAnimation("playerImage", thiefIdle_Img)
player2.addAnimation("player2_ani", thiefImg)
player2.addAnimation("thiefattack", thiefAttack_Img)
player2.addAnimation("thiefthrow", thiefthrow_Img)
player2.addAnimation("thdead", playerIdle2_Img)
player2.scale = 0.2;
player2.visible = false;
}
function draw() {
  if (gameState === "start") {
    background("pink")
    textSize(40)
    text("Press space to play", displayWidth / 2, displayHeight / 2)
    if (keyDown("space")) {
      gameState = "play"
      thief1.x = 411;
      thief2.x = 400
    }
  }
  if (gameState === "play") {
    background(cavebg_Img)



    console.log(bush1.depth)

    player.collide(stand1P)
    player.collide(stand2P)
    player.collide(stand3P)
    player.collide(stand4P)
    player.collide(stand5P)
    player.collide(stand6P)
    player.collide(stand1P2)
    player.collide(stand2P2)
    player.collide(stand3P2)
    player.collide(stand4P2)
    player.collide(stand5P2)
    player.collide(stand6P2)
    player.collide(stand7P2)
    player.collide(stand8P2)
    player.collide(stand9P2)
    player.collide(stand10P2)
    player.collide(stand11P2)
    player.collide(stand12P2)
    player.collide(stand13P2)
    player.collide(stand14P2)
    player.collide(stand15P2)
    player.collide(stand16P2)
    player.collide(stand1P3)
    player.collide(stand2P3)
    player.collide(stand3P3)
    player.collide(stand4P3)
    player.collide(stand1P4)
    player.collide(stand2P4)
    player.collide(stand3P4)
    player.collide(stand1P5)
    player.collide(stand2P5)
    player.collide(stand3P5)
    player.collide(stand1P5)
    player.collide(stand2P5)
    player.collide(stand1P6)
    player.collide(stand2P6)
    player.collide(stand3P6)
    player.collide(stand4P6)
    player.collide(stand5P6)
    player.collide(stand6P6)

    thief1.collide(stand1P)
    thief1.collide(stand2P)
    thief1.collide(stand3P)
    thief1.collide(stand4P)
    thief1.collide(stand5P)
    thief1.collide(stand6P)
    thief1.collide(stand1P2)
    thief1.collide(stand2P2)
    thief1.collide(stand3P2)
    thief1.collide(stand4P2)
    thief1.collide(stand5P2)
    thief1.collide(stand6P2)
    thief1.collide(stand7P2)
    thief1.collide(stand8P2)
    thief1.collide(stand9P2)
    thief1.collide(stand10P2)
    thief1.collide(stand11P2)
    thief1.collide(stand12P2)
    thief1.collide(stand13P2)
    thief1.collide(stand14P2)
    thief1.collide(stand15P2)
    thief1.collide(stand16P2)
    thief1.collide(stand1P3)
    thief1.collide(stand2P3)
    thief1.collide(stand3P3)
    thief1.collide(stand4P3)
    thief1.collide(stand1P4)
    thief1.collide(stand2P4)
    thief1.collide(stand3P4)
    thief1.collide(stand1P5)
    thief1.collide(stand2P5)
    thief1.collide(stand3P5)
    thief1.collide(stand1P5)
    thief1.collide(stand2P5)

    thief2.collide(stand1P)
    thief2.collide(stand2P)
    thief2.collide(stand3P)
    thief2.collide(stand4P)
    thief2.collide(stand5P)
    thief2.collide(stand6P)
    thief2.collide(stand1P2)
    thief2.collide(stand2P2)
    thief2.collide(stand3P2)
    thief2.collide(stand4P2)
    thief2.collide(stand5P2)
    thief2.collide(stand6P2)
    thief2.collide(stand7P2)
    thief2.collide(stand8P2)
    thief2.collide(stand9P2)
    thief2.collide(stand10P2)
    thief2.collide(stand11P2)
    thief2.collide(stand12P2)
    thief2.collide(stand13P2)
    thief2.collide(stand14P2)
    thief2.collide(stand15P2)
    thief2.collide(stand16P2)
    thief2.collide(stand1P3)
    thief2.collide(stand2P3)
    thief2.collide(stand3P3)
    thief2.collide(stand4P3)
    thief2.collide(stand1P4)
    thief2.collide(stand2P4)
    thief2.collide(stand3P4)
    thief2.collide(stand1P5)
    thief2.collide(stand2P5)
    thief2.collide(stand3P5)
    thief2.collide(stand1P5)
    thief2.collide(stand2P5)

    // thief1 cordinates
    if (thief1.isTouching(inv4T) && thief1.velocityX != 0) {
      thief1.velocityX = -3;
    }
    if (thief1.isTouching(inv1T) && thief1.velocityX != 0) {
      thief1.velocityX = 3;
    }
    if (thief1.velocityX < 0) {
      thief1.changeAnimation("thiefleftwalk", playerleftWalk_Img)
    }
    if (thief1.velocityX > 0) {
      thief1.changeAnimation("thiefrightwalk", player_Img)
    }
    if (arrowGr.isTouching(thief1) && no1 === 3) {
      thief1.velocityY = -30;
      no1 = no1 - 1;
      count1++
    }
    if (no1 === 2) {
      count1++

    }
    fight(thief1, -8, 60)

    if (thornGr.isTouching(player) && lives > 0) {
      lives = lives - 1
      thornGr.destroyEach()
      player.x = 25
    }
    console.log("no1   :    " + no1)
    if (arrowGr.isTouching(thief1) && no1 === 2 && count1 > 20) {
      count1++
      thief1.changeAnimation("dead", playerIdle2_Img)
      thief1.velocityX = 0;
    }
    if (thief1.velocityX == 0) {
      count11++
    }
    console.log("count1" + count1)
    if (count11 === 50) {
      thief1.destroy()
    }
    //thief2 cordinates
    if (thief2.isTouching(inv2T)) {
      thief2.velocityX = 3;
    }
    if (thief2.isTouching(inv3T)) {
      thief2.velocityX = -3;
    }
    if (thief2.velocityX < 0) {
      thief2.changeAnimation("thiefleftwalk", playerleftWalk_Img)
    }
    if (thief2.velocityX > 0) {
      thief2.changeAnimation("thiefrightwalk", player_Img)
    }
    if (arrowGr.isTouching(thief2) && no2 == 4) {
      thief2.velocityY = -20;
      no2 = no2 - 1;
      count2++
    }

    if (no2 === 3) {
      count2++

    }
    fight(thief2, -8, 200)


    if (arrowGr.isTouching(thief2) && no2 === 3 && count2 > 20) {
      count2++
      thief2.changeAnimation("dead", playerIdle2_Img)
      thief2.velocityX = 0;
    }
    if (thief2.velocityX == 0) {
      count22++
    }
    console.log("count1" + count1)
    if (count22 === 50) {
      thief2.destroy()
    }
    //over

    player.velocityX = 0;
    player.changeAnimation("playerImage", playerIdle_Img)
    if (keyDown(RIGHT_ARROW)) {
      player.velocityX = 4
      player.changeAnimation("player2_ani", thiefImg)
    }
    if (keyDown(LEFT_ARROW)) {
      player.velocityX = -4
    }
    player.velocityY = player.velocityY + 0.5
    if (keyWentDown("space")) {
      player.velocityY = -10;

    }
    if (keyDown("f")) {
      player.changeAnimation("thiefattack", thiefAttack_Img)
    }


    thief1.velocityY = thief1.velocityY + 0.5
    thief2.velocityY = thief2.velocityY + 0.5

    drawSprites()
    textSize(15)
    fill("red")
    text("arrows left   :      " + kunaiCount, 1100, 140)
    text("lives left  :   " + lives, 1100, 100)

    fill("black")

    if (keyWentDown("t")) {
      createArrow()
      player.changeAnimation("thiefthrow", thiefthrow_Img)
    }
    if (lives === 0) {
      player.changeAnimation("thdead", playerIdle2_Img)
    }
    textSize(18)
    if (player.isTouching(door)) {
      gameState2 = "q1"
    }
    if (gameState2 === "q1") {
      player.x = 1188;
      player.y = 121;
      opt1.visible = true;
      opt2.visible = true;
      opt3.visible = true;
      opt4.visible = true;
      textSize("30")
      text("WHAT IS THE NAME OF THE PRINCESS ? ", 200, 200)
      if (mousePressedOver(opt1))
        gameState = "end"

      if (mousePressedOver(opt2)) {
        gameState = "end"
      }
      if (mousePressedOver(opt3)) {
        gameState = "play2"
      }
      if (mousePressedOver(opt4)) {
        gameState = "end"
      }
    }
  }

  fill("white")
  text("x  :  " + mouseX + ", y  :   " + mouseY, mouseX, mouseY)

  if (gameState === "play2") {
    background(bg2_Img)
    //player2.visible = true
    drawSprites()
  }

}
function createArrow() {
  if (kunaiCount > 0) {
    arrow = createSprite(player.x, player.y, 20, 10);
    arrow.velocityX = 10;
    arrow.addImage(kunai_Img)
    arrow.scale = 0.3;
    arrow.lifetime = 300;
    arrowGr.add(arrow)
    //arrow.debug = true;
    //arrow.setCollider("rectangle",0,0,20,20)
    kunaiCount = kunaiCount - 1;
    return arrow;
  }

}
function fight(play, v, frame) {
  if (frameCount % frame === 0 && play.velocityX < 0) {
    thorn = createSprite(play.x, play.y, 20, 10);
    thorn.velocityX = v;
    thorn.addImage(knife_Img)
    thorn.scale = 0.2;
    thorn.lifetime = 300;
    thornGr.add(thorn)
    //arrow.debug = true;
    //arrow.setCollider("rectangle",0,0,20,20)
    return thorn;
  }

}