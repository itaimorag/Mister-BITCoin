// import { ContactPreview } from "./ContactPreview";

export function TransactionsList({ title, movesList }) {
    return (
        <section className="transactions-list">
            <h1>{title}</h1>
            <section>
                {movesList.map((transaction) => (
                    <section className="transaction" key={transaction._id}>
                        {title !== "Your Moves" && <div>To:{transaction.to}</div>}
                        <div>At:{new Date(transaction.at).toLocaleDateString()}</div>
                        <div>Amount:{transaction.amount}</div>
                    </section>
                )
                )}
            </section>
        </section>
    )
}
