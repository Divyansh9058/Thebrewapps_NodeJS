const express = require("express");
const app = express();
const bookRouter = express.Router();
const { bookmodel } = require("../Models/books.models")

app.use(express.json());

// Create or Add a new book.
bookRouter.post("/create", async (req, res) => {
    try {
        const payload = req.body;
        const newbook = await bookmodel(payload);
        newbook.save();
        res.status(200).send("New book data recorded")
    } catch (error) {
        res.status(500).send({ msg: "Something went wrong", error: error.message })
    }
});

// Fetch all data
bookRouter.get("/all", async (req, res) => {
    try {
        const notes = await bookmodel.find();
        res.status(200).send(notes)
    }
    catch (error) {
        res.status(500).send({ msg: "Something went wrong", error: error.message })
    }
});

// Fetch data by specific id
bookRouter.get("/find/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const data = await bookmodel.findById(id);

        if (!data) {
            res.status(404).send({ "msg": `Data with ID ${id} Not Found` });
        } else {
            res.status(200).send(data);
        }

    } catch (error) {
        res.status(500).send({ msg: "Something went wrong", error: error.message });
    }
});


// Update data by specific id
bookRouter.patch("/update/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const payload = req.body;
        const data = await bookmodel.findByIdAndUpdate(id, payload);

        if (!data) {
            res.status(404).send({ "msg": `Data Not Found` })
        } else {
            res.status(200).send({ "msg": `note with id:${id} has been updated` })
        }

    } catch (error) {
        res.status(500).send({ msg: "something went wrong", error: error.message })
    }
});


// Delete data by specific id
bookRouter.delete('/delete/:id', async (req, res) => {
    try {
        const bookId = req.params.id;
        const data = await bookmodel.findByIdAndDelete({ _id: bookId })

        if (data) {
            res.status(200).send({ "msg": `note with id:${bookId} has been deleted` });
        } else {
            res.status(400).send({ "msg": `Data Not Found` })
        }

    }
    catch (error) {
        res.status(500).send({ msg: "Something went wrong", error: error.message })
    }
});


module.exports = {
    bookRouter
}