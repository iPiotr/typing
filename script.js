document.addEventListener("DOMContentLoaded", () => {

    const characterLength = 40;
    let index = 0;
    let textToType = $("#input_text").val();
    let started = false;
    let currentString = textToType.substring(index, index + characterLength);

    let wordCount = 0;

    $("#textarea").focus();

    $("#typing_area").text(currentString);
    $(window).keypress(function (startEvent) {
        if (!started) {
            startApp();
            started = true;
        }
        startEvent = startEvent || window.event;
        let charCode = startEvent.which || startEvent.keyCode;
        let charTyped = String.fromCharCode(charCode);
        if (charTyped == textToType.charAt(index)) {
            if (charTyped == " ") {
                wordCount++;
                $("#wordCount").text(wordCount);
            }
            index++;
            currentString = textToType.substring(index, index + characterLength);
            $("#typing_area").text(currentString);
            $("#your_typing").append(charTyped);
            if (index == textToType.length) {
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
            $("#your_typing").append("<span class='wrong'>" + charTyped + "</span>");
            errors++;
            $("#errors").text(errors);
        }
    });

    let timer = 0;
    let wordsPerMinute = 0;
    let errors = 0;
    let intervalTimer;

    function startApp() {
        intervalTimer = setInterval(function () {
            timer++;
            $("#timer").text(timer);
            wordsPerMinute = Math.round(wordCount / (timer / 60));
            $("#wordsPerMinute").text(wordsPerMinute);
        }, 1000)
    }

    function stopApp() {
        clearInterval(intervalTimer);
        started = false;
    }

    function finishedApp() {
        alert("Congratulations!\nWords per minute: " + wordsPerMinute + "\nWordcount: " + wordCount + "\nErrors:" + errors);
    }
});