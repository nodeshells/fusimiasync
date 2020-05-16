import { auto, autow, chain, chainw, endchain, endchainw } from "sanajk";
import { autoTalks } from "../shioriBuilder";
import {r} from "../utils";

autoTalks.add(
    r`\0\s[0]自動発話です。\e`,
    r`\0\s[0]ランダムに抽選されて発話されます。\e`,
    (ctx) =>
        r`\0\s[0]${ctx.state.autoTalkTrigger.interval}秒ごと、` +
        r`${ctx.state.autoTalkTrigger.fluctuationRate}の誤差範囲の間隔で発話されます。\e`,
    (ctx) => r`\0\s[0]ghost/masterフォルダは${ctx.state.dirpath}です。\e`,
    (ctx) => {
        if (!ctx.state.point) {
            ctx.state.point = 0;
        }
        ++ctx.state.point;
        return r`\0\s[0]ステートを操作して${ctx.state.point}ポイントたまりました。\e`;
    },
    r`\0\s[0]通常はランダム抽選の重みは1です。\e`,
    autow(5, r`\0\s[0]ランダム抽選の重み5を指定しました。\e`),
    autow((ctx) => ctx.state.point || 0, r`\0\s[0]ランダム抽選の重みは関数を使うこともできます。\e`),
    autow(() => new Date().getDay() === 0 ? 1 : 0, r`\0\s[0]これを利用して、特定の日時にのみ発話する設定等も可能です。\e`),
    autow(
        -1,
        r`\0\s[0]重みを-1にした場合は中の要素の重みの和が重みとして使用されます\e`,
        r`\0\s[0]最初に外側の要素で抽選が行われた後、内側の要素があればその中で抽選が行われます。\e`,
        autow(5, r`\0\s[0]このグループ全体の重みは6として計算され、さらにそのグループ内での抽選は1:1:5の確率になります。\e`),
    ),
    auto(
        r`\0\s[0]重みが-1で良い場合は省略もできます。\e`,
        r`\0\s[0]このグループ全体の重みは2として計算され、さらにそのグループ内での抽選は1:1の確率になります。\e`,
    ),
    auto(
        ["foo", "bar"],
        (ctx) =>
            r`\0\s[0]タグがつけられます。\n` +
            r`この文章は[${ctx.state.autoTalkChooser.tags}]がundefinedであるか、そこにfooかbarが含まれている場合のみ発話されます。\e`,
    ),
    auto(r`\0\s[0]タグをつけない場合はいつも発話されます。\e`),
    autow(5, ["foo"], r`\0\s[0]重みとタグを同時に指定することもできます。\e`),
);
