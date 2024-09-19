/**
 * Contains the miscellaneous route handlers.
 * @author Olanrewaju Awoyemi <https://github.com/larryacademy001>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
