import * as fs from "fs";
import { BadRequest, InternalServerError, NoContent, OK, Response } from "shiori-request-helper";
import {BalloonControlService} from "./service/sakurascript/BalloonControl.service";
import {EventControlService} from "./service/sakurascript/EventControl.service";
import {GhostControlService} from "./service/sakurascript/GhostControl.service";
import {OpenControlService} from "./service/sakurascript/OpenControl.service";
import {SoundControlService} from "./service/sakurascript/SoundControl.service";
import {WeightControlService} from "./service/sakurascript/WeightControll.service";

// 記号をまとめて文字として扱う時に使用する
export const r = String.raw;

// TODO ファサードを作ってもいいかも
export const g = GhostControlService;
export const w = WeightControlService;
export const o = OpenControlService;
export const b = BalloonControlService;
export const s = SoundControlService;
export const e = EventControlService;

// いちおうutils化
export class RequestHelper {
  public static BadRequest = BadRequest;
  public static InternalServerError = InternalServerError;
  public static NoContent = NoContent;
  public static OK = OK;
  public static Response = Response;
}
