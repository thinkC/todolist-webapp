import React from 'react';
import { FaPlus } from 'react-icons/fa';


const AddTodoList = ({ text, setText, handleSubmit, todos }) => {


    return (
        <>

  
            <form onSubmit={handleSubmit} className='search-form'>
                <div className='form-control'>
                    <input type="text"
                        placeholder='click here to add todo'
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />


                    <button className='btn' type='submit'>
                        <FaPlus className="plus" />  add task

                    </button>
                </div>
            </form>
            
        </>
    )
}

export default AddTodoList;