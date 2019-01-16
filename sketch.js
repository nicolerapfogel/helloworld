function setup () {
    createCanvas(800, 600);
    background(0, 125, 225);
}

function draw() {
    
    noStroke()
    fill(255)
    for (var i=0; i < 50; i++){
     for(var j=0; j < 50; j++){
       ellipse(10+i*80, 0+j*80, 6, 6);
     }
   }
   for (var i=0; i < 50; i++){
    for(var j=0; j < 50; j++){
      ellipse(50+i*80, 40+j*80, 6, 6);
    }
  }

    
    stroke(125)
    fill(255);
    rect(0, 580, 800, 20);
    ellipse(400, 550, 100, 100);
    ellipse(400, 455, 90, 90);
    ellipse(400, 370, 80, 80);
    fill(20)
    ellipse(390, 360, 10, 10);
    ellipse(410, 360, 10, 10);
    fill(255, 100, 0)
    stroke(0)
    triangle(392, 380, 392, 370, 412, 375)
   fill(255, 0, 0);
   ellipse(378, 385, 6, 6);
   ellipse(386, 391, 6, 6);
   ellipse(396, 394, 6, 6);
   ellipse(407, 393, 6, 6);
   ellipse(418, 389, 6, 6);
   stroke(127, 100, 100);
   fill(127, 100, 100);
   rect(275, 455, 80, 5);
   rect(445, 455, 80, 5);
   stroke(255, 255, 0);
   fill(255, 255, 0);
   ellipse(650, 100, 120, 120);

   noStroke();
   fill(230);
   ellipse(100, 100, 80, 80);
   ellipse(155, 100, 80, 80);
   ellipse(210, 100, 80, 80);
   ellipse(290, 160, 80, 80);
   ellipse(345, 160, 80, 80);
   ellipse(400, 160, 80, 80);
   ellipse(490, 100, 80, 80);
   ellipse(545, 100, 80, 80);
   ellipse(600, 100, 80, 80);

  

   
}





