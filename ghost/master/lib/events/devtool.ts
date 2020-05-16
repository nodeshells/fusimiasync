import {events} from "../shioriBuilder";
import {r} from "../utils";

events.OnTestEvent = () => r`\0\s[5]テスト用のイベントです。\e`;
