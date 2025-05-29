import React from 'react'

const Table = ({ products, deleted, edit }) => {

    return (

        <table className=' container table table-bordered m-5 w-50'>


            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Actions</th>
                </tr>
            </thead>

            <tbody>
                {
                    products.map((data) => (
                        <tr key={data.id}>
                            <td>{data.name}</td>
                            <td>{data.price}</td>
                            <td>
                                <button className='btn btn-primary me-2 '
                                    onClick={() => {
                                        edit(data)
                                    }}
                                >Update</button>
                                <button className='btn btn-danger ms-1 '
                                    onClick={() => {
                                        deleted(data.id);
                                    }}

                                >Delete</button>
                            </td>
                        </tr>
                    ))

                }
            </tbody>



        </table>

    )
}

export default Table