import { config, tokens } from "@tamagui/config/v3";
import { createFont, createTamagui } from "tamagui";

const playfairFace = {
  normal: {
    normal: "PlayfairDisplay_400Regular",
    italic: "PlayfairDisplay_400Regular_Italic",
  },
};
//const eaterFace =  {normal: {normal: 'Eater_400Regular'},
const playfairFont = createFont({
  // font-family name(s) for web use via CSS
  family: "Playfair Display, serif",
  size: {
    4: 10,
    5: 12,
    6: 15,
    7: 18,
    8: 20,
    9: 24,
    10: 32,
    12: 40,
    14: 48,
  },
  transform: {
    6: "uppercase",
    7: "none",
  },
  weight: {
    6: "400",
    7: "700",
  },
  color: {
    6: "$colorFocus",
    7: "$color",
  },
  letterSpacing: {
    5: 2,
    6: 1,
    7: 5,
    8: -1,
    9: -2,
    10: -3,
    12: -4,
    14: -5,
    15: -6,
  },
  // these will be used when run in native mode.
  face: {
    400: {
      normal: "PlayfairDisplay-Regular",
      italic: "PlayfairDisplay-Italic",
    },
  },
});

const eaterFont = createFont({
  family: "Eater, sans-serif",
  size: {
    4: 10,
    5: 12,
    6: 15,
    7: 18,
    8: 20,
    9: 24,
    10: 32,
    12: 40,
    14: 48,
  },
  transform: {
    6: "uppercase",
    7: "none",
  },
  weight: {
    6: "400",
    7: "700",
  },
  color: {
    6: "$colorFocus",
    7: "$color",
  },
  letterSpacing: {
    5: 2,
    6: 1,
    7: 5,
    8: -1,
    9: -2,
    10: -3,
    12: -4,
    14: -5,
    15: -6,
  },
  // these will be used when run in native mode.
  face: {
    400: {
      normal: "Eater_400Regular",
    },
  },
});

export const tamaguiConfig = createTamagui({
  fonts: {
    body: playfairFont,
    heading: playfairFont,
    playfair: playfairFont,
    eaterFont: eaterFont,
  },
  media: { ...config.media },
  tokens: { ...tokens },
  defaultFont: "body",
  animations: { ...config.animations },
  shouldAddPrefersColorThemes: true,
  themeClassNameOnRoot: true,
  shorthands: { ...config.shorthands },
  themes: { ...config.themes },
});
export default tamaguiConfig;
export type Conf = typeof tamaguiConfig;
declare module "tamagui" {
  interface TamaguiCustomConfig extends Conf {}
}
