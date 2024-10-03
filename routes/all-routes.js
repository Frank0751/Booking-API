
import { Router } from 'express'
import { getAllBookings, getOneBooking, updateAllBookings, deleteAllBookings } from '../controllers/booking-controllers.js'
import { postAllBookings } from '../controllers/booking-controllers.js'
export const bookingRouter = Router()


bookingRouter.get('/bookings', getAllBookings)
bookingRouter.get('/bookings/:id', getOneBooking)
bookingRouter.post('/bookings', postAllBookings)
bookingRouter.patch('/bookings/:id', updateAllBookings)
bookingRouter.delete('/bookings/:id', deleteAllBookings)