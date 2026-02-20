function descriptionGenerator(event){
    event.preventDefault();

  new Typewriter("#descrption-element", {
    strings: "here is the word descrption",
    autoStart: true,
    delay: 0.5,
    cursor: "",
  });
}

let formElement = document.querySelector("#form-element");
formElement.addEventListener("submit", descriptionGenerator);