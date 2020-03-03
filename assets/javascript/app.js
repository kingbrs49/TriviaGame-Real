function createQuiz(questions, quizContainer, resultsContainer, submitQuestions) {
    function showQuestions(questions, quizContainer) {
        var output = [];
        var answers;
        for (var i = 0; i < questions.length; i++) {
            answers = [];
            for (letter in questions[i].answers) {
                answers.push(
                    '<label>' + 
                    '<input type="radio" name="question' + 
                    i + 
                    '" value="' + 
                    letter + 
                    '">' + 
                    letter + 
                    ': ' + 
                    questions[i].answers[letter] + 
                    '</label>'
                );
            }
            output.push(
                '<div class="question">' + 
                questions[i].question + 
                '</div>' + 
                '<div class="answers">' + 
                answers.join('') + 
                '</div>'
            );
        }
        quizContainer.innerHTML = output.join('');
    }
    showQuestions(questions, quizContainer);

    var test;
    function countdown(minutes) {
        var seconds = 60;
        var mins = minutes;

        var timeoutHandle;
        function tick() {
            var counter = document.getElementById("timer");
            var current_minutes = mins - 1;
            seconds--;
            counter.innerHTML = current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
            if (seconds > 0) {
                test = timeoutHandle = setTimeout(tick, 1000);
            } else {
                if (mins > 1) {
                    setTimeout(function () {
                        countdown(mins - 1);
                    }, 1000);
                }
            }
        }
        tick();
    }

    countdown(4);

    function showResults(questions, quizContainer, resultsContainer) {
        clearInterval(test);
        var answerContainers = quizContainer.querySelectorAll('.answers');
        var userAnswer = '';
        var numCorrect = [];
        for (var i = 0; i < questions.length; i++) {
            userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;
            if (userAnswer === questions[i].correctAnswer) {
                numCorrect++;
                answerContainers[i].style.color = 'gold';
            }
            else {
                answerContainers[i].style.color = 'red';
            }
        }
        resultsContainer.innerHTML = '<b>' + numCorrect + '</b>' + ' out of ' + '<b>' + questions.length + '</b>';
    }

    showQuestions(questions, quizContainer);
    submitQuestions.onclick = function () {
        showResults(questions, quizContainer, resultsContainer);
        // stopCountdown();
    }
    setTimeout(clockStrikesZero, 1000 * 240);
    function clockStrikesZero() {
        showResults(questions, quizContainer, resultsContainer);
    }
}



var ninerQuestions = [
    {
        question: '<i>' + "In what YEAR (NOT season) did the 49ers win their FIRST Super Bowl title?" + '</i>',
        answers: {
            a: '<b>' + "1979" + '</b>',
            b: '<b>' + "1980" + '</b>',
            c: '<b>' + "1981" + '</b>',
            d: '<b>' + "1982" + '</b>',
            e: '<b>' + "1983" + '</b>'
        },
        correctAnswer: "d"
    },
    {
        question: '<i>' + "Which of the following 49ers quarterbacks did NOT make an appearance in a Super Bowl?" + '</i>',
        answers: {
            a: '<b>' + "Steve Young" + '</b>',
            b: '<b>' + "Alex Smith" + '</b>',
            c: '<b>' + "Colin Kaepernick" + '</b>',
            d: '<b>' + "Elvis Grbac" + '</b>',
            e: '<b>' + "Joe Montana" + '</b>'
        },
        correctAnswer: "b"
    },
    {
        question: '<i>' + "In January 1991, the 49ers were vying for a coveted 'three-peat' after winning the previous two Super Bowls. Which team stopped them in the NFC Championship?" + '</i>',
        answers: {
            a: '<b>' + "Green Bay Packers" + '</b>',
            b: '<b>' + "Dallas Cowboys" + '</b>',
            c: '<b>' + "New York Giants" + '</b>',
            d: '<b>' + "Washington Redskins" + '</b>',
            e: '<b>' + "Chicago Bears" + '</b>'
        },
        correctAnswer: "c"
    },
    {
        question: '<i>' + "At which pick in the first round of the 1985 NFL Draft was Hall of Fame Wide Receiver Jerry Rice taken?" + '</i>',
        answers: {
            a: '<b>' + "1st" + '</b>',
            b: '<b>' + "4th" + '</b>',
            c: '<b>' + "6th" + '</b>',
            d: '<b>' + "10th" + '</b>',
            e: '<b>' + "16th" + '</b>'
        },
        correctAnswer: "e"
    },
    {
        question: '<i>' + "Who is the all-time leading rusher for the 49ers?" + '</i>',
        answers: {
            a: '<b>' + "Garrison Hearst" + '</b>',
            b: '<b>' + "Joe Perry" + '</b>',
            c: '<b>' + "Frank Gore" + '</b>',
            d: '<b>' + "Roger Craig" + '</b>',
            e: '<b>' + "Carlos Hyde" + '</b>'
        },
        correctAnswer: "c"
    },
    {
        question: '<i>' + "Hall of Fame quarterback Steve Young threw for a career high in touchdowns for a season (36), and yards for a season (4,170), in which year?" + '</i>',
        answers: {
            a: '<b>' + "1998" + '</b>',
            b: '<b>' + "1997" + '</b>',
            c: '<b>' + "1996" + '</b>',
            d: '<b>' + "1995" + '</b>',
            e: '<b>' + "1994" + '</b>'
        },
        correctAnswer: "a"
    },
    {
        question: '<i>' + "The 49ers' most iconic play, known as 'The Catch', was a touchdown pass in the 1982 NFC Championship Game from Joe Montana to ..." + '</i>',
        answers: {
            a: '<b>' + "Jerry Rice" + '</b>',
            b: '<b>' + "Terrell Owens" + '</b>',
            c: '<b>' + "Roger Craig" + '</b>',
            d: '<b>' + "Dwight Clark" + '</b>',
            e: '<b>' + "Freddie Solomon" + '</b>'
        },
        correctAnswer: "d"
    },
    {
        question: '<i>' + "The 49ers beat each of the following teams in their five Super Bowl wins, EXCEPT:" + '</i>',
        answers: {
            a: '<b>' + "Cincinnati Bengals" + '</b>',
            b: '<b>' + "Miami Dolphins" + '</b>',
            c: '<b>' + "Buffalo Bills" + '</b>',
            d: '<b>' + "San Diego Chargers" + '</b>',
            e: '<b>' + "Denver Broncos" + '</b>'
        },
        correctAnswer: "c"
    },
    {
        question: '<i>' + "In 2003, the 49ers came back from a 24-point second-half deficit -- the third biggest comeback playoff victory ever -- vs. the New York Giants. Who was the 49ers' quarterback?" + '</i>',
        answers: {
            a: '<b>' + "Steve Young" + '</b>',
            b: '<b>' + "Jeff Garcia" + '</b>',
            c: '<b>' + "J.T. O'Sullivan" + '</b>',
            d: '<b>' + "David Carr" + '</b>',
            e: '<b>' + "Alex Smith" + '</b>'
        },
        correctAnswer: "b"
    },
    {
        question: '<i>' + "The play known affectionately to 49ers fans as 'The Catch II', was a last-second, game-winning touchdown pass to beat the Green Bay Packers, from Steve Young to which wide receiver?" + '</i>',
        answers: {
            a: '<b>' + "Jerry Rice" + '</b>',
            b: '<b>' + "Terrell Owens" + '</b>',
            c: '<b>' + "J.J. Stokes" + '</b>',
            d: '<b>' + "Vernon Davis" + '</b>',
            e: '<b>' + "Tai Streets" + '</b>'
        },
        correctAnswer: "b"
    },
    {
        question: '<i>' + "The last time the 49ers reached the Super Bowl was in the 2019 season. Which team did they beat for the NFC Championship, en route to the Big Game?" + '</i>',
        answers: {
            a: '<b>' + "New York Giants" + '</b>',
            b: '<b>' + "Green Bay Packers" + '</b>',
            c: '<b>' + "St. Louis Rams" + '</b>',
            d: '<b>' + "New Orleans Saints" + '</b>',
            e: '<b>' + "Atlanta Falcons" + '</b>'
        },
        correctAnswer: "b"
    },
    {
        question: '<i>' + "The last time the 49ers had the No. 1 overall pick in the NFL Draft, they took quarterback Alex Smith, from which school?" + '</i>',
        answers: {
            a: '<b>' + "University of Utah" + '</b>',
            b: '<b>' + "University of Minnesota" + '</b>',
            c: '<b>' + "University of California, Berkeley" + '</b>',
            d: '<b>' + "University of Oregon" + '</b>',
            e: '<b>' + "University of Southern California" + '</b>'
        },
        correctAnswer: "a"
    },
    {
        question: '<i>' + "Which NFL quarterback famously grew up as a San Francisco 49ers, and Joe Montana, fan?" + '</i>',
        answers: {
            a: '<b>' + "Aaron Rodgers" + '</b>',
            b: '<b>' + "Tom Brady" + '</b>',
            c: '<b>' + "Philip Rivers" + '</b>',
            d: '<b>' + "Drew Brees" + '</b>',
            e: '<b>' + "Ryan Fitzpatrick" + '</b>'
        },
        correctAnswer: "b"
    },
    {
        question: '<i>' + "The following defensive players were picked in the first round of the NFL Draft by the 49ers since 2010, EXCEPT:" + '</i>',
        answers: {
            a: '<b>' + "Solomon Thomas" + '</b>',
            b: '<b>' + "DeForest Buckner" + '</b>',
            c: '<b>' + "Nick Bosa" + '</b>',
            d: '<b>' + "Patrick Willis" + '</b>',
            e: '<b>' + "Eric Reid" + '</b>'
        },
        correctAnswer: "d"
    },
    {
        question: '<i>' + "The following celebrities are well-known as being San Francisco 49ers fans, EXCEPT:" + '</i>',
        answers: {
            a: '<b>' + "Actor, Danny Glover" + '</b>',
            b: '<b>' + "Supermodel, Marisa Miller" + '</b>',
            c: '<b>' + "NBA Superstar, Stephen Curry" + '</b>',
            d: '<b>' + "Actress, Jennifer Garner" + '</b>',
            e: '<b>' + "Comedian, Andy Samberg" + '</b>'
        },
        correctAnswer: "c"
    },
    {
        question: '<i>' + "Which head coach has the highest winning percentage in 49ers franchise history?" + '</i>',
        answers: {
            a: '<b>' + "Jim Harbaugh" + '</b>',
            b: '<b>' + "George Seifert" + '</b>',
            c: '<b>' + "Bill Walsh" + '</b>',
            d: '<b>' + "Steve Mariucci" + '</b>',
            e: '<b>' + "Buck Shaw" + '</b>'
        },
        correctAnswer: "b"
    },
    {
        question: '<i>' + "Which famous cheerleader-turned-celebrity used to cheer on the sidelines for the 49ers?" + '</i>',
        answers: {
            a: '<b>' + "Sara Shahi" + '</b>',
            b: '<b>' + "Charisma Carpenter" + '</b>',
            c: '<b>' + "Stacy Keibler" + '</b>',
            d: '<b>' + "Kiana Tom" + '</b>',
            e: '<b>' + "Teri Hatcher" + '</b>'
        },
        correctAnswer: "e"
    },
    {
        question: '<i>' + "What is the name of the 49ers' mascot?" + '</i>',
        answers: {
            a: '<b>' + "Golden Gate Gus" + '</b>',
            b: '<b>' + "Sourdough Sam" + '</b>',
            c: '<b>' + "Chowder Charlie" + '</b>',
            d: '<b>' + "Prospector Pete" + '</b>',
            e: '<b>' + "Ghirardelli Gary" + '</b>'
        },
        correctAnswer: "b"
    },
    {
        question: '<i>' + "In the 1994 season, the 49ers' most iconic figures -- quarterbacks Steve Young and Joe Montana -- faced off in an unprecedented regular season game. Young played for San Francisco; who did Montana play for?" + '</i>',
        answers: {
            a: '<b>' + "Minnesota Vikings" + '</b>',
            b: '<b>' + "Buffalo Bills" + '</b>',
            c: '<b>' + "Washington Redskins" + '</b>',
            d: '<b>' + "Kansas City Chiefs" + '</b>',
            e: '<b>' + "Tampa Bay Buccaneers" + '</b>'
        },
        correctAnswer: "d"
    },
    {
        question: '<i>' + "In which round was Hall of Fame quarterback Joe Montana selected in the 1979 NFL Draft?" + '</i>',
        answers: {
            a: '<b>' + "1st" + '</b>',
            b: '<b>' + "2nd" + '</b>',
            c: '<b>' + "3rd" + '</b>',
            d: '<b>' + "4th" + '</b>',
            e: '<b>' + "5th" + '</b>'
        },
        correctAnswer: "c"
    },
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

createQuiz(ninerQuestions, quizContainer, resultsContainer, submitButton);