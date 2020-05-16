import * as SanaJK from "sanajk";
import { ShioriMiddleware } from "shiorack";
import { SaveData } from "../SaveData";

export const autoTalkSettingMiddleware:
    ShioriMiddleware<
    SanaJK.middlewares.saveLoadMiddleware.SaveDataState<SaveData> &
    SanaJK.AutoTalksState<any>
    > = {
    async load(ctx, next) {
        const saveData = ctx.state.saveData;
        if (saveData) {
            ctx.state.autoTalkChooser.tags = saveData.allowTags ? new Set(saveData.allowTags) : undefined;
            ctx.state.autoTalkTrigger.interval = saveData.interval;
        }

        return next();
    },
    async unload(ctx, next) {
        ctx.state.saveData = {
            ...(ctx.state.saveData || {}),
            allowTags: ctx.state.autoTalkChooser.tags ? Array.from(ctx.state.autoTalkChooser.tags) : undefined,
            interval: ctx.state.autoTalkTrigger.interval,
        };

        return next();
    },
};
