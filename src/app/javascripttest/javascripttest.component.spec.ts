import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascripttestComponent } from './javascripttest.component';

describe('JavascripttestComponent', () => {
  let component: JavascripttestComponent;
  let fixture: ComponentFixture<JavascripttestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JavascripttestComponent]
    });
    fixture = TestBed.createComponent(JavascripttestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
