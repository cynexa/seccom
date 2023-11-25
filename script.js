// Timetable JS
function showTimetable(day) {
  const timetables = document.querySelectorAll('.timetable');
  timetables.forEach(timetable => timetable.style.display = 'none');

  const selectedTimetable = document.getElementById(day);
  selectedTimetable.style.display = 'block';

  selectedTimetable.classList.add('open');
}
document.addEventListener("DOMContentLoaded", function() {
  showTimetable('day1');
});
// Smooth Scroll
document.querySelectorAll('header ul li a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});