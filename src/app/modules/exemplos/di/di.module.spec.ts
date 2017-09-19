import { DiModule } from './di.module';

describe('DiModule', () => {
  let diModule: DiModule;

  beforeEach(() => {
    diModule = new DiModule();
  });

  it('should create an instance', () => {
    expect(diModule).toBeTruthy();
  });
});
