// + CSS Imports.
import './ExpenseItem.css'

function ExpenseItem() {

    // + Expense Data. 
    const expenseDate = new Date()
    const expenseDetail = "Car Insurance" 
    const expensePrice = 28900

    return (
        <div className="expense-item">
            <div>
                {expenseDate.toDateString()}
            </div>
            <div className="expense-item__description">
                <h2>{expenseDetail}</h2>
                <p className="expense-item__price">{expensePrice}</p>
            </div>
        </div>
    )
}

export default ExpenseItem