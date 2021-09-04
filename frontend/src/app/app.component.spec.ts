import { Store } from '@ngrx/store';
import {
  Spectator,
  createComponentFactory,
  mockProvider,
} from '@ngneat/spectator';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let spectator: Spectator<AppComponent>;
  let component: AppComponent;
  const createComponent = createComponentFactory({
    component: AppComponent,
    providers: [mockProvider(Store)],
  });

  beforeEach(() => {
    spectator = createComponent();
    component = spectator.component;
  });
  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
});
