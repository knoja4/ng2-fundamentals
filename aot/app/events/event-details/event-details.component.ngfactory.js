/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as import0 from '../../../../app/events/event-details/event-details.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../../../app/events/shared/event.service';
import * as import9 from '@angular/router/src/router_state';
import * as import10 from '@angular/core/src/linker/view_container';
import * as import11 from '@angular/core/src/change_detection/change_detection_util';
import * as import12 from '../../../../app/events/event-details/session-list.component';
import * as import13 from './session-list.component.ngfactory';
import * as import14 from '../../../../app/user/auth.service';
import * as import15 from '../../../../app/events/event-details/voter.service';
import * as import16 from '../../../../app/events/event-details/create-session.component';
import * as import17 from './create-session.component.ngfactory';
import * as import18 from '../../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import19 from '@angular/common/src/pipes/uppercase_pipe';
import * as import20 from '@angular/common/src/pipes/date_pipe';
import * as import21 from '@angular/common/src/pipes/number_pipe';
import * as import22 from '@angular/core/src/linker/template_ref';
import * as import23 from '@angular/core/src/i18n/tokens';
import * as import24 from '@angular/common/src/directives/ng_if';
import * as import25 from '@angular/core/src/security';
var Wrapper_EventDetailsComponent = (function () {
    function Wrapper_EventDetailsComponent(p0, p1) {
        this._changed = false;
        this.context = new import0.EventDetailsComponent(p0, p1);
    }
    Wrapper_EventDetailsComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_EventDetailsComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_EventDetailsComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_EventDetailsComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_EventDetailsComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_EventDetailsComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_EventDetailsComponent;
}());
export { Wrapper_EventDetailsComponent };
var renderType_EventDetailsComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_EventDetailsComponent_Host0 = (function (_super) {
    __extends(View_EventDetailsComponent_Host0, _super);
    function View_EventDetailsComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_EventDetailsComponent_Host0, renderType_EventDetailsComponent_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_EventDetailsComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'ng-component', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_EventDetailsComponent0(this.viewUtils, this, 0, this._el_0);
        this._EventDetailsComponent_0_3 = new Wrapper_EventDetailsComponent(this.injectorGet(import8.EventService, this.parentIndex), this.injectorGet(import9.ActivatedRoute, this.parentIndex));
        this.compView_0.create(this._EventDetailsComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._EventDetailsComponent_0_3.context);
    };
    View_EventDetailsComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.EventDetailsComponent) && (0 === requestNodeIndex))) {
            return this._EventDetailsComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_EventDetailsComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._EventDetailsComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_EventDetailsComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_EventDetailsComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_EventDetailsComponent_Host0;
}(import1.AppView));
export var EventDetailsComponentNgFactory = new import7.ComponentFactory('ng-component', View_EventDetailsComponent_Host0, import0.EventDetailsComponent);
var styles_EventDetailsComponent = ['.container[_ngcontent-%COMP%] { padding-left:20px; padding-right:20px; }\n    .event-image[_ngcontent-%COMP%] { height:100px; }\n    a[_ngcontent-%COMP%] { cursor:pointer }'];
var View_EventDetailsComponent1 = (function (_super) {
    __extends(View_EventDetailsComponent1, _super);
    function View_EventDetailsComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_EventDetailsComponent1, renderType_EventDetailsComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_11 = import11.UNINITIALIZED;
        _this._expr_12 = import11.UNINITIALIZED;
        return _this;
    }
    View_EventDetailsComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'col-md-6'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n      ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'address', import3.EMPTY_INLINE_ARRAY, null);
        this._text_3 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_2, 'strong', import3.EMPTY_INLINE_ARRAY, null);
        this._text_5 = this.renderer.createText(this._el_4, 'Address:', null);
        this._el_6 = import3.createRenderElement(this.renderer, this._el_2, 'br', import3.EMPTY_INLINE_ARRAY, null);
        this._text_7 = this.renderer.createText(this._el_2, '', null);
        this._el_8 = import3.createRenderElement(this.renderer, this._el_2, 'br', import3.EMPTY_INLINE_ARRAY, null);
        this._text_9 = this.renderer.createText(this._el_2, '', null);
        this._text_10 = this.renderer.createText(this._el_0, '\n    ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._el_8,
            this._text_9,
            this._text_10
        ]), null);
        return null;
    };
    View_EventDetailsComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_11 = import3.inlineInterpolate(1, '\n        ', ((this.parentView.context.event == null) ? null : ((this.parentView.context.event.location == null) ? null : this.parentView.context.event.location.address)), '');
        if (import3.checkBinding(throwOnChange, this._expr_11, currVal_11)) {
            this.renderer.setText(this._text_7, currVal_11);
            this._expr_11 = currVal_11;
        }
        var currVal_12 = import3.inlineInterpolate(2, '\n        ', ((this.parentView.context.event == null) ? null : ((this.parentView.context.event.location == null) ? null : this.parentView.context.event.location.city)), ', ', ((this.parentView.context.event == null) ? null : ((this.parentView.context.event.location == null) ? null : this.parentView.context.event.location.country)), '\n      ');
        if (import3.checkBinding(throwOnChange, this._expr_12, currVal_12)) {
            this.renderer.setText(this._text_9, currVal_12);
            this._expr_12 = currVal_12;
        }
    };
    View_EventDetailsComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_EventDetailsComponent1;
}(import1.AppView));
var View_EventDetailsComponent2 = (function (_super) {
    __extends(View_EventDetailsComponent2, _super);
    function View_EventDetailsComponent2(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_EventDetailsComponent2, renderType_EventDetailsComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_EventDetailsComponent2.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'session-list', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_0 = new import13.View_SessionListComponent0(this.viewUtils, this, 0, this._el_0);
        this._SessionListComponent_0_3 = new import13.Wrapper_SessionListComponent(this.parentView.parentView.injectorGet(import14.AuthService, this.parentView.parentIndex), this.parentView.parentView.injectorGet(import15.VoterService, this.parentView.parentIndex));
        this.compView_0.create(this._SessionListComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return null;
    };
    View_EventDetailsComponent2.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import12.SessionListComponent) && (0 === requestNodeIndex))) {
            return this._SessionListComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_EventDetailsComponent2.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0_0_0 = ((this.parentView.context.event == null) ? null : this.parentView.context.event.sessions);
        this._SessionListComponent_0_3.check_sessions(currVal_0_0_0, throwOnChange, false);
        var currVal_0_0_1 = this.parentView.context.filterBy;
        this._SessionListComponent_0_3.check_filterBy(currVal_0_0_1, throwOnChange, false);
        var currVal_0_0_2 = this.parentView.context.sortBy;
        this._SessionListComponent_0_3.check_sortBy(currVal_0_0_2, throwOnChange, false);
        var currVal_0_0_3 = ((this.parentView.context.event == null) ? null : this.parentView.context.event.id);
        this._SessionListComponent_0_3.check_eventId(currVal_0_0_3, throwOnChange, false);
        this._SessionListComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_EventDetailsComponent2.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_EventDetailsComponent2.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_EventDetailsComponent2;
}(import1.AppView));
var View_EventDetailsComponent3 = (function (_super) {
    __extends(View_EventDetailsComponent3, _super);
    function View_EventDetailsComponent3(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_EventDetailsComponent3, renderType_EventDetailsComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_EventDetailsComponent3.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'create-session', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_0 = new import17.View_CreateSessionComponent0(this.viewUtils, this, 0, this._el_0);
        this._CreateSessionComponent_0_3 = new import17.Wrapper_CreateSessionComponent();
        this.compView_0.create(this._CreateSessionComponent_0_3.context);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_0, new import3.InlineArray4(4, 'saveNewSession', null, 'cancelAddSession', null), this.eventHandler(this.handleEvent_0));
        this._CreateSessionComponent_0_3.subscribe(this, this.eventHandler(this.handleEvent_0), true, true);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), [disposable_0]);
        return null;
    };
    View_EventDetailsComponent3.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import16.CreateSessionComponent) && (0 === requestNodeIndex))) {
            return this._CreateSessionComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_EventDetailsComponent3.prototype.detectChangesInternal = function (throwOnChange) {
        this._CreateSessionComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_EventDetailsComponent3.prototype.destroyInternal = function () {
        this.compView_0.destroy();
        this._CreateSessionComponent_0_3.ngOnDestroy();
    };
    View_EventDetailsComponent3.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_EventDetailsComponent3.prototype.handleEvent_0 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'saveNewSession')) {
            var pd_sub_0 = (this.parentView.context.saveNewSession($event) !== false);
            result = (pd_sub_0 && result);
        }
        if ((eventName == 'cancelAddSession')) {
            var pd_sub_1 = (this.parentView.context.cancelAddSession() !== false);
            result = (pd_sub_1 && result);
        }
        return result;
    };
    return View_EventDetailsComponent3;
}(import1.AppView));
var renderType_EventDetailsComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.Emulated, styles_EventDetailsComponent, {});
var View_EventDetailsComponent0 = (function (_super) {
    __extends(View_EventDetailsComponent0, _super);
    function View_EventDetailsComponent0(viewUtils, parentView, parentIndex, parentElement) {
        var _this = _super.call(this, View_EventDetailsComponent0, renderType_EventDetailsComponent, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways) || this;
        _this._expr_93 = import11.UNINITIALIZED;
        _this._expr_94 = import11.UNINITIALIZED;
        _this._expr_95 = import11.UNINITIALIZED;
        _this._expr_98 = import11.UNINITIALIZED;
        _this._expr_101 = import11.UNINITIALIZED;
        _this._expr_102 = import11.UNINITIALIZED;
        _this._expr_105 = import11.UNINITIALIZED;
        _this._expr_106 = import11.UNINITIALIZED;
        _this._expr_107 = import11.UNINITIALIZED;
        _this._expr_108 = import11.UNINITIALIZED;
        _this._expr_109 = import11.UNINITIALIZED;
        _this._expr_110 = import11.UNINITIALIZED;
        return _this;
    }
    View_EventDetailsComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'container'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'img', new import3.InlineArray2(2, 'class', 'event-image'), null);
        this._text_3 = this.renderer.createText(this._el_0, '\n\n  ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'row'), null);
        this._text_5 = this.renderer.createText(this._el_4, '\n    ', null);
        this._el_6 = import3.createRenderElement(this.renderer, this._el_4, 'div', new import3.InlineArray2(2, 'class', 'col-md-11'), null);
        this._text_7 = this.renderer.createText(this._el_6, '\n      ', null);
        this._el_8 = import3.createRenderElement(this.renderer, this._el_6, 'h2', import3.EMPTY_INLINE_ARRAY, null);
        this._text_9 = this.renderer.createText(this._el_8, '', null);
        this._text_10 = this.renderer.createText(this._el_6, '\n    ', null);
        this._text_11 = this.renderer.createText(this._el_4, '\n  ', null);
        this._text_12 = this.renderer.createText(this._el_0, '\n\n  ', null);
        this._el_13 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'row'), null);
        this._text_14 = this.renderer.createText(this._el_13, '\n    ', null);
        this._el_15 = import3.createRenderElement(this.renderer, this._el_13, 'div', new import3.InlineArray2(2, 'class', 'col-md-6'), null);
        this._text_16 = this.renderer.createText(this._el_15, '\n      ', null);
        this._el_17 = import3.createRenderElement(this.renderer, this._el_15, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._el_18 = import3.createRenderElement(this.renderer, this._el_17, 'strong', import3.EMPTY_INLINE_ARRAY, null);
        this._text_19 = this.renderer.createText(this._el_18, 'Date:', null);
        this._text_20 = this.renderer.createText(this._el_17, '', null);
        this._text_21 = this.renderer.createText(this._el_15, '\n      ', null);
        this._el_22 = import3.createRenderElement(this.renderer, this._el_15, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._el_23 = import3.createRenderElement(this.renderer, this._el_22, 'strong', import3.EMPTY_INLINE_ARRAY, null);
        this._text_24 = this.renderer.createText(this._el_23, 'Time:', null);
        this._text_25 = this.renderer.createText(this._el_22, '', null);
        this._text_26 = this.renderer.createText(this._el_15, '\n      ', null);
        this._el_27 = import3.createRenderElement(this.renderer, this._el_15, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._el_28 = import3.createRenderElement(this.renderer, this._el_27, 'strong', import3.EMPTY_INLINE_ARRAY, null);
        this._text_29 = this.renderer.createText(this._el_28, 'Price:', null);
        this._text_30 = this.renderer.createText(this._el_27, '', null);
        this._text_31 = this.renderer.createText(this._el_15, '\n    ', null);
        this._text_32 = this.renderer.createText(this._el_13, '\n    ', null);
        this._anchor_33 = this.renderer.createTemplateAnchor(this._el_13, null);
        this._vc_33 = new import10.ViewContainer(33, 13, this, this._anchor_33);
        this._TemplateRef_33_5 = new import22.TemplateRef_(this, 33, this._anchor_33);
        this._NgIf_33_6 = new import18.Wrapper_NgIf(this._vc_33.vcRef, this._TemplateRef_33_5);
        this._text_34 = this.renderer.createText(this._el_13, '\n  ', null);
        this._text_35 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_36 = import3.createRenderElement(this.renderer, this._el_0, 'hr', import3.EMPTY_INLINE_ARRAY, null);
        this._text_37 = this.renderer.createText(this._el_0, '\n\n  ', null);
        this._el_38 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray4(4, 'class', 'row', 'style', 'margin-bottom:10px'), null);
        this._text_39 = this.renderer.createText(this._el_38, '\n    ', null);
        this._el_40 = import3.createRenderElement(this.renderer, this._el_38, 'div', new import3.InlineArray2(2, 'class', 'col-md-2'), null);
        this._text_41 = this.renderer.createText(this._el_40, '\n      ', null);
        this._el_42 = import3.createRenderElement(this.renderer, this._el_40, 'h3', new import3.InlineArray2(2, 'style', 'margin:0'), null);
        this._text_43 = this.renderer.createText(this._el_42, 'Sessions', null);
        this._text_44 = this.renderer.createText(this._el_40, '\n    ', null);
        this._text_45 = this.renderer.createText(this._el_38, '\n    ', null);
        this._el_46 = import3.createRenderElement(this.renderer, this._el_38, 'div', new import3.InlineArray2(2, 'class', 'col-md-7'), null);
        this._text_47 = this.renderer.createText(this._el_46, '\n      ', null);
        this._el_48 = import3.createRenderElement(this.renderer, this._el_46, 'div', new import3.InlineArray4(4, 'class', 'btn-group btn-group-sm', 'style', 'margin-right:20px; margin-left:20px;'), null);
        this._text_49 = this.renderer.createText(this._el_48, '\n        ', null);
        this._el_50 = import3.createRenderElement(this.renderer, this._el_48, 'button', new import3.InlineArray2(2, 'class', 'btn btn-default'), null);
        this._text_51 = this.renderer.createText(this._el_50, 'By Name', null);
        this._text_52 = this.renderer.createText(this._el_48, '\n        ', null);
        this._el_53 = import3.createRenderElement(this.renderer, this._el_48, 'button', new import3.InlineArray2(2, 'class', 'btn btn-default'), null);
        this._text_54 = this.renderer.createText(this._el_53, 'By Votes', null);
        this._text_55 = this.renderer.createText(this._el_48, '\n      ', null);
        this._text_56 = this.renderer.createText(this._el_46, '\n      ', null);
        this._el_57 = import3.createRenderElement(this.renderer, this._el_46, 'div', new import3.InlineArray2(2, 'class', 'btn-group btn-group-sm'), null);
        this._text_58 = this.renderer.createText(this._el_57, '\n        ', null);
        this._el_59 = import3.createRenderElement(this.renderer, this._el_57, 'button', new import3.InlineArray2(2, 'class', 'btn btn-default'), null);
        this._text_60 = this.renderer.createText(this._el_59, 'All', null);
        this._text_61 = this.renderer.createText(this._el_57, '\n        ', null);
        this._el_62 = import3.createRenderElement(this.renderer, this._el_57, 'button', new import3.InlineArray2(2, 'class', 'btn btn-default'), null);
        this._text_63 = this.renderer.createText(this._el_62, 'Beginner', null);
        this._text_64 = this.renderer.createText(this._el_57, '\n        ', null);
        this._el_65 = import3.createRenderElement(this.renderer, this._el_57, 'button', new import3.InlineArray2(2, 'class', 'btn btn-default'), null);
        this._text_66 = this.renderer.createText(this._el_65, 'Intermediate', null);
        this._text_67 = this.renderer.createText(this._el_57, '\n        ', null);
        this._el_68 = import3.createRenderElement(this.renderer, this._el_57, 'button', new import3.InlineArray2(2, 'class', 'btn btn-default'), null);
        this._text_69 = this.renderer.createText(this._el_68, 'Advanced', null);
        this._text_70 = this.renderer.createText(this._el_57, '\n      ', null);
        this._text_71 = this.renderer.createText(this._el_46, '\n    ', null);
        this._text_72 = this.renderer.createText(this._el_38, '\n    ', null);
        this._el_73 = import3.createRenderElement(this.renderer, this._el_38, 'div', new import3.InlineArray2(2, 'class', 'col-md-2'), null);
        this._text_74 = this.renderer.createText(this._el_73, '\n      ', null);
        this._el_75 = import3.createRenderElement(this.renderer, this._el_73, 'a', import3.EMPTY_INLINE_ARRAY, null);
        this._text_76 = this.renderer.createText(this._el_75, 'Add Session', null);
        this._text_77 = this.renderer.createText(this._el_73, '\n    ', null);
        this._text_78 = this.renderer.createText(this._el_38, '\n  ', null);
        this._text_79 = this.renderer.createText(this._el_0, '\n\n  ', null);
        this._anchor_80 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_80 = new import10.ViewContainer(80, 0, this, this._anchor_80);
        this._TemplateRef_80_5 = new import22.TemplateRef_(this, 80, this._anchor_80);
        this._NgIf_80_6 = new import18.Wrapper_NgIf(this._vc_80.vcRef, this._TemplateRef_80_5);
        this._text_81 = this.renderer.createText(this._el_0, '\n  ', null);
        this._anchor_82 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_82 = new import10.ViewContainer(82, 0, this, this._anchor_82);
        this._TemplateRef_82_5 = new import22.TemplateRef_(this, 82, this._anchor_82);
        this._NgIf_82_6 = new import18.Wrapper_NgIf(this._vc_82.vcRef, this._TemplateRef_82_5);
        this._text_83 = this.renderer.createText(this._el_0, '\n', null);
        this._pipe_uppercase_0 = new import19.UpperCasePipe();
        this._pipe_uppercase_0_0 = import3.pureProxy1(this._pipe_uppercase_0.transform.bind(this._pipe_uppercase_0));
        this._pipe_date_1 = new import20.DatePipe(this.parentView.injectorGet(import23.LOCALE_ID, this.parentIndex));
        this._pipe_date_1_0 = import3.pureProxy2(this._pipe_date_1.transform.bind(this._pipe_date_1));
        this._pipe_currency_2 = new import21.CurrencyPipe(this.parentView.injectorGet(import23.LOCALE_ID, this.parentIndex));
        this._pipe_currency_2_0 = import3.pureProxy3(this._pipe_currency_2.transform.bind(this._pipe_currency_2));
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_50, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_50));
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_53, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_53));
        var disposable_2 = import3.subscribeToRenderElement(this, this._el_59, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_59));
        var disposable_3 = import3.subscribeToRenderElement(this, this._el_62, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_62));
        var disposable_4 = import3.subscribeToRenderElement(this, this._el_65, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_65));
        var disposable_5 = import3.subscribeToRenderElement(this, this._el_68, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_68));
        var disposable_6 = import3.subscribeToRenderElement(this, this._el_75, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_75));
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._el_8,
            this._text_9,
            this._text_10,
            this._text_11,
            this._text_12,
            this._el_13,
            this._text_14,
            this._el_15,
            this._text_16,
            this._el_17,
            this._el_18,
            this._text_19,
            this._text_20,
            this._text_21,
            this._el_22,
            this._el_23,
            this._text_24,
            this._text_25,
            this._text_26,
            this._el_27,
            this._el_28,
            this._text_29,
            this._text_30,
            this._text_31,
            this._text_32,
            this._anchor_33,
            this._text_34,
            this._text_35,
            this._el_36,
            this._text_37,
            this._el_38,
            this._text_39,
            this._el_40,
            this._text_41,
            this._el_42,
            this._text_43,
            this._text_44,
            this._text_45,
            this._el_46,
            this._text_47,
            this._el_48,
            this._text_49,
            this._el_50,
            this._text_51,
            this._text_52,
            this._el_53,
            this._text_54,
            this._text_55,
            this._text_56,
            this._el_57,
            this._text_58,
            this._el_59,
            this._text_60,
            this._text_61,
            this._el_62,
            this._text_63,
            this._text_64,
            this._el_65,
            this._text_66,
            this._text_67,
            this._el_68,
            this._text_69,
            this._text_70,
            this._text_71,
            this._text_72,
            this._el_73,
            this._text_74,
            this._el_75,
            this._text_76,
            this._text_77,
            this._text_78,
            this._text_79,
            this._anchor_80,
            this._text_81,
            this._anchor_82,
            this._text_83
        ]), [
            disposable_0,
            disposable_1,
            disposable_2,
            disposable_3,
            disposable_4,
            disposable_5,
            disposable_6
        ]);
        return null;
    };
    View_EventDetailsComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import22.TemplateRef) && (33 === requestNodeIndex))) {
            return this._TemplateRef_33_5;
        }
        if (((token === import24.NgIf) && (33 === requestNodeIndex))) {
            return this._NgIf_33_6.context;
        }
        if (((token === import22.TemplateRef) && (80 === requestNodeIndex))) {
            return this._TemplateRef_80_5;
        }
        if (((token === import24.NgIf) && (80 === requestNodeIndex))) {
            return this._NgIf_80_6.context;
        }
        if (((token === import22.TemplateRef) && (82 === requestNodeIndex))) {
            return this._TemplateRef_82_5;
        }
        if (((token === import24.NgIf) && (82 === requestNodeIndex))) {
            return this._NgIf_82_6.context;
        }
        return notFoundResult;
    };
    View_EventDetailsComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var valUnwrapper = new import11.ValueUnwrapper();
        var currVal_33_0_0 = (this.context.addMode || ((this.context.event == null) ? null : this.context.event.location));
        this._NgIf_33_6.check_ngIf(currVal_33_0_0, throwOnChange, false);
        this._NgIf_33_6.ngDoCheck(this, this._anchor_33, throwOnChange);
        var currVal_80_0_0 = !this.context.addMode;
        this._NgIf_80_6.check_ngIf(currVal_80_0_0, throwOnChange, false);
        this._NgIf_80_6.ngDoCheck(this, this._anchor_80, throwOnChange);
        var currVal_82_0_0 = this.context.addMode;
        this._NgIf_82_6.check_ngIf(currVal_82_0_0, throwOnChange, false);
        this._NgIf_82_6.ngDoCheck(this, this._anchor_82, throwOnChange);
        this._vc_33.detectChangesInNestedViews(throwOnChange);
        this._vc_80.detectChangesInNestedViews(throwOnChange);
        this._vc_82.detectChangesInNestedViews(throwOnChange);
        var currVal_93 = ((this.context.event == null) ? null : this.context.event.imageUrl);
        if (import3.checkBinding(throwOnChange, this._expr_93, currVal_93)) {
            this.renderer.setElementProperty(this._el_2, 'src', this.viewUtils.sanitizer.sanitize(import25.SecurityContext.URL, currVal_93));
            this._expr_93 = currVal_93;
        }
        var currVal_94 = ((this.context.event == null) ? null : this.context.event.name);
        if (import3.checkBinding(throwOnChange, this._expr_94, currVal_94)) {
            this.renderer.setElementProperty(this._el_2, 'alt', currVal_94);
            this._expr_94 = currVal_94;
        }
        valUnwrapper.reset();
        var currVal_95 = import3.inlineInterpolate(1, '', valUnwrapper.unwrap(import3.castByValue(this._pipe_uppercase_0_0, this._pipe_uppercase_0.transform)(((this.context.event == null) ? null : this.context.event.name))), ' ');
        if ((valUnwrapper.hasWrappedValue || import3.checkBinding(throwOnChange, this._expr_95, currVal_95))) {
            this.renderer.setText(this._text_9, currVal_95);
            this._expr_95 = currVal_95;
        }
        valUnwrapper.reset();
        var currVal_98 = import3.inlineInterpolate(1, ' ', valUnwrapper.unwrap(import3.castByValue(this._pipe_date_1_0, this._pipe_date_1.transform)(((this.context.event == null) ? null : this.context.event.date), 'shortDate')), '');
        if ((valUnwrapper.hasWrappedValue || import3.checkBinding(throwOnChange, this._expr_98, currVal_98))) {
            this.renderer.setText(this._text_20, currVal_98);
            this._expr_98 = currVal_98;
        }
        var currVal_101 = import3.inlineInterpolate(1, ' ', ((this.context.event == null) ? null : this.context.event.time), '');
        if (import3.checkBinding(throwOnChange, this._expr_101, currVal_101)) {
            this.renderer.setText(this._text_25, currVal_101);
            this._expr_101 = currVal_101;
        }
        valUnwrapper.reset();
        var currVal_102 = import3.inlineInterpolate(1, ' ', valUnwrapper.unwrap(import3.castByValue(this._pipe_currency_2_0, this._pipe_currency_2.transform)(((this.context.event == null) ? null : this.context.event.price), 'USD', true)), '');
        if ((valUnwrapper.hasWrappedValue || import3.checkBinding(throwOnChange, this._expr_102, currVal_102))) {
            this.renderer.setText(this._text_30, currVal_102);
            this._expr_102 = currVal_102;
        }
        var currVal_105 = (this.context.sortBy === 'name');
        if (import3.checkBinding(throwOnChange, this._expr_105, currVal_105)) {
            this.renderer.setElementClass(this._el_50, 'active', currVal_105);
            this._expr_105 = currVal_105;
        }
        var currVal_106 = (this.context.sortBy === 'votes');
        if (import3.checkBinding(throwOnChange, this._expr_106, currVal_106)) {
            this.renderer.setElementClass(this._el_53, 'active', currVal_106);
            this._expr_106 = currVal_106;
        }
        var currVal_107 = (this.context.filterBy === 'all');
        if (import3.checkBinding(throwOnChange, this._expr_107, currVal_107)) {
            this.renderer.setElementClass(this._el_59, 'active', currVal_107);
            this._expr_107 = currVal_107;
        }
        var currVal_108 = (this.context.filterBy === 'beginner');
        if (import3.checkBinding(throwOnChange, this._expr_108, currVal_108)) {
            this.renderer.setElementClass(this._el_62, 'active', currVal_108);
            this._expr_108 = currVal_108;
        }
        var currVal_109 = (this.context.filterBy === 'intermediate');
        if (import3.checkBinding(throwOnChange, this._expr_109, currVal_109)) {
            this.renderer.setElementClass(this._el_65, 'active', currVal_109);
            this._expr_109 = currVal_109;
        }
        var currVal_110 = (this.context.filterBy === 'advanced');
        if (import3.checkBinding(throwOnChange, this._expr_110, currVal_110)) {
            this.renderer.setElementClass(this._el_68, 'active', currVal_110);
            this._expr_110 = currVal_110;
        }
    };
    View_EventDetailsComponent0.prototype.destroyInternal = function () {
        this._vc_33.destroyNestedViews();
        this._vc_80.destroyNestedViews();
        this._vc_82.destroyNestedViews();
    };
    View_EventDetailsComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 33)) {
            return new View_EventDetailsComponent1(this.viewUtils, this, 33, this._anchor_33, this._vc_33);
        }
        if ((nodeIndex == 80)) {
            return new View_EventDetailsComponent2(this.viewUtils, this, 80, this._anchor_80, this._vc_80);
        }
        if ((nodeIndex == 82)) {
            return new View_EventDetailsComponent3(this.viewUtils, this, 82, this._anchor_82, this._vc_82);
        }
        return null;
    };
    View_EventDetailsComponent0.prototype.handleEvent_50 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = ((this.context.sortBy = 'name') !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_EventDetailsComponent0.prototype.handleEvent_53 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = ((this.context.sortBy = 'votes') !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_EventDetailsComponent0.prototype.handleEvent_59 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = ((this.context.filterBy = 'all') !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_EventDetailsComponent0.prototype.handleEvent_62 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = ((this.context.filterBy = 'beginner') !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_EventDetailsComponent0.prototype.handleEvent_65 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = ((this.context.filterBy = 'intermediate') !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_EventDetailsComponent0.prototype.handleEvent_68 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = ((this.context.filterBy = 'advanced') !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_EventDetailsComponent0.prototype.handleEvent_75 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.addSession() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_EventDetailsComponent0;
}(import1.AppView));
export { View_EventDetailsComponent0 };
//# sourceMappingURL=event-details.component.ngfactory.js.map