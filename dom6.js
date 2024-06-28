
function switchon() {
    document.getElementById('bulbImage').src = 'https://cdn.pixabay.com/photo/2014/04/03/10/32/bulb-310821_640.png';
    document.getElementById('bulbImage').style.transform = 'rotate(180deg)';
    document.getElementById('catImage').src = 'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png'; 
    document.getElementById('switchstatus').textContent = 'Switched On';
    document.getElementById('bulbImage').style.backgroundColor= '#0b0b0b';
}

function switchoff() {
    document.getElementById('bulbImage').src = 'https://st3.depositphotos.com/1000198/12871/i/450/depositphotos_128712956-stock-photo-lamp-light-bulb-3d-illustration.jpg'; 
    document.getElementById('bulbImage').style.transform = 'rotate(0deg)';
    document.getElementById('catImage').src = 'Black Aesthetic Cat Phone Wallpaper.png'; 
    document.getElementById('catbImage').style.height = '300px';
    document.getElementById('catbImage').style.width = '200px';
    document.getElementById('switchstatus').textContent = 'Switched Off';
}