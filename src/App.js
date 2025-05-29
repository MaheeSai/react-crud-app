import React, { useEffect, useState } from 'react'
import { getProducts, deletedProducts, postData, updateProduct } from './Api'
import Table from './Table'
import Form from './Form'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const App = () => {

  const [products, setProducts] = useState([])
  const [openForm, setOpenForm] = useState(false)
  const [initialForm, setInitialForm] = useState(
    {
      name: '',
      price: ''
    }
  )

  useEffect(() => {
    productData()
  })

  const productData = async () => {
    let res = await getProducts()
    setProducts(res.data)
  }

  const deleteData = async (id) => {
    await deletedProducts(id)
    getProducts()
  }

  const addProducts = async (data) => {
    let res = await postData(data)
    console.log(res.data)
    getProducts()
  }

  const updateProductData = async (data) => {
    await updateProduct(data.id, data);
    productData();
  };

  const editProduct = async (data) => {
    setInitialForm(data);
    setOpenForm(true);
  }
     
  return (
    <>
      <div className='container d-flex justify-content-around ms-auto mt-3'>
        <h2 className='text-primary'>Crud Application</h2>
        <button
          className='btn btn-primary'
          onClick={() => {
            setInitialForm({
              name: '',
              price: ''
            })
            setOpenForm(true)
          }}
        >
          Add New
        </button>
      </div>
      <Table products={products} deleted={deleteData} edit={editProduct} />
      {
        openForm && <Form setOpenForm={setOpenForm} data={initialForm} add={addProducts} update={updateProductData} />
      }
    </>
  )
}

export default App