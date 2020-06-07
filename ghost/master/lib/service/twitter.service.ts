import * as Twitter from "twitter";
import {ResponseData} from "twitter";
import {TwitterDevAccountSecret} from "../../secret/keys";

const client = new Twitter(TwitterDevAccountSecret);

export class TwitterService {

  public static getJapaneseTwitterTrends() {
    // 地域を指定
    const woeId = "23424856";
    return new Promise((resolve, reject) => {
      const params = {
        id: woeId,
      };
      client.get("trends/place", params, (err, res: ResponseData) => {
        if (err) {
            reject(err);
        }
        resolve(res);
      });
    });

  }

}
