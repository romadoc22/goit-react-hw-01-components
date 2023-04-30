import PropTypes from 'prop-types';

import {
  Table,
  Td,
  Th,
  Thead,
} from '../TransactionHistory/TransactionHistory.Styled';

export const TransactionHistory = ({ items }) => {
  console.log(items);
  return (
    <Table>
      <Thead>
        <tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </tr>
      </Thead>
      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <Td>{item.type}</Td>
            <Td>{item.amount}</Td>
            <Td>{item.currency}</Td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array,
};
