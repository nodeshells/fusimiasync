/**
 * 様々なコマンドで使用される
 */
import {r} from "../lib/utils";

export const GeneralCommands = {
  CTRL : r`\!`,
};

/**
 * サーフェイス関係のコマンド定義
 * 主に伺かの見た目の制御を行う際に使用
 */
export const SurfaceCommands = {
  CHANGE_SURFACE : r`\s`,
  CHANGE_SURFACE_ID : r`\p`,
  DISPLAY_ANIMATION : r`\i`,
};

/**
 * バルーン関連のコマンド定義
 * 吹き出しの制御に使用
 */
export const BalloonCommands = {
  CHANGE_BALLOON : r`\b`,
  DISPLAY_PICTURE : r`\_b`,
  // tslint:disable-next-line:object-literal-sort-keys
  BREAK_TEXT : r`\n`,
  BREAK_TEXT_HALF : r`\n[half]`,
  CLEAR_TEXT : r`\c`,
  MOVE_BALLOON : r`\_l`,
  CHANGE_TEXT : r`\f`,
};

/**
 * 吹き出しに表示する文字の速度を制御する際に使用
 */
export const WeightCommands = {
  NORMAL_WEIGHT : r`\w`,
  PRECISE_WEIGHT : r`\_w`,
  TIMER_WEIGHT : r`\__w`,
  // tslint:disable-next-line:object-literal-sort-keys
  CLICK_LISTENER_WEIGHT : "\\x",
  CLICK_LISTENER_NO_CLEAR_WEIGHT : "\\x\[noclear\]",
  NO_WEIGHT_ZONE: r`\_q`,
};

/**
 * 選択肢の制御用コマンド
 */
export const ChoiceCommands = {
  NORMAL_CHOICE : r`\q`,
  NOT_TIMEOUT_CHOICE : r`\*`,
  // tslint:disable-next-line:object-literal-sort-keys
  CHANGE_CHOICE_MARKER : r`\f`,
};

/**
 * Event関連のコマンド
 */
export const EventCommands = {
  FINISH_APPLICATION: r`\-`,
  SYNC_NTP : r`\6`,
  // tslint:disable-next-line:object-literal-sort-keys
  CHANGE_RANDOM_GHOST : r`\+`,
  CHANGE_NEXT_GHOST : r`\_+`,
  MOVE_FRONT_GHOST : r`\v`,
  NETWORK_UPDATE : r`${GeneralCommands.CTRL}[updatebymyself]`,
  CHECK_NETWORK_UPDATE : r`${GeneralCommands.CTRL}[updatebymyself,checkonly]`,
  MINIMUM_GHOST : r`${GeneralCommands.CTRL}[set,windowstate,minimize]`,
};

export const SoundCommands = {
  PLAY_SOUND: r`\_v`,
};

export const OpenCommands = {
  OPEN_BROWSER : r`\j`,
  OPEN_TEACH_BOX: r`\![open,teachbox]`,
  // tslint:disable-next-line:object-literal-sort-keys
  CLOSE_TEACH_BOX: r`\![close,teachbox]`,
  OPEN_COMMUNICATE_BOX: r`\![open,communicatebox]`,
  CLOSE_COMMUNICATE_BOX: r`\![close,communicatebox]`,
  OPEN_CALENDER: r`\![open,calendar]`,
  OPEN_README: r`\![open,readme]`,
};
