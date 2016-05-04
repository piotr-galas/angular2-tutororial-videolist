import {Component, EventEmitter} from 'angular2/core';

@Component({
	selector: 'video-details',
	templateUrl: 'app/components/videodetail/videodetail.component.html',
	inputs: ['video'],
	outputs: ['closeForm']
})

export class VideoDetailComponent{
	private editTitle: boolean = false;
	private closeForm = new EventEmitter;
	onTitleClick(){
		this.editTitle = true;
	}

	onButtonOkClick(){
		this.closeForm.emit({})
	}

	ngOnChanges(){
		this.editTitle = false;
	}
}