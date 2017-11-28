import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { FormatCurrencyPipe } from './format-currency.pipe';
import { FormatDatePipe } from './format-date.pipe';
import { MyTaskDirective } from './my-task.directive';
import { TaskNewComponent } from './task-new/task-new.component';
import { TaskService } from './task.service';

const appRoutes: Routes = [
    {
        path: 'tasks',
        component: TaskListComponent
    },
    {
        path: 'tasks/new',
        component: TaskNewComponent
    }
];

@NgModule({
    declarations: [
        AppComponent,
        TaskListComponent,
        FormatCurrencyPipe,
        FormatDatePipe,
        MyTaskDirective,
        TaskNewComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes)
        
    ],
    providers: [
        TaskService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
