import { useState } from "react";
import { Button, H2, H6, YStack, TextArea } from "tamagui";
import {} from "tamagui";

export default function TabTwoScreen() {
  const [wc, setWC] = useState(0);

  const countWords = (text: string) => {};

  return (
    <YStack f={1} ai="center" gap="$2" px="$5" pt="$10">
      <H2 letterSpacing="$5">Feed Words!</H2>
      <H6>Word Count: {wc}</H6>
      <TextArea
        flex={1}
        my="$2"
        placeholder="Write!"
        width="85%"
        onChangeText={(text) => setWC(text.split(" ").length)}
      />
      <Button
        variant="outlined"
        theme="pink"
        mb="$5"
        onPress={() => setWC(wc + 1)}
      >
        <H6>Add Word Count</H6>
      </Button>
    </YStack>
  );
}
