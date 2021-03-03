import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import TodoList from './TodoList';
import data from '../data';


describe('todo list test', () => {
    it('show show text of todos', () => {
        render(<TodoList todos={data} />);
        // screen.debug();
        data.forEach((item) => expect(screen.getByText(item.text)).toBeInTheDocument());
    })
})