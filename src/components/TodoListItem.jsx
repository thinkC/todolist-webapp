import { FaTrashAlt } from 'react-icons/fa'

const TodoListItem = ({ todo, removeTodo }) => {
    const { text, id } = todo;
    return (
        <>
            <article>
                <div className="todo-item">
                    <p>{text}</p>
                    <FaTrashAlt className="trash" data-testid={`removeBtn-${id}`} onClick={() => { removeTodo(id) }} />
                </div>
            </article>
        </>
    )
}

export default TodoListItem;