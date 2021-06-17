// + Import CSS.
import './NewExpense.css'

// + Import components.
import ExpenseForm from './ExpenseForm'

function NewExpense() {
    return (
        <div className="new-expense">
            <ExpenseForm />
        </div>
    )
}

export default NewExpense