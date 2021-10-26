const apiURL = "https://brasilapi.com.br/api";
const endpoint = `${apiURL}/cep/v2`;

const getPostalCode = async (code) => {
  try {
    const response = await fetch(`${endpoint}/${code}`);
    console.log({ response });
    const payload = await response.json();
    if (response.ok) {
      console.log({ payload });
    } else {
      alert(payload.message);
    }
  } catch (error) {
    console.log({ error });
    alert(error.message);
  }
};

const onFormSubmit = async (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  await getPostalCode(formData.get("postal-code"));
};
