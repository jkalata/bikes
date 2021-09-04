import { createPipeFactory, SpectatorPipe } from '@ngneat/spectator';
import { DistancePipe } from './distance.pipe';

describe('DistancePipe', () => {
  let spectator: SpectatorPipe<DistancePipe>;

  const createPipe = createPipeFactory({
    pipe: DistancePipe,
  });

  it('formats distance in metres', () => {
    spectator = createPipe(`{{ 100 | distance}}`);
    expect(spectator.element).toHaveText('100 m');
  });

  it('formats distance in kilometres', () => {
    spectator = createPipe(`{{ 1001 | distance}}`);
    expect(spectator.element).toHaveText('1.00 km');
  });
});
