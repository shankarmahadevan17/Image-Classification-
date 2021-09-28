let classifier;
let kitten;
function modelReady()
{
  console.log("model is ready!!");
  mobilenet.predict(kitten,gotResults);
}
function gotResults(error,results)
{
   if(error)
   {
     console.error(error);
   }
   else{
     console.log(results);
     let label=results[0].label
     let prob=results[0].confidence;

     fill(250);
     textSize(70);
     text(label,10,height-100);
     text(prob,10,height-10);
   }
}
function imageReady()
{
  image(kitten,0,0);}
  
function setup(){
  createCanvas(700,600);
  kitten=createImg('elephant.jpeg',imageReady);
  kitten.hide();

  background(0);
  
  mobilenet=ml5.imageClassifier('Mobilenet',modelReady);
} 

