const fs = require('fs');

function fetchQuestions(){
    try {
        var questions = fs.readFileSync('data/quiz.json');
        return JSON.parse(questions);
      } catch (e) {
        return null;
      }
}

function saveQuestions(data){
    console.log('writing to file');
    fs.writeFileSync('data/quiz.json' , JSON.stringify(data));
}

function fetchCFG(){
    try {
        var cfg = fs.readFileSync('config.json');
        return JSON.parse(cfg);
      } catch (e) {
        return null;
      }
}

function saveCFG(data){
    console.log('writing to config.json');
    fs.writeFileSync('config.json' , JSON.stringify(data));
}

function addQuestions(data){

    var existing = fetchQuestions();
    
    var len = existing.questions.length;
    ++len;
    data["id"] = len;
    
    existing.questions.push(data);

    if(data.type == 'match'){
        var array = data.answer.split(','); 
        data.answer = array;
    }

    saveQuestions(existing);
        
}

console.log(fetchQuestions());

module.exports = {
    addQuestions,
    fetchQuestions,
    fetchCFG,
    saveCFG

}