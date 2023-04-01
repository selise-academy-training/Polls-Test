import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { PoolOverviewComponent } from './components/pool-overview/pool-overview.component';
import { PoolVotingComponent } from './components/pool-voting/pool-voting.component';
import { AppRootComponent } from './components/app-root/app-root.component';

@NgModule({
  declarations: [PoolOverviewComponent, PoolVotingComponent, AppRootComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [AppRootComponent],
})
export class AppModule {}
