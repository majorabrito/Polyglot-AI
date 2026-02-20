function displayDescription(response) {
  let descriptionElement = document.querySelector("#descrption-element");
  descriptionElement.innerHTML = ""; 

  new Typewriter("#descrption-element", {
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

  let context = `You are a professional polyglot. Your goal is to translate the word into ${userLanguage} and then write a brief description in ${userLanguage}. The format has to be <strong>Translated Word</strong> then <br /> you must display a brief description in ${userLanguage}. Max 200 characters.`;
  
  let prompt = `Word: ${userWord}. Target Language: ${userLanguage}. Provide the translation and its description in ${userLanguage}.`;


  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(prompt)}&context=${encodeURIComponent(context)}&key=${apiKey}`;


  axios.get(apiUrl).then(displayDescription)
    
}

let formElement = document.querySelector("#form-element");
formElement.addEventListener("submit", descriptionGenerator);