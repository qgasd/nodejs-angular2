import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { LoginComponent} from './login/login.component';
import { UpdatePasswordComponent} from './update-password/update-password.component';
import { ResetPasswordComponent} from './reset-password/reset-password.component';
const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'detail/:id', component: HeroDetailComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'update-password',component: UpdatePasswordComponent},
    { path: 'resetpassword',component:ResetPasswordComponent},
    { path: 'login',component: LoginComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }