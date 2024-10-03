import { Schema, model } from "mongoose";

const bookingSchema = new Schema({
    firstName: {
        type: String,
        
    },
lastName: {
        type: String,
       
    },
sex : {
    type: String,
    enum: {
        values: ['male', 'female']
    },
    
},

seatNumber : {
    type: Number,
  
},

email : {
    type: String,

}

}) 

export const booking = model('booking', bookingSchema)