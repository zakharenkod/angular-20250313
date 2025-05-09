import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {HeaderComponent} from './core-components/header/header.component';
import {ProductsListComponent} from './pages/products-list/products-list.component';
import {applicationConfigMock} from './shared/application-config/application-config.mock';
import {SidenavComponent} from './core-components/sidenav/sidenav.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [HeaderComponent, ProductsListComponent, SidenavComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
    readonly appConfig = applicationConfigMock;

    readonly isDrawerOpenedStore = signal(false);

    onMenuClick(event: Event) {
        // eslint-disable-next-line no-console
        console.log('Menu click', event);
        this.isDrawerOpenedStore.update(isOpened => !isOpened);
    }
}
