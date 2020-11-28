const name = document.getElementById('name')
const user = document.getElementById('user')
const errorElement = document.getElementById('Error')
const form = document.getElementById("form")
form.addEventListener('onclick', (e) => {
    console.log("suhdudeh213213dasfhuie")
    
    let messages = []
    if (name.value === '' || name.value == null) {
          messages.push(`name is required`)
    }
        
    
    if (message.length > 0) {
        e.preventDefault()
        errorElement.inneText = messages.join(',' )
    
    }

})



console.log("suhdudehuedasfhuie")

