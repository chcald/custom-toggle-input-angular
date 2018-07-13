import { ToogleButtonModule } from './toogle-button.module';

describe('ToogleButtonModule', () => {
  let toogleButtonModule: ToogleButtonModule;

  beforeEach(() => {
    toogleButtonModule = new ToogleButtonModule();
  });

  it('should create an instance', () => {
    expect(toogleButtonModule).toBeTruthy();
  });
});
