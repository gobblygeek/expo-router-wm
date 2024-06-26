import { ExternalLink } from "@tamagui/lucide-icons";
import { Anchor, H2, Paragraph, XStack, YStack } from "tamagui";

export default function TabOneScreen() {
  return (
    <YStack f={1} ai="center" gap="$8" px="$10" pt="$5">
      <H2>Settings</H2>
      <XStack
        ai="center"
        jc="center"
        fw="wrap"
        gap="$1.5"
        pos="absolute"
        b="$8"
      ></XStack>
    </YStack>
  );
}
