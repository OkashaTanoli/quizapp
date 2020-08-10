var a = 0
var b = 1
var c = 0
var stop;
var questions = [
    // Q # 1
    {
        question:"Who is founder of Pakistan?",
        name:"founder",
        answers:[
            "Quaid-e-Azam",
            "Imran Khan",
            "Bilawal Bhutto",
            "Allama Iqbal"
        ]
    },
        // Q # 2
    {
        question:"What is the name of our Prime Minister?",
        name:"username",
        answers:[
            "Nawaz Sharif",
            "Bilawal Bhutoo",
            "Imran Khan ",
            "Arif Alwi"
        ]
    },
        // Q # 3
    {
        question:"What color do about 75 percent of national flags contain?",
        name:"color",
        answers:[
            "Blue",
            "Green",
            "Red",
            "Yellow"
        ]
    },
        // Q # 4
    {
        question:"According to the United Nations, how many countries are there in Europe?",
        name:"countries",
        answers:[
            "45",
            "44",
            "55",
            "49"
        ]
    },
        // Q # 5
    {
        question:'Identify the tense used in the statement, "I will wait for you".',
        name:"tense",
        answers:[
            "Future Simple",
            "Future Perfect",
            "Future progressive",
            "Past perfect progressive"
        ]
    },
        // Q # 6
    {
        question:'What is the capital of Ukraine?',
        name:"capital",
        answers:[
            "Minsk",
            "Belarus",
            "Kiev",
            "Tashkent"
        ]
    },
        // Q # 7
    {
        question:"Which of these animals is a marsupial?",
        name:"marsupial",
        answers:[
            "Manatee",
            "Bat",
            "Gecko",
            "Kangaroo"
        ]
    },
        // Q # 8
    {
        question:"What continent is Japan part of ?",
        name:"continent",
        answers:[
            "Asia",
            "Africa",
            "Europe",
            "South America"
        ]
    },
        // Q # 9
    {
        question:"What colour do you get if you mix blue and yellow?",
        name:"Mixing",
        answers:[
            "Red",
            "Orange",
            "Purple",
            "Green"
        ]
    },
        // Q # 10
    {
        question:"What is the capital of Germany?",
        name:"Germany",
        answers:[
            "Vienna",
            "Berlin",
            "Brussels",
            "Wellington"
        ]
    },
        // Q # 11
    {
        question:"Which is the smallest country in the world?",
        name:"Smallestcountry",
        answers:[
            "Vatican City",
            "Monaco",
            "Nauru",
            "Tuvalu"
        ]
    },
        // Q # 12
    {
        question:"Who won the FIFA Women's World Cup in 2019?",
        name:"worldcup",
        answers:[
            "USA",
            "France",
            "Japan",
            "North Korea"
        ]
    },
        // Q # 13
    {
        question:"Faizan is a graceful dancer.<br>(Select Adjective)",
        name:"dancer",
        answers:[
            "Faizan",
            "dancer",
            "is",
            "graceful"
        ]
    },
        // Q # 14
    {
        question:"Emily loves her shaggy puppy.<br>(Select Adjective)",
        name:"puppy",
        answers:[
            "Emily",
            "puppy",
            "loves",
            "shaggy"
        ]
    },
        // Q # 15
    {
        question:"Ahmed worked briefly on his report.<br>(Select Adverb)",
        name:"report",
        answers:[
            "report",
            "briefly",
            "her",
            "worked"
        ]
    },
        // Q # 16
    {
        question:"Ali shouted angrily at his sister.<br>(Select Adverb)",
        name:"shouted",
        answers:[
            "shouted",
            "sister",
            "angrily",
            "his"
        ]
    },
        // Q # 17
    {
        question:"Are you going there <br>(Put correct punctuation)",
        name:"punctuation",
        answers:[
            ". [Period]",
            "? [question mark]",
            "! [exclamation mark]",
            ": [Colun]"
        ]
    },
        // Q # 18
    {
        question:"How does carbon get into the soil?",
        name:"carbon",
        answers:[
            "when the plant dies",
            "when the animal dies",
            "when the human dies",
            "all of the above"
        ]
    },
        // Q # 19
    {
        question:"Solve by Qyadratic Equ: <br> x<sup>2</sup> - 9x + 8 = 0",
        name:"solve",
        answers:[
            "x = {1, 8}",
            "x = {-1, 8}",
            "x = {-1, -8}",
            "x = {1, -8}"
        ]
    },
        // Q # 20
    {
        question:"Solve by Qyadratic Equ: <br> z<sup>2</sup> - z - 20 = 0",
        name:"solve2",
        answers:[
            "z = {-4, 5}",
            "z = {-5, 4}",
            "z = {-5, -4}",
            "z = {-20, 1}"
        ]
    },
        // Q # 21
    {
        question:"DNA stands for",
        name:"dna",
        answers:[
            "deoxyribonucleic access",
            "deoxyribonucleic acid",
            "deoxyribonucleic acetate",
            "deoxyribonucleic atom"
        ]
    },
        // Q # 22
    {
        question:"Choose corret spelling",
        name:"spelling",
        answers:[
            "logorria",
            "logorrhea",
            "logorreha",
            "logorriya"
        ]
    },
        // Q # 23
    {
        question:"Choose corret spelling",
        name:"spelling2",
        answers:[
            "rapport",
            "rappurt",
            "rappourt",
            "rappart"
        ]
    },
        // Q # 24
        {
            question:"what is the name of alkane having 7 carbon atoms",
            name:"alkane",
            answers:[
                "hexane",
                "pentane",
                "heptane",
                "decane"
            ]
        },
            // Q # 25
        {
            question:"which of the following are open source Operating Systems(OS)?",
            name:"os",
            answers:[
                "IOS and Window",
                "Android and Window",
                "Linux and IOS",
                "Android and Linux"
            ]
        },

    
]

var correctAnswers = [0,2,2,1,0,2,3,0,3,1,0,0,3,3,1,2,1,3,0,0,1,1,0,2,3]



function changeDiv(){
    
    var button = document.getElementById("button")
    button.setAttribute("class","none")
    var questionHead = document.getElementById("questionHead")
    questionHead.innerHTML = "Question" + " " +  b + " /" + " " + questions.length

    var question = document.getElementById("question")
    question.innerHTML = questions[a].question

    var inputDiv = document.getElementById("inputDiv")
    inputDiv.innerHTML = `<input type = 'radio' class = 'check' id = 'input1' name = ${questions[a].name}>
                          <label for = 'input1' id = 'label'>${questions[a].answers[0]}</label><br>
                          <input type = 'radio' class = 'check' id = 'input2' name = ${questions[a].name}>
                          <label for = 'input2' id = 'label'>${questions[a].answers[1]}</label><br>
                          <input type = 'radio' class = 'check' id = 'input3' name = ${questions[a].name}>
                          <label for = 'input3' id = 'label'>${questions[a].answers[2]}</label><br>
                          <input type = 'radio' class = 'check' id = 'input4' name = ${questions[a].name}>
                          <label for = 'input4' id = 'label'>${questions[a].answers[3]}</label>`

    var buttonNextDiv = document.getElementById("buttonNextDiv")
    buttonNextDiv.innerHTML = ""

    var buttonNextDiv = document.getElementById("buttonNextDiv")
    var buttonNextCreate = document.createElement("button")
    buttonNextCreate.setAttribute("class","buttonNext")
    var buttonNextCreateNode = document.createTextNode("Next")
    buttonNextCreate.appendChild(buttonNextCreateNode)
    buttonNextDiv.appendChild(buttonNextCreate)
    
    
    // var className = document.getElementsByClassName("check")

    //    if(className[questions[a].correct].checked === true){
    //         c++
    //   }
    //   else{
    //       alert("hello")
    //   }

    buttonNextCreate.setAttribute("onclick","mashUp()")

    // a++
    // b++
}




var sec1 = 0
var sec2 = 0



function timer(){
    var secondZero = document.getElementById("second-Zero")
    var firstZero = document.getElementById("first-Zero")
    var colun = document.getElementById("colun")
    secondZero.innerHTML = ++sec1
     if(secondZero.innerHTML > 59){
        secondZero.innerHTML = 0
         firstZero.innerHTML = ++sec2
         sec1 = 0
     }
     if(firstZero.innerHTML === "6"){
         secondZero.setAttribute("class","changeColor")
         firstZero.setAttribute("class","changeColor")
         colun.setAttribute("class","changeColor")

     }

     if(firstZero.innerHTML === "7"){
          extraDiv()
     }
}

function overall(){
    stop = setInterval(timer,1000)
    changeDiv()
}

function mashUp(){

    
    var className = document.getElementsByClassName("check")
    if(className[correctAnswers[a]].checked === true){
         c++
   }

   a++
   b++
   
    if(a > questions.length-1){
        extraDiv()
    }
    else{
        changeDiv()
    }
}

function extraDiv(){
    clearInterval(stop)
    var firstZero = document.getElementById("first-Zero")
    var secondZero = document.getElementById("second-Zero")

    var secondRow = document.getElementById("second-Row")
    secondRow.setAttribute("class","secondTimeRow")
    var questionHead = document.getElementById("questionHead")
    var question = document.getElementById("question")
    var inputDiv = document.getElementById('inputDiv')
    var buttonNextDiv = document.getElementById("buttonNextDiv")
    questionHead.innerHTML = ""
    question.innerHTML = ""
    inputDiv.innerHTML = ""
    buttonNextDiv.innerHTML = ""
    // secondRow.innerHTML = ""

    var promp = prompt("Enter your name")
    
    // var firstZero = document.getElementById("first-Zero")
    // var secondZero = document.getElementById("second-Zero")


    var Resultdiv = document.createElement("div")
    Resultdiv.setAttribute("class","resultHead")
    var ResultdivNode = document.createTextNode("Result")

    var userName = document.createElement("div")
    userName.setAttribute("class","settingResult")
    var userNameNode = document.createTextNode("Students's Name :" + " " + promp)

    var ResultTotalQuesdiv = document.createElement("div")
    ResultTotalQuesdiv.setAttribute("class","settingResult")
    var ResultTotalQuesdivNode = document.createTextNode("Total Questions : " + " " + questions.length)

    var ResultTotalNumdiv = document.createElement("div")
    ResultTotalNumdiv.setAttribute("class","settingResult")
    var ResultTotalNumdivNode = document.createTextNode("Correct Answers : " + " " + c)

    var percentage = c*100/questions.length
    var fixper = percentage.toFixed(2)
    var ResultPercentdiv = document.createElement("div")
    ResultPercentdiv.setAttribute("class","settingResult")
    var ResultPercentdivNode = document.createTextNode("Your Percentage : " + " " + fixper + "% ")
    
    var ResultTimeTakendiv = document.createElement("div")
    ResultTimeTakendiv.setAttribute("class","settingResult")
    var ResultTimeTakendivNode = document.createTextNode("Time Taken :" + " (" + firstZero.innerHTML + " " + ":" + " " + secondZero.innerHTML + ") " + "/ (5:00)")
    
    var grade = document.createElement("div")
    grade.setAttribute("class","settingResult")
    var gradeNode;
    if(percentage >= 80){
         gradeNode = document.createTextNode("Grade :" + " " + "A-1 (Pass)" )
    }
    else if(percentage >= 70 && percentage <= 80 ){
         gradeNode = document.createTextNode("Grade :" + " " + "A (Pass)" )
    }
    else if(percentage >= 60 && percentage <= 70 ){
         gradeNode = document.createTextNode("Grade :" + " " + "B (Pass)" )
    }
    else if(percentage >= 50 && percentage <= 60 ){
         gradeNode = document.createTextNode("Grade :" + " " + "C (Pass)" )
    }
    else if(percentage >= 40 && percentage <= 50 ){
         gradeNode = document.createTextNode("Grade :" + " " + "D (Pass)" )
    }
    else if(percentage <= 40){
         gradeNode = document.createTextNode("Grade :" + " " + "Fail" )
    }



    
    var tryAgainDiv = document.createElement("div")
    tryAgainDiv.setAttribute("class","tryAgainDiv")

    
    var link = document.createElement("a")
    link.setAttribute("class","link")
    link.setAttribute("href","")
    var tryAgainNode = document.createTextNode("Retry")



    Resultdiv.appendChild(ResultdivNode)
    userName.appendChild(userNameNode)
    ResultTotalQuesdiv.appendChild(ResultTotalQuesdivNode)
    ResultTotalNumdiv.appendChild(ResultTotalNumdivNode)
    ResultPercentdiv.appendChild(ResultPercentdivNode)
    ResultTimeTakendiv.appendChild(ResultTimeTakendivNode)
    grade.appendChild(gradeNode)
    // tryAgain.appendChild(tryAgainNode)
    link.appendChild(tryAgainNode)
    // tryAgain.appendChild(link)
    tryAgainDiv.appendChild(link)
    
    

    secondRow.appendChild(Resultdiv)
    secondRow.appendChild(userName)
    secondRow.appendChild(ResultTotalQuesdiv)
    secondRow.appendChild(ResultTotalNumdiv)
    secondRow.appendChild(ResultPercentdiv)
    secondRow.appendChild(ResultTimeTakendiv)
    secondRow.appendChild(grade)
    secondRow.appendChild(tryAgainDiv)

    firstZero.innerHTML = "0"
    secondZero.innerHTML = "0"
}
