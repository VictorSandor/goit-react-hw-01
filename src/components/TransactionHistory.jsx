
import PropTypes from 'prop-types'; 
import './TransactionHistory.css';

const TransactionHistory = ({ items }) => {
    return (
      <div className="transaction-history-container">
        <table className="transaction-history">
          <thead>
            <tr>
              <th>Type</th>
              <th>Amount</th>
              <th>Currency</th>
            </tr>
          </thead>
          <tbody>
            {items.map(({ id, type, amount, currency }) => (
              <tr key={id}>
                <td>{type.charAt(0).toUpperCase() + type.slice(1)}</td>
                <td>{amount}</td>
                <td>{currency}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };


TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;
