const Ecommerce = require("../../models/elevator-pitch");

const getEcommerceBy = async (filter) => {
  const personajeEncontrado = await Ecommerce.find(filter);
  console.log(personajeEncontrado);
  return personajeEncontrado;
};

module.exports = getEcommerceBy;
