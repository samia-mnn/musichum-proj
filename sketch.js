
let song, nextsong, button, amp, img, stars,fade, mainDex;
let volHistory = [];
let volHistory2 = [];
let timeStamps = []; 

let beethovenSongs = 
["https://www.chosic.com/wp-content/uploads/2020/06/Karine_Gilanyan_-_Beethoven_-_Piano_Sonata_nr15_in_D_major_op28_Pastoral_-_III_Scherzo_Allegro_Vivace.mp3",
'https://www.chosic.com/wp-content/uploads/2020/06/Daniel_Veesey_-_01_-_Sonata_8_Pathetique_-_I_Grave_-_Allegro_di_molto_e_con_brio.mp3',
];

let timeVals = [1825, 1850, 1875, 1900, 1925, 1950, 1975, 2000, 2025];


let stars2 = [];
//put in timeline events here
let timeTexts =
[


]




function preload() {

  song = loadSound('audio/moonlightsonata.mp3'); 
  nextsong = loadSound('audio/something.mp3');
  img = loadImage('purpleimg.jpg');
  mainDex = 0;
  stars = generateRandom();
  getAudioContext().resume();

 // fixed = 'Access-Control-Allow-Origin: https'+song2.substring(4);


//option to pick a new song and save the volhistory
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  song.play();  
  amp = new p5.Amplitude();
  time = 0;
  fade = 0;
  mainDex = 0;
  frameRate(30);
  //make an array of timestamps, with their information
  //update their location every time
  //do a command that has the if statements 
  //how do we kee
}

function draw() {
  background(0);
  image(img, 0, 0, width, height);
  let vol = amp.getLevel();
  time = time+1;

  if (time < 10000)
  {
  volHistory.push(vol);
  timeStamps.push(song.currentTime()); //find timestamp of song
  scale = volHistory.length/width; 
  pastx = 0;
  pasty=0;
  mainDex = 0;
  latestValue = timeVals[mainDex];
  frameRate = 30;
  let clearness = 255;
  locations = [];
  for (let x = 0; x < volHistory.length; x++) {
    stroke(255-x*255/volHistory.length, 255-x*255/volHistory.length, 255)
    let y = map(volHistory[x], 0, 1, height, -height/2);
    y = y;
    if (x%600 == 0)
    {
      if(time < 5000)
      {
      fill(255,255,255, clearness);
      if (time > 4745)
      {
        clearness = clearness-1;
      }
      text(/*1801+24*int((timeStamps[x])/20)*/timeVals[mainDex], x/scale-width/10, height/10);}
       //stars.pop();
      mainDex = mainDex+1;
      latestValue = timeVals[mainDex];
      // ele.mouseOver(boxInfo(x/scale-width/10, height/10));
      if(x==600)
      {
        locations.push(x/scale-width/10);
      }
     //  if(x/600==4)
     //     text("The Leviathan of Parsontown is Completed",  x/scale-width/10, 2*height/10 );
    }
   
    line(pastx/scale-width/10, pasty-height/10, x/scale-width/10, y-height/10);
    pastx = x;
    pasty = y;

    for (let i=0; i<locations.length; i++)
    {
      if (mouseX>locations[i]&& mouseX<locations[i]+width/10 && mouseY < 2*height/10)
      {
      fill(159,150,200,210);
      noStroke();
      rect(locations[i]-1.1*width/10, 2*height/10, 2.4*width/10, height/15, 20);
      fill(0,0,0);
      text("Beethoven first writes Moonlight Sonata",  locations[i]-width/10, 2*height/10);
      }

    }
   
  }
  stroke(255,255,255);
  fill(255,255,255);
  textSize(40);
  text("The End of Moonlight", 20, 2*height/3);
  fill(200, 200,255);
  noStroke();
  textSize(20);
  text(getText(latestValue), 20, 2*height/3+50);

  }
  drawStars(stars, true);
  addValue = 0;
  if (volHistory.length >= 2700)
  {
    addValue = 3;
  }
  if (volHistory.length >=3700)
  {
    addValue = 4;
  }
  for (let y = 0; y < int(volHistory.length/600)+addValue; y++)
  {
    if((time < 4600) && volHistory.length % (90-20*(addValue-1)) == 0)
    {
      stars2.push(stars.pop());
    }

  }
  //draw circles around the stars for facts?
  
  //ultimately remove this and let it play
  //talk more about light pollution
  if (time >=5000)
  {
    drawStars(stars2, false);
    fade = fade+1;
   // song.stop();
    //and then we draw all the stars we lost but in red
  }
  
  
  // ellipse(300, 300, vol*300, vol*300);
}

// Chrome 70 will require user gestures required to enable web audio api
// Click on the web page to start audio
function touchStarted() {
  getAudioContext().resume();
}

function boxInfo(locX, locY){
  text("Beethoven first writes Moonlight Sonata",  locX, locY);
}

function getText(place) {

    if (place == 1850)
    {
      return("Beethoven wrote his Moonlight Sonata in 1801. At that point, in most of the world, anyone could look up and see a sky full of stars. \nBy the time this excerpt ends, it will be 2022.");
    }
    if (place == 1875)
      {return ("At this point, light pollution did not affect night sky visibility. Air pollution, however, due to industrialization, began to hold an impact.");}
    if (place == 1900)
     {return ("The late 1800s saw many revolutions in the field of astrophysics. During this time, the Yerkes Observatory \nwas founded, one of the most impressive refracting telescopes ever  created.");}
    if (place == 1925)
      {return ("In __, Thomas Edison began promoting the lightbulb. This event marks the beginning of major light pollution.");}
    if (place == 1950)
    {
      return ("In the 1930s, fluorescent and incandescent street lamps become widely popular - along with automobile travel. \nIncreased city populations as well as growing suburbs rapidly contribute to skyglow.")
    }
    if (place == 1975)
    {
      return "Scientific American publishes a story showing investgating how green turtle hatchlings use moonlight to safely navigate to the sea, \na journey made far more perilous due to light pollution.";
    }
}
function calculateSimilarSections(volHistory1, volHistory2) {
   ///break the songs into sections 
   ///find the sections that are the most similar
   //save the x and map it
   //connect to frame time
}

function breakSections(volHist){
  numSections = volHist.length()/600; //frames, 10 second chunks
  sections = [];
  for (i=0; i<numSections; i++)
  {
    sections.append(timestamps[i*600]);
  }
  return sections;
}

function generateRandom()
{
   coordinateTuples = [];
  for(i = 0 ; i < 570; i++)
  {
      coordinateTuples.push([int(random(windowWidth)), int(random(windowHeight))-300, (random(1,4))]);
  }
  return coordinateTuples;
}

function drawStars(fun, beginning)
{
  addValue = 0;
  opacity = 255;
  if (!beginning)
  {
    addValue = 50;
    opacity = fade;
  }
  for (i = 0; i < fun.length; i++)
  {
    fill(255,255-addValue*3,255-addValue*2, opacity);
    if (i%5 == 0)
      fill(150,150-addValue*3,200-addValue*2, opacity);

    push();
    translate(fun[i][0], fun[i][1]);
    rotate(frameCount / -100.0);
    sizeVal = fun[i][2];
    star(0, 0, 2*sizeVal, sizeVal, 5);
    pop();
  }
}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
