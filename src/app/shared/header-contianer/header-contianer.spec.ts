import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderContianer } from './header-contianer';

describe('HeaderContianer', () => {
  let component: HeaderContianer;
  let fixture: ComponentFixture<HeaderContianer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderContianer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderContianer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
