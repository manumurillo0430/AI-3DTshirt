import { ai, logoShirt, stylishShirt, fileIcon, swatch } from "../assets";

export const EditorTabs = [
  {
    name: "colorpicker",
    label: "Choose a color...",
    icon: swatch,
  },
  {
    name: "filepicker",
    label: "Upload a decal...",
    icon: fileIcon,
  },
  {
    name: "aipicker",
    label: "Create your design...",
    icon: ai,
  },
];

export const FilterTabs = [
  {
    name: "logoShirt",
    label: "Logo",
    icon: logoShirt,
  },
  {
    name: "stylishShirt",
    label: "No logo",
    icon: stylishShirt,
  },
];

export const DecalTypes = {
  logo: {
    stateProperty: "logoDecal",
    filterTab: "logoShirt",
  },
  full: {
    stateProperty: "fullDecal",
    filterTab: "stylishShirt",
  },
};
