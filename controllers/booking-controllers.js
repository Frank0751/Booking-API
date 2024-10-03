import { booking } from "../models/booking-models.js";


export const getAllBookings = async (req, res, next) => {
    try {
        const bookings = await booking.find();

        res.status(200).json('These are all bookings');
    } catch (error) {

    }
}

export const getOneBooking = (req, res, next) => {

    res.status(200).json('This is one booking');
}


export const postAllBookings = async (req, res, next) => {
    try {
        const newBooking = new booking()
        await newBooking.create(req.body)

        res.status(201).json('booking was added');
    } catch (error) {
        next(error);
    }
}

export const updateAllBookings = (req, res) => {
    res.status(200).json('These are all bookings')
}

export const deleteAllBookings = (req, res) => {
    res.status(200).json('These are all bookings')
}
// const helloWorld = (req, res, next) => {
//     res.json('Hello World');
// }