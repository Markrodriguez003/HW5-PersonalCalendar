$(document).ready(function () {

    /*  var timeBlockDiv = $("<div></div>").addClass("col-1 hour");   */             // Creates L Time 
    /*   var dayEntryDiv = $("<input>").addClass("col-10 past");       */            // Creates M hour data entry
    /*     var saveBtnDiv = $("<button>").addClass("col-1 btn saveBtn"); */           //  Creates R save button    


    console.log(moment()); //REFERENCE
    var hrs = [ "6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm",
        "7pm", "8pm", "9pm", "10pm", "11pm", "12am", "1am", "2am", "3am", "4am", "5am"];

    var mainContainer = $(".mainBlockPage"); // Selects main page
    /* var blockRow = $("<div></div>").addClass("row"); */ // Create empty time block row + gives it class


    const DAY_HOURS = 23; // # of 1 hour blocks in a day

    /* CREATING HOUR BLOCK TABLE */
    for (var i = 0; i <= DAY_HOURS; i++) {
        var blockObject = $(`

            <div class="row">
                <div class="hour hour${i} col-1 ">${hrs[i]}</div> <!-- TIME COL -->
                <input class="hourEntry col-9 "><!-- DAY ENTRY COL -->
                <button class="pageBtn col-1 btn" id="#saveBtn">save</button> <!-- SAVE BTN -->
                <button class="pageBtn col-1 btn btn-secondary" id="#clearBtn"> Clear </button> <!-- CLEAR BTN -->
            </div>`)

        mainContainer.append(blockObject);
    }

    /* 
     Does not work! Should spit out "6am". Is it a scope issue? If you inspect the html page the rows with the class "hour{insert generated no. here} are there" 
     Is it because the elements were generated after the page loads? How would you select post generated elements then?*/
    /* 
        console.log(".hour");
        console.log($(".hour0").text) ; */
    /*  console.log($(".hour0").text) ; */


    /*  This works but it seems very bloated to grab the text inside each individually created .row .hour{insert generated no. here}  text */
    var blockSelector = $(`.mainBlockPage .row div`); // Grabs LEFT Hour block
    var entryBlockSelector = $(`.mainBlockPage .row input`); // Grabs MIDDLE Input block

    /* MOMENT JS  */
    
    /*  
    Midnight(12: 00 AM)-- 0000 hrs
    1: 00 AM  -- 0100 hrs - 1
    2: 00 AM  -- 0200 hrs - 2
    3: 00 AM  -- 0300 hrs - 3
    4: 00 AM  -- 0400 hrs - 4
    5: 00 AM  -- 0500 hrs - 5
    6: 00 AM  -- 0600 hrs - 6   - Day start
    7: 00 AM  -- 0700 hrs - 7
    8: 00 AM  -- 0800 hrs - 8
    9: 00 AM  -- 0900 hrs - 9
    10: 00 AM -- 1000 hrs - 10
    11: 00 AM -- 1100 hrs - 11
    12: 00 PM -- 1200 hrs - 12
    1: 00 PM  -- 1300 hrs - 13
    2: 00 PM  -- 1400 hrs - 14
    3: 00 PM  -- 1500 hrs - 15
    4: 00 PM  -- 1600 hrs - 16
    5: 00 PM  -- 1700 hrs - 17
    6: 00 PM  -- 1800 hrs - 18
    7: 00 PM  -- 1900 hrs - 19
    8: 00 PM  -- 2000 hrs - 20
    9: 00 PM  -- 2100 hrs - 21
    10: 00 PM -- 2200 hrs - 22
    11: 00 PM -- 2300 hrs - 23
    */
   
    var currentHr = moment().format("ha"); // SPITS OUT CURRENT HOUR
    var currentHr_HH_Format = parseInt(moment().format("H"));

    console.log(currentHr_HH_Format);
    console.log(typeof(currentHr_HH_Format));

    for (var i = 0; i < DAY_HOURS; i++) { // Off-set zero
     
        if (blockSelector[i].innerText === currentHr) {
            entryBlockSelector[i].className += "present";
        } else if (currentHr_HH_Format < i) {
            console.log(`HOUR: ${currentHr_HH_Format} CurrentHHFormat  LESS THAN < ${i} : HTML ELEMENT: ${blockSelector[i].innerText} - css: past`);
            entryBlockSelector[i].className += "past";
        } else if (currentHr_HH_Format > i) {
            console.log(`HOUR: ${currentHr_HH_Format} CurrentHHFormat GREATER THAN > ${i} : HTML ELEMENT: ${blockSelector[i].innerText} - css: future`);
            entryBlockSelector[i].className += "future";
        }

    }
 















});