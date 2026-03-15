const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/mydatabase")
.then(() => {
    console.log("MongoDB Connected Successfully");
})
.catch((err) => {
    console.log("Connection Error:", err);
});

const bookSchema = new mongoose.Schema({
   title:{
       type: String,
       required: true,
       unique: true,
       maxlength: 20
   },
   author: {
       type: String,
       required: true
   },
   price: {
       type: Number,
       min: 0
   },
   category:{
       type:String,
       enum:["Fantasy","Education","Story","Novel"],
       default:"Novel"
   },
   description: {
       type: String,
   },
   category:{
   type:String,
   enum:["Fantasy","Education","Story","Novel"]
}
});

const Book = mongoose.model("Book", bookSchema);

let book1 = new Book({
    title: "Harry Potter",
    author: "J.K Rowling",
    price: 500,
    category:"Fantasy",
    description: "This is a good book"
    ,
    category:"story"
});

let book2 = new Book({
    title: "Harry Potter Part 2",
    author: "J.K Rowling",
    price: 600,
    category:"Fantasy",
    description: "This is a good book2"
});

async function saveBooks(){
    try{
        await book1.save();
        console.log("Book1 saved successfully");

        await book2.save();
        console.log("Book2 saved successfully");

        // Find By ID
        const id = book1._id;

        const foundBook = await Book.findById(id);

        if(foundBook){
            console.log("Book Found:", foundBook);
        }else{
            console.log("Book not found");
        }

    }catch(err){
        console.log("Error:",err);
    }
}

saveBooks();