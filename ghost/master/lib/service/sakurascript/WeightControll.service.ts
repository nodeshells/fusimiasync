import {WeightCommands} from "../../../consts/SakuraScriptCommands";
import {r} from "../../utils";

type NormalWeightNum = 1|2|3|4|5|6|7|8|9;

/**
 * バルーンに表示されるテキストにウェイトをかけるためのメソッドをまとめる
 */
export class WeightControlService {
  /**
   * メソッド実行後に表示されるメッセージにウェイトを適用する
   * @param weightNum
   */
  public static weightText(weightNum: NormalWeightNum) {
    return r`${WeightCommands.NORMAL_WEIGHT}${weightNum}`;
  }

  /**
   * メソッド実行後に表示されるメッセージに指定ミリ秒のウェイトを適用する
   * @param weightMilsec
   */
  public static weightMilSec(weightMilSec: number) {
    return r`${WeightCommands.PRECISE_WEIGHT}[${weightMilSec}]`;
  }

  /**
   * クリックされるまで
   */
  public static clickListenerWeight() {
    return r`${WeightCommands.CLICK_LISTENER_WEIGHT}`;
  }

  /**
   * コマンド使用後から終了誤までウェイトを無効にする
   */
  public static noWeightZone() {
    return r`${WeightCommands.NO_WEIGHT_ZONE}`;
  }

}
