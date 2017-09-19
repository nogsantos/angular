import { ListaContatosModule } from './lista-contatos.module';

describe('ListaContatosModule', () => {
  let listaContatosModule: ListaContatosModule;

  beforeEach(() => {
    listaContatosModule = new ListaContatosModule();
  });

  it('should create an instance', () => {
    expect(listaContatosModule).toBeTruthy();
  });
});
