import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDialogAdddataComponent } from './table-dialog-adddata.component';

describe('TableDialogAdddataComponent', () => {
  let component: TableDialogAdddataComponent;
  let fixture: ComponentFixture<TableDialogAdddataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableDialogAdddataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableDialogAdddataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
