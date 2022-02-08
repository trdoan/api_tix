const { Router } = require("express");
const {
  Ticket,
  Movie,
  User,
  Cinema,
  Show_Time,
  Seat,
} = require("../../models");
const { QueryTypes } = require("sequelize");
const ticket = require("../../models/ticket");
const ticketRouter = Router();
ticketRouter.get("/", async (req, res) => {
  const listTicket = await Ticket.findAll({
    include: [
      { model: User, as: "nguoiMua" },
      {
        model: Movie,
        as: "chiTietPhim",
      },
      {
        model: Show_Time,
        include: [
          { model: Cinema },
          {
            model: Seat,
          },
        ],
        as: "diaDiem",
      },
    ],
    attributes: ["id"],
  });

  res.send(listTicket);
});
module.exports = { ticketRouter };
