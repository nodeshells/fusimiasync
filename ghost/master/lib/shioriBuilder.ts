import * as SanaJK from "sanajk";
import { autoTalkSettingMiddleware } from "./middlewares/autoTalkSettingMiddleware";
import { SaveData } from "./SaveData";
import { State } from "./State";

export const shioriBuilder =
    new SanaJK.SanaShioriBuilder()
    .use({state: {} as State})
    .useDefaults<SaveData>()
    .use(autoTalkSettingMiddleware);
export const autoTalks = shioriBuilder.state.autoTalks;
export const events = shioriBuilder.state.events;
