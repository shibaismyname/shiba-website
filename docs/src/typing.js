// equal to sleep funciton in python
const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

// This is an array of html elements, since getElementsByClassName returns an array, since there can be more than one html element with that class.
const elements = document.getElementsByClassName("typing-animation");
const appearingElements = document.getElementsByClassName("appear");

(async (typedElements, appearElements) => {
  let texts = [];

  for (let element of typedElements){
  // The property to access the text inside the elements .innerHTML, if its a user interactuable element such as <input> or <textarea> then its .value
  texts.push(element.innerHTML);
  element.textContent = "";
  }

  // texts and typedElements has the same length.
  for (let i = 0; i < texts.length; i++) {
    for (let character of texts[i]) {
      typedElements[i].textContent += character;
      await sleep(200);
    }
    await sleep(200);
    appearElements[i].style.display = "inline-block";
  }
})(elements, appearingElements);
