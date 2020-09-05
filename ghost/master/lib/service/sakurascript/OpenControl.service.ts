import {OpenCommands} from "../../../consts/SakuraScriptCommands";
import {InputShare} from "../../interfaces/input";
import {r} from "../../utils";

/**
 * 開く関係のメソッドを記述
 */
export class OpenControlService {
  /**
   * 引数で指定されたURLをブラウザで開く
   * @param openUrl
   */
  public static openBrowser(openUrl: string) {
    return r`${OpenCommands.OPEN_BROWSER}[${openUrl}]`;
  }

  /**
   * 引数のオブジェクトで表示するインプットボックスを変更出来る
   * @param input
   */
  public static openInputBox(input: InputShare) {
    return r`\![open,${input.inputType},${input.id},${input.displayTimeMilSec}]`;
  }

  /**
   * カレンダーを開く
   */
  public static openCalender() {
    return r`${OpenCommands.OPEN_CALENDER}`;
  }

  /**
   * READMEファイルの内容を開いて表示する
   */
  public static openReadmeFile() {
    return r`${OpenCommands.OPEN_README}`;
  }

  /**
   * コミュニケートボックスを開く
   */
  public static openCommunicateBox() {
    return r`${OpenCommands.CLOSE_COMMUNICATE_BOX}`;
  }

  /**
   * ティーチボックスを開く
   */
  public static openTeachBox() {
    return r`${OpenCommands.OPEN_TEACH_BOX}`;
  }

  /**
   * ティーチボックスを閉じる
   */
  public static closeTeachBox() {
    return r`${OpenCommands.CLOSE_TEACH_BOX}`;
  }

}
