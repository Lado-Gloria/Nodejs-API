const mongoose =require("mongoose")
const booksSchema =mongoose.Schema(
    {
      title:{
        type:String,
        require: [true, "please enter the book title"]
      },

      author:{
        type:String,
        require: [true, "please enter the book author"]
      } ,

      publicationYear:{
        type:Number,
        require: true,
        default: 0
      } ,

      isbn:{
        type:String,
        require: [true, "please enter the book isbn"]
      },

      description:{
        type:String,
        require: [true, "please enter the book description"]
      }, 

      image:{
        type:String,
        require: false
      } 
    },

    {
        timestamps: true
    }
)

const book =mongoose.model("book",booksSchema);
module.exports=book;