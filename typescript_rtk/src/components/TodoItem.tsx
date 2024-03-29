import { useAppDispatch } from '../hooks';
import { toggleStatus, deleteTodo} from '../store/todoSlice';

interface TodoItemProps {
    id: string,
    title: string,
    completed: boolean,
}
const TodoItem :React.FC<TodoItemProps> =({ id, title, completed }) => {
  const dispatch = useAppDispatch();

  return (
    <li>
      <input
        type='checkbox'
        checked={completed}
        onChange={() => dispatch(toggleStatus( id ))}
      />
      <span style={{width:'450px'}}>{title}</span>
      <span onClick={() => dispatch(deleteTodo( id ))}>&times;</span>
    </li>
  );
};

export default TodoItem;
