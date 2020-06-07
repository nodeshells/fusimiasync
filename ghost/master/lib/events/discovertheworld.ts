
import {TwitterService} from "../service/twitter.service";
import {events} from "../shioriBuilder";
import {r} from "../utils";

events.GetTwitterTrends = async () => {
  try {
    //  トレンドトップ(いれた数字)
    const trendsTopRank = 10;
    const woeIdJP = "23424856";
    // const woeIdLA = "2442047";
    const trends: any = await TwitterService.getTwitterTrends(woeIdJP);
    const topTrends = trends[0].trends
        .map((trend: { name: string; url: string; }) =>  r`\q[${trend.name},"script:\![open,browser,${trend.url}]"]\n`)
        .slice(0, trendsTopRank - 1)
        .join("");
    return r`\s[5]見つけてきたので今表示しますね。\w5\n\__q` +
           r`\n[half]` +
           r`${topTrends}\w5` +
           r`\n[half]` +
           r`\__q\w5\s[1]こんな感じでよかったですか？`;
  } catch (e) {
    return r`\0\s[2]わわ...。\w5エラーが発生したみたいだよ。\n` +
           r`${e}`;
  }
};
