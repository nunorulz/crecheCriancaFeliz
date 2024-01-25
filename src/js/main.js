let homeQuemSomos = {
  tituloHomeQuemSomos: 'Sobre a Criança Feliz',
  textoHomeQuemSomos:
    'A Creche Criança Feliz é mais do que uma instituição de cuidados infantis; somos uma família que se preocupa com o bem-estar e o futuro de suas crianças. Estamos comprometidos em criar um ambiente onde as crianças possam crescer, aprender e, acima de tudo, serem felizes. Obrigado por considerar a Creche Criança Feliz como seu parceiro de confiança na educação e cuidado de suas crianças. Estamos ansiosos para recebê-los em nossa comunidade.',
  tituloColaboradores: 'Nossos Colaboradores',
};

let selecionarTituloHomeQuemSomos = document.querySelectorAll('h2')[0];
selecionarTituloHomeQuemSomos.innerHTML = homeQuemSomos.tituloHomeQuemSomos;

let selecionartextoHomeQuemSomos = document.querySelectorAll('p')[0];
selecionartextoHomeQuemSomos.innerHTML = homeQuemSomos.textoHomeQuemSomos;
