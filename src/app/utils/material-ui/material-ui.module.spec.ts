import { MaterialUiModule } from './material-ui.module';

describe('MaterialUiModule', () => {
  let materialUiModule: MaterialUiModule;

  beforeEach(() => {
    materialUiModule = new MaterialUiModule();
  });

  it('should create an instance', () => {
    expect(materialUiModule).toBeTruthy();
  });
});
