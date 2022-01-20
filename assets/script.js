// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
var today = moment();;
$("#date").text(today.format("dddd, MMMM Do YYYY"))

var taskData = {
    "0": ["goodbye"],
    "1": [],
    "2": [],
    "3": [],
    "4": [],
    "5": [],
    "6": [],
    "7": [],
    "8": [],
    "9": [],
    "10": [],
    "11": [],
    "12": [],
    "13": [],
    "14": [],
    "15": [],
    "16": [],
    "17": [],
    "18": [],
    "19": [],
    "20": [],
    "21": [],
    "22": [],
    "23": [],
};

var setTasks = function() {
    localStorage.setItem("taskData", JSON.stringify(tasks));
}

var getTasks = function() {

    var loadedData = JSON.parse(localStorage.getItem("taskData"));
    if (loadedData) {
        tasks = loadedData

        $.each(tasks, function(hour, task) {
            var timeDiv = $("#" + hour);
            createTask(task, timeDiv);
        })
    }
}

var createTask = function(taskText, timeDiv) {
    var taskDiv = timeDiv.find(".task");
    var taskP = $("<p>")
        .addClass("description")
        .text(taskText)
    taskDiv.html(taskP);
}

getTasks();