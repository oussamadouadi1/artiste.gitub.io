function showHeart(button) {
  var heartContainer = button.nextElementSibling;
  var heart = document.createElement('div');
  heart.className = 'heart';
  heartContainer.appendChild(heart);
  
  heartContainer.style.display = 'block';
  heart.style.animationPlayState = 'running';
  
  setTimeout(function() {
    heartContainer.style.display = 'none';
    heart.style.animationPlayState = 'paused';
    heartContainer.removeChild(heart);
  }, 1000);
}