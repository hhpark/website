
var imageArray = ["/images/backgrounds/redcloud.jpg", "/images/backgrounds/building.jpg", "/images/bgjumbo.jpg"]; 
  
var images = [];
var i;
for (i = 0; i < imageArray.length; i++){
    var image = new Image();
    image.src = imageArray[i];
    images.push(image);
}
var index = 0;
setInterval(function(){
    index = (index+1) % images.length;
    document.getElementById("slidesShow").src = images[index].src;}, 2500);