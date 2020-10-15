var slider_img = document.querySelector('.slider-img');
var images = ['slide-1.jpg','slide-2.jpg','slide-3.jpg','slide-4.jpg','slide-5.jpg',]
var slideShowImageDiv = document.querySelector('.slide-show-image');
var circleLinks = document.querySelectorAll('.circle');

var current_image_index = 0;


// changes picture when clicked on cricles. also changes current image index.
for (let i = 0; i < circleLinks.length; i++) {
    circleLinks[i].addEventListener('click',function(){
        image_path = 'url(./images/slide-show/' +images[i] + ')';
        current_image_index = i;
        setImg(image_path,current_image_index)
        
        
        

    })
}

// button PREVIOUS IMAGE.
function prev(){
    if (current_image_index <= 0) current_image_index = images.length; 
    current_image_index --;
    image_path = 'url(./images/slide-show/' + images[current_image_index] + ')';
    
    return setImg(image_path,current_image_index);

    

}
// button NEXT IMAGE
function next(){
    if (current_image_index >= images.length-1) current_image_index = -1; 
    current_image_index ++;
    image_path = 'url(./images/slide-show/' + images[current_image_index] + ')';
    
    return setImg(image_path,current_image_index);
    
}
// function wich changes the images. takes PATH of the image as the argument.
function setImg(path,current_image_index){ 
    paginate(current_image_index);
    return document.querySelector('.slide-show-image').style.backgroundImage = path ;
}


function paginate(current_image_index){
    for (let index = 0; index < circleLinks.length; index++) {
        if (index === current_image_index){
            circleLinks[index].style.background = 'white';
        }
        else{
            circleLinks[index].style.background = 'none';
        }
        
    }

}


