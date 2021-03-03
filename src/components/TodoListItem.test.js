import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import TodoListItem from '../components/TodoListItem';
import data from '../data';
import { FaItalic } from 'react-icons/fa';

describe('<TodoListItem />', () => {
    it('should render todo item properly', () => {
        render(<TodoListItem todo={data[0]} />);
        expect(screen.queryByText(/Buy Groceries/i)).toBeInTheDocument();
        expect(screen.getByTestId('removeBtn-1')).toBeInTheDocument()
    })
})