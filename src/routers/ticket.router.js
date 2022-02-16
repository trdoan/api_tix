const { Router } = require("express");
const {
  Ticket,
  Movie,
  User,
  Cinema,
  Show_Time,
  Seat,
} = require("../../models");

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

ticketRouter.get("/lich-su-dat-ve", async (req, res) => {
  // verify token
  const { userId } = req.body;
  console.log(userId);

  const data = await Ticket.findAll({
    where: {
      userId,
    },
    include: [{ model: User, as: "nguoiMua" }],
  });
  res.send(data);
});
module.exports = { ticketRouter };
