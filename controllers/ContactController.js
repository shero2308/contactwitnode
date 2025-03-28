//@desc Get all contact
//@route GET /api/contact
//@access Public

const getContacts = (req, res) => {
    res.status(200).json({message:'Get contacts'});
};

//@desc create new contact
//@route POST /api/contact
//@access Public

const createContact = (req, res) => {
    console.log(req.body);
    res.status(201).json({message:'Create contact'});
}

//@desc Get contact
//@route GET /api/contact/:id
//@access Public

const getContact = (req, res) => {
    res.status(202).json({message:`Get contact for ${req.params.id}`});
}

//@desc Upadate contact
//@route PUT /api/contact/:id
//@access Public

const updateContact = (req, res) => {
    res.status(203).json({message:`Update contact for ${req.params.id}`});
}

//@desc Delete contact
//@route DELETE /api/contact/:id
//@access Public

const deleteContact = (req, res) => {
    res.status(204).json({message:`Delete contact for ${req.params.id}`});
}

module.exports = { getContacts , createContact , getContact , updateContact , deleteContact }