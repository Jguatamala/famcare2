function showPopup() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("popup").style.display = "block";
}

// Function to hide the pop-up
function hidePopup() {
    const popup = document.getElementById("popup");
    popup.classList.add("hide");  // Add class to trigger reverse animation

    setTimeout(() => {
        document.getElementById("overlay").style.display = "none";
        popup.style.display = "none";
        popup.classList.remove("hide");  // Reset the animation state
    }, 500); 
}



// THIS IF FOR THE TEMPORARY LOGIN
function loginbutton(event){
    event.preventDefault();

    window.location.href="appointment.html";
}