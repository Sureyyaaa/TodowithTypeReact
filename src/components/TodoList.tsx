import { ListGroup, EColor } from '@kbfront/kb-ui';
import { FC } from 'react';
import { ITodo } from './Interface';
import { TodoItem } from './TodoItem'

export interface Iprops {
    todos: Array<ITodo>
    deleteTodo: (id: any) => void
}

export const TodoList: FC<Iprops> = ({ todos, deleteTodo }) => {
    return (
        <ListGroup theme={EColor.DARK} className="list">
            {
                todos?.map((onetodo: ITodo, i: number) => (
                    <TodoItem key={i} {...{ onetodo, deleteTodo }} />
                ))
            }
        </ListGroup>
    )
}