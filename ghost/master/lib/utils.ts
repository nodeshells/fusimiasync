import * as fs from "fs";
import { BadRequest, InternalServerError, NoContent, OK, Response } from "shiori-request-helper";

// 記号をまとめて文字として扱う時に使用する
export const r = String.raw;

// いちおうutils化
export class RequestHelper {
  public static BadRequest = BadRequest;
  public static InternalServerError = InternalServerError;
  public static NoContent = NoContent;
  public static OK = OK;
  public static Response = Response;
}
