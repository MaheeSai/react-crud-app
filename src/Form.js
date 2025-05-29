import React, { useState } from 'react'

const Form = ({ setOpenForm, data, add,update }) => {

    const [products, setProducts] = useState(data)

    const handleBackdropClick = (e) => {
        if (e.target.classList.contains('modal')) {
            setOpenForm(false);
        }
    }

    const onChangeHandler = (event) => {
        const { name, value } = event.target
        setProducts({ ...products, [name]: value })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();

        if (products.id) {
            update(products);  
        } else {
            add(products);     
        }

        setOpenForm(false);
    };



    return (
        <div
            className='modal d-block'
            tabIndex='-1'
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
            onClick={handleBackdropClick}
        >
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-body">
                        <form onSubmit={onSubmitHandler}>
                            <div class="mb-3">
                                <label for="name" class="form-label">Name</label>
                                <input type="text" class="form-control" name='name' value={products.name}
                                    onChange={onChangeHandler}
                                    placeholder="Enter Name" />
                            </div>
                            <div class="mb-3">
                                <label for="Price" class="form-label">Price</label>
                                <input type="number" class="form-control" name='price' value={products.price}
                                    onChange={onChangeHandler}
                                    placeholder="Enter Price" />
                            </div>
                            <button type='submit' className='btn btn-primary me-4' >
                             {products.id?'update':'add'}
                            </button>
                            <button className='btn btn-danger ' onClick={(e) => {
                                e.preventDefault();
                                setOpenForm(false)
                            }} >Cancel</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Form