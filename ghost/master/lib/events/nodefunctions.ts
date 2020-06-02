import * as fs from "fs";
import {from, interval, of, timer} from "rxjs";
import {concatMap, debounceTime, delay, map, skip, take, tap} from "rxjs/operators";
import {Builder, By, Capabilities, Key, until, WebDriver} from "selenium-webdriver";
import {events} from "../shioriBuilder";
import {r, RequestHelper} from "../utils";
// tslint:disable-next-line:no-var-requires
const TextToSpeechV1 = require("ibm-watson/text-to-speech/v1");
import {SynthesizeParams} from "ibm-watson/text-to-speech/v1-generated";
// tslint:disable-next-line:no-var-requires
const {IamAuthenticator} = require("ibm-watson/auth");
// tslint:disable-next-line:no-var-requires
const player = require("node-wav-player");
// chromewebrdriverを使用できるようにしてる
import "chromedriver";
import {IbmWatsonAuth} from "../../secret/keys";

// ブラウザを開くデモ
const urls = ["https://www.google.co.jp", "https://www.youtube.com", "https://qiita.com"];
events.OnOpenBrowser = async () => {
  try {
    const capabilities = Capabilities.chrome();
    capabilities.set("chromeOptions", {
      args: [
        "--no-sandbox",
        "--disable-gpu",
        "--window-size=1280,720",
        // other chrome options
      ],
    });

    const driver = new Builder().withCapabilities(capabilities).build();
    // rxjsで指定urlへ3秒ごとに遷移
    // 配列のインデックスが最後の要素に達っして3秒後にブラウザ終了
    await from(urls).pipe(
        concatMap((item) => of(item).pipe(delay(3000))),
        map(async (url, index) => {
            await driver.get(url);
            if (index === (urls.length - 1)) {
            setTimeout(() => {
              driver.quit();
            }, 5000);
          }
        }),
        take(urls.length)).toPromise();
        // .subscribe((data) => data, (err) => err);

    return r`\0\s[2]どうかな？上手く表示出来てるといいけど・・・。\e`;
  } catch (e) {
    return r`\0\s[5]エラーが発生したよ!読み上げるね。\n`
        + r`${e}`;
  }
};

// 以下から合成音声を生成-------------------------------------------------------------------------------------------------

const params: SynthesizeParams = {
  text: "この音声はテスト用の音声です。正しく聞こえていますでしょうか？聞こえたらお返事をくださーい。はい、ありがとうございます！",
  voice: "ja-JP_EmiVoice", // Optional voice
  // tslint:disable-next-line:object-literal-sort-keys
  accept: "audio/wav",
};

// 音声を作成するイベント
events.OnSpeechInit = async () => {
  // watson text-to-speechへの接続準備
  const textToSpeech = new TextToSpeechV1({
    authenticator: new IamAuthenticator({apikey: IbmWatsonAuth.TextToSpeechAuth.apiKey}),
    url: IbmWatsonAuth.TextToSpeechAuth.url,
  });

  try {
    // 音声合成APIで音声を作成
    const response = await textToSpeech.synthesize(params);
    const audio = response.result;
    const repairedFile = await textToSpeech.repairWavHeaderStream(audio);
    fs.writeFileSync("sound/speech.wav", repairedFile);

    return r`\0\s[2]すごい！音声が出来上がったよ、喋ってみるね～!\![raise,OnSpeechDemo]\e`;
  } catch (e) {
    return r`\0\s[5]エラーが出たよ!読み上げるね。\n`
        + r`${e}`;
  }
};

// 音声を流す用のイベント
events.OnSpeechDemo = async () => {
  try {
    await player.play({
      path: "sound/speech.wav",
    });

    return r`\0\s[2]お話中`;
  } catch (e) {
    return r`\0\s[5]エラーが出たよ!読み上げるね。\n`
        + r`${e}`;
  }
};
