/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../app/nav/navbar.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../../app/user/auth.service';
import * as import9 from '../../../app/events/shared/event.service';
import * as import10 from '../../node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import11 from '@angular/core/src/linker/view_container';
import * as import12 from '@angular/core/src/change_detection/change_detection_util';
import * as import13 from '@angular/router/src/router';
import * as import14 from '@angular/router/src/router_state';
import * as import15 from '@angular/common/src/location/location_strategy';
import * as import16 from '@angular/router/src/directives/router_link';
import * as import17 from '../../node_modules/@angular/router/src/directives/router_link_active.ngfactory';
import * as import18 from '@angular/core/src/linker/query_list';
import * as import19 from '../../node_modules/@angular/forms/src/directives/ng_form.ngfactory';
import * as import20 from '../../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
import * as import21 from '../../node_modules/@angular/forms/src/directives/default_value_accessor.ngfactory';
import * as import22 from '../../node_modules/@angular/forms/src/directives/ng_model.ngfactory';
import * as import23 from '../common/modalTrigger.directive.ngfactory';
import * as import24 from '../../../app/common/simpleModal.component';
import * as import25 from '../common/simpleModal.component.ngfactory';
import * as import26 from '../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import27 from '@angular/core/src/linker/element_ref';
import * as import28 from '../../../app/common/jQuery.service';
import * as import29 from '@angular/core/src/linker/template_ref';
import * as import30 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import31 from '@angular/router/src/directives/router_link_active';
import * as import32 from '@angular/forms/src/directives/default_value_accessor';
import * as import33 from '@angular/forms/src/directives/control_value_accessor';
import * as import34 from '@angular/forms/src/directives/ng_model';
import * as import35 from '@angular/forms/src/directives/ng_control';
import * as import36 from '@angular/forms/src/directives/ng_control_status';
import * as import37 from '../../../app/common/modalTrigger.directive';
import * as import38 from '@angular/forms/src/directives/ng_form';
import * as import39 from '@angular/forms/src/directives/control_container';
import * as import40 from '@angular/common/src/directives/ng_for';
export class Wrapper_NavBarComponent {
  /*private*/ _eventHandler:Function;
  context:import0.NavBarComponent;
  /*private*/ _changed:boolean;
  constructor(p0:any,p1:any) {
    this._changed = false;
    this.context = new import0.NavBarComponent(p0,p1);
  }
  ngOnDetach(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  ngDoCheck(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    return changed;
  }
  checkHost(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import1.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
var renderType_NavBarComponent_Host:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,([] as any[]),{});
class View_NavBarComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.NavBarComponent>;
  _NavBarComponent_0_3:Wrapper_NavBarComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_NavBarComponent_Host0,renderType_NavBarComponent_Host,import5.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'nav-bar',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_NavBarComponent0(this.viewUtils,this,0,this._el_0);
    this._NavBarComponent_0_3 = new Wrapper_NavBarComponent(this.injectorGet(import8.AuthService,this.parentIndex),this.injectorGet(import9.EventService,this.parentIndex));
    this.compView_0.create(this._NavBarComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._NavBarComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.NavBarComponent) && (0 === requestNodeIndex))) { return this._NavBarComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._NavBarComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const NavBarComponentNgFactory:import7.ComponentFactory<import0.NavBarComponent> = new import7.ComponentFactory<import0.NavBarComponent>('nav-bar',View_NavBarComponent_Host0,import0.NavBarComponent);
const styles_NavBarComponent:any[] = ['.nav.navbar-nav[_ngcontent-%COMP%] {font-size: 15px;}\n    #searchForm[_ngcontent-%COMP%] {margin-right: 100px;}\n    @media (max-width: 1200px) {#searchForm[_ngcontent-%COMP%] {display: none}}\n    li[_ngcontent-%COMP%]    > a.active[_ngcontent-%COMP%] { color: #F97924; }'];
class View_NavBarComponent1 extends import1.AppView<any> {
  _el_0:any;
  _RouterLinkWithHref_0_3:import10.Wrapper_RouterLinkWithHref;
  _text_1:any;
  _arr_3:any;
  /*private*/ _expr_4:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import11.ViewContainer) {
    super(View_NavBarComponent1,renderType_NavBarComponent,import5.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._arr_3 = import3.pureProxy2((p0:any,p1:any):any[] => {
      return [
        p0,
        p1
      ]
      ;
    });
    this._expr_4 = import12.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'a',new import3.InlineArray2(2,'class','list-group-item'),(null as any));
    this._RouterLinkWithHref_0_3 = new import10.Wrapper_RouterLinkWithHref(this.parentView.parentView.injectorGet(import13.Router,this.parentView.parentIndex),this.parentView.parentView.injectorGet(import14.ActivatedRoute,this.parentView.parentIndex),this.parentView.parentView.injectorGet(import15.LocationStrategy,this.parentView.parentIndex));
    this._text_1 = this.renderer.createText(this._el_0,'',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_0,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_0));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import16.RouterLinkWithHref) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) { return this._RouterLinkWithHref_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = this._arr_3('/events',this.context.$implicit.eventId);
    this._RouterLinkWithHref_0_3.check_routerLink(currVal_0_0_0,throwOnChange,false);
    this._RouterLinkWithHref_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this._RouterLinkWithHref_0_3.checkHost(this,this,this._el_0,throwOnChange);
    const currVal_4:any = import3.inlineInterpolate(1,'\n      ',this.context.$implicit.name,'    \n    ');
    if (import3.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this.renderer.setText(this._text_1,currVal_4);
      this._expr_4 = currVal_4;
    }
  }
  destroyInternal():void {
    this._RouterLinkWithHref_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  handleEvent_0(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._RouterLinkWithHref_0_3.handleEvent(eventName,$event) && result);
    return result;
  }
}
var renderType_NavBarComponent:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.Emulated,styles_NavBarComponent,{});
export class View_NavBarComponent0 extends import1.AppView<import0.NavBarComponent> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _el_6:any;
  _text_7:any;
  _text_8:any;
  _text_9:any;
  _el_10:any;
  _text_11:any;
  _el_12:any;
  _text_13:any;
  _el_14:any;
  _text_15:any;
  _el_16:any;
  _RouterLinkWithHref_16_3:import10.Wrapper_RouterLinkWithHref;
  _RouterLinkActive_16_4:import17.Wrapper_RouterLinkActive;
  _query_RouterLink_16_0:import18.QueryList<any>;
  _query_RouterLinkWithHref_16_1:import18.QueryList<any>;
  _text_17:any;
  _text_18:any;
  _text_19:any;
  _el_20:any;
  _el_21:any;
  _RouterLinkWithHref_21_3:import10.Wrapper_RouterLinkWithHref;
  _RouterLinkActive_21_4:import17.Wrapper_RouterLinkActive;
  _query_RouterLink_21_0:import18.QueryList<any>;
  _query_RouterLinkWithHref_21_1:import18.QueryList<any>;
  _text_22:any;
  _text_23:any;
  _el_24:any;
  _text_25:any;
  _el_26:any;
  _text_27:any;
  _el_28:any;
  _text_29:any;
  _text_30:any;
  _el_31:any;
  _text_32:any;
  _el_33:any;
  _text_34:any;
  _el_35:any;
  _text_36:any;
  _text_37:any;
  _text_38:any;
  _text_39:any;
  _text_40:any;
  _text_41:any;
  _el_42:any;
  _text_43:any;
  _el_44:any;
  _text_45:any;
  _el_46:any;
  _text_47:any;
  _el_48:any;
  _RouterLinkWithHref_48_3:import10.Wrapper_RouterLinkWithHref;
  _text_49:any;
  _text_50:any;
  _el_51:any;
  _RouterLinkWithHref_51_3:import10.Wrapper_RouterLinkWithHref;
  _text_52:any;
  _text_53:any;
  _text_54:any;
  _text_55:any;
  _text_56:any;
  _el_57:any;
  _NgForm_57_3:import19.Wrapper_NgForm;
  _ControlContainer_57_4:any;
  _NgControlStatusGroup_57_5:import20.Wrapper_NgControlStatusGroup;
  _text_58:any;
  _el_59:any;
  _text_60:any;
  _el_61:any;
  _DefaultValueAccessor_61_3:import21.Wrapper_DefaultValueAccessor;
  _NG_VALUE_ACCESSOR_61_4:any[];
  _NgModel_61_5:import22.Wrapper_NgModel;
  _NgControl_61_6:any;
  _NgControlStatus_61_7:import20.Wrapper_NgControlStatus;
  _text_62:any;
  _text_63:any;
  _el_64:any;
  _ModalTriggerDirective_64_3:import23.Wrapper_ModalTriggerDirective;
  _text_65:any;
  _text_66:any;
  _text_67:any;
  _text_68:any;
  _text_69:any;
  _text_70:any;
  _el_71:any;
  compView_71:import1.AppView<import24.SimpleModalComponent>;
  _SimpleModalComponent_71_3:import25.Wrapper_SimpleModalComponent;
  _text_72:any;
  _el_73:any;
  _text_74:any;
  _anchor_75:any;
  /*private*/ _vc_75:import11.ViewContainer;
  _TemplateRef_75_5:any;
  _NgFor_75_6:import26.Wrapper_NgFor;
  _text_76:any;
  _text_77:any;
  _arr_102:any;
  _map_103:any;
  _arr_104:any;
  /*private*/ _expr_105:any;
  _arr_106:any;
  /*private*/ _expr_107:any;
  /*private*/ _expr_108:any;
  _arr_109:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_NavBarComponent0,renderType_NavBarComponent,import5.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
    this._arr_102 = import3.pureProxy1((p0:any):any[] => {
      return [p0];
    });
    this._map_103 = import3.pureProxy1((p0:any):{[key: string]:any} => {
      return {exact: p0};
    });
    this._arr_104 = import3.pureProxy1((p0:any):any[] => {
      return [p0];
    });
    this._expr_105 = import12.UNINITIALIZED;
    this._arr_106 = import3.pureProxy1((p0:any):any[] => {
      return [p0];
    });
    this._expr_107 = import12.UNINITIALIZED;
    this._expr_108 = import12.UNINITIALIZED;
    this._arr_109 = import3.pureProxy1((p0:any):any[] => {
      return [p0];
    });
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._el_0 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray2(2,'class','navbar navbar-default'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'div',new import3.InlineArray2(2,'class','container-fluid'),(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._el_4 = import3.createRenderElement(this.renderer,this._el_2,'div',new import3.InlineArray2(2,'class','navbar-header'),(null as any));
    this._text_5 = this.renderer.createText(this._el_4,'\n      ',(null as any));
    this._el_6 = import3.createRenderElement(this.renderer,this._el_4,'a',new import3.InlineArray2(2,'class','navbar-brand'),(null as any));
    this._text_7 = this.renderer.createText(this._el_6,'ngEvents',(null as any));
    this._text_8 = this.renderer.createText(this._el_4,'\n    ',(null as any));
    this._text_9 = this.renderer.createText(this._el_2,'\n\n    ',(null as any));
    this._el_10 = import3.createRenderElement(this.renderer,this._el_2,'div',new import3.InlineArray2(2,'class','collapse navbar-collapse'),(null as any));
    this._text_11 = this.renderer.createText(this._el_10,'\n      ',(null as any));
    this._el_12 = import3.createRenderElement(this.renderer,this._el_10,'ul',new import3.InlineArray2(2,'class','nav navbar-nav'),(null as any));
    this._text_13 = this.renderer.createText(this._el_12,'\n        ',(null as any));
    this._el_14 = import3.createRenderElement(this.renderer,this._el_12,'li',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_15 = this.renderer.createText(this._el_14,'\n          ',(null as any));
    this._el_16 = import3.createRenderElement(this.renderer,this._el_14,'a',new import3.InlineArray2(2,'routerLinkActive','active'),(null as any));
    this._RouterLinkWithHref_16_3 = new import10.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import13.Router,this.parentIndex),this.parentView.injectorGet(import14.ActivatedRoute,this.parentIndex),this.parentView.injectorGet(import15.LocationStrategy,this.parentIndex));
    this._RouterLinkActive_16_4 = new import17.Wrapper_RouterLinkActive(this.parentView.injectorGet(import13.Router,this.parentIndex),new import27.ElementRef(this._el_16),this.renderer,this.ref);
    this._query_RouterLink_16_0 = new import18.QueryList<any>();
    this._query_RouterLinkWithHref_16_1 = new import18.QueryList<any>();
    this._text_17 = this.renderer.createText(this._el_16,'All Events',(null as any));
    this._text_18 = this.renderer.createText(this._el_14,'\n        ',(null as any));
    this._text_19 = this.renderer.createText(this._el_12,'\n        ',(null as any));
    this._el_20 = import3.createRenderElement(this.renderer,this._el_12,'li',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._el_21 = import3.createRenderElement(this.renderer,this._el_20,'a',new import3.InlineArray2(2,'routerLinkActive','active'),(null as any));
    this._RouterLinkWithHref_21_3 = new import10.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import13.Router,this.parentIndex),this.parentView.injectorGet(import14.ActivatedRoute,this.parentIndex),this.parentView.injectorGet(import15.LocationStrategy,this.parentIndex));
    this._RouterLinkActive_21_4 = new import17.Wrapper_RouterLinkActive(this.parentView.injectorGet(import13.Router,this.parentIndex),new import27.ElementRef(this._el_21),this.renderer,this.ref);
    this._query_RouterLink_21_0 = new import18.QueryList<any>();
    this._query_RouterLinkWithHref_21_1 = new import18.QueryList<any>();
    this._text_22 = this.renderer.createText(this._el_21,'Create Event',(null as any));
    this._text_23 = this.renderer.createText(this._el_12,'\n        ',(null as any));
    this._el_24 = import3.createRenderElement(this.renderer,this._el_12,'li',new import3.InlineArray2(2,'class','dropdown'),(null as any));
    this._text_25 = this.renderer.createText(this._el_24,'\n          ',(null as any));
    this._el_26 = import3.createRenderElement(this.renderer,this._el_24,'a',new import3.InlineArray8(6,'class','dropdown-toggle','data-toggle','dropdown','href','#'),(null as any));
    this._text_27 = this.renderer.createText(this._el_26,'\n            Events\n            ',(null as any));
    this._el_28 = import3.createRenderElement(this.renderer,this._el_26,'span',new import3.InlineArray2(2,'class','caret'),(null as any));
    this._text_29 = this.renderer.createText(this._el_26,'\n          ',(null as any));
    this._text_30 = this.renderer.createText(this._el_24,'\n          ',(null as any));
    this._el_31 = import3.createRenderElement(this.renderer,this._el_24,'ul',new import3.InlineArray2(2,'class','dropdown-menu'),(null as any));
    this._text_32 = this.renderer.createText(this._el_31,'\n            ',(null as any));
    this._el_33 = import3.createRenderElement(this.renderer,this._el_31,'li',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_34 = this.renderer.createText(this._el_33,'\n              ',(null as any));
    this._el_35 = import3.createRenderElement(this.renderer,this._el_33,'a',new import3.InlineArray2(2,'href',''),(null as any));
    this._text_36 = this.renderer.createText(this._el_35,'Angular Connect',(null as any));
    this._text_37 = this.renderer.createText(this._el_33,'\n            ',(null as any));
    this._text_38 = this.renderer.createText(this._el_31,'\n          ',(null as any));
    this._text_39 = this.renderer.createText(this._el_24,'\n        ',(null as any));
    this._text_40 = this.renderer.createText(this._el_12,'\n      ',(null as any));
    this._text_41 = this.renderer.createText(this._el_10,'\n      ',(null as any));
    this._el_42 = import3.createRenderElement(this.renderer,this._el_10,'div',new import3.InlineArray2(2,'class','navbar-header navbar-right'),(null as any));
    this._text_43 = this.renderer.createText(this._el_42,'\n        ',(null as any));
    this._el_44 = import3.createRenderElement(this.renderer,this._el_42,'ul',new import3.InlineArray2(2,'class','nav navbar-nav'),(null as any));
    this._text_45 = this.renderer.createText(this._el_44,'\n          ',(null as any));
    this._el_46 = import3.createRenderElement(this.renderer,this._el_44,'li',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_47 = this.renderer.createText(this._el_46,'\n            ',(null as any));
    this._el_48 = import3.createRenderElement(this.renderer,this._el_46,'a',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._RouterLinkWithHref_48_3 = new import10.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import13.Router,this.parentIndex),this.parentView.injectorGet(import14.ActivatedRoute,this.parentIndex),this.parentView.injectorGet(import15.LocationStrategy,this.parentIndex));
    this._text_49 = this.renderer.createText(this._el_48,'',(null as any));
    this._text_50 = this.renderer.createText(this._el_46,'\n            ',(null as any));
    this._el_51 = import3.createRenderElement(this.renderer,this._el_46,'a',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._RouterLinkWithHref_51_3 = new import10.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import13.Router,this.parentIndex),this.parentView.injectorGet(import14.ActivatedRoute,this.parentIndex),this.parentView.injectorGet(import15.LocationStrategy,this.parentIndex));
    this._text_52 = this.renderer.createText(this._el_51,'Login',(null as any));
    this._text_53 = this.renderer.createText(this._el_46,'\n          ',(null as any));
    this._text_54 = this.renderer.createText(this._el_44,'\n        ',(null as any));
    this._text_55 = this.renderer.createText(this._el_42,'\n      ',(null as any));
    this._text_56 = this.renderer.createText(this._el_10,'\n      ',(null as any));
    this._el_57 = import3.createRenderElement(this.renderer,this._el_10,'form',new import3.InlineArray4(4,'class','navbar-form navbar-right','id','searchForm'),(null as any));
    this._NgForm_57_3 = new import19.Wrapper_NgForm((null as any),(null as any));
    this._ControlContainer_57_4 = this._NgForm_57_3.context;
    this._NgControlStatusGroup_57_5 = new import20.Wrapper_NgControlStatusGroup(this._ControlContainer_57_4);
    this._text_58 = this.renderer.createText(this._el_57,'\n        ',(null as any));
    this._el_59 = import3.createRenderElement(this.renderer,this._el_57,'div',new import3.InlineArray2(2,'class','form-group'),(null as any));
    this._text_60 = this.renderer.createText(this._el_59,'\n          ',(null as any));
    this._el_61 = import3.createRenderElement(this.renderer,this._el_59,'input',new import3.InlineArray8(8,'class','form-control','name','searchTerm','placeholder','Search Sessions','type','text'),(null as any));
    this._DefaultValueAccessor_61_3 = new import21.Wrapper_DefaultValueAccessor(this.renderer,new import27.ElementRef(this._el_61));
    this._NG_VALUE_ACCESSOR_61_4 = [this._DefaultValueAccessor_61_3.context];
    this._NgModel_61_5 = new import22.Wrapper_NgModel(this._ControlContainer_57_4,(null as any),(null as any),this._NG_VALUE_ACCESSOR_61_4);
    this._NgControl_61_6 = this._NgModel_61_5.context;
    this._NgControlStatus_61_7 = new import20.Wrapper_NgControlStatus(this._NgControl_61_6);
    this._text_62 = this.renderer.createText(this._el_59,'\n        ',(null as any));
    this._text_63 = this.renderer.createText(this._el_57,'\n        ',(null as any));
    this._el_64 = import3.createRenderElement(this.renderer,this._el_57,'button',new import3.InlineArray4(4,'class','btn btn-default','modal-trigger','searchResults'),(null as any));
    this._ModalTriggerDirective_64_3 = new import23.Wrapper_ModalTriggerDirective(new import27.ElementRef(this._el_64),this.parentView.injectorGet(import28.JQ_TOKEN,this.parentIndex));
    this._text_65 = this.renderer.createText(this._el_64,'\n          Search\n        ',(null as any));
    this._text_66 = this.renderer.createText(this._el_57,'\n      ',(null as any));
    this._text_67 = this.renderer.createText(this._el_10,'\n    ',(null as any));
    this._text_68 = this.renderer.createText(this._el_2,'\n  ',(null as any));
    this._text_69 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._text_70 = this.renderer.createText(parentRenderNode,'\n\n',(null as any));
    this._el_71 = import3.createRenderElement(this.renderer,parentRenderNode,'simple-modal',new import3.InlineArray8(6,'closeOnBodyClick','true','elementId','searchResults','title','Matching Sessions'),(null as any));
    this.compView_71 = new import25.View_SimpleModalComponent0(this.viewUtils,this,71,this._el_71);
    this._SimpleModalComponent_71_3 = new import25.Wrapper_SimpleModalComponent(this.parentView.injectorGet(import28.JQ_TOKEN,this.parentIndex));
    this._text_72 = this.renderer.createText((null as any),'\n  ',(null as any));
    this._el_73 = import3.createRenderElement(this.renderer,(null as any),'div',new import3.InlineArray2(2,'class','list-group'),(null as any));
    this._text_74 = this.renderer.createText(this._el_73,'\n    ',(null as any));
    this._anchor_75 = this.renderer.createTemplateAnchor(this._el_73,(null as any));
    this._vc_75 = new import11.ViewContainer(75,73,this,this._anchor_75);
    this._TemplateRef_75_5 = new import29.TemplateRef_(this,75,this._anchor_75);
    this._NgFor_75_6 = new import26.Wrapper_NgFor(this._vc_75.vcRef,this._TemplateRef_75_5,this.parentView.injectorGet(import30.IterableDiffers,this.parentIndex),this.ref);
    this._text_76 = this.renderer.createText(this._el_73,'\n  ',(null as any));
    this._text_77 = this.renderer.createText((null as any),'\n',(null as any));
    this.compView_71.create(this._SimpleModalComponent_71_3.context);
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_16,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_16));
    var disposable_1:Function = import3.subscribeToRenderElement(this,this._el_21,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_21));
    var disposable_2:Function = import3.subscribeToRenderElement(this,this._el_48,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_48));
    var disposable_3:Function = import3.subscribeToRenderElement(this,this._el_51,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_51));
    var disposable_4:Function = import3.subscribeToRenderElement(this,this._el_57,new import3.InlineArray8(6,'ngSubmit',(null as any),'submit',(null as any),'reset',(null as any)),this.eventHandler(this.handleEvent_57));
    this._NgForm_57_3.subscribe(this,this.eventHandler(this.handleEvent_57),true);
    var disposable_5:Function = import3.subscribeToRenderElement(this,this._el_61,new import3.InlineArray8(6,'ngModelChange',(null as any),'input',(null as any),'blur',(null as any)),this.eventHandler(this.handleEvent_61));
    this._NgModel_61_5.subscribe(this,this.eventHandler(this.handleEvent_61),true);
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._text_8,
      this._text_9,
      this._el_10,
      this._text_11,
      this._el_12,
      this._text_13,
      this._el_14,
      this._text_15,
      this._el_16,
      this._text_17,
      this._text_18,
      this._text_19,
      this._el_20,
      this._el_21,
      this._text_22,
      this._text_23,
      this._el_24,
      this._text_25,
      this._el_26,
      this._text_27,
      this._el_28,
      this._text_29,
      this._text_30,
      this._el_31,
      this._text_32,
      this._el_33,
      this._text_34,
      this._el_35,
      this._text_36,
      this._text_37,
      this._text_38,
      this._text_39,
      this._text_40,
      this._text_41,
      this._el_42,
      this._text_43,
      this._el_44,
      this._text_45,
      this._el_46,
      this._text_47,
      this._el_48,
      this._text_49,
      this._text_50,
      this._el_51,
      this._text_52,
      this._text_53,
      this._text_54,
      this._text_55,
      this._text_56,
      this._el_57,
      this._text_58,
      this._el_59,
      this._text_60,
      this._el_61,
      this._text_62,
      this._text_63,
      this._el_64,
      this._text_65,
      this._text_66,
      this._text_67,
      this._text_68,
      this._text_69,
      this._text_70,
      this._el_71,
      this._text_72,
      this._el_73,
      this._text_74,
      this._anchor_75,
      this._text_76,
      this._text_77
    ]
    ),[
      disposable_0,
      disposable_1,
      disposable_2,
      disposable_3,
      disposable_4,
      disposable_5
    ]
    );
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import16.RouterLinkWithHref) && ((16 <= requestNodeIndex) && (requestNodeIndex <= 17)))) { return this._RouterLinkWithHref_16_3.context; }
    if (((token === import31.RouterLinkActive) && ((16 <= requestNodeIndex) && (requestNodeIndex <= 17)))) { return this._RouterLinkActive_16_4.context; }
    if (((token === import16.RouterLinkWithHref) && ((21 <= requestNodeIndex) && (requestNodeIndex <= 22)))) { return this._RouterLinkWithHref_21_3.context; }
    if (((token === import31.RouterLinkActive) && ((21 <= requestNodeIndex) && (requestNodeIndex <= 22)))) { return this._RouterLinkActive_21_4.context; }
    if (((token === import16.RouterLinkWithHref) && ((48 <= requestNodeIndex) && (requestNodeIndex <= 49)))) { return this._RouterLinkWithHref_48_3.context; }
    if (((token === import16.RouterLinkWithHref) && ((51 <= requestNodeIndex) && (requestNodeIndex <= 52)))) { return this._RouterLinkWithHref_51_3.context; }
    if (((token === import32.DefaultValueAccessor) && (61 === requestNodeIndex))) { return this._DefaultValueAccessor_61_3.context; }
    if (((token === import33.NG_VALUE_ACCESSOR) && (61 === requestNodeIndex))) { return this._NG_VALUE_ACCESSOR_61_4; }
    if (((token === import34.NgModel) && (61 === requestNodeIndex))) { return this._NgModel_61_5.context; }
    if (((token === import35.NgControl) && (61 === requestNodeIndex))) { return this._NgControl_61_6; }
    if (((token === import36.NgControlStatus) && (61 === requestNodeIndex))) { return this._NgControlStatus_61_7.context; }
    if (((token === import37.ModalTriggerDirective) && ((64 <= requestNodeIndex) && (requestNodeIndex <= 65)))) { return this._ModalTriggerDirective_64_3.context; }
    if (((token === import38.NgForm) && ((57 <= requestNodeIndex) && (requestNodeIndex <= 66)))) { return this._NgForm_57_3.context; }
    if (((token === import39.ControlContainer) && ((57 <= requestNodeIndex) && (requestNodeIndex <= 66)))) { return this._ControlContainer_57_4; }
    if (((token === import36.NgControlStatusGroup) && ((57 <= requestNodeIndex) && (requestNodeIndex <= 66)))) { return this._NgControlStatusGroup_57_5.context; }
    if (((token === import29.TemplateRef) && (75 === requestNodeIndex))) { return this._TemplateRef_75_5; }
    if (((token === import40.NgFor) && (75 === requestNodeIndex))) { return this._NgFor_75_6.context; }
    if (((token === import24.SimpleModalComponent) && ((71 <= requestNodeIndex) && (requestNodeIndex <= 77)))) { return this._SimpleModalComponent_71_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_16_0_0:any = this._arr_102('/events');
    this._RouterLinkWithHref_16_3.check_routerLink(currVal_16_0_0,throwOnChange,false);
    this._RouterLinkWithHref_16_3.ngDoCheck(this,this._el_16,throwOnChange);
    const currVal_16_1_0:any = this._map_103(true);
    this._RouterLinkActive_16_4.check_routerLinkActiveOptions(currVal_16_1_0,throwOnChange,false);
    const currVal_16_1_1:any = 'active';
    this._RouterLinkActive_16_4.check_routerLinkActive(currVal_16_1_1,throwOnChange,false);
    this._RouterLinkActive_16_4.ngDoCheck(this,this._el_16,throwOnChange);
    const currVal_21_0_0:any = this._arr_104('/events/new');
    this._RouterLinkWithHref_21_3.check_routerLink(currVal_21_0_0,throwOnChange,false);
    this._RouterLinkWithHref_21_3.ngDoCheck(this,this._el_21,throwOnChange);
    const currVal_21_1_0:any = 'active';
    this._RouterLinkActive_21_4.check_routerLinkActive(currVal_21_1_0,throwOnChange,false);
    this._RouterLinkActive_21_4.ngDoCheck(this,this._el_21,throwOnChange);
    const currVal_48_0_0:any = this._arr_106('user/profile');
    this._RouterLinkWithHref_48_3.check_routerLink(currVal_48_0_0,throwOnChange,false);
    this._RouterLinkWithHref_48_3.ngDoCheck(this,this._el_48,throwOnChange);
    const currVal_51_0_0:any = this._arr_109('user/login');
    this._RouterLinkWithHref_51_3.check_routerLink(currVal_51_0_0,throwOnChange,false);
    this._RouterLinkWithHref_51_3.ngDoCheck(this,this._el_51,throwOnChange);
    this._NgForm_57_3.ngDoCheck(this,this._el_57,throwOnChange);
    this._NgControlStatusGroup_57_5.ngDoCheck(this,this._el_57,throwOnChange);
    this._DefaultValueAccessor_61_3.ngDoCheck(this,this._el_61,throwOnChange);
    const currVal_61_1_0:any = 'searchTerm';
    this._NgModel_61_5.check_name(currVal_61_1_0,throwOnChange,false);
    const currVal_61_1_1:any = this.context.searchTerm;
    this._NgModel_61_5.check_model(currVal_61_1_1,throwOnChange,false);
    this._NgModel_61_5.ngDoCheck(this,this._el_61,throwOnChange);
    this._NgControlStatus_61_7.ngDoCheck(this,this._el_61,throwOnChange);
    const currVal_64_0_0:any = 'searchResults';
    this._ModalTriggerDirective_64_3.check_modalId(currVal_64_0_0,throwOnChange,false);
    this._ModalTriggerDirective_64_3.ngDoCheck(this,this._el_64,throwOnChange);
    const currVal_71_0_0:any = 'Matching Sessions';
    this._SimpleModalComponent_71_3.check_title(currVal_71_0_0,throwOnChange,false);
    const currVal_71_0_1:any = 'searchResults';
    this._SimpleModalComponent_71_3.check_elementId(currVal_71_0_1,throwOnChange,false);
    const currVal_71_0_2:any = 'true';
    this._SimpleModalComponent_71_3.check_closeOnBodyClick(currVal_71_0_2,throwOnChange,false);
    this._SimpleModalComponent_71_3.ngDoCheck(this,this._el_71,throwOnChange);
    const currVal_75_0_0:any = this.context.foundSessions;
    this._NgFor_75_6.check_ngForOf(currVal_75_0_0,throwOnChange,false);
    this._NgFor_75_6.ngDoCheck(this,this._anchor_75,throwOnChange);
    this._vc_75.detectChangesInNestedViews(throwOnChange);
    if (!throwOnChange) {
      if (this._query_RouterLink_16_0.dirty) {
        this._query_RouterLink_16_0.reset(([] as any[]));
        this._RouterLinkActive_16_4.context.links = this._query_RouterLink_16_0;
        this._query_RouterLink_16_0.notifyOnChanges();
      }
      if (this._query_RouterLinkWithHref_16_1.dirty) {
        this._query_RouterLinkWithHref_16_1.reset([this._RouterLinkWithHref_16_3.context]);
        this._RouterLinkActive_16_4.context.linksWithHrefs = this._query_RouterLinkWithHref_16_1;
        this._query_RouterLinkWithHref_16_1.notifyOnChanges();
      }
      if (this._query_RouterLink_21_0.dirty) {
        this._query_RouterLink_21_0.reset(([] as any[]));
        this._RouterLinkActive_21_4.context.links = this._query_RouterLink_21_0;
        this._query_RouterLink_21_0.notifyOnChanges();
      }
      if (this._query_RouterLinkWithHref_21_1.dirty) {
        this._query_RouterLinkWithHref_21_1.reset([this._RouterLinkWithHref_21_3.context]);
        this._RouterLinkActive_21_4.context.linksWithHrefs = this._query_RouterLinkWithHref_21_1;
        this._query_RouterLinkWithHref_21_1.notifyOnChanges();
      }
      if ((this.numberOfChecks === 0)) { this._RouterLinkActive_16_4.context.ngAfterContentInit(); }
      if ((this.numberOfChecks === 0)) { this._RouterLinkActive_21_4.context.ngAfterContentInit(); }
    }
    this._RouterLinkWithHref_16_3.checkHost(this,this,this._el_16,throwOnChange);
    this._RouterLinkWithHref_21_3.checkHost(this,this,this._el_21,throwOnChange);
    const currVal_105:boolean = !this.context.auth.isAuthenticated();
    if (import3.checkBinding(throwOnChange,this._expr_105,currVal_105)) {
      this.renderer.setElementProperty(this._el_48,'hidden',currVal_105);
      this._expr_105 = currVal_105;
    }
    this._RouterLinkWithHref_48_3.checkHost(this,this,this._el_48,throwOnChange);
    const currVal_107:any = import3.inlineInterpolate(1,'Welcome ',((this.context.auth.currentUser == null)? (null as any): this.context.auth.currentUser.firstName),'');
    if (import3.checkBinding(throwOnChange,this._expr_107,currVal_107)) {
      this.renderer.setText(this._text_49,currVal_107);
      this._expr_107 = currVal_107;
    }
    const currVal_108:any = this.context.auth.isAuthenticated();
    if (import3.checkBinding(throwOnChange,this._expr_108,currVal_108)) {
      this.renderer.setElementProperty(this._el_51,'hidden',currVal_108);
      this._expr_108 = currVal_108;
    }
    this._RouterLinkWithHref_51_3.checkHost(this,this,this._el_51,throwOnChange);
    this._NgControlStatusGroup_57_5.checkHost(this,this,this._el_57,throwOnChange);
    this._NgControlStatus_61_7.checkHost(this,this,this._el_61,throwOnChange);
    this.compView_71.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this._vc_75.destroyNestedViews();
    this.compView_71.destroy();
    this._RouterLinkWithHref_16_3.ngOnDestroy();
    this._RouterLinkActive_16_4.ngOnDestroy();
    this._RouterLinkWithHref_21_3.ngOnDestroy();
    this._RouterLinkActive_21_4.ngOnDestroy();
    this._RouterLinkWithHref_48_3.ngOnDestroy();
    this._RouterLinkWithHref_51_3.ngOnDestroy();
    this._NgModel_61_5.ngOnDestroy();
    this._NgForm_57_3.ngOnDestroy();
  }
  visitProjectableNodesInternal(nodeIndex:number,ngContentIndex:number,cb:any,ctx:any):void {
    if (((nodeIndex == 71) && (ngContentIndex == 0))) {
      cb(this._text_72,ctx);
      cb(this._el_73,ctx);
      cb(this._text_77,ctx);
    }
  }
  createEmbeddedViewInternal(nodeIndex:number):import1.AppView<any> {
    if ((nodeIndex == 75)) { return new View_NavBarComponent1(this.viewUtils,this,75,this._anchor_75,this._vc_75); }
    return (null as any);
  }
  handleEvent_16(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._RouterLinkWithHref_16_3.handleEvent(eventName,$event) && result);
    return result;
  }
  handleEvent_21(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._RouterLinkWithHref_21_3.handleEvent(eventName,$event) && result);
    return result;
  }
  handleEvent_48(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._RouterLinkWithHref_48_3.handleEvent(eventName,$event) && result);
    return result;
  }
  handleEvent_51(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._RouterLinkWithHref_51_3.handleEvent(eventName,$event) && result);
    return result;
  }
  handleEvent_57(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._NgForm_57_3.handleEvent(eventName,$event) && result);
    if ((eventName == 'ngSubmit')) {
      const pd_sub_0:any = ((<any>this.context.searchSessions(this.context.searchTerm)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
  handleEvent_61(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._DefaultValueAccessor_61_3.handleEvent(eventName,$event) && result);
    if ((eventName == 'ngModelChange')) {
      const pd_sub_0:any = ((<any>(this.context.searchTerm = $event)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}