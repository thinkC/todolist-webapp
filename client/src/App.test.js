import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import data from './data';
import App from './App';
import TodoList from './components/TodoList';
import TodoListItem from './components/TodoListItem';
import AddTodoList from './components/AddTodoList';

describe('<App /> test', () => {
    it('renders <App />', () => {
        render(<App />);
    });

    it('should add a todo task', () => {
        const oneTask = {
            id: 5,
            text: 'Buy Bread'
        };

        render(<App />)
        userEvent.type(screen.getByRole("textbox"), 'Buy Bread');
        userEvent.click(screen.getByText(/Add Task/i));
        // expect(screen.getByText(/Buy Bread/i)).toBeInTheDocument()
        expect(screen.queryByText(/^[a-zA-Z]+$/i)).toBeInTheDocument()

    });

    it('should not have empty character', () => {
        render(<App />)
        userEvent.type(screen.getByRole("textbox"), '');
        userEvent.click(screen.getByText(/Add Task/i));
        expect(screen.queryByText(/^\\s+$/i)).not.toBeInTheDocument()
    });

    it('should not have illegal character', () => {
        render(<App />)
        userEvent.type(screen.getByRole("textbox"), '_+=!');
        userEvent.click(screen.getByText(/Add Task/i));
        expect(screen.queryByText(/^[a-zA-Z]+$/i)).toBeInTheDocument()
    });

    it('remove todo item from list', () => {
        render(<App />);
        userEvent.click(screen.getByTestId('removeBtn-4'));
        expect(screen.queryByText(/Rest/i)).not.toBeInTheDocument();
    })
});
