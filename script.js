// Timetable JS
function showTimetable(day) {
  const timetables = document.querySelectorAll('.timetable');
  timetables.forEach(timetable => timetable.style.display = 'none');

  const selectedTimetable = document.getElementById(day);
  selectedTimetable.style.display = 'block';

  // Add a class to the selected timetable
  selectedTimetable.classList.add('open');
}
document.addEventListener("DOMContentLoaded", function() {
  // Assuming your Monday timetable has an ID of 'Monday'
  showTimetable('day1');
});