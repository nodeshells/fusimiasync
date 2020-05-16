import {events} from "../shioriBuilder";
import {r} from "../utils";

events.OnMouseDoubleClick = () => r`\![raise,OnGhostMenu]\e`;
events.OnGhostMenu = () =>
    r`\0\s[2]私は何をすればいいの？\n` +
    r`\n[half]` +
    r`\_q■シンクちゃんが出来る事\n` +
    r`------------------------------ -\n` +
    r`\![*]\q[初回起動をもう一度,"script:\![raise,OnFirstBoot]"]\n` +
    r`\![*]\q[テスト辞書を走らせる,"script:\![raise,OnTestEvent]"]\n` +
    r`\![*]\q[ブラウザを起動,"script:\![raise,OnOpenBrowser]"]\n` +
    r`\![*]\q[声を出して話してもらう,"script:\![raise,OnSpeechInit]"]\n` +
    // r`\n[half]\_q\_q■デモ機能\n` +
    r`------------------------------ -\e`;
