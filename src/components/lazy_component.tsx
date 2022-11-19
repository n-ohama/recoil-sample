import { Button, Checkbox, Flex, Text } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { fireTodoState } from "../global/state";

export const LazyComponent = () => {
  const data = useRecoilValue(fireTodoState);

  return (
    <>
      {data.map((item, index) => (
        <Flex key={item.id} mb={4}>
          <Checkbox isChecked={item.isDone} mr={4} />
          <Text pt={2}>{item.content}</Text>
          <Button ml={4}>削除</Button>
        </Flex>
      ))}
    </>
  );
};
