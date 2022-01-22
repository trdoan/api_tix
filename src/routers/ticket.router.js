const { Router } = require("express");
const { Ticket, Movie, User } = require("../../models");
const ticketRouter = Router();
ticketRouter.get("/", async (req, res) => {
  const ticketList = await Ticket.findAll({
    include: [{ model: User, as: "by" }],
  });

  res.send(ticketList);
});
module.exports = { ticketRouter };
