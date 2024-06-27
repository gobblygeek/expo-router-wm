import { H2, Paragraph, XStack, YStack } from "tamagui";

export default function TabOneScreen() {
  return (
    <YStack f={1} ai="center" gap="$8" px="$5" pt="$10">
      <H2 letterSpacing="$5">Settings</H2>
      <Paragraph>
        This is an example of a tabbed layout with a couple of tabs. You can
        navigate between them by tapping on the tabs at the bottom of the
        screen.
      </Paragraph>
      <SettingField customKey={"ProjectWC"} />
    </YStack>
  );
}

function SettingField({ customKey }: { customKey: string }) {
  return (
    <XStack gap="$5" ai="center">
      <Paragraph f="$6">{customKey}</Paragraph>
    </XStack>
  );
}
