/**
 * Filter - Retrieves students in a given city.
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} students - The list of students.
 * @param {String} city - The City.
 * @author Olanrewaju Awoyemi <https://github.com/larryacademy001>
 * @returns
 */
export default function getStudentsByLocation(students, city) {
  if (students instanceof Array) {
    return students.filter((student) => student.location === city);
  }
  return [];
}
