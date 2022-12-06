
let song, nextsong, button, amp, img, stars;
let volHistory = [];
let volHistory2 = [];
let timeStamps = []; 

let beethovenSongs = 
["https://www.chosic.com/wp-content/uploads/2020/06/Karine_Gilanyan_-_Beethoven_-_Piano_Sonata_nr15_in_D_major_op28_Pastoral_-_III_Scherzo_Allegro_Vivace.mp3",
'https://www.chosic.com/wp-content/uploads/2020/06/Daniel_Veesey_-_01_-_Sonata_8_Pathetique_-_I_Grave_-_Allegro_di_molto_e_con_brio.mp3',
];


function preload() {

  song = loadSound('audio/moonlightsonata.mp3'); 
  nextsong = loadSound('audio/something.mp3');
  img = loadImage('bg.png');
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
  frameRate(30);
}

function draw() {
  background(0);
 // image(img, 0, 0, width, height);
  let vol = amp.getLevel();
  time = time+1;

  if (time < 10000)
  {
  volHistory.push(vol);
  timeStamps.push(song.currentTime()); //find timestamp of song
  scale = volHistory.length/width; 
  pastx = 0;
  pasty=0;
  for (let x = 0; x < volHistory.length; x++) {
    stroke(255-x*255/volHistory.length, 255-x*255/volHistory.length, 255)
    let y = map(volHistory[x], 0, 1, height, -height/2);
    y = y;
    if (x%600 == 0)
    {
       text(int(timeStamps[x]), x/scale-width/10, height/10);
    }
    line(pastx/scale-width/10, pasty-height/10, x/scale-width/10, y-height/10);
    pastx = x;
    pasty = y;
   
  }
  stroke(255,255,255);
  fill(255,255,255);
  textSize(40);
  text("The End of Moonlight", 20, 2*height/3);
  fill(200, 200,255);
  noStroke();
  textSize(20);
  text("Beethoven wrote his Moonlight Sonata in 1801. At that point, in most of the world, anyone could look up and see a sky full of stars. \nBy the time this sonata ends, it will be 2022.", 20, 2*height/3+50);

  }
  drawStars(stars);
  if (time >=10000)
  {
    song.stop();
    frameRate(30);
    nextsong.play();
    volHistory2.push(vol);
    pastx2 = 0;
    pasty2 = 0;
    scale2 = volHistory2.length/width; 

    for (let j = 0; j < volHistory2.length; j++) {
      stroke(255-j%255, 255, 255)
      strokeWeight(5);
      let k = map(volHistory2[j], 0, 1, height, 0);
    /*  if (x%600 == 0)
      {
         text(int(timeStamps[x]), x/scale-100, 50);
      }*/
      line(pastx2/scale2-100, pasty2, j/scale2-100, k);
      pastx2 = j;
      pasty2 = k;
     
    }
  }
  
  
  // ellipse(300, 300, vol*300, vol*300);
}

// Chrome 70 will require user gestures required to enable web audio api
// Click on the web page to start audio
function touchStarted() {
  getAudioContext().resume();
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
  for(i = 0 ; i < 100; i++)
  {
      coordinateTuples.push([int(random(windowWidth)), int(random(windowHeight))-300]);
  }
  return coordinateTuples;
}

function drawStars(fun)
{
  fill(255,255,255);
  for (i = 0; i < fun.length; i++)
  {



    push();
    translate(fun[i][0], fun[i][1]);
    rotate(frameCount / -100.0);
    star(0, 0, 6, 3, 5);
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
