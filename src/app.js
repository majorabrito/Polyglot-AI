function displayDescription(response) {

    let descriptionElement = document.querySelector("#description-element");
    descriptionElement.innerHTML = "";

  new Typewriter("#description-element", {
    strings: response.data.answer,
    autoStart: true,
    delay: 30,
    cursor: "",
  });
}

function descriptionGenerator(event) {
  event.preventDefault();


  let userWord = document.querySelector("#word").value;
  let userLanguage = document.querySelector("#language").value;
  let apiKey = "684391fb9be129et40f040f4bb35oaff";

  let context = `You are a professional polyglot. Your goal is to translate the word into ${userLanguage} and then write a brief description in ${userLanguage}. The format has to be <strong>Translated Word</strong> then <br /> you must display a brief description in ${userLanguage}. Max 200 characters. Include the origin of the word and the country that is most used`;
  
  let prompt = `Word: ${userWord}. Target Language: ${userLanguage}. Provide the translation and its description in ${userLanguage}.`;


  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(prompt)}&context=${encodeURIComponent(context)}&key=${apiKey}`;
  

  let descriptionElement = document.querySelector("#description-element");
  descriptionElement.classList.remove("hidden");
  descriptionElement.innerHTML = `<div class="loading">
        <span><img src="https://cdn.pixabay.com/animation/2023/08/10/06/24/06-24-17-858_512.gif" width="50px" class="image"/>
    Generating the meaning of ${userWord}...</span>
    </div>`;
 

  axios.get(apiUrl).then(displayDescription)
    
}

let formElement = document.querySelector("#form-element");
formElement.addEventListener("submit", descriptionGenerator);