import { FC } from 'react';
import { ITodo } from './Interface';
import { ListItem, Flex, Text, ETextTransform, EFlexAlign, Button, EButtonSize, EButtonType, EColor, EJustify, Icon } from '@kbfront/kb-ui';

interface IProps {
    onetodo: ITodo;
    deleteTodo: (id: any) => void
}

export const TodoItem: FC<IProps> = ({ onetodo, deleteTodo }) => {
    const { text, count, id } = onetodo;
    const update = () => {
        deleteTodo(id);
    }
    return (
        <ListItem>
            <Flex justify={EJustify.SB} align={EFlexAlign.C}>
                <Text transform={ETextTransform.LOWERCASE} fontSize={1.4}>
                    {count}.  {text}
                </Text>
                <Button size={EButtonSize.XSMALL}
                    type={EButtonType.BUTTON}
                    color={EColor.DANGER_LIGHT}
                    onClick={update}>
                    <Icon color={EColor.BLACK} path={["fal", "acorn"]} />
                </Button>
            </Flex>
        </ListItem>
    )
}
