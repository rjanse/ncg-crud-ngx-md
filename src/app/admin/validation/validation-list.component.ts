
// angular
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

// api
import { Validation } from './../services/api/models';

// components
import { BaseListComponent } from './../common/components';

// pipes
import { DisplayDataTransformPipe } from './../common/pipes';

// services
import { LocalStorageService, RestoreService } from './../common/services';
import { DataContext } from './../services/api/rest';
import { EntityService, ModalDialogService, BusyIndicatorService, NotifierService } from '../../core';

@Component({
  selector: 'validationList',
  templateUrl: './validation-list.component.html'
})

export class ValidationListComponent extends BaseListComponent<Validation>  {

  public tenantList: any = null;
  public keyName: string = 'id';
  public fieldFilterModel: any = null;
  public formMetaData: any = null;
  
  constructor(protected titleService: Title,
    protected entityService: EntityService, 
    protected modalDialogService: ModalDialogService, 
    protected busyIndicatorService: BusyIndicatorService, 
    protected notifierService: NotifierService,
    private datacontextService: DataContext,
    router: Router,
    activatedRoute: ActivatedRoute,
  ) {
    super(titleService, entityService, modalDialogService, busyIndicatorService, notifierService, datacontextService.ValidationApi, router, activatedRoute);

    this.formMetaData = require('./validation.metaData.json'); 
    this.componentName = 'ValidationListComponent';

    this.generateFilterModel();
  }

  public generateFilterModel() {
    let filterModel = [];
    if (this.formMetaData && this.props) {
      for (let key in this.props) {
        if (this.props.hasOwnProperty(key)) {
          let element = this.props[key];

          if (element.type && element['x-ncg']) {
            filterModel.push({
              display: element['x-ncg'].label,
              value: key
            });
          }
        }
      }
    }

    this.fieldFilterModel = filterModel;
  }

  public onSort(event) {
    this.updateSort(event.sorts[0].prop);
  }

  public numPagesUpdated(event) { }

  protected populateComponentDataAsync() {
    this.populateTenantData();
  }
    
  // private methods populateTenantData
  private populateTenantData() {
   this.datacontextService.TenantApi
     .get()
     .subscribe((tenantlistWithCount) => {
        // TODO: this.tenantIsLoading = true;
        this.tenantList = tenantlistWithCount.list;
      },
      (error) => { this.errorMessage = <any>error; });
  }
  
}
