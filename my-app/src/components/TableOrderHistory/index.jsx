import React from 'react';
import history from '../config/order-history.json';
import historyTitles from '../config/order-history-titles.json';

const Table = () => (
  <table>
    <tbody>
      <tr>
        {historyTitles.map(item => (
          <th key={item.title}>{item.title}</th>
        ))}
      </tr>
      {history.map(item => (
        <tr key={item.id}>
          <td>{item.date}</td>
          <td>{item.price}</td>
          <td>{item.address}</td>
          <td>{item.rating}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default Table;
