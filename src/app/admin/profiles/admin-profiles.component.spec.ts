import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AdminProfilesComponent} from './admin-profiles.component';

describe('ProfilesComponent', () => {
  let component: AdminProfilesComponent;
  let fixture: ComponentFixture<AdminProfilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminProfilesComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
