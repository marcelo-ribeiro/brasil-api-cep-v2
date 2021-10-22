const apiURL = "https://brasilapi.com.br/api";
const endpoint = `${apiURL}/cep/v2`;

const getPostalCode = (code) => {
  try {
    const payload = await fetch(`${endpoint}/code`);
    console.log({ payload });
  } catch (error) {
    alert(error.message);
  }
};

const onFormSubmit = (event) => {
  console.log("onFormSubmit");
  event.preventDefault();
  const formData = new FormData(event.target);
  console.log(formData);
  getPostalCode(formData.get("postal-code"));
};
