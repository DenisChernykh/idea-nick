export const App = () => {
  const ideas = [
    {
      nick: 'Идея 1',
      description: 'Описание идеи 1...',
    },
    {
      nick: 'Идея 2',
      description: 'Описание идеи 2...',
    },
    {
      nick: 'Идея 3',
      description: 'Описание идеи 3...',
    },
    {
      nick: 'Идея 4',
      description: 'Описание идеи 4...',
    },
    {
      nick: 'Идея 5',
      description: 'Описание идеи 5...',
    },
  ]
  return (
    <div>
      <h1>Ideanick</h1>
      {ideas.map((idea) => (
        <div key={idea.nick}>
          <h2>{idea.nick}</h2>
          <div>{idea.description}</div>
        </div>
      ))}
    </div>
  )
}
