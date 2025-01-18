let isDarkTheme = true; // Start with dark theme

function changeTheme() {
    if (isDarkTheme) {
        // Switch to dark theme
        document.body.style = "color: #cecece; background-color: rgb(20, 20, 20);";
    } else {
        // Switch to light theme
        document.body.style = "color: black; background-color: white;";
    }
    
    // Toggle the theme state
    isDarkTheme = !isDarkTheme;
}