import { async, TestBed } from '@angular/core/testing';
import { RichStockPhotosModule } from './rich-stock-photos.module';

describe('RichStockPhotosModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RichStockPhotosModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(RichStockPhotosModule).toBeDefined();
  });
});
