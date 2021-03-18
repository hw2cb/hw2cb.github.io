
var questions = [
{
    //1
    text: "Как присвоить переменной значение input?",
    answers: ["var name = console.log('name');", 
    "var name = document.getElementById('name').value;", 
    "var name = parseInt(name);"],
    correctAnswer: 1
},
{
    //2
    text: "Как записать в переменную выражение '2 умножить на 5'?",
    answers: ["let res = 2*5;", 
    "let res = '2*5';", 
    "let res == 2**5;"],
    correctAnswer: 0
},
{
    //3
    text: "Есть переменная k, которая содержит число. Как вывести это число пользователю?",
    answers: ["console.log(k);", 
    "var k = document.getElementById('element').value;", 
    "document.getElementById('element').innerHTML = k;"],
    correctAnswer: 2
},
{
    //4
    text: "Оператор сравнения:",
    answers: ["=", 
    "false", 
    "if"],
    correctAnswer: 2
},
{
    //5
    text: "Каким методом можно определить длину строки?",
    answers: ["Math.floor()", 
    "parseInt()", 
    "length"],
    correctAnswer: 2
},
{
    //6
    text: "Как создать массив?",
    answers: ["let arr = []", 
    "let arr = Array;", 
    "arr = [];"],
    correctAnswer: 0
},
{
    //7
    text: "С какого индекса начинается нумерация массива в JavaScript?",
    answers: ["1", 
    "0", 
    "-1"],
    correctAnswer: 1
},
{
    //8
    text: "Хочу присивоить первому элементу массива число 1, как это сделать?",
    answers: ["arr[0] = 1;", 
    "arr[1]=1;", 
    "let arr[1] = 1;"],
    correctAnswer: 0
},
{
    //9
    text: "С помощью какого метода можно регулярно, раз в секунду вызывать функцию?",
    answers: ["setInterval()", 
    "setTimeout()", 
    "length"],
    correctAnswer: 0
},
{
    //10
    text: "Существует функция summa которая принимает на вход два параметра, как правильно вызвать её и передать переменные?",
    answers: ["summa(x, y);", 
    "summa = x,y;", 
    "summa = x+y;"],
    correctAnswer: 0
},
];
var yourAnswer = new Array;
var trueAnswer = new Array;
var buff = 0;

function end()
{
    if(buff<questions.length)
    {
        closeWindow('testwindow');
    }
    else
    {
        for(i=0; i<questions.length; i++)
        {
            if(yourAnswer[i] == questions[i].correctAnswer)
            {
                //1 верно, 0 не верно
                trueAnswer[i] =1;
            }
            else
            {
                trueAnswer[i] =0;
            }
        }
        closeWindow('testwindow');
        showResultat();
    }
    buff =0;
};
function showResultat()
{
    var dialog = document.getElementById('test-resultat');
    dialog.showModal();
    var str = '';
    var score =0;
    for(i=0; i<trueAnswer.length; i++)
    {
        if(trueAnswer[i]==1)
        {
            ++score;
            str = str + 'Вопрос номер '+ parseInt(i+1) + ' вы ответили верно! <br>';
        }
        else
        {
            str = str + 'Вопрос номер '+ parseInt(i+1) + ' вы ответили не верно, правильный ответ: <br> <b>' + questions[i].answers[questions[i].correctAnswer] + ' </b> <br>';
        }
    }
    str = str + '<br> <br> Правильных: <b>' +score+ '/' + trueAnswer.length + '</br>';
    document.getElementById('text-resultats').innerHTML = str;
}
function next()
{
    var ans = document.getElementsByName('r');
    for(var i=0; i<ans.length; i++)
    {
        if(ans[i].checked)
        {
            console.log(ans[i].value);
            yourAnswer[buff] = ans[i].value;
        }
    }
    ++buff;
    if(buff>=questions.length)
    {
        end();
    }
    else
    {
        var text_question = document.getElementById('questions');
        var text_answer_1 = document.getElementById('one-answer-text');
        var text_answer_2 = document.getElementById('two-answer-text');
        var text_answer_3 = document.getElementById('three-answer-text');
        text_question.innerHTML = questions[buff].text;
        console.log('buff= ' +buff);
        text_answer_1.innerHTML = questions[buff].answers[0];
        text_answer_2.innerHTML = questions[buff].answers[1];
        text_answer_3.innerHTML = questions[buff].answers[2];
    }


};
function startTest()
{
    //отображение первого вопроса, что бы не было бага с не верным отсчетом
    var dialog = document.getElementById('testwindow');
    dialog.showModal();

    var text_question = document.getElementById('questions');
    var text_answer_1 = document.getElementById('one-answer-text');
    var text_answer_2 = document.getElementById('two-answer-text');
    var text_answer_3 = document.getElementById('three-answer-text');
    text_question.innerHTML = questions[buff].text;
    text_answer_1.innerHTML = questions[buff].answers[0];
    text_answer_2.innerHTML = questions[buff].answers[1];
    text_answer_3.innerHTML = questions[buff].answers[2];
};