import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { CallsService } from '../../services/calls.service';
import { TranscriptAnalyserService } from '../../services/transcript-analyser-service.service';
import { IAgent, ICallDetails } from '../../models';

@Component({
  selector: 'app-transcript-table',
  templateUrl: './transcript-table.component.html',
  styleUrls: ['./transcript-table.component.scss']
})

export class TranscriptTableComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = ['time', 'speaker', 'sentence']
  agent: IAgent
  sensitivity: number = 38

  @Input() callDetails: ICallDetails
  @Input() realSimilarity: number

  @Output() matchedSentenceHovered = new EventEmitter<number>()

  constructor(
    private callSerivce: CallsService,
    private transcriptAnalyserService: TranscriptAnalyserService
  ) {
  }

  ngOnInit() {
    //this.callSerivce.getAgentById(this.callDetails.agent.agentId)
    //this.transcriptAnalyserService.getSensitivity()

  }

}
