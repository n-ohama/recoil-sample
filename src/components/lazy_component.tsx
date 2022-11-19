import { Button, Checkbox, Flex, Text } from "@chakra-ui/react";
import { useRecoilRefresher_UNSTABLE, useRecoilValue } from "recoil";
import { deleteTodo, toggleIsDone } from "../global/firebase";
import { fireTodoState } from "../global/state";

export const LazyComponent = () => {
  const data = useRecoilValue(fireTodoState);
  const resetTodo = useRecoilRefresher_UNSTABLE(fireTodoState);

  const onChangeIsDone = async (todoId: number, current: boolean) => {
    await toggleIsDone(todoId, current);
    resetTodo();
  };

  const onDelete = async (i: number) => {
    await deleteTodo(i);
    resetTodo();
  };

  return (
    <>
      {data.map((item) => (
        <Flex key={item.id} mb={4}>
          <Checkbox
            isChecked={item.isDone}
            mr={4}
            onChange={() => onChangeIsDone(item.id, item.isDone)}
          />
          <Text pt={2}>{item.content}</Text>
          <Button
            ml={4}
            disabled={!item.isDone}
            onClick={() => onDelete(item.id)}
          >
            削除
          </Button>
        </Flex>
      ))}
    </>
  );
};
