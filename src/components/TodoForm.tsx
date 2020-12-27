import { FC, useRef, useState } from 'react';
import { ITodo } from './Interface';
import { TodoList } from './TodoList';
import { FormControl, Button, EButtonType, EColor } from '@kbfront/kb-ui';

let count = 0;
export const TodoForm: FC = () => {
    let ref = useRef<HTMLInputElement>(null);
    let [todos, setTodos] = useState<ITodo[]>([]);

    const save = (event: any) => {
        event.preventDefault();
        let inputValue: any = ref.current!.value;
        if (inputValue !== "") {
            count++;
            const newTodo = {
                text: inputValue,
                count: count,
                id: Date.now(),
            }
            setTodos([newTodo, ...todos]);
            ref.current!.value = '';
        }
    }
    const deleteTodo = (id: any) => {
        const newlist = todos.filter(todo => todo.id !== parseInt(id))
        setTodos(newlist);
    }
    return (
        <div className="todo">
            <form onSubmit={save} className="form">
                <FormControl
                    ref={ref}
                    placeholder="Enter your task.."
                    className="form-control"
                    color={EColor.SUCCESS}
                />
                <Button
                    className="add"
                    type={EButtonType.SUBMIT}
                    color={EColor.DARK}>
                    +
                    </Button>
            </form>
            <TodoList {...{ todos, deleteTodo }} />
        </div>
    )
}
export default TodoForm;