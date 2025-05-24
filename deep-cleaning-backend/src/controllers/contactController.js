const Contact = require("../models/Contact");


exports.createContact = async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res
      .status(201)
      .json({ message: "Contact saved successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Error saving contact", details: err.message });
  }
};


exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json(contacts);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Error fetching contacts", details: err.message });
  }
};
