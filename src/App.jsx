import { Button, Container, Stack } from 'react-bootstrap'
import BudgetCard from './components/BudgetCard'
import AddBudgetModal from './components/AddBudgetModal'
import { useState } from 'react'
import { useBudgets } from './context/BudgetsContext'
import './App.css'

function App() {


  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false)
  const { budgets, getBudgetExpenses } = useBudgets()

  const handleClose = () => {
    setShowAddBudgetModal(!showAddBudgetModal)
  }

  const toggleAddBudgetModal = () => {
    setShowAddBudgetModal(true)
  }


  return (

    <>
      <Container className='my-4'>

        <Stack direction='horizontal' gap={2} className='mb-4'>
          <h1 className="me-auto">Budgets</h1>
          <Button variant='primary' onClick={toggleAddBudgetModal}>Add Budget</Button>
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

        {budgets.map(budget => {

          const amount = getBudgetExpenses(budget.id).reduce(
            (total, expense) => total + expense.amount,
            0)

          return (

            <BudgetCard
              key={budget.id}
              name={budget.name}
              amount={amount}
              max={budget.max}
            />

          )
        })}

      </Container>

      <AddBudgetModal show={showAddBudgetModal} handleClose={handleClose} />
    </>
  )
}

export default App
