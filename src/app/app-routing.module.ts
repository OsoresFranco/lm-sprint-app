import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/presentation/routes/home/home.component';
import { MyEpicsComponent } from './modules/presentation/routes/my-epics/my-epics.component';
import { MyProjectsComponent } from './modules/presentation/routes/my-projects/my-projects.component';

const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'my-projects', component: MyProjectsComponent },
	{ path: 'my-projects/:id', component: MyEpicsComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
