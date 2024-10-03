import { booking } from "../models/booking-models.js";


export const getAllBookings = async (req, res, next) => {
    // const bookings = await booking.find();
    // const newBooking = new booking(req.body);
    //  const bookings = await newBooking.save();
    //  res.status(201).json(bookings);
        res.status(200).json('These are all bookings');
}


export const getOneBooking = (req, res, next) => {

    res.status(200).json('This is one booking');
}


export const postAllBookings = async (req, res,) => {


 
     const newBooking = new booking(req.body);
     const bookings = await newBooking.save();
     res.status(201).json(bookings);
 
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