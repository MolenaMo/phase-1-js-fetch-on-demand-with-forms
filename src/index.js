
const init = () => {
    const form = document.querySelector('form')
  
   form.addEventListener('submit', (event) => {
      event.preventDefault();

      // const input =  form.searchByID.value;
      const id = document.querySelector('input#searchByID')//instead of event.target.children[1].value
      //console.log(id)-confirmed
      fetch(`http://localhost:3000/movies/${id.value}`)
      .then(response => response.json())
      .then(id => { console.log(id)
        const title = document.querySelector('section#movieDetails h4')
        const summary = document.querySelector('section#movieDetails p')
    
         title.innerText = id.title
         summary.innerText = id.summary
   
      })
      
    })}

  document.addEventListener('DOMContentLoaded', init)