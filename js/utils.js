function maskCPF(value) {
  value = value.replace(/\D/g, "");
  value = value.substring(0, 11);
  value = value
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  return value;
}

function maskTelefone(value) {
  value = value.replace(/\D/g, "");
  value = value.substring(0, 11);
  value = value
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{4,5})(\d{4})$/, "$1-$2");
  return value;
}

function maskCEP(value) {
  value = value.replace(/\D/g, "");
  value = value.substring(0, 8);
  value = value.replace(/(\d{5})(\d{3})$/, "$1-$2");
  return value;
}

document.addEventListener("input", (e) => {
  if (e.target.id === "cpf") e.target.value = maskCPF(e.target.value);
  if (e.target.id === "telefone") e.target.value = maskTelefone(e.target.value);
  if (e.target.id === "cep") e.target.value = maskCEP(e.target.value);
});
