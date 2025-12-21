import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { SheetSelectorComponent } from '../components/sheet-selector/sheet-selector.component';
import { SheetViewerComponent } from '../components/sheet-viewer/sheet-viewer.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'sheet-selector',
    component: SheetSelectorComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'sheet-viewer',
    component: SheetViewerComponent,
    canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }