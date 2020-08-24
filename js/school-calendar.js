document.addEventListener("DOMContentLoaded", function () {
	var calendarEl = document.getElementById("calendar");
	var calendar = new FullCalendar.Calendar(calendarEl, {
		initialView: "dayGridMonth",
		googleCalendarApiKey: "AIzaSyCT4-bkoT85eQcLKamwQaI8wOYuVtNY3kU",
		events: {
			googleCalendarId: "a2689m4pdj6smoi74po8a22sp4@group.calendar.google.com"
		}
		// eventColor: getComputedStyle(document.documentElement).getPropertyValue(
		// 	"--primary"
		// )
	});
	calendar.render();
});
