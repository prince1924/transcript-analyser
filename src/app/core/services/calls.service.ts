
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAgent, ICallDetails } from '../models';

@Injectable({
    providedIn: 'root'
})
export class CallsService {

    getAllAgents(): Observable<IAgent[]> {
        // return new Observable(
        // })
    }

    getAgentById(agentId: string): Observable<IAgent> {
        // return new Observable(
        // })
    }

    getCallsByAgentId(agentId: string): Observable<ICallDetails[]> {
        // return new Observable(
        // })
    }

    getCallDetailsById(callId: string): Observable<ICallDetails> {
        // return new Observable(
        // })
    }

    getAgentAndCallByCallId(callId: string): Observable<any> {
        // return new Observable(
        // })
    }
}
