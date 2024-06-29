import { H2, Button, XStack, YStack, Input, H6 } from "tamagui";
import { Toast, useToastController, useToastState } from "@tamagui/toast";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { Spinner } from "tamagui";
import { H5 } from "tamagui";

export default function TabOneScreen() {
  return (
    <YStack f={1} ai="center" gap="$2" px="$5" pt="$10">
      <H2 letterSpacing="$5">Settings</H2>
      <H6>Here you can update your project settings</H6>
      <SettingField customKey={"ProjectWC"} />
      <SettingField customKey={"ProjectSpan"} />
      <SettingField customKey={"SprintWC"} />
      <SettingField customKey={"SprintSpan"} />
    </YStack>
  );
}

function SettingField({ customKey }: { customKey: string }) {
  const [value, setValue] = useState("loading...");
  const [status, setStatus] = useState<"off" | "submitting" | "submitted">(
    "off"
  );
  const storageEnum = {
    ProjectWC: "Project Word Count",
    ProjectSpan: "Project Timeline (days)",
    SprintWC: "Sprint Word Count",
    SprintSpan: "Sprint Time (minutes)",
  };
  const fieldName = storageEnum[customKey];
  const getStorageValue = async (customKey) => {
    try {
      const value = await AsyncStorage.getItem(customKey);
      if (value !== null) {
        setValue(value);
      } else {
        setValue("not set");
      }
    } catch (e) {
      // error reading value
      setValue("storage error");
    }
  };
  const setStorageValue = async (customKey, value) => {
    setStatus("submitting");
    setValue(value);
    try {
      await AsyncStorage.setItem(customKey, value);
      setStatus("submitted");
    } catch (e) {
      // saving error
      setStatus("off");
    }
  };
  getStorageValue(customKey);
  return (
    <XStack gap="$2" ai="center">
      <H5>{fieldName}:</H5>
      <Input
        flex={1}
        size="$3"
        placeholder={value}
        fontFamily="$playfair"
        onTextInput={(eventObject) => setValue(eventObject.nativeEvent.text)}
      />
      <Button
        variant="outlined"
        theme="pink"
        icon={status === "submitting" ? () => <Spinner /> : undefined}
        onPress={() => setStorageValue(customKey, value)}
      >
        <H6>Update</H6>
      </Button>
    </XStack>
  );
}
