const apiURL = "https://brasilapi.com.br/api";
const endpoint = `${apiURL}/cep/v2`;

const getPostalCode = async (code) => {
  try {
    const payload = await fetch(`${endpoint}/code`);
    console.log({ payload });
  } catch (error) {
    alert(error.message);
  }
};

function onFormSubmit(event) {
  console.log("onFormSubmit");
  event.preventDefault();
  const formData = new FormData(event.target);
  console.log(formData);
  getPostalCode(formData.get("postal-code"));
}
