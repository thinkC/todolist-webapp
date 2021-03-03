// import React from 'react';
// import '@testing-library/jest-dom';
// import { render, screen } from '@testing-library/react';



// import { addNum } from '../components/HelperFunction'
// test('addNum ', () => {
//     expect(addNum(2, 3)).toBe(5)
// })


// import addNum from '../components/HelperFunction'
// test('addNum ', () => {
//     expect(addNum(2, 3)).toBe(5)
// })

// import App from '../App';

// test('handleSubmit ', ()=>{
//     expect(handleSubmit().toBe(Object))
// })


import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import TodoList from './TodoList';
import data from '../data';
import AddToList from './AddTodoList';


describe('todo list test', () => {
    it('should add a todo task', () => {
        // const oneTask = data[0];
        // console.log(oneTask)

        // render(<AddToList text={data[0].text} />)
        render(<AddToList />)


        expect(screen.getByText(/Buy Groceries/i).toBeInTheDocument())
    })
})



