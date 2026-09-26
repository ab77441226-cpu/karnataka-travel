"use strict";

/* =====================================================
   KARNATAKA DISTRICTS
===================================================== */

const districts = [

    {
        name: "Bagalkot",
        image: "images/bagalkota.jpg",
        lat: 16.18,
        lng: 75.70,
        places: ["Badami", "Pattadakal", "Aihole"]
    },

    {
        name: "Ballari",
        image: "images/ballari.jpg",
        lat: 15.14,
        lng: 76.92,
        places: ["Ballari Fort", "Daroji Sloth Bear Sanctuary", "Kumaraswamy Temple"]
    },

    {
        name: "Belagavi",
        image: "images/belagavi.jpg",
        lat: 15.85,
        lng: 74.50,
        places: ["Belagavi Fort", "Gokak Falls", "Kittur Fort"]
    },

    {
        name: "Bengaluru Urban",
        image: "images/bengaluru urban.jpg",
        lat: 12.97,
        lng: 77.59,
        places: ["Lalbagh", "Cubbon Park", "Bengaluru Palace", "Vidhana Soudha"]
    },

    {
        name: "Bengaluru Rural",
        image: "images/bengaluru rural.jpg",
        lat: 13.29,
        lng: 77.54,
        places: ["Devanahalli Fort", "Ghati Subramanya", "Nandi Hills"]
    },

    {
        name: "Bidar",
        image: "images/bidar.jpg",
        lat: 17.91,
        lng: 77.52,
        places: ["Bidar Fort", "Bahmani Tombs", "Gurudwara Nanak Jhira Sahib"]
    },

    {
        name: "Chamarajanagar",
        image: "images/chamarajanagar.jpg",
        lat: 11.92,
        lng: 76.94,
        places: ["Bandipur National Park", "B.R. Hills", "Male Mahadeshwara Hills"]
    },

    {
        name: "Chikkaballapur",
        image: "images/chikkaballapur.jpg",
        lat: 13.43,
        lng: 77.72,
        places: ["Nandi Hills", "Skandagiri", "Bhoga Nandeeshwara Temple"]
    },

    {
        name: "Chikkamagaluru",
        image: "images/chikkamagaluru.jpg",
        lat: 13.32,
        lng: 75.77,
        places: ["Mullayanagiri", "Baba Budangiri", "Coffee Estates", "Jhari Falls"]
    },

    {
        name: "Chitradurga",
        image: "images/chitradurga.jpg",
        lat: 14.23,
        lng: 76.40,
        places: ["Chitradurga Fort", "Chandravalli", "Vani Vilas Sagar Dam"]
    },

    {
        name: "Dakshina Kannada",
        image: "images/dakshina kannada.jpg",
        lat: 12.87,
        lng: 74.88,
        places: ["Mangaluru", "Panambur Beach", "Kadri Manjunath Temple"]
    },

    {
        name: "Davanagere",
        image: "images/davanagere.jpg",
        lat: 14.46,
        lng: 75.92,
        places: ["Kunduvada Kere", "Harihareshwara Temple", "Benne Dosa"]
    },

    {
        name: "Dharwad",
        image: "images/dharwad.jpg",
        lat: 15.46,
        lng: 75.01,
        places: ["Dharwad Pedha", "Sadhankeri Park", "Nrupatunga Betta"]
    },

    {
        name: "Gadag",
        image: "images/gadag.jpg",
        lat: 15.43,
        lng: 75.63,
        places: ["Trikuteshwara Temple", "Lakkundi", "Veeranarayana Temple"]
    },

    {
        name: "Hassan",
        image: "images/hassan.jpg",
        lat: 13.00,
        lng: 76.10,
        places: ["Belur", "Halebidu", "Shravanabelagola", "Manjarabad Fort"]
    },

    {
        name: "Haveri",
        image: "images/haveri.jpg",
        lat: 14.79,
        lng: 75.40,
        places: ["Tarakeshwara Temple", "Siddheswara Temple", "Bankapura Peacock Sanctuary"]
    },

    {
        name: "Kalaburagi",
        image: "images/kalaburagi.jpg",
        lat: 17.33,
        lng: 76.83,
        places: ["Gulbarga Fort", "Khwaja Bande Nawaz Dargah", "Haft Gumbaz"]
    },

    {
        name: "Kodagu",
        image: "images/kodagu.jpg",
        lat: 12.42,
        lng: 75.74,
        places: ["Madikeri", "Abbey Falls", "Raja's Seat", "Dubare"]
    },

    {
        name: "Kolar",
        image: "images/kolar.jpg",
        lat: 13.14,
        lng: 78.13,
        places: ["Kolar Gold Fields", "Kurudumale", "Kolaramma Temple"]
    },

    {
        name: "Koppal",
        image: "images/koppal.jpg",
        lat: 15.35,
        lng: 76.15,
        places: ["Anegundi", "Koppal Fort", "Kanakagiri", "Anjanadri Hills"]
    },

    {
        name: "Mandya",
        image: "images/mandya.jpg",
        lat: 12.52,
        lng: 76.90,
        places: ["Srirangapatna", "Ranganathittu Bird Sanctuary", "KRS Dam"]
    },

    {
        name: "Mysuru",
        image: "images/mysuru.jpg",
        lat: 12.30,
        lng: 76.65,
        places: ["Mysore Palace", "Chamundi Hills", "Brindavan Gardens", "Mysuru Zoo"]
    },

    {
        name: "Raichur",
        image: "images/raichur.jpg",
        lat: 16.21,
        lng: 77.35,
        places: ["Raichur Fort", "Maski", "Jaladurga"]
    },

    {
        name: "Ramanagara",
        image: "images/ramanagara.jpg",
        lat: 12.72,
        lng: 77.28,
        places: ["Ramadevara Betta", "Janapada Loka", "Kanva Reservoir"]
    },

    {
        name: "Shivamogga",
        image: "images/shivamogga.jpg",
        lat: 13.93,
        lng: 75.57,
        places: ["Jog Falls", "Kodachadri", "Agumbe", "Kundadri Hills"]
    },

    {
        name: "Tumakuru",
        image: "images/tumakuru.jpg",
        lat: 13.34,
        lng: 77.10,
        places: ["Devarayanadurga", "Siddaganga Mutt", "Namada Chilume"]
    },

    {
        name: "Udupi",
        image: "images/udupi.jpg",
        lat: 13.34,
        lng: 74.75,
        places: ["Sri Krishna Temple", "Malpe Beach", "St. Mary's Island"]
    },

    {
        name: "Uttara Kannada",
        image: "images/uttara kannada.jpg",
        lat: 14.80,
        lng: 74.13,
        places: ["Gokarna", "Murudeshwar", "Dandeli", "Yana Caves"]
    },

    {
        name: "Vijayanagara",
        image: "images/vijayanagara.jpg",
        lat: 15.33,
        lng: 76.46,
        places: ["Hampi", "Virupaksha Temple", "Vijaya Vittala Temple"]
    },

    {
        name: "Vijayapura",
        image: "images/vijayapura.jpg",
        lat: 16.83,
        lng: 75.71,
        places: ["Gol Gumbaz", "Ibrahim Rauza", "Bara Kaman"]
    },

    {
        name: "Yadgir",
        image: "images/yadgir.jpg",
        lat: 16.77,
        lng: 77.13,
        places: ["Yadgir Fort", "Sannati", "Shorapur"]
    }
];


/* =====================================================
   STARTING LOCATIONS
===================================================== */

const startingLocations = [

    { name: "Bengaluru", lat: 12.9716, lng: 77.5946 },
    { name: "Mysuru", lat: 12.2958, lng: 76.6394 },
    { name: "Mangaluru", lat: 12.9141, lng: 74.8560 },
    { name: "Hubballi", lat: 15.3647, lng: 75.1240 },
    { name: "Belagavi", lat: 15.8497, lng: 74.4977 },
    { name: "Vijayapura", lat: 16.8302, lng: 75.7100 },
    { name: "Shivamogga", lat: 13.9299, lng: 75.5681 },
    { name: "Ballari", lat: 15.1394, lng: 76.9214 },
    { name: "Tumakuru", lat: 13.3392, lng: 77.1010 },
    { name: "Udupi", lat: 13.3409, lng: 74.7421 },
    { name: "Davanagere", lat: 14.4644, lng: 75.9218 },
    { name: "Hassan", lat: 13.0068, lng: 76.0996 }
];


/* =====================================================
   HELPERS
===================================================== */

function safeJSONParse(value, fallback = null) {

    try {
        return value ? JSON.parse(value) : fallback;
    } catch (error) {
        return fallback;
    }
}


function formatCurrency(amount) {

    return "₹" +
        Number(amount || 0).toLocaleString("en-IN");
}


/* =====================================================
   LOAD DISTRICTS
===================================================== */

function loadDistricts() {

    const container = document.getElementById("districtCards");

    if (!container) return;

    container.innerHTML = "";

    districts.forEach(function (district) {

        const card = document.createElement("div");

        card.className = "card";

        card.innerHTML = `

            <img
                src="${district.image}"
                alt="${district.name}"
                class="district-image"
                onerror="this.src='https://placehold.co/900x600?text=${encodeURIComponent(district.name)}'"
            >

            <div class="card-content">

                <h3>${district.name}</h3>

                <p>
                    ${district.places.slice(0, 3).join(" • ")}
                </p>

                <a
                    href="district.html?district=${encodeURIComponent(district.name)}"
                    class="details-btn"
                >
                    View Details →
                </a>

            </div>
        `;

        container.appendChild(card);
    });
}


/* =====================================================
   LOAD DESTINATION DROPDOWNS
===================================================== */

function loadDestinationDropdown() {

    const fromCity = document.getElementById("fromCity");
    const toCity = document.getElementById("toCity");

    if (fromCity) {

        startingLocations.forEach(function (location) {

            const option = document.createElement("option");

            option.value = location.name;
            option.textContent = location.name;

            fromCity.appendChild(option);
        });
    }

    if (toCity) {

        districts.forEach(function (district) {

            const option = document.createElement("option");

            option.value = district.name;
            option.textContent = district.name;

            toCity.appendChild(option);
        });
    }
}


/* =====================================================
   GET LOCATION DATA
===================================================== */

function getLocationData(name) {

    if (!name) return null;

    const startingLocation =
        startingLocations.find(function (item) {

            return item.name.toLowerCase() === name.toLowerCase();

        });

    if (startingLocation) return startingLocation;

    return districts.find(function (item) {

        return item.name.toLowerCase() === name.toLowerCase();

    }) || null;
}


/* =====================================================
   SEARCH TRIP
===================================================== */

function searchTrip() {

    const from =
        document.getElementById("fromCity")?.value || "";

    const to =
        document.getElementById("toCity")?.value || "";

    const date =
        document.getElementById("travelDate")?.value || "";

    const days =
        document.getElementById("travelDays")?.value || "1";


    if (!from) {
        alert("Please select your starting location.");
        return;
    }

    if (!to) {
        alert("Please select your destination.");
        return;
    }

    if (from.toLowerCase() === to.toLowerCase()) {

        alert(
            "Starting location and destination cannot be same."
        );

        return;
    }


    let url =
        "booking.html?" +
        "from=" + encodeURIComponent(from) +
        "&destination=" + encodeURIComponent(to) +
        "&days=" + encodeURIComponent(days);


    if (date) {

        url += "&date=" + encodeURIComponent(date);
    }


    window.location.href = url;
}


/* =====================================================
   USE MY LOCATION
===================================================== */

function useMyLocation() {

    if (!navigator.geolocation) {

        alert("Your browser does not support location.");
        return;
    }


    navigator.geolocation.getCurrentPosition(

        function (position) {

            const lat = position.coords.latitude;
            const lng = position.coords.longitude;

            let nearest = null;
            let smallest = Infinity;


            startingLocations.forEach(function (location) {

                const distance =
                    Math.sqrt(
                        Math.pow(lat - location.lat, 2) +
                        Math.pow(lng - location.lng, 2)
                    );


                if (distance < smallest) {

                    smallest = distance;
                    nearest = location;
                }
            });


            if (nearest) {

                const fromCity =
                    document.getElementById("fromCity");

                if (fromCity) {
                    fromCity.value = nearest.name;
                }

                alert(
                    "Starting location selected: " +
                    nearest.name
                );
            }
        },

        function () {

            alert(
                "Unable to get your location. " +
                "Please select your starting location manually."
            );
        }
    );
}


/* =====================================================
   DISTRICT DETAILS
===================================================== */

function loadDistrictDetails() {

    const container =
        document.getElementById("districtDetails");

    if (!container) return;


    const params =
        new URLSearchParams(window.location.search);

    const name =
        params.get("district");


    const district =
        districts.find(function (item) {

            return item.name.toLowerCase() ===
                (name || "").toLowerCase();

        });


    if (!district) {

        container.innerHTML = `

            <div class="details-error">

                <h2>District Not Found</h2>

                <a
                    href="index.html#destinations"
                    class="back-btn"
                >
                    ← Back to Districts
                </a>

            </div>
        `;

        return;
    }


    container.innerHTML = `

        <div class="district-detail-card">

            <img
                src="${district.image}"
                class="detail-main-image"
                alt="${district.name}"
            >

            <div class="district-detail-content">

                <h1>${district.name}</h1>

                <p>
                    Tourist Places in ${district.name}
                </p>

                <h2>📍 Places to Visit</h2>

                <div class="places-grid">

                    ${district.places.map(function (place) {

                        return `

                            <div class="place-card">

                                <div class="place-icon">
                                    📍
                                </div>

                                <h3>${place}</h3>

                                <p>
                                    Explore ${place}
                                    in ${district.name}.
                                </p>

                            </div>
                        `;

                    }).join("")}

                </div>


                <div class="detail-buttons">

                    <a
                        href="index.html#destinations"
                        class="back-btn"
                    >
                        ← Back
                    </a>

                    <a
                        href="booking.html?destination=${encodeURIComponent(district.name)}"
                        class="main-btn"
                    >
                        🚌 Book Trip
                    </a>

                </div>

            </div>

        </div>
    `;
}


/* =====================================================
   BOOKING PAGE
===================================================== */

function setupBookingPage() {

    const params =
        new URLSearchParams(window.location.search);


    const from = params.get("from");
    const destination = params.get("destination");
    const date = params.get("date");
    const days = params.get("days");


    const fromInput =
        document.getElementById("fromCity");

    const destinationInput =
        document.getElementById("destination");


    if (from && fromInput) {
        fromInput.value = from;
    }

    if (destination && destinationInput) {
        destinationInput.value = destination;
    }


    if (date) {

        const dateInput =
            document.getElementById("travelDate");

        if (dateInput) {
            dateInput.value = date;
        }
    }


    if (days) {

        const daysInput =
            document.getElementById("days");

        if (daysInput) {
            daysInput.value = days;
        }
    }


    setupBookingMap();
}


/* =====================================================
   BOOKING MAP
===================================================== */

let bookingMap = null;
let fromMarker = null;
let toMarker = null;
let routeLine = null;


function setupBookingMap() {

    const mapElement =
        document.getElementById("bookingMap");

    if (!mapElement) return;


    if (typeof L === "undefined") {

        console.log("Leaflet not loaded.");
        return;
    }


    bookingMap =
        L.map("bookingMap").setView(
            [15.3173, 75.7139],
            7
        );


    L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
            maxZoom: 19,
            attribution:
                "&copy; OpenStreetMap contributors"
        }
    ).addTo(bookingMap);


    updateBookingMap();


    document
        .getElementById("fromCity")
        ?.addEventListener(
            "change",
            updateBookingMap
        );


    document
        .getElementById("destination")
        ?.addEventListener(
            "change",
            updateBookingMap
        );
}


/* =====================================================
   UPDATE ROUTE MAP
===================================================== */

async function updateBookingMap() {

    if (!bookingMap) return;


    const from =
        document.getElementById("fromCity")?.value;

    const to =
        document.getElementById("destination")?.value;


    if (!from || !to) return;


    const fromData = getLocationData(from);
    const toData = getLocationData(to);


    if (!fromData || !toData) return;


    if (fromMarker) {
        bookingMap.removeLayer(fromMarker);
    }

    if (toMarker) {
        bookingMap.removeLayer(toMarker);
    }

    if (routeLine) {
        bookingMap.removeLayer(routeLine);
    }


    fromMarker =
        L.marker([
            fromData.lat,
            fromData.lng
        ])
        .addTo(bookingMap)
        .bindPopup(
            "📍 Starting Point<br><b>" +
            fromData.name +
            "</b>"
        );


    toMarker =
        L.marker([
            toData.lat,
            toData.lng
        ])
        .addTo(bookingMap)
        .bindPopup(
            "🎯 Destination<br><b>" +
            toData.name +
            "</b>"
        );


    const url =
        "https://router.project-osrm.org/route/v1/driving/" +
        fromData.lng + "," +
        fromData.lat + ";" +
        toData.lng + "," +
        toData.lat +
        "?overview=full&geometries=geojson";


    try {

        const response =
            await fetch(url);

        const data =
            await response.json();


        if (!data.routes || !data.routes.length) {

            throw new Error("Route not found");
        }


        const route = data.routes[0];


        const coordinates =
            route.geometry.coordinates.map(function (point) {

                return [
                    point[1],
                    point[0]
                ];
            });


        routeLine =
            L.polyline(
                coordinates,
                {
                    weight: 5
                }
            )
            .addTo(bookingMap);


        const distance =
            (route.distance / 1000).toFixed(1);


        const hours =
            Math.floor(route.duration / 3600);


        const minutes =
            Math.round(
                (route.duration % 3600) / 60
            );


        const routeInfo =
            document.getElementById("routeInfo");


        if (routeInfo) {

            routeInfo.innerHTML = `

                <strong>🚗 Route Information</strong>

                <br>

                📍 ${fromData.name}
                → 🎯 ${toData.name}

                <br>

                📏 Distance:
                ${distance} km

                <br>

                ⏱️ Estimated Time:
                ${hours}h ${minutes}m

            `;
        }


        bookingMap.fitBounds(
            routeLine.getBounds(),
            {
                padding: [30, 30]
            }
        );

    } catch (error) {

        console.error("Route error:", error);


        const routeInfo =
            document.getElementById("routeInfo");


        if (routeInfo) {

            routeInfo.innerHTML = `

                📍 ${fromData.name}
                → 🎯 ${toData.name}

                <br>

                Route could not be loaded.

            `;
        }


        bookingMap.fitBounds(
            [
                [fromData.lat, fromData.lng],
                [toData.lat, toData.lng]
            ],
            {
                padding: [30, 30]
            }
        );
    }
}


/* =====================================================
   BOOKING PRICES
===================================================== */

const vehiclePrices = {

    "Car": 2500,
    "SUV": 3500,
    "Tempo Traveller": 5000,
    "Mini Bus": 7000

};


function calculateBookingTotal() {

    const vehicle =
        document.getElementById("vehicle")?.value || "";


    const days =
        Number(
            document.getElementById("days")?.value || 1
        );


    const travelers =
        Number(
            document.getElementById("travelers")?.value || 1
        );


    const rate =
        vehiclePrices[vehicle] || 0;


    const total =
        rate * days;


    const rateElement =
        document.getElementById("vehicleRate");

    const daysElement =
        document.getElementById("displayDays");

    const travelersElement =
        document.getElementById("displayTravelers");

    const totalElement =
        document.getElementById("totalAmount");


    if (rateElement) {

        rateElement.textContent =
            formatCurrency(rate) + " / day";
    }


    if (daysElement) {
        daysElement.textContent = days;
    }


    if (travelersElement) {
        travelersElement.textContent = travelers;
    }


    if (totalElement) {

        totalElement.textContent =
            formatCurrency(total);
    }


    return total;
}


/* =====================================================
   CURRENT USER
===================================================== */

function getCurrentUser() {

    const value =
        sessionStorage.getItem("currentUser");

    return safeJSONParse(value, null);
}


/* =====================================================
   BOOKING SUBMIT
===================================================== */

async function handleBookingSubmit(event) {

    event.preventDefault();


    const user = getCurrentUser();


    if (!user || !user.id) {

        alert("Please login before booking.");

        window.location.href = "login.html";

        return;
    }


    const name =
        document.getElementById("name")?.value.trim() || "";


    const mobile =
        document.getElementById("mobile")?.value.trim() || "";


    const from =
        document.getElementById("fromCity")?.value || "";


    const destination =
        document.getElementById("destination")?.value || "";


    const travelDate =
        document.getElementById("travelDate")?.value || "";


    const days =
        Number(
            document.getElementById("days")?.value || 1
        );


    const travelers =
        Number(
            document.getElementById("travelers")?.value || 1
        );


    const vehicle =
        document.getElementById("vehicle")?.value || "";


    if (!name) {

        alert("Please enter your name.");
        return;
    }


    if (!/^[0-9]{10}$/.test(mobile)) {

        alert(
            "Please enter a valid 10 digit mobile number."
        );

        return;
    }


    if (!from) {

        alert("Please select starting location.");
        return;
    }


    if (!destination) {

        alert("Please select destination.");
        return;
    }


    if (!travelDate) {

        alert("Please select travel date.");
        return;
    }


    if (!vehicle) {

        alert("Please select vehicle.");
        return;
    }


    const total =
        calculateBookingTotal();


    const bookingId =
        "KT" + Date.now();


    const bookingData = {

        bookingId: bookingId,

        userId: user.id,

        name: name,

        mobile: mobile,

        from: from,

        destination: destination,

        travelDate: travelDate,

        days: days,

        travelers: travelers,

        vehicle: vehicle,

        total: total,

        paymentMethod: "Pending",

        status: "Pending Payment"
    };


    try {

        /* =================================================
           SEND BOOKING TO BACKEND
        ================================================= */

        const response =
            await fetch(
                "https://karnataka-travel-4z5m.onrender.com/api/bookings",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify(bookingData)
                }
            );


        const result =
            await response.json();


        if (!response.ok) {

            throw new Error(
                result.message ||
                "Booking failed."
            );
        }


        /* =================================================
           SAVE CURRENT BOOKING
        ================================================= */

        sessionStorage.setItem(
            "currentBooking",
            JSON.stringify(bookingData)
        );


        /* =================================================
           LOCAL BOOKING HISTORY
        ================================================= */

        let bookings =
            safeJSONParse(
                localStorage.getItem("bookings"),
                []
            );


        if (!Array.isArray(bookings)) {
            bookings = [];
        }


        bookings.push(bookingData);


        localStorage.setItem(
            "bookings",
            JSON.stringify(bookings)
        );


        /* =================================================
           PAYMENT PAGE
        ================================================= */

        window.location.href =
            "payment.html";

    } catch (error) {

        console.error(
            "Booking error:",
            error
        );


        alert(
            "Booking failed: " +
            error.message
        );
    }
}


/* =====================================================
   BOOKING EVENTS
===================================================== */

function setupBookingEvents() {

    const form =
        document.getElementById("bookingForm");


    if (form) {

        form.addEventListener(
            "submit",
            handleBookingSubmit
        );
    }


    document
        .getElementById("vehicle")
        ?.addEventListener(
            "change",
            calculateBookingTotal
        );


    document
        .getElementById("days")
        ?.addEventListener(
            "input",
            calculateBookingTotal
        );


    document
        .getElementById("travelers")
        ?.addEventListener(
            "input",
            calculateBookingTotal
        );


    calculateBookingTotal();
}


/* =====================================================
   PAYMENT PAGE
===================================================== */

function loadPaymentPage() {

    const booking =
        safeJSONParse(
            sessionStorage.getItem("currentBooking"),
            null
        );


    if (!booking) return;


    const id =
        document.getElementById("paymentBookingId");

    const amount =
        document.getElementById("paymentAmount");

    const destination =
        document.getElementById("paymentDestination");


    if (id) {
        id.textContent = booking.bookingId;
    }


    if (amount) {

        amount.textContent =
            formatCurrency(booking.total);
    }


    if (destination) {

        destination.textContent =
            booking.from +
            " → " +
            booking.destination;
    }
}


/* =====================================================
   PAYMENT SUBMIT
===================================================== */

async function handlePaymentSubmit(event) {

    event.preventDefault();


    const booking =
        safeJSONParse(
            sessionStorage.getItem("currentBooking"),
            null
        );


    if (!booking) {

        alert(
            "Booking information not found."
        );

        return;
    }


    const paymentMethod =
        document.getElementById("paymentMethod")?.value ||
        "Cash";


    try {

        /* =================================================
           UPDATE PAYMENT IN BACKEND
        ================================================= */

        const response =
            await fetch(
                "https://karnataka-travel-4z5m.onrender.com/api/bookings/payment",
                {
                    method: "PUT",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({

                        bookingId:
                            booking.bookingId,

                        paymentMethod:
                            paymentMethod,

                        status:
                            "Paid"
                    })
                }
            );


        const result =
            await response.json();


        if (!response.ok) {

            throw new Error(
                result.message ||
                "Payment failed."
            );
        }


        /* =================================================
           UPDATE BOOKING
        ================================================= */

        booking.paymentMethod =
            paymentMethod;

        booking.status =
            "Paid";


        sessionStorage.setItem(
            "currentBooking",
            JSON.stringify(booking)
        );


        /* =================================================
           UPDATE LOCAL HISTORY
        ================================================= */

        let bookings =
            safeJSONParse(
                localStorage.getItem("bookings"),
                []
            );


        if (!Array.isArray(bookings)) {
            bookings = [];
        }


        const index =
            bookings.findIndex(function (item) {

                return item.bookingId ===
                    booking.bookingId;
            });


        if (index !== -1) {

            bookings[index] = {

                ...bookings[index],

                paymentMethod:
                    paymentMethod,

                status:
                    "Paid"
            };


            localStorage.setItem(
                "bookings",
                JSON.stringify(bookings)
            );
        }


        /* =================================================
           SUCCESS PAGE
        ================================================= */

        window.location.href =
            "success.html";

    } catch (error) {

        console.error(
            "Payment error:",
            error
        );


        alert(
            "Payment failed: " +
            error.message
        );
    }
}


/* =====================================================
   BOOKING HISTORY
===================================================== */

function loadBookingHistory() {

    const container =
        document.getElementById("bookingHistory");


    if (!container) return;


    const bookings =
        safeJSONParse(
            localStorage.getItem("bookings"),
            []
        );


    if (
        !Array.isArray(bookings) ||
        bookings.length === 0
    ) {

        container.innerHTML = `

            <div class="history-empty">

                <h2>
                    No bookings found
                </h2>

                <p>
                    You have not made any bookings yet.
                </p>

            </div>
        `;

        return;
    }


    container.innerHTML = "";


    bookings
        .slice()
        .reverse()
        .forEach(function (booking) {

            const card =
                document.createElement("div");


            card.className =
                "history-card";


            card.innerHTML = `

                <div class="history-header">

                    <h2>
                        📍 ${booking.from || "Starting Location"}
                        →
                        🎯 ${booking.destination || ""}
                    </h2>

                    <span>
                        🎫 ${booking.bookingId || ""}
                    </span>

                </div>

                <hr>

                <div class="history-details">

                    <p>
                        📍 <strong>From:</strong>
                        ${booking.from || "Not available"}
                    </p>

                    <p>
                        🎯 <strong>To:</strong>
                        ${booking.destination || ""}
                    </p>

                    <p>
                        👤 <strong>Name:</strong>
                        ${booking.name || ""}
                    </p>

                    <p>
                        📱 <strong>Mobile:</strong>
                        ${booking.mobile || ""}
                    </p>

                    <p>
                        📅 <strong>Date:</strong>
                        ${booking.travelDate || ""}
                    </p>

                    <p>
                        🗓️ <strong>Days:</strong>
                        ${booking.days || 1}
                    </p>

                    <p>
                        👥 <strong>Travelers:</strong>
                        ${booking.travelers || 1}
                    </p>

                    <p>
                        🚗 <strong>Vehicle:</strong>
                        ${booking.vehicle || ""}
                    </p>

                    <p>
                        💳 <strong>Payment:</strong>
                        ${booking.paymentMethod || "Pending"}
                    </p>

                    <p>
                        <strong>Status:</strong>
                        ${booking.status || "Pending"}
                    </p>

                    <p class="history-total">

                        💰 <strong>Total:</strong>

                        ${formatCurrency(booking.total)}

                    </p>

                </div>
            `;


            container.appendChild(card);
        });
}


/* =====================================================
   LOGOUT
===================================================== */

function logout() {

    sessionStorage.removeItem("currentUser");

    sessionStorage.removeItem("currentBooking");

    window.location.href =
        "login.html";
}


/* =====================================================
   PAGE DETECTION
===================================================== */

function detectPage() {

    const page =
        window.location.pathname
            .split("/")
            .pop()
            .toLowerCase();


    /* HOME */

    if (
        page === "" ||
        page === "index.html"
    ) {

        loadDistricts();

        loadDestinationDropdown();

        return;
    }


    /* DISTRICT */

    if (page === "district.html") {

        loadDistrictDetails();

        return;
    }


    /* BOOKING */

    if (page === "booking.html") {

        setupBookingPage();

        setupBookingEvents();


        const dateInput =
            document.getElementById("travelDate");


        if (dateInput) {

            dateInput.min =
                new Date()
                    .toISOString()
                    .split("T")[0];
        }

        return;
    }


    /* PAYMENT */

    if (page === "payment.html") {

        loadPaymentPage();


        const form =
            document.getElementById("paymentForm");


        if (form) {

            form.addEventListener(
                "submit",
                handlePaymentSubmit
            );
        }

        return;
    }


    /* BOOKING HISTORY */

    if (page === "booking-history.html") {

        loadBookingHistory();

        return;
    }
}


/* =====================================================
   START
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        detectPage();

    }
);


/* =====================================================
   GLOBAL FUNCTIONS
===================================================== */

window.searchTrip =
    searchTrip;

window.useMyLocation =
    useMyLocation;

window.updateBookingMap =
    updateBookingMap;

window.calculateBookingTotal =
    calculateBookingTotal;

window.logout =
    logout;
