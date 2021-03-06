$(document).ready(function () {

    /* console.log(moment()); */ //REFERENCE
    const DAY_HOURS = 23; // # of 1 hour blocks in a day
    /* Hours String Array */
    var hrs = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm",
        "7pm", "8pm", "9pm", "10pm", "11pm", "12am", "1am", "2am", "3am", "4am", "5am"];

    /*    var hrs_digits = ["6", "7", "8", "9", "10", "11", "12", "1", "2", "3", "4", "5", "6",
           "7", "8", "9", "10", "11", "12", "1", "2", "3", "4", "5"];
        */
    var mainContainer = $(".mainBlockPage"); // Sets MainContainer to hold generated hour blocks

    var warningTriangle = $(`<svg class="bi bi-exclamation-triangle" width="2em" height="2em" viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M7.938 2.016a.146.146 0 00-.054.057L1.027 13.74a.176.176 0 00-.002.183c.016.03.037.05.054.06.015.01.034.017.066.017h13.713a.12.12 0 00.066-.017.163.163 0 00.055-.06.176.176 0 00-.003-.183L8.12 2.073a.146.146 0 00-.054-.057A.13.13 0 008.002 2a.13.13 0 00-.064.016zm1.044-.45a1.13 1.13 0 00-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z" clip-rule="evenodd"/>
                            <path d="M7.002 12a1 1 0 112 0 1 1 0 01-2 0zM7.1 5.995a.905.905 0 111.8 0l-.35 3.507a.552.552 0 01-1.1 0L7.1 5.995z"/>
                            </svg>`);

    var saveIcon = $(`<svg class="bi bi-check-circle" width="1.8em" height="1.8em" viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M15.354 2.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3-3a.5.5 0 11.708-.708L8 9.293l6.646-6.647a.5.5 0 01.708 0z" clip-rule="evenodd"/>
    <path fill-rule="evenodd" d="M8 2.5A5.5 5.5 0 1013.5 8a.5.5 0 011 0 6.5 6.5 0 11-3.25-5.63.5.5 0 11-.5.865A5.472 5.472 0 008 2.5z" clip-rule="evenodd"/>
  </svg>`);

    var entryArry = [];
    var loadArry = [];

    var currentHr = moment().format("ha"); // SPITS OUT CURRENT HOUR
    var currentHr_HH_Format = parseInt(moment().format("H"));
    var currentDay = moment().format("MMMM Do YYYY");

    $("#currentDay").text(currentDay);
    function pageLoad() {



        for (var i = 0; i < DAY_HOURS; i++) { // Loops through all of Hours of the day and sets blocks per index
            mainContainer
                .append("<div>")
                .find("div:last")
                .addClass(`row rowBlock rowBlock${i} col col-12 col-sm-12 col-md-12 col-lg-12 mb-3 mt-3`); // Creates Row block
            $(`.rowBlock${i}`)
                .append(`<div><svg class="bi bi-watch pb-1" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M4 14.333v-1.86A5.985 5.985 0 012 8c0-1.777.772-3.374 2-4.472V1.667C4 .747 4.746 0 5.667 0h4.666C11.253 0 12 .746 12 1.667v1.86A5.985 5.985 0 0114 8a5.985 5.985 0 01-2 4.472v1.861c0 .92-.746 1.667-1.667 1.667H5.667C4.747 16 4 15.254 4 14.333zM13 8A5 5 0 103 8a5 5 0 0010 0z" clip-rule="evenodd"/>
                        <rect width="1" height="2" x="13.5" y="7" rx=".5"/>
                        <path fill-rule="evenodd" d="M8 4.5a.5.5 0 01.5.5v3a.5.5 0 01-.5.5H6a.5.5 0 010-1h1.5V5a.5.5 0 01.5-.5z" clip-rule="evenodd"/>
                        </svg> ${hrs[i]}</div>`)
                .find("div:last")
                .addClass(`hour hour${i} col col-12 col-sm-12 col-md-1 col-lg-1`) // Creates LEFT hour block
                .attr("warning-symbol", warningTriangle);
            $(`.hour${i}`)
                .attr("data-timeFrame", "past"); // Sets data attributes for hour block above
            $(`.rowBlock${i}`)
                .append(`<input />`)
                .find("input")
                .addClass(`hourEntry hourEntry${i} col col-12 col-sm-12 col-md-9 col-lg-9`);
            $(`.hourEntry${i}`)
                .attr({ // Setting multiple attributes to hour entry block
                    "data-deleteMsg": `Are you sure you would like to delete entry?`,
                    "data-msg": "Type entry here",
                    "placeholder": "Type entry here"
                });
            $(`.rowBlock${i}`)
                .append(`<button><svg class="bi bi-check" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z" clip-rule="evenodd"/>
                    </svg> Yes</button>`)
                .find("button:nth-of-type(1)")
                .addClass(`btn btn-sm deleteEntryBtn deleteEntryBtn${i} col-6 col-sm-6 col-md-1 col-lg-1 bg-success text-white`)
                .attr("data-btnIndex", `${i}`); // Creates yes btn
            $(`.rowBlock${i}`)
                .append(` <button><svg class="bi bi-x-square" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M14 1H2a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V2a1 1 0 00-1-1zM2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2z" clip-rule="evenodd"/>
                    <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z" clip-rule="evenodd"/>
                    <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z" clip-rule="evenodd"/>
                    </svg> No</button>`)
                .find("button:nth-of-type(2)")
                .addClass(`btn btn-sm deleteEntryBtn deleteEntryBtn${i} col-6 col-sm-6 col-md-1 col-lg-1 bg-danger text-white`)
                .attr("data-btnIndex", `${i}`); // Creates no btn
            $(`.rowBlock${i}`)
                .append(` <button type="button" ><svg class="bi bi-folder-check" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M9.828 4H2.19a1 1 0 00-.996 1.09l.637 7a1 1 0 00.995.91H9v1H2.826a2 2 0 01-1.991-1.819l-.637-7a1.99 1.99 0 01.342-1.31L.5 3a2 2 0 012-2h3.672a2 2 0 011.414.586l.828.828A2 2 0 009.828 3h3.982a2 2 0 011.992 2.181L15.546 8H14.54l.265-2.91A1 1 0 0013.81 4H9.828zm-2.95-1.707L7.587 3H2.19c-.24 0-.47.042-.684.12L1.5 2.98a1 1 0 011-.98h3.672a1 1 0 01.707.293z" clip-rule="evenodd"/>
                    <path fill-rule="evenodd" d="M15.854 10.146a.5.5 0 010 .708l-3 3a.5.5 0 01-.708 0l-1.5-1.5a.5.5 0 01.708-.708l1.146 1.147 2.646-2.647a.5.5 0 01.708 0z" clip-rule="evenodd"/>
                    </svg> Save</button>`)
                .find("button:nth-of-type(3)")
                .addClass(`col-6 col-offset-2 btn saveBtn saveBtn${i} pageBtn col-sm-6 col-md-1 col-lg-1`)
                .attr("data-btnIndex", `${i}`); // Creates save btn
            $(`.rowBlock${i}`)
                .append(` <button><svg class="bi bi-trash clearIcon" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.5 5.5A.5.5 0 016 6v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1 0v6a.5.5 0 001 0V6z"/>
                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 01-1 1H13v9a2 2 0 01-2 2H5a2 2 0 01-2-2V4h-.5a1 1 0 01-1-1V2a1 1 0 011-1H6a1 1 0 011-1h2a1 1 0 011 1h3.5a1 1 0 011 1v1zM4.118 4L4 4.059V13a1 1 0 001 1h6a1 1 0 001-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" clip-rule="evenodd"/>
                        </svg> Clear </button>`)
                .find("button:last")
                .addClass(`col-6 btn clearBtn clearBtn${i} pageBtn col-sm-6 col-md-1 col-lg-1`)
                .attr("data-btnIndex", `${i}`);// Creates clear btn which triggers yes/no btns above
        }

        loadEntries();
        rowColorScheme();
    }

    function rowColorScheme() {

        /* MOMENT JS  
    Midnight(12: 00 AM)-- 0000 hrs
    1: 00 AM  -- 0100 hrs - 0
    2: 00 AM  -- 0200 hrs - 1
    3: 00 AM  -- 0300 hrs - 2
    4: 00 AM  -- 0400 hrs - 3
    5: 00 AM  -- 0500 hrs - 4
    6: 00 AM  -- 0600 hrs - 5   - Day start
    7: 00 AM  -- 0700 hrs - 6
    8: 00 AM  -- 0800 hrs - 7
    9: 00 AM  -- 0900 hrs - 8
    10: 00 AM -- 1000 hrs - 9
    11: 00 AM -- 1100 hrs - 10
    12: 00 PM -- 1200 hrs - 11
    1: 00 PM  -- 1300 hrs - 12
    2: 00 PM  -- 1400 hrs - 13
    3: 00 PM  -- 1500 hrs - 14
    4: 00 PM  -- 1600 hrs - 15
    5: 00 PM  -- 1700 hrs - 16
    6: 00 PM  -- 1800 hrs - 17
    7: 00 PM  -- 1900 hrs - 18
    8: 00 PM  -- 2000 hrs - 19
    9: 00 PM  -- 2100 hrs - 20
    10: 00 PM -- 2200 hrs - 21
    11: 00 PM -- 2300 hrs - 22  */

        var userHrIndex;
        for (var x = 0; x < DAY_HOURS; x++) {
            if ($(`.hour${x}`).text().trim("") === currentHr) {
                parseInt(userHrIndex = x);
                console.log(`userHrIndex = ${x}`);

            } else { console.log("nope") }
        }


        console.log(`THIS IS USER'S CURRENT HOUR INDEX: ${userHrIndex} and is ${typeof (userHrIndex)}`);


        for (var i = 0; i <= DAY_HOURS; i++) {
            if (userHrIndex === i) {
                $(`.hourEntry${i}`).addClass("present");
                console.log(`${userHrIndex} EQUALS === ${i}`);

            } else if (userHrIndex < i) {
                $(`.hourEntry${i}`).addClass("future");

            } else if (userHrIndex > i) {
                $(`.hourEntry${i}`).addClass("past");


            }
        }
    }
    pageLoad(); // Loads and generates hour blocks

    var hour = $(".hour"); // Grabs LEFT hour block
    var hourEntry = $(".hourEntry"); // Grabs MIDDLE data entry block
    var saveBtn = $(".saveBtn");     // Grabs RIGHT save button
    var clearBtn = $(".clearBtn");   // Grabs RIGHT clear button
    var deleteEntryBtn = $(".deleteEntryBtn"); // Grabs HIDDEN RIGHT delete button
    var userHourEntry;
    var btnIndex;

    function loadEntries() {
        /* if (localStorage.length === 0 || localStorage.getItem("userHourEntryArray") === undefined || localStorage.getItem("userHourEntryArray") === null) { */

        

        if (localStorage.getItem("userHourEntryArry") === null) {
            entryArry = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",
                "", "", "", "", ""];
            JSON.stringify(entryArry); 
            localStorage.setItem("userHourEntryArry", entryArry);
            console.log(`ARRAY IS EMPTY: ${entryArry}`);
        } else {
            entryArry = JSON.parse(localStorage["userHourEntryArry"]);
            loadArry = JSON.parse(localStorage["userHourEntryArry"]);
            console.log(`This is the previously populated/saved array: ${loadArry}`);
            for (var i = 0; i < DAY_HOURS; i++) {
                $(`.hourEntry${i}`).val(loadArry[i]);
            }
        }
    }
  
    /* SHOULD'VE USED THIS INSTEAD OF ABOVE GENERATED CODE */

    $(document).on("click", ".saveBtn", function () {
        btnIndex = parseInt($(this).attr("data-btnIndex"));
        console.log(`User pressed: Save Btn - Index No. : ${btnIndex}`);
        userHourEntry = $(`.hourEntry${btnIndex}`).val();
        entryArry[btnIndex] = userHourEntry;
        console.log(`WHAT ${entryArry}`);
        loadArry = JSON.stringify(entryArry);////////////////////////////////////////
        localStorage.setItem("userHourEntryArry", loadArry);
        console.log(`Index: ${btnIndex} is --> ${userHourEntry} : Inside array: ${loadArry}`);

        $(`.hour${btnIndex}`).html(saveIcon);
        $(`.hour${btnIndex}`).css("background-color", "green");
        setTimeout(() => {
            var hourDefaultText = $(`<div><svg class="bi bi-watch pb-1" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M4 14.333v-1.86A5.985 5.985 0 012 8c0-1.777.772-3.374 2-4.472V1.667C4 .747 4.746 0 5.667 0h4.666C11.253 0 12 .746 12 1.667v1.86A5.985 5.985 0 0114 8a5.985 5.985 0 01-2 4.472v1.861c0 .92-.746 1.667-1.667 1.667H5.667C4.747 16 4 15.254 4 14.333zM13 8A5 5 0 103 8a5 5 0 0010 0z" clip-rule="evenodd"/>
            <rect width="1" height="2" x="13.5" y="7" rx=".5"/>
            <path fill-rule="evenodd" d="M8 4.5a.5.5 0 01.5.5v3a.5.5 0 01-.5.5H6a.5.5 0 010-1h1.5V5a.5.5 0 01.5-.5z" clip-rule="evenodd"/>
            </svg> ${hrs[btnIndex]} </div>`);

            $(`.hour${btnIndex}`).html(hourDefaultText);
            $(`.hour${btnIndex}`).css("background-color", "white");

        }, 2000);


    })

    clearBtn.on("click", function (e) { // THIS WORKS
        var userChoice = e.target.innerText.toString().toLowerCase().trim(); // iS THIS NEEDED?

        console.log(`ENTRY ARRAY inside intro clear:${entryArry}`)

        btnIndex = parseInt($(this).attr("data-btnIndex"));
        $(`.saveBtn${btnIndex}`).css("display", "none");
        $(`.clearBtn${btnIndex}`).css("display", "none");
        $(`.deleteEntryBtn${btnIndex}`).css("display", "block");
        console.log(`User pressed: Clear Btn : ${btnIndex}`);
        var hourEntryholder = $(`.hourEntry${btnIndex}`).val();
        console.log(`Value inside clearBtn-Intro Block:INSIDE: ${btnIndex} is --> ${hourEntryholder}`);
        $(`.hourEntry${btnIndex}`).val($(`.hourEntry${btnIndex}`).attr("data-deleteMsg"));
        $(`.hour${btnIndex}`).html(warningTriangle);
        $(`.hour${btnIndex}`).css("background-color", "red");

        deleteEntryBtn.on("click", function (e) {

            var hourDefaultText = $(`<div><svg class="bi bi-watch pb-1" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M4 14.333v-1.86A5.985 5.985 0 012 8c0-1.777.772-3.374 2-4.472V1.667C4 .747 4.746 0 5.667 0h4.666C11.253 0 12 .746 12 1.667v1.86A5.985 5.985 0 0114 8a5.985 5.985 0 01-2 4.472v1.861c0 .92-.746 1.667-1.667 1.667H5.667C4.747 16 4 15.254 4 14.333zM13 8A5 5 0 103 8a5 5 0 0010 0z" clip-rule="evenodd"/>
            <rect width="1" height="2" x="13.5" y="7" rx=".5"/>
            <path fill-rule="evenodd" d="M8 4.5a.5.5 0 01.5.5v3a.5.5 0 01-.5.5H6a.5.5 0 010-1h1.5V5a.5.5 0 01.5-.5z" clip-rule="evenodd"/>
            </svg> ${hrs[btnIndex]} </div>`);

            var userChoice = e.target.innerText.toString().toLowerCase().trim(); //DOESN'T WORK WHEN CLICKING ICON

            if (userChoice === undefined || userChoice === null) {//THIS WORKS
                console.log("ERROR!"); // never happens but just in case
            } else if (userChoice === "yes") {
                console.log("You clicked yes!");
                $(`.hourEntry${btnIndex}`).attr("placeholder", $(`.hourEntry${btnIndex}`).attr("data-msg"));
                console.log(`ENTRY ARRAY before setting clear:${entryArry}`)
                entryArry[btnIndex] = "";
                loadArry = JSON.stringify(entryArry);
                console.log(`ENTRY ARRAY after setting clear:${entryArry}`)
                localStorage.setItem("userHourEntryArry", loadArry);
                console.log(`Value inside clearBtn-yes Block:INSIDE: ${btnIndex} is --> ${hourEntryholder} and the array is now: ${loadArry}`);
                $(`.hourEntry${btnIndex}`).val("");
                $(`.hour${btnIndex}`).html(hourDefaultText);
                $(`.hour${btnIndex}`).css("background-color", "white");
            } else if (userChoice === "no") {
                console.log("You clicked no!");
                $(`.hourEntry${btnIndex}`).val(hourEntryholder);
                $(`.hour${btnIndex}`).html(hourDefaultText);
                $(`.hour${btnIndex}`).css("background-color", "white");
            }

            $(`.saveBtn${btnIndex}`).css("display", "block");
            $(`.clearBtn${btnIndex}`).css("display", "block");
            $(`.deleteEntryBtn${btnIndex}`).css("display", "none");

        })

    })

    $("#settingModal").on("click", function () {
        console.log("You pressed settings")
    })

    $("#deleteModal").on("click", function () {

        for (var i = 0; i <= DAY_HOURS; i++) {

            $(`.hourEntry${i}`).attr("placeholder", $(`.hourEntry${btnIndex}`).attr("data-msg")); 
            entryArry[i] = "";
            console.log($(`.hourEntry${i}`));
            loadArry = JSON.stringify(entryArry);
            localStorage.setItem("userHourEntryArry", loadArry);
            $(`.hourEntry${i}`).val("");
            $(`.hourEntry${i}`).text("");
        }
    })

    $("#saveModal").on("click", function () {

        for (var i = 0; i <= DAY_HOURS; i++) {

            entryArry[i] = $(`.hourEntry${i}`).val();
            loadArry = JSON.stringify(entryArry);
            localStorage.setItem("userHourEntryArry", loadArry);
        }
    })


    $("#helperIcon").on("click", function(){
        console.log("Clicked on helper Icon");
    })

});

