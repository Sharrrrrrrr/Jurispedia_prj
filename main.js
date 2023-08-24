document.addEventListener("DOMContentLoaded", function () {
    const divisions = document.querySelectorAll(".division");
    const buttons = document.querySelectorAll(".boutton_left"); // Corrected class name

    // Show the first division initially
    divisions[0].style.display = "block";

    // Attach click event listeners to buttons
    buttons.forEach((button, index) => {
        button.addEventListener("click", function () {
            if (divisions[index].style.display === "none") {
                // Hide all divisions
                divisions.forEach((division) => {
                    division.style.display = "none";
                });

                // Show the clicked division
                divisions[index].style.display = "block";
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const tables = document.querySelectorAll(".table");
    const bouttons = document.querySelectorAll(".boutton_right"); // Corrected class name

    // Show the first division initially
    tables[1].style.display = "block";

    // Attach click event listeners to buttons
    bouttons.forEach((button, index) => {
        button.addEventListener("click", function () {
            if (tables[index].style.display === "none") {
                // Hide all divisions
                tables.forEach((table) => {
                    table.style.display = "none";
                });

                // Show the clicked division
                tables[index].style.display = "block";
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const buttonsp = document.querySelectorAll(".buttonp");
    const tablitos = document.querySelectorAll(".tablito");

    buttonsp.forEach((button, index) => {
        button.addEventListener("click", function () {
            console.log(`Button ${index + 1} clicked`);
            // Hide all tables
            tablitos.forEach(table => {
                table.style.display = "none";
            });

            // Display the corresponding table
            tablitos[index].style.display = "block";
        });
    });
});




console.log("JS file loaded");
