import Ecommerce from "../../models/elevator-pitch";

const getEcommerceBy = async (filter) => {
  const personajeEncontrado = await Ecommerce.find(filter);
  console.log(personajeEncontrado);
  return personajeEncontrado;
};

export default getEcommerceBy;
