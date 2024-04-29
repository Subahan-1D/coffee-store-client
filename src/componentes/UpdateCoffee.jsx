import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const { name, supplier, category, chef, taste, details, photo, _id } = coffee;

    const handleUpdateCoffee = e => {
        e.preventDefault();
        const form = e.target
        const name = form.name.value
        const supplier = form.supplier.value
        const category = form.category.value
        const chef = form.chef.value
        const taste = form.taste.value
        const details = form.details.value
        const photo = form.photo.value
        const updateCoffee = { name, supplier, category, chef, taste, details, photo, }
        console.log(updateCoffee);
        // send data to the server 
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'success',
                        text: 'Updated Coffee successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
                // form.reset();
            })
    }
    return (
        <div className='w-1/2 mx-auto space-y-3 bg-[#f4f3f0] rounded-md p-10'>
            <h2 className='text-3xl font-semibold'>Add Update Coffee : {name}</h2>
            {/* <p className='text-gray-500'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p> */}
            <form onSubmit={handleUpdateCoffee} >
                <div className='grid md:grid-cols-1 lg:grid-cols-2   gap-4'>
                    <div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' defaultValue={name} placeholder=" Enter coffee name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Supplier</span>
                            </label>
                            <input type="text" name='supplier' defaultValue={supplier} placeholder=" Enter coffee supplier" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <input type="text" name='category' defaultValue={category} placeholder=" Enter coffee category" className="input input-bordered" required />
                        </div>
                    </div>
                    <div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Chef</span>
                            </label>
                            <input type="text" name='chef' defaultValue={chef} placeholder=" Enter coffee chef" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Taste</span>
                            </label>
                            <input type="text" name='taste' defaultValue={taste} placeholder=" Enter coffee taste" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <input type="text" name='details' defaultValue={details} placeholder=" Enter coffee Details" className="input input-bordered" required />
                        </div>
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input type="text" name='photo' defaultValue={photo} placeholder=" Enter photo url" className="input input-bordered md:w-full" required />
                </div>
                <input type="submit" value="Update Coffee" className='btn bg-[#d2b48c] text-bold md:w-full mt-4' />
            </form>
        </div>
    );
};

export default UpdateCoffee;