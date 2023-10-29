const mongoose = require("mongoose");

const conn = async (req, res) => {
    try {
        await mongoose.connect("mongodb+srv://user:password123123@cluster0.vph15tu.mongodb.net/todolist?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }).then(() => {
            console.log("Connected");
        });
    } catch (error) {
        console.log(error);
        // res.status(400).json({
        //     mesage: "Not connected"
        // });
    }
};

conn();