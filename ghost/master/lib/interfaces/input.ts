/**
 * インプットダイアログで共通の引数
 */
export interface InputShare {
  inputType: "inputBox" | "passwordinput" | "dateinput" | "sliderinput" | "timeinput";
  id: string;
  displayTimeMilSec: number;
}
