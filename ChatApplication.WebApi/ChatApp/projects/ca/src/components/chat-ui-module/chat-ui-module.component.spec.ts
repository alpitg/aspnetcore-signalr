import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatUiModuleComponent } from './chat-ui-module.component';

describe('ChatUiModuleComponent', () => {
  let component: ChatUiModuleComponent;
  let fixture: ComponentFixture<ChatUiModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatUiModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatUiModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
