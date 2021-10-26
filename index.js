import getCEP from "./brasil-api-cep-v2.js";

const address = {
  postalCode: "",
  street: "",
  number: "",
  complement: "",
  neighborhood: "",
  city: "",
  state: "",
};

const setAddress = (address) => {
  postalCode.value = address.cep;
  streetAddress.value = address.street;
  neighborhood.value = address.neighborhood;
  city.value = address.city;
  state.value = address.state;
};

const resetAddress = () => {
  setAddress(address);
};

const formAddress = document.forms["form-address"];
formAddress.addEventListener("reset", resetAddress);

const { postalCode, streetAddress, neighborhood, city, state } =
  formAddress.elements;

postalCode.addEventListener("input", async ({ target }) => {
  const cep = target.value.replace(/\D/g, "");
  if (cep.length < 8) return;
  target.disabled = true;
  try {
    const payload = await getCEP(cep);
    setAddress(payload);
  } catch (error) {
    alert(error.message);
  } finally {
    target.disabled = false;
    formAddress.reportValidity();
  }
});
