import { MainController } from '../main.controller';

describe('Greeting controller test', () => {
  let mainController: MainController;

  beforeEach(() => {
    mainController = new MainController();
  });

  it('should create', (done) => {
    expect(mainController).toBeInstanceOf(MainController);
    done();
  });
});
