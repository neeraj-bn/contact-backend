const asyncHandler = require("express-async-handler")
const Contact = require("../models/contactModel")

const getContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts)
})

const getContact = asyncHandler(async (req, res) => {

    const contact = await Contact.findById(req.params.id)
    console.log("heeeeeee", contact)
    if (!contact) {
        console.log("kdhsjcdkjdshfkhdfghdjslhvf")
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json(contact)
})

const createContacts = asyncHandler(async (req, res) => {
    console.log("The requested body is", req.body)
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are mandatory")
    }
    const contact = await Contact.create({
        name,
        email,
        phone
    })
    res.status(201).json(contact)
})


const updateContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id)
    console.log("heeeeeee", contact)
    if (!contact) {
        console.log("kdhsjcdkjdshfkhdfghdjslhvf")
        res.status(404);
        throw new Error("Contact not found");
    }

    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    )

    res.status(200).json(updatedContact)
})


const deleteContact = asyncHandler(async (req, res) => {

    contact = await Contact.findById(req.params.id)

    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }

    await Contact.deleteOne()
    console.log("delete called")

    res.status(200).json({
        message: `Contact with ID ${req.params.id} deleted successfully`,
        deletedContact: contact,
    });
})

module.exports = { getContacts, getContact, createContacts, updateContact, deleteContact }