import { TestBed, async } from '@angular/core/testing';
import { IndexComponent } from './app.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        IndexComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(IndexComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'StockNotice'`, async(() => {
    const fixture = TestBed.createComponent(IndexComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('StockNotice');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(IndexComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to StockNotice!');
  }));
});
