import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CallsService } from '../../services/calls.service';
import { CallDetails } from '../../interfaces';
import { switchMap } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { ScriptTableComponent } from '../script-table/script-table.component';
import { TranscriptAnalyserService } from '../../services/transcript-analyser-service.service';
import { ICallDetails } from '../../models';

@Component({
  selector: 'app-transcript-analyzer',
  templateUrl: './transcript-analyzer.component.html',
  styleUrls: ['./transcript-analyzer.component.scss']
})
export class TranscriptAnalyzerComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('scriptTable') scriptTable: ScriptTableComponent

  callDetails: ICallDetails


  constructor(
    private route: ActivatedRoute,
    private callService: CallsService,
    private transcriptService: TranscriptAnalyserService
  ) {
  }

  ngOnInit(): void {
    //      return this.callService.getCallDetailsById(params.callId)
  }

  ngAfterViewInit() {
    //   this.transcriptService.getSensitivity()
    // })
  }

}
