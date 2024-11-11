const moment = require("moment");

const getStacks = (req, res) => {
  console.log("envio en stacks tecnologicos");
  const date = moment();

  const year = date.format("YYYY") - 1;

  const tecnologias = [
    {
      name: "JS",
      IMG: "/images/JS.png",
      descripcion: "descripcion",
    },
    {
      name: "Node",
      IMG: "/images/node.png",
      descripcion: "descripcion",
    },
    {
      name: "Express",
      IMG: "/images/express.png",
      descripcion: "descripcion",
    },
  ];

  res.render("stacks", {
    titulo: "Mis stacks tecnologicos",
    h1: "Mis tecnologias son:",
    tecnologias,
    year,
  });
};

module.exports = { getStacks };
