/* 

Exercício 1 - Obter lista de eventos:
- Utilizaremos a API Fetch para obter dados do arquivo json 'eventos.json'.
- Caso a lista de eventos já tenha sido obtida anteriormente, utilize os dados do localStorage.
- Caso contrário, faça uma requisição para obter os dados e armazene no localStorage.
- Exiba a lista de eventos na tela a partir da função listarEventos.


Exercício 2 - Exibir lista de eventos:
- Mapeie a lista de eventos (método map).
- Crie uma div com a classe "card-evento" para cada evento da lista de eventos.
- Dentro de cada card, exiba a imagem do evento, o nome, a data e o endereço.
- Adicione um botão "Confirmar presença" para cada evento.
- Altere o texto do botão para "Remover confirmação" caso o usuário já tenha confirmado presença.

*/


const obterEventos = async () => {
   // Seu código aqui
  
}

const listarEventos = data => {
   // Seu código aqui
}


const confirmarPresenca = (nome, id) => {
  let eventos = JSON.parse(localStorage.getItem('eventos'))

  if (eventos[id].confirmouPresenca) {
    const button = document.getElementById(id)
    button.style.backgroundColor = '#FF3853'
    button.innerText = 'Confirmar presença'

    eventos[id].confirmouPresenca = false
    localStorage.setItem('eventos', JSON.stringify(eventos))

    alert(`Não vou mais no evento: ${nome}`)
  } else {
    const button = document.getElementById(id)
    button.style.backgroundColor = '#7DDF20'
    button.innerText = 'Remover confirmação'

    eventos[id].confirmouPresenca = true
    localStorage.setItem('eventos', JSON.stringify(eventos))

    alert(`Presença confirmada no evento: ${nome}`)
  }

  listarEventos(JSON.parse(localStorage.getItem('eventos')))
}

document.body.onload = obterEventos

