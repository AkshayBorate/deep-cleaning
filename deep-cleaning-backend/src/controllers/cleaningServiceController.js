// controllers/cleaningServiceController.js
const CleaningService = require("../models/CleaningService");

// Seed all services at once
exports.seedAllServices = async (req, res) => {
  try {
    const { houseServices, roomServices, sofaServices } = req.body;

    const formattedHouse = houseServices.map((item) => ({
      category: "house",
      type: item.type,
      furnished: item.furnished,
      unfurnished: item.unfurnished,
      description: item.description,
    }));

    const formattedRooms = roomServices.map((item) => ({
      category: "room",
      service: item.service,
      price: item.price,
      description: item.description,
    }));

    const formattedSofas = sofaServices.map((item) => ({
      category: "sofa",
      service: item.service,
      price: item.price,
      description: item.description,
    }));

    const allServices = [
      ...formattedHouse,
      ...formattedRooms,
      ...formattedSofas,
    ];

    await CleaningService.insertMany(allServices);
    res
      .status(200)
      .json({ message: "All cleaning services inserted successfully." });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getServicesByCategory = async (req, res) => {
  try {
    const { category } = req.params;

    
    const validCategories = ['house', 'room', 'sofa'];
    if (!validCategories.includes(category)) {
      return res.status(400).json({ message: "Invalid category. Use 'house', 'room', or 'sofa'." });
    }

    // Fetch all services matching the category
    const services = await CleaningService.find({ category });

    if (!services || services.length === 0) {
      return res.status(404).json({ message: `No services found for category '${category}'.` });
    }

    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
