/**
 * Created by wangdi on 26/5/17.
 */
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './dashboard/home/home.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { TableComponent } from './dashboard/table/table.component';
import { NotificationComponent } from './dashboard/notification/notification.component';
import { SweetAlertComponent } from './dashboard/sweetalert/sweetalert.component';
import { SettingsComponent } from './dashboard/settings/settings.component';
import { PriceTableComponent } from './dashboard/component/pricetable/pricetable.component';
import { PanelsComponent} from './dashboard/component/panels/panels.component';
import { WizardComponent } from './dashboard/component/wizard/wizard.component';

import { RootComponent } from './dashboard/root/root.component';
import { LoginComponent } from './page/login/login.component';
import { LockComponent } from './page/lock/lock.component';
import { RegisterComponent } from './page/register/register.component';
import { SpendsComponent } from './dashboard/spends/spends.component'
import { AuthGaurdService } from './services/authGaurd.service';
import { SpendDetailComponent } from './dashboard/spend-detail/spend-detail.component';
import { AddSpendsComponent } from './dashboard/add-spends/add-spends.component';
import { EditSpendsComponent } from './dashboard/edit-spends/edit-spends.component';
import { CategoryComponent } from './dashboard/category/category.component';
import { EditCategoryComponent } from './dashboard/edit-category/edit-category.component';
import { AddCategoryComponent } from './dashboard/add-category/add-category.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'lock', component: LockComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'dashboard', component: RootComponent, 
  canActivate:[AuthGaurdService],
  canActivateChild:[AuthGaurdService],
  children: [
    {path: 'spends', component: SpendsComponent},
    {path: 'add-spends/:date', component: AddSpendsComponent},
    {path: 'edit-spends/:id', component: EditSpendsComponent},
    {path: 'spends/:date', component: SpendDetailComponent},
    {path: 'category', component: CategoryComponent},
    {path: 'add-category', component: AddCategoryComponent},
    {path: 'edit-category/:id', component: EditCategoryComponent},
  ]}
];

export const routing = RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" });

