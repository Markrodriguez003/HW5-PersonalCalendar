$(document).ready(function () {
    /* ***************** HTML VIEW ***************** */
    {/* <div class="container time-block mb-4 "> // main block page

        <div class="row">
            <div class="col-1 hour"> 10AM </div> <!-- TIME COL -->
            <input class="col-10 past "> <!-- DAY ENTRY COL -->
            <button class="col-1 btn  saveBtn"></button> <!-- SAVE BTN -->
        </div>

</div> */}


    console.log(moment()); //REFERENCE
    var timeHrs = moment().format("ha"); // SPITS OUT CURRENT HOUR
    var hrs = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm",
        "7pm", "8pm", "9pm", "10pm", "11pm", "12am", "1am", "2am", "3am", "4am", "5am"];

    var mainContainer = $(".mainBlockPage"); // Selects main page
    var blockRow = $("<div></div>").addClass("row"); // Create empty time block row + gives it class


    var timeBlockDiv = $("<div></div>").addClass("col-1 hour");      // Creates L Time 
    var dayEntryDiv = $("<input>").addClass("col-10 past");         // Creates M hour data entry
    var saveBtnDiv = $("<button>").addClass("col-1 btn saveBtn");  //  Creates R save button    

    /* 
    blockRow.append(timeBlockDiv.text(hrs[0]), dayEntryDiv, saveBtnDiv); */

    const DAY_HOURS = 23;

    var blockObject;

    for (var i = 1; i <= DAY_HOURS; i++) {
        /*  blockObject =`
             <div class="row">
                 <div class="col-1 hour"> ${hrs[i]} </div> <!-- TIME COL -->
                 <input class="col-10 past "> <!-- DAY ENTRY COL -->
                 <button class="col-1 btn  saveBtn"></button> <!-- SAVE BTN -->
             </div>`
         mainContainer.append(blockObject); */
     
        mainContainer.append(blockRow);
        blockRow.append(timeBlockDiv.text(hrs[i]));
        blockRow.append(dayEntryDiv);
        blockRow.append(saveBtnDiv);


    }










});