# Bikes
App is built with mobile devices in mind. It simulates bicycle renting app.
List of bike stations is downloaded from API through HTTP request. Then it asks user for location permissions using Navigator API and calculates distance of each station from user using an external library. Then the list is sorted by distance from user (ascending).

Each station has its number of bikes that are available for rent and number of places to leave a previously rented bike.

When specific station is clicked the app renders a map with its location as well as user's location. Initially the map is centered on the station.

Application utilises NgRx store for app-wide access to the list of bike stations.
