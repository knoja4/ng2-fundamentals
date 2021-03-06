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
import * as import0 from '../../../../app/events/event-details/upvote.component';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from './upvote.component.css.shim.ngstyle';
import * as import10 from '@angular/core/src/security';
var Wrapper_UpvoteComponent = (function () {
    function Wrapper_UpvoteComponent() {
        this._changed = false;
        this.context = new import0.UpvoteComponent();
        this._expr_0 = import1.UNINITIALIZED;
        this._expr_1 = import1.UNINITIALIZED;
    }
    Wrapper_UpvoteComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_UpvoteComponent.prototype.ngOnDestroy = function () {
        (this.subscription0 && this.subscription0.unsubscribe());
    };
    Wrapper_UpvoteComponent.prototype.check_count = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.count = currValue;
            this._expr_0 = currValue;
        }
    };
    Wrapper_UpvoteComponent.prototype.check_voted = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_1, currValue))) {
            this._changed = true;
            this.context.voted = currValue;
            this._expr_1 = currValue;
        }
    };
    Wrapper_UpvoteComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_UpvoteComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_UpvoteComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_UpvoteComponent.prototype.subscribe = function (view, _eventHandler, emit0) {
        this._eventHandler = _eventHandler;
        if (emit0) {
            (this.subscription0 = this.context.vote.subscribe(_eventHandler.bind(view, 'vote')));
        }
    };
    return Wrapper_UpvoteComponent;
}());
export { Wrapper_UpvoteComponent };
var renderType_UpvoteComponent_Host = import3.createRenderComponentType('', 0, import5.ViewEncapsulation.None, [], {});
var View_UpvoteComponent_Host0 = (function (_super) {
    __extends(View_UpvoteComponent_Host0, _super);
    function View_UpvoteComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_UpvoteComponent_Host0, renderType_UpvoteComponent_Host, import6.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_UpvoteComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'upvote', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_UpvoteComponent0(this.viewUtils, this, 0, this._el_0);
        this._UpvoteComponent_0_3 = new Wrapper_UpvoteComponent();
        this.compView_0.create(this._UpvoteComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import8.ComponentRef_(0, this, this._el_0, this._UpvoteComponent_0_3.context);
    };
    View_UpvoteComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.UpvoteComponent) && (0 === requestNodeIndex))) {
            return this._UpvoteComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_UpvoteComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._UpvoteComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_UpvoteComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
        this._UpvoteComponent_0_3.ngOnDestroy();
    };
    View_UpvoteComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_UpvoteComponent_Host0;
}(import2.AppView));
export var UpvoteComponentNgFactory = new import8.ComponentFactory('upvote', View_UpvoteComponent_Host0, import0.UpvoteComponent);
var styles_UpvoteComponent = [import9.styles];
var renderType_UpvoteComponent = import3.createRenderComponentType('', 0, import5.ViewEncapsulation.Emulated, styles_UpvoteComponent, {});
var View_UpvoteComponent0 = (function (_super) {
    __extends(View_UpvoteComponent0, _super);
    function View_UpvoteComponent0(viewUtils, parentView, parentIndex, parentElement) {
        var _this = _super.call(this, View_UpvoteComponent0, renderType_UpvoteComponent, import6.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways) || this;
        _this._expr_18 = import1.UNINITIALIZED;
        _this._expr_19 = import1.UNINITIALIZED;
        return _this;
    }
    View_UpvoteComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n    ', null);
        this._el_1 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'votingWidgetContainer pointable'), null);
        this._text_2 = this.renderer.createText(this._el_1, '\n      ', null);
        this._el_3 = import3.createRenderElement(this.renderer, this._el_1, 'div', new import3.InlineArray2(2, 'class', 'well votingWidget'), null);
        this._text_4 = this.renderer.createText(this._el_3, '\n        ', null);
        this._el_5 = import3.createRenderElement(this.renderer, this._el_3, 'div', new import3.InlineArray2(2, 'class', 'votingButton'), null);
        this._text_6 = this.renderer.createText(this._el_5, '\n          ', null);
        this._el_7 = import3.createRenderElement(this.renderer, this._el_5, 'i', new import3.InlineArray2(2, 'class', 'glyphicon glyphicon-heart'), null);
        this._text_8 = this.renderer.createText(this._el_5, '\n        ', null);
        this._text_9 = this.renderer.createText(this._el_3, '\n        ', null);
        this._el_10 = import3.createRenderElement(this.renderer, this._el_3, 'div', new import3.InlineArray2(2, 'class', 'badge badge-inverse votingCount'), null);
        this._text_11 = this.renderer.createText(this._el_10, '\n          ', null);
        this._el_12 = import3.createRenderElement(this.renderer, this._el_10, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_13 = this.renderer.createText(this._el_12, '', null);
        this._text_14 = this.renderer.createText(this._el_10, '\n        ', null);
        this._text_15 = this.renderer.createText(this._el_3, '\n      ', null);
        this._text_16 = this.renderer.createText(this._el_1, '\n    ', null);
        this._text_17 = this.renderer.createText(parentRenderNode, '\n  ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_1, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_1));
        this.init(null, (this.renderer.directRenderer ? null : [
            this._text_0,
            this._el_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._text_9,
            this._el_10,
            this._text_11,
            this._el_12,
            this._text_13,
            this._text_14,
            this._text_15,
            this._text_16,
            this._text_17
        ]), [disposable_0]);
        return null;
    };
    View_UpvoteComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_18 = this.context.iconColor;
        if (import3.checkBinding(throwOnChange, this._expr_18, currVal_18)) {
            this.renderer.setElementStyle(this._el_7, 'color', ((this.viewUtils.sanitizer.sanitize(import10.SecurityContext.STYLE, currVal_18) == null) ? null : this.viewUtils.sanitizer.sanitize(import10.SecurityContext.STYLE, currVal_18).toString()));
            this._expr_18 = currVal_18;
        }
        var currVal_19 = import3.inlineInterpolate(1, '', this.context.count, '');
        if (import3.checkBinding(throwOnChange, this._expr_19, currVal_19)) {
            this.renderer.setText(this._text_13, currVal_19);
            this._expr_19 = currVal_19;
        }
    };
    View_UpvoteComponent0.prototype.handleEvent_1 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.onClick() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_UpvoteComponent0;
}(import2.AppView));
export { View_UpvoteComponent0 };
//# sourceMappingURL=upvote.component.ngfactory.js.map