export class Video{
	id: number;
	title: string;
	url: string;
	description: string;

	constructor(id, title, url, description?){
		this.id = id;
		this.title = title;
		this.url = url;
		this.description = description;
	}
}