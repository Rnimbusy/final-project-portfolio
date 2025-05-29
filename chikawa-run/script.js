/* Import the 'Poppins' font */
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

/* General layout styles for html and body */
html, body {
    width: 100vw;
    height: 100vh;
    position: fixed;
    padding: 0;
    margin: 0;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    font-family: 'Poppins', sans-serif;
}

/* Styling for the maze view section */
#view {
    margin-top: 30px;
}

/* Styles for the maze container and canvas */
#mazeContainer {
    top: 15px;
    opacity: 0;
    display: inline-block;
    margin: auto;
    border-radius: 10px;
}

#mazeContainer #mazeCanvas {
    margin: 0;
    display: block;
    border: solid 2px black;
    height: 400px;
}

/* Styling for input and select elements */
input, select {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.30);
    height: 45px;
    width: 150px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    color: white;
    display: inline-block;
    font-size: 15px;
    text-align: center;
}

input:hover, select:hover {
    background-color: rgba(0, 0, 0, 0.70);
}

input:active, select:active {
    background-color: black;
}

/* Focus styles for input/select elements */
input:focus, select:focus {
    outline: none;
}

/* Custom select dropdown styling */
.custom-select {
    display: inline-block;
}

.custom-select select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-repeat: no-repeat;
    background-position: 125px center;
}

/* Message container for when the maze is completed */
#Message-Container {
    visibility: hidden;
    color: white;
    display: block;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.30);
    z-index: 1;
}

#Message-Container #message {
    width: 300px;
    height: 300px;
    position: fixed;
    top: 50%;
    left: 50%;
    margin-left: -150px;
    margin-top: -150px;
}

/* Page container styles */
#page {
    text-align: center;
    h

