import { FormulariosModule } from './formularios.module';

describe('FormulariosModule', () => {
  let formulariosModule: FormulariosModule;

  beforeEach(() => {
    formulariosModule = new FormulariosModule();
  });

  it('should create an instance', () => {
    expect(formulariosModule).toBeTruthy();
  });
});
