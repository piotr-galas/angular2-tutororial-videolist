import {Component} from 'angular2/core';
import {Config} from './config/config.service'
import {Video} from './interfaces/video'
import {VideoListComponent} from './components/videolist/videolist.component';
import {VideoDetailComponent} from './components/videodetail/videodetail.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [VideoListComponent, VideoDetailComponent],
})


export class AppComponent {
	title: string = Config.title;
	videos: Array<Video>;
	selectedVideo: Video;

	constructor(){
		this.videos =[
			new Video(1, 'tile1', 'https://www.youtube.com/embed/23KuMRXtp4w', 'siemano description'),
			new Video(2, 'tile3', 'https://www.youtube.com/embed/zwzawjzMez0', 'siemano description2')
		]
	}

	onCloseForm(video){
		this.selectedVideo = null;
	}

	onSelectVideo(video){
		console.log(JSON.stringify(video) + 'siema');
		this.selectedVideo = video;
	}

	onNewVideo(){
		var video = new Video(this.videos.length + 1, 'new title', '')
		this.assignVideoToHtml(video)
	}

	private assignVideoToHtml(video: Video){
		this.videos.push(video);
		this.selectedVideo = video;
	}
 }