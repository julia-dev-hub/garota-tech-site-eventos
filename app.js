const obterEventos = async () => {
  let eventos = localStorage.getItem('eventos')

  if (eventos) {
    const data = JSON.parse(eventos)
    listarEventos(data)
  } else {
    await fetch('eventos.json')
      .then(res => res.json())
      .then(data => {
        eventos = data.eventos

        localStorage.setItem('eventos', JSON.stringify(eventos))

        listarEventos(eventos)
      })
  }
}

const listarEventos = data => {
  data.map(item => {
    const card = document.createElement('div')
    card.className = 'card'
    card.innerHTML = `            
    <img class="image" width="100%" height="55%" src=${
      item.imagem
    } alt="Imagem do Evento" />
    <div class="box">
      <p class="titulo">${item.nome}</p>
      <div class="box-info">
        <img class="box-image" src="images/calendario.svg" alt="Data do Evento"/>
        <p class="box-text">${item.data}</p>
      </div>
      <div class="box-info">
        <img class="box-image" src="images/localizacao.svg" alt="Localização do Evento"/>
        <p class="box-text">${item.endereco}</p>
      </div>   
      <div class="box-button">
      ${
        item.confirmouPresenca
          ? `<button id="${item.id}" type="button" class="button presenca-confirmada" onclick="confirmarPresenca('${item.nome}', ${item.id}, ${item.confirmouPresenca})">Remover confirmação</button>`
          : `<button id="${item.id}" type="button" class="button presenca-nao-confirmada" onclick="confirmarPresenca('${item.nome}', ${item.id}, ${item.confirmouPresenca})">Confirmar presença</button>`
      }
      </div>
    </div>  
    `
    document.getElementById('eventos').appendChild(card)
  })
}

const confirmarPresenca = (nome, id, presenca) => {
  let eventos = JSON.parse(localStorage.getItem('eventos'))

  if (presenca) {
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
}

document.body.onload = obterEventos
