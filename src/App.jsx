import { Button, Container, Stack } from 'react-bootstrap'
import './App.css'
import BudgetCard from './components/BudgetCard'

function App() {

  const name = [
    'Entertainment'
  ]

  return (

    <>
      <Container className='my-4'>

        <Stack direction='horizontal' gap={2} className='mb-4'>
          <h1 className="me-auto">Budgets</h1>
          <Button variant='primary'>Add Budget</Button>
          <Button variant='outline-primary'>Add expenses</Button>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, min-max(300px, 1fr))',
              gap: '1rem',
              allignItems: 'flex-start'
            }}
          >
          </div>
        </Stack>

        <BudgetCard name={name} amount={190} max={1500} gray />

      </Container>
    </>
  )
}

export default App
