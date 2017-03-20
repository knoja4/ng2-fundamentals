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
import * as import0 from '../../../app/events/events-list.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../../app/events/shared/event.service';
import * as import9 from '@angular/router/src/router_state';
import * as import10 from '../../../app/events/event-thumbnail.component';
import * as import11 from './event-thumbnail.component.ngfactory';
import * as import12 from '@angular/core/src/linker/view_container';
import * as import13 from '../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import14 from '@angular/core/src/linker/template_ref';
import * as import15 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import16 from '@angular/common/src/directives/ng_for';
var Wrapper_EventsListComponent = (function () {
    function Wrapper_EventsListComponent(p0, p1) {
        this._changed = false;
        this.context = new import0.EventsListComponent(p0, p1);
    }
    Wrapper_EventsListComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_EventsListComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_EventsListComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_EventsListComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_EventsListComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_EventsListComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_EventsListComponent;
}());
export { Wrapper_EventsListComponent };
var renderType_EventsListComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_EventsListComponent_Host0 = (function (_super) {
    __extends(View_EventsListComponent_Host0, _super);
    function View_EventsListComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_EventsListComponent_Host0, renderType_EventsListComponent_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_EventsListComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'ng-component', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_EventsListComponent0(this.viewUtils, this, 0, this._el_0);
        this._EventsListComponent_0_3 = new Wrapper_EventsListComponent(this.injectorGet(import8.EventService, this.parentIndex), this.injectorGet(import9.ActivatedRoute, this.parentIndex));
        this.compView_0.create(this._EventsListComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._EventsListComponent_0_3.context);
    };
    View_EventsListComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.EventsListComponent) && (0 === requestNodeIndex))) {
            return this._EventsListComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_EventsListComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._EventsListComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_EventsListComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_EventsListComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_EventsListComponent_Host0;
}(import1.AppView));
export var EventsListComponentNgFactory = new import7.ComponentFactory('ng-component', View_EventsListComponent_Host0, import0.EventsListComponent);
var styles_EventsListComponent = [];
var View_EventsListComponent1 = (function (_super) {
    __extends(View_EventsListComponent1, _super);
    function View_EventsListComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_EventsListComponent1, renderType_EventsListComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_EventsListComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'col-md-5'), null);
        this._text_1 = this.renderer.createText(this._el_0, '  \n          ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'event-thumbnail', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_2 = new import11.View_EventThumbnailComponent0(this.viewUtils, this, 2, this._el_2);
        this._EventThumbnailComponent_2_3 = new import11.Wrapper_EventThumbnailComponent();
        this.compView_2.create(this._EventThumbnailComponent_2_3.context);
        this._text_3 = this.renderer.createText(this._el_0, '\n        ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3
        ]), null);
        return null;
    };
    View_EventsListComponent1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import10.EventThumbnailComponent) && (2 === requestNodeIndex))) {
            return this._EventThumbnailComponent_2_3.context;
        }
        return notFoundResult;
    };
    View_EventsListComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2_0_0 = this.context.$implicit;
        this._EventThumbnailComponent_2_3.check_event(currVal_2_0_0, throwOnChange, false);
        this._EventThumbnailComponent_2_3.ngDoCheck(this, this._el_2, throwOnChange);
        this.compView_2.internalDetectChanges(throwOnChange);
    };
    View_EventsListComponent1.prototype.destroyInternal = function () {
        this.compView_2.destroy();
    };
    View_EventsListComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_EventsListComponent1;
}(import1.AppView));
var renderType_EventsListComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_EventsListComponent, {});
var View_EventsListComponent0 = (function (_super) {
    __extends(View_EventsListComponent0, _super);
    function View_EventsListComponent0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_EventsListComponent0, renderType_EventsListComponent, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_EventsListComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n    ', null);
        this._el_1 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_2 = this.renderer.createText(this._el_1, '\n      ', null);
        this._el_3 = import3.createRenderElement(this.renderer, this._el_1, 'h1', import3.EMPTY_INLINE_ARRAY, null);
        this._text_4 = this.renderer.createText(this._el_3, 'Upcoming Angular 2 Events', null);
        this._text_5 = this.renderer.createText(this._el_1, '\n      ', null);
        this._el_6 = import3.createRenderElement(this.renderer, this._el_1, 'hr', import3.EMPTY_INLINE_ARRAY, null);
        this._text_7 = this.renderer.createText(this._el_1, '\n      ', null);
        this._el_8 = import3.createRenderElement(this.renderer, this._el_1, 'div', new import3.InlineArray2(2, 'class', 'row'), null);
        this._text_9 = this.renderer.createText(this._el_8, '\n        ', null);
        this._anchor_10 = this.renderer.createTemplateAnchor(this._el_8, null);
        this._vc_10 = new import12.ViewContainer(10, 8, this, this._anchor_10);
        this._TemplateRef_10_5 = new import14.TemplateRef_(this, 10, this._anchor_10);
        this._NgFor_10_6 = new import13.Wrapper_NgFor(this._vc_10.vcRef, this._TemplateRef_10_5, this.parentView.injectorGet(import15.IterableDiffers, this.parentIndex), this.ref);
        this._text_11 = this.renderer.createText(this._el_8, '\n      ', null);
        this._text_12 = this.renderer.createText(this._el_1, '\n    ', null);
        this._text_13 = this.renderer.createText(parentRenderNode, '  \n  ', null);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._text_0,
            this._el_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._el_8,
            this._text_9,
            this._anchor_10,
            this._text_11,
            this._text_12,
            this._text_13
        ]), null);
        return null;
    };
    View_EventsListComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import14.TemplateRef) && (10 === requestNodeIndex))) {
            return this._TemplateRef_10_5;
        }
        if (((token === import16.NgFor) && (10 === requestNodeIndex))) {
            return this._NgFor_10_6.context;
        }
        return notFoundResult;
    };
    View_EventsListComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_10_0_0 = this.context.events;
        this._NgFor_10_6.check_ngForOf(currVal_10_0_0, throwOnChange, false);
        this._NgFor_10_6.ngDoCheck(this, this._anchor_10, throwOnChange);
        this._vc_10.detectChangesInNestedViews(throwOnChange);
    };
    View_EventsListComponent0.prototype.destroyInternal = function () {
        this._vc_10.destroyNestedViews();
    };
    View_EventsListComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 10)) {
            return new View_EventsListComponent1(this.viewUtils, this, 10, this._anchor_10, this._vc_10);
        }
        return null;
    };
    return View_EventsListComponent0;
}(import1.AppView));
export { View_EventsListComponent0 };
//# sourceMappingURL=events-list.component.ngfactory.js.map