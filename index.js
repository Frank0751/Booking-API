//Create a server
import express from 'express'
import mongoose from 'mongoose';
import 'dotenv/config'
import { bookingRouter } from './routes/all-routes.js';


await mongoose.connect(process.env.MONGO_URI)

const app = express();
const PORT = 3030

app.use(express.json())
app.use(bookingRouter)


app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
})

// route
// app.get('/booking', function (request, respond, next) {
//    console.log(request.headers);
//    respond.json('booking successful');
// });

// // server listening
// app.listen(3001, function() {
//    console.log( 'listening for booking');
// }); 