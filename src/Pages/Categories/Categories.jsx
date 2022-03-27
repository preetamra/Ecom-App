import { useEffect, useState } from "react";
import "../Categories/Categories.css"
import {Link} from "react-router-dom"

const Categories = () => {
   const categoryList=["a","a","a","a","a","a","a","a","a","a"];

   

    return(
        <div id='homePage'>
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2 className='home-title text-center'>Welcome to Ecommerce</h2>
                    <div className="category-list d-flex flex-row justify-content-center align-items-center">
                        <div className="category-item rounded-3 d-flex justify-content-center align-items-center ">
                          <Link to ={'/products'}>All Products</Link>  
                        </div>
                        {
                            categoryList.map((category) => (
                                <div key={category} className='category-item rounded-3 d-flex justify-content-center align-items-center' >

                                        <p className='text-white '>{category}</p>
                                        {console.log(category)}
                                </div>
                            ))
                        }
                    </div>
                    <div className="category-title text-center">Select a category to start shopping</div>
                </div>
            </div>
        </div>
       

    </div>
    );
}

export default Categories;