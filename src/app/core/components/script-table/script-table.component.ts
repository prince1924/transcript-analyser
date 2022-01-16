import { Component, Input, OnInit } from '@angular/core';
import { IScriptDetails } from '../../models';

@Component({
  selector: 'app-script-table',
  templateUrl: './script-table.component.html',
  styleUrls: ['./script-table.component.scss']
})
export class ScriptTableComponent {

  @Input() scripts: IScriptDetails[];
  @Input() expectedSimilarity: number;

  displayedColumns: string[] = ['line', 'speaker', 'sentence'];
  highlightedSentenceOrder: number;



  setHighlightedSentence(order: number) {
    this.highlightedSentenceOrder = order
  }

  isHighlighted(element: IScriptDetails) {
    return element.order === this.highlightedSentenceOrder
  }
}
