import {BalloonCommands} from "../../consts/SakuraScriptCommands";
import {events} from "../shioriBuilder";
import {g, o, r, w} from "../utils";

events.OnTestEvent = () =>
    r`${g.changeTarget(0)}` +
    r`${g.changeFace(4)}` +
    // r`${o.openBrowser(`https://google.com`)}` +
    r`テスト用メッセージ${BalloonCommands.BREAK_TEXT}` +
    // r`インプットボックステスト\n` +
    // r`${o.openInputBox({id: "test", inputType: "sliderinput", displayTimeMilSec: -1})}` +
    // r`${w.clickListenerWeight()}` +
    // r`${w.weightMilSec(1000)}` +
    r`ウェイトテスト`;
