//import { invoke } from "@tauri-apps/api/core";

const display = document.getElementById("display") as HTMLInputElement;
console.log("Display element:", display);

function appendToDisplay(input: string) :void {
  display.value += input;
  console.log("Display element:", display);
}
