import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { LoginComponent } from './routes/login/login.component';
import { MyEpicsComponent } from './routes/my-epics/my-epics.component';
import { MyProjectsComponent } from './routes/my-projects/my-projects.component';
import { MyTasksComponent } from './routes/my-tasks/my-tasks.component';
import { MyUserStoriesComponent } from './routes/my-user-stories/my-user-stories.component';
import { SettingsComponent } from './routes/settings/settings.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
		children: [
			{ path: 'my-projects', component: MyProjectsComponent },
			{ path: 'my-projects/:id', component: MyEpicsComponent },
			{ path: 'my-epics/:id', component: MyUserStoriesComponent },
			{ path: 'my-tasks/:id', component: MyTasksComponent },
			{ path: 'settings', component: SettingsComponent },
		],
	},
	{ path: 'login', component: LoginComponent },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class PresentationRoutingModule {}
