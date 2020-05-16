import {events} from "../shioriBuilder";

const r = String.raw;
events.OnNetworkHeavy = () => r`\h\s[0]ネットワークがタイムアウトしました。\e`;
