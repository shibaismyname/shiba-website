const toType = document.getElementById("toType").textContent

document.getElementById("toType").textContent = ""

const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

const typing = async (letters, targetElem) => {
    for (let i = 0; i < letters.length; i++) {
      targetElem.textContent += letters[i];
      await sleep(200);
    }
}

typing(toType, document.getElementById("toType"))
