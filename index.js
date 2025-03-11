// Get both pupils
const pupils = document.querySelectorAll('.pupil');

// Add mousemove event
window.addEventListener('mousemove', (event) => {
  // Get mouse position
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  pupils.forEach((pupil) => {
    // Get the eye's position
    const eyeRect = pupil.parentElement.getBoundingClientRect();
    const eyeCenterX = eyeRect.left + eyeRect.width / 2;
    const eyeCenterY = eyeRect.top + eyeRect.height / 2;

    // Calculate the angle to the mouse
    const deltaX = mouseX - eyeCenterX;
    const deltaY = mouseY - eyeCenterY;
    const angle = Math.atan2(deltaY, deltaX);

    // Limit pupil movement within the eye boundary
    const maxDistance = (eyeRect.width / 2) - (pupil.clientWidth / 2);

    // Calculate new position based on angle
    const pupilX = Math.cos(angle) * maxDistance;
    const pupilY = Math.sin(angle) * maxDistance;

    // Move pupil
    pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
  });
});
