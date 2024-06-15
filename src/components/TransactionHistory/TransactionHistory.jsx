import css from "../TransactionHistory/TransactionHistory.module.css";

export default function TransactionHistory({ items }) {
  return (
    <div className={css.container}>
      <table className={css.table}>
        <thead className={css.title}>
          <tr>
            <th className={css.transTitle}>Type</th>
            <th className={css.transTitle}>Amount</th>
            <th className={css.transTitle}>Currency</th>
          </tr>
        </thead>
        <tbody className={css.transEl}>
          {items.map((transaction) => (
            <tr key={transaction.id}>
              <td className={css.transTxt}>{transaction.type}</td>
              <td className={css.transTxt}>{transaction.amount}</td>
              <td className={css.transTxt}>{transaction.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
