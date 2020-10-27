import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routing } from './app.routes';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from "@angular/material/select"
import { MatBottomSheetModule } from "@angular/material/bottom-sheet"
import { MatListModule } from "@angular/material/list"
import { MatDatepickerModule } from "@angular/material/datepicker"
import { MatNativeDateModule } from '@angular/material/core';


import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './dashboard/home/home.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FigurecardComponent } from './shared/figurecard/figurecard.component';
import { ImagecardComponent } from './shared/imagecard/imagecard.component';
import { TableComponent } from './dashboard/table/table.component';
import { NotificationComponent } from './dashboard/notification/notification.component';
import { MsgIconBtnComponent } from './shared/msgiconbtn/msgiconbtn.component';
import { SweetAlertComponent } from './dashboard/sweetalert/sweetalert.component';
import { LoginComponent } from './page/login/login.component';
import { RootComponent } from './dashboard/root/root.component';
import { RegisterComponent } from './page/register/register.component';
import { LockComponent } from './page/lock/lock.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SettingsComponent } from './dashboard/settings/settings.component';
import { PriceTableComponent } from './dashboard/component/pricetable/pricetable.component';
import { PanelsComponent } from './dashboard/component/panels/panels.component';
import { NgxLongPress2Module } from 'ngx-long-press2'

import { SettingsService } from './services/settings.service';
import { WizardComponent } from './dashboard/component/wizard/wizard.component';
import { SpendsComponent } from './dashboard/spends/spends.component';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { AuthGaurdService } from './services/authGaurd.service';
import { SpendDetailComponent } from './dashboard/spend-detail/spend-detail.component';
import { AddSpendsComponent } from './dashboard/add-spends/add-spends.component';
import { MenuComponent } from './dashboard/menu/menu.component';
import { EditSpendsComponent } from './dashboard/edit-spends/edit-spends.component';
import { Sidebar2Component } from './sidebar2/sidebar2.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { CategoryComponent } from './dashboard/category/category.component';
import { AddCategoryComponent } from './dashboard/add-category/add-category.component';
import { EditCategoryComponent } from './dashboard/edit-category/edit-category.component';
import { CategoryMenuComponent } from './dashboard/category-menu/category-menu.component';
// import { an } from 'angular2-jwt'

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    ProfileComponent,
    NavbarComponent,
    FigurecardComponent,
    ImagecardComponent,
    TableComponent,
    NotificationComponent,
    MsgIconBtnComponent,
    SweetAlertComponent,
    LoginComponent,
    RootComponent,
    RegisterComponent,
    LockComponent,
    HeaderComponent,
    FooterComponent,
    SettingsComponent,
    PriceTableComponent,
    PanelsComponent,
    WizardComponent,
    SpendsComponent,
    SpendDetailComponent,
    AddSpendsComponent,
    MenuComponent,
    EditSpendsComponent,
    Sidebar2Component,
    CategoryComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    CategoryMenuComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing,
    BrowserAnimationsModule,
    MatButtonModule,
    MatRadioModule,
    MatInputModule,
    MatMenuModule,
    MatCheckboxModule,
    MatSelectModule,
    NgxLongPress2Module,
    MatBottomSheetModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule
  ],
  providers: [SettingsService, UserService, AuthGaurdService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
