
//title, description,author,rating,nbVoters,img
import mongoose from "mongoose"

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true /* "     hello   " => "hello" */
    },
    author: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    rating: {
        type: Number,
        default: 0,
        validate(value){
            if(value < 0){
                throw new Error('Rating must be a positif number')
            }
        }
    },
    nbVoters: {
        type: Number,
        default: 0,
        validate(value){
            if(value < 0){
                throw new Error('NbVoters must be a positif number')
            }
        }
    },
    img: {
        type: String,
        default: "https://images.pexels.com/photos/256450/pexels-photo-256450.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    }, 
    
},
{timestamps:true})

const Book = mongoose.model("Book", bookSchema)

export default Book