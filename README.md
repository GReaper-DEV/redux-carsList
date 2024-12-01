# Cars Web App 🚗💻

This web application allows users to manage a list of cars with features like adding, searching, deleting, and viewing
the total cost of the cars. It is built with React and utilizes the Redux Toolkit for state management.

## Features 📋

### Components

The app includes the following components:

<ul>
<li><b>Button:</b> Custom button for actions.</li>
<li><b>Input:</b> Input fields for user data entry.</li>
<li><b>CarForm:</b> Handles adding cars to the list.</li>
<li><b>CarList:</b> Displays the list of cars.</li>
<li><b>CarSearch:</b> Filters cars based on user input.</li>
<li><b>CarValue:</b> Displays the total cost of the cars.</li>
</ul>

### State Management with Redux Toolkit

The app uses a Redux store configured with two slices:
<ul>
<li><b>formSlice:</b> Manages the car form state. Includes an extraReducer that resets the form to its initial state after a car is added.</li>
<li><b>carsSlice:</b> Manages the car list, including adding, deleting, and searching for cars.</li>
</ul>

### Purpose of the App 🚀

This app provides the following functionality:

<ol>
<li><b>Add Cars:</b> Users can add cars to the list by specifying a name and cost.</li>
<li><b>Search Cars:</b> Users can search for cars in the list by name. Matching cars are displayed, and the total cost updates dynamically to reflect only the displayed cars.</li>
<li><b>Delete Cars:</b> Users can delete any car from the list.</li>
<li><b>Duplicate Detection & Highlighting:</b>
<ul>
<li>When adding a new car (e.g., "Ford") that already exists in the list:
<ul>
<li>The list is sorted.</li>
<li>Existing cars matching the new car's name are highlighted to alert the user.</li>
</ul>
<li>Note: The app allows duplicates.</li>
</ul>
</ol>