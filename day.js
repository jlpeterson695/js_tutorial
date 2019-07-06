// Returns the day of the week for the given date.
function dayName(var) {
  const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return daysOfTheWeek[var.getDay()];
}
