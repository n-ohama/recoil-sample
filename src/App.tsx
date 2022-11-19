import { Button, Flex, Input } from "@chakra-ui/react";
import { Suspense, useState } from "react";
import { useRecoilRefresher_UNSTABLE } from "recoil";
import { addData } from "./global/firebase";
import { fireTodoState } from "./global/state";
import { Todo } from "./global/types";
import { LazyComponent } from "./components/lazy_component";

const App = () => {
  const [inputText, setInputText] = useState("");
  const resetTodo = useRecoilRefresher_UNSTABLE(fireTodoState);
  const onSubmit = async () => {
    const item: Todo = {
      id: Math.random(),
      content: inputText,
      isDone: false,
    };

    await addData(item);
    resetTodo();
  };

  return (
    <div style={{ padding: "20px" }}>
      <Flex mb={8}>
        <Input
          width={"50vw"}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          mr={4}
        />
        <Button onClick={onSubmit}>ボタン</Button>
      </Flex>
      <Suspense fallback={<div>Loading ...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
};

export default App;
