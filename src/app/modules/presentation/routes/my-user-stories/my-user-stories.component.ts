import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoryService } from 'src/app/modules/api-rest/services/story.service';
import { Stories } from 'src/app/modules/core/models/Stories';

@Component({
	selector: 'app-my-user-stories',
	templateUrl: './my-user-stories.component.html',
	styleUrls: ['./my-user-stories.component.scss'],
})
export class MyUserStoriesComponent implements OnInit {
	title: string = 'My Stories';
	cards: Stories[] = [];

	urlId: number;
	constructor(
		private route: ActivatedRoute,
		private storyService: StoryService
	) {}

	ngOnInit(): void {
		this.urlId = this.route.snapshot.params.id;
		if (this.urlId > 0) {
			this.storyService.stories(this.urlId).subscribe({
				next: (res) => {
					this.cards = res.data;
				},
				error: (error) => {
					alert(
						'There was a problem with your request: ' +
							error.message
					);
				},
			});
		} else {
			this.storyService.allStories().subscribe({
				next: (res) => {
					console.log(res);
					this.cards = res.data;
				},
				error: (error) => {
					alert(
						'There was a problem with your request: ' +
							error.message
					);
				},
			});
		}
	}
}
