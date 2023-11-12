import React from 'react';
import Swal from 'sweetalert2';

const BookingRow = ({ booking, index, onDelete }) => {
  const { _id, customerName, price, category } = booking;

  const handleDelete = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        // Call the parent component's onDelete function
        onDelete(_id);
      }
    });
  };

  return (
    <tr className={index % 2 === 0 ? 'bg-base-200' : ''}>
      <th>{index}</th>
      <td>{customerName}</td>
      <td>{price}</td>
      <td>{category}</td>
     
      <td>
        <button onClick={handleDelete} className="btn btn-warning">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default BookingRow;