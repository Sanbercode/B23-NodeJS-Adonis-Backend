const Venue = require('../models/venue');

class VenueController {
    static async save (request, response, next) {
        let {name, address, phone} = request.body;
        const venue = await Venue.create({name, address, phone});

        response.status(201).json({
            response_status: "00",
            response_message: "Data Stored",
            data: venue
        })
    }

    static async findAll (request, response, next) {
        const venues = await Venue.findAll({
            attributes: [
                'id', 'name', 'address', 'phone'
            ]
        });

        response.status(200).json({
            response_status: "00",
            response_message: "Data Displayed",
            data: venues
        });
    }

    static async show (request, response, next) {
        let { id } = request.params;

        const venue = await Venue.findOne({
            where: {id},
            attributes: [
                'id', 'name', 'address', 'phone'
            ]
        });

        response.status(200).json({
            response_code: "00",
            response_message: `Data venue ${id} displayed`,
            data: venue
        })
    }

    static async update (request, response, next) {
        let { id } = request.params;
        let {name, address, phone} = request.body;

        const updatedVenue = await Venue.update({
            name, address, phone
        }, {
            where: { id }
        })

        response.status(204).json({
            response_code: "00",
            response_message: `Data venue ${id} has been updated`,
            data: {name, address, phone}
        })
    }

    static async destroy (request, response, next) {
        let { id } = request.params;

        const destroy = await Venue.destroy({
            where: { id }
        });

        response.status(202).json({
            response_code: "00",
            response_message: `Data ${id} has been deleted`
        });
    }
}

module.exports = VenueController;