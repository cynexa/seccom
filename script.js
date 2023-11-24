 // Timetable JS
  function showTimetable(day) {
    const timetables = document.querySelectorAll('.timetable');
    timetables.forEach(timetable => timetable.style.display = 'none');

    const selectedTimetable = document.getElementById(day);
    selectedTimetable.style.display = 'block';
}