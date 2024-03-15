document.addEventListener('DOMContentLoaded', function() {
  const emailButton = document.querySelector('.email-me');
  const resumeButton = document.querySelector('.resume');
  const instagramButton = document.querySelector('.instagram-1');
  const facebookButton = document.querySelector('.facebook-1');
  const twitterButton = document.querySelector('.twitter-1');
  const linkedinButton = document.querySelector('.linkedin-1');

  emailButton.addEventListener('click', function() {
    window.location.href = 'mailto:kaigagithinji@gmail.com';
  });

  resumeButton.addEventListener('click', function() {
    window.open('c:\Users\pc\Downloads\Resume STEPHEN KAIGA GITHINJI (1).pdf', '_blank');
  });

  instagramButton.addEventListener('click', function() {
    window.open('https://www.instagram.com/skkaiga/', '_blank');
  });

  facebookButton.addEventListener('click', function() {
    window.open('https://www.facebook.com/skkaiga/', '_blank');
  });

  twitterButton.addEventListener('click', function() {
    window.open('https://twitter.com/skkaiga/', '_blank');
  });

  linkedinButton.addEventListener('click', function() {
    window.open('https://www.linkedin.com/in/kaiga-githinji-234013284/', '_blank');
  });
});
