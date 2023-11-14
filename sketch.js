var back, bImg;
var play, marketPlace;
var gs="start";
var dog, dogImg;
var arrow, arrowImg;
var o1,o2,o3;
var hide= false;
var thedog;
var count=0;
var key, keyImg;
var keys=0;
var dog2, dog3;
var cat, cat2, cat3;
var rab, rab2;
var ch="dog";
var s1,s2,s3,s4,s5,s6,btn1,btn2,btn3, btn4, btn5, ch1,ch2,ch3,ch4,ch5,ch6;
var isBack= false;
var initialized = false;
var speed=2;
var sp1, sp2, sp3;
var instruct= true;
var ins= 1;

function preload(){
  bImg= loadImage("back.jpg");
  dogImg= loadImage("dog.gif");
  arrowImg= loadImage("arrow.gif");
  keyImg= loadImage("key.gif");
  dog2= loadImage("dog2.gif");
  dog3= loadImage("dog3.gif");
  cat= loadImage("cat.gif");
  cat2= loadImage("cat2.gif");
  cat3= loadImage("cat3.gif");
  rab= loadImage("rab.gif");
  rab2= loadImage("rab2.gif");
}

function setup(){
  createCanvas(windowWidth-8, windowHeight-8);

  // const storedKeys = localStorage.getItem('keys');

  back= createSprite(0,0,width*3, height);
  back.addImage(bImg);
  back.scale= 4.5;

  play= createButton("PLAY");
  play.position(width/2, height/3);
  play.size(80,50);
  play.mouseClicked(change);

  play.style("background-color", "lightblue");
  play.style("font-size", "24px");
  play.style("font-weight", "bold");
  play.style("color", "white");

  marketPlace= createButton("MARKETPLACE");
  marketPlace.position(width/2-50, height/3+80);
  marketPlace.size(200,50);
  marketPlace.mouseClicked(mark);

  marketPlace.style("background-color", "lightblue");
  marketPlace.style("font-size", "24px");
  marketPlace.style("font-weight", "bold");
  marketPlace.style("color", "white");

  dog= createSprite(width/2, height/5, 20,20);
  

  dog.visible= false;

  arrow= createSprite(width/20-50, height/7-50, 20,20);
  arrow.addImage(arrowImg);
  arrow.scale= 0.1;
  arrow.visible= false;

  o1= createSprite(width/3-50, height/5, 40,40);
  o1.visible= false;
  o2= createSprite(width-450, height/5, 40,40);
  o2.visible= false;

  o3= createSprite(width/2, height/2-50, 40,40);
  o3.visible= false;

  thedog= createSprite(dog.x, dog.y, 40,40);
  thedog.visible= false;

  key= createSprite(width-100, height/7-50,20,20);
  key.addImage(keyImg);
  key.scale= 0.3;

  s1= createSprite(width/13, height/7, 20,20);
  s1.addImage(dog3);
  s1.scale= 0.3;
  s1.visible= false;

    s2= createSprite(width/2-100, height/7, 20,20);
  s2.addImage(dog2);
  s2.scale= 0.15;
  s2.visible= false;

    s3= createSprite(width-300, height/7, 20,20);
  s3.addImage(dogImg);
  s3.scale= 0.5;
  s3.visible= false;

   s4= createSprite(width/16, height/2+50, 20,20);
  s4.addImage(cat);
  s4.scale= 0.1;
  s4.visible= false;

   s5= createSprite(width/2-100, height/2+50, 20,20);
  s5.addImage(cat2);
  s5.scale= 0.25;
  s5.visible= false;

   s6= createSprite(width-300, height/2+50, 20,20);
  s6.addImage(cat3);
  s6.scale= 0.3;
  s6.visible= false;

   btn1= createButton("BUY");
  btn1.position(width/2-120, height/3);
  btn1.mouseClicked(b1, key-=2);

   btn2= createButton("BUY");
  btn2.position(width-300, height/3);
  btn2.mouseClicked(b2);

   btn3= createButton("BUY");
  btn3.position(width/16-50, height-150);
  btn3.mouseClicked(b3);

   btn4= createButton("BUY");
  btn4.position(width/2-120, height-150);
  btn4.mouseClicked(b4);

   btn5= createButton("BUY");
  btn5.position(width-300, height-150);
  btn5.mouseClicked(b5);

   ch1= createButton("CHOOSE");
   ch1.position(width/20, height/3);

  //  ch2= createButton("CHOOSE");
  //  ch2.position(width/2-120, height/3);

  // storedKeys = storedKeys ? parseInt(storedKeys) : 0;
   keys = parseInt(localStorage.getItem('keys')) || 0;
  // if(!initialized){
  //  ch= parseFloat(localStorage.getItem('ch'));
  // }

  const storedCh = localStorage.getItem('ch');
  if (typeof storedCh === 'string') {
    ch = storedCh;
  } else {
    ch = "dog";
  }

  btn1.style('display', 'none');
    btn2.style('display', 'none');
    btn3.style('display', 'none');
    btn4.style('display', 'none');
    btn5.style('display', 'none');

     ch1.style('display', 'none');
    // ch2.style('display', 'none');

    
}

function draw(){

  background(30);

  //frameRate(1);

  if(ch==="dog"){
    dog.addImage(dog3);
    dog.scale= 0.3;
    text("CHOOSEN", width/13, height/6);
   ch1.style('display', 'none');
  }
  else{
    ch1.style('display', 'block');
    ch1.mouseClicked(b);
  }
  
  if(ch==="dog2"){
    dog.addImage(dog2);
    dog.scale= 0.15;
    //ch2.style('display', 'none');
  }
  // else{
  //   ch2.style('display', 'block');
  //   ch2.mouseClicked(b1);
  // }

  if(ch==="dog3"){
    dog.addImage(dogImg);
    dog.scale= 0.5;
  }

  if(ch==="cat"){
    dog.addImage(cat);
    dog.scale= 0.1;
  }

  

  if(ch==="cat2"){
    dog.addImage(cat2);
    dog.scale= 0.25;
  }

  if(ch==="cat3"){
    dog.addImage(cat3);
    dog.scale= 0.3;
  }

  if(gs==="start"){
    play.style('display', 'block');
    marketPlace.style('display', 'block');

    o1.visible= false;
    o2.visible= false;
    o3.visible= false;
    thedog.visible= false;
    dog.visible= false;

    s1.visible= false;
    s2.visible= false;
    s3.visible=false;
    s4.visible=false;
    s5.visible= false;
     s6.visible= false;

    btn1.style('display', 'none');
    btn2.style('display', 'none');
    btn3.style('display', 'none');
    btn4.style('display', 'none');
    btn5.style('display', 'none');

    arrow.visible= false;

    ch1.style('display', 'none');
    
  }

  if(gs==="play"){
    play.style('display', 'none');
    marketPlace.style('display', 'none');
    dog.visible= true;
    arrow.visible= true;
    o1.visible= true;
    o2.visible= true;
    o3.visible= true;
    thedog.visible= true;
    s1.visible= false;
    s2.visible= false;
    s3.visible=false;
    s4.visible=false;
    s5.visible= false;
     s6.visible= false;
     ch1.style('display', 'none');

     if(mousePressedOver(arrow)){
      gs="start";
     }

    if(mousePressedOver(back) && count!==6 && !mousePressedOver(arrow)){
      start();
    }

    if(hide===true){
      dog.visible= false;

      if(frameCount%30===0 && count<=5 && gs!=="heh"){
        count++;
        thedog.x=random(width/15, width-100) ;
        thedog.y= random(height-50, height/7);
        o1.x= random(width/15, width-100);
        o1.y= random(height-50, height/7);
        o2.x= random(width/15, width-100);
        o2.y= random(height-50, height/7);
        o3.x= random(width/15, width-100);
        o3.y= random(height-50, height/7);
      }

      if(count>=5){
        if(mousePressedOver(thedog)){
          thedog.visible= false;
          dog.x= thedog.x;
          dog.y= thedog.y;
          hide= false;
          keys++
          
          finish();
          count=0;
          gs="heh";
        }

        if(mousePressedOver(o1) ||mousePressedOver(o2)||mousePressedOver(o3)){
          end();
          count=0;
          gs="heh";
          thedog.visible= false;
          dog.x= thedog.x;
          dog.y= thedog.y;
          hide= false;
        }
        
      }
    }
     if(hide===false){
      dog.visible= true;
     }
  }

  if(keyDown("up")){
    gs="start";
  }

 

  if(gs==="mark"){
    play.style('display', 'none');
    marketPlace.style('display', 'none');

    s1.visible= true;
    s2.visible= true;
    s3.visible= true;
    s4.visible=true;
    s5.visible= true;
     s6.visible= true;

     btn1.style('display', 'block');
    btn2.style('display', 'block');
    btn3.style('display', 'block');
    btn4.style('display', 'block');
    btn5.style('display', 'block');

    arrow.visible= true;

    if(mousePressedOver(arrow)){
      isBack= true;
     }
   
  }

  
 


  console.log(ch);
  //console.log(count);

  keySet();
  chSet();

  // if(keyDown("up")){
  //   gs="start";
  // }

  if(isBack){
    for(var i=0; i<=6; i++){
    gs="start";
    }
    isBack= false;
  }

  drawSprites();

  if(gs==="start"){

    s1.visible= false;

  textStyle(BOLD);
  fill(255, 0, 0);
  stroke(0, 0, 0);
  textSize(40);

  text("THE MEMORY WORKER", width/3+20, height/5);
  // text.class("classText");

  
  

  }

  textStyle(BOLD);
  fill(255, 0, 0);
  stroke(0, 0, 0);
  textSize(40);
  text(keys, width-70, height/7-35);


  if(gs==="mark"){
    if(ch==="dog"){
      textSize(20);
      text("CHOOSEN", width/20, height/3);
    }

    if(ch==="dog2"){
      textSize(20);
      text("CHOOSEN", width/2-120, height/3);
      btn1.style('display','none');
    }

    if(ch==="dog3"){
      textSize(20);
      text("CHOOSEN", width-350, height/3);
      btn2.style('display','none');
    }

    if(ch==="cat"){
      textSize(20);
      text("CHOOSEN", width/20-50, height-150);
      btn3.style('display','none');
    }

    if(ch==="cat2"){
      textSize(20);
      text("CHOOSEN", width/2-120, height-150);
      btn4.style('display','none');
    }

    if(ch==="cat3"){
      textSize(20);
      text("CHOOSEN", width-350, height-150);
      btn5.style('display','none');
    }

    text("COST: 2 KEYS", width/2-150, height/7+100);
    text("COST: 4 KEYS", width-380, height/7+100);

    text("COST: 3 KEY", width/8-150, height-170);
    text("COST: 5 KEYS", width/2-150, height-170);
    text("COST: 1 KEY", width-380, height-170);
  }

  

  textStyle(BOLD);
  // fill(255, 0, 0);
  // stroke(0, 0, 0);
  fill("blue");
  textSize(20);

  

  if(instruct===true && ins===1){
    text("PRESS PLAY BUTTON TO PLAY OR PRESS MARKETPLACE TO BUY NEW CHRACTERS", width/5, height/2+100);
    if(mousePressedOver(back)){
      ins=2;
    }
  }

  if(instruct===true && ins===2){
    text("IF YOU PRESS PLAY BUTTON, A CHRACTER(YOUR CHOOSEN)WILL BE THERE. REMEMBER THE BOX ABOVE IT. ", width/8, height/2+100);
    text("WHEN YOU PRESS OVER THE BACKGROUND, THE BOX OF CHRACTER AND OTHER BOX WILL START MOVING.", width/8, height/2+150);
    text("AT THE END, CLICK ON YOUR CHRACTER BOX TO WIN A KEY", width/4, height/2+200);

    if(mousePressedOver(back) && frameCount%20===0){
      ins=3;
    }
  }
  if(instruct===true && ins===3){
    text("USE KEYS TO BUY CHRACTERS IN MARKET!",width/4, height/2+150);

    if(mousePressedOver(back) && frameCount%25===0){
      instruct= false;
      ins= false;
    }
  }

  console.log(instruct);
  console.log(ins);

  chSet();
}

function change(){
  gs="play";
}

function start(){
  hide= true;
}

function finish(){
swal(
  {
    title: `You Won!!!`,
    text: "Thanks for playing!!",
    imageUrl:
      "dog.gif",
    imageSize: "150x150",
    confirmButtonText: "Go Back"
  },
  function(isConfirm) {
    if (isConfirm) {
      //location.reload();
      gs="start";
    }
  }
   
  );
    }

    function end(){
      swal(
        {
          title: `You Lose!!!`,
          text: "Thanks for playing!!",
          imageUrl:
            "dog.gif",
          imageSize: "150x150",
          confirmButtonText: "Retry"
        },
        function(isConfirm) {
          if (isConfirm) {
            //location.reload();
            gs="start";
          }
        }
         
        );
          }

          function mark(){
            gs="mark";
          }
  
      
    function b(){
      ch="dog";
      chSet();
    }

    function b1(){
      if(keys>=2){
      ch="dog2"
      keys-=2;
      chSet();
      }
    }

    function b2(){
      if(keys>=4){
      ch="dog3"
      keys-=4;
      chSet();
      }
    }

    function b3(){
      if(keys>=3){
      ch="cat"
      keys-=3;
      chSet();
      }
    }

    function b4(){
      if(keys>=5){
      ch="cat2"
      keys-=5;
      chSet();
      }
    }

    function b5(){
      if(keys>=1){
      ch="cat3"
      keys-=1;
      chSet();
      }
    }

  
    function keySet(){
      localStorage.setItem('keys',keys.toString());
    }

    function chSet(){
      if (typeof ch === 'string' && ch !== "dog") {
        localStorage.setItem('ch', ch);
      }
    }
