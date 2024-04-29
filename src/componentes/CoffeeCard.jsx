import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee , coffees ,setCoffees }) => {
    const { name, supplier, category, chef, taste, details, photo, _id } = coffee

    // delete operation 

    const handleDelete = _id => {
        console.log(_id);
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
                fetch(`http://localhost:5000/coffee/${_id}`,{
                    method:"DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your coffee has been deleted.",
                                icon: "success"
                            })
                            const remaining = coffees.filter(cof => cof._id !== _id);
                            setCoffees(remaining)

                        }
                    })
            }
        });

    }
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img className="w-[100px]" src={photo} alt="Movie" /></figure>
            <div className=" flex justify-between items-center">
                <div>
                    <h2 className="flex mr-20">Name :<p>{name}</p></h2>
                    <h2 className="flex mr-20">Chef :<p>{chef}</p></h2>
                    <h2 className="flex mr-20">Taste :<p>{taste}</p></h2>
                </div>
                <div className="join join-vertical space-y-2">
                    <button className="btn join-item btn-primary">View</button>
                   <Link to={`updatecoffee/${_id}`}>
                   <button className="btn join-item btn-secondary">Edit</button>
                   </Link>
                    <button onClick={() => handleDelete(_id)} className="btn join-item btn-success">Delete</button>
                </div>
                {/* <div>
                    <div className="card-actions justify-end">
                        
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default CoffeeCard;