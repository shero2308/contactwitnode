const asyncHandler = require('express-async-handler');

//@desc Get all contact
//@route GET /api/contact
//@access Public

const getContacts = asyncHandler(async(req, res) => {
    res.status(200).json({message:'Get contacts'});
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
    res.status(201).json({message:'Create contact'});
});

//@desc Get contact
//@route GET /api/contact/:id
//@access Public

const getContact = asyncHandler(async(req, res) => {
    res.status(202).json({message:`Get contact for ${req.params.id}`});
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