$(document).ready(function () {

    /* console.log(moment()); */ //REFERENCE
    const DAY_HOURS = 23; // # of 1 hour blocks in a day
    var hrs = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm",
        "7pm", "8pm", "9pm", "10pm", "11pm", "12am", "1am", "2am", "3am", "4am", "5am"];

    var mainContainer = $(".mainBlockPage"); // Selects main page
    var hourEntry = $(".hourEntry");
    var saveBtn = $(".saveBtn");
    var clearBtn = $(".clearBtn");
    var deleteEntryBtn = $(".deleteEntryBtn");

    saveBtn.on("click", function () {
        console.log("User pressed: Save Btn");
        var userHourEntry = hourEntry.val();
        console.log(userHourEntry);
        localStorage.setItem("userHourEntry", userHourEntry);
    })

    /* CLEAR BUTTON */
    clearBtn.on("click", function (e) {
        console.log("User pressed: Clear Btn");
        console.log($(hourEntry).attr("data-deleteMsg"));
        var hourEntryholder = hourEntry.val(); 
        hourEntry.val($(hourEntry).attr("data-deleteMsg"));
        saveBtn.css("display", "none");
        clearBtn.css("display", "none");
        deleteEntryBtn.css("display", "block");

        /* YES OR NOT DELETE ENTRY BUTTON */
        deleteEntryBtn.on("click", function (e) {
            var userChoice = e.target.innerText.toString().toLowerCase().trim();
            console.log(userChoice);
 
            if (userChoice === undefined || userChoice === NaN || userChoice === null) {
                console.log("ERROR!");
            } else if (userChoice === "yes") {
                console.log("You clicked yes!");
                hourEntry.attr("placeholder", $(hourEntry).attr("data-msg"));
                hourEntry.val("");
            } else if (userChoice === "no") {
                console.log("You clicked no!");
                hourEntry.val(hourEntryholder);
            }

            saveBtn.css("display", "block");
            clearBtn.css("display", "block");
            deleteEntryBtn.css("display", "none");
        })
    })



      
    console.log($(".mainBlockPage .row")[0]);
});