var images = ['heroimg1.jpg', 'heroimg2.jpg', 'heroimg3.jpg'];

$('#randomImage').css({'background-image': 'url(/images/' + images[Math.floor(Math.random() * images.length)] + ')'});