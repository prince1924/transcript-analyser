import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { CallsService } from '../../services/calls.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { IAgent, ICallDetails } from '../../models';

@Component({
  selector: 'app-call-selection-form',
  templateUrl: './call-selection-form.component.html',
  styleUrls: ['./call-selection-form.component.scss']
})

export class CallSelectionFormComponent implements OnInit, OnDestroy {

  form: FormGroup
  agentForm = new FormControl('')
  callForm = new FormControl({ value: '', disabled: !this.agentForm.value })

  agents: IAgent[] = []
  calls: ICallDetails[] = []



  @Input() selectedCallId: string

  @Output() callSelected = new EventEmitter<string>()

  constructor(
    private callService: CallsService,
    private fb: FormBuilder
  ) {
    this.form = fb.group({
      agent: this.agentForm,
      call: this.callForm
    })
  }

  ngOnInit(): void {

    //   this.callService.getAgentAndCallByCallId(this.selectedCallId)
    // }
  }
}


}
