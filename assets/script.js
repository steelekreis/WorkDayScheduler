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


var audit = function() {

    var currentHour = moment().hour();
    $(".list-group-item").each( function() {
        var elementHour = parseInt($(this).attr("id"));

        if ( elementHour < currentHour ) {
            $(this).removeClass(["list-group-item-info", "list-group-item-light"]).addClass("list-group-item-secondary");
        }
        else if ( elementHour === currentHour ) {
            $(this).removeClass(["list-group-item-secondary", "list-group-item-light"]).addClass("list-group-item-info");
        }
        else {
            $(this).removeClass(["list-group-item-secondary", "list-group-item-info"]).addClass("list-group-item-light");
        }
    })
};


var createTask = function(taskText, timeDiv) {
    var taskDiv = timeDiv.find(".task");
    var taskP = $("<span>")
        .addClass("")
        .text(taskText)
    taskDiv.html(taskP);
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
    audit();
}

var setTasks = function() {
    localStorage.setItem("taskData", JSON.stringify(tasks));
}

var updateTask = function (textareaElement) {
    var taskArea = textareaElement.closest(".list-group-item");
    var textArea = taskArea.find("textarea");
    var time = taskArea.attr("id");
    var text = textArea.val().trim();

    taskData[time] = [text];
    setTasks();
    createTask(text,taskArea);
}

$(".task").click(function() {
    $("textarea").each(function() {
        update($(this));
    })
    var time = $(this).closest(".list-group-item").attr("id");
    if (parseInt(time) >= moment().hour()) {
        var text = $(this).text();
        var textInput = $("<textarea>")
            .addClass("form-control")
            .val(text);
        $(this).html(textInput);
        textInput.trigger("focus");
    }
})

timeToHour = 3600000 - today.milliseconds();
setTimeout(function() {
    setInterval(auditTasks, 3600000)
}, timeToHour);


$(".btn-secondary").click(function() {
    updateTask($(this));
})

getTasks();