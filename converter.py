import pandas as pd
import json 

data = pd.read_csv("./data.csv").reset_index(drop=True)
dict_data = data.to_dict('records')
json_object = json.dumps(dict_data, indent=4) 
json_str    = str(json_object)
js_str      = '''const flashcardContainer = document.getElementById("flashcard-container");

const jsonData = '''+json_str+''';

for (let i = jsonData.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [jsonData[i], jsonData[j]] = [jsonData[j], jsonData[i]];
}

jsonData.forEach(item => {
    const card = createFlashcard(item.question, item.answer);
    flashcardContainer.appendChild(card);
});

function createFlashcard(question, answer) {
    const card = document.createElement("div");
    card.classList.add("flashcard");

    const questionElement = document.createElement("div");
    questionElement.classList.add("question");
    questionElement.textContent = question;

    const answerElement = document.createElement("div");
    answerElement.classList.add("answer");
    answerElement.textContent = answer;

    card.appendChild(questionElement);
    card.appendChild(answerElement);

    card.addEventListener("click", () => {
        card.classList.toggle("flipped");
    });

    return card;
}'''

with open("./script.js", "w") as outfile:
    outfile.write(js_str)