import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/presentation/routes/home/home.component';
import { MyEpicsComponent } from './modules/presentation/routes/my-epics/my-epics.component';
import { MyProjectsComponent } from './modules/presentation/routes/my-projects/my-projects.component';
import { MyTasksComponent } from './modules/presentation/routes/my-tasks/my-tasks.component';
import { MyUserStoriesComponent } from './modules/presentation/routes/my-user-stories/my-user-stories.component';

const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'my-projects', component: MyProjectsComponent },
	{ path: 'my-projects/:id', component: MyEpicsComponent },
	{ path: 'my-epics/:id', component: MyUserStoriesComponent },
	{ path: 'my-tasks/:id', component: MyTasksComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
