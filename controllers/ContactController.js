const asyncHandler = require('express-async-handler');
const Contact = require('../models/ContactModels');

//@desc Get all contact
//@route GET /api/contact
//@access Public

const getContacts = asyncHandler(async(req, res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
});

//@desc create new contact
//@route POST /api/contact
//@access Public

const createContact = asyncHandler(async(req, res) => {
    console.log(req.body);
    const{ name, email, phone } = req.body;
    if (!name || !email || !phone){
        res.status(400);
        throw new Error("Please add all fields");
    }
    const contact = await Contact.create({
        name,
        email,
        phone
    })

    res.status(201).json(contact);
});

//@desc Get contact
//@route GET /api/contact/:id
//@access Public

const getContact = asyncHandler(async(req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(202).json(contact);
});

//@desc Upadate contact
//@route PUT /api/contact/:id
//@access Public

const updateContact = asyncHandler(async(req, res) => {
    res.status(203).json({message:`Update contact for ${req.params.id}`});
});

//@desc Delete contact
//@route DELETE /api/contact/:id
//@access Public

const deleteContact = asyncHandler(async(req, res) => {
    res.status(204).json({message:`Delete contact for ${req.params.id}`});
});

module.exports = { getContacts , createContact , getContact , updateContact , deleteContact }