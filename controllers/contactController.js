const asyncHandler = require("express-async-handler")

const getContacts = asyncHandler(async (req, res) => {
    res.status(200).json({ messege: "get all contactssssssssss" })
})

const getContact = asyncHandler(async (req, res) => {
    res.status(200).json({ messege: `Got details of contact ${req.params.id}` })
})

const createContacts = asyncHandler(async (req, res) => {
    console.log("The requested body is", req.body)
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are mandatory")
    }
    res.status(201).json({ messege: "Create contacts" })
})


const updateContact = asyncHandler(async (req, res) => {
    res.status(200).json({ messege: `update contact ${req.params.id}` })
})


const deleteContact = asyncHandler(async (req, res) => {
    res.status(200).json({ messege: `delet contact ${req.params.id}` })
})

module.exports = { getContacts, getContact, createContacts, updateContact, deleteContact }