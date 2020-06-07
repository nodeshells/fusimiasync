import {events} from "../shioriBuilder";
import {r} from "../utils";

events.OnMouseDoubleClick = () => r`\![raise,OnGhostMenu]\e`;
events.OnGhostMenu = () =>
    r`\0\s[5]何か頼み事ですか？\n` +
    r`\n[half]` +
    r`\_q■シンクちゃんが出来る事\n` +
    r`------------------------------ -\n` +
    r`\![*]\q[初回起動テスト,"script:\![raise,OnFirstBoot]"]\n` +
    r`\![*]\q[テスト辞書を走らせる,"script:\![raise,OnTestEvent]"]\n` +
    r`\![*]\q[ブラウザを起動,"script:\![raise,OnOpenBrowser]"]\n` +
    r`\![*]\q[声を出して話してもらう,"script:\![raise,OnSpeechInit]"]\n` +
    r`\![*]\q[Twitterのトレンドを教えて,"script:\![raise,GetTwitterTrends]"]\n` +
    // r`\n[half]\_q\_q■デモ機能\n` +
    r`------------------------------ -\e`;
