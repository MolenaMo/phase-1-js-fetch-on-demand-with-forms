
const init = () => {
    const inputForm = document.querySelector('form')
  
    inputForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const input = document.querySelector('input#searchByID');//instead of event.target.children[1].value
        console.log(input.value)
      fetch(`http://localhost:3000/movies/${input.value}`)
      .then(response => response.json())
      .then(data => { console.log(data)
        let title = document.querySelector('section#movieDetails h4')
        let summary = document.querySelector('section#movieDetails p')
    
         title.innerText = data.title
         summary.innerText = data.summary
   
      })
      
    });
  }

  document.addEventListener('DOMContentLoaded', init)