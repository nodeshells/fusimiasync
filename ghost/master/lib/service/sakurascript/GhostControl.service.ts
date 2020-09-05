import {SurfaceCommands} from "../../../consts/SakuraScriptCommands";
import {r} from "../../utils";

/**
 * ゴーストの制御を行うメソッドをまとめる
 */
export class GhostControlService {
  /**
   * 指定された番号のゴーストをターゲットに指定する
   * @param ghostNumber
   */
  public static changeTarget(ghostNumber: number) {
    return r`${SurfaceCommands.CHANGE_SURFACE_ID}[${ghostNumber}]`;
  }

  /**
   * 指定された番号の表情へ切り替える
   * @param faceNumber
   */
  public static changeFace(faceNumber: number) {
    return r`${SurfaceCommands.CHANGE_SURFACE}${faceNumber}`;
  }

}
