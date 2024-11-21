// formHandler.js
import FORM_KEYS from './index.js';

// Função para manipular o envio do formulário
function handleFormSubmission(event) {
  event.preventDefault();
  
  const formData = new FormData(event.target);

  // Usando as chaves importadas para acessar os valores do formulário
  const formID = formData.get(FORM_KEYS.ID_FORM);
  const formNone = formData.get(FORM_KEYS.NONE_FORM);
  const formText = formData.get(FORM_KEYS.TEXT_FORM);

  console.log('Formulário enviado com os seguintes dados:');
  console.log('ID Form:', formID);
  console.log('None Form:', formNone);
  console.log('Texto do Formulário:', formText);
}

// Exemplo de como associar o formulário a uma função
const formElement = document.getElementById('myForm');
formElement.addEventListener('submit', handleFormSubmission);
