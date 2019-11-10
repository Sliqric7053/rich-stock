import { async, TestBed } from '@angular/core/testing';
import { RichStockCoreModule } from './rich-stock-core.module';

describe('RichStockCoreModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RichStockCoreModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(RichStockCoreModule).toBeDefined();
  });
});
