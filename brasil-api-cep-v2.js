const apiURL = "https://brasilapi.com.br/api";
const endpoint = `${apiURL}/cep/v2`;

/**
 * @typedef IPayload
 * @type {object}
 * @property {string} cep
 * @property {string} state
 * @property {string} city
 * @property {string} neighborhood
 * @property {string} street
 * @property {string} service
 * @property {object} location
 * @property {string} location.type
 * @property {object} location.coordinates
 * @property {string} location.coordinates.longitude
 * @property {string} location.coordinates.latitude
 */

/**
 * Consulta o CEP retornando um objeto com os dados do endereço
 * @async
 * @function getCEP
 * @param {string} cep
 * @returns {Promise<IPayload>} Promise retorna objeto com os dados do endereço
 */
const getCEP = async (cep) => {
  try {
    if (!cep) throw new ReferenceError("CEP não definido.");
    const response = await fetch(`${endpoint}/${cep}`);
    const payload = await response.json();
    if (!response.ok) throw new Error(payload.errors[0].message);
    return payload;
  } catch (error) {
    throw error;
  }
};

export default getCEP;
