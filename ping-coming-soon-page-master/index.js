
  document.querySelector('#Notify').addEventListener('click', function(e) {
    e.preventDefault()
    const errorMessage = document.querySelector('#err')
  const emailInput = document.querySelector('#email')
  
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const emailValue = emailInput.value 
  
  if (!emailPattern.test(emailValue)) {
    emailInput.classList.add('error')
    errorMessage.style.display = 'block'
  } else {
    emailInput.classList.remove('error')
    errorMessage.style.display = 'none' 
  }
  })
