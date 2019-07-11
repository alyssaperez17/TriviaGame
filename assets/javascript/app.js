var questionsAnswers = [{
    question: "Who played the lead in 16 Candles?",
    choices: ["Debra Winger", "Michelle Pfeiffer", "Molly Ringwald", "Meg Ryan,"],
    correctAnswer: "Molly Ringwald"
}, {
    question: "What was Rizzo's first name in Grease?",
    choices: ["Debby", "Lucy", "Peggy", "Betty"],
    correctAnswer: "Betty"
}, {
    question: "What famous car was in Back to the Future?",
    choices: ["1982 Camaro", "1982 DeLorean", "1982 Vector W8", "1982 Ferrari 512BB"],
    correctAnswer: "1982 DeLorean"
}, {
    question: "What year did the Terminator arrive from?",
    choices: ["2019", "1999", "2029", "3029"],
    correctAnswer: "2029"
}, {
    question: "What was Sams dogs name on The Lost Boys?",
    choices: ["Rocky", "Nanook", "Max", "Charlie"],
    correctAnswer: "Nanook"
}];
var panel = $('#quiz-area');

$(document).on('click', '#play', function () {
    game.start();
});

$(document).on('click', '#done', function () {
    game.done();
});

var game = {
    correct: 0,
    incorrect: 0,
    counter: 45,
    countdown: function () {
        game.counter--;
        $('#counter-number').html(game.counter);

        if (game.counter === 0) {
            console.log('TIME UP');
            game.done();
        }
    },
    start: function () {
        document.getElementById('play').style.display = 'none';

        timer = setInterval(game.countdown, 1000);
        console.log("start", timer)

        $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter-number">45</span> Seconds</h2>');
        $('#start').remove();
    
        for (var i = 0; i < questionsAnswers.length; i++) {
            panel.append('<h2>' + questionsAnswers[i].question + '</h2>');
            for (var j = 0; j < questionsAnswers[i].choices.length; j++) {
                panel.append('<p><input type="checkbox" name="question' + '-' + i + '" value="' + questionsAnswers[i].choices[j] + '">' + "     " +questionsAnswers[i].choices[j] + "</p>");
            }
        }

        panel.append('<button class="btn-primary" id="done">Done</button>');
    },

    done: function() {

        $.each($("input[name='question-0']:checked"), function() {
            if ($(this).val() == questionsAnswers[0].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-1']:checked"), function() {
            if ($(this).val() == questionsAnswers[1].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-2']:checked"), function() {
            if ($(this).val() == questionsAnswers[2].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-3']:checked"), function() {
            if ($(this).val() == questionsAnswers[3].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        $.each($("input[name='question-4']:checked"), function() {
            if ($(this).val() == questionsAnswers[4].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        this.result();
    },

    result: function() {

        clearInterval(timer);
        console.log("result", timer)
         document.getElementById('play').style.display = 'block';

        $('#subwrapper h2').remove();
        panel.html('<h2>Times Up!</h2>');
        panel.append('<h3>Correct Answers: ' + this.correct + '</h3>');
        panel.append('<h3>Incorrect Answers: ' + this.incorrect + '</h3>');
        panel.append('<h3>Unanswered: ' + (questionsAnswers.length - (this.incorrect + this.correct)) + '</h3>');
    }

};