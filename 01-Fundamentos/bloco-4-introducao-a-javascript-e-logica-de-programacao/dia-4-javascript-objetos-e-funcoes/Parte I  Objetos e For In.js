let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  console.log('Bem-vinda, ' + info.personagem);

  // Questão 2
  info.recorrente = 'Sim'

  console.log(info + "\n"); 

  // Questão 3
  for (key in info) {
    console.log(key);
  }

  for (key in info) {
    console.log(info[key]);
  }