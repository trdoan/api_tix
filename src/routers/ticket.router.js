const { Router } = require("express");
const {
  Ticket,
  Movie,
  User,
  Movie_Cinema,
  Cinemasequelize,
  sequelize,
} = require("../../models");
const { QueryTypes } = require("sequelize");
const ticketRouter = Router();
ticketRouter.get("/", (req, res) => {
  // const ticketList = await Ticket.findAll({
  //   include: [
  //     { model: User, as: "by" },
  //     {
  //       model: Movie,
  //       as: "movie",
  //       include: [
  //         {
  //           model: Movie_Cinema,
  //           include: [
  //             {
  //               model: Cinema,
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  // });
  // const { Movie_Cinemas } = ticketList;
  // const cinema = ticketList[0].movie.Movie_Cinemas[0].Cinema;
  // console.log();
  // res.send(ticketList);
  const results = sequelize.query(
    `
      select Users.id as "User.id",Users.name as "User.name", Users.email as "User.email",Movies.id as "Movie.id",
      Movies.name as "Movie.id",
      Cinemas.id as "Cinema.id",Cinemas.name as "Cinema.name",Cinemas.address as "Cinema.address" from Tickets
      left join Users
      on Users.id = Tickets.userId
      left join Movies
      on Movies.id = Tickets.movieId
      left join Movie_Cinemas
      on Movies.id = Movie_Cinemas.movieId
      left join Cinemas
      on Cinemas.id = Movie_Cinemas.cinemaId;
  `,
    {
      logging: console.log,
      nest: true,
      plain: false,
      raw: true,
    }
  );
  results.then((data) => {
    res.send(data);
  });
  results.catch((err) => {
    res.send("err");
  });
});
module.exports = { ticketRouter };
