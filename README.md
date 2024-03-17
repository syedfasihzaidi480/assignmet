#TASK 2 
#Weather Application

This weather application is built using HTML, CSS, JavaScript, and jQuery. It provides users with the ability to search for weather conditions in different cities, view current weather details, and access a 5-day forecast. The application is designed to be responsive, ensuring a seamless experience across various devices.

##Development Approach:

###HTML: 
The HTML structure is designed to provide a user-friendly interface with sections for displaying current weather, search functionality, and the 5-day forecast.

###CSS:
CSS is utilized to style the application, ensuring a visually appealing and responsive layout. Media queries are used to adapt the design for different screen sizes.

###JavaScript:
JavaScript is used to handle user interactions such as city search, fetching weather data from the OpenWeatherMap API, and updating the UI with the retrieved data.

###jQuery:
jQuery simplifies DOM manipulation and event handling, enhancing the development process. It is used alongside JavaScript to streamline coding tasks.

##OpenWeatherMap API:
The application fetches weather data from the OpenWeatherMap API. This API provides accurate and up-to-date weather information for cities worldwide, including current conditions and forecasts.

##Fetching and Displaying Weather Data:

When a user enters a city name and initiates a search, the application sends a request to the OpenWeatherMap API with the specified city name.

The API returns a JSON response containing weather data for the requested city, including current conditions and a 5-day forecast.

JavaScript/JQuery processes the JSON response, extracting relevant information such as temperature, weather description, humidity, wind speed, etc.

The retrieved weather data is then dynamically displayed on the application interface, updating the current weather section and the 5-day forecast accordingly.

##README:

##Installation:

Clone the repository to your local machine.
Open the index.html file in a web browser to launch the application.
Usage:

Enter the name of a city in the search input field.
Press the search button to view the current weather and 5-day forecast for the specified city.
##API Integration:

Sign up for an API key on the OpenWeatherMap website.
Replace 'YOUR_API_KEY' in the JavaScript code with your API key to enable weather data retrieval.
##Responsiveness:

The application is designed to adapt to various screen sizes, ensuring a consistent user experience on desktop, tablet, and mobile devices.
##Credits:

This application utilizes the OpenWeatherMap API for fetching weather data.
Icons provided by Font Awesome for weather conditions and location markers.
##License:

This project is licensed under the MIT License. See the LICENSE file for details.
##Feedback and Contributions:

Contributions and feedback are welcome! Feel free to submit issues or pull requests to help improve the application.
