import { MaterialModule } from './../material/material.module';
import { RouterModule } from '@angular/router';
import { PresentationRoutingModule } from './presentation-routing.module';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LabelComponent } from './components/label/label.component';
import { CardComponent } from './components/card/card.component';
import { PageHeaderTitleComponent } from './components/page-header-title/page-header-title.component';
import { HomeComponent } from './routes/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserProfileFooterComponent } from './components/user-profile-footer/user-profile-footer.component';
import { MyProjectsComponent } from './routes/my-projects/my-projects.component';
import { CardDialogComponent } from './components/card-dialog/card-dialog.component';
import { MyEpicsComponent } from './routes/my-epics/my-epics.component';
import { MyUserStoriesComponent } from './routes/my-user-stories/my-user-stories.component';
import { UserStoriesCardComponent } from './components/user-stories-card/user-stories-card.component';
import { MyTasksComponent } from './routes/my-tasks/my-tasks.component';
import { TaskCardComponent } from './components/task-card/task-card.component';
import { DialogFormComponent } from './components/dialog-form/dialog-form.component';
import { LoginComponent } from './routes/login/login.component';
import { SettingsComponent } from './routes/settings/settings.component';
import { Page404Component } from './routes/page404/page404.component';
import { BackIconComponent } from './components/back-icon/back-icon.component';
import { SprintInfoComponent } from './components/sprint-info/sprint-info.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NetworkInterceptor } from '../core/interceptors/network.interceptor';
import { ProgressSpinnerComponent } from './components/progress-spinner/progress-spinner.component';

@NgModule({
	declarations: [
		LabelComponent,
		CardComponent,
		PageHeaderTitleComponent,
		HomeComponent,
		NavbarComponent,
		UserProfileFooterComponent,
		MyProjectsComponent,
		CardDialogComponent,
		MyEpicsComponent,
		MyUserStoriesComponent,
		UserStoriesCardComponent,
		MyTasksComponent,
		TaskCardComponent,
		DialogFormComponent,
		LoginComponent,
		SettingsComponent,
		Page404Component,
		BackIconComponent,
		SprintInfoComponent,
		ProgressSpinnerComponent,
	],
	imports: [
		CommonModule,
		FlexLayoutModule,
		MaterialModule,
		RouterModule,
		ReactiveFormsModule,
		CoreModule,
		PresentationRoutingModule,
	],
	exports: [FlexLayoutModule],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: NetworkInterceptor,
			multi: true,
		},
	],
})
export class PresentationModule {}
