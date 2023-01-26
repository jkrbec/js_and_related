
document.addEventListener("DOMContentLoaded", function() {
    // Get the search button and input field
    const searchButton = document.getElementById("search-button");
    const searchInput = document.getElementById("search-input");
    
    // Fetch the data from the API
    fetch('http://82.142.87.102/extAPI/api/icon/read.php?parent=2')
      .then(response => response.json())
      .then(data => {
        // Log the data to the console for debugging
        console.log(data);
    
        // Create a function to generate the icon gallery
        function createGallery(data) {
            // Create a container for the gallery
            const galleryContainer = document.createElement('div');
            galleryContainer.classList.add('icon-grid');
            document.querySelector('.icon-gallery').appendChild(galleryContainer);
            // Loop through the data and create elements for each item
            data.forEach(item => {
              const icon = document.createElement('img');
              icon.src = 'https://eletak.oresi.cz/files/Icons/CZ/' + encodeURIComponent(item.filename);
    
              icon.alt = encodeURIComponent(item.name);
              icon.alt = item.name.replace(/ /g, '_');
    
    
              icon.classList.add('icon-img');
    
              icon.setAttribute("data-id", item.id);
              galleryContainer.appendChild(icon);
        });
    }



// Call the function to generate the icon gallery
createGallery(data);

// Select all elements with the class "icon-slot"
let slots = document.querySelectorAll(".icon-slot");

// Add click event listener to each slot
slots.forEach(slot => {
//  // Get the search button and input field
// const searchInput = document.getElementById("search-input");

// const searchButton = document.getElementById("search-button");


// Add an event listener to the search button
searchButton.addEventListener("click", function() {
  // Get the search term from the input field
  const searchTerm = searchInput.value.toLowerCase();
  
  // Loop through all the icons and hide the ones that don't match the search term
  icons.forEach(icon => {
    const iconName = icon.getAttribute("data-icon-name");
    if (iconName.toLowerCase().indexOf(searchTerm) === -1) {
      icon.style.display = "none";
    } else {
      icon.style.display = "block";
    }
  });
});
searchInput.addEventListener("keyup", function() {
    // Get the search term from the input field
    const searchTerm = searchInput.value.toLowerCase();
  
    // Loop through all the icons and hide the ones that don't match the search term
    icons.forEach(icon => {
      const iconName = icon.getAttribute("data-icon-name");
      if (iconName.toLowerCase().indexOf(searchTerm) === -1) {
        icon.style.display = "none";
      } else {
        icon.style.display = "block";
      }
    });
  });

    slot.addEventListener("click", function() {
        // Open the icon gallery when an icon slot is clicked
        let gallery = document.querySelector(".icon-gallery");
        if (gallery.style.display === "none") {
            gallery.style.display = "block";
        } else {
            gallery.style.display = "none";
        }

        // Add the "selected" class to the selected slot
        slots.forEach(slot => {
            slot.classList.remove("selected");
        });
        this.classList.add("selected");
    });
});


// Add click event listener to each icon
let icons = document.querySelectorAll(".icon-img");
icons.forEach(icon => {
    icon.addEventListener("click", function() {
        // Remove the "selected" class from all icons
        icons.forEach(icon => {
            icon.classList.remove("selected");
        });

        // Add the "selected" class to the selected icon
        this.classList.add("selected");

        // Get the value of the src attribute
        let selectedIcon = this.getAttribute("src");
        console.log(selectedIcon);

        // Get the selected slot
        let selectedSlotId = document.querySelector(".icon-slot.selected").id;

        // Loop through all the slots
        let slots = document.querySelectorAll(".icon-slot");
        slots.forEach(slot => {
            // Check if the current slot's id matches the selected slot's id
            if (slot.id === selectedSlotId) {
                // Assign the background image to the current slot
                slot.style.backgroundImage = `url(${selectedIcon})`;
                slot.setAttribute("data-icon", this.getattribute("data-id"));
            }
        });

    });
});

});

window.onload = function() {
    // Create a button to clear the selected icons
    const clearButton = document.createElement("button");
    clearButton.textContent = "Clear";
    clearButton.classList.add("btn", "btn-danger", "clear-button");
    document.body.appendChild(clearButton);

    // Add click event listener to the clear button
    clearButton.addEventListener("click", function() {
        // Remove the background image from all slots
        slots.forEach(slot => {
          slot.style.backgroundImage = "";
          slot.removeAttribute('data-icon');
        });

        // Remove the "selected" class from all icons
        icons.forEach(icon => {
        icon.classList.remove("selected");
        });
    });
};

// Get all the icons
const icons = document.querySelectorAll(".icon-gallery img");

// Add click event listener to the icon gallery
iconGallery.addEventListener("click", function() {
  // Show or hide the icon gallery
  if (iconGallery.style.display === "none") {
    iconGallery.style.display = "block";
  } else {
    iconGallery.style.display = "none";
  }
});


// Add click event listener to the clear button
clearButton.addEventListener("click", function() {
    // Remove the background image from all slots
    slots.forEach(slot => {
      slot.style.backgroundImage = "";
      slot.removeAttribute('data-icon');
    });
  
    // Remove the "selected" class from all icons
    icons.forEach(icon => {
      icon.classList.remove("selected");
    });
  });
// Add click event listener to each slot
slots.forEach(slot => {
    slot.addEventListener("click", function() {
        // Open the icon gallery
        let gallery = document.querySelector(".icon-gallery");
        if (gallery.style.display === "none") {
            gallery.style.display = "block";
        } else {
            gallery.style.display = "none";
        }
        // Add "selected" class to selected slot
        slots.forEach(slot => {
            slot.classList.remove("selected");
        });
        this.classList.add("selected");
        selectedSlot = this;
        slot.classList.add("selected");

    });
    });
    // Get the search button and input field
// const searchButton = document.getElementById("search-button");
// const searchInput = document.getElementById("search-input");

// Add an event listener to the search button
searchButton.addEventListener("click", function() {
  // Get the search term from the input field
  const searchTerm = searchInput.value.toLowerCase();
  
  // Loop through all the icons and hide the ones that don't match the search term
  icons.forEach(icon => {
    if(icons){
        icons.forEach(icon => {
          const iconName = icon.getAttribute("data-icon-name");
          if (iconName.toLowerCase().indexOf(searchTerm) === -1) {
            icon.style.display = "none";
          } else {
            icon.style.display = "block";
          }
        });
      }
    // const iconName = icon.getAttribute("data-icon-name");
    // if (iconName.toLowerCase().indexOf(searchTerm) === -1) {
    //   icon.style.display = "none";
    // } else {
    //   icon.style.display = "block";
    // }
  });
});
searchInput.addEventListener("keyup", function() {
    // Get the search term from the input field
    const searchTerm = searchInput.value.toLowerCase();
  
    // Loop through all the icons and hide the ones that don't match the search term
    icons.forEach(icon => {
      const iconName = icon.getAttribute("data-icon-name");
      if (iconName.toLowerCase().indexOf(searchTerm) === -1) {
        icon.style.display = "none";
      } else {
        icon.style.display = "block";
      }
    });
  });
  


});
