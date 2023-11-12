import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';

const Bookings = () => {
  const data = useLoaderData();
  const { _id, category, price } = data;
  const { user } = useContext(AuthContext);


  const handleBookService = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const order = {
      customerName: name,
      email: user?.email,
      date,
      category,
      price
    }
    console.log(order)



    fetch(`http://localhost:5000/bookings/${_id}`, {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(order)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.insertedId) {

          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Order is Booked",
            showConfirmButton: false,
            timer: 2000
          });
        }
      })



  }

  return (
    <div className='container mx-auto'>
      <form onSubmit={handleBookService} className='max-w-md mx-auto'>
        <div className='my-8 p-4 bg-slate-200 rounded'>
          <div className="form-control">

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4'>

              <input
                type="text"
                name='name'
                defaultValue={user?.displayName}
                placeholder="Your Name"
                className="input input-bordered w-full"
              />

              <input
                type="date"
                name='date'
                className="input input-bordered w-full"
              />
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4'>
              <input
                type="text"
                name='category'
                placeholder="Category"
                defaultValue={category}
                readOnly
                className="input input-bordered w-full"
              />

              <input
                type="text"
                name='price'
                placeholder="Price"
                readOnly
                defaultValue={price}
                className="input input-bordered w-full"
              />
            </div>

            <div className='mb-4'>
              <input
                type="email"
                name='email'
                defaultValue={user?.email}
                readOnly
                placeholder="Your Email"
                className="input input-bordered w-full"
              />
            </div>

            <div className='flex justify-center'>
              <input
                type="submit"
                value="Book Appointment"
                className="btn bg-[#FF3811] w-full"
              />
            </div>

          </div>
        </div>
      </form>
    </div>
  );
};

export default Bookings;