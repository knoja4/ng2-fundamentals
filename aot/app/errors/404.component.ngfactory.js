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
import * as import0 from '../../../app/errors/404.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
var Wrapper_Error404Component = (function () {
    function Wrapper_Error404Component() {
        this._changed = false;
        this.context = new import0.Error404Component();
    }
    Wrapper_Error404Component.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_Error404Component.prototype.ngOnDestroy = function () {
    };
    Wrapper_Error404Component.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_Error404Component.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_Error404Component.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_Error404Component.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_Error404Component;
}());
export { Wrapper_Error404Component };
var renderType_Error404Component_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_Error404Component_Host0 = (function (_super) {
    __extends(View_Error404Component_Host0, _super);
    function View_Error404Component_Host0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_Error404Component_Host0, renderType_Error404Component_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_Error404Component_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'ng-component', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_Error404Component0(this.viewUtils, this, 0, this._el_0);
        this._Error404Component_0_3 = new Wrapper_Error404Component();
        this.compView_0.create(this._Error404Component_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._Error404Component_0_3.context);
    };
    View_Error404Component_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.Error404Component) && (0 === requestNodeIndex))) {
            return this._Error404Component_0_3.context;
        }
        return notFoundResult;
    };
    View_Error404Component_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._Error404Component_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_Error404Component_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_Error404Component_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_Error404Component_Host0;
}(import1.AppView));
export var Error404ComponentNgFactory = new import7.ComponentFactory('ng-component', View_Error404Component_Host0, import0.Error404Component);
var styles_Error404Component = ['.errorMessage[_ngcontent-%COMP%] { \n      margin-top:150px; \n      font-size: 170px;\n      text-align: center; \n    }'];
var renderType_Error404Component = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.Emulated, styles_Error404Component, {});
var View_Error404Component0 = (function (_super) {
    __extends(View_Error404Component0, _super);
    function View_Error404Component0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_Error404Component0, renderType_Error404Component, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_Error404Component0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n    ', null);
        this._el_1 = import3.createRenderElement(this.renderer, parentRenderNode, 'h1', new import3.InlineArray2(2, 'class', 'errorMessage'), null);
        this._text_2 = this.renderer.createText(this._el_1, '404\'d', null);
        this._text_3 = this.renderer.createText(parentRenderNode, '\n  ', null);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._text_0,
            this._el_1,
            this._text_2,
            this._text_3
        ]), null);
        return null;
    };
    return View_Error404Component0;
}(import1.AppView));
export { View_Error404Component0 };
//# sourceMappingURL=404.component.ngfactory.js.map