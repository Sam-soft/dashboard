import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDynamicArrayDataExample } from './table-dynamic-array-data-example';

describe('TableDynamicArrayDataExample', () => {
  let component: TableDynamicArrayDataExample;
  let fixture: ComponentFixture<TableDynamicArrayDataExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableDynamicArrayDataExample ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableDynamicArrayDataExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
