import { async, TestBed } from '@angular/core/testing';
import { RichStockUiModule } from './rich-stock-ui.module';

describe('RichStockUiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RichStockUiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(RichStockUiModule).toBeDefined();
  });
});
