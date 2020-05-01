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
var hrs = ["12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm", "12am", 
"1am", "2am", "3am", "4am", "5am", "6am", "7am", "8am", "9am", "10am", "11am"];
 
var mainContainer = $(".mainBlockPage");
var mainRow = $("<div></div>").addClass("row");
 
mainContainer.append(mainRow);

var timeBlockDiv = $("<div></div>");
var dayEntryDiv = $("<input>");
var saveBtnDiv = $("<button>");
var brDiv = $("<br>");

timeBlockDiv.addClass("col-1 hour");
dayEntryDiv.addClass("col-10 past"); // USE ATTR to set present future and past class
saveBtnDiv.addClass("col-1 btn saveBtn");


/* mainRow.append(timeBlockDiv.text(hrs[0]), dayEntryDiv, saveBtnDiv); */




/* const DAY_HOURS = 23;
for (var i = 1 ; i <= DAY_HOURS; i++){
    mainRow.append(timeBlockDiv.text(hrs[i]));
    mainRow.append(dayEntryDiv);
    mainRow.append(saveBtnDiv);
    mainContainer.after($("<div> </div>"));
    mainContainer.after(brDiv);
    
    
 } */

