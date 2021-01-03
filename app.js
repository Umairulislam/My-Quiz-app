// QUIZ APP

var result = [];
var sum = 0;
var j = 0;
var quiz = [
    {
        question: "Q1. OS computer abbreviation usually means ?",
        option: [{ ans: "Operating System" }, "Optical Sensor", "Open Software"]
    },
    {
        question: "Q2. Which of the following programming language is used to create programs like applets?",
        option: ["Javascript", { ans: "Java" }, "Python"]
    },
    {
        question: "Q3. Firewall in computer is used for?",
        option: ["Transaction", "Authentication", { ans: "Security" }]
    },
    {
        question: "Q4. .gif is an extension of ?",
        option: [{ ans: "Image file" }, "Video file", "Audio file"]
    },
    {
        question: "Q5. How many colors are there in google logo?",
        option: ["2", { ans: "4" }, "3"]
    },
    {
        question: "Q6. Who is the present President of the United states ?",
        option: ["Donal trump", "Henry clinton", { ans: "Joe biden" }]
    },
    {
        question: "Q7. Which of these is not a peripheral, in computer terms ?",
        option: [{ ans: "Motherboard" }, "Monitor", "Keyboard"]
    },
    {
        question: "Q8. What does the Internet prefix WWW stand for ?",
        option: ["Wide Width Wickets",{ ans: "World Wide Web" }, "Worldwide Weather"]
    }
];
var quizDiv = document.getElementById("quiz-ques");

function quest_render() {
    // Quiz Question
    var p = document.createElement("p");
    var ques = document.createTextNode(quiz[j].question);
    p.appendChild(ques);
    quizDiv.appendChild(p);
    var ul = document.createElement("ul");
    quizDiv.appendChild(ul);

    // Quiz Option

    for (var i = 0; i < quiz[j].option.length; i++) {
        var li = document.createElement("li");
        var input = document.createElement("input");
        input.setAttribute("name", "option");
        input.setAttribute("type", "radio");
        input.setAttribute("class", "checkbox");
        if (quiz[j].option[i].ans) {
            input.setAttribute("id", "correct_ans");
            var option = document.createTextNode(quiz[j].option[i].ans);
        } else {
            var option = document.createTextNode(quiz[j].option[i]);
        }
        li.appendChild(input);
        li.appendChild(option);
        ul.appendChild(li);
    }
    var button = document.createElement("button");
    var buttonTxt = document.createTextNode("Next");
    button.setAttribute('class', "btn-next")
    button.appendChild(buttonTxt);
    button.setAttribute("onclick", "getAnswer()");
    quizDiv.appendChild(button);
    j++;
}

quest_render();


// Functionality

function getAnswer() {
    var ans = document.getElementById("correct_ans");
    if (ans.checked) {
        result.push(5);
    } else {
        result.push(0);
    }
    quizDiv.innerHTML = null
    if (quiz.length > j) {
        quest_render();
    } else {
        result.map(function (value, index) {
            var h = document.createElement("h2");
            var hTxt = document.createTextNode("Question" + (index + 1) + ": " + value);
            h.appendChild(hTxt);
            quizDiv.appendChild(h);
        }
        )
        result.map(function (a) {
            sum += a
        });
        var h2 = document.createElement("h2");
        var hTxt2 = document.createTextNode("Percentage: " + (sum / 40 * 100));
        h2.appendChild(hTxt2)
        quizDiv.appendChild(h2)
    }
}

