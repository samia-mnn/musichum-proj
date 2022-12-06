
let song, buttton, amp;
let volHistory = [];
let timeStamps = []; 

let beethovenSongs = 
["https://www.chosic.com/wp-content/uploads/2020/06/Karine_Gilanyan_-_Beethoven_-_Piano_Sonata_nr15_in_D_major_op28_Pastoral_-_III_Scherzo_Allegro_Vivace.mp3",
'https://www.chosic.com/wp-content/uploads/2020/06/Daniel_Veesey_-_01_-_Sonata_8_Pathetique_-_I_Grave_-_Allegro_di_molto_e_con_brio.mp3',
]




function preload() {
  song1 = loadSound('audio/something.mp3'); 
  song = song1;
  song2 = song;
  getAudioContext().resume();
  httpGet('https://api.napster.com/v2.1/tracks/top?apikey=ODJjZDM2NGQtOGQwNi00M2M5LWExMzktNjA1NWNmOThlZmJl', 'json', 
false, function(response){
  console.log(response);
  song2 = response['tracks'][5]['previewURL'];
  console.log(song2);
  song = loadSound('https://cdn.pixabay.com/download/audio/2022/01/09/audio_f248363532.mp3?filename=fur-elise-by-ludwig-van-beethoven-classic-guitar-ahmad-mousavipour-13870.mp3');
});
}
//option to pick a new song and save the volhistory

function setup() {
  createCanvas(1500, 600)
  song.play();  
  amp = new p5.Amplitude();
}

function draw() {
  background(0);
  let vol = amp.getLevel();
  volHistory.push(vol);
  timeStamps.push(song.currentTime()); //find timestamp of song
  scale = volHistory.length/width; 
  pastx = 0;
  pasty=0;
  for (let x = 0; x < volHistory.length; x++) {
    stroke(255, 255, 255-x%255)
    let y = map(volHistory[x], 0, 1, height, 0);
    if (x%600 == 0)
    {
       text(int(timeStamps[x]), x/scale-100, 50);
    }
    line(pastx/scale-100, pasty, x/scale-100, y);
    pastx = x;
    pasty = y;
   
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