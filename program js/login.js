function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popupMessage');
   {
      popupMessage.textContent = "yatawwa masuk mi";
      popup.style.display = "block";
    } 
    return false; // prevent form from submitting
  }
  
  function closePopup() {
    document.getElementById('popup').style.display = 'none';
  }