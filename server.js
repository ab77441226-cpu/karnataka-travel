"use strict";

const express = require("express");
const mysql = require("mysql2/promise");
const cors = require("cors");
const bcrypt = require("bcryptjs");

const app = express();

/* =====================================================
   PORT
===================================================== */

const PORT = process.env.PORT || 5000;


/* =====================================================
   MIDDLEWARE
===================================================== */

app.use(cors({
    origin: true,
    credentials: true
}));

app.use(express.json());

app.use(express.urlencoded({
    extended: true
}));


/* =====================================================
   MYSQL
===================================================== */

/*
   LOCAL COMPUTER:
   These values can be placed in environment variables.

   For online deployment:
   Set DB_HOST, DB_PORT, DB_USER,
   DB_PASSWORD and DB_NAME in your hosting service.
*/

const db = mysql.createPool({

    host: process.env.DB_HOST || "localhost",

    port: Number(
        process.env.DB_PORT || 3307
    ),

    user:
        process.env.DB_USER || "root",

    password:
        process.env.DB_PASSWORD || "karnataka@123",

    database:
        process.env.DB_NAME || "karnataka_travel",

    waitForConnections: true,

    connectionLimit: 10,

    queueLimit: 0
});


/* =====================================================
   DATABASE TEST
===================================================== */

async function testDatabase() {

    try {

        const connection =
            await db.getConnection();

        console.log(
            "========================================"
        );

        console.log(
            "✅ MySQL connected successfully"
        );

        console.log(
            "========================================"
        );

        connection.release();

    } catch (error) {

        console.error(
            "❌ MySQL connection failed"
        );

        console.error(
            error.message
        );

    }
}

testDatabase();


/* =====================================================
   HOME
===================================================== */

app.get("/", (req, res) => {

    res.json({

        success: true,

        message:
            "Karnataka Travel Server is running",

        port: PORT

    });

});


/* =====================================================
   TEST DATABASE
===================================================== */

app.get("/api/test-db", async (req, res) => {

    try {

        const [rows] =
            await db.execute(
                "SELECT 1 AS test"
            );

        res.json({

            success: true,

            message:
                "MySQL connection working",

            data: rows

        });

    } catch (error) {

        console.error(
            "Database test error:",
            error.message
        );

        res.status(500).json({

            success: false,

            message:
                error.message

        });

    }

});


/* =====================================================
   REGISTER
===================================================== */

app.post("/api/register", async (req, res) => {

    try {

        const {
            name,
            email,
            mobile,
            password
        } = req.body;


        if (
            !name ||
            !email ||
            !mobile ||
            !password
        ) {

            return res.status(400).json({

                success: false,

                message:
                    "All fields are required."

            });

        }


        const cleanName =
            String(name).trim();


        const cleanEmail =
            String(email)
                .trim()
                .toLowerCase();


        const cleanMobile =
            String(mobile)
                .replace(/\D/g, "");


        if (cleanName.length < 2) {

            return res.status(400).json({

                success: false,

                message:
                    "Enter a valid name."

            });

        }


        if (
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/
                .test(cleanEmail)
        ) {

            return res.status(400).json({

                success: false,

                message:
                    "Enter a valid email."

            });

        }


        if (
            !/^[0-9]{10}$/.test(cleanMobile)
        ) {

            return res.status(400).json({

                success: false,

                message:
                    "Mobile number must contain 10 digits."

            });

        }


        if (
            String(password).length < 6
        ) {

            return res.status(400).json({

                success: false,

                message:
                    "Password must contain at least 6 characters."

            });

        }


        const [existing] =
            await db.execute(

                `SELECT id
                 FROM users
                 WHERE email = ?
                 OR mobile = ?
                 LIMIT 1`,

                [
                    cleanEmail,
                    cleanMobile
                ]

            );


        if (existing.length > 0) {

            return res.status(409).json({

                success: false,

                message:
                    "Email or mobile already registered."

            });

        }


        const hashedPassword =
            await bcrypt.hash(
                String(password),
                10
            );


        const [result] =
            await db.execute(

                `INSERT INTO users
                (name, email, password, mobile)
                VALUES (?, ?, ?, ?)`,

                [
                    cleanName,
                    cleanEmail,
                    hashedPassword,
                    cleanMobile
                ]

            );


        res.status(201).json({

            success: true,

            message:
                "Registration successful.",

            user: {

                id:
                    result.insertId,

                name:
                    cleanName,

                email:
                    cleanEmail,

                mobile:
                    cleanMobile

            }

        });

    } catch (error) {

        console.error(
            "Register error:",
            error.message
        );

        res.status(500).json({

            success: false,

            message:
                error.message

        });

    }

});


/* =====================================================
   LOGIN
===================================================== */

app.post("/api/login", async (req, res) => {

    try {

        const {
            email,
            mobile,
            password
        } = req.body;


        if (
            (!email && !mobile) ||
            !password
        ) {

            return res.status(400).json({

                success: false,

                message:
                    "Enter email/mobile and password."

            });

        }


        let rows;


        if (email) {

            [rows] =
                await db.execute(

                    `SELECT *
                     FROM users
                     WHERE email = ?
                     LIMIT 1`,

                    [
                        String(email)
                            .trim()
                            .toLowerCase()
                    ]

                );

        } else {

            [rows] =
                await db.execute(

                    `SELECT *
                     FROM users
                     WHERE mobile = ?
                     LIMIT 1`,

                    [
                        String(mobile)
                            .replace(/\D/g, "")
                    ]

                );

        }


        if (rows.length === 0) {

            return res.status(401).json({

                success: false,

                message:
                    "User not found."

            });

        }


        const user =
            rows[0];


        const passwordMatch =
            await bcrypt.compare(
                String(password),
                String(user.password)
            );


        if (!passwordMatch) {

            return res.status(401).json({

                success: false,

                message:
                    "Incorrect password."

            });

        }


        res.json({

            success: true,

            message:
                "Login successful.",

            user: {

                id:
                    user.id,

                name:
                    user.name,

                email:
                    user.email,

                mobile:
                    user.mobile

            }

        });

    } catch (error) {

        console.error(
            "Login error:",
            error.message
        );

        res.status(500).json({

            success: false,

            message:
                error.message

        });

    }

});


/* =====================================================
   PROFILE
===================================================== */

app.get(
    "/api/profile/:id",
    async (req, res) => {

        try {

            const id =
                Number(req.params.id);


            if (
                !Number.isInteger(id) ||
                id <= 0
            ) {

                return res.status(400).json({

                    success: false,

                    message:
                        "Invalid user ID."

                });

            }


            const [rows] =
                await db.execute(

                    `SELECT
                        id,
                        name,
                        email,
                        mobile,
                        created_at
                     FROM users
                     WHERE id = ?
                     LIMIT 1`,

                    [id]

                );


            if (rows.length === 0) {

                return res.status(404).json({

                    success: false,

                    message:
                        "User not found."

                });

            }


            res.json({

                success: true,

                user:
                    rows[0]

            });

        } catch (error) {

            console.error(
                "Profile error:",
                error.message
            );

            res.status(500).json({

                success: false,

                message:
                    error.message

            });

        }

    }
);


/* =====================================================
   FORGOT PASSWORD
===================================================== */

app.post(
    "/api/forgot-password",
    async (req, res) => {

        try {

            const {
                email,
                mobile
            } = req.body;


            if (!email && !mobile) {

                return res.status(400).json({

                    success: false,

                    message:
                        "Enter email or mobile number."

                });

            }


            let rows;


            if (email) {

                [rows] =
                    await db.execute(

                        `SELECT *
                         FROM users
                         WHERE email = ?
                         LIMIT 1`,

                        [
                            String(email)
                                .trim()
                                .toLowerCase()
                        ]

                    );

            } else {

                [rows] =
                    await db.execute(

                        `SELECT *
                         FROM users
                         WHERE mobile = ?
                         LIMIT 1`,

                        [
                            String(mobile)
                                .replace(/\D/g, "")
                        ]

                    );

            }


            if (rows.length === 0) {

                return res.status(404).json({

                    success: false,

                    message:
                        "No account found."

                });

            }


            const user =
                rows[0];


            const otp =
                Math.floor(
                    100000 +
                    Math.random() * 900000
                ).toString();


            const expiry =
                new Date(
                    Date.now() +
                    10 * 60 * 1000
                );


            await db.execute(

                `UPDATE users
                 SET otp = ?,
                     otp_expiry = ?
                 WHERE id = ?`,

                [
                    otp,
                    expiry,
                    user.id
                ]

            );


            console.log(
                "========================================"
            );

            console.log(
                "KARNATAKA TRAVEL OTP"
            );

            console.log(
                "OTP:",
                otp
            );

            console.log(
                "========================================"
            );


            res.json({

                success: true,

                message:
                    "OTP generated successfully.",

                userId:
                    user.id,

                developmentOTP:
                    otp

            });

        } catch (error) {

            console.error(
                "Forgot password error:",
                error.message
            );

            res.status(500).json({

                success: false,

                message:
                    error.message

            });

        }

    }
);


/* =====================================================
   VERIFY OTP
===================================================== */

app.post(
    "/api/verify-otp",
    async (req, res) => {

        try {

            const {
                email,
                mobile,
                otp
            } = req.body;


            if (
                (!email && !mobile) ||
                !otp
            ) {

                return res.status(400).json({

                    success: false,

                    message:
                        "Email/mobile and OTP are required."

                });

            }


            let rows;


            if (email) {

                [rows] =
                    await db.execute(

                        `SELECT *
                         FROM users
                         WHERE email = ?
                         LIMIT 1`,

                        [
                            String(email)
                                .trim()
                                .toLowerCase()
                        ]

                    );

            } else {

                [rows] =
                    await db.execute(

                        `SELECT *
                         FROM users
                         WHERE mobile = ?
                         LIMIT 1`,

                        [
                            String(mobile)
                                .replace(/\D/g, "")
                        ]

                    );

            }


            if (rows.length === 0) {

                return res.status(404).json({

                    success: false,

                    message:
                        "User not found."

                });

            }


            const user =
                rows[0];


            if (
                String(user.otp) !==
                String(otp)
            ) {

                return res.status(400).json({

                    success: false,

                    message:
                        "Invalid OTP."

                });

            }


            if (
                !user.otp_expiry ||
                new Date(user.otp_expiry)
                    .getTime() < Date.now()
            ) {

                return res.status(400).json({

                    success: false,

                    message:
                        "OTP expired."

                });

            }


            res.json({

                success: true,

                message:
                    "OTP verified successfully.",

                userId:
                    user.id

            });

        } catch (error) {

            console.error(
                "OTP error:",
                error.message
            );

            res.status(500).json({

                success: false,

                message:
                    error.message

            });

        }

    }
);


/* =====================================================
   RESET PASSWORD
===================================================== */

app.post(
    "/api/reset-password",
    async (req, res) => {

        try {

            const {
                userId,
                otp,
                newPassword
            } = req.body;


            if (
                !userId ||
                !otp ||
                !newPassword
            ) {

                return res.status(400).json({

                    success: false,

                    message:
                        "All fields are required."

                });

            }


            if (
                String(newPassword).length < 6
            ) {

                return res.status(400).json({

                    success: false,

                    message:
                        "Password must contain at least 6 characters."

                });

            }


            const [rows] =
                await db.execute(

                    `SELECT *
                     FROM users
                     WHERE id = ?
                     LIMIT 1`,

                    [Number(userId)]

                );


            if (rows.length === 0) {

                return res.status(404).json({

                    success: false,

                    message:
                        "User not found."

                });

            }


            const user =
                rows[0];


            if (
                String(user.otp) !==
                String(otp)
            ) {

                return res.status(400).json({

                    success: false,

                    message:
                        "Invalid OTP."

                });

            }


            if (
                !user.otp_expiry ||
                new Date(user.otp_expiry)
                    .getTime() < Date.now()
            ) {

                return res.status(400).json({

                    success: false,

                    message:
                        "OTP expired."

                });

            }


            const hash =
                await bcrypt.hash(
                    String(newPassword),
                    10
                );


            await db.execute(

                `UPDATE users
                 SET password = ?,
                     otp = NULL,
                     otp_expiry = NULL
                 WHERE id = ?`,

                [
                    hash,
                    Number(userId)
                ]

            );


            res.json({

                success: true,

                message:
                    "Password changed successfully."

            });

        } catch (error) {

            console.error(
                "Reset password error:",
                error.message
            );

            res.status(500).json({

                success: false,

                message:
                    error.message

            });

        }

    }
);


/* =====================================================
   CREATE BOOKING
===================================================== */

app.post(
    "/api/bookings",
    async (req, res) => {

        try {

            const {

                bookingId,
                userId,
                name,
                mobile,
                from_location,
                destination,
                travelDate,
                days,
                travelers,
                vehicle,
                total,
                paymentMethod,
                status

            } = req.body;


            if (
                !userId ||
                !name ||
                !mobile ||
                !from_location ||
                !destination ||
                !travelDate ||
                !days ||
                !travelers ||
                !vehicle
            ) {

                return res.status(400).json({

                    success: false,

                    message:
                        "All booking fields are required."

                });

            }


            const finalBookingId =
                bookingId ||
                "KT" + Date.now();


            const [result] =
                await db.execute(

                    `INSERT INTO bookings
                    (
                        booking_id,
                        user_id,
                        name,
                        mobile,
                        from_location,
                        destination,
                        travel_date,
                        days,
                        travelers,
                        vehicle,
                        total,
                        payment_method,
                        status
                    )
                    VALUES
                    (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,

                    [

                        finalBookingId,

                        Number(userId),

                        String(name).trim(),

                        String(mobile).trim(),

                        String(from_location).trim(),

                        String(destination).trim(),

                        travelDate,

                        Number(days),

                        Number(travelers),

                        String(vehicle).trim(),

                        Number(total || 0),

                        paymentMethod ||
                        "Pending",

                        status ||
                        "Pending Payment"

                    ]

                );


            res.status(201).json({

                success: true,

                message:
                    "Booking created successfully.",

                booking_id:
                    finalBookingId,

                insertId:
                    result.insertId

            });

        } catch (error) {

            console.error(
                "Booking error:",
                error.message
            );

            res.status(500).json({

                success: false,

                message:
                    error.message

            });

        }

    }
);


/* =====================================================
   PAYMENT
===================================================== */

app.put(
    "/api/bookings/:bookingId/payment",
    async (req, res) => {

        try {

            const bookingId =
                req.params.bookingId;


            const {
                paymentMethod,
                payment_method
            } = req.body;


            const method =
                paymentMethod ||
                payment_method ||
                "Cash";


            const [result] =
                await db.execute(

                    `UPDATE bookings
                     SET payment_method = ?,
                         status = 'Paid'
                     WHERE booking_id = ?`,

                    [
                        method,
                        bookingId
                    ]

                );


            if (
                result.affectedRows === 0
            ) {

                return res.status(404).json({

                    success: false,

                    message:
                        "Booking not found."

                });

            }


            res.json({

                success: true,

                message:
                    "Payment updated successfully.",

                bookingId,

                paymentMethod:
                    method,

                status:
                    "Paid"

            });

        } catch (error) {

            console.error(
                "Payment error:",
                error.message
            );

            res.status(500).json({

                success: false,

                message:
                    error.message

            });

        }

    }
);


/* =====================================================
   USER BOOKING HISTORY
===================================================== */

app.get(
    "/api/bookings/user/:userId",
    async (req, res) => {

        try {

            const userId =
                Number(req.params.userId);


            if (
                !Number.isInteger(userId) ||
                userId <= 0
            ) {

                return res.status(400).json({

                    success: false,

                    message:
                        "Invalid user ID."

                });

            }


            const [rows] =
                await db.execute(

                    `SELECT *
                     FROM bookings
                     WHERE user_id = ?
                     ORDER BY id DESC`,

                    [userId]

                );


            res.json({

                success: true,

                bookings:
                    rows

            });

        } catch (error) {

            console.error(
                "Booking history error:",
                error.message
            );

            res.status(500).json({

                success: false,

                message:
                    error.message

            });

        }

    }
);


/* =====================================================
   SINGLE BOOKING
===================================================== */

app.get(
    "/api/bookings/:bookingId",
    async (req, res) => {

        try {

            const [rows] =
                await db.execute(

                    `SELECT *
                     FROM bookings
                     WHERE booking_id = ?
                     LIMIT 1`,

                    [
                        req.params.bookingId
                    ]

                );


            if (rows.length === 0) {

                return res.status(404).json({

                    success: false,

                    message:
                        "Booking not found."

                });

            }


            res.json({

                success: true,

                booking:
                    rows[0]

            });

        } catch (error) {

            console.error(
                "Single booking error:",
                error.message
            );

            res.status(500).json({

                success: false,

                message:
                    error.message

            });

        }

    }
);


/* =====================================================
   DELETE BOOKING
===================================================== */

app.delete(
    "/api/bookings/:bookingId",
    async (req, res) => {

        try {

            const [result] =
                await db.execute(

                    `DELETE FROM bookings
                     WHERE booking_id = ?`,

                    [
                        req.params.bookingId
                    ]

                );


            if (
                result.affectedRows === 0
            ) {

                return res.status(404).json({

                    success: false,

                    message:
                        "Booking not found."

                });

            }


            res.json({

                success: true,

                message:
                    "Booking deleted successfully."

            });

        } catch (error) {

            console.error(
                "Delete booking error:",
                error.message
            );

            res.status(500).json({

                success: false,

                message:
                    error.message

            });

        }

    }
);


/* =====================================================
   DELETE ALL BOOKINGS
===================================================== */

app.delete(
    "/api/bookings",
    async (req, res) => {

        try {

            await db.execute(
                "DELETE FROM bookings"
            );


            res.json({

                success: true,

                message:
                    "All bookings deleted successfully."

            });

        } catch (error) {

            console.error(
                "Delete all bookings error:",
                error.message
            );

            res.status(500).json({

                success: false,

                message:
                    error.message

            });

        }

    }
);


/* =====================================================
   ADMIN LOGIN
===================================================== */

app.post(
    "/api/admin/login",
    async (req, res) => {

        try {

            const {
                email,
                password
            } = req.body;


            const adminEmail =
                process.env.ADMIN_EMAIL ||
                "admin@karnatakatravel.com";


            const adminPassword =
                process.env.ADMIN_PASSWORD ||
                "admin123";


            if (
                String(email)
                    .trim()
                    .toLowerCase() !==
                adminEmail.toLowerCase()
                ||
                String(password) !==
                adminPassword
            ) {

                return res.status(401).json({

                    success: false,

                    message:
                        "Invalid admin email or password."

                });

            }


            res.json({

                success: true,

                message:
                    "Admin login successful.",

                admin: {

                    email:
                        adminEmail,

                    name:
                        "Administrator"

                }

            });

        } catch (error) {

            console.error(
                "Admin login error:",
                error.message
            );

            res.status(500).json({

                success: false,

                message:
                    error.message

            });

        }

    }
);


/* =====================================================
   ADMIN BOOKINGS
===================================================== */

app.get(
    "/api/admin/bookings",
    async (req, res) => {

        try {

            const [rows] =
                await db.execute(

                    `SELECT *
                     FROM bookings
                     ORDER BY id DESC`

                );


            res.json({

                success: true,

                bookings:
                    rows

            });

        } catch (error) {

            console.error(
                "Admin bookings error:",
                error.message
            );

            res.status(500).json({

                success: false,

                message:
                    error.message

            });

        }

    }
);


/* =====================================================
   CONTACT
===================================================== */

app.post(
    "/api/contact",
    async (req, res) => {

        try {

            const {
                name,
                email,
                mobile,
                subject,
                message
            } = req.body;


            if (
                !name ||
                !email ||
                !message
            ) {

                return res.status(400).json({

                    success: false,

                    message:
                        "Name, email and message are required."

                });

            }


            await db.execute(

                `INSERT INTO contact_messages
                (
                    name,
                    email,
                    mobile,
                    subject,
                    message
                )
                VALUES (?, ?, ?, ?, ?)`,

                [

                    String(name).trim(),

                    String(email)
                        .trim()
                        .toLowerCase(),

                    mobile || null,

                    subject || null,

                    String(message).trim()

                ]

            );


            res.json({

                success: true,

                message:
                    "Your message has been sent successfully."

            });

        } catch (error) {

            console.error(
                "Contact error:",
                error.message
            );

            res.status(500).json({

                success: false,

                message:
                    error.message

            });

        }

    }
);


/* =====================================================
   API 404
===================================================== */

app.use(
    "/api",
    (req, res) => {

        res.status(404).json({

            success: false,

            message:
                "API route not found."

        });

    }
);


/* =====================================================
   SERVER
===================================================== */

app.listen(
    PORT,
    "0.0.0.0",
    () => {

        console.log(
            "========================================"
        );

        console.log(
            "🚍 KARNATAKA TRAVEL SERVER"
        );

        console.log(
            "========================================"
        );

        console.log(
            "🚀 Server running on port:",
            PORT
        );

        console.log(
            "💻 Local:",
            `http://localhost:${PORT}`
        );

        console.log(
            "🌍 Host:",
            "0.0.0.0"
        );

        console.log(
            "✅ Server ready"
        );

        console.log(
            "========================================"
        );

    }
);
