document.addEventListener("DOMContentLoaded", () => {
    
    let characterLength = 60;
    let started = false;
    let wordCount = 0;
    let index = 0;

    const sentences = [
        "Pig slowly present duck table drive carefully youth letter sweet heard chest least zoo then usual plate castle wolf freedom design minerals center lay.",
        "Bear were mainly giving race gold friendly education noted shallow leaving least may swept satellites from frozen rest try situation current my some ear.",
        "Movie pie tonight warn tune spider hot older snake tie immediately exciting idea will experience getting electricity then work fall funny apple route thrown.",
        "Sleep curve bat lift anybody gun lady whatever elephant shells character have manner establish putting heat national took knowledge morning ever though various sum.",
        "Screen variety respect purpose buried lucky brass early follow plant noon spell group hall game traffic butter troops slipped national library ancient strange wooden.",
        "Charge atomic quiet declared does military establish studying yard farm plenty at skill put folks balance want piano origin stop season sense forget weigh.",
        "Tape product throw teach alive quickly path fix hurry prove scientist perfectly laugh no dawn effect further thee problem condition south lack heavy shown.",
        "Realize effect pipe feathers rice naturally search alike express drew grabbed lead degree mouth harbor worried clean anything getting held managed individual medicine carry.",
    ];

    let randomSentence = sentences[Math.floor(Math.random() + sentences.length)];
    let sentenceToType = randomSentence;
    let currentString = sentenceToType.substring(index, index + characterLength);


    $("#textarea").focus();
    $("#typing_area").text(currentString);
    $(window).keypress(startEvent => {
        if (!started) {
            startApp();
            started = true;
        }

        startEvent = startEvent || window.event;
        let charCode = startEvent.which || startEvent.keyCode;
        let charTyped = String.fromCharCode(charCode);
        
        if (charTyped == sentenceToType.charAt(index)) {
            if (charTyped == " ") {
                wordCount++;
                $("#wordCount").text(wordCount);
            }
            index++;
            currentString = sentenceToType.substring(index, index + characterLength);
            $("#typing_area").text(currentString);
            $("#your_typing").append(charTyped);
            
            if (index == sentenceToType.length) {
                wordCount++;
                $("#wordCount").text(wordCount);
                $("#timer").text(timer);
                if (timer == 0) {
                    timer = 1;
                }
                wordsPerMinute = Math.round(wordCount / (timer / 60));
                $("#wordsPerMinute").text(wordsPerMinute);
                stopApp();
                finishedApp();
            }
        } else {
            $("#your_typing").append(`<span class='wrong'>${charTyped}</span>`);
            errors++;
            $("#errors").text(errors);
        }
    });

    let timer = 0;
    let wordsPerMinute = 0;
    let errors = 0;
    let intervalTimer;

    const startApp = () => {
        intervalTimer = setInterval(() => {
            timer++;
            $("#timer").text(timer);
            wordsPerMinute = Math.round(wordCount / (timer / 60));
            $("#wordsPerMinute").text(wordsPerMinute);
        }, 1000)
    }

    const stopApp = () => {
        clearInterval(intervalTimer);
        started = false;
    }

    const finishedApp = () => {
        alert(`
        Congratulations!
        Words per minute: ${wordsPerMinute}
        Wordcount: ${wordCount} 
        Errors: ${errors}`);
        location.reload();
    }
});