"use strict";

/*
=========================================================
 KARNATAKA TRAVEL - API CONFIGURATION
 Works on:
 PC
 Mobile
 Tablet
 Same Wi-Fi network
=========================================================
*/

const API_BASE =
    window.location.protocol === "file:"
        ? "http://localhost:5000"
        : `${window.location.protocol}//${window.location.hostname}:5000`;
