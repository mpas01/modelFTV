// Create an object and display with HTML using template strings
const pet = {
  Name: 'Cyrus',
  Animal: 'Dog',
  Breed: 'Bullterrier',
  Personality:'fun',
  Greeting: function hello(){
     
      return 'chirp chirp';
    }
    
  
}

let html;

html = `
  <ul>
   <li>Animal: ${pet.Animal}</li>
   <li>Animal: ${pet.Animal = 'Cat'}</li>
   <li>Animal: ${pet.Name}</li>
   <li>Animal: ${pet.Name = 'Boris'}</li> 
   <!--Call a function-->
   <li>Say Hello: ${pet.Greeting()}</li>  
   <li>Say Hello: ${pet.Greeting()}</li>  
  </ul>
`;
document.body.innerHTML = html;


