import { ICallDetails } from "./ICallDetails";
import { IScriptDetails } from "./IScriptDetails";
import { ITranscriptDetails } from "./ITranscriptDetails";

export interface ICallList extends ICallDetails {
    script: IScriptDetails[],
    transcript: ITranscriptDetails[]
}