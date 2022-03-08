import mongoose from 'mongoose';
const {Schema} = mongoose;

const studentSchema = new Schema({
    firstName: String,
    lastName: String,
    id: Number,

    addedDate: { type: Date,
        default: Date.now
    }

})
const student = mongoose.model('Student',studentSchema)
module.export = studentSchema
