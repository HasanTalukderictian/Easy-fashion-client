import React from 'react';
import Swal from 'sweetalert2';

const BookingRow = ({ booking, index }) => {
    const {_id, customerName, price, category } = booking;
   
    
    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                
                fetch(``)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
                 
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          });
    }

    return (
        <tr className={index % 2 === 0 ? 'bg-base-200' : ''}>
            <th>{index}</th>
            <td>{customerName}</td>
            <td>{price}</td>
            <td>{category}</td>
            <td>
                <button onClick={()=>handleDelete(_id)} className="btn btn-warning">Delete</button></td>
        </tr>
    );
};

export default BookingRow;