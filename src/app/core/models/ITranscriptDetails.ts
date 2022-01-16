import { IScriptDetails } from "./IScriptDetails";

export interface ITranscriptDetails extends IScriptDetails {
    channel: number,
    timeFrom: number,
    timeTo: number
}