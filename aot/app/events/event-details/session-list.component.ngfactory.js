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
import * as import0 from '../../../../app/events/event-details/session-list.component';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '../../../../app/user/auth.service';
import * as import10 from '../../../../app/events/event-details/voter.service';
import * as import11 from '../../../../app/events/event-details/upvote.component';
import * as import12 from './upvote.component.ngfactory';
import * as import13 from '@angular/core/src/linker/view_container';
import * as import14 from '../../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import15 from '../../../../app/common/collapsible-well.component';
import * as import16 from '../../common/collapsible-well.component.ngfactory';
import * as import17 from '@angular/core/src/linker/template_ref';
import * as import18 from '@angular/common/src/directives/ng_if';
import * as import19 from '../../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import20 from '../../../../app/events/shared/duration.pipe';
import * as import21 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import22 from '@angular/common/src/directives/ng_for';
var Wrapper_SessionListComponent = (function () {
    function Wrapper_SessionListComponent(p0, p1) {
        this._changed = false;
        this._changes = {};
        this.context = new import0.SessionListComponent(p0, p1);
        this._expr_0 = import1.UNINITIALIZED;
        this._expr_1 = import1.UNINITIALIZED;
        this._expr_2 = import1.UNINITIALIZED;
        this._expr_3 = import1.UNINITIALIZED;
    }
    Wrapper_SessionListComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_SessionListComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_SessionListComponent.prototype.check_sessions = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.sessions = currValue;
            this._changes['sessions'] = new import1.SimpleChange(this._expr_0, currValue);
            this._expr_0 = currValue;
        }
    };
    Wrapper_SessionListComponent.prototype.check_filterBy = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_1, currValue))) {
            this._changed = true;
            this.context.filterBy = currValue;
            this._changes['filterBy'] = new import1.SimpleChange(this._expr_1, currValue);
            this._expr_1 = currValue;
        }
    };
    Wrapper_SessionListComponent.prototype.check_sortBy = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_2, currValue))) {
            this._changed = true;
            this.context.sortBy = currValue;
            this._changes['sortBy'] = new import1.SimpleChange(this._expr_2, currValue);
            this._expr_2 = currValue;
        }
    };
    Wrapper_SessionListComponent.prototype.check_eventId = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_3, currValue))) {
            this._changed = true;
            this.context.eventId = currValue;
            this._changes['eventId'] = new import1.SimpleChange(this._expr_3, currValue);
            this._expr_3 = currValue;
        }
    };
    Wrapper_SessionListComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if (changed) {
                this.context.ngOnChanges(this._changes);
                this._changes = {};
            }
        }
        return changed;
    };
    Wrapper_SessionListComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_SessionListComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_SessionListComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_SessionListComponent;
}());
export { Wrapper_SessionListComponent };
var renderType_SessionListComponent_Host = import3.createRenderComponentType('', 0, import5.ViewEncapsulation.None, [], {});
var View_SessionListComponent_Host0 = (function (_super) {
    __extends(View_SessionListComponent_Host0, _super);
    function View_SessionListComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_SessionListComponent_Host0, renderType_SessionListComponent_Host, import6.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_SessionListComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'session-list', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_SessionListComponent0(this.viewUtils, this, 0, this._el_0);
        this._SessionListComponent_0_3 = new Wrapper_SessionListComponent(this.injectorGet(import9.AuthService, this.parentIndex), this.injectorGet(import10.VoterService, this.parentIndex));
        this.compView_0.create(this._SessionListComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import8.ComponentRef_(0, this, this._el_0, this._SessionListComponent_0_3.context);
    };
    View_SessionListComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.SessionListComponent) && (0 === requestNodeIndex))) {
            return this._SessionListComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_SessionListComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._SessionListComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_SessionListComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_SessionListComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_SessionListComponent_Host0;
}(import2.AppView));
export var SessionListComponentNgFactory = new import8.ComponentFactory('session-list', View_SessionListComponent_Host0, import0.SessionListComponent);
var styles_SessionListComponent = ['collapsible-well[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {margin-top:-5px; margin-bottom:10px}'];
var View_SessionListComponent2 = (function (_super) {
    __extends(View_SessionListComponent2, _super);
    function View_SessionListComponent2(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_SessionListComponent2, renderType_SessionListComponent, import6.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_SessionListComponent2.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n      ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'upvote', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_2 = new import12.View_UpvoteComponent0(this.viewUtils, this, 2, this._el_2);
        this._UpvoteComponent_2_3 = new import12.Wrapper_UpvoteComponent();
        this.compView_2.create(this._UpvoteComponent_2_3.context);
        this._text_3 = this.renderer.createText(this._el_0, '\n    ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_2, new import3.InlineArray2(2, 'vote', null), this.eventHandler(this.handleEvent_2));
        this._UpvoteComponent_2_3.subscribe(this, this.eventHandler(this.handleEvent_2), true);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3
        ]), [disposable_0]);
        return null;
    };
    View_SessionListComponent2.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import11.UpvoteComponent) && (2 === requestNodeIndex))) {
            return this._UpvoteComponent_2_3.context;
        }
        return notFoundResult;
    };
    View_SessionListComponent2.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2_0_0 = this.parentView.context.$implicit.voters.length;
        this._UpvoteComponent_2_3.check_count(currVal_2_0_0, throwOnChange, false);
        var currVal_2_0_1 = this.parentView.parentView.context.userHasVoted(this.parentView.context.$implicit);
        this._UpvoteComponent_2_3.check_voted(currVal_2_0_1, throwOnChange, false);
        this._UpvoteComponent_2_3.ngDoCheck(this, this._el_2, throwOnChange);
        this.compView_2.internalDetectChanges(throwOnChange);
    };
    View_SessionListComponent2.prototype.destroyInternal = function () {
        this.compView_2.destroy();
        this._UpvoteComponent_2_3.ngOnDestroy();
    };
    View_SessionListComponent2.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_SessionListComponent2.prototype.handleEvent_2 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'vote')) {
            var pd_sub_0 = (this.parentView.parentView.context.toggleVote(this.parentView.context.$implicit) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_SessionListComponent2;
}(import2.AppView));
var View_SessionListComponent3 = (function (_super) {
    __extends(View_SessionListComponent3, _super);
    function View_SessionListComponent3(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_SessionListComponent3, renderType_SessionListComponent, import6.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_SessionListComponent3.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'i', new import3.InlineArray4(4, 'class', 'glyphicon glyphicon-fire', 'style', 'color:red'), null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return null;
    };
    View_SessionListComponent3.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_SessionListComponent3;
}(import2.AppView));
var View_SessionListComponent1 = (function (_super) {
    __extends(View_SessionListComponent1, _super);
    function View_SessionListComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_SessionListComponent1, renderType_SessionListComponent, import6.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_42 = import1.UNINITIALIZED;
        _this._expr_43 = import1.UNINITIALIZED;
        _this._expr_44 = import1.UNINITIALIZED;
        _this._expr_46 = import1.UNINITIALIZED;
        _this._expr_47 = import1.UNINITIALIZED;
        return _this;
    }
    View_SessionListComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'row'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'col-md-1'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n    ', null);
        this._anchor_4 = this.renderer.createTemplateAnchor(this._el_2, null);
        this._vc_4 = new import13.ViewContainer(4, 2, this, this._anchor_4);
        this._TemplateRef_4_5 = new import17.TemplateRef_(this, 4, this._anchor_4);
        this._NgIf_4_6 = new import14.Wrapper_NgIf(this._vc_4.vcRef, this._TemplateRef_4_5);
        this._text_5 = this.renderer.createText(this._el_2, '\n  ', null);
        this._text_6 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_7 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'col-md-10'), null);
        this._text_8 = this.renderer.createText(this._el_7, '\n    ', null);
        this._el_9 = import3.createRenderElement(this.renderer, this._el_7, 'collapsible-well', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_9 = new import16.View_CollapsibleWellComponent0(this.viewUtils, this, 9, this._el_9);
        this._CollapsibleWellComponent_9_3 = new import16.Wrapper_CollapsibleWellComponent();
        this._text_10 = this.renderer.createText(null, '\n      ', null);
        this._el_11 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'well-title', ''), null);
        this._text_12 = this.renderer.createText(this._el_11, '', null);
        this._anchor_13 = this.renderer.createTemplateAnchor(this._el_11, null);
        this._vc_13 = new import13.ViewContainer(13, 11, this, this._anchor_13);
        this._TemplateRef_13_5 = new import17.TemplateRef_(this, 13, this._anchor_13);
        this._NgIf_13_6 = new import14.Wrapper_NgIf(this._vc_13.vcRef, this._TemplateRef_13_5);
        this._text_14 = this.renderer.createText(this._el_11, '\n      ', null);
        this._text_15 = this.renderer.createText(null, '\n      ', null);
        this._el_16 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'well-body', ''), null);
        this._text_17 = this.renderer.createText(this._el_16, '\n        ', null);
        this._el_18 = import3.createRenderElement(this.renderer, this._el_16, 'h6', import3.EMPTY_INLINE_ARRAY, null);
        this._text_19 = this.renderer.createText(this._el_18, '', null);
        this._text_20 = this.renderer.createText(this._el_16, '\n        ', null);
        this._el_21 = import3.createRenderElement(this.renderer, this._el_16, 'span', import3.EMPTY_INLINE_ARRAY, null);
        this._text_22 = this.renderer.createText(this._el_21, '', null);
        this._el_23 = import3.createRenderElement(this.renderer, this._el_16, 'br', import3.EMPTY_INLINE_ARRAY, null);
        this._text_24 = this.renderer.createText(this._el_16, '\n        ', null);
        this._el_25 = import3.createRenderElement(this.renderer, this._el_16, 'span', import3.EMPTY_INLINE_ARRAY, null);
        this._text_26 = this.renderer.createText(this._el_25, '', null);
        this._text_27 = this.renderer.createText(this._el_16, '\n\n        ', null);
        this._el_28 = import3.createRenderElement(this.renderer, this._el_16, 'p', import3.EMPTY_INLINE_ARRAY, null);
        this._text_29 = this.renderer.createText(this._el_28, '', null);
        this._text_30 = this.renderer.createText(this._el_16, '        \n      ', null);
        this._text_31 = this.renderer.createText(null, '\n    ', null);
        this.compView_9.create(this._CollapsibleWellComponent_9_3.context);
        this._text_32 = this.renderer.createText(this._el_7, '\n  ', null);
        this._text_33 = this.renderer.createText(this._el_0, '\n', null);
        this._pipe_duration_0_0 = import3.pureProxy1(this.parentView._pipe_duration_0.transform.bind(this.parentView._pipe_duration_0));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._anchor_4,
            this._text_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._anchor_13,
            this._text_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._el_18,
            this._text_19,
            this._text_20,
            this._el_21,
            this._text_22,
            this._el_23,
            this._text_24,
            this._el_25,
            this._text_26,
            this._text_27,
            this._el_28,
            this._text_29,
            this._text_30,
            this._text_31,
            this._text_32,
            this._text_33
        ]), null);
        return null;
    };
    View_SessionListComponent1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import17.TemplateRef) && (4 === requestNodeIndex))) {
            return this._TemplateRef_4_5;
        }
        if (((token === import18.NgIf) && (4 === requestNodeIndex))) {
            return this._NgIf_4_6.context;
        }
        if (((token === import17.TemplateRef) && (13 === requestNodeIndex))) {
            return this._TemplateRef_13_5;
        }
        if (((token === import18.NgIf) && (13 === requestNodeIndex))) {
            return this._NgIf_13_6.context;
        }
        if (((token === import15.CollapsibleWellComponent) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 31)))) {
            return this._CollapsibleWellComponent_9_3.context;
        }
        return notFoundResult;
    };
    View_SessionListComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var valUnwrapper = new import1.ValueUnwrapper();
        var currVal_4_0_0 = this.parentView.context.auth.isAuthenticated();
        this._NgIf_4_6.check_ngIf(currVal_4_0_0, throwOnChange, false);
        this._NgIf_4_6.ngDoCheck(this, this._anchor_4, throwOnChange);
        this._CollapsibleWellComponent_9_3.ngDoCheck(this, this._el_9, throwOnChange);
        var currVal_13_0_0 = (this.context.$implicit.voters.length > 3);
        this._NgIf_13_6.check_ngIf(currVal_13_0_0, throwOnChange, false);
        this._NgIf_13_6.ngDoCheck(this, this._anchor_13, throwOnChange);
        this._vc_4.detectChangesInNestedViews(throwOnChange);
        this._vc_13.detectChangesInNestedViews(throwOnChange);
        var currVal_42 = import3.inlineInterpolate(1, '\n        ', this.context.$implicit.name, '\n        ');
        if (import3.checkBinding(throwOnChange, this._expr_42, currVal_42)) {
            this.renderer.setText(this._text_12, currVal_42);
            this._expr_42 = currVal_42;
        }
        var currVal_43 = import3.inlineInterpolate(1, '', this.context.$implicit.presenter, '');
        if (import3.checkBinding(throwOnChange, this._expr_43, currVal_43)) {
            this.renderer.setText(this._text_19, currVal_43);
            this._expr_43 = currVal_43;
        }
        valUnwrapper.reset();
        var currVal_44 = import3.inlineInterpolate(1, 'Duration: ', valUnwrapper.unwrap(import3.castByValue(this._pipe_duration_0_0, this.parentView._pipe_duration_0.transform)(this.context.$implicit.duration)), '');
        if ((valUnwrapper.hasWrappedValue || import3.checkBinding(throwOnChange, this._expr_44, currVal_44))) {
            this.renderer.setText(this._text_22, currVal_44);
            this._expr_44 = currVal_44;
        }
        var currVal_46 = import3.inlineInterpolate(1, 'Level: ', this.context.$implicit.level, '');
        if (import3.checkBinding(throwOnChange, this._expr_46, currVal_46)) {
            this.renderer.setText(this._text_26, currVal_46);
            this._expr_46 = currVal_46;
        }
        var currVal_47 = import3.inlineInterpolate(1, '', this.context.$implicit.abstract, '');
        if (import3.checkBinding(throwOnChange, this._expr_47, currVal_47)) {
            this.renderer.setText(this._text_29, currVal_47);
            this._expr_47 = currVal_47;
        }
        this.compView_9.internalDetectChanges(throwOnChange);
    };
    View_SessionListComponent1.prototype.destroyInternal = function () {
        this._vc_4.destroyNestedViews();
        this._vc_13.destroyNestedViews();
        this.compView_9.destroy();
    };
    View_SessionListComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_SessionListComponent1.prototype.visitProjectableNodesInternal = function (nodeIndex, ngContentIndex, cb, ctx) {
        if (((nodeIndex == 9) && (ngContentIndex == 0))) {
            cb(this._el_11, ctx);
        }
        if (((nodeIndex == 9) && (ngContentIndex == 1))) {
            cb(this._el_16, ctx);
        }
    };
    View_SessionListComponent1.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 4)) {
            return new View_SessionListComponent2(this.viewUtils, this, 4, this._anchor_4, this._vc_4);
        }
        if ((nodeIndex == 13)) {
            return new View_SessionListComponent3(this.viewUtils, this, 13, this._anchor_13, this._vc_13);
        }
        return null;
    };
    return View_SessionListComponent1;
}(import2.AppView));
var renderType_SessionListComponent = import3.createRenderComponentType('', 0, import5.ViewEncapsulation.Emulated, styles_SessionListComponent, {});
var View_SessionListComponent0 = (function (_super) {
    __extends(View_SessionListComponent0, _super);
    function View_SessionListComponent0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_SessionListComponent0, renderType_SessionListComponent, import6.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_SessionListComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._anchor_0 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._vc_0 = new import13.ViewContainer(0, null, this, this._anchor_0);
        this._TemplateRef_0_5 = new import17.TemplateRef_(this, 0, this._anchor_0);
        this._NgFor_0_6 = new import19.Wrapper_NgFor(this._vc_0.vcRef, this._TemplateRef_0_5, this.parentView.injectorGet(import21.IterableDiffers, this.parentIndex), this.ref);
        this._pipe_duration_0 = new import20.DurationPipe();
        this.init(null, (this.renderer.directRenderer ? null : [this._anchor_0]), null);
        return null;
    };
    View_SessionListComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import17.TemplateRef) && (0 === requestNodeIndex))) {
            return this._TemplateRef_0_5;
        }
        if (((token === import22.NgFor) && (0 === requestNodeIndex))) {
            return this._NgFor_0_6.context;
        }
        return notFoundResult;
    };
    View_SessionListComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0_0_0 = this.context.visibleSessions;
        this._NgFor_0_6.check_ngForOf(currVal_0_0_0, throwOnChange, false);
        this._NgFor_0_6.ngDoCheck(this, this._anchor_0, throwOnChange);
        this._vc_0.detectChangesInNestedViews(throwOnChange);
    };
    View_SessionListComponent0.prototype.destroyInternal = function () {
        this._vc_0.destroyNestedViews();
    };
    View_SessionListComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 0)) {
            return new View_SessionListComponent1(this.viewUtils, this, 0, this._anchor_0, this._vc_0);
        }
        return null;
    };
    return View_SessionListComponent0;
}(import2.AppView));
export { View_SessionListComponent0 };
//# sourceMappingURL=session-list.component.ngfactory.js.map