import { events } from "../shioriBuilder";
import {r} from "../utils";

events.OnFirstBoot = (ctx) => r`\h\s[1]初回起動時の動作です。\n`;
events.OnBoot = (ctx) => r`\h\s[2]あ、マスター...\w9どうも。\n`;
