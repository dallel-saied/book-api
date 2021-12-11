import Book from "../models/Book.js"

const getAllbook = async(req, res) => {
    try {
       const books =await Book.find()
       res.status(200).json({
           message:"Book found",
           data:books
       })
    }catch(err){
        res.status(500).json({
            message:"Internal error",
            error:err
        })

    }
}

const addNewBook =async(req,res)=>{
    try{
        const book = new Book(req.body)
        await book.save()
        res.status(200).json({
            message:"Book added",
            data:book
        })
    }catch(err){
        res.status(500).json({
            message:"Internal error",
            error:err
        })

    }
}
export {
    addNewBook,
    getAllbook
}