
import {TwitterService} from "../service/twitter.service";
import {events} from "../shioriBuilder";
import {r} from "../utils";

events.GetTwitterTrends = async () => {
  try {
    const trends: any = await TwitterService.getJapaneseTwitterTrends();
    const trendsNameList = trends[0].trends.map((trend: { name: string; }) => `${trend.name}\\n`).join("");
    return r`\s[5]探してきたので読み上げますね。\w5\n` +
           r`${trendsNameList}` +
           r`\w5\s[1]こんな感じでよかったですか？`;
  } catch (e) {
    return r`${e}`;
  }
};
