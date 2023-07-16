import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: "#3281a5",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./threejs.png",
  fullDecal: "./threejs.png",
});

export default state;
