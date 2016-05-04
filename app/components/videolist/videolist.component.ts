import {Component, EventEmitter} from 'angular2/core';
import {Video} from '../../interfaces/video';
import {VideoDetailComponent} from '../videodetail/videodetail.component'

@Component({
	selector: 'video-list',
	templateUrl: 'app/components/videolist/videolist.component.html',
	inputs: ['videos'],
	outputs: ['selectVideo'],
	directives: []
})

export class VideoListComponent{
	selectVideo = new EventEmitter();

	onSelect(video: Video){
		this.selectVideo.emit(video);	
	}
}