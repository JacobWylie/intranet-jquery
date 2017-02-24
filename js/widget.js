// Employee Status

var employeeUrl = "../data/employees.json";
var employeeCallback = function (response) {
	var statusHTML = '<ul class="bulleted">';
	$.each(response, function(index, employee) {
		if (employee.inoffice === true) {
			statusHTML += '<li class="in">';
		} else {
			statusHTML += '<li class="out">';
		}
		statusHTML += employee.name + '</li>';
	});
	statusHTML += '</ul>';
	$('#employeeList').html(statusHTML);
};

$.getJSON(employeeUrl, employeeCallback);  // end getJSON

// Room Availability

var roomUrl = "../data/rooms.json";
var roomCallback = function (response) {
	var statusHTML = '<ul class="rooms">';
	$.each(response, function(index, rooms) {
		if (rooms.available === true) {
			statusHTML += '<li class="empty">';
		} else {
			statusHTML += '<li class="full">';
		}
		statusHTML += rooms.room + '</li>';
	});
	statusHTML += '</ul>';
	$('#roomList').html(statusHTML);
};

$.getJSON(roomUrl, roomCallback);  // end getJSON