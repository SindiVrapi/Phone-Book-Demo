import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PbLibraryComponent } from './pb-library.component';

describe('PbLibraryComponent', () => {
  let component: PbLibraryComponent;
  let fixture: ComponentFixture<PbLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PbLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PbLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
