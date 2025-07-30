// Country, State, and City data
const locationData = {
  bd: {
    name: "Bangladesh",
    states: {
      dhaka: {
        name: "Dhaka",
        cities: ["Dhaka", "Gazipur", "Narayanganj", "Tangail", "Manikganj"],
      },
      chittagong: {
        name: "Chittagong",
        cities: ["Chittagong", "Cox's Bazar", "Feni", "Noakhali", "Comilla"],
      },
      khulna: {
        name: "Khulna",
        cities: ["Khulna", "Jessore", "Satkhira", "Bagerhat", "Narail"],
      },
      sylhet: {
        name: "Sylhet",
        cities: ["Sylhet", "Moulvibazar", "Habiganj", "Sunamganj"],
      },
      rajshahi: {
        name: "Rajshahi",
        cities: ["Rajshahi", "Bogra", "Pabna", "Sirajganj", "Natore"],
      },
    },
  },
  usa: {
    name: "United States",
    states: {
      california: {
        name: "California",
        cities: [
          "Los Angeles",
          "San Francisco",
          "San Diego",
          "Sacramento",
          "Oakland",
        ],
      },
      texas: {
        name: "Texas",
        cities: ["Houston", "Austin", "Dallas", "San Antonio", "Fort Worth"],
      },
      florida: {
        name: "Florida",
        cities: ["Miami", "Orlando", "Tampa", "Jacksonville", "Tallahassee"],
      },
      newyork: {
        name: "New York",
        cities: ["New York City", "Buffalo", "Rochester", "Syracuse", "Albany"],
      },
    },
  },
  uk: {
    name: "United Kingdom",
    states: {
      england: {
        name: "England",
        cities: ["London", "Manchester", "Birmingham", "Liverpool", "Leeds"],
      },
      scotland: {
        name: "Scotland",
        cities: ["Edinburgh", "Glasgow", "Aberdeen", "Dundee", "Stirling"],
      },
      wales: {
        name: "Wales",
        cities: ["Cardiff", "Swansea", "Newport", "Bangor", "Wrexham"],
      },
    },
  },
  canada: {
    name: "Canada",
    states: {
      ontario: {
        name: "Ontario",
        cities: ["Toronto", "Ottawa", "Hamilton", "London", "Windsor"],
      },
      quebec: {
        name: "Quebec",
        cities: ["Montreal", "Quebec City", "Laval", "Gatineau", "Sherbrooke"],
      },
      british_columbia: {
        name: "British Columbia",
        cities: ["Vancouver", "Victoria", "Surrey", "Burnaby", "Richmond"],
      },
    },
  },
  australia: {
    name: "Australia",
    states: {
      new_south_wales: {
        name: "New South Wales",
        cities: ["Sydney", "Newcastle", "Wollongong", "Tamworth", "Dubbo"],
      },
      victoria: {
        name: "Victoria",
        cities: ["Melbourne", "Geelong", "Ballarat", "Bendigo", "Shepparton"],
      },
      queensland: {
        name: "Queensland",
        cities: ["Brisbane", "Gold Coast", "Townsville", "Cairns", "Toowoomba"],
      },
    },
  },
  india: {
    name: "India",
    states: {
      maharashtra: {
        name: "Maharashtra",
        cities: ["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad"],
      },
      delhi: {
        name: "Delhi",
        cities: [
          "New Delhi",
          "Delhi Cantonment",
          "North Delhi",
          "South Delhi",
          "East Delhi",
        ],
      },
      karnataka: {
        name: "Karnataka",
        cities: ["Bangalore", "Mysore", "Hubli", "Mangalore", "Belgaum"],
      },
    },
  },
};

// Get DOM elements
const countrySelect = document.getElementById("country");
const stateSelect = document.getElementById("state");
const citySelect = document.getElementById("city");
const form = document.getElementById("studentForm");

// Handle country change
countrySelect.addEventListener("change", function () {
  const selectedCountry = this.value;

  // Clear state and city dropdowns
  stateSelect.innerHTML = `<option value="" disabled selected>Select State</option>`;
  citySelect.innerHTML = `<option value="" disabled selected>Select City</option>`;

  if (selectedCountry && locationData[selectedCountry]) {
    const states = locationData[selectedCountry].states;

    // Populate state dropdown
    for (const stateKey in states) {
      const option = document.createElement("option");
      option.value = stateKey;
      option.textContent = states[stateKey].name;
      stateSelect.appendChild(option);
    }

    stateSelect.disabled = false;
  } else {
    stateSelect.disabled = true;
    citySelect.disabled = true;
  }
});

// Handle state change
stateSelect.addEventListener("change", function () {
  const selectedCountry = countrySelect.value;
  const selectedState = this.value;

  // Clear city dropdown
  citySelect.innerHTML = `<option value="" disabled selected>Select City</option>`;

  if (
    selectedCountry &&
    selectedState &&
    locationData[selectedCountry]?.states[selectedState]
  ) {
    const cities = locationData[selectedCountry].states[selectedState].cities;

    // Populate city dropdown
    cities.forEach((city) => {
      const option = document.createElement("option");
      option.value = city.toLowerCase().replace(/\s+/g, "-");
      option.textContent = city;
      citySelect.appendChild(option);
    });

    citySelect.disabled = false;
  } else {
    citySelect.disabled = true;
  }
});

// Form validation and submission
function createErrorMessage(field, message) {
  // Remove existing error message
  const existingError = field.parentNode.querySelector(".error-message");
  if (existingError) {
    existingError.remove();
  }

  // Create new error message
  const errorDiv = document.createElement("div");
  errorDiv.className = "error-message";
  errorDiv.textContent = message;

  // Insert error message after the input field
  field.parentNode.appendChild(errorDiv);
}

function removeErrorMessage(field) {
  const existingError = field.parentNode.querySelector(".error-message");
  if (existingError) {
    existingError.remove();
  }
}

function validateForm() {
  let isValid = true;

  // Remove all existing error messages
  document
    .querySelectorAll(".error-message")
    .forEach((error) => error.remove());

  // Validate name
  const name = document.getElementById("name");
  if (!name.value.trim()) {
    createErrorMessage(name, "Please enter your full name");
    isValid = false;
  } else if (name.value.trim().length < 2) {
    createErrorMessage(name, "Name must be at least 2 characters long");
    isValid = false;
  }

  // Validate email
  const email = document.getElementById("email");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.value.trim()) {
    createErrorMessage(email, "Please enter your email address");
    isValid = false;
  } else if (!emailRegex.test(email.value)) {
    createErrorMessage(email, "Please enter a valid email address");
    isValid = false;
  }

  // Validate phone
  const phone = document.getElementById("phone");
  const phoneRegex = /^\+?[\d\s\-\(\)]{10,}$/;
  if (!phone.value.trim()) {
    createErrorMessage(phone, "Please enter your phone number");
    isValid = false;
  } else if (!phoneRegex.test(phone.value)) {
    createErrorMessage(phone, "Please enter a valid phone number");
    isValid = false;
  }

  // Validate age
  const age = document.getElementById("age");
  if (!age.value) {
    createErrorMessage(age, "Please enter your age");
    isValid = false;
  } else if (age.value < 16 || age.value > 100) {
    createErrorMessage(age, "Age must be between 16 and 100");
    isValid = false;
  }

  // Validate department
  const department = document.getElementById("department");
  if (!department.value) {
    createErrorMessage(department, "Please select your department");
    isValid = false;
  }

  // Validate country
  const country = document.getElementById("country");
  if (!country.value) {
    createErrorMessage(country, "Please select your country");
    isValid = false;
  }

  // Validate state
  const state = document.getElementById("state");
  if (!state.value) {
    createErrorMessage(state, "Please select your state/division");
    isValid = false;
  }

  // Validate city
  const city = document.getElementById("city");
  if (!city.value) {
    createErrorMessage(city, "Please select your city");
    isValid = false;
  }

  return isValid;
}

function showSuccessMessage() {
  // Create success message
  const successDiv = document.createElement("div");
  successDiv.className = "success-message show";
  successDiv.innerHTML = `
        <strong>Success!</strong> Your registration has been submitted successfully.
        We will contact you soon with further details.
    `;

  // Insert at the top of the form
  const formWrapper = document.querySelector(".form-wrapper");
  formWrapper.insertBefore(successDiv, formWrapper.firstChild);

  // Remove success message after 5 seconds
  setTimeout(() => {
    successDiv.remove();
  }, 5000);
}

// Form submit event
form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (validateForm()) {
    // Get form data
    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      age: document.getElementById("age").value,
      department: document.getElementById("department").value,
      country: document.getElementById("country").value,
      state: document.getElementById("state").value,
      city: document.getElementById("city").value,
    };

    // Log form data (in real application, you would send this to a server)
    console.log("Student Registration Data:", formData);

    // Show success message
    showSuccessMessage();

    // Reset form after successful submission
    setTimeout(() => {
      form.reset();
      stateSelect.innerHTML = `<option value="" disabled selected>Select State</option>`;
      citySelect.innerHTML = `<option value="" disabled selected>Select City</option>`;
      stateSelect.disabled = true;
      citySelect.disabled = true;
    }, 1000);
  } else {
    // Scroll to first error
    const firstError = document.querySelector(".error-message");
    if (firstError) {
      firstError.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }
});

// Form reset event
form.addEventListener("reset", function () {
  // Clear error messages
  document
    .querySelectorAll(".error-message")
    .forEach((error) => error.remove());

  // Reset dropdowns
  setTimeout(() => {
    stateSelect.innerHTML = `<option value="" disabled selected>Select State</option>`;
    citySelect.innerHTML = `<option value="" disabled selected>Select City</option>`;
    stateSelect.disabled = true;
    citySelect.disabled = true;
  }, 10);
});

// Initialize disabled states
stateSelect.disabled = true;
citySelect.disabled = true;
