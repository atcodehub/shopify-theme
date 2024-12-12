// ########### slick slider js  ##################
// $(document).ready(function () {
//     $('.slider').slick({
//         dots: false,
//         arrows: false,
//         infinite: true,
//         speed: 1000,
//         slidesToShow: 4,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 2500,
//         responsive: [
//             {
//                 breakpoint: 420,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 1
//                 }
//             },
//             {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 1
//                 }
//             },
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 3,
//                     slidesToScroll: 2
//                 }
//             }
//         ]
//     });


//     $('.customers-reviwe-slider').slick({
//         dots: false,
//         arrows: false,
//         infinite: true,
//         speed: 1000,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 2500,
//         responsive: [
//             {
//                 breakpoint: 420,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 1
//                 }
//             },
//             {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 1
//                 }
//             },
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 3,
//                     slidesToScroll: 2
//                 }
//             }
//         ]
//     });

// });



// ########## toggle Dropdown Menu Scrip ##########
function toggleMenu() {
    const menu = document.getElementById('menu');
    const isExpanded = document.getElementById('menu-button').getAttribute('aria-expanded') === 'true';


    if (isExpanded) {
        menu.classList.add('hidden');
        document.getElementById('menu-button').setAttribute('aria-expanded', 'false');
    } else {
        menu.classList.remove('hidden');
        document.getElementById('menu-button').setAttribute('aria-expanded', 'true');
    }
}



//############ Navigatio  Dialog Box Script ###################
const navDialog = document.getElementById("nav-dialog");
function handleMenu() {
    navDialog.classList.toggle('hidden');
}

// collection color selector
function toggleColor(element) {
    const checkmark = element.querySelector("span");

    // Toggle the checkmark visibility
    if (checkmark.classList.contains("hidden")) {
        checkmark.classList.remove("hidden");
        element.classList.add("border-blue-500");
    } else {
        checkmark.classList.add("hidden");
        element.classList.remove("border-blue-500");
    }
}


// collection size filter
function toggleButtonStyle(button) {
    // Toggle background and text color
    button.classList.toggle('bg-black');
    button.classList.toggle('text-white');

    // Reset to default styles if unselected
    button.classList.toggle('bg-gray-100');
    button.classList.toggle('text-black');
}


// collection dropdown
document.addEventListener("DOMContentLoaded", () => {
    const dropdowns = [
        { toggle: "dropdownToggle", menu: "dropdownMenu" },
        { toggle: "dropdownToggle2", menu: "dropdownMenu2" },
        { toggle: "dropdownToggle3", menu: "dropdownMenu3" },
        { toggle: "dropdownToggle4", menu: "dropdownMenu4" },
    ];

    dropdowns.forEach(({ toggle, menu }) => {
        const toggleButton = document.getElementById(toggle);
        const dropdownMenu = document.getElementById(menu);

        // Keep the dropdown open by default
        dropdownMenu.style.display = "block";

        // Add event listener to toggle visibility
        toggleButton.addEventListener("click", () => {
            const isVisible = dropdownMenu.style.display === "block";
            dropdownMenu.style.display = isVisible ? "none" : "block";
        });
    });
});


// collection inner dropdown

function toggleDropdown(id) {
    const dropdown = document.getElementById(id);
    dropdown.classList.toggle('hidden');
  }
  

  document.addEventListener("DOMContentLoaded", () => {
    const minPriceSlider = document.getElementById("minPrice");
    const maxPriceSlider = document.getElementById("maxPrice");
    const minValue = document.getElementById("minValue");
    const maxValue = document.getElementById("maxValue");
  
    // Function to update the range values
    const updatePriceRange = () => {
      const minVal = parseInt(minPriceSlider.value);
      const maxVal = parseInt(maxPriceSlider.value);
  
      if (minVal > maxVal) {
        minPriceSlider.value = maxVal;
      }
  
      minValue.textContent = `$${minPriceSlider.value}`;
      maxValue.textContent = `$${maxPriceSlider.value}`;
    };
  
    // Add event listeners to both sliders
    minPriceSlider.addEventListener("input", updatePriceRange);
    maxPriceSlider.addEventListener("input", updatePriceRange);
  
    // Initialize the range values on page load
    updatePriceRange();
  });





  
