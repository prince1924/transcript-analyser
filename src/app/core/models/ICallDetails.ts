export interface ICallDetails {
    callId: string,
    callTypeId: string,
    agent: {
        agentId: string,
        channelNo: number
    },
    customer: {
        fullName: string,
        channelNo: number
    },
    callStartTime: Date,
    gsFileUrl: string,
    duration: number
}