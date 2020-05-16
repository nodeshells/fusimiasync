import { BadRequest, InternalServerError, NoContent, OK, Response } from "shiori-request-helper";
import { events } from "../shioriBuilder";
const r = String.raw;

events.OnCommunicateExample = () => OK(r`\0\s[0]コミュニケーション\e`, "さくら");
