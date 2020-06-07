
import {TwitterService} from "../service/twitter.service";
import {events} from "../shioriBuilder";
import {r} from "../utils";

events.GetTwitterTrends = async () => {
  try {
    //  トレンドトップ(いれた数字)
    const trendsTopRank = 10;
    const trends: any = await TwitterService.getJapaneseTwitterTrends();
    const topTrends = trends[0].trends
        .map((trend: { name: string; }) => `${trend.name}\\n`)
        .slice(0, trendsTopRank - 1)
        .join("");
    return r`\s[5]探してきたので読み上げますね。\w5\n` +
           r`${topTrends}` +
           r`\w5\s[1]こんな感じでよかったですか？`;
  } catch (e) {
    return r`${e}`;
  }
};
