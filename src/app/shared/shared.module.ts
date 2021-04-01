import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityPipe } from './city.pipe';
import { AuthService } from './auth/auth.service';
import { TabComponent } from './tab/tab.component';
import { TabbedPaneComponent } from './tabbed-pane/tabbed-pane.component';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [],
  declarations: [CityPipe, TabComponent, TabbedPaneComponent],
  exports: [CityPipe, TabComponent, TabbedPaneComponent] // Hier könnte Ihre Pipe stehen!
})
export class SharedModule { 

  static forRoot(): ModuleWithProviders<SharedModule> {
    // SharedModule + Shared Services
    return {
      ngModule: SharedModule,
      providers: [
        AuthService
      ]
    }
  }

  static forChild(): ModuleWithProviders<SharedModule> {
    // SharedModule **ohne** Shared Services
    return {
      ngModule: SharedModule,
      providers: []
    }
  }


}
