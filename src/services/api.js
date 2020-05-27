export function loadLists() {
  return { 
    title: 'Tarefas',
    cards: [
      {
        id: 1,
        content: 'Estudar módulo 01 de NodeJS',
        labels: ['#7159c1']
      },
      {
        id: 2,
        content: 'Criar vídeo para o Youtube ensinando a recriar a interface do Pipefy',
        labels: ['#7159c1']
      },
      {
        id: 3,
        content: 'Estudar módulo 03 de React Native',
        labels: ['#7159c1']
      },
      {
        id: 4,
        content: 'Gravar Aula "NextJS: Utilizando server-side rendering com ReactJS"',
        labels: ['#54e1f7']
      },
      {
        id: 5,
        content: 'Gravar testes e deploy ReactJS',
        labels: ['#54e1f7']
      },
    ]
  };
}