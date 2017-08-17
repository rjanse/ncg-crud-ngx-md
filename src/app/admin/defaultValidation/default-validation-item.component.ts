// angular
import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

// api
import { DefaultValidation } from './../services/api/models';

// providers/services
import { LocalStorageService, RestoreService, ValidationService } from './../common/services';
import { DataContext } from './../services/api/rest';
import { EntityService, ModalDialogService, BusyIndicatorService, NotifierService } from '../../core';

// components
import { BaseItemComponent } from './../common/components/base-item.component';

// other
import * as moment from 'moment';

@Component({
  selector: 'defaultValidationItem',
  templateUrl: './default-validation-item.component.html'
})

export class DefaultValidationItemComponent extends BaseItemComponent<DefaultValidation> {


  @Input() myForm: FormGroup;

  constructor(
    protected datacontextService: DataContext,    
    protected titleService: Title,
    protected entityService: EntityService, 
    protected modalDialogService: ModalDialogService, 
    protected busyIndicatorService: BusyIndicatorService, 
    protected notifierService: NotifierService,
    protected formBuilder: FormBuilder,
    protected location: Location,
    protected restoreService: RestoreService<DefaultValidation>,
    protected routeParams: ActivatedRoute,
    protected router: Router,
    protected validationService: ValidationService
  ) {
    super(titleService,
      datacontextService.DefaultValidationApi,
      entityService, 
      modalDialogService, 
      busyIndicatorService, 
      notifierService,
      formBuilder,
      location,
      restoreService,
      routeParams,
      router,
      validationService
    );
  }

  buildForm(): void {
    this.formMetaData = require('./default-validation.metaData.json');
    this.normalizeFormMetaData();
    this.addFormValidation();

    this.myForm.valueChanges
      .subscribe(
        data => this.onValueChanged(data)
      );

    this.onValueChanged(); // (re)set validation messages now
  }

  private addFormValidation() {
    this.myForm = this.formBuilder.group({
      
      id: this.props.id ? [
          this.props.id['x-ncg'].defaultValue ? this.props.id['x-ncg'].defaultValue : null,
          Validators.compose(
          this.validationService.generateValidators(this.props.id['x-ncg'].validations)
        )
      ] : null,
      
      valEmailAddressPattern: this.props.valEmailAddressPattern ? [
          this.props.valEmailAddressPattern['x-ncg'].defaultValue ? this.props.valEmailAddressPattern['x-ncg'].defaultValue : null,
          Validators.compose(
          this.validationService.generateValidators(this.props.valEmailAddressPattern['x-ncg'].validations)
        )
      ] : null,
      
      valMin0Max100Value: this.props.valMin0Max100Value ? [
          this.props.valMin0Max100Value['x-ncg'].defaultValue ? this.props.valMin0Max100Value['x-ncg'].defaultValue : null,
          Validators.compose(
          this.validationService.generateValidators(this.props.valMin0Max100Value['x-ncg'].validations)
        )
      ] : null,
      
      valMin2Max8Length: this.props.valMin2Max8Length ? [
          this.props.valMin2Max8Length['x-ncg'].defaultValue ? this.props.valMin2Max8Length['x-ncg'].defaultValue : null,
          Validators.compose(
          this.validationService.generateValidators(this.props.valMin2Max8Length['x-ncg'].validations)
        )
      ] : null,
      
      valRequiredField: this.props.valRequiredField ? [
          this.props.valRequiredField['x-ncg'].defaultValue ? this.props.valRequiredField['x-ncg'].defaultValue : null,
          Validators.compose(
          this.validationService.generateValidators(this.props.valRequiredField['x-ncg'].validations)
        )
      ] : null,
      
      someArray: this.props.someArray ? [
          this.props.someArray['x-ncg'].defaultValue ? this.props.someArray['x-ncg'].defaultValue : null,
          Validators.compose(
          this.validationService.generateValidators(this.props.someArray['x-ncg'].validations)
        )
      ] : null,
      
      someBoolean: this.props.someBoolean ? [
          this.props.someBoolean['x-ncg'].defaultValue ? this.props.someBoolean['x-ncg'].defaultValue : null,
          Validators.compose(
          this.validationService.generateValidators(this.props.someBoolean['x-ncg'].validations)
        )
      ] : null,
      
      someIntegerInt32: this.props.someIntegerInt32 ? [
          this.props.someIntegerInt32['x-ncg'].defaultValue ? this.props.someIntegerInt32['x-ncg'].defaultValue : null,
          Validators.compose(
          this.validationService.generateValidators(this.props.someIntegerInt32['x-ncg'].validations)
        )
      ] : null,
      
      someNumber: this.props.someNumber ? [
          this.props.someNumber['x-ncg'].defaultValue ? this.props.someNumber['x-ncg'].defaultValue : null,
          Validators.compose(
          this.validationService.generateValidators(this.props.someNumber['x-ncg'].validations)
        )
      ] : null,
      
      someNumberDouble: this.props.someNumberDouble ? [
          this.props.someNumberDouble['x-ncg'].defaultValue ? this.props.someNumberDouble['x-ncg'].defaultValue : null,
          Validators.compose(
          this.validationService.generateValidators(this.props.someNumberDouble['x-ncg'].validations)
        )
      ] : null,
      
      someString: this.props.someString ? [
          this.props.someString['x-ncg'].defaultValue ? this.props.someString['x-ncg'].defaultValue : null,
          Validators.compose(
          this.validationService.generateValidators(this.props.someString['x-ncg'].validations)
        )
      ] : null,
      
      someStringDateTime: this.props.someStringDateTime ? [
          this.props.someStringDateTime['x-ncg'].defaultValue ? this.props.someStringDateTime['x-ncg'].defaultValue : null,
          Validators.compose(
          this.validationService.generateValidators(this.props.someStringDateTime['x-ncg'].validations)
        )
      ] : null,
      
      someStringEmail: this.props.someStringEmail ? [
          this.props.someStringEmail['x-ncg'].defaultValue ? this.props.someStringEmail['x-ncg'].defaultValue : null,
          Validators.compose(
          this.validationService.generateValidators(this.props.someStringEmail['x-ncg'].validations)
        )
      ] : null,
      
      someStringUid: this.props.someStringUid ? [
          this.props.someStringUid['x-ncg'].defaultValue ? this.props.someStringUid['x-ncg'].defaultValue : null,
          Validators.compose(
          this.validationService.generateValidators(this.props.someStringUid['x-ncg'].validations)
        )
      ] : null,
      
      someStringUri: this.props.someStringUri ? [
          this.props.someStringUri['x-ncg'].defaultValue ? this.props.someStringUri['x-ncg'].defaultValue : null,
          Validators.compose(
          this.validationService.generateValidators(this.props.someStringUri['x-ncg'].validations)
        )
      ] : null,
    });
  }

  protected customValidate() {
  }

  protected populateComponentDataAsync() {
  }
}
