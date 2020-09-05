import {MenuItemVariable} from "../service/sakurascript/BalloonControl.service";
import {events} from "../shioriBuilder";
import {b, r} from "../utils";

/**
 * メニューコンテンツ管理用
 */
const menuItem: MenuItemVariable = [
  {
    emitEvent: "OnFirstBoot",
    menuTitle: "初回起動テスト",
  },
  {
    emitEvent: "OnTestEvent",
    menuTitle: "テスト辞書を走らせる",
  },
  {
    emitEvent: "OnOpenBrowser",
    menuTitle: "ブラウザを起動",
  },
  {
    emitEvent: "GetTwitterTrends",
    menuTitle: "Twitterのトレンドを教えて",
  },
];

events.OnMouseDoubleClick = () => r`\![raise,OnGhostMenu]\e`;
events.OnGhostMenu = () =>
    r`\0\s[5]何か頼み事ですか？\n` +
    r`\n[half]` +
    b.displayMenu(menuItem, "シンクちゃんが出来る事");
