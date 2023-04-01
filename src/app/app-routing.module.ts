import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PoolOverviewComponent } from './components/pool-overview/pool-overview.component';
import { PoolVotingComponent } from './components/pool-voting/pool-voting.component';

const routes: Routes = [
  { path: '', redirectTo: '/pool', pathMatch: 'full' },
  {
    path: 'pool',
    component: PoolOverviewComponent,
  },
  {
    path: 'details/:id',
    component: PoolVotingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
