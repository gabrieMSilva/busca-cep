const input = document.querySelector("#input-text");
const form = document.querySelector("#form");
const cepInfo = document.querySelector("#cep-info");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  if (!input || !cepInfo) return;

  const cep = input.value;

  if (cep.length < 3) {
    alert("digite mais que 3 letras");
    return;
  }

  const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

  const data = await response.json();

  console.log(data);

  const infos = {
    bairro: data.bairro,
    rua: data.logradouro,
    cidade: data.localidade,
  };

  cepInfo.innerHTML = `
    <div class="cep-data">
          <h2>${infos.cidade}</h2>
          <h3>${infos.rua}</h3>
          <span>${infos.bairro}</span>
        </div>
  
  `;
});
