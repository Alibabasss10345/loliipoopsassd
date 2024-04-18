document.addEventListener("DOMContentLoaded", function() {
    const manualAuthBtn = document.getElementById("manualAuthBtn");
    const qrAuthBtn = document.getElementById("qrAuthBtn");
    const manualAuthContainer = document.getElementById("manualAuth");
    const submitAuthBtn = document.getElementById("submitAuthBtn");
    const chargingDetails = document.getElementById("chargingDetails");
    const vehicleTypeSelect = document.getElementById("vehicleType");
    const chargeDurationSelect = document.getElementById("chargeDuration");
    const submitChargeBtn = document.getElementById("submitChargeBtn");
    const cancelChargeBtn = document.getElementById("cancelChargeBtn");
    const chargingStatus = document.getElementById("chargingStatus");
    const errorContainer = document.getElementById("errorContainer");

    manualAuthBtn.addEventListener("click", function() {
        manualAuthContainer.classList.remove("hidden");
    });

    submitAuthBtn.addEventListener("click", function() {
        const accountInput = document.getElementById("accountInput").value.trim();
        const pinInput = document.getElementById("pinInput").value.trim();

        // Basic validation
        if (accountInput === "" || pinInput === "") {
            showError("Please enter both account number and PIN.");
            return;
        }

        // Authentication process (mocked)
        // Simulate authentication process, replace with actual authentication logic
        const isAuthenticated = mockAuthentication(accountInput, pinInput);

        if (!isAuthenticated) {
            showError("Invalid account number or PIN. Please try again.");
            return;
        }

        // Clear error messages if authentication is successful
        clearError();

        // Show charging details section
        chargingDetails.classList.remove("hidden");
    });

    vehicleTypeSelect.addEventListener("change", function() {
        // Update charge duration options based on vehicle type
    });

    submitChargeBtn.addEventListener("click", function() {
        // Start charging process
        // Display charging status
        chargingStatus.classList.remove("hidden");
    });

    cancelChargeBtn.addEventListener("click", function() {
        // Prompt for PIN
        // Cancel charging process
        chargingStatus.classList.add("hidden");
    });

    // Function to display error message
    function showError(message) {
        errorContainer.innerText = message;
        errorContainer.classList.remove("hidden");
    }

    // Function to clear error messages
    function clearError() {
        errorContainer.innerText = "";
        errorContainer.classList.add("hidden");
    }

    // Mock authentication function (replace with actual logic)
    function mockAuthentication(accountInput, pinInput) {
        // Mocked authentication logic
        // Return true if authentication succeeds, false otherwise
        const validAccount = "1234567890"; // Mocked valid account number
        const validPin = "123456"; // Mocked valid PIN

        return accountInput === validAccount && pinInput === validPin;
    }
    submitAuthBtn.addEventListener("click", function() {
    const accountInput = document.getElementById("accountInput").value.trim();
    const pinInput = document.getElementById("pinInput").value.trim();

    // Basic validation
    if (accountInput === "" || pinInput === "") {
        showError("Please enter both account number and PIN.");
        return;
    }

    // Authentication process (mocked)
    // Simulate authentication process, replace with actual authentication logic
    const isAuthenticated = mockAuthentication(accountInput, pinInput);

    if (!isAuthenticated) {
        showError("Invalid account number or PIN. Please try again.");
        return;
    }

    // Clear error messages if authentication is successful
    clearError();

    // Show charging details section
    showChargingDetails();
});

function showChargingDetails() {
    document.getElementById("vehicleTypeContainer").classList.remove("hidden");
}

vehicleTypeSelect.addEventListener("change", function() {
    const vehicleType = vehicleTypeSelect.value;
    let optionsHTML = "";

    if (vehicleType === "car") {
        optionsHTML = "<option value='1'>1 hour</option><option value='2'>2 hours</option><option value='3'>3 hours</option><option value='4'>4 hours</option><option value='5'>5 hours</option><option value='6'>6 hours</option><option value='7'>7 hours</option><option value='8'>8 hours</option>";
    } else if (vehicleType === "e-bike") {
        optionsHTML = "<option value='1'>1 hour</option><option value='2'>2 hours</option>";
    } else if (vehicleType === "e-scooter") {
        optionsHTML = "<option value='1'>1 hour</option>";
    }

    document.getElementById("chargeDuration").innerHTML = optionsHTML;
    document.getElementById("chargingBayContainer").classList.remove("hidden");
    document.getElementById("chargeDurationContainer").classList.remove("hidden");
    document.getElementById("paymentDetailsContainer").classList.remove("hidden");
});

});
