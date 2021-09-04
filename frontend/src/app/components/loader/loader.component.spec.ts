import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { LoaderComponent } from './loader.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('LoaderComponent unit tests', () => {
  let spectator: Spectator<LoaderComponent>;
  let component: LoaderComponent;
  const createComponent = createComponentFactory({
    component: LoaderComponent,
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  });

  beforeEach(() => {
    spectator = createComponent();
    component = spectator.component;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
