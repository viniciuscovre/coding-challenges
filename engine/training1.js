/**

Challenge 1 – Hotel Room Availability (Intervals 101)

Level: Easy → Medium
Core ideas: intervals, edge cases, clarity

You’re building a hotel booking checker.
	•	You have existing confirmed bookings for one room, each as [checkIn, checkOut] (check-out is exclusive).
	•	You get a new requested interval and need to say whether it conflicts with any existing booking.

function: canBook(existing: List<[start: int, end: int]>, request: [start: int, end: int]) -> bool 

Return true if the room can be booked with no overlap, false otherwise.
	•	Time is represented as an integer day (e.g., 20251126 → 20251126 or 0,1,2... – you decide, just be consistent).
	•	Treat [start, end] as: booking includes start, excludes end.

existing = [[1, 3], [5, 7]]
request  = [3, 5]      -> true   (touching but not overlapping)
request  = [2, 4]      -> false  (overlaps [1, 3])
request  = [6, 8]      -> false  (overlaps [5, 7])
*/

const canBook = (existing, [reqStart, reqEnd]) => {
  for (const [start, end] of existing) {
    if (reqStart < end && start < reqEnd) return false;
  }

  return true;
};

console.log("canBook?", canBook([[1, 3], [5, 7]], [3, 5])); // true
console.log("canBook?", canBook([[1, 3], [5, 7]], [2, 4])); // false
console.log("canBook?", canBook([[1, 3], [5, 7]], [6, 8])); // false
