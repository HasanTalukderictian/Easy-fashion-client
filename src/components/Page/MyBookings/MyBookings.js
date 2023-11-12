
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import BookingRow from './BookingRow';
import pic from '../../../assests/EasyModel1.jpg';
import Swal from 'sweetalert2';

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  const Url = `http://localhost:5000/bookings?email=${user?.email}`;

  useEffect(() => {
    // Check if user is not null before fetching data
    if (user !== null) {
      fetch(Url)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setBookings(data); // Update the state with fetched data
        });
    }
  }, [Url, user]);

  const handleDelete = (id) => {
    // Optimistically update the UI
    setBookings((prevBookings) => prevBookings.filter((booking) => booking._id !== id));

    // Make the DELETE request
    fetch(`http://localhost:5000/bookings/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          // Data removed successfully from the server
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        }
      });
  };

  if (user === null) {
    // Handle the loading state or show a loading spinner
    return <div>Loading...</div>;
  }

  return (
    <div className='grid'>
      <div className='w-full my-2  rounded overflow-hidden relative'>
        <img className="w-full h-200 object-cover" src={pic} alt="" />
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white'>
          <h3 className='text-8xl font-bold'>Easy</h3>
          <p className='text-3xl my-2'>Make You Comfortable</p>
          <p className='text-2xl my-3'>“After all, there is something about a wedding gown, prettier than any other gown in the world.” - Douglas William Jerrold</p>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table bg-[#66ff99] mr-3 p-4">
          {/* head */}
          <thead className='text-3xl p-4 text-white'>
            <tr>
              <th>Index</th>
              <th>Customer Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Action</th>
              <th><button className="btn btn-outline btn-warning">Pay</button></th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <BookingRow key={booking._id} index={index + 1} booking={booking} onDelete={handleDelete} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBookings;