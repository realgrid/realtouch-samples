declare class RtObject {
    static destroy(obj: RtObject): null;
    private $_hash;
    private $_destroyed;
    private $_destroying;
    constructor(noHash?: boolean);
    destroy(): null;
    protected _doDestory(): void;
    get destroying(): boolean;
    get hash(): string;
    isMe(hash: string): boolean;
    protected _doAssignProps(source: any): boolean;
    assignProps(source: any): RtObject;
    assignObject(source: any, excludes: string[]): RtObject;
    toString(): string;
    toBool(v: any): boolean;
    toNum(v: any, def?: number): number;
}
declare abstract class RtWrappableObject extends RtObject {
    protected _wrapper: any;
    wrapper(): any;
    wrapperOrThis(): any;
    createWrapper<T>(clazz: {
        new (): T;
    }): T;
    setWrapper<T>(wrapper: T): T;
    isWrapper(w: any): boolean;
}
declare abstract class RtWrapper<T extends RtWrappableObject> extends RtObject {
    protected $_c: T;
    protected _doDestory(): void;
}
declare abstract class RtEventProvider<T> extends RtObject {
    private _listeners;
    addListener(listener: T): void;
    removeListener(listener: T): void;
    protected _fireEvent(event: string, ...args: any[]): any;
}
interface IEventArgs {
}
type RtEventHandler<T extends IEventArgs> = (args?: T) => void;

type RtPercentSize = string | number;
interface IPercentSize {
    size: number;
    fixed: boolean;
}
type SizeValue = string | number;
interface CSSStyles {
    background?: string;
    backgroundAttachment?: string;
    backgroundBlendMode?: string;
    backgroundClip?: string;
    backgroundColor?: string;
    backgroundImage?: string;
    backgroundOrigin?: string;
    backgroundPosition?: string;
    backgroundPositionX?: string;
    backgroundPositionY?: string;
    backgroundRepeat?: string;
    backgroundSize?: string;
    border?: string;
    borderBlock?: string;
    borderBlockColor?: string;
    borderBlockEnd?: string;
    borderBlockEndColor?: string;
    borderBlockEndStyle?: string;
    borderBlockEndWidth?: string;
    borderBlockStart?: string;
    borderBlockStartColor?: string;
    borderBlockStartStyle?: string;
    borderBlockStartWidth?: string;
    borderBlockStyle?: string;
    borderBlockWidth?: string;
    borderBottom?: string;
    borderBottomColor?: string;
    borderBottomLeftRadius?: string;
    borderBottomRightRadius?: string;
    borderBottomStyle?: string;
    borderBottomWidth?: string;
    borderCollapse?: string;
    borderColor?: string;
    borderEndEndRadius?: string;
    borderEndStartRadius?: string;
    borderImage?: string;
    borderImageOutset?: string;
    borderImageRepeat?: string;
    borderImageSlice?: string;
    borderImageSource?: string;
    borderImageWidth?: string;
    borderInline?: string;
    borderInlineColor?: string;
    borderInlineEnd?: string;
    borderInlineEndColor?: string;
    borderInlineEndStyle?: string;
    borderInlineEndWidth?: string;
    borderInlineStart?: string;
    borderInlineStartColor?: string;
    borderInlineStartStyle?: string;
    borderInlineStartWidth?: string;
    borderInlineStyle?: string;
    borderInlineWidth?: string;
    borderLeft?: string;
    borderLeftColor?: string;
    borderLeftStyle?: string;
    borderLeftWidth?: string;
    borderRadius?: string;
    borderRight?: string;
    borderRightColor?: string;
    borderRightStyle?: string;
    borderRightWidth?: string;
    borderSpacing?: string;
    borderStartEndRadius?: string;
    borderStartStartRadius?: string;
    borderStyle?: string;
    borderTop?: string;
    borderTopColor?: string;
    borderTopLeftRadius?: string;
    borderTopRightRadius?: string;
    borderTopStyle?: string;
    borderTopWidth?: string;
    borderWidth?: string;
    boxSizing?: 'content-box' | 'border-box' | '';
    color?: string;
    font?: string;
    fontFamily?: string;
    fontFeatureSettings?: string;
    fontKerning?: string;
    fontOpticalSizing?: string;
    fontSize?: string;
    fontSizeAdjust?: string;
    fontStretch?: string;
    fontStyle?: string;
    fontSynthesis?: string;
    fontVariant?: string;
    fontVariantCaps?: string;
    fontVariantEastAsian?: string;
    fontVariantLigatures?: string;
    fontVariantNumeric?: string;
    fontVariantPosition?: string;
    fontVariationSettings?: string;
    fontWeight?: string;
    padding?: string;
    paddingBlock?: string;
    paddingBlockEnd?: string;
    paddingBlockStart?: string;
    paddingBottom?: string;
    paddingInline?: string;
    paddingInlineEnd?: string;
    paddingInlineStart?: string;
    paddingLeft?: string;
    paddingRight?: string;
    paddingTop?: string;
    textOverflow?: string;
    fill?: string;
    stroke?: string;
    strokeWidth?: string;
}
interface CSSStyles2 extends CSSStyles {
    display?: string;
    position?: string;
    alignItems?: string;
    justifyContent?: string;
    flexDirection?: string;
    flexWrap?: string;
    gap?: string;
    flex?: string;
    width?: string;
    height?: string;
    minHeight?: string;
    minWidth?: string;
    maxWidth?: string;
    left?: string;
    top?: string;
    overflow?: string;
    marginRight?: string;
    whiteSpace?: string;
    margin?: string;
    marginLeft?: string;
    pointerEvents?: string;
}
type StyleOrClass = CSSStyles | string;
interface ISize {
    width: number;
    height: number;
}
interface IRect {
    x: number;
    y: number;
    width: number;
    height: number;
}
interface ISides {
    left: number;
    right: number;
    top: number;
    bottom: number;
    horz?: number;
    vert?: number;
}
interface IPadding {
    left: number;
    right: number;
    top: number;
    bottom: number;
    borderLeft: number;
    borderRight: number;
    borderTop: number;
    borderBottom: number;
    horz?: number;
    vert?: number;
}
declare class Registy<T extends RtObject> extends RtObject {
    private _items;
    protected _doDestory(): void;
    get(name: string): T;
    clear(): void;
    add(name: string, template: T): void;
    remove(name: string): void;
    removeAll(names: string[]): void;
}
declare enum RtDirection {
    UP = "up",
    DOWN = "down",
    LEFT = "left",
    RIGHT = "right"
}

declare class TemplateVars {
    private _vars;
    constructor(vars: any);
    out(value: string): any;
    assign(source: any): any;
}
declare class DummyVars extends TemplateVars {
    constructor();
    out(value: string): any;
    assign(source: any): any;
}
declare abstract class TemplateChild {
    protected _parent: TemplateLayout;
    tid: number;
    id: any;
    tag: string;
    props: any;
    class: string;
    classCallback: ((ctx: any) => string) | RtParamString;
    style: RtParamObject;
    styleCallback: ((ctx: any) => CSSStyles) | RtParamString;
    constructor(parent: TemplateLayout | null, source: any, vars: TemplateVars);
    updateProp(path: string[] | string, value: any, vars: any): boolean;
    protected abstract _doLoad(source: any, vars: TemplateVars): void;
    protected _loadProps(source: any, vars: TemplateVars): any;
    protected _loadStyle(source: any, vars: TemplateVars): RtParamObject;
    protected _loadRenderer(source: any, styles: any, vars: TemplateVars): RtParamObject | string;
}
declare class TemplateField extends TemplateChild {
    field: string | RtParamString;
    value: any | RtParamString;
    fields: string[] | RtParamString;
    renderer: string | RtParamObject;
    rendererStyles: any;
    editor: string | RtParamObject;
    editorStyles: any;
    protected _doLoad(source: any, vars: TemplateVars): void;
    private $_updateProp;
    updateProp(path: string[] | string, value: any, vars: any): boolean;
}
declare class TemplateLayout extends TemplateChild {
    defaultRenderer: string;
    layout: string;
    children: TemplateChild[];
    map: {
        [id: string]: TemplateChild;
    };
    count(): number;
    getDefaultRenderer(): string;
    get(index: number): TemplateChild;
    tagBy(tag: string): TemplateChild;
    fieldBy(tag: string): TemplateField;
    protected _doLoad(source: any, vars: TemplateVars): void;
    updateProp(path: string[] | string, value: any, vars: any): boolean;
    find(id: string): TemplateChild;
    _getFields(fields: string[]): void;
}
interface HtmlToken {
    node: number[];
    attr?: string;
    param: RtParamString;
    value?: any;
}
declare class TemplateHtmlLayout extends TemplateChild {
    dom: HTMLElement;
    tokens: HtmlToken[];
    constructor(dom: HTMLElement, vars: TemplateVars);
    protected _doLoad(source: any, vars: TemplateVars): void;
    find(id: string): any;
    private $_parseParams;
}
type TemplateLayoutType = TemplateLayout | TemplateHtmlLayout;
interface ITemplateProps {
    height?: number;
    minHeight?: number;
    maxHeight?: number;
    width?: number;
    minWidth?: number;
    maxWidth?: number;
}
interface IListTemplate {
    id: number;
    detailId?: number;
    collapsedId?: number;
    description?: string;
    target?: any;
    rowProps?: ITemplateProps;
    rowStyle?: RtRowStyles;
    layout?: TemplateLayoutType;
    detailed?: TemplateLayoutType;
    extra?: TemplateLayoutType;
    collapsed?: TemplateLayoutType;
    skeleton?: TemplateLayoutType;
    params?: object;
}
declare class ListTemplate extends RtObject implements IListTemplate {
    static readonly Vars: DummyVars;
    static createLayout(htmlProvider: ITemplateHtmlProvider, source: any, vars: TemplateVars): TemplateLayoutType;
    private _vars;
    id: number;
    detailId: any;
    collapsedId: any;
    description: string;
    target: any;
    rowProps: ITemplateProps;
    rowStyle: RtRowStyles;
    layout: TemplateLayoutType;
    detailed: TemplateLayoutType;
    extra: TemplateLayoutType;
    collapsed: TemplateLayoutType;
    brief: TemplateLayoutType;
    params: object;
    constructor(htmlProvider: ITemplateHtmlProvider, source: any, vars2: any);
    protected _doDestory(): void;
    getFields(): string[];
    find(id: string): TemplateChild;
    updateProp(id: string, prop: string, value: any): boolean;
    updateProps(id: string, props: {
        [prop: string]: any;
    }): boolean;
}
declare class TableTemplateCell extends TemplateField {
    row: number;
    col: number;
    rowspan: number;
    colspan: number;
    cellStyle: RtParamObject;
    protected _doLoad(src: any, vars: TemplateVars): void;
}
interface ITableTemplate extends IListTemplate {
    tag?: string;
    cells: TableTemplateCell[];
}
declare abstract class TableTemplate extends RtObject implements ITableTemplate {
    embed: boolean;
    id: number;
    detailId: number;
    tag: string;
    cells: TableTemplateCell[];
    rowProps: ITemplateProps;
    rowStyle: RtRowStyles;
    detailed: TemplateLayoutType;
    extra: TemplateLayoutType;
    constructor(htmlProvider: ITemplateHtmlProvider, source: any, embed: boolean);
    find(id: string): any;
    protected abstract _createCell(source: any, vars: any): TableTemplateCell;
    private $_loadCells;
}
declare class TableRowTemplate extends TableTemplate {
    headerTemplate: TableHeaderTemplate;
    footerTemplate: TableFooterTemplate;
    constructor(htmlProvider: ITemplateHtmlProvider, source: any);
    protected _createCell(source: any, vars: any): TableTemplateCell;
}
declare class TableHeaderTemplate extends TableTemplate {
    constructor(htmlProvider: ITemplateHtmlProvider, source: any, embed: boolean);
    protected _createCell(source: any, vars: any): TableTemplateCell;
}
declare class TableFooterTemplate extends TableTemplate {
    constructor(htmlProvider: ITemplateHtmlProvider, source: any, embed: boolean);
    protected _createCell(source: any, vars: any): TableTemplateCell;
}
type TemplateType = ListTemplate | TableTemplate;

declare class RtEditTool {
    private _control;
    private _touchElement;
    private _moveElement;
    private _draggable;
    private _dragTracker;
    private _touchX;
    private _touchY;
    private _prevX;
    private _prevY;
    protected _touches: {
        x: number;
        y: number;
        t: number;
    }[];
    protected _tapped: number;
    private _firstTime;
    private _secondTime;
    private _longTimer;
    protected _primaryId: number;
    constructor(control: RtControl);
    get control(): RtControl;
    get dragTracker(): DragTracker;
    setDragTracker(value: DragTracker): void;
    get dragging(): boolean;
    touchX(): number;
    touchY(): number;
    pointerDown(ev: PointerEvent): boolean;
    protected _stopEvent(ev: Event): void;
    private $_doDrag;
    private $_startMove;
    pointerMove(ev: PointerEvent): void;
    pointerUp(ev: PointerEvent): void;
    pointerCancel(ev: PointerEvent): void;
    pointerLeave(ev: PointerEvent): void;
    touchMove(ev: TouchEvent): boolean;
    click(ev: PointerEvent): void;
    dblClick(ev: MouseEvent): void;
    keyPress(ev: KeyboardEvent): void;
    wheel(ev: WheelEvent): void;
    requestDrag(request: DragRequest): void;
    getTrackerFromRequest(request: DragRequest): DragTracker;
    protected _setDraggable(value: boolean): void;
    protected _doClick(ev: PointerEvent, dom: Element): void;
    protected _doDblClick(dom: Element): void;
    protected _doPointerDown(dom: Element): boolean;
    protected _doPointerMove(dom: Element): void;
    protected _doPointerUp(dom: Element): boolean;
    protected _doPointerCancel(ev: PointerEvent): void;
    protected _doPointerLeave(ev: PointerEvent): void;
    protected _doTouchMove(ev: TouchEvent, dom: Element): boolean;
    protected _doLongPressed(dom: Element, x: number, y: number): void;
    protected _doKeyPress(ev: KeyboardEvent): void;
    protected _doWheel(ev: WheelEvent): boolean;
    protected _doSwipe(dom: Element, prevTracker: DragTracker, dir: RtDirection, duration: number, distance: number): boolean;
    protected _getDragTracker(dom: Element, dx: number, dy: number): DragTracker;
    private $_startDrag;
    private $_drag;
    private $_stopDragTracker;
    private $_pointerToPoint;
    private $_checkSwipe;
    protected _clearTouchEffects(): void;
}
declare abstract class DragRequest extends RtObject {
}
declare abstract class DragTracker extends RtObject {
    private _control;
    private _dragging;
    constructor(control: RtControl);
    get control(): RtControl;
    get dragging(): boolean;
    get startWhenCreated(): boolean;
    get cursor(): string;
    canSwipe(): boolean;
    start(eventTarget: Element, xStart: number, yStart: number, x: number, y: number): boolean;
    drag(eventTarget: Element, xPrev: number, yPrev: number, x: number, y: number): boolean;
    cancel(): void;
    drop(eventTarget: HTMLElement, x: number, y: number): void;
    swipe(dir: RtDirection, duration: number, distance: number): boolean;
    end(x?: number, y?: number): void;
    protected _doSwipe(dir: RtDirection, duration: number, distance: number): boolean;
    protected _showFeedback(x: number, y: number): void;
    protected _moveFeedback(x: number, y: number): void;
    protected _hideFeedback(): void;
    protected _doStart(eventTarget: Element, xStart: number, yStart: number, x: number, y: number): boolean;
    protected abstract _doDrag(eventTarget: Element, xPrev: number, yPrev: number, x: number, y: number): boolean;
    protected _doCanceled(): void;
    protected _canAccept(eventTarget: Element, x: number, y: number): boolean;
    protected _doCompleted(eventTarget: Element, x: number, y: number): void;
    protected _doEnded(x?: number, y?: number): void;
}

interface ISvgShape {
    width: number;
    height?: number;
    path: string;
}
declare class RtSvg extends RtObject {
    static create(doc: Document): SVGSVGElement;
    svg: SVGSVGElement;
    constructor(svg: SVGSVGElement | Document, className?: string);
    protected _doDestory(): void;
    attach(parent: Element): RtSvg;
    detach(): void;
    setClass(className: string): void;
    addClass(className: string): void;
    setStyle(style: any): void;
    setViewSize(w: number, h?: number): void;
    clearViewSize(): void;
    setSize(w: number, h: number): void;
    fillSize(): void;
    makeBackground(width?: number, height?: number): RtSvg;
    clear(): void;
    rect(x: number, y: number, w: number, h: number, style: object): SVGRectElement;
    circle(cx: number, cy: number, radius: number, style: object): SVGCircleElement;
    line(x1: number, y1: number, x2: number, y2: number, style?: object): SVGPathElement;
    polyline(pts: number[], style?: object): SVGPathElement;
    polylgon(pts: number[], style?: object): SVGPathElement;
    quadratic(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, style?: object): SVGPathElement;
    arc(cx: number, cy: number, rx: number, ry: number, startAngle: number, angle: number, clockwise: boolean, style?: object): SVGPathElement;
    path(d: string): SVGPathElement;
    setShape(shape: ISvgShape, clear?: boolean): RtSvg;
    _createPath(d: string): SVGPathElement;
    private $_angleToPos;
    _animateRevert(path: SVGPathElement, from: string, to: string, duration: number): void;
}

declare abstract class RtShape extends RtObject {
    static clone<T extends RtShape>(shape: T, clazz: {
        new (shape: T): T;
    }): T;
    protected _svg: RtSvg;
    protected _width: number;
    protected _height: number;
    constructor(doc: Document | RtShape | SVGSVGElement, className?: string, style?: object);
    protected _doDestory(): void;
    name(): string;
    dom(): SVGSVGElement;
    attached(): boolean;
    isDom(svg: SVGSVGElement): boolean;
    containsDom(dom: Element): boolean;
    setVisible(value: boolean): void;
    styleTarget(): CSSStyleDeclaration;
    resize(width: number, height?: number): boolean;
    setClass(className: string): void;
    setStyle(style: CSSStyles2): void;
    appendTo(dom: Element | RtElement): void;
    remove(): void;
    makeBackground(width: number, height?: number): RtShape;
    protected _doClone(shape: RtShape): void;
    protected _doInit(svg: RtSvg): void;
}
declare abstract class RtShapeRegistry extends Registy<RtShape> {
    abstract create<T extends RtShape>(clazz: {
        new (doc: any): T;
    }, svg: SVGSVGElement): T;
    abstract createStock(doc: Document | SVGSVGElement, shapeName: string, className?: string, style?: object): RtShape;
    abstract createCustom(shapeName: string, svg: SVGSVGElement, className: string): RtCustomShape;
    abstract registerCustom(shapeName: string, d: string, width?: number, height?: number): void;
    abstract getCustom(shapeName: string): {
        w: number;
        h: number;
        d: string;
    };
    createShape(doc: Document, shapeName: string): RtShape;
}
declare class RtCustomShape extends RtShape {
    static readonly NAME = "@custom";
    private _path;
    constructor(doc: Document | RtCustomShape | SVGSVGElement, className?: string, style?: object);
    setShape(shape: {
        w: number;
        h: number;
        d: string;
    }): RtCustomShape;
    protected _doClone(shape: RtCustomShape): void;
}

type RtScreenOrientationCallback = (orientation: RtScreenOrientation) => void;
declare abstract class RtControl extends RtWrappableObject {
    private _orientation;
    private _syncOrientation;
    private _screenOrientation;
    private _syncScreenOrientation;
    private _activeTool;
    longPressDelay: number;
    onOrientationChanged: RtScreenOrientationCallback;
    private _container;
    private _dom;
    private _root;
    private _inited;
    private _testing;
    private _dirty;
    private _requestTimer;
    private _defaultTool;
    private _tool;
    private _invalidElements;
    private _toAnimation;
    private _invalidateLock;
    private _lockDirty;
    private _cssVars;
    constructor(doc: Document, container: string | HTMLDivElement, className: string);
    protected _doDestory(): void;
    isInited(): boolean;
    isTesting(): boolean;
    doc(): Document;
    dom(): HTMLElement;
    width(): number;
    height(): number;
    activeTool(): RtEditTool;
    setSctiveTool(value: RtEditTool): void;
    orientation(): RtScreenOrientation;
    setOrientation(value: RtScreenOrientation): void;
    isPortrait(): boolean;
    isLandscape(): boolean;
    syncOrientation(): boolean;
    setSyncOrientation(value: boolean): void;
    screenOrientation(): RtScreenOrientation;
    syncScreenOrientation(): boolean;
    setScreenSyncOrientation(value: boolean): void;
    addElement(elt: RtElement): void;
    removeElement(elt: RtElement): void;
    invalidate(force?: boolean): void;
    invalidateLayout(force?: boolean): void;
    setLock(): void;
    releaseLock(validate?: boolean): void;
    lock(func: (control: RtControl) => void): void;
    silentLock(func: (control: RtControl) => void): void;
    elementOfDom(dom: Element): RtElement;
    getBounds(): DOMRect;
    toElement(elt: RtElement, x: number, y: number): {
        x: number;
        y: number;
    };
    setAnimation(to?: number): void;
    fling(distance: number, duration: number): void;
    getCssVar(name: string): string;
    abstract shapes(): RtShapeRegistry;
    abstract useImage(src: string): void;
    protected _setTesting(): void;
    protected _setSize(w: number, h: number): void;
    private $_getScreenOrientation;
    private $_getOrientation;
    private $_checkOrientation;
    private $_addListener;
    protected _resigterEventHandlers(dom: HTMLElement): void;
    protected _unresigterEventHandlers(dom: HTMLElement): void;
    private $_orientationChanged;
    protected _doOrientationChanged(orientation: RtScreenOrientation): void;
    protected abstract _creatDefaultTool(): RtEditTool;
    protected _prepareRenderers(dom: HTMLElement): void;
    private $_initControl;
    protected abstract _doInitModel(): void;
    protected abstract _doInitView(doc: Document): void;
    protected _render(): void;
    private $_invalidateElement;
    private $_requestRender;
    updateNow(): void;
    private $_render;
    protected abstract _doRender(bounds: IRect): void;
    protected _doBeforeRender(): void;
    protected _doAfterRender(): void;
    protected _doControlObjectChanged(obj: RtControlObject, tag: string): void;
    protected _doClick(event: PointerEvent): void;
    protected _doDblClick(event: PointerEvent): void;
    protected _doTouchMove(event: TouchEvent): boolean;
    protected _doPointerDown(event: PointerEvent): boolean;
    protected _doPointerMove(event: PointerEvent): void;
    protected _doPointerUp(event: PointerEvent): void;
    protected _doPointerCancel(event: PointerEvent): void;
    protected _doPointerLeave(event: PointerEvent): void;
    protected _doKeyPress(event: KeyboardEvent): void;
    protected _doWheel(event: WheelEvent): void;
    private _screenOrientationChangeHandler;
    static currentInput: string;
    private _windowResizeHandler;
    protected _windowResized(): void;
    private _clickHandler;
    private _dblClickHandler;
    private _touchMoveHandler;
    private _pointerDownHandler;
    private _pointerMoveHandler;
    private _pointerUpHandler;
    private _pointerCancelHandler;
    private _pointerLeaveHandler;
    private _keyPressHandler;
    private _wheelHandler;
}
type RtControlOrWrapper = RtControl | RtWrapper<RtControl>;
declare class RtElement extends RtObject {
    static readonly TESTING = false;
    static BOUNDING: boolean;
    static readonly BOUNDING_BORDER = "1px solid #ff000080";
    static readonly BOUNDING_BORDER_2 = "1px solid #0000ff40";
    static ANIMATABLE: boolean;
    private _visible;
    private _x;
    private _y;
    private _width;
    private _height;
    private _dom;
    private _content;
    private _parent;
    private _children;
    private _dirty;
    constructor(doc: Document, contentable: boolean, className: string, tag: string);
    protected _doDestory(): void;
    get doc(): Document;
    get win(): Window;
    get dom(): HTMLElement;
    get content(): HTMLElement;
    get parent(): RtElement;
    get childCount(): number;
    get control(): RtControl;
    get x(): number;
    right(): number;
    get y(): number;
    bottom(): number;
    get width(): number;
    get height(): number;
    get visible(): boolean;
    set visible(value: boolean);
    setVisible(value: boolean): boolean;
    _internalVisible(visible: boolean): boolean;
    setHidden(value: boolean): void;
    canAnimate(): boolean;
    setAnimating(value: boolean): void;
    animating(): boolean;
    get hidden(): boolean;
    set hidden(value: boolean);
    setStyles(style: CSSStyles2): RtElement;
    getClientSize(): ISize;
    getOffsetSize(): ISize;
    getOffsetBounds(): IRect;
    getClientRect(): DOMRect;
    getSize(): ISize;
    getBounds(): IRect;
    validate(): void;
    getLabel(): HTMLElement;
    getChildren(): RtElement[];
    getChild(index: number): RtElement;
    indexOf(child: RtElement): number;
    contains(elt: RtElement, deep?: boolean): boolean;
    insertChild(at: number, child: RtElement): void;
    insertBefore(child: RtElement, before: RtElement): void;
    addChild(child: RtElement): void;
    remove(): void;
    removeChildAt(at: number): RtElement;
    removeChild(child: RtElement): RtElement;
    removeLast(): RtElement;
    clear(): boolean;
    moveIndex(child: RtElement, newIndex: number): boolean;
    isDom(dom: Element): boolean;
    containsDom(dom: Element): boolean;
    isView(dom: Element): boolean;
    containsClass(className: string): boolean;
    domByClass(className: string, text?: string | string[]): HTMLElement;
    childOfDom(dom: Element): RtElement;
    hasData(name: string): boolean;
    setData(name: string, value: any): void;
    setBounds(x: number, y: number, width: number, height: number): RtElement;
    setRect(r: IRect): RtElement;
    moveX(x: number): RtElement;
    moveY(y: number): RtElement;
    move(x: number, y: number): RtElement;
    center(width: number, height: number): RtElement;
    moveI(x: number, y: number): RtElement;
    resetPosition(): void;
    setWidth(width: number): RtElement;
    setHeight(height: number): RtElement;
    clearSize(): void;
    resize(width: number, height: number): RtElement;
    internalClearSize(): RtElement;
    internalResize(width: number, height: number): RtElement;
    internalSetSize(width: number, height: number): RtElement;
    syncSize(): void;
    resizeContent(width: number, height: number): RtElement;
    setContentBounds(x: number, y: number, w: number, h: number): void;
    saveSize(): RtElement;
    forEach(callback: (child: RtElement, index?: number, count?: number) => void): void;
    some(callback: (child: RtElement, index?: number, count?: number) => boolean): void;
    findChild(selector: (child: RtElement, index?: number, count?: number) => boolean): RtElement;
    findDescendant(selector: (child: RtElement) => boolean): RtElement;
    findDescendants(selector: (child: RtElement) => boolean, elements: RtElement[]): void;
    applyStyle(style: CSSStyles): void;
    setImportantStyle(css: CSSStyleDeclaration, property: string, value: string): RtElement;
    setPressed(value: boolean): void;
    appendSpan(doc?: Document, className?: string): HTMLSpanElement;
    appendDom<T extends HTMLElement | SVGSVGElement>(dom: T): T;
    removeDom(dom: HTMLElement): void;
    detachDom(): void;
    createElement(tag: string): HTMLElement;
    setClassName(clazz: string): void;
    protected _testing(): boolean;
    protected _doInitStyle(style: CSSStyles2): void;
    protected _doInitDom(doc: Document, dom: HTMLElement): void;
    protected _doInitContent(doc: Document, div: HTMLElement): void;
    protected _getPositionStyle(): string;
    protected _getDisplayStyle(): string;
    protected _getContentPosition(): string;
    protected _getOverflow(): string;
    private $_attached;
    protected _doAttached(): void;
    private $_detached;
    protected _doDetached(oldParent: RtElement): void;
    private $_removeChild;
    protected _changed(): void;
}
declare abstract class RtControlObject extends RtWrappableObject {
    private _control;
    constructor(control: RtControl);
    control(): RtControl;
    protected _changed(tag?: string): void;
}

declare enum RtDataType {
    TEXT = "text",
    NUMBER = "number",
    BOOL = "bool",
    DATE = "date",
    BIGINT = "bigint",
    ANY = "any"
}
interface IRtDataField {
    name: string;
    label?: string;
    type?: RtDataType;
    default?: any;
    sortable?: boolean;
    required?: boolean;
    minimum?: any;
    maximum?: any;
    domain?: any[];
}
declare class ListDataField {
    static create(name: string | IRtDataField, type?: RtDataType): ListDataField;
    static createFields(fields: IRtDataField[]): ListDataField[];
    static readonly comparers: {
        text: (v1: any, v2: any) => 0 | 1 | -1;
        number: (v1: any, v2: any) => 0 | 1 | -1;
        bool: (v1: any, v2: any) => number;
        date: (v1: any, v2: any) => number;
        bigint: (v1: any, v2: any) => 0 | 1 | -1;
    };
    private _label;
    description: string;
    default: any;
    sortable: boolean;
    sourceProp: string;
    required: boolean;
    minimum: any;
    maximum: any;
    domain: any[];
    private _owner;
    private _name;
    private _type;
    readValue: (v: any) => any;
    comparer: (v1: any, v2: any) => number;
    protected constructor(name: string, type?: RtDataType);
    get name(): string;
    get type(): RtDataType;
    get label(): string;
    set label(value: string);
    displayText(): string;
    proxy(): IRtDataField;
    protected _changed(): void;
}
type RtValueExtracter = (values: RtRowValues) => any;
declare class DerivedField extends ListDataField {
    static createDerived(name: string, extracter: RtValueExtracter, type?: RtDataType): DerivedField;
    private _extracter;
    private constructor();
    extract(values: object): any;
}
interface IRtDerivedField extends IRtDataField {
    extractor: RtValueExtracter;
}
declare enum RtDataRowState {
    UPDATED = "u",
    DELETED = "d"
}
type RtRowValues = {
    [field: string]: any;
};
type RtFieldMap = {
    [name: string]: ListDataField;
};
type RtDerivedFieldMap = {
    [name: string]: DerivedField;
};
type RtDataValueReader = (prop: string, value: any) => any;
declare class DataRow {
    static createRow(fields: RtFieldMap, dfields: RtDerivedFieldMap, values: RtRowValues, reader: RtDataValueReader): DataRow;
    static createRow2(fields: RtFieldMap, dfields: RtDerivedFieldMap, values: RtRowValues): DataRow;
    static findRow(drows: DataRow[], values: {
        [field: string]: any;
    }, from: number, to: number): number;
    static findRows(drows: DataRow[], values: {
        [field: string]: any;
    }, from: number, to: number): number[];
    static findDistinctRows(drows: DataRow[], fields: string[], from: number, to: number): number[];
    static findNearest(drows: DataRow[], field: string, value: any, from: number, to: number): number;
    id: number;
    row: number;
    values: any;
    save: any;
    state: RtDataRowState;
    tidx: number;
    tag: any;
    getValues(fields: string[]): any;
    match(obj: {
        [field: string]: any;
    }): boolean;
    getProp(field: string, props: string[]): any;
}
interface IDataViewWrapper {
}
interface IDataView {
    addListener(listener: any): void;
    removeListener(listener: any): void;
    source(): IDataView;
    wrapper(): IDataViewWrapper;
    wrapperOrThis(): ListDataWrapper;
    name(): string;
    readOnly(): boolean;
    fields(): ListDataField[];
    fieldByName(name: string): ListDataField;
    rowCount(): number;
    visRowCount(): number;
    rowById(rowid: number): number;
    internalRowId(row: number): number;
    getRowId(row: number): number;
    isLast(row: number): boolean;
    isMaster(row: number): boolean;
    levelRowOfRow(row: number): number;
    findRow(values: {
        [field: string]: any;
    }, from: number, to: number): number;
    findRows(values: {
        [field: string]: any;
    }, from: number, to: number): number[];
    findDistinctRows(fields: string[], from: number, to: number): number[];
    findNeareastRow(field: string, value: any): number;
    addFlags(owner: RtObject): DataFlags;
    removeFlags(owner: RtObject): void;
    getFlags(owner: RtObject): DataFlags;
    flagChanged(flags: DataFlags, row: number, flag: number): void;
    flagsChanged(flags: DataFlags, rows: number[], flag: number): void;
    flagAllChanged(flags: DataFlags, flag: number): void;
    getValue(row: number, field: string, fieldCheck: boolean): any;
    getProp(row: number, field: string, prop: string[], fieldCheck: boolean): any;
    getRowValues(row: number): RtRowValues;
    internalRowValues(row: number): RtRowValues;
    getValues(row: number, fields: string[], fieldCheck: boolean): RtRowValues;
    getFieldValues(field: string, from?: number, to?: number): any[];
    updateValue(row: number, field: string, value: any): boolean;
    getSummary(field: string): IFieldSummary;
    getGroupSummary(field: string, start: number, end: number): IFieldSummary;
    getRows(): DataRow[];
    deleteRow(row: number, force: boolean): void;
    deleteRows(rows: number[], force: boolean): void;
    updateRow(row: number, values: RtRowValues, forceEmpty: boolean, forceUpdate: boolean): boolean;
    appendRow(values: RtRowValues): boolean;
    getRowState(row: number): RtDataRowState;
    internalRowState(row: number): RtDataRowState;
    canMove(): boolean;
    canSort(): boolean;
}
interface ISimpleDataView extends IDataView {
    fields(): ListDataField[];
    containsField(field: string): boolean;
    checkField(field: string): void;
    fieldByName(field: string): ListDataField;
    getDataRow(row: number): DataRow;
    rowOfDataRow(dataRow: DataRow): number;
    getAllValues(rows: number[], fields: string[], fieldCheck: boolean): RtRowValues[];
}
interface IFieldSummary {
    count: number;
    sum: number;
    min: number;
    max: number;
    avg: number;
    std: number;
    stdp: number;
    var: number;
    varp: number;
    ncount: number;
    navg: number;
    nstd: number;
    nstdp: number;
    nvar: number;
    nvarp: number;
}
declare class DataFlags extends RtObject {
    static readonly MAX_UI_FLAG = 15;
    static readonly MAX_USER_FLAG = 16;
    static isCheckedFlag(flag: number): boolean;
    static isCheckableFlag(flag: number): boolean;
    static isDetailedFlag(flag: number): boolean;
    static isUserFlag(flag: number): number;
    private _data;
    _rows: number[];
    _checkedCount: number;
    constructor(data: ListDataSource<any>);
    protected _doDestory(): void;
    get count(): number;
    checkedCount(): number;
    isChecked(row: number): boolean;
    setChecked(row: number, checked: boolean): boolean;
    checkRows(rows: number[], checked: boolean): number[];
    checkRange(row: number, count: number, checked: boolean): number[];
    checkAll(checked: boolean): boolean;
    getCheckedRows(checked: boolean): number[];
    isCheckable(row: number): boolean;
    setCheckable(row: number, checkable: boolean): boolean;
    setCheckables(rows: number[], checkable: boolean): number[];
    setCheckableRange(row: number, count: number, checkable: boolean): number[];
    setCheckableAll(checkable: boolean): boolean;
    getCheckableRows(checkable: boolean, rows: number[]): number[];
    getSearchedRows(): number[];
    isSearched(row: number): boolean;
    setSearched(row: number, searched: boolean): boolean;
    clearSearched(): boolean;
    isDetailed(row: number): boolean;
    setDetailed(row: number, detailed: boolean, exclusive: boolean): boolean;
    detailRows(rows: number[], detailed: boolean): number[];
    detailRange(row: number, count: number, detailed: boolean): number[];
    detailAll(detailed: boolean): boolean;
    getDetailedRows(detailed: boolean): number[];
    hasUserFlag(row: number, flag: number): boolean;
    getUserFlaggedRows(flag: number, set: boolean): number[];
    setUserFlag(row: number, flag: number, set: boolean): boolean;
    setUserFlags(rows: number[], flag: number, set: boolean): number[];
    setUserFlagRange(row: number, count: number, flag: number, set: boolean): number[];
    setUserFlagAll(flag: number, set: boolean): boolean;
    hasUiFlag(row: number, flag: number): boolean;
    getUiFlaggedRows(flag: number, set: boolean): number[];
    setUiFlag(row: number, flag: number, set: boolean): boolean;
    setUiFlags(rows: number[], flag: number, set: boolean): number[];
    setUiFlagRange(row: number, count: number, flag: number, set: boolean): number[];
    setUiFlagAll(flag: number, set: boolean): boolean;
    private $_setFlag;
    private $_changeFlag;
    private $_changeRows;
    private $_changeRange;
    private $_changeAll;
    private $_getFlagged;
}
declare class DataFlagsCollection extends RtObject {
    private _data;
    private _flags;
    constructor(data: ListDataSource<any>);
    protected _doDestory(): void;
    isEmpty(): boolean;
    _rowAdded(row: number): void;
    _rowsAdded(rows: number[]): void;
    _rowRangeAdded(row: number, count: number): void;
    _cleared(oldCount: number): void;
    _rowDeleted(row: number): void;
    _rowsDeleted(rows: number[]): void;
    _rangeDeleted(row: number, count: number): void;
    _rowMoved(row: number, to: number): void;
    _rowsMoved(row: number, count: number, to: number): void;
    _reset(drows: DataRow[]): void;
    get(owner: RtObject): DataFlags;
    add(owner: RtObject): DataFlags;
    remove(owner: RtObject): void;
}
interface IListDataObjectListener {
    onDataFlagChanged?(data: IDataView, flags: DataFlags, row: number, flag: number): void;
    onDataFlagsChanged?(data: IDataView, flags: DataFlags, rows: number[], flag: number): void;
    onDataFlagAllChanged?(data: IDataView, flags: DataFlags, flag: number): void;
}
declare abstract class ListDataSource<T extends IListDataObjectListener> extends RtEventProvider<T> {
    static checkRow(dv: IDataView, row: number): void;
    static checkRow2(dv: IDataView, row: number, inclusive: boolean): void;
    static checkRows(dv: IDataView, rows: number[]): void;
    private _name;
    protected _flags: DataFlagsCollection;
    constructor(name: string);
    name(): string;
    abstract rowCount(): number;
    addFlags(owner: RtObject): DataFlags;
    removeFlags(owner: RtObject): void;
    getFlags(owner: RtObject): DataFlags;
    flagChanged(flags: DataFlags, row: number, flag: number): void;
    flagsChanged(flags: DataFlags, rows: number[], flag: number): void;
    flagAllChanged(flags: DataFlags, flag: number): void;
    abstract deleteRow(row: number, force: boolean): void;
    abstract deleteRows(rows: number[], force: boolean): void;
}
type ListDataWrapper = IDataView | IDataViewWrapper;

interface ITemplateHtmlProvider {
    doc(): Document;
    getTemplateHtml(id: string): HTMLElement;
}
declare class RtParam {
    static create(name: string, defaultValue?: string, format?: string): RtParam;
    source: string;
    name: string;
    field: string;
    stock: boolean;
    default?: string;
    format?: string;
    constructor(source: string, name: string, defaultValue: string, format: string);
}
type RtParamValues = {
    [param: string]: any;
};
interface IRtParamInflater {
    inflateParam(target: any, field: string, param: RtParam): any;
    inflateStock(target: any, field: string, param: RtParam): any;
    templateParams?: object;
}
type RtParamObject = {
    [key: string]: string | RtParamString;
};
declare class RtParamString {
    static parse(s: any): RtParamString | any;
    static load(source: any): RtParamObject;
    private _params;
    private constructor();
    get count(): number;
    get(index: number): RtParam | string;
    private _args;
    inflate(context: any, target: any, field: string, inflater: RtParamValues | IRtParamInflater): any;
}
declare enum RtRowType {
    NORMAL = "normal",
    TABLE = "table"
}
declare enum RtOrientation {
    HORIZONTAL = "horizontal",
    VERTICAL = "vertical"
}
declare enum RtScreenOrientation {
    PORTRAIT = "portrait",
    LANDSCAPE = "landscape"
}
declare enum RtItemsAlign {
    START = "start",
    CENTER = "center",
    END = "end"
}
declare enum RtHorizontalAlign {
    LEFT = "left",
    CENTER = "center",
    RIGHT = "right"
}
declare enum RtVerticalAlign {
    TOP = "top",
    MIDDLE = "middle",
    BOTTOM = "bottom"
}
declare enum RtItemsArrange {
    START = "start",
    END = "end",
    CENTER = "center",
    SPACE_BETWEEN = "spaceBetween",
    SPACE_AROUND = "spaceAround"
}
interface IRtIconSet {
    width: number;
    height: number;
    root?: string;
    icons: {
        [name: string]: string;
    };
}
interface IRtIconInfo {
    width: number;
    height: number;
    url: string;
}
declare class RtIconSet extends RtObject {
    private _width;
    private _height;
    private _root;
    private _icons;
    constructor(config: IRtIconSet);
    get width(): number;
    get height(): number;
    getUrl(name: string): string;
    get(name: string): string;
    set(name: string, url: string): void;
}
declare enum RtSortDirection {
    ASCENDING = "ascending",
    DESCENDING = "descending"
}
interface IRtTemplateRowStyles {
    default?: StyleOrClass;
    alternate?: StyleOrClass;
    updated?: StyleOrClass;
    deleted?: StyleOrClass;
    checked?: StyleOrClass;
    selected?: StyleOrClass;
    searched?: StyleOrClass;
}
interface IRtRowStyleArgs {
    control: RtControlOrWrapper;
    data: IDataViewWrapper;
    row: number;
}
type RtRowStyleCallback = (args: IRtRowStyleArgs) => StyleOrClass;
declare class RtRowStyles implements IRtTemplateRowStyles {
    callback: (args: IRtRowStyleArgs) => StyleOrClass;
    default: StyleOrClass;
    alternate: StyleOrClass;
    updated: StyleOrClass;
    deleted: StyleOrClass;
    checked: StyleOrClass;
    selected: StyleOrClass;
    searched: StyleOrClass;
}
declare enum RtMode {
    DEFAULT = "default",
    CARD = "card"
}
declare enum RtRenderMode {
    DEFAULT = "default",
    PRE = "pre",
    FULL = "full"
}
type RtTextFormatter = (value: string) => string;
type RtBooleanFormatter = (value: boolean) => string;
type RtNumberFormatter = (value: number) => string;
type RtDateFormatter = (date: Date) => string;
declare enum RtRowClickAction {
    NONE = "none",
    CHECK = "check",
    COMMAND = "command",
    EXPAND = "expand",
    DETAIL = "detail",
    DETAILEX = "detailex",
    INFO = "info",
    EDIT = "edit",
    LINK = "link",
    SELECT = "select",
    MOVE = "move",
    MENU = "menu"
}
declare enum RtOverScrollEffect {
    NONE = "none",
    BALLOON = "balloon",
    BOUNCE = "bounce"
}
declare enum RtRowSwipeAction {
    NONE = "none",
    COMMAND = "command",
    PAGE = "page",
    TAP = "tap",
    INFO = "info",
    EDIT = "edit",
    ROW_BAR = "rowBar",
    EDIT_BAR = "editBar"
}
declare enum RtRowChangeDirection {
    DEFAULT = "default",
    HORIZONTAL = "horizontal",
    VERTICAL = "vertical",
    BOTH = "both"
}
declare enum RtPanelType {
    FORM = "form",
    BUTTON = "button",
    SEARCH = "search"
}
declare enum RtButtonLabelPosition {
    NONE = "none",
    LEFT = "left",
    RIGHT = "right",
    TOP = "top",
    BOTTOM = "bottom"
}
interface IRtButtonEnableArgs {
    control: RtControl | RtWrapper<RtControl>;
    button: IRtButtonModel;
}
type RtButtonEnableCallback = (args: IRtButtonEnableArgs) => boolean;
interface IRtButtonModel {
    name?: string;
    className?: string;
    style?: CSSStyles;
    label?: string;
    labelPosition?: RtButtonLabelPosition;
    shape?: string;
    shapeWidth?: number;
    shapeHeight?: number;
    imageUrl?: string;
    imageWidth?: number;
    imageHeight?: number;
    enabled?: boolean | RtButtonEnableCallback;
    isEnabled?(control: RtControl | RtWrapper<RtControl>): boolean;
}
declare enum RtBarPosition {
    AFTER = "after",
    BEFORE = "before"
}
interface IRtOptionItemOwner extends ITemplateHtmlProvider {
    optionItemChanged(option: any): void;
    registerTemplate(name: string, template: any, vars: any, shared: boolean): TemplateType;
    getTemplate(template: string): TemplateType;
}
declare abstract class RtWrappableOptions<T extends RtWrappableObject> extends RtWrappableObject {
    private _owner;
    protected _defs: T;
    constructor(owner: IRtOptionItemOwner, defaults: T);
    protected abstract _doInitDefaults(): void;
    protected owner(): IRtOptionItemOwner;
    protected _changed(): void;
}
interface IRtSeriesValue {
    min?: number;
    max?: number;
    hasBelow?: boolean;
    values: number[];
}
declare enum RtSlideDirection {
    DEFAULT = "default",
    RANDOM = "random",
    LEFT = "left",
    RIGHT = "right",
    UP = "up",
    DOWN = "down"
}
interface IRtFieldValue {
    field: string;
    value: any;
}
declare enum RtGroupIndentMode {
    ROW = "row",
    BODY = "body"
}
declare enum RtRowIndents {
    NONE = "none",
    PARENT = "parent",
    INNER = "inner"
}
interface IRtRowParamArgs {
    context: any;
    control: RtControlOrWrapper;
    row: number;
    field: string;
    values: any;
    value: any;
}
interface IRtShowPanelOptions {
    container: HTMLElement;
    left: string | number;
    top: string | number;
    width: string | number;
    height: string | number;
    callback: (model: any) => void;
}
interface IRendererScope {
    sortMarkVisible?: boolean;
    sortOrderVisible?: boolean;
}
declare enum RtBadgePosition {
    TOP_LEFT = "topLeft",
    TOP_RIGHT = "topRight",
    BOTTOM_LEFT = "bottomLeft",
    BOTTOM_RIGHT = "bottomRight"
}
interface IRtStyleCallbackArgs {
    row: number;
    value: any;
}

declare enum RtDataValueSourceType {
    JSON = "json",
    FIELD = "field",
    CSV = "csv",
    TSV = "tsv"
}
interface IRtDataValueSource {
    type?: RtDataValueSourceType;
    values: any;
    fieldMap?: {
        [prop: string]: string;
    };
    reader?: RtDataValueReader;
    rowCount?: number;
    lengthField?: string;
    fieldHeader?: number;
    fieldCount?: number;
    startRow?: number;
    quoted?: boolean;
    multiTabs?: boolean;
    skipBlank?: boolean;
    trimLast?: boolean;
}
interface IListDataListener extends IListDataObjectListener {
    onDataValueUpdated?(data: IDataView, row: number, field: string, value: any, oldValue: RtRowValues): void;
    onDataRowUpdated?(data: IDataView, row: number, oldValues: RtRowValues): void;
    onDataRowsUpdated?(data: IDataView, rows: number[], oldValues: RtRowValues[]): void;
    onDataRowAdded?(data: IDataView, row: number): void;
    onDataRowsAdded?(data: IDataView, row: number, count: number): void;
    onDataCleared?(data: IDataView, oldCount: number): void;
    onDataLoaded?(data: IDataView, oldCount: number): void;
    onDataRowDeleted?(data: IDataView, row: number, rowid: number): void;
    onDataRowsDeleted?(data: IDataView, rows: number[], rowids: number[]): void;
    onDataRangeDeleted?(data: IDataView, row: number, count: number): void;
    onDataRowMoved?(data: IDataView, from: number, to: number): void;
    onDataRowsMoved?(data: IDataView, from: number, count: number, to: number): void;
    onDataCountChanged?(data: IDataView, newCount: number, oldCount: number): void;
    onDataStateChanged?(data: IDataView, row: number): void;
    onDataStatesChanged?(data: IDataView, rows: number[]): void;
    onDataChanged?(data: IDataView): void;
    onDataEndUpdated?(data: IDataView, newCount: number, oldCount: number): void;
}
type DataOrWrapper = ListData | IDataViewWrapper;
type RtDataValidator = (dv: DataOrWrapper, row: number, values: any) => string | {
    field: string;
    message: string;
};
interface IRtDataOptions {
    name?: string;
    title?: string;
    readOnly?: boolean;
    fields?: (IRtDataField | string)[];
    derivedFields?: IRtDerivedField[];
    valuesByField?: boolean;
    softDeleting?: boolean;
    restorable?: boolean;
    validator?: RtDataValidator;
}
declare abstract class ListData extends ListDataSource<IListDataListener> implements ISimpleDataView {
    private _wrapper;
    private _title;
    private _readOnly;
    private _softDeleting;
    private _restorable;
    private _validator;
    private _fields;
    private _derivedFields;
    private _fieldNames;
    private _fieldMap;
    private _derivedMap;
    protected _rows: DataRow[];
    private _summaries;
    private _prevCount;
    private _evLock;
    private _args;
    constructor(name: string, options: IRtDataOptions, source?: any[] | IRtDataValueSource, wrapper?: IDataViewWrapper);
    onValueUpdate: RtEventHandler<{
        data: DataOrWrapper;
        row: number;
        field: string;
        value: any;
        oldValue: any;
    }>;
    onRowsUpdate: RtEventHandler<{
        data: DataOrWrapper;
        rows: number[];
        oldValues: RtRowValues[];
    }>;
    onRowsAdd: RtEventHandler<{
        data: DataOrWrapper;
        row: number;
        count: number;
    }>;
    onRowsClear: RtEventHandler<{
        data: DataOrWrapper;
        oldCount: number;
    }>;
    onRowsDelete: RtEventHandler<{
        data: DataOrWrapper;
        rows: number[];
        oldValues: RtRowValues[];
    }>;
    onRowMove: RtEventHandler<{
        data: DataOrWrapper;
        from: number;
        to: number;
    }>;
    onRowsMove: RtEventHandler<{
        data: DataOrWrapper;
        from: number;
        count: number;
        to: number;
    }>;
    onRowStateChange: RtEventHandler<{
        data: DataOrWrapper;
        row: number;
    }>;
    onRowStatesChange: RtEventHandler<{
        data: DataOrWrapper;
        rows: number[];
    }>;
    onRowCountChange: RtEventHandler<{
        data: DataOrWrapper;
        newCount: number;
        oldCount: number;
    }>;
    onDataChange: RtEventHandler<{
        data: DataOrWrapper;
    }>;
    onEndUpdate: RtEventHandler<{
        data: DataOrWrapper;
        newCount: number;
        oldCount: number;
    }>;
    wrapper(): IDataViewWrapper;
    wrapperOrThis(): IDataViewWrapper | IDataView;
    title(): string;
    readOnly(): boolean;
    softDeleting(): boolean;
    restorable(): boolean;
    validator(): RtDataValidator;
    fieldCount(): number;
    rowCount(): number;
    setRowCount(value: number): void;
    visRowCount(): number;
    fields(): ListDataField[];
    derivedFields(): DerivedField[];
    source(): IDataView;
    canSort(): boolean;
    canMove(): boolean;
    rowById(rowid: number): number;
    internalRowId(row: number): number;
    getRowId(row: number): number;
    levelRowOfRow(row: number): number;
    getDataRow(row: number): DataRow;
    rowOfDataRow(dataRow: DataRow): number;
    isLast(row: number): boolean;
    isMaster(row: number): boolean;
    containsField(field: string): boolean;
    getField(index: number): ListDataField;
    fieldByName(name: string): ListDataField;
    getFieldNames(): string[];
    isSortable(field: string): boolean;
    setSortable(fields: string | string[], sortable: boolean): void;
    isEmpty(row: number): boolean;
    getRowValues(row: number): RtRowValues;
    internalRowValues(row: number): RtRowValues;
    internalRowsValues(rows: number[]): RtRowValues[];
    getValue(row: number, field: string, fieldCheck: boolean): any;
    getProp(row: number, field: string, prop: string[], fieldCheck: boolean): any;
    getValueAt(row: number, fieldIndex: number): any;
    getValues(row: number, fields: string[], fieldCheck: boolean): RtRowValues;
    getAllValues(rows: number[], fields: string[], fieldCheck: boolean): RtRowValues[];
    getFieldValues(field: string, from?: number, to?: number): any[];
    beginUpdate(): void;
    endUpdate(): void;
    updateValue(row: number, field: string, value: any): boolean;
    private $_updateRow;
    updateRow(row: number, values: RtRowValues, forceEmpty: boolean, forceUpdate: boolean): boolean;
    updateRows(rows: number[], values: RtRowValues[], forceEmpty: boolean, forceUpdate: boolean): number[];
    updateRange(row: number, count: number, values: RtRowValues[], forceEmpty: boolean, forceUpdate: boolean): number[];
    protected _clearRows(force: boolean): boolean;
    deleteAll(force: boolean): boolean;
    deleteRow(row: number, force: boolean): void;
    deleteRows(rows: number[], force: boolean): number[];
    deleteRange(row: number, count: number, force: boolean): number;
    private $_checkInsert;
    insertRow(row: number, values: RtRowValues): boolean;
    appendRow(values: RtRowValues): boolean;
    insertRows(row: number, values: RtRowValues[] | IRtDataValueSource): number;
    appendRows(values: RtRowValues[] | IRtDataValueSource): number;
    findRow(where: {
        [field: string]: any;
    }, from?: number, to?: number): number;
    findRows(where: {
        [field: string]: any;
    }, from?: number, to?: number): number[];
    findDistinctRows(fields: string[], from?: number, to?: number): number[];
    findNeareastRow(field: string, value: any): number;
    getSummary(field: string): IFieldSummary;
    getGroupSummary(field: string, start: number, end: number): IFieldSummary;
    getRowState(row: number): RtDataRowState;
    internalRowState(row: number): RtDataRowState;
    private $_restore;
    restoreRow(row: number): boolean;
    restoreRows(rows: number[]): number[];
    restoreAllRows(): number;
    restoreUpdatedRows(): number;
    restoreDeletedRows(): number;
    moveRow(from: number, to: number): boolean;
    moveRows(from: number, count: number, to: number): number;
    protected _dataChanged(w: IDataViewWrapper | IDataView): void;
    private $_checkReadOnly;
    private $_checkRow;
    private $_checkRows;
    private $_checkUpdate;
    checkField(field: string): void;
    private $_validate;
    private $_validateRow;
    private $_buildFields;
    private $_buildDerivedFields;
    protected _resetIndices(from: number): void;
    private $_extractFields;
    protected _buildRows(data: any[] | IRtDataValueSource): DataRow[];
    private $_loadJson;
    private $_loadFieldArray;
    private $_trimLines;
    private $_loadCsv;
    private $_loadTsv;
    private $_clearDerived;
    getRows(): DataRow[];
    internalValue(row: number, field: string): any;
    protected _checkLoaded(oldCount: number): void;
}

type RtDataSelector = (row: number, values: object) => boolean;
type RtDataSorter = (row1: number, values1: any, row2: number, values2: any) => number;
interface IRtFieldSort {
    field: string;
    dir?: RtSortDirection;
}
interface IRtDataFilter {
    name: string;
    label?: string;
    filter: RtFilterType;
    enabled?: boolean;
}
declare enum RtDataFilterOp {
    OR = "or",
    AND = "and"
}
interface IRtDataFilterSet {
    name?: string;
    label?: string;
    filters: (IRtDataFilter | IRtDataFilterSet)[];
    op?: RtDataFilterOp;
    enabled?: boolean;
}
type RtFilterType = number | number[] | string[] | RtDataSelector;
type RtSortType = IRtFieldSort | string | (IRtFieldSort | string)[] | RtDataSorter;
declare abstract class ListDataFilter {
    name: string;
    label: string;
    static saveOrders(rows: DataRow[]): void;
    static restoreOrders(rows: DataRow[]): DataRow[];
    parent: ListDataFilterSet;
    enabled: boolean;
    constructor(name: string, label: string);
    abstract select(rows: DataRow[]): DataRow[];
}
declare class ListDataFilterSet extends ListDataFilter {
    children: ListDataFilter[];
    op: RtDataFilterOp;
    private _filterMap;
    constructor(name: string, label: string, children: (IRtDataFilter | IRtDataFilterSet)[], op: RtDataFilterOp, dv: ISimpleDataView);
    isNotEmpty(): boolean;
    add(name: string, filter: RtFilterType | ListDataFilter, label: string, enabled: boolean, dv: ISimpleDataView): ListDataFilter;
    addSet(name: string, filters: (IRtDataFilter | IRtDataFilterSet)[], op: RtDataFilterOp, label: string, enabled: boolean, dv: ISimpleDataView): ListDataFilterSet;
    remove(filter: string | ListDataFilter): boolean;
    getFilter(name: string): ListDataFilter;
    getAll(): ListDataFilter[];
    clear(): boolean;
    enabledAll(enabled: boolean): boolean;
    select(rows: DataRow[]): DataRow[];
    private $_createFilter;
}
interface IRtDataViewOptions {
    filterOp?: RtDataFilterOp;
    filter?: IRtDataFilter | IRtDataFilterSet;
    sort?: RtSortType;
    postFilter?: IRtDataFilter | IRtDataFilterSet;
    hideDeleted?: boolean;
}
interface IListDataViewListener extends IListDataListener {
    onDataViewSortChanged?(dv: IDataView): void;
    onDataViewFilterChanged?(dv: IDataView): void;
}
interface IRtDataSnapshotOptions {
    name?: string;
    fields?: string[];
    start?: number;
    count?: number;
    skipEmpty?: boolean;
    skipBlank?: boolean;
}

declare enum RtGroupClickAction {
    NONE = "none",
    EXPAND = "expand",
    COMMAND = "command"
}
interface IGroupHeader {
    visible?: boolean | 'auto';
    collapsedVisible?: boolean | 'auto';
    template?: string;
    style?: CSSStyles;
}
interface IGroupFooter extends IGroupHeader {
}
interface IGroupInfo {
    header?: IGroupHeader;
    footer?: IGroupFooter;
}
declare abstract class Group extends RtObject {
    info: IGroupInfo;
    protected _expanded: boolean;
    _firstVis: GroupItemType;
    _lastVis: GroupItemType;
    abstract model(): IGroupModel;
    abstract level(): number;
    expanded(): boolean;
    abstract getParamValue(param: string): any;
    abstract isLast(row: number): boolean;
}
declare abstract class GroupItem<T extends Group> {
    group: T;
    index: number;
    vindex: number;
    no: number;
    dv: IDataView;
    constructor(group: T);
    row(): number;
    getParamValue(param: string): any;
}
type GroupItemType = GroupItem<Group>;
declare class GroupRow<T extends Group> extends GroupItem<T> {
    private _row;
    constructor(group: T, row: number);
    isLeaf(): boolean;
    row(): number;
}
type GroupRowType = GroupRow<Group>;
declare abstract class GroupDecoItem$1<T extends Group> extends GroupItem<T> {
    abstract getStyle(): {
        itemDef?: CSSStyles;
        levelDef?: CSSStyles;
        dynamic?: CSSStyles;
    };
}
declare class GroupHeader<T extends Group> extends GroupDecoItem$1<T> {
    getStyle(): {
        itemDef?: CSSStyles;
        levelDef?: CSSStyles;
        dynamic?: CSSStyles;
    };
}
declare class GroupFooter<T extends Group> extends GroupDecoItem$1<T> {
    getStyle(): {
        itemDef?: CSSStyles;
        levelDef?: CSSStyles;
        dynamic?: CSSStyles;
    };
}
interface IGroupModel extends IRtParamInflater {
    levels(): number;
    itemCount(): number;
    visItemCount(): number;
    header(): IGroupHeader;
    footer(): IGroupFooter;
    leafRowCount(): number;
    getHeaderTemplate(item: GroupHeader<any>): string;
    getFooterTemplate(item: GroupHeader<any>): string;
    clear(): void;
    refresh(data: IDataView): void;
    indexOfRow(row: number): number;
    visIndexOfRow(row: number): number;
    getItem(index: number): GroupItem<any>;
    getVisItem(index: number): GroupItem<any>;
    isLastDataRow(item: any): boolean;
    expandAll(): void;
    collapseAll(): void;
    toggle(g: Group, recursive: false): void;
    revealRow(row: number): void;
}
declare abstract class GroupModel<T> extends RtEventProvider<T> {
    abstract data(): IDataView;
    abstract levels(): number;
    abstract itemCount(): number;
    abstract getItem(index: number): GroupItemType;
    abstract itemOfRow(row: number, visibleOnly: boolean): GroupItemType;
    abstract clear(): void;
    abstract refresh(data: IDataView): void;
    abstract firstVisRow(): GroupRowType;
    abstract lastVisRow(): GroupRowType;
    abstract indexOfRow(row: number): number;
    abstract visIndexOfRow(row: number): number;
    abstract nextRow(fromIndex: number): number;
}

interface IListDataLinkListener extends IListDataListener {
}
declare class DataLinkRow {
    master: DataLinkRow;
    dv: ISimpleDataView;
    dataRow: DataRow;
    details: DataLinkRow[];
    no: number;
    tag: any;
    constructor(master: DataLinkRow, dv: ISimpleDataView, dataRow: DataRow);
    id(): number;
    values(): any;
    level(): number;
    detailCount(): number;
    getDescendants(): DataLinkRow[];
}
interface IDataLinkInfo {
    data: ISimpleDataView;
    keyFields?: string[];
    masterFields?: string[];
    details?: IDataLinkInfo | IDataLinkInfo[];
}
declare class DataLinkInfo extends RtObject {
    parent: DataLinkInfo;
    data: ISimpleDataView;
    details: DetailDataInfo[];
    constructor(data: ISimpleDataView, details: IDataLinkInfo | IDataLinkInfo[], dvs: ISimpleDataView[]);
    protected _initDetails(details: IDataLinkInfo | IDataLinkInfo[], dvs: ISimpleDataView[], infoMap: {
        [dvHash: string]: DataLinkInfo;
    }): void;
    level(): number;
    detailCount(): number;
}
declare class DetailDataInfo extends DataLinkInfo {
    keyFields: ListDataField[];
    masterFields: ListDataField[];
    no: number;
    private $_setParentLevel;
    constructor(parent: DataLinkInfo, info: IDataLinkInfo, dvs: ISimpleDataView[], infoMap: {
        [dvHash: string]: DataLinkInfo;
    });
    protected _doDestory(): void;
    findData(name: string): IDataView;
}
declare class MasterDataInfo extends DataLinkInfo {
    _levels: number;
    constructor(data: ISimpleDataView, details: IDataLinkInfo | IDataLinkInfo[], dvs: ISimpleDataView[], infoMap: {
        [dvHash: string]: DataLinkInfo;
    });
    protected _doDestory(): void;
    findData(name: string): IDataView;
    level(): number;
}
declare class DataLinkView extends ListDataSource<IListDataLinkListener> implements IDataView, IListDataLinkListener {
    private _wrapper;
    private _info;
    private _dvs;
    private _dvMap;
    private _infoMap;
    private _root;
    private _rows;
    constructor(name: string, data: ISimpleDataView, details: IDataLinkInfo | IDataLinkInfo[], wrapper?: IDataViewWrapper);
    protected _doDestory(): void;
    source(): IDataView;
    wrapper(): IDataViewWrapper;
    wrapperOrThis(): IDataViewWrapper | IDataView;
    readOnly(): boolean;
    fields(): ListDataField[];
    fieldByName(name: string): ListDataField;
    rowCount(): number;
    visRowCount(): number;
    getSource(row: number): ISimpleDataView;
    getSourceRow(row: number): {
        dv: ISimpleDataView;
        row: number;
    };
    canSort(): boolean;
    canMove(): boolean;
    rowById(rowid: number): number;
    internalRowId(row: number): number;
    getRowId(row: number): number;
    levelRowOfRow(row: number): number;
    getRowValues(row: number): RtRowValues;
    getValues(row: number, fields: string[], fieldCheck: boolean): RtRowValues;
    getAllValues(rows: number[]): RtRowValues[];
    internalRowValues(row: number): RtRowValues;
    internalRowsValues(rows: number[]): RtRowValues[];
    getValue(row: number, field: string, fieldCheck: boolean): any;
    getProp(row: number, field: string, prop: string[], fieldCheck: boolean): any;
    getFieldValues(field: string, from?: number, to?: number): any[];
    getSummary(field: string): IFieldSummary;
    getGroupSummary(field: string, start: number, end: number): IFieldSummary;
    updateValue(row: number, field: string, value: any): boolean;
    findRow(values: {
        [field: string]: any;
    }, from?: number, to?: number): number;
    findRows(values: {
        [field: string]: any;
    }, from?: number, to?: number): number[];
    findDistinctRows(fields: string[], from: number, to: number): number[];
    findNeareastRow(field: string, value: any): number;
    deleteRow(row: number, force: boolean): void;
    deleteRows(rows: number[], force: boolean): void;
    updateRow(row: number, values: RtRowValues, forceEmpty: boolean, forceUpdate: boolean): boolean;
    appendRow(values: RtRowValues): boolean;
    getRowState(row: number): RtDataRowState;
    internalRowState(row: number): RtDataRowState;
    private $_getRowsMap;
    private $_handler;
    onDataValueUpdated(dv: IDataView, row: number, field: string, value: any, oldValue: RtRowValues): void;
    onDataRowUpdated(dv: IDataView, row: number, oldValues: any[]): void;
    onDataRowsUpdated(dv: IDataView, rows: number[]): void;
    onDataRangeUpdated(dv: IDataView, row: number, count: number): void;
    onDataRowAdded(dv: IDataView, row: number): void;
    onDataRowsAdded(dv: IDataView, row: number, count: number): void;
    onDataCleared(dv: IDataView, oldCount: number): void;
    onDataRowDeleted(dv: IDataView, row: number, rowid: number): void;
    onDataRowsDeleted(dv: IDataView, rows: number[], ids: number[]): void;
    onDataRangeDeleted(dv: IDataView, row: number, count: number): void;
    onDataRowMoved(data: IDataView, from: number, to: number): void;
    onDataRowsMoved(data: IDataView, from: number, count: number, to: number): void;
    info(): MasterDataInfo;
    root(): IDataView;
    levels(): number;
    setDataTags(rows: number[], tag: any): void;
    getDataTag(row: number): any;
    isDataTag(row: number, tag: any): boolean;
    getDataViews(): ISimpleDataView[];
    getLevel(row: number): number;
    getLinkInfo(dv: ISimpleDataView): DataLinkInfo;
    getLinkRows(): DataLinkRow[];
    getRows(): DataRow[];
    getDetailCount(row: number, detailName?: string): number;
    isLeaf(row: number): boolean;
    _internalLeaf(row: number): boolean;
    isLast(row: number): boolean;
    isMaster(row: number): boolean;
    getRowOf(dv: ISimpleDataView, row: number): number;
    getRowsOf(dv: ISimpleDataView, rows: number[]): number[];
    getRowOfId(id: number): number;
    getRowsOfIds(dv: IDataView, ids: number[]): number[];
    private $_collectDetails;
    private $_buildRows;
    private $_reset;
    private $_getRowIds;
}

interface IDataGroupInfo extends IGroupInfo {
    hideEmpty?: boolean;
    showEmptyMessage?: boolean;
    emptyMessage?: string;
    emptyMessageTemplate?: string;
}
interface IDataGroupOptions {
    groupLevel(): number;
    rowIndents(): RtRowIndents;
    indent(): number;
    endMargin(): number;
    masterHeaderVisible(): boolean;
    masterFooterVisible(): boolean;
    emptyMasterHeaderVisible(): boolean;
    emptyMasterFooterVisible(): boolean;
    detailHeaderVisible(): boolean;
    detailFooterVisible(): boolean;
    singleDetailHeaderVisible(): boolean;
    singleDetailFooterVisible(): boolean;
}
declare class DataGroupRow extends GroupRow<DataGroup> {
    constructor(group: DataGroup, row: number);
    dataLevel(): number;
    isLeaf(): boolean;
}
declare abstract class DataGroup extends Group {
    parent: DataGroup;
    startRow: number;
    startId: number;
    endRow: number;
    _children: DataGroup[];
    header: GroupHeader<DataGroup>;
    footer: GroupFooter<DataGroup>;
    constructor(parent: DataGroup);
    count(): number;
    level(): number;
    abstract dataLevel(): number;
    model(): DataGroupModel;
    visible(): boolean;
    isLeaf(): boolean;
    rowCount(): number;
    get(index: number): DataGroup;
    isLast(row: number): boolean;
    contains(g: DataGroup): boolean;
    visit(callback: (child: DataGroup) => boolean, recursive: boolean): boolean;
    clear(): void;
    getParamValue(param: string): any;
    $_add(g: DataGroup): void;
    $_setExpanded(v: boolean): boolean;
}
declare class MasterGroup extends DataGroup {
    info: IDataGroupInfo;
    row: DataGroupRow;
    dataLevel(): number;
    rowCount(): number;
}
declare class DetailGroup extends DataGroup {
    info: IDataGroupInfo;
    rows: DataGroupRow[];
    dataLevel(): number;
    rowCount(): number;
    expanded(): boolean;
}
declare class RootGroup extends DetailGroup {
    private _model;
    constructor(model: DataGroupModel);
    level(): number;
    dataLevel(): number;
    model(): DataGroupModel;
    expanded(): boolean;
    visible(): boolean;
    isLeaf(): boolean;
}
interface IListDataGroupListener extends IListDataListener {
    onDataGroup2Expanded(dg: DataGroup, expanded: boolean): void;
}
declare class DataGroupModel extends GroupModel<IListDataGroupListener> implements IGroupModel, IListDataViewListener {
    static readonly HEADER_TEMPLATE = "@it_datagroup_header";
    static readonly FOOTER_TEMPLATE = "@it_datagroup_footer";
    private _root;
    private _leafs;
    private _header;
    private _footer;
    private _options;
    private _infoMap;
    private _data;
    private _levels;
    private _rowLevels;
    private _descendants;
    private _items;
    private _vitems;
    private _lastRow;
    private _leafCount;
    templateParams: object;
    constructor();
    protected _doDestory(): void;
    inflateParam(target: GroupItemType, field: string, param: RtParam): any;
    inflateStock(target: GroupItemType, field: string, param: RtParam): any;
    onDataReset(data: IDataView): void;
    onDataValueUpdated(data: IDataView, row: number, field: string, value: any, oldValue: RtRowValues): void;
    onDataRowUpdated(data: IDataView, row: number, oldValues: any[]): void;
    onDataRowsUpdated(data: IDataView, rows: number[]): void;
    onDataRangeUpdated(data: IDataView, row: number, count: number): void;
    onDataRowAdded(data: IDataView, row: number): void;
    onDataRowsAdded(data: IDataView, row: number, count: number): void;
    onDataCleared(data: IDataView, oldCount: number): void;
    onDataRowDeleted(data: IDataView, row: number): void;
    onDataRowsDeleted(data: IDataView, rows: number[]): void;
    onDataRangeDeleted(data: IDataView, row: number, count: number): void;
    onDataViewFilterChanged?(dv: IDataView): void;
    onDataViewSortChanged(dv: IDataView): void;
    data(): DataLinkView;
    header(): IGroupHeader;
    footer(): IGroupFooter;
    root(): RootGroup;
    levels(): number;
    rowLevels(): number;
    groupCount(): number;
    descendants(): number;
    leafRowCount(): number;
    itemCount(): number;
    visItemCount(): number;
    firstVisItem(): GroupItemType;
    lastVisItem(): GroupItemType;
    firstVisRow(): DataGroupRow;
    lastVisRow(): DataGroupRow;
    clear(): void;
    build(data: DataLinkView, options: IDataGroupOptions, infos: {
        [data: string]: IDataGroupInfo;
    }): DataGroupModel;
    refresh(data: DataLinkView): void;
    containsData(name: string): boolean;
    itemOfRow(row: number, visibleOnly: boolean): GroupItemType;
    indexOfRow(row: number): number;
    visIndexOfRow(row: number): number;
    nextRow(fromIndex: number): number;
    getItem(index: number): GroupItemType;
    getVisItem(index: number): GroupItemType;
    expand(g: DataGroup, recursive: boolean): void;
    expandAll(): void;
    collapse(g: DataGroup, recursive: boolean): void;
    collapseAll(): void;
    toggle(g: DataGroup, recursive: boolean): void;
    isLastDataRow(item: DataGroupRow): boolean;
    visit(g: DataGroup, visitor: (group: DataGroup) => boolean): boolean;
    getHeaderTemplate(item: GroupHeader<any>): string;
    getFooterTemplate(item: GroupHeader<any>): string;
    getLevelGroupCount(level: number): number;
    getPageGroupCount(level: number): number;
    getPageGroup(level: number, index: number): MasterGroup;
    getPageRows(group: MasterGroup): DataGroupRow[];
    revealRow(row: number): void;
    private $_save;
    private $_restore;
    private $_refresh;
    private $_buildGroups;
    private $_buildItems;
    private $_collectVisibles;
    private $_resetVisibles;
    private $_resetIndices;
    private $_resetVisIndices;
    private $_expand;
    private $_collapse;
    private $_expandedChanged;
}

interface IRowCellObjectOwner {
    rowCellObjectChanged(cell: RowCellObject<any>): void;
}
interface IListRowCellStyleCallbackArgs {
    context: any;
    row: number;
}
type RtRowCellStyleCallback = (args: IListRowCellStyleCallbackArgs) => StyleOrClass;
declare abstract class RowCellObject<T extends RowCellObject<T>> extends RtWrappableObject {
    private _hint;
    private _cellStyle;
    private _cellStyleCallback;
    private _style;
    private _styleCallback;
    private _owner;
    protected _defs: T;
    private _cellStyleChanged;
    private _runCellStyle;
    private _runCellStyleCallback;
    private _styleChanged;
    private _runStyle;
    private _runStyleCallback;
    private _styleArgs;
    constructor(owner: IRowCellObjectOwner, defaults?: T);
    protected _doInitDefaults(): void;
    hint(): string;
    setHint(value: string): void;
    cellStyle(): StyleOrClass;
    setCellStyle(value: StyleOrClass): void;
    cellStyleCallback(): RtRowCellStyleCallback;
    setCellStyleCallback(value: RtRowCellStyleCallback): void;
    style(): StyleOrClass;
    setStyle(value: StyleOrClass): void;
    styleCallback(): RtRowCellStyleCallback;
    setStyleCallback(value: RtRowCellStyleCallback): void;
    runCellStyle(force: boolean): StyleOrClass;
    runStyle(force: boolean): StyleOrClass;
    getCellStyle(row: number): StyleOrClass;
    getStyle(row: number): StyleOrClass;
    prepareRender(): void;
    unprepareRender(): void;
    protected _changed(): void;
    protected _doPrepareRender(): void;
    protected _doUnprepareRender(): void;
}
declare abstract class RowDragHandle extends RowCellObject<RowDragHandle> {
}
declare class RowMover extends RowCellObject<RowMover> {
    static readonly SIZE = 24;
    private _size;
    protected _doInitDefaults(): void;
    size(): number;
    setSize(value: number): void;
}
declare enum RtRowOrderDisplay {
    ROW = "row",
    LEVEL_ROW = "levelRow"
}
declare class RowOrder extends RowCellObject<RowOrder> {
    private _display;
    private _fitWidth;
    private _rowOffset;
    private _prefix;
    private _suffix;
    private runDisplay;
    private runOffset;
    private runPrefix;
    private runSuffix;
    protected _doInitDefaults(): void;
    display(): RtRowOrderDisplay;
    setDisplay(value: RtRowOrderDisplay): void;
    fitWidth(): boolean;
    setFitWidth(value: boolean): void;
    rowOffset(): number;
    setRowOffset(value: number): void;
    prefix(): string;
    setPrefix(value: string): void;
    suffix(): string;
    setSuffix(value: string): void;
    getMeasureText(row: number): string;
    getText(dv: IDataView, row: number): string;
    protected _doPrepareRender(): void;
}
declare enum RtDragCheckMode {
    NONE = "none",
    TOGGLE = "toggle",
    CHECK = "check",
    UNCHECK = "uncheck"
}
declare class RowCheckBox extends RowCellObject<RowCheckBox> {
    static readonly SIZE = 22;
    private _size;
    private _masterVisible;
    private _dragMode;
    protected _doInitDefaults(): void;
    size(): number;
    setSize(value: number): void;
    masterVisible(): boolean;
    setMasterVisible(value: boolean): void;
    dragMode(): RtDragCheckMode;
    setDragMode(value: RtDragCheckMode): void;
    canDrag(): boolean;
}
interface IRtRowButtonArgs {
    button: RowButtonOrWrapper;
    row: number;
}
type RtRowButtonClick = (args: IRtRowButtonArgs) => boolean;
interface IRtRowButtonLetter {
    letter: string;
    size?: number;
    transparent?: boolean;
}
declare class RowButton extends RowCellObject<RowButton> {
    private _label;
    private _imageUrl;
    private _width;
    private _height;
    private _className;
    private _letter;
    private _onClick;
    private _heightD;
    constructor(owner: IRowCellObjectOwner, label?: string, defaults?: RowButton);
    label(): string;
    setLabel(value: string): void;
    imageUrl(): string;
    setImageUrl(value: string): void;
    width(): number;
    setWidth(value: number): void;
    height(): RtPercentSize;
    setHeight(value: RtPercentSize): void;
    isRelativeHeight(): boolean;
    className(): string;
    setClassName(value: string): void;
    letter(): IRtRowButtonLetter;
    setLetter(value: IRtRowButtonLetter): void;
    onClick(): RtRowButtonClick;
    setOnClick(value: RtRowButtonClick): void;
    click(hint: any, row: number): void;
    protected _doInitButton(owner: IRowCellObjectOwner): void;
    protected _getArgs(row: number): IRtRowButtonArgs;
    protected _doClick(hint: any, row: number): boolean;
}
type RowButtonOrWrapper = RowButton | RtWrapper<RowButton>;
type RowImageOrWrapper = RowImage | RtWrapper<RowImage>;
interface IListRowImageClickArgs {
    model: RowImageOrWrapper;
    row: number;
    imageUrl: string;
}
type RtRowImageClickCallback = (args: IListRowImageClickArgs) => void;
interface IListRowImageUrlArgs {
    model: RowImageOrWrapper;
    row: number;
}
type RtRowImageUrlCallback = (args: IListRowImageUrlArgs) => string;
declare class RowImage extends RowCellObject<RowImage> {
    static readonly DEF_SIZE = 24;
    private _imageUrl;
    private _width;
    private _height;
    private _clickable;
    private _urlCallback;
    private _onClick;
    protected _doInitDefaults(): void;
    imageUrl(): string;
    setImageUrl(value: string): void;
    width(): number;
    setWidth(value: number): void;
    height(): number;
    setHeight(value: number): void;
    clickable(): boolean;
    setClickable(value: boolean): void;
    urlCallback(): RtRowImageUrlCallback;
    setUrlCallback(value: RtRowImageUrlCallback): void;
    onClick(): RtRowImageClickCallback;
    setOnClick(value: RtRowImageClickCallback): void;
    getImageUrl(row: number): string;
    click(row: number, imageUrl: string): void;
}
interface IListRowShapeClickArgs {
    model: RowShapeOrWrapper;
    row: number;
    shape: string;
}
type RtRowShapeClick = (args: IListRowShapeClickArgs) => void;
interface IListRowShapeCallbackArgs {
    model: RowShapeOrWrapper;
    row: number;
}
type RtRowShapeCallback = (args: IListRowShapeCallbackArgs) => string;
declare class RowShape extends RowCellObject<RowShape> {
    static readonly SIZE = 20;
    static readonly SHAPE = "@star";
    private _size;
    private _shape;
    private _clickable;
    private _shapeCallback;
    private _onClick;
    private _shapeArgs;
    private _clickArgs;
    protected _doInitDefaults(): void;
    size(): number;
    setSize(value: number): void;
    shape(): string;
    setShape(value: string): void;
    clickable(): boolean;
    setClickable(value: boolean): void;
    shapeCallback(): RtRowShapeCallback;
    setShapeCallback(value: RtRowShapeCallback): void;
    onClick(): RtRowShapeClick;
    setOnClick(value: RtRowShapeClick): void;
    getShape(row: number): string;
    click(row: number, shapeName: string): void;
}
declare class RowLetter extends RowCellObject<RowLetter> {
    private _letter;
    protected _doInitDefaults(): void;
    letter(): string;
    setLetter(value: string): void;
}
type RowShapeOrWrapper = RowShape | RtWrapper<RowShape>;
declare enum RtRowExpanderPosition {
    NONE = "none",
    HEAD = "head",
    FOOT = "foot"
}
interface IRowExpander {
    position(): RtRowExpanderPosition;
    style(): StyleOrClass;
}
declare class RowExpander extends RowButton implements IRowExpander {
    private _position;
    constructor(owner: IRowCellObjectOwner, defaults?: RowExpander);
    protected _doInitDefaults(): void;
    position(): RtRowExpanderPosition;
    setPosition(value: RtRowExpanderPosition): void;
}

interface IGroupingOwner {
    groupingChanged(grouping: GroupOptions<any>): void;
}
declare abstract class GroupOptions<T extends GroupOptions<any>> extends RtWrappableOptions<T> {
    static readonly INDENT = 12;
    private _theme;
    private _rowIndents;
    private _indent;
    private _endMargin;
    protected _doInitDefaults(): void;
    theme(): string;
    setTheme(value: string): void;
    rowIndents(): RtRowIndents;
    setRowIndents(value: RtRowIndents): void;
    indent(): number;
    setIndent(value: number): void;
    endMargin(): number;
    setEndMargin(value: number): void;
    abstract getTheme(): IGroupTheme;
    protected _groupingChanged(): void;
}
interface IGroupTheme {
    type(): string;
    bodyIndented(): boolean;
    getGroupIndent(group: IGroupModel): number;
    getBodyIndent(item: GroupItem<any>): number;
    getBodyMargin(item: GroupItem<any>): number;
    getItemIndent(item: GroupItem<any>): number;
    prepareRender(): IGroupTheme;
}
interface IRowGroupTheme extends IGroupTheme {
}
interface IRowGroupOptions {
    header(): RowGroupHeader;
    footer(): RowGroupFooter;
    rowIndents(): RtRowIndents;
    indent(): number;
    endMargin(): number;
    groupIndent(): number;
}
declare class RowGroupOptions extends GroupOptions<RowGroupOptions> implements IRowGroupOptions {
    static readonly GROUP_INDENT = 12;
    static readonly END_MARGIN = 4;
    private _themeImpl;
    private _header;
    private _footer;
    private _expander;
    private _groupIndent;
    constructor(owner: IRtOptionItemOwner & IGroupingOwner, cellOwner: IRowCellObjectOwner, defaults: RowGroupOptions);
    protected _doInitDefaults(): void;
    header(): RowGroupHeader;
    footer(): RowGroupFooter;
    expander(): RowExpander;
    groupIndent(): number;
    setGroupIndent(value: number): void;
    getTheme(): IRowGroupTheme;
}
interface IDataGroupTheme extends IGroupTheme {
}
declare class DataGroupOptions extends GroupOptions<DataGroupOptions> implements IDataGroupOptions {
    private _themeImpl;
    private _expander;
    private _groupLevel;
    private _masterHeaderVisible;
    private _masterFooterVisible;
    private _emptyMasterHeaderVisible;
    private _emptyMasterFooterVisible;
    private _detailHeaderVisible;
    private _detailFooterVisible;
    private _singleDetailHeaderVisible;
    private _singleDetailFooterVisible;
    constructor(owner: IRtOptionItemOwner, cellOwner: IRowCellObjectOwner, defaults: DataGroupOptions);
    protected _doInitDefaults(): void;
    expander(): RowExpander;
    groupLevel(): number;
    setGroupLevel(value: number): void;
    masterHeaderVisible(): boolean;
    setMasterHeaderVisible(value: boolean): void;
    masterFooterVisible(): boolean;
    setMasterFooterVisible(value: boolean): void;
    emptyMasterHeaderVisible(): boolean;
    setEmptyMasterHeaderVisible(value: boolean): void;
    emptyMasterFooterVisible(): boolean;
    setEmptyMasterFooterVisible(value: boolean): void;
    detailHeaderVisible(): boolean;
    setDetailHeaderVisible(value: boolean): void;
    detailFooterVisible(): boolean;
    setDetailFooterVisible(value: boolean): void;
    singleDetailHeaderVisible(): boolean;
    setSingleDetailHeaderVisible(value: boolean): void;
    singleDetailFooterVisible(): boolean;
    setSingleDetailFooterVisible(value: boolean): void;
    getTheme(): IDataGroupTheme;
}

declare class RowGroupHeader extends RtWrappableObject implements IGroupHeader {
    private _visible;
    protected _collapsedVisible: boolean;
    private _template;
    private _clickAction;
    private _owner;
    private _cellOwner;
    private _defs;
    constructor(owner: IGroupingOwner, cellOwner: IRowCellObjectOwner, defaults?: RowGroupHeader);
    protected _doDestory(): void;
    protected _doInitDefaults(): void;
    get visible(): boolean;
    setVisible(value: boolean): void;
    get collapsedVisible(): boolean;
    setCollapsedVisible(value: boolean): void;
    get template(): string;
    setTemplate(value: string): void;
    clickAction(): RtGroupClickAction;
    setClickAction(value: RtGroupClickAction): void;
    protected _defTemplate(): string;
    protected _changed(): void;
    protected _groupChanged(): void;
}
declare class RowGroupFooter extends RowGroupHeader implements IGroupFooter {
    protected _doInitDefaults(): void;
    protected _defTemplate(): string;
}
type GroupComparer = (value: any, prev: any, row: number, rowCount: number) => boolean;
interface IRtRowGroupInfo extends IGroupInfo {
    field: string;
    ranges?: any[];
    comparer?: GroupComparer;
}
declare class RowGroup extends Group {
    private _checked;
    info: IRtRowGroupInfo;
    private _parent;
    private _value;
    _startRow: number;
    _startId: number;
    _endRow: number;
    private _children;
    private _header;
    private _footer;
    private _summary;
    constructor(parent: RowGroup, info: IRtRowGroupInfo, value: any, start: number, startId: number, end: number);
    protected _doDestory(): void;
    level(): number;
    parent(): RowGroup;
    model(): RowGroupModel;
    field(): string;
    headerInfo(): IGroupHeader;
    footerInfo(): IGroupFooter;
    value(): any;
    startRow(): number;
    endRow(): number;
    rowCount(): number;
    children(): RowGroup[];
    count(): number;
    isLeaf(): boolean;
    header(): GroupHeader<RowGroup>;
    footer(): GroupFooter<RowGroup>;
    visible(): boolean;
    checked(): boolean;
    setChecked(value: boolean): void;
    firstVis(): GroupItemType;
    lastVis(): GroupItemType;
    get(index: number): RowGroup;
    getItems(recursive?: boolean): GroupItemType[];
    getVisItems(recursive?: boolean): GroupItemType[];
    isLast(row: number): boolean;
    clear(): void;
    visit(callback: (child: RowGroup) => boolean, recursive: boolean): boolean;
    visitItems(recursive: boolean, callback: (item: GroupItemType) => boolean): void;
    visitVisItems(recursive: boolean, callback: (item: GroupItemType) => boolean): void;
    getSummary(field: string): IFieldSummary;
    getParamValue(param: string): any;
    $_add(g: RowGroup): void;
    $_setExpanded(v: boolean): boolean;
    private $_clearSummary;
}
declare abstract class GroupDecoItem extends GroupItem<RowGroup> {
    abstract getStyle(): {
        itemDef?: CSSStyles;
        levelDef?: CSSStyles;
        dynamic?: CSSStyles;
    };
}
type LGroupRow = GroupRow<RowGroup>;
interface IListRowGroupListener {
    onGroupExpanded?(group: RowGroup, expanded: boolean): void;
    onGroupChecked?(group: RowGroup, checked: boolean): void;
}
declare class RowGroupModel extends GroupModel<IListRowGroupListener> implements IGroupModel, IListDataViewListener {
    static readonly HEADER_TEMPLATE = "@it_group_header";
    static readonly FOOTER_TEMPLATE = "@it_group_footer";
    private _options;
    private _data;
    private _root;
    private _leafs;
    private _infos;
    private _levels;
    private _descendants;
    private _items;
    private _vitems;
    private _lastRow;
    templateParams: object;
    constructor();
    protected _doDestory(): void;
    inflateParam(target: GroupItemType, field: string, param: RtParam): any;
    inflateStock(target: GroupItemType, field: string, param: RtParam): any;
    onDataReset(data: IDataView): void;
    onDataValueUpdated(data: IDataView, row: number, field: string, value: any, oldValue: RtRowValues): void;
    onDataRowUpdated(data: IDataView, row: number, oldValues: any[]): void;
    onDataRowsUpdated(data: IDataView, rows: number[]): void;
    onDataRangeUpdated(data: IDataView, row: number, count: number): void;
    onDataRowAdded(data: IDataView, row: number): void;
    onDataRowsAdded(data: IDataView, row: number, count: number): void;
    onDataCleared(data: IDataView, oldCount: number): void;
    onDataRowDeleted(data: IDataView, row: number): void;
    onDataRowsDeleted(data: IDataView, rows: number[]): void;
    onDataRangeDeleted(data: IDataView, row: number, count: number): void;
    onDataViewFilterChanged?(dv: IDataView): void;
    onDataViewSortChanged(dv: IDataView): void;
    data(): IDataView;
    root(): RowGroup;
    header(): RowGroupHeader;
    footer(): RowGroupFooter;
    levels(): number;
    groupCount(): number;
    descendants(): number;
    leafRowCount(): number;
    itemCount(): number;
    visItemCount(): number;
    firstVisItem(): GroupItemType;
    lastVisItem(): GroupItemType;
    firstVisRow(): GroupRowType;
    lastVisRow(): GroupRowType;
    getGroup(index: number): RowGroup;
    getLevelGroupCount(level: number): number;
    getLevelGroups(level: number): RowGroup[];
    getLevelGroup(level: number, index: number): RowGroup;
    getGroupRows(group: RowGroup): number[];
    indexOfRow(row: number): number;
    visIndexOfRow(row: number): number;
    nextRow(fromIndex: number): number;
    itemOfRow(row: number, visibleOnly: boolean): GroupItemType;
    groupOfRow(row: number): RowGroup;
    getItem(index: number): GroupItemType;
    getVisItem(index: number): GroupItemType;
    getItems(from: number, to: number): GroupItemType[];
    getVisItems(from: number, to: number): GroupItemType[];
    getItemsOf(g: RowGroup): GroupItemType[];
    getVisItemsOf(g: RowGroup): GroupItemType[];
    forEachItem(from: number, to: number, callback: (item: GroupItemType) => boolean): void;
    forEachVisItem(from: number, to: number, callback: (item: GroupItemType) => boolean): void;
    clear(): void;
    build(data: IDataView, options: IRowGroupOptions, infos: IRtRowGroupInfo[]): RowGroupModel;
    refresh(data: IDataView): void;
    collapse(g: RowGroup, recursive: boolean): void;
    collapseAll(): void;
    expand(g: RowGroup, recursive: boolean): void;
    expandAll(): void;
    toggle(g: RowGroup, recursive: boolean): void;
    visit(g: RowGroup, visitor: (group: RowGroup) => boolean): boolean;
    getHeaderTemplate(item: GroupHeader<any>): string;
    getFooterTemplate(item: GroupHeader<any>): string;
    isLastDataRow(item: LGroupRow): boolean;
    revealRow(row: number): void;
    private $_save;
    private $_restore;
    private $_refresh;
    private $_buildGroups;
    getHeaderVisible(g: RowGroup, expanded: boolean): boolean;
    getFooterVisible(g: RowGroup, expanded: boolean): IGroupFooter;
    private $_buildItems;
    private $_collectVisibles;
    private $_expand;
    private $_collapse;
    private $_resetVisibles;
    private $_resetIndices;
    private $_resetVisIndices;
    private $_expandedChanged;
    $_checkedChanged(group: RowGroup): void;
}

declare abstract class RtRendererBase extends RtObject {
    tid: any;
    private _id;
    private _style;
    private _styleCallback;
    constructor();
    abstract type(): string;
    get id(): string;
    set id(value: string);
    get style(): CSSStyles;
    set style(value: CSSStyles);
    get styleCallback(): RtRendererStyleCallback;
    set styleCallback(value: RtRendererStyleCallback);
    getProxy(): object;
    abstract click(control: ListControl, dom: Element, row: number, field: string): boolean;
    abstract longPressed(control: ListControl, row: number, field: string): boolean;
}
interface IRtRendererClickArgs {
    control: ControlOrWrapper;
    element: Element;
    renderer: object;
    row?: number;
    field?: string;
}
type RtRendererClick = (args: IRtRendererClickArgs) => boolean;
type RtRendererStyleCallback = (args: IRtStyleCallbackArgs) => CSSStyles;
interface IRtRenderer {
    type(): string;
    id?: string;
    hint?: string;
    style?: CSSStyles;
    styleCallback?: RtRendererStyleCallback;
    clickable?: boolean;
    onClick: RtRendererClick;
}
declare abstract class RtRenderer extends RtRendererBase implements IRtRenderer {
    private _hint;
    private _clickable;
    private _onClick;
    private _clickArgs;
    get hint(): string;
    set hint(value: string);
    get clickable(): boolean;
    set clickable(value: boolean);
    get onClick(): RtRendererClick;
    set onClick(value: RtRendererClick);
    click(control: ListControl, dom: Element, row: number, field: string): boolean;
    longPressed(control: ListControl, row: number, field: string): boolean;
    protected _doClick(control: ListControl, dom: Element, row: number, field: string): boolean;
    protected _doLongPressed(control: ListControl, row: number, field: string): boolean;
}
interface IRtValueRenderer extends IRtRenderer {
    value?: any;
}
declare abstract class ValueRenderer extends RtRenderer implements IRtValueRenderer {
    private _value;
    get value(): any;
    set value(value: any);
}
declare abstract class BoundableRenderer extends ValueRenderer {
    private _fitWidth;
    private _fitHeight;
    get fitWidth(): number;
    set fitWidth(value: number);
    get fitHeight(): number;
    set fitHeight(value: number);
    getFitWidth(): number;
    getFitHeight(): number;
}

declare class SelectionMask extends ListControlObject<SelectionMask> {
    private _showHandle;
    protected _doInitDefaults(): void;
    showHandle(): boolean;
    setShowHandle(value: boolean): void;
    protected _doPrepareRender(): void;
}
declare class Selection extends RtObject {
    private _group;
    private _data;
    private _start;
    private _end;
    constructor(dataOrGroup: GroupModel<any> | IDataView, start: number, end: number);
    protected _doDestory(): void;
    get start(): number;
    get end(): number;
    resize(newEnd: number, newStart: number): boolean;
    contains(index: number): boolean;
    isRowSelected(row: number): boolean;
    getSelectedRows(): number[];
    getSelectedItems(): number[];
    reset(): boolean;
    private $_getMax;
}

declare enum RtRowBarDisplay {
    NONE = "none",
    ORDER = "order",
    CHECK = "check",
    SHAPE = "shape",
    LETTER = "letter",
    IMAGE = "image",
    BUTTON = "button",
    MOVE = "move"
}
interface IControlBarOwner {
    data(): IDataView;
    isMaster(row: number): boolean;
    isRowCheckable(row: number): boolean;
    isRowChecked(row: number): boolean;
    checkRow(row: number, checked: boolean, force: boolean): void;
    toggleChecked(row: number, force: boolean): void;
    isRowDetailed(row: number): boolean;
    getSelection(): Selection;
}
declare class RowBar extends ListControlBar<RowBar> {
    static readonly DISPLAY = RtRowBarDisplay.ORDER;
    static readonly TAG = "rowBar";
    private _display;
    private _owner;
    private _order;
    private _check;
    private _shape;
    private _letter;
    private _image;
    private _button;
    private _move;
    disp: RtRowBarDisplay;
    needOrderWidth: boolean;
    orderWidth: number;
    _displayChanged: boolean;
    constructor(control: RtControl, owner: IControlBarOwner, defaults: RowBar);
    protected _doInitDefaults(): void;
    owner(): IControlBarOwner;
    display(): RtRowBarDisplay;
    setDisplay(value: RtRowBarDisplay): void;
    order(): RowOrder;
    check(): RowCheckBox;
    shape(): RowShape;
    letter(): RowLetter;
    image(): RowImage;
    button(): RowButton;
    move(): RowMover;
    getDisplay(row: number): RtRowBarDisplay;
    isMaster(row: number): boolean;
    protected _doPrepareRender(): void;
    _doUnprepareRender(): void;
}

declare enum RtScrollIndicatorMode {
    AUTO = "auto",
    ROW = "row",
    PAGE = "page"
}
declare class ScrollIndicator extends PositionableControlObject<ScrollIndicator> {
    static readonly DEF_BAR_WIDTH = 4;
    private _mode;
    private _barWidth;
    private _showSelection;
    private _clickable;
    private _tooltipVisible;
    private _tooltipValue;
    private _firstTooltip;
    private _lastTooltip;
    private _tooltipStyle;
    protected _doInitDefaults(): void;
    mode(): RtScrollIndicatorMode;
    setMode(value: RtScrollIndicatorMode): void;
    barWidth(): number;
    setBarWidth(value: number): void;
    showSelection(): boolean;
    setShowSelection(value: boolean): void;
    clickable(): boolean;
    setClickable(value: boolean): void;
    tooltipVisible(): boolean;
    setTooltipVisible(value: boolean): void;
    tooltipValue(): 'top' | 'bottom';
    setTooltipValue(value: 'top' | 'bottom'): "top" | "bottom";
    firstTooltip(): string;
    setFirstTooltip(value: string): void;
    lastTooltip(): string;
    setLastTooltip(value: string): void;
    tooltipStyle(): CSSStyles;
    setTooltipStyle(value: CSSStyles): void;
    protected _doPrepareRender(): void;
}

interface IIndexLetterClickArgs {
    control: RtControlOrWrapper;
    letter: string;
}
type RtIndexLetterClickCallback = (args: IIndexLetterClickArgs) => any;
declare class IndexBar extends ListControlObject<IndexBar> {
    static readonly LENGTH = "90%";
    static readonly MIN_WIDTH = 16;
    static readonly ClickArgs: IIndexLetterClickArgs;
    private _length;
    private _floating;
    private _width;
    private _minWidth;
    private _maxWidth;
    private _spaceCharacter;
    private _caseSensitive;
    private _indexField;
    private _autoScroll;
    private _letters;
    private _reversed;
    private _onLetterClick;
    private _groups;
    private _defGroups;
    private _len;
    protected _doInitDefaults(): void;
    onLetterClick(): RtIndexLetterClickCallback;
    setOnLetterClick(value: RtIndexLetterClickCallback): void;
    length(): SizeValue;
    setLength(value: SizeValue): void;
    floating(): boolean;
    setFloating(value: boolean): void;
    width(): number;
    setWidth(value: number): void;
    minWidth(): number;
    setMinWidth(value: number): void;
    maxWidth(): number;
    setMaxWidth(value: number): void;
    spaceCharacter(): string;
    setSpaceCharacter(value: string): void;
    caseSensitive(): boolean;
    setCaseSensitive(value: boolean): void;
    letters(): string;
    setLetters(value: string): void;
    indexField(): string;
    setIndexField(value: string): void;
    autoScroll(): boolean;
    setAutoScroll(value: boolean): void;
    reversed(): boolean;
    setReversed(value: boolean): void;
    getLength(domain: number): number;
    getLetters(maxCount: number): string[];
    clickLetter(control: ControlOrWrapper, letter: string): any;
    protected _doPrepareRender(): void;
    private $_extractChars;
    private $_buildGroups;
}

interface IRtPageOptions {
    size?: number;
    level?: number;
    headerLevel?: number;
    footerLevel?: number;
}
interface IRtPageListener {
    onPageChanged(model: ListPageModel, page: number, oldPage: number): void;
}
declare class ListPageModel extends RtEventProvider<IRtPageListener> {
    private _page;
    private _data;
    private _group;
    private _level;
    private _size;
    private _headerLevel;
    private _footerLevel;
    private _startIndex;
    private _lastIndex;
    private _rows;
    private _items;
    private _getRows;
    private _pageCount;
    private _groupLevel;
    constructor(source: IDataView | GroupModel<any>, options?: IRtPageOptions);
    isGrouped(): boolean;
    size(): number;
    level(): number;
    page(): number;
    setPage(value: number): void;
    pageCount(): number;
    rows(): number[];
    rowCount(): number;
    startIndex(): number;
    startRow(): number;
    lastRow(): number;
    groupChanged(): void;
    getRow(index: number): number;
    getPageRows(page: number): number[];
    incPage(delta: number): void;
    getGroupItems(page?: number): GroupItemType[];
    $_reset(): void;
    private $_getPageRows;
    private $_getRowGroupPageRows;
    private $_getDataGroupPageRows;
    private $_getRowGroupItems;
    private $_getDataGroupItems;
}

interface IPagingOwner {
    pageModel(): ListPageModel;
    pageSize(): number;
    pageCount(): number;
    page(): number;
    setPage(newPage: number): void;
    pageIndexClick: (page: number) => void;
}
declare class PageNavigatorView extends PositonableControlElement<PageNavigator> {
    static readonly CLASS_NAME = "rtc-page-navigator";
    static readonly INDEX_CLASS = "rtc-page-navigator-index";
    static readonly SLASH_CLASS = "rtc-page-navigator-slash";
    private _owner;
    private _container;
    private _first;
    private _prev;
    private _next;
    private _last;
    private _buttons;
    private _page;
    private _slash;
    private _total;
    private _spans;
    private _itemGap;
    constructor(doc: Document, owner: IPagingOwner, model: PageNavigator);
    protected _doDestory(): void;
    protected _doPrepareRender(doc: Document, hint: any): void;
    private $_getItemGap;
    protected _doMeasure(doc: Document, hint: any, hintWidth: number, hintHeight: number): ISize;
    protected _doRender(doc: Document, width: number, height: number): void;
}

declare enum RtPageNavigatorAction {
    FIRST = "first",
    PREV = "prev",
    NEXT = "next",
    LAST = "last"
}
declare class PageNavigatorItem extends RtWrappableObject {
    private _owner;
    private _action;
    private _label;
    private _className;
    private _disabledClass;
    private _hint;
    private _disabled;
    protected _defs: PageNavigatorItem;
    constructor(owner: PageNavigator, action: RtPageNavigatorAction, label: string, defs?: PageNavigatorItem);
    owner(): PageNavigator;
    action(): RtPageNavigatorAction;
    label(): string;
    className(): string;
    setClassName(value: string): void;
    disabledClass(): string;
    setDisabledClass(value: string): void;
    hint(): string;
    setHint(value: string): void;
    disabled(): boolean;
    $_setDisabled(value: boolean): void;
    run(): void;
    protected _changed(): void;
}
declare class PageNavigator extends PositionableControlObject<PageNavigator> {
    private _width;
    private _height;
    private _itemGap;
    private _itemGap2;
    private _buttonSize;
    private _owner;
    private _first;
    private _prev;
    private _next;
    private _last;
    private _page;
    private _total;
    constructor(control: RtControl, owner: IPagingOwner, defaults: PageNavigator);
    protected _doInitDefaults(): void;
    owner(): IPagingOwner;
    first(): PageNavigatorItem;
    prev(): PageNavigatorItem;
    next(): PageNavigatorItem;
    last(): PageNavigatorItem;
    width(): number;
    setWidth(value: number): void;
    height(): number;
    setHeight(value: number): void;
    itemGap(): number;
    setItemGap(value: number): void;
    itemGap2(): number;
    setItemGap2(value: number): void;
    buttonSize(): number;
    setButtonSize(value: number): void;
    protected _doPrepareRender(): void;
    protected _itemChanged(item: RtObject): void;
}
declare class PageScrollerIndex extends RtWrappableObject {
    private _owner;
    private _className;
    private _hint;
    protected _defs: PageScrollerIndex;
    constructor(owner: PageScroller, defaults: PageScrollerIndex);
    protected _doInitDefaults(): void;
    className(): string;
    setClassName(value: string): void;
    hint(): string;
    setHint(value: string): void;
    protected _changed(): void;
}
declare class PageScrollerEndIndex extends PageScrollerIndex {
    private _visible;
    protected _doInitDefaults(): void;
    visible(): boolean;
    setVisible(value: boolean): void;
}
declare enum DPageScrollerPosition {
    NEAR = "near",
    FAR = "far"
}
declare class PageScroller extends ListControlObject<PageScroller> {
    private _position;
    private _itemGap;
    private _autoScroll;
    private _width;
    private _height;
    private _first;
    private _last;
    private _index;
    private _current;
    constructor(owner: RtControl, defaults: PageScroller);
    protected _doInitDefaults(): void;
    position(): DPageScrollerPosition;
    setPosition(value: DPageScrollerPosition): void;
    itemGap(): number;
    setItemGap(value: number): void;
    autoScroll(): boolean;
    setAutoScroll(value: boolean): void;
    first(): PageScrollerEndIndex;
    last(): PageScrollerEndIndex;
    index(): PageScrollerIndex;
    current(): PageScrollerIndex;
    width(): number;
    setWidth(value: number): void;
    height(): number;
    setHeight(value: number): void;
    protected _doPrepareRender(): void;
    protected _indexChanged(index: PageScrollerIndex): void;
}

declare class ScrollBar extends ListControlObject<ScrollBar> {
    static readonly BAR_WIDTH = 6;
    static readonly THUMB_WIDTH = 4;
    static readonly PIXELS_PER_ROW = 1;
    static readonly MIN_THUMB_LENGTH = 30;
    private _floating;
    private _barWidth;
    private _thumbWidth;
    private _minThumbLength;
    protected _doInitDefaults(): void;
    floating(): boolean;
    setFloating(value: boolean): void;
    barWidth(): number;
    setBarWidth(value: number): void;
    thumbWidth(): number;
    setThumbWidth(value: number): void;
    minThumbLength(): number;
    setMinThumbLength(value: number): void;
    protected _doPrepareRender(): void;
}

declare enum RtSearchFieldDisplay {
    ALWAYS = "always",
    AUTO = "auto",
    NONE = "none"
}
interface IRtSearchOptions {
    matchCase?: boolean;
    matchWholeWord?: boolean;
    useRegExp?: boolean;
    dataOnly?: boolean;
    ignoreFormat?: boolean;
    searchAll?: boolean;
    fromRow?: number;
    toRow?: number;
    ignoreCollapsed?: boolean;
    autoExpand?: boolean;
    circular?: boolean;
    filtering?: boolean;
    currentDisplay?: RtSearchFieldDisplay;
    checkRows?: boolean;
}
interface IRtSearchField {
    row: number;
    rowid: number;
    field?: string;
    value: any;
}
interface ISearchResultOwner {
    data(): IDataView;
    searchIndexChanged(sr: SearchResult): void;
    searchCurrentDisplayChanged(): void;
    clearSearch(sr: SearchResult): void;
}
declare class SearchResult extends RtObject {
    private _owner;
    private _fields;
    private _current;
    private _currentDisplay;
    currentVisible: boolean;
    constructor(owner: ISearchResultOwner, fields: IRtSearchField[]);
    protected _doDestory(): void;
    fields(): IRtSearchField[];
    count(): number;
    isEmpty(): boolean;
    current(): number;
    getRows(): number[];
    getCurrrentField(): IRtSearchField;
    moveFirst(): IRtSearchField;
    movePrev(): IRtSearchField;
    moveNext(): IRtSearchField;
    moveLast(): IRtSearchField;
    delete(rowId: number): void;
    clear(): void;
    refreshRows(): void;
    setCurrentDisplay(d: RtSearchFieldDisplay): void;
    showCurrent(): void;
    hideCurrent(): void;
    private $_refreshRows;
}

declare enum RtCommandBoxOrientation {
    AUTO = "auto",
    HORIZONTAL = "horizontal",
    VERTICA = "vertical"
}
declare enum RtCommandBoxMode {
    SHIFT = "shift",
    OVERLAP = "overlap"
}
declare class CommandBox extends ListControlObject<CommandBox> {
    private _orientation;
    private _mode;
    private _minCellWidth;
    private _minCellHeight;
    protected _doInitDefaults(): void;
    orientation(): RtCommandBoxOrientation;
    setOrientation(value: RtCommandBoxOrientation): void;
    mode(): RtCommandBoxMode;
    setMode(value: RtCommandBoxMode): void;
    minCellWidth(): number;
    setMinCellWidth(value: number): void;
    minCellHeight(): number;
    setMinCellHeight(value: number): void;
    protected _doPrepareRender(): void;
}

declare class Shapes extends RtShapeRegistry {
    private _owner;
    private _ctors;
    private _customs;
    constructor(owner: RtControl);
    protected _doDestory(): void;
    create<T extends RtShape>(clazz: {
        new (doc: any): T;
    }, svg: SVGSVGElement): T;
    createStock(doc: Document | SVGSVGElement, shapeName: string, className?: string, style?: object): RtShape;
    createCustom(shapeName: string, svg: SVGSVGElement, className: string): RtCustomShape;
    registerCustom(shapeName: string, d: string, width: number, height: number): void;
    registerCustoms(shapes: {
        [name: string]: {
            d: string;
            width: number;
            height: number;
        };
    }): void;
    getCustom(shapeName: string): {
        w: number;
        h: number;
        d: string;
    };
    private $_prepareStocks;
}

declare class TableObject extends RtObject {
    grow: number;
    shrink: number;
    _runGrow: number;
    _runShrink: number;
    constructor(source: object);
    protected _prepareRender(table: TableModel): void;
}
interface IRtTableColumn {
    width: SizeValue;
    grow?: number;
    shrink?: number;
}
declare class TableColumn extends TableObject implements IRtTableColumn {
    private _width;
    private _widthDim;
    _runWidth: number;
    _padding: IPadding;
    constructor(src: IRtTableColumn);
    protected _doAssignProps(source: any): boolean;
    get width(): SizeValue;
    set width(value: SizeValue);
    getProxy(): IRtTableColumn;
    getWidth(domain: number): number;
    prepareRender(table: TableModel, width: any): void;
}
interface IRtTableRow {
    height: SizeValue;
    grow?: number;
    shrink?: number;
}
declare class TableRow extends TableObject implements IRtTableRow {
    private _height;
    private _heightDim;
    private _runHeight;
    constructor(src: IRtTableRow);
    get height(): SizeValue;
    set height(value: SizeValue);
    getProxy(): IRtTableRow;
    prepareRender(table: TableModel, height: any): void;
}
declare enum RtTableCellDisplay {
    NONE = "none",
    TEXT = "text",
    SHAPE = "shape",
    IMAGE = "image"
}
interface IRtTableCellArgs {
    control: RtControl | RtWrapper<RtControl>;
    section: string;
    cell: string;
}
type RtTableCellClick = (args: IRtTableCellArgs) => void;
interface IRtTableSectionCell {
    display?: RtTableCellDisplay;
    text?: string;
    shapeName?: string;
    shapeWidth?: number;
    shapeHeight?: number;
    imageUrl?: string;
    imageWidth?: number;
    imageHeight?: number;
    style?: CSSStyles;
    onClick?: RtTableCellClick;
}
interface IRtTableSection extends IRendererScope {
    visible?: boolean;
    template?: string;
    minRowHeight?: number;
}
interface IRtTableHeaderHead extends IRtTableSectionCell {
}
interface IRtTableHeaderFoot extends IRtTableSectionCell {
}
interface IRtTableHeader extends IRtTableSection {
}
interface IRtTableFooterHead extends IRtTableSectionCell {
}
interface IRtTableFooterFoot extends IRtTableSectionCell {
}
interface IRtTableFooter extends IRtTableSection {
}
declare abstract class TableSectionCell<T extends TableSection> extends RtObject implements IRtTableSectionCell {
    display: RtTableCellDisplay;
    text: string;
    shapeName: string;
    shapeWidth: number;
    shapeHeight: number;
    imageUrl: string;
    imageWidth: number;
    imageHeight: number;
    style: CSSStyles;
    onClick: RtTableCellClick;
    protected _section: T;
    constructor(section: T, source: any);
    protected _doInit(): void;
    click(control: any): void;
    protected abstract type(): string;
}
declare abstract class TableSection extends RtObject implements IRtParamInflater {
    static readonly MIN_ROW_HEIGHT = 24;
    visible: boolean;
    minRowHeight: number;
    template: string;
    sortMarkVisible: boolean;
    sortOrderVisible: boolean;
    _head: TableSectionCell<TableSection>;
    _foot: TableSectionCell<TableSection>;
    table: TableModel;
    templateParams?: object;
    protected _data: IDataView;
    private _changed;
    constructor(table: TableModel, src: any);
    inflateParam(target: any, field: string, param: RtParam): void;
    inflateStock(target: any, field: string, param: RtParam): void;
    abstract type(): string;
    data(): IDataView;
    setData(value: IDataView): void;
    isDirty(): boolean;
    clean(): void;
    dataChanged(): void;
    click(): void;
    sortField(field: string): void;
    protected _doAssignProps(source: any): boolean;
    protected abstract _createHead(source: any): TableSectionCell<TableSection>;
    protected abstract _createFoot(source: any): TableSectionCell<TableSection>;
}
declare class TableHeaderHead extends TableSectionCell<TableHeader> implements IRtTableHeaderHead {
    protected type(): string;
}
declare class TableHeaderFoot extends TableSectionCell<TableHeader> implements IRtTableHeaderFoot {
    protected type(): string;
}
declare class TableHeader extends TableSection implements IRtTableHeader {
    head: TableHeaderHead;
    foot: TableHeaderFoot;
    defRenderer: string;
    type(): string;
    protected _createHead(source: any): TableSectionCell<TableHeader>;
    protected _createFoot(source: any): TableSectionCell<TableHeader>;
    inflateStock(target: any, field: string, param: RtParam): any;
}
declare class TableFooterHead extends TableSectionCell<TableFooter> implements IRtTableFooterHead {
    protected type(): string;
    protected _doInit(): void;
}
declare class TableFooterFoot extends TableSectionCell<TableFooter> implements IRtTableFooterFoot {
    protected type(): string;
}
declare class TableFooter extends TableSection implements IRtTableFooter {
    head: TableFooterHead;
    foot: TableFooterFoot;
    type(): string;
    protected _createHead(source: any): TableSectionCell<TableFooter>;
    protected _createFoot(source: any): TableSectionCell<TableFooter>;
    inflateStock(target: any, field: string, param: RtParam): any;
}
interface IRtTableModel {
    name?: string;
    colCount?: number;
    rowCount?: number;
    columns?: IRtTableColumn[];
    rows?: IRtTableRow[];
    minWidth?: number | string;
    maxWidth?: number | string;
    columnWidth?: number;
    minRowHeight?: number;
    maxRowHeight?: number;
    rowHeight?: number;
    columnGrow?: number;
    columnShrink?: number;
    header?: IRtTableHeader | boolean;
    footer?: IRtTableFooter | boolean;
}
declare class TableModel extends RtObject implements IRtTableModel {
    static readonly DEF_COLUMN_WIDTH = 70;
    static readonly MIN_ROW_HEIGHT = 35;
    static readonly DEF_GROW = 0;
    static readonly DEF_SHRINK = 1;
    name: string;
    colCount: number;
    rowCount: number;
    fixedColCount: number;
    fixedRowCount: number;
    minWidth: number | string;
    maxWidth: number | string;
    columnWidth: number;
    minRowHeight: number;
    maxRowHeight: number;
    rowHeight: number;
    columnGrow: number;
    columnShrink: number;
    header: TableHeader;
    footer: TableFooter;
    private _columns;
    private _rows;
    private _maxWidthDim;
    private _minWidthDim;
    private _cellArray;
    modelWidth: number;
    viewWidth: number;
    viewHeight: number;
    overWidth: number;
    overHeight: number;
    columnWidths: string;
    constructor(source: IRtTableModel);
    private $_load;
    private $_init;
    get columns(): IRtTableColumn[];
    get rows(): IRtTableRow[];
    rowHeightsFixed(): boolean;
    getColumn(index: number): IRtTableColumn;
    getRow(index: number): IRtTableRow;
    preapreRender(vertical: boolean, wView: number, hView: number): void;
    createCellArray(): any[][];
    setData(data: IDataView): void;
    dataChanged(): void;
    clean(): void;
    _internalColumn(index: number): TableColumn;
    _internalColumns(): TableColumn[];
    _internalRows(): TableRow[];
    private $_buildColumns;
    private $_buildRows;
    _tableObjectChanged(obj: TableObject): void;
}

declare abstract class RtRendererBaseImpl<T extends RtRendererBase> extends RtObject {
    static getDomId(row: number, gindex: number, id: string): string;
    protected _model: T;
    protected _value: any;
    private _prevStyle;
    private _styleArgs;
    constructor(model?: T);
    protected _doDestory(): void;
    model(): T;
    setModel(value: T): void;
    prepare(ctx: IRenderContext, layout: HTMLDivElement): void;
    protected _setClass(dom: Element, row: number): void;
    protected abstract _getStyleTarget(layout: HTMLElement): CSSStyleDeclaration;
    getStyle(row: number): CSSStyles;
    applyStyle(layout: HTMLElement, row: number): void;
    measureLayout(ctx: IRenderContext, div: HTMLDivElement, hintWidth: number, hintHeight: number): ISize;
    renderLayout(ctx: IRenderContext, div: HTMLDivElement, width: number, height: number): void;
    unprepare(ctx: IRenderContext, div: HTMLDivElement): void;
    protected _setContext(ctx: IRenderContext, dom: HTMLElement, model: RtRendererBase): void;
    protected _getValue(ctx: IRenderContext): any;
    protected _getValues(ctx: IRenderContext, baseValue: number): IRtSeriesValue;
    abstract setValue(layout: HTMLElement, newValue: any): void;
    protected abstract _doPrepare(ctx: IRenderContext, div: HTMLDivElement): void;
    protected abstract _doMeasure(ctx: IRenderContext, div: HTMLDivElement, hintWidth: number, hintHeight: number): ISize;
    protected abstract _doRender(ctx: IRenderContext, div: HTMLDivElement, width: number, height: number): void;
    protected abstract _doUnprepare(ctx: IRenderContext, div: HTMLDivElement): void;
    protected _doDisposeContent(div: HTMLDivElement): void;
    private $_checkModel;
}
declare abstract class RtRendererImpl<T extends RtRenderer> extends RtRendererBaseImpl<T> implements IRtRendererImpl {
    protected _setFitWidth(dom: HTMLElement, model: BoundableRenderer, w: number): void;
    protected _setFitHeight(dom: HTMLElement, model: BoundableRenderer, h: number): void;
}

interface IListViewOwner extends IPagingOwner, ITemplateHtmlProvider {
    isDataLoading(): boolean;
    isDataAppending(): boolean;
    isDataChanged(): boolean;
    isDataEmpty(): boolean;
    isEmpty(): boolean;
    renderMode(): RtRenderMode;
    fullMode(): boolean;
    preMode(): boolean;
    noCache(): boolean;
    skeletonVisible: boolean;
    shouldShowEmptyPage(): boolean;
    data(): IDataView;
    control(): RtControlOrWrapper;
    current(): ListOptions;
    table(): TableModel;
    scrollIndicator(): ScrollIndicator;
    indexBar(): IndexBar;
    scrollBar(): ScrollBar;
    rowBar(): RowBar;
    editBar(): EditBar;
    pageNavigator(): PageNavigator;
    pageScroller(): PageScroller;
    commandBox(): CommandBox;
    shapes(): Shapes;
    lineSepReg(): RegExp;
    groupExpander(): RowExpander;
    dataExpander(): RowExpander;
    current(): ListOptions;
    groupModel(): IGroupModel;
    isGrouped(): boolean;
    isPaging(): boolean;
    isSingleRow(): boolean;
    getTableModel(name: string): TableModel;
    getTemplate(name: string): TemplateType;
    inflateField(ps: RtParamString, field: string): string;
    isVertical(): boolean;
    isLandscape(): boolean;
    getRowCount(): number;
    getStartRow(): number;
    getEndRow(): number;
    getEndIndex(): number;
    pageOff(): number;
    getRowAt(index: number): number;
    getRowLayout(row: number): IRowLayout;
    getRowTemplate(row: number): TemplateType;
    getTableLayout(template: string, target: TableSection): IRowLayout;
    getSkeletonLayout(): IRowLayout;
    getRowStyleArgs(row: number): IRtRowStyleArgs;
    getRowStyle(row: number): {
        itemDef?: CSSStyles;
        levelDef?: CSSStyles;
        dynamic?: StyleOrClass;
    };
    getGroupItemLayout(item: GroupItemType): IRowLayout;
    getRowParams(row: number, layout: SimpleLayoutChild): RtParamValues;
    borrowRenderer(renderer: RtRendererBase): RtRendererBaseImpl<any>;
    freeRenderer(renderer: RtRendererBaseImpl<any>): void;
    useImage(src: string): void;
    getImageSize(src: string): ISize;
    getIcon(iconSet: string, iconName: string): IRtIconInfo;
    getSelection(): Selection;
    isRowChecked(row: number): boolean;
    isRowSearched(row: number): boolean;
    isRowDetailed(row: number): boolean;
    getSelection(): Selection;
    getPageRows(page: number): number[];
    scrollIndex(): number;
    setScrollIndex(value: number, off?: number): void;
    scrollToLetter(field: string, letter: string): void;
    searchOptions(): IRtSearchOptions;
    searchResult(): SearchResult;
    closeRowPage(commit: boolean, animate: boolean): void;
    showInfoPage(row: number, model: any, animate: boolean): void;
    showEditPage(row: number, model: any, animate: boolean): void;
    getTextFormatter(): RtTextFormatter;
    getBoolFormatter(): RtBooleanFormatter;
    getNumberFormatter(): RtNumberFormatter;
    getDateFormatter(): RtDateFormatter;
    addTooltipView(view: TooltipElement): void;
    removeTooltipView(view: TooltipElement): void;
    scrollBy(delta: number): boolean;
    rowBorder: {
        style: string;
        masterStyle: string;
        skipLast: boolean;
        skipGroupLast: boolean;
        leafOnly: boolean;
    };
}

type RtRowCommandCallback = (ctx: IListViewOwner, command: string, data: IDataView, row: number) => boolean;
interface IRowCommand {
    label?: string;
    run?: (ctx: IListViewOwner, dv: IDataView, row: number) => void;
    className?: string;
    style?: CSSStyles;
    enableCallback?: RtRowCommandCallback;
}
declare class RowCommandRunner {
    private _commandMap;
    row: number;
    registeredCommands(): string[];
    register(name: string, command: IRowCommand, overwrite: boolean): void;
    unregister(names: string[]): void;
    get(commandName: string): IRowCommand;
    update(commandName: string, config: IRowCommand): boolean;
}

declare enum RtButtonType {
    SUBMIT = "submit",
    CANCEL = "cancel",
    CLOSE = "close"
}
interface IRtButton extends IRtButtonModel {
    type?: RtButtonType;
    visible?: boolean;
    state?: any;
    onClick?: RtButtonClick;
}
interface IRtListButtonArgs {
    control: RtControl | RtWrapper<RtControl>;
    button: IRtButton;
}
type RtButtonClick = (args: IRtListButtonArgs) => boolean;
declare class ListButton extends RtObject implements IRtButton {
    private _style;
    constructor(config: IRtButton | string);
    name: string;
    type: RtButtonType;
    label: string;
    visible: boolean;
    enabled: boolean | RtButtonEnableCallback;
    className: string;
    shape: string;
    imageUrl: string;
    get style(): CSSStyles;
    set style(value: CSSStyles);
    state: any;
    onClick: RtButtonClick;
    isEnabled(control: RtControl | RtWrapper<RtControl>): boolean;
    getStyle(): CSSStyles;
    update(config: any): void;
    click(owner: IListViewOwner): boolean;
    getProxy(): IRtButton;
    protected _setDefaults(): void;
}

declare enum RtPanelPosition {
    AUTO = "auto",
    TOP = "top",
    BOTTOM = "bottom",
    LEFT = "left",
    RIGHT = "right",
    CENTER = "center"
}
declare enum RtPanelShowMode {
    POPUP = "popup",
    PUSH = "push"
}
interface IListPanelOwner {
    getTemplate(template: string): IListTemplate;
    search(options: IRtSearchOptions, key: any): SearchResult | null;
}
declare abstract class ListPanel<T extends ListPanel<T>> extends RtControlObject {
    private _position;
    private _showMode;
    protected _size: RtPercentSize;
    protected _minSize: RtPercentSize;
    protected _maxSize: RtPercentSize;
    private _style;
    protected _defs: T;
    private _szSize;
    private _szMin;
    private _szMax;
    constructor(owner: RtControl, defaults?: T);
    protected _doInitDefaults(): void;
    owner(): IListPanelOwner;
    isFullWidth(): boolean;
    isFullHeight(): boolean;
    position(): RtPanelPosition;
    setPosition(value: RtPanelPosition): void;
    showMode(): RtPanelShowMode;
    setShowMode(value: RtPanelShowMode): void;
    size(): RtPercentSize;
    setSize(value: RtPercentSize): void;
    minSize(): RtPercentSize;
    setMinSize(value: RtPercentSize): void;
    maxSize(): RtPercentSize;
    setMaxSize(value: RtPercentSize): void;
    style(): CSSStyles;
    setStyle(value: CSSStyles): void;
    getPosition(): RtPanelPosition;
    getSize(hint: number, size: number): number;
    protected _getAutoPosition(): RtPanelPosition;
}
declare abstract class ButtonPanelBase<T extends ButtonPanelBase<T>> extends ListPanel<T> {
    private _buttonGap;
    protected _buttonImpls: ListButton[];
    buttonGap(): number;
    setButtonGap(value: number): void;
    getButtons(): ListButton[];
    getButton(name: string): ListButton;
}
declare enum PanleButtonSet {
    OK_CANCEL = "okCancel",
    CLOSE = "close"
}
declare enum RtPanelButtonPosition {
    AUTO = "auto",
    HIDDEN = "hidden",
    BOTTOM = "bottom",
    LEFT = "left",
    RIGHT = "right"
}
declare abstract class DialogPanel<T extends DialogPanel<T>> extends ButtonPanelBase<T> {
    static readonly OK = "ok";
    static readonly CANCEL = "cancel";
    static readonly CLOSE = "close";
    private _buttonPosition;
    private _cancelLabel;
    private _okLabel;
    private _closeLabel;
    private _defButtons;
    private _closeButton;
    protected _doInitDefaults(): void;
    buttonSet: PanleButtonSet;
    buttonPosition(): RtPanelButtonPosition;
    setButtonPosition(value: RtPanelButtonPosition): void;
    cancelLabel(): string;
    setCancelLabel(value: string): void;
    okLabel(): string;
    setOkLabel(value: string): void;
    closeLabel(): string;
    setCloseLabel(value: string): void;
    getButtons(): ListButton[];
    okButton(): ListButton;
    cancelButton(): ListButton;
    closeButton(): ListButton;
}

declare class FormPanel extends DialogPanel<FormPanel> implements IRtParamInflater {
    static readonly TYPE = "form";
    static readonly MIN_SIZE = 20;
    private _template;
    private _actionTemplate;
    constructor(owner: RtControl, defaults?: FormPanel);
    protected _doInitDefaults(): void;
    inflateParam(target: any, field: string, param: RtParam): void;
    inflateStock(target: any, field: string, param: RtParam): void;
    template(): string;
    setTemplate(value: string): void;
    getTemplate(): IListTemplate;
    getLayout(): ListLayoutType;
    protected _doPrepareRender(): void;
    _setActionTemplate(template: string): void;
}

declare enum RtButtonArrange {
    AUTO = "auto",
    DEFAULT = "default",
    VERTICAL = "vertical"
}
declare class ButtonPanel extends ButtonPanelBase<ButtonPanel> {
    static readonly TYPE = "button";
    static readonly MIN_SIZE = 30;
    private _buttons;
    private _arrange;
    private _align;
    constructor(owner: RtControl, defaults?: ButtonPanel);
    protected _doInitDefaults(): void;
    buttons(): IRtButton[];
    setButtons(value: IRtButton[]): void;
    arrange(): RtButtonArrange;
    setArrange(value: RtButtonArrange): void;
    align(): RtItemsAlign;
    setAlign(value: RtItemsAlign): void;
    getDisplay(landscape: boolean): RtButtonArrange;
}

interface IRtRowPageOwner extends IListSectionOwner, IRtOptionItemOwner {
    registerTemplate(name: string, template: any, vars: any, shared: boolean): TemplateType;
    getTemplate(template: string): TemplateType;
    getRowInflater(row: number): IRtParamInflater;
}
interface IRtRowViewField {
    default?: any;
    required?: any;
    label?: string;
    unit?: string;
    renderer?: string | object;
    style?: CSSStyles;
    validator?: (field: string, value: any) => string;
}
interface IRtRowViewFieldRun extends IRtRowViewField {
    field: string;
    labelRenderer?: string | object;
}
interface IRtRowView {
    header: IListHeader;
    template?: string;
    allFields?: boolean;
    fields?: {
        [field: string]: IRtRowViewField;
    };
    templateVars?: any;
    templateParams?: any;
}
declare class RowPageHeader extends ListHeader {
    private _model;
    protected _doInitDefaults(): void;
    caption(): string;
    style(): CSSStyles;
    showCheck(): boolean;
    autoCheck(): boolean;
    setModel(model: IListHeader): void;
    protected _getParamArgs(): IRtHeaderParamArgs;
}
declare abstract class RowPage<T extends RowPage<any>> extends RtWrappableOptions<T> implements IRtParamInflater {
    private _header;
    private _effectDuration;
    private _fitSize;
    private _style;
    private _template;
    private _showDirection;
    private _hideDirection;
    private _allFields;
    private _fields;
    private _templateVars;
    private _templateParams;
    private _args;
    private _model;
    protected _dv: IDataView;
    protected _row: number;
    protected _rowInflater: IRtParamInflater;
    protected _rowValues: any;
    constructor(owner: IRtRowPageOwner, defaults?: T);
    protected _doInitDefaults(): void;
    protected abstract _getRowValues(): any;
    inflateParam(target: any, field: string, param: RtParam): any;
    inflateStock(target: any, field: string, param: RtParam): any;
    templateParams: any;
    data(): IDataView;
    row(): number;
    header(): RowPageHeader;
    fitSize(): boolean;
    setFitSize(value: boolean): void;
    style(): StyleOrClass;
    setStyle(value: StyleOrClass): void;
    effectDuration(): number;
    setEffectDuration(value: number): void;
    template(): string;
    setTemplate(value: string): void;
    showDirection(): RtSlideDirection;
    setShowDirection(value: RtSlideDirection): void;
    hideDirection(): RtSlideDirection;
    setHideDirection(value: RtSlideDirection): void;
    allFields(): boolean;
    setAllFields(value: boolean): void;
    fields(): {
        [field: string]: IRtRowViewField;
    };
    setFields(value: {
        [field: string]: IRtRowViewField;
    }): void;
    templateVars(): any;
    setTemplateVars(value: any): void;
    templateParams2(): any;
    setTemplateParams2(value: any): void;
    setModel(model: IRtRowView, dv: IDataView, row: number): void;
    getLayout(): IRowLayout;
    getShowDirection(): RtSlideDirection;
    getHideDirection(showDirection: RtSlideDirection): RtSlideDirection;
    protected abstract _createHeader(owner: IRtRowPageOwner, defaults?: T): RowPageHeader;
    protected abstract _getDefaultTemplate(dv: IDataView, templateVars: any, row: number): ListTemplate;
    private $_getRandomDir;
    protected _getLabelRenderer(fld: ListDataField): string | object;
    protected _getDefRenderer(fld: ListDataField): string | object;
    protected _prepareFields(dv: IDataView): IRtRowViewFieldRun[];
    _isImageRenderer(renderer: string | any): boolean;
    protected _extendStyle(style: any, field: IRtRowViewField, templateVars: any): any;
}

declare enum RtEditPageType {
    DEFAULT = "default",
    FORM = "form",
    A = "A"
}
interface IListEditContenxt {
    getValue(id: string): any;
    setValue(id: string, value: any): void;
    isVisible(id: string): boolean;
    setVisible(id: string, visible: boolean): void;
}
interface IListEditPageOwner extends IRtRowPageOwner {
    onEditFieldChange: RtEventHandler<{
        ctx: IListEditContenxt;
        row: number;
        field: string;
        newValue: any;
        oldValue: any;
    }>;
    onEditCommit: RtEventHandler<{
        ctx: IListEditContenxt;
        row: number;
        values: RtRowValues;
        cancel?: boolean;
        message?: string;
    }>;
}
declare class RowEditPage extends RowPage<RowEditPage> {
    private _viewType;
    protected _getDefEditor(fld: ListDataField): string | object;
    private _defaultTemplate;
    private _formTemplate;
    private _ATemplate;
    private _templates;
    constructor(owner: IListEditPageOwner, defaults?: RowEditPage);
    protected _doInitDefaults(): void;
    viewType(): RtEditPageType;
    setViewType(value: RtEditPageType): void;
    valueChanged(ctx: IListEditContenxt, field: string, newValue: any, oldValue: any): void;
    commit(ctx: IListEditContenxt, values: RtRowValues): boolean;
    protected _getRowValues(): {};
    protected _createHeader(owner: IRtRowPageOwner, defaults: RowEditPage): RowPageHeader;
    protected _getDefaultTemplate(dv: IDataView, templateVars: any, row: number): ListTemplate;
}

declare enum RtAutoScrollMode {
    DEFAULT = "default",
    REPEAT = "repeat",
    LOOP = "loop",
    RANDOM = "random"
}
declare class AutoScroll extends RtWrappableOptions<AutoScroll> {
    private static readonly DURATION;
    private static readonly CHANGE_DURATION;
    private _enabled;
    private _mode;
    private _backward;
    private _duration;
    private _changeDuration;
    protected _doInitDefaults(): void;
    enabled(): boolean;
    setEnabled(value: boolean): void;
    mode(): RtAutoScrollMode;
    setMode(value: RtAutoScrollMode): void;
    backward(): boolean;
    setBackward(value: boolean): void;
    duration(): number;
    setDuration(value: number): void;
    changeDuration(): number;
    setChangeDuration(value: number): void;
}

declare enum RtSingleRowChangeEffect {
    SLIDE = "slide",
    FLIP = "flip"
}
declare class SingleRowScroll extends AutoScroll {
    private _changeEffect;
    protected _doInitDefaults(): void;
    changeEffect(): RtSingleRowChangeEffect;
    setChangeEffect(value: RtSingleRowChangeEffect): void;
}
declare class SingleRow extends RtWrappableOptions<SingleRow> {
    private _visible;
    private _maskEffect;
    private _showPrev;
    private _showNext;
    private _rowChangeDir;
    private _rowNavigator;
    private _rowBorderVisible;
    private _fillHeight;
    private _autoScroll;
    constructor(owner: IRtOptionItemOwner, defaults: SingleRow);
    protected _doInitDefaults(): void;
    visible(): boolean;
    setVisible(value: boolean): void;
    maskEffect(): boolean;
    setMaskEffect(value: boolean): void;
    showPrev(): boolean;
    setShowPrev(value: boolean): void;
    showNext(): boolean;
    setShowNext(value: boolean): void;
    rowChangeDir(): RtRowChangeDirection;
    setRowChangeDir(value: RtRowChangeDirection): void;
    rowNavigator(): any;
    setRowNavigator(value: any): void;
    rowBorderVisible(): boolean;
    setRowBorderVisible(value: boolean): void;
    fillHeight(): boolean;
    setFillHeight(value: boolean): void;
    autoScroll(): SingleRowScroll;
}

declare enum RtSearchPanelDisplay {
    AUTO = "auto",
    DEFAULT = "default",
    LONG = "long",
    VERTICAL = "vertical"
}
declare class SearchPanel extends DialogPanel<SearchPanel> {
    static readonly TYPE = "search";
    private _display;
    private _matchCaseLabel;
    private _wholeWordLabel;
    private _regExpLabel;
    private _searchNextLabel;
    private _searchAllLabel;
    private _lineGap;
    private _alwaysResult;
    protected _doInitDefaults(): void;
    display(): RtSearchPanelDisplay;
    setDisplay(value: RtSearchPanelDisplay): void;
    matchCaseLabel(): string;
    setMatchCaseLabel(value: string): void;
    wholeWordLabel(): string;
    setWholeWordLabel(value: string): void;
    regExpLabel(): string;
    setRegExpLabel(value: string): void;
    searchNextLabel(): string;
    setSearchNextLabel(value: string): void;
    searchAllLabel(): string;
    setSearchAllLabel(value: string): void;
    lineGap(): number;
    setLineGap(value: number): void;
    alwaysResult(): boolean;
    setAlwaysResult(value: boolean): void;
    getDisplay(landscape: boolean): RtSearchPanelDisplay;
    search(key: string, options: IRtSearchOptions): void;
}

declare class SearchBar extends ListSection<SearchBar> {
    static readonly TYPE = "search";
    private _position;
    private _resetVisible;
    private _optionsVisible;
    private _alwaysResult;
    private _menu;
    private _options;
    protected _doInitDefaults(): void;
    position(): RtBarPosition;
    setPosition(value: RtBarPosition): void;
    resetVisible(): boolean;
    setResetVisible(value: boolean): void;
    optionsVisible(): boolean;
    setOptionsVisible(value: boolean): void;
    alwaysResult(): boolean;
    setAlwaysResult(value: boolean): void;
    search(key: string): void;
    clickMenu(): void;
    canShowResult(sr: SearchResult): boolean;
    protected _doPrepareRender(): void;
}
declare enum RtSearchResultPosition {
    BEFORE = "before",
    AFTER = "after",
    REPLACE = "replace",
    TOP = "top"
}
declare class SearchResultBar extends ListSection<SearchResultBar> {
    static readonly TYPE = "searchresult";
    private _position;
    private _clearWhenClose;
    protected _doInitDefaults(): void;
    position(): RtSearchResultPosition;
    setPosition(value: RtSearchResultPosition): void;
    clearWhenClose(): boolean;
    setClearWhenClose(value: boolean): void;
    protected _doPrepareRender(): void;
}

interface IListFilterPanelItem {
    filter: ListDataFilter;
    label?: string;
    items?: IListFilterPanelItem[];
    exclusive?: boolean;
}
interface IListFilterPanel {
    filters: IListFilterPanelItem[];
    exclusive?: boolean;
}
declare class FilterPanel extends DialogPanel<FilterPanel> {
    static readonly TYPE = "filter";
    private _autoApply;
    private _autoClose;
    private _data;
    private _model;
    protected _doInitDefaults(): void;
    autoApply(): boolean;
    setAutoApply(value: boolean): void;
    autoClose(): boolean;
    setAutoClose(value: boolean): void;
    model(): IListFilterPanel;
    getItems(): IListFilterPanelItem[];
    setModel(model: IListFilterPanel): void;
    prepare(data: IDataView): void;
    unprepare(): void;
    getButtons(): ListButton[];
    private $_getFilters;
}

type RtFieldBarFields = null | 'template' | 'sortables' | string[];
declare class FieldBar extends ListSection<FieldBar> {
    private _fields;
    protected _doInitDefaults(): void;
    fields(): RtFieldBarFields;
    setFields(value: RtFieldBarFields): void;
    getFields(): ListDataField[];
    getSort(field: ListDataField): {
        dir: RtSortDirection;
        order: number;
    };
    sortField(field: ListDataField): void;
}

declare enum RtSubheaderIndent {
    AUTO = "auto",
    START = "start",
    END = "end",
    NONE = "none"
}
declare class Subheader extends LayoutedSection<Subheader> {
    static readonly DEF_TEMPLATE = "_rt_subheader_template";
    private _indent;
    protected _doInitDefaults(): void;
    indent(): RtSubheaderIndent;
    setIndent(value: RtSubheaderIndent): void;
    stokcTemplate(): string;
    defTemplate(): string;
    protected _getParamArgs(): {};
}

declare enum RtSpinnerType {
    DEFAULT = "default",
    SPOKES = "spokes"
}

interface IAttachedRowOwner extends IListSectionOwner, IRtOptionItemOwner {
    registerTemplate(name: string, template: any, vars: any, shared: boolean): TemplateType;
    getTemplate(template: string): TemplateType;
}
declare class AttachedRow extends RtWrappableOptions<AttachedRow> implements IRtParamInflater {
    private _visible;
    private _endSpace;
    private _rowTemplate;
    private _indicatorVisible;
    private _indicatorType;
    private _indicatorSize;
    private _indicatorMargin;
    private _layoutParams;
    templateParams: object;
    private _args;
    private _inflater;
    constructor(owner: IAttachedRowOwner, defaults: AttachedRow);
    protected _doInitDefaults(): void;
    inflateParam(target: any, field: string, param: RtParam): any;
    inflateStock(target: any, field: string, param: RtParam): any;
    visible(): boolean;
    setVisible(value: boolean): void;
    endSpace(): number;
    setEndSpace(value: number): void;
    rowTemplate(): string;
    setRowTemplate(value: string): void;
    indicatorVisible(): boolean;
    setIndicatorVisible(value: boolean): void;
    indicatorType(): RtSpinnerType;
    setIndicatorType(value: RtSpinnerType): void;
    indicatorSize(): number;
    setIndicatorSize(value: number): void;
    indicatorMargin(): number;
    setIndicatorMargin(value: number): void;
    layoutParams(): RtParamValues;
    setLayoutParams(value: RtParamValues): void;
    layout(): IRowLayout;
}

interface IRtRowCallbackArgs {
    control: RtControlOrWrapper;
    row: number;
}
type RtRowLinkCallback = (args: IRtRowCallbackArgs) => string;
declare class ListRowLink extends RtWrappableOptions<ListRowLink> {
    private _rootUrl;
    private _linkField;
    private _linkCallback;
    private _target;
    protected _doInitDefaults(): void;
    rootUrl(): string;
    setRootUrl(value: string): void;
    linkField(): string;
    setLinkField(value: string): void;
    linkCallback(): RtRowLinkCallback;
    setLinkCallback(value: RtRowLinkCallback): void;
    target(): string;
    setTarget(value: string): void;
    getLink(control: any, dv: IDataView, row: number): string;
}
declare enum RtRowIndent {
    NONE = "none",
    PADDING = "padding",
    BAR = "bar"
}
declare class RowBorderLine extends RtWrappableOptions<RowBorderLine> {
    private _visible;
    private _style;
    private _masterStyle;
    private _nearIndent;
    private _farIndent;
    private _skipLast;
    private _skipGroupLast;
    private _leafOnly;
    protected _doInitDefaults(): void;
    visible(): boolean;
    setVisible(value: boolean): void;
    style(): string;
    setStyle(value: string): void;
    masterStyle(): string;
    setMasterStyle(value: string): void;
    nearIndent(): RtRowIndent;
    setNearIndent(value: RtRowIndent): void;
    farIndent(): RtRowIndent;
    setFarIndent(value: RtRowIndent): void;
    skipLast(): boolean;
    setSkipLast(value: boolean): void;
    skipGroupLast(): boolean;
    setSkipGroupLast(value: boolean): void;
    leafOnly(): boolean;
    setLeafOnly(value: boolean): void;
}
declare class RowFocusMask extends RtWrappableOptions<RowFocusMask> {
    private _visible;
    private _nearIndent;
    private _farIndent;
    protected _doInitDefaults(): void;
    visible(): boolean;
    setVisible(value: boolean): void;
    nearIndent(): RtRowIndent;
    setNearIndent(value: RtRowIndent): void;
    farIndent(): RtRowIndent;
    setFarIndent(value: RtRowIndent): void;
}
interface IListRowTemplateCallbackArgs {
    control: RtControlOrWrapper;
    large: boolean;
    row: number;
}
type RtRowTemplateCallback = (args: IListRowTemplateCallbackArgs) => string;
declare class ListRowScroll extends AutoScroll {
    private _rowsPerScroll;
    protected _doInitDefaults(): void;
    rowsPerScroll(): number;
    setRowsPerScroll(value: number): void;
}
declare class ListRow extends RtWrappableOptions<ListRow> {
    static readonly DEFAULT_TEMPLATE = "_rt_row_template_";
    static readonly DEFAULT_LARGE_TEMPLATE = "_rt_large_template_";
    private _link;
    private _focusMask;
    private _autoScroll;
    private _borderLine;
    private _template;
    private _largeTemplate;
    private _templateCallback;
    private _templateParams;
    private _style;
    private _styleCallback;
    private _clickAction;
    private _masterClickAction;
    private _longPressAction;
    private _masterPressAction;
    private _swipeAction;
    private _commands;
    private _focusable;
    private _touchEffect;
    private _deleteAnimation;
    constructor(owner: IRtOptionItemOwner, defaults: ListRow);
    protected _doInitDefaults(): void;
    link(): ListRowLink;
    focusMask(): RowFocusMask;
    autoScroll(): ListRowScroll;
    template(): string;
    setTemplate(value: string | object): void;
    largeTemplate(): string;
    setLargeTemplate(value: string): void;
    templateCallback(): RtRowTemplateCallback;
    setTemplateCallback(value: RtRowTemplateCallback): void;
    templateParams(): RtParamValues;
    setTemplateParams(value: RtParamValues): void;
    $_internalParams(): RtParamValues;
    style(): CSSStyles;
    setStyle(value: CSSStyles): void;
    styleCallback(): RtRowStyleCallback;
    setStyleCallback(value: RtRowStyleCallback): void;
    clickAction(): RtRowClickAction;
    setClickAction(value: RtRowClickAction): void;
    masterClickAction(): RtRowClickAction;
    setMasterClickAction(value: RtRowClickAction): void;
    longPressAction(): RtRowClickAction;
    setLongPressAction(value: RtRowClickAction): void;
    masterPressAction(): RtRowClickAction;
    setMasterPressAction(value: RtRowClickAction): void;
    swipeAction(): RtRowSwipeAction;
    setSwipeAction(value: RtRowSwipeAction): RtRowSwipeAction;
    commands(): string[];
    setCommands(value: string[]): void;
    focusable(): boolean;
    setFocusable(value: boolean): boolean;
    touchEffect(): boolean;
    setTouchEffect(value: boolean): void;
    deleteAnimation(): boolean;
    setDeleteAnimation(value: boolean): void;
    borderLine(): RowBorderLine;
    updateTemplate(template: string, id: string, prop: string, value: any): void;
    updateTemplateProps(template: string, id: string, props: Record<string, any>): void;
    private $_getTemplate;
}
declare abstract class LayoutedPage<T extends LayoutedPage<any>> extends RtWrappableOptions<T> implements IRtParamInflater {
    private _template;
    private _templateParams;
    templateParams?: object;
    inflateParam(target: any, field: string, param: RtParam): any;
    abstract inflateStock(target: any, field: string, param: RtParam): any;
    template(): string;
    setTemplate(value: string): void;
    templateParams2(): any;
    setTemplateParams2(value: any): void;
}
declare abstract class TempPage<T extends TempPage<any>> extends LayoutedPage<T> {
    private _fullModeHeight;
    private _fullModeWidth;
    fullModeHeight(): number;
    setFullModeHeight(value: number): void;
    fullModeWidth(): number;
    setFullModeWidth(value: number): void;
}
declare class EmptyPage extends TempPage<EmptyPage> implements IRtParamInflater {
    private _messageVisible;
    private _message;
    private _loadVisible;
    private _loadLabel;
    private _onLoadClick;
    protected _doInitDefaults(): void;
    inflateParam(target: any, field: string, param: RtParam): any;
    inflateStock(target: any, field: string, param: RtParam): any;
    messageVisible(): boolean;
    setMessageVisible(value: boolean): void;
    message(): string;
    setMessage(value: string): void;
    loadVisible(): boolean;
    setLoadVisible(value: boolean): void;
    loadLabel(): string;
    setLoadLabel(value: string): void;
    onLoadClick(): RtRendererClick;
    setOnLoadClick(value: RtRendererClick): void;
}
declare class LoadingPage extends TempPage<LoadingPage> {
    protected _doInitDefaults(): void;
    inflateStock(target: any, field: string, param: RtParam): void;
}

declare enum RtRowInfoPageType {
    DEFAULT = "default",
    FORM = "form"
}
declare class RowInfoPage extends RowPage<RowInfoPage> {
    private _viewType;
    private _rowChangeable;
    protected _getDefRenderer(fld: ListDataField): string | object;
    private _defaultTemplate;
    private _formTemplate;
    private _ATemplate;
    private _BTemplate;
    private _CTemplate;
    private _FTemplate;
    private _GTemplate;
    private _templates;
    protected _doInitDefaults(): void;
    viewType(): RtRowInfoPageType;
    setViewType(value: RtRowInfoPageType): void;
    rowChangeable(): boolean;
    setRowChangeable(value: boolean): void;
    protected _getRowValues(): RtRowValues;
    inflateParam(target: any, field: string, param: RtParam): any;
    inflateStock(target: any, field: string, param: RtParam): any;
    protected _createHeader(owner: IRtRowPageOwner, defaults: RowInfoPage): RowPageHeader;
    protected _getDefaultTemplate(dv: IDataView, templateVars: any, row: number): ListTemplate;
}

interface IListOptionsOwner extends IRtOptionItemOwner, IControlBarOwner, IPagingOwner, IListSectionOwner, IDataRowInfoOwner {
    onEditFieldChange: RtEventHandler<{
        ctx: IListEditContenxt;
        row: number;
        field: string;
        newValue: any;
        oldValue: any;
    }>;
    onEditCommit: RtEventHandler<{
        ctx: IListEditContenxt;
        row: number;
        values: RtRowValues;
        cancel?: boolean;
    }>;
    width(): number;
    height(): number;
    invalidateLayout(): void;
    isGrouped(): boolean;
    isPaging(): boolean;
    rowCommands(): RowCommandRunner;
    getRowInflater(row: number): IRtParamInflater;
    registerTemplate(name: string, template: any, vars: any, shared: boolean): any;
    registerMenu(name: string, menu: object): void;
    registerTableModel(name: string, table: object, overwrite: boolean): TableModel;
}
declare abstract class ListOptionsBase<T extends ListOptionsBase<T>> extends RtWrappableObject {
    protected _row: ListRow;
    protected _owner: IListOptionsOwner;
    protected _defs: T;
    constructor(owner: IListOptionsOwner, defaults: T);
    protected _doInitDefaults(): void;
    owner(): IListOptionsOwner;
    row(): ListRow;
    load(config: object): T;
    protected _changed(): void;
}
declare enum DHeadRowPosition {
    AFTER = "after",
    BEFORE = "before"
}
declare class HeadRows extends ListOptionsBase<HeadRows> {
    private _visible;
    private _position;
    private _data;
    private _rows;
    private _dv;
    private _drows;
    protected _doInitDefaults(): void;
    visible(): boolean;
    setVisible(value: boolean): void;
    position(): DHeadRowPosition;
    setPosition(value: DHeadRowPosition): void;
    data(): IDataView;
    setData(value: IDataView): void;
    rows(): number[];
    setRows(value: number[]): void;
    rowCount(): number;
    prepareRender(dv: IDataView): boolean;
    getRow(r: number): number;
    getValue(row: number, field: string): any;
}
declare class ListOptions extends ListOptionsBase<ListOptions> implements IRowCellObjectOwner {
    static readonly LARGE_SIZE = 600;
    static readonly DEFAULT_MENU = "_rt_menu_";
    static readonly DEFAULT_TABLE = "_rt_table_";
    static readonly DEFAULT_LARGE_TABLE = "_rt_large_table_";
    private _rowType;
    private _table;
    private _largeTable;
    private _orientation;
    private _largeSize;
    private _rowWidth;
    private _minRowWidth;
    private _maxRowWidth;
    private _rowCount;
    private _levelIndent;
    private _menu;
    private _overScrollEffect;
    private _dragEdgeGap;
    private _landscape;
    private _dv;
    private _dataLink;
    _rowBar: RowBar;
    _editBar: EditBar;
    _scrollIndicator: ScrollIndicator;
    _indexBar: IndexBar;
    _scrollBar: ScrollBar;
    _pageNavigator: PageNavigator;
    _pageScroller: PageScroller;
    _commandBox: CommandBox;
    _selectionMask: SelectionMask;
    _headRows: HeadRows;
    _header: ListHeader;
    _footer: ListFooter;
    _searchBar: SearchBar;
    _searchResultBar: SearchResultBar;
    _fieldBar: FieldBar;
    _subheader: Subheader;
    _rowGroup: RowGroupOptions;
    _dataGroup: DataGroupOptions;
    _dataRowInfos: DataRowInfoCollection;
    _infoPage: RowInfoPage;
    _editPage: RowEditPage;
    _addPage: RowEditPage;
    _singleRow: SingleRow;
    _attachedRow: AttachedRow;
    _formPanel: FormPanel;
    _buttonPanel: ButtonPanel;
    _searchPanel: SearchPanel;
    _filterPanel: FilterPanel;
    _emptyPage: EmptyPage;
    _loadingPage: LoadingPage;
    private _rowTemplateArgs;
    private _runRowTemplateCallback;
    private _runRowTemplate;
    private _runRowParams;
    private _runRowStyle;
    constructor(control: RtControl, owner: IListOptionsOwner & IGroupingOwner, defaults: ListOptions, landscape: boolean);
    protected _doDestory(): void;
    protected _doInitDefaults(): void;
    rowCellObjectChanged(cell: RowCellObject<any>): void;
    rowType(): RtRowType;
    setRowType(value: RtRowType): void;
    table(): string;
    setTable(value: string | object): void;
    largeTable(): string;
    setLargeTable(value: string | object): void;
    getTable(): string;
    isLandscape(): boolean;
    orientation(): RtOrientation;
    setOrientation(value: RtOrientation): void;
    largeSize(): number;
    setLargeSize(value: number): void;
    rowWidth(): number;
    setRowWidth(value: number): void;
    minRowWidth(): number;
    setMinRowWidth(value: number): void;
    maxRowWidth(): number;
    setMaxRowWidth(value: number): void;
    rowCount(): number;
    setRowCount(value: number): void;
    levelIndent(): number;
    setLevelIndent(value: number): void;
    menu(): string;
    setMenu(value: string | object): void;
    overScrollEffect(): RtOverScrollEffect;
    setOverScrollEffect(value: RtOverScrollEffect): void;
    dragEdgeGap(): number;
    setDragEdgeGap(value: number): void;
    headRows(): HeadRows;
    header(): ListHeader;
    footer(): ListFooter;
    searchBar(): SearchBar;
    searchResultBar(): SearchResultBar;
    fieldBar(): FieldBar;
    subheader(): Subheader;
    rowGroup(): RowGroupOptions;
    dataGroup(): DataGroupOptions;
    dataRowInfos(): DataRowInfoCollection;
    editBar(): EditBar;
    scrollIndicator(): ScrollIndicator;
    indexBar(): IndexBar;
    scrollBar(): ScrollBar;
    pageNavigator(): PageNavigator;
    pageScroller(): PageScroller;
    commandBox(): CommandBox;
    selectionMask(): SelectionMask;
    infoPage(): RowInfoPage;
    editPage(): RowEditPage;
    addPage(): RowEditPage;
    singleRow(): SingleRow;
    attachedRow(): AttachedRow;
    formPanel(): FormPanel;
    buttonPanel(): ButtonPanel;
    searchPanel(): SearchPanel;
    filterPanel(): FilterPanel;
    emptyPage(): EmptyPage;
    loadingPage(): LoadingPage;
    load(config: object): ListOptions;
    isLarge(): boolean;
    getListRow(): ListRow;
    getDefaultRowTemplate(): string;
    getRowTemplate(row: number): string;
    getRowParams(): RtParamValues;
    getRowStyle(): CSSStyles;
    getRowCommands(): IRowCommand[];
    prepareRender(): void;
    unprepareRender(): void;
    $_getPanel(type: string): ListPanel<any>;
    private $_prepareRunnings;
}

declare enum RtMenuItemType {
    NORMAL = "norml",
    HEADER = "header",
    SEPARATOR = "separator",
    SUBMENU = "submenu",
    CHECK = "check",
    RADIO = "radio"
}
interface IRtMenuItemArgs {
    control: RtControl | RtWrapper<RtControl>;
    item: any;
}
type RtMenuItemHandler = (args: IRtMenuItemArgs) => any;
interface IRtMenuItem {
    type?: RtMenuItemType;
    id?: string;
    label: string;
    shape?: string;
    image?: string;
    checked?: boolean;
    group?: any;
    onShow?: RtMenuItemHandler;
    onClick?: RtMenuItemHandler;
    tag?: any;
}
interface IRtMenuGroup {
    label: string;
    items: IRtMenuItem[];
}
declare class ListMenuItem extends RtObject implements IRtMenuItem {
    static readonly _args: {
        control: any;
        item: any;
    };
    type: RtMenuItemType;
    id: string;
    label: string;
    shape: string;
    image: string;
    group: any;
    onShow: RtMenuItemHandler;
    onClick: RtMenuItemHandler;
    tag: any;
    _source: IRtMenuItem;
    private _parent;
    private _proxy;
    private _items;
    private _checked;
    constructor(parent: ListMenu | ListMenuGroup, source: IRtMenuItem);
    parent(): ListMenu | ListMenuGroup;
    get items(): ListMenuItem[];
    set items(value: ListMenuItem[]);
    get checked(): boolean;
    set checked(value: boolean);
    checkable(): boolean;
    proxy(): IRtMenuItem;
    click(control: any, menu: IRtMenu): boolean;
}
declare class ListMenuGroup extends RtObject implements IRtMenuGroup {
    label: string;
    items: ListMenuItem[];
    expanded: boolean;
    private _parent;
    private _proxy;
    constructor(parent: ListMenu, menu: IRtMenuGroup);
    proxy(): IRtMenuGroup;
    click(control: any): boolean;
}
declare enum RtMenuOrigin {
    TOP = "top",
    BOTTOM = "bottom",
    LEFT = "left",
    RIGHT = "right",
    HEADER = "header",
    FOOTER = "footer",
    CENTER = "center"
}
interface IRtMenuArgs {
    control: RtControl | RtWrapper<RtControl>;
    menu: any;
}
type RtMenuHandler = (args: IRtMenuArgs) => any;
interface IRtMenu {
    origin?: RtMenuOrigin;
    separator?: boolean;
    autoCheck?: boolean;
    autoHide?: boolean;
    alwaysHide?: boolean;
    fillWidth?: boolean;
    fillHeight?: boolean;
    checkSize?: number;
    onShow?: RtMenuHandler;
    onClose?: RtMenuHandler;
    onClick?: RtMenuItemHandler;
    items?: (IRtMenuItem | IRtMenuGroup)[];
    getItem?(id: string): IRtMenuItem;
    tag?: any;
}
declare class ListMenu extends RtControlObject implements IRtMenu {
    static checkItem(item: ListMenuItem, items: IRtMenuItem[]): void;
    static readonly _args: IRtMenuArgs;
    private _checkSize;
    separator: boolean;
    autoCheck: boolean;
    exclusive: boolean;
    autoHide: boolean;
    alwaysHide: boolean;
    fillWidth: boolean;
    fillHeight: boolean;
    origin: RtMenuOrigin;
    onShow: RtMenuHandler;
    onClose: RtMenuHandler;
    onClick: RtMenuItemHandler;
    private _proxy;
    private _items;
    private _itemMap;
    constructor(owner: RtControl, source: IRtMenu);
    get checkSize(): number;
    set checkSize(value: number);
    get items(): (ListMenuItem | ListMenuGroup)[];
    set items(value: (ListMenuItem | ListMenuGroup)[]);
    get visibleItems(): (ListMenuItem | ListMenuGroup)[];
    getItem(id: string): IRtMenuItem;
    show(control: any): void;
    close(control: any): void;
    clickItem(control: any, item: ListMenuItem | ListMenuGroup): boolean;
    checkItem(item: ListMenuItem): void;
    proxy(): IRtMenu;
}

interface IListSection {
    visible?: boolean;
    style?: CSSStyles;
}
interface IListSectionOwner {
    control(): RtControlOrWrapper;
    isLandscape(): boolean;
    isPortrait(): boolean;
    data(): IDataView;
    leafRowCount(): number;
    checkedRowCount(): number;
    isSingleRow(): boolean;
    options(): ListOptions;
    registerTemplate(name: string, template: any, vars: any, shared: boolean): any;
    getTemplate(template: string): TemplateType;
    getDefaultRowTemplate(): ListTemplate;
    sectionChanged(section: ListSection<any>): void;
    sectionLayoutChanged(section: ListSection<any>): void;
    togglePanel(panel: string, animate: boolean): void;
    closePanel(animate: boolean): void;
    showMenu(menu: IRtMenu, animate: boolean): void;
    closeMenu(animate: boolean): void;
    toggleMenu(menu: IRtMenu, animate: boolean): void;
    search(options: IRtSearchOptions, key: any): SearchResult | null;
}
declare abstract class ListSection<T extends ListSection<any>> extends RtWrappableObject {
    static readonly BUTTON_CLASS = "rtc-section-button";
    private _visible;
    private _sortMarkVisible;
    private _sortOrderVisible;
    protected _owner: IListSectionOwner;
    protected _defs: T;
    constructor(owner: IListSectionOwner, defaults?: T);
    protected _doInitDefaults(): void;
    owner(): IListSectionOwner;
    data(): IDataView;
    visible(): boolean;
    setVisible(value: boolean): void;
    sortMarkVisible(): boolean;
    setSortMarkVisible(value: boolean): void;
    sortOrderVisible(): boolean;
    setSortOrderVisible(value: boolean): void;
    protected _changed(): void;
    protected _layoutChanged(): void;
}
interface ILayoutedSection extends IListSection {
    fixed?: boolean;
    template?: string;
    layoutParams?: RtParamValues;
}
declare abstract class LayoutedSection<T extends LayoutedSection<any>> extends ListSection<T> implements IRtParamInflater {
    private _template;
    private _layoutParams;
    private _style;
    private _layoutStyle;
    templateParams: object;
    private _inflater;
    constructor(owner: IListSectionOwner, defaults?: T);
    inflateParam(target: any, field: string, param: RtParam): any;
    protected abstract _getParamArgs(): any;
    inflateStock(target: any, field: string, param: RtParam): any;
    setTopRow(value: number): void;
    template(): string;
    setTemplate(value: string | object): void;
    style(): CSSStyles;
    setStyle(value: CSSStyles): void;
    layoutStyle(): CSSStyles;
    setLayoutStyle(value: CSSStyles): void;
    layoutParams(): RtParamValues;
    setLayoutParams(value: RtParamValues): void;
    layout(): {
        layout: ListLayoutType;
        rowStyle: CSSStyles | string;
    };
    abstract stokcTemplate(): string;
    abstract defTemplate(): string;
    getTemplate(): TemplateType;
    setLayoutItemProp(tag: any, prop: string, value: any): void;
    setLayoutItemsProp(group: any, prop: string, value: any): void;
    click(): void;
    sortField(field: string): void;
}
declare enum RtSectionButtonPosition {
    HEAD = "head",
    FOOT = "foot"
}
interface IRtSectionButton extends IRtButton {
    position?: RtSectionButtonPosition;
    action?: RtSectionAction;
}
declare enum RtSectionAction {
    NONE = "none",
    FORM = "form",
    BUTTON = "button",
    SEARCH = "search",
    SORT = "sort",
    FILTER = "filter",
    FIELD = "field",
    MENU = "menu"
}
declare abstract class ActionableSection<T extends ActionableSection<any>> extends LayoutedSection<T> {
    static perform(owner: IListSectionOwner, action: RtSectionAction): void;
    private _buttons;
    private _buttonGap;
    private _clickAction;
    private _listButtons;
    private _headButtons;
    private _footButtons;
    protected _doInitDefaults(): void;
    buttons(): IRtSectionButton[];
    setButtons(value: IRtSectionButton[]): void;
    buttonGap(): number;
    setButtonGap(value: number): void;
    clickAction(): RtSectionAction;
    setClickAction(value: RtSectionAction): void;
    getButtonAt(pos: RtSectionButtonPosition, index: number): ListButton;
    getButton(name: string): IRtButton;
    getButtons(position: RtSectionButtonPosition): ListButton[];
    setButton(button: IRtButton): void;
    removeButton(name: string): void;
    setButtonVisible(button: string, visible: boolean): void;
    setButtonEnabled(button: string, enabled: boolean): void;
    getButtonState(button: string): any;
    setButtonState(button: string, state: any): any;
    click(): void;
    private $_indexOfButton;
    private $_getButton;
    private $_resetButtons;
}
interface IListHeader extends ILayoutedSection {
    caption?: string;
    style?: CSSStyles;
    showCheck?: boolean;
    autoCheck?: boolean;
}
interface IRtHeaderParamArgs {
    control: RtControlOrWrapper;
    section: string;
}
declare class ListHeader extends ActionableSection<ListHeader> {
    static readonly CAPTION = "Header";
    static readonly STOCK_TEMPLATE = "@it_list_header";
    static readonly DEF_TEMPLATE = "_rt_header_template_";
    static readonly ROW = -1;
    private _caption;
    private _captionAlign;
    private _captionColor;
    private _showCheck;
    private _autoCheck;
    private _checked;
    private _args;
    protected _doInitDefaults(): void;
    caption(): string;
    setCaption(value: string): void;
    captionAlign(): 'left' | 'right' | 'center';
    setCaptionAlign(value: 'left' | 'right' | 'center'): void;
    captionColor(): string;
    setCaptionColor(value: string): void;
    showCheck(): boolean;
    setShowCheck(value: boolean): void;
    autoCheck(): boolean;
    setAutoCheck(value: boolean): void;
    isChecked(): boolean;
    setChecked(value?: boolean): void;
    stokcTemplate(): string;
    defTemplate(): string;
    getStyle(): CSSStyles;
    protected _getParamArgs(): IRtHeaderParamArgs;
    inflateStock(target: any, field: string, param: RtParam): any;
}
interface IRtFooterParamArgs {
    control: RtControlOrWrapper;
    section: string;
}
declare class ListFooter extends ActionableSection<ListFooter> {
    static readonly STOCK_TEMPLATE = "@it_list_footer";
    static readonly DEF_TEMPLATE = "_rt_footer_template_";
    static readonly ROW = -2;
    private _args;
    protected _doInitDefaults(): void;
    stokcTemplate(): string;
    defTemplate(): string;
    protected _getParamArgs(): IRtFooterParamArgs;
}

declare enum RtEditBarAction {
    NONE = "none",
    MOVE = "move",
    INFO = "info",
    DELETE = "delete",
    ADD = "add",
    EDIT = "edit",
    LINK = "link",
    CUSTOM = "custom"
}
declare class RowDeleteButton extends RowButton {
    private _confirmMessage;
    confirmMessage(): string;
    setConfirmMessage(value: string): void;
    protected _doClick(bar: EditBar, row: number): boolean;
}
declare class RowEditButton extends RowButton {
    private _editHeader;
    private _editTemplate;
    editHeader(): IListHeader;
    setEditHeader(value: IListHeader): void;
    editTemplate(): string;
    setEditTemplate(value: string): void;
    protected _doClick(bar: EditBar, row: number): boolean;
}
declare class RowAddButton extends RowEditButton {
    protected _doInitButton(owner: IRowCellObjectOwner): void;
    appending: boolean;
    protected _doClick(bar: EditBar, row: number): boolean;
}
declare class RowInfoButton extends RowButton {
    private _infoHeader;
    private _infoTemplate;
    infoHeader(): IListHeader;
    setInfoHeader(value: IListHeader): void;
    infoTemplate(): string;
    setInfoTemplate(value: string): void;
    protected _doInitButton(IRowCellObjectOwner: any): void;
    protected _doClick(bar: EditBar, row: number): boolean;
}
type RtRowLinkButtonUrlCallback = (args: IRtRowButtonArgs) => string;
declare class RowLinkButton extends RowButton {
    private _target;
    private _url;
    private _urlCallback;
    protected _doInitDefaults(): void;
    target(): string;
    setTarget(value: string): void;
    url(): string;
    setUrl(value: string): void;
    urlCallback(): RtRowLinkButtonUrlCallback;
    setUrlCallback(value: RtRowLinkButtonUrlCallback): void;
    getUrl(row: number): string;
    protected _doClick(bar: EditBar, row: number): boolean;
}
declare class EditBar extends ListControlBar<EditBar> {
    static readonly DELETE_LABEL = "Delete";
    static readonly DETAIL_LABEL = "More";
    static readonly LINK_LABEL = ">";
    static readonly ADD_LABEL = "Add";
    static readonly EDIT_LABEL = "Edit";
    static readonly INFO_LABEL = "Info";
    static readonly CUSTOM_LABEL = "?";
    private _action;
    private _owner;
    private _delete;
    private _add;
    private _edit;
    private _info;
    private _link;
    private _custom;
    private _move;
    private _buttons;
    private _handles;
    private _runAction;
    constructor(control: RtControl, owner: IControlBarOwner, defaults: EditBar);
    protected _doInitDefaults(): void;
    owner(): IControlBarOwner;
    action(): RtEditBarAction;
    setAction(value: RtEditBarAction): void;
    delete(): RowDeleteButton;
    add(): RowAddButton;
    edit(): RowEditButton;
    info(): RowInfoButton;
    link(): RowLinkButton;
    custom(): RowButton;
    move(): RowMover;
    getAction(row: number): RtEditBarAction;
    getButton(action: RtEditBarAction): RowButton;
    getHandle(action: RtEditBarAction): RowDragHandle;
    protected _doPrepareRender(): void;
}

interface IRtDataRowInfo {
    template?: string;
    indent?: number;
    rowBar?: RtRowBarDisplay;
    editBar?: RtEditBarAction;
    style?: CSSStyles;
}
interface IDataRowInfoOwner {
    data(): IDataView;
    rowInfos(): DataRowInfoCollection;
    invalidateLayout(): void;
}
declare class DataRowInfoCollection extends RtWrappableObject {
    private _owner;
    private _defs;
    private _master;
    private _infos;
    dv: IDataView;
    constructor(owner: IDataRowInfoOwner, defaults?: DataRowInfoCollection);
    master(): IRtDataRowInfo;
    setMaster(value: IRtDataRowInfo): void;
    prepareRender(): void;
    getInfo(dataName: string): IRtDataRowInfo;
    setInfo(dataName: string, info: IRtDataRowInfo, redraw: boolean): boolean;
    setInfos(infos: {
        [dataName: string]: IRtDataRowInfo;
    }): void;
    getRowTemplate(dataName: string): string;
    getIndent(dataName: string): number;
    getRowBar(dataName: string): RtRowBarDisplay;
    getEditBar(dataName: string): RtEditBarAction;
    getStyle(dataName: string): CSSStyles;
}

declare abstract class ListControlObject<T extends ListControlObject<any>> extends RtControlObject implements IRowCellObjectOwner {
    private _visible;
    private _style;
    protected _defs: T;
    constructor(control: RtControl, defaults: T);
    protected _doInitDefaults(): void;
    initLandscape(): void;
    rowCellObjectChanged(obj: RowCellObject<any>): void;
    visible(): boolean;
    setVisible(value: boolean): void;
    style(): StyleOrClass;
    setStyle(value: StyleOrClass): void;
    prepareRender(): void;
    unprepareRender(): void;
    protected abstract _doPrepareRender(): void;
    protected _doUnprepareRender(): void;
}
declare enum RtControlObjectPosition {
    DEFAULT = "default",
    NEAR = "near",
    FAR = "far",
    TOP = "top",
    BOTTOM = "bottom",
    LEFT = "left",
    RIGHT = "right"
}
declare abstract class PositionableControlObject<T extends PositionableControlObject<T>> extends ListControlObject<T> {
    private _position;
    protected _doInitDefaults(): void;
    position(): RtControlObjectPosition;
    setPosition(value: RtControlObjectPosition): void;
    getPosition(landscape: boolean): RtControlObjectPosition;
}
declare enum RtControlBarPosition {
    NEAR = "near",
    FAR = "far"
}
declare enum RtControlBarMode {
    BAR = "bar",
    BAR_PUSH = "barPush",
    ROW = "row",
    ROW_PUSH = "rowPush"
}
declare abstract class ListControlBar<T extends ListControlBar<any>> extends ListControlObject<T> {
    static readonly MODE = RtControlBarMode.BAR;
    private _mode;
    private _position;
    private _gapLeft;
    private _gapRight;
    private _gapTop;
    private _gapBottom;
    protected _rowInfos: DataRowInfoCollection;
    private _size;
    _runGaps: {
        left: number;
        right: number;
        top: number;
        bottom: number;
        horz: number;
        vert: number;
    };
    _table: TableModel;
    protected _doInitDefaults(): void;
    _doDestory(): void;
    mode(): RtControlBarMode;
    setMode(value: RtControlBarMode): void;
    position(): RtControlBarPosition;
    setPosition(value: RtControlBarPosition): void;
    gapLeft(): number;
    setGapLeft(value: number): void;
    size(): number;
    setSize(value: number): void;
    gapRight(): number;
    setGapRight(value: number): void;
    gapTop(): number;
    setGapTop(value: number): void;
    gapBottom(): number;
    setGapBottom(value: number): void;
    prepareGaps(table: TableModel): void;
    protected _doPrepareRender(): void;
    protected _doUnprepareRender(): void;
}

declare abstract class ListElement extends RtElement {
    static readonly PANEL_ORDER = "100";
    mx: number;
    my: number;
    mw: number;
    mh: number;
    clickable(): boolean;
    click(dom: Element, x: number, y: number): void;
    measure(doc: Document, hint: any, maxWidth: number, maxHeight: number): ISize;
    render(doc: Document): void;
    resizeByMeasure(): ListElement;
    applyMeasuredBounds(): ListElement;
    protected _doPrepareRender(doc: Document, hint: any): void;
    protected _doApplyStyles(css: CSSStyleDeclaration): void;
    protected _doApplyImportantStyles(css: CSSStyleDeclaration): void;
    protected _doAfterRender(): void;
    protected abstract _doMeasure(doc: Document, hint: any, hintWidth: number, hintHeight: number): ISize;
    protected abstract _doRender(doc: Document, width: number, height: number): void;
    protected _getRenderSize(): ISize;
}
declare abstract class ListControlElement<T extends ListControlObject<any>> extends ListElement {
    protected _model: T;
    constructor(doc: Document, model: T, contentable?: boolean, className?: string);
    model(): T;
    setModel(value: T): void;
    listOwner(): IListViewOwner;
}
declare abstract class PositonableControlElement<T extends PositionableControlObject<T>> extends ListControlElement<T> {
    landscape: boolean;
    position: RtControlObjectPosition;
    vertical: boolean;
    setPosition(landscape: boolean): void;
}
declare abstract class ButtonElement extends RtElement {
    static readonly LABEL_CLASS = "rtc-button-label";
    static readonly BR_CLASS = "rtc-button-br";
    static readonly IMAGE_CLASS = "rtc-button-image";
    static readonly SHAPE_CLASS = "rtc-button-shape";
    static readonly SHAPE_SIZE = 20;
    private _span;
    private _br;
    private _img;
    private _shape;
    private _prevStyles;
    private _prevClass;
    constructor(doc: Document, className: string);
    enabled(): boolean;
    setEnabled(value: boolean): void;
    abstract click(owner: IListViewOwner): void;
    protected _doInitStyle(style: CSSStyles2): void;
    protected _doInitDom(doc: Document, dom: HTMLElement): void;
    protected _setModel(control: RtControl, model: IRtButtonModel): void;
    private $_createSpan;
    private $_arrangeSafari;
    private $_arrange;
    private $_setImage;
    private $_setShape;
}
declare abstract class TooltipElement extends RtElement {
}

declare abstract class RowCellElement extends RtElement {
    static readonly MOVE_CLASS = "rtc-rowbar-move";
    protected static measureButton(cell: RowCellElement, model: RowButton, button: HTMLButtonElement): ISize;
    dv: IDataView;
    row: number;
    wCell: number;
    hCell: number;
    wMeasure: number;
    hMeasure: number;
    hRelative: boolean;
    _prevClass: string;
    _prevStyle: {};
    protected _move: RtShape;
    getDragRequest(dom: Element, options: ListOptions): DragRequest;
    setTable(table: TableModel | boolean): void;
    abstract measure(model: ListControlBar<any>, dv: IDataView, row: number, hintWidth: number, hintHeight: number): ISize;
    protected _getDisplayStyle(): string;
    protected _getOverflow(): string;
    protected _doInitDom(doc: Document, dom: HTMLElement): void;
    isDom(dom: Element): boolean;
    $_prepareMove(model: RowMover, row: number, cellStyle: StyleOrClass, style: StyleOrClass): SVGSVGElement;
}
declare class RowBarCell extends RowCellElement {
    static readonly CLASS_NAME = "rtc-rowbar-cell";
    static readonly ORDER_CLASS = "rtc-rowbar-order";
    static readonly IMAGE_CLASS = "rtc-rowbar-image";
    static readonly CHECK_CLASS = "rtc-rowbar-check";
    static readonly SHAPE_CLASS = "rtc-rowbar-shape";
    static readonly LETTER_CLASS = "rtc-rowbar-letter";
    static readonly BUTTON_CLASS = "rtc-row-button";
    static readonly BUTTON_STYLE: {
        margin: number;
        whiteSpace: string;
        textOverflow: string;
        overflow: string;
    };
    private static none_measure;
    private static order_measure;
    private static check_measure;
    private static letter_measure;
    private static shape_measure;
    private static image_measure;
    private static button_measure;
    protected static move_measure(cell: RowBarCell, dom: HTMLElement, model: RowBar, dv: IDataView, row: number): ISize;
    private static readonly Measurers;
    private static none_render;
    private static order_render;
    private static check_render;
    private static letter_render;
    private static shape_render;
    private static image_render;
    private static button_render;
    protected static move_render(cell: RowBarCell, width: number, height: number): void;
    private static readonly Renderrs;
    private _display;
    private _order;
    private _check;
    private _image;
    private _letter;
    private _shape;
    private _button;
    checked: boolean;
    checkable: boolean;
    constructor(doc: Document);
    measure(model: RowBar, dv: IDataView, row: number, hintWidth: number, hintHeight: number): ISize;
    render(model: RowBar, width: number, height: number): void;
    click(model: RowBar, dom: Element): void;
    getCheck(): HTMLInputElement;
    displayOfDom(dom: Element): RtRowBarDisplay;
    isDom(dom: Element): boolean;
    getDragRequest(dom: Element, options: ListOptions): DragRequest;
    $_prepareNone(): void;
    $_prepareOrder(cellStyle: StyleOrClass, style: StyleOrClass): HTMLSpanElement;
    $_prepareCheck(size: number, cellStyle: StyleOrClass, style: StyleOrClass, visible: boolean): HTMLDivElement;
    $_prepareImage(model: RowImage, row: number, cellStyle: StyleOrClass, style: StyleOrClass, width: number, height: number): HTMLImageElement;
    $_prepareLetter(cellStyle: StyleOrClass, style: StyleOrClass): HTMLSpanElement;
    $_prepareShape(model: RowShape, row: number, cellStyle: StyleOrClass, style: StyleOrClass): SVGSVGElement;
    $_prepareButton(cellStyle: StyleOrClass, style: StyleOrClass): HTMLButtonElement;
    $_prepareMove(model: RowMover, row: number, cellStyle: StyleOrClass, style: StyleOrClass): SVGSVGElement;
}

declare class EditBarCell extends RowCellElement {
    static readonly CLASS_NAME = "rtc-editbar-cell";
    private static none_measure;
    private static button_measure;
    protected static move_measure(cell: EditBarCell, m: RowMover, dv: IDataView, row: number): ISize;
    private static handle_measure;
    private static readonly ButtonMeasurers;
    private static readonly HandleMeasurers;
    private static button_render;
    private static move_render;
    private static handle_render;
    private static readonly ButtonRenderers;
    private static readonly HandleRenderers;
    private _action;
    private _button;
    private _handle;
    constructor(doc: Document);
    protected _doDestory(): void;
    measure(model: EditBar, dv: IDataView, row: number, hintWidth: number, hintHeight: number): ISize;
    render(model: EditBar, width: number, height: number): void;
    click(model: EditBar, dom: Element): void;
    isDom(dom: Element): boolean;
    $_prepareNone(): void;
    $_prepareButton(cellStyle: StyleOrClass, style: StyleOrClass): HTMLButtonElement;
    $_prepareMove(model: RowMover, row: number, cellStyle: StyleOrClass, style: StyleOrClass): SVGSVGElement;
}

declare class HtmlLayoutView<T extends HtmlLayout> extends ListElement {
    root: boolean;
    private _model;
    private _manager;
    private _view;
    _explicitWidth: number;
    _explicitHeight: number;
    private _padding;
    constructor(doc: Document, model: T);
    build(doc: Document, manager: ILayoutViewManager): void;
    refreshModels(layout: T): void;
    prepareLayout(doc: Document, hint: any): void;
    measureLayout(doc: Document, hint: any, maxWidth: number, maxHeight: number): ISize;
    protected _getPositionStyle(): string;
    protected _doInitContent(doc: Document, div: HTMLElement): void;
    prepareView(manager: ILayoutViewManager): void;
    protected _doPrepareRender(doc: Document, manager: ILayoutViewManager): void;
    protected _doApplyStyles(css: CSSStyleDeclaration): void;
    protected _doApplyImportantStyles(css: CSSStyleDeclaration): void;
    protected _doMeasure(doc: Document, hint: any, maxWidth: number, maxHeight: number): ISize;
    protected _doRender(doc: Document, width: number, height: number): void;
    protected _doAfterRender(): void;
    protected _doMeasureContent(doc: Document, hintWidth: number, hintHeight: number): ISize;
    protected _doLayoutContent(doc: Document, width: number, height: number): void;
}

declare class TableCellView extends ListElement {
    merged: boolean;
    model: TableLayoutCell;
    cspan: number;
    rspan: number;
    _layoutView: SimpleLayoutView<any>;
    private _manager;
    private _padHorz;
    private _padVert;
    private _prevStyle;
    constructor(doc: Document, merged: boolean);
    setModel(doc: Document, model: TableLayoutCell): void;
    prepareLayout(doc: Document, hint: any): void;
    protected _getPositionStyle(): string;
    protected _doInitDom(doc: Document, dom: HTMLElement): void;
    protected _doMeasure(doc: Document, hint: any, hintWidth: number, hintHeight: number): ISize;
    protected _doRender(doc: Document, width: number, height: number): void;
    protected _getRenderSize(): ISize;
}
declare abstract class TableLayoutView extends ListElement {
    protected _cells: TableCellView[][];
    protected _manager: ILayoutViewManager;
    simpleByDom(dom: Element, deep: boolean): SimpleLayoutView<any>;
    protected _getDisplayStyle(): string;
    protected _doApplyStyles(css: CSSStyleDeclaration): void;
    protected _doMeasure(doc: Document, owner: any, hintWidth: number, hintHeight: number): ISize;
    protected _doRender(doc: Document, width: number, height: number): void;
    protected abstract _cellViewType(): {
        new (doc: Document, merged: boolean): TableCellView;
    };
    protected abstract _getTable(): TableModel;
    protected _getMinRowHeight(row: number): number;
    protected _buildCells(doc: Document, table: TableModel, layout: TableRowLayout): void;
}
declare class TableRowLayoutView extends TableLayoutView {
    root: boolean;
    private _model;
    _explicitWidth: number;
    _explicitHeight: number;
    private _startCol;
    private _endCol;
    constructor(doc: Document, model: TableRowLayout);
    build(doc: Document, manager: ILayoutViewManager): void;
    refreshModels(model: TableRowLayout): void;
    prepareLayout(doc: Document, hint: any): void;
    measureLayout(doc: Document, hint: any, maxWidth: number, maxHeight: number): ISize;
    prepareView(manager: ILayoutViewManager): void;
    protected _cellViewType(): {
        new (doc: Document, merged: boolean): TableCellView;
    };
    protected _getTable(): TableModel;
    protected _getMinRowHeight(row: number): number;
    protected _doPrepareRender(doc: Document, manager: ILayoutViewManager): void;
    protected _doAfterRender(): void;
}

type LayoutViewType = ListLayoutView<ListLayout> | HtmlLayoutView<HtmlLayout> | TableRowLayoutView;
interface IItemViewOwner extends ILayoutViewManager {
    rowBar: RowBar;
    editBar: EditBar;
    borderLine: RowBorderLine;
    rightMargin: number;
    table: TableModel;
    startCol?: number;
    endCol?: number;
    rowOffset(): number;
    getExpander(index: number): IRowExpander;
    rowBorderVisible(rv: ListRowView): boolean;
    setExplicits(itemView: ListItemView, vertical: boolean): void;
}
declare abstract class ListItemView extends ListElement {
    private static readonly MANDATORY_STYLES;
    protected _owner: IItemViewOwner;
    private _prevStyles;
    private _layout;
    private _extra;
    private _rowStyle;
    private _rowProps;
    private _layoutChanged;
    protected _layoutView: LayoutViewType;
    private _extraView;
    private _expander;
    private _expanderPos;
    private _expanderSize;
    indent: number;
    bodyIndent: number;
    bodyMargin: number;
    detailed: boolean;
    alternate: boolean;
    rowState: RtDataRowState;
    checked: boolean;
    selected: boolean;
    searched: boolean;
    private _fullMode;
    protected _vertical: boolean;
    protected _padding: ISides;
    protected _szNear: ISize;
    protected _szFar: ISize;
    aniTag: any;
    oldPos: number;
    newPos: number;
    protected _expHeight: number;
    protected _expWidth: number;
    constructor(doc: Document);
    abstract dv(): IDataView;
    abstract row(): number;
    abstract model(): GroupItemType;
    abstract group(): Group;
    abstract index(): number;
    abstract gvindex(): number;
    abstract vindex(): number;
    layout(): ListLayoutType;
    layoutView(): LayoutViewType;
    setLayout(rowLayout: IRowLayout, owner: IListViewOwner): void;
    protected _isLayoutChanged(owner: IListViewOwner): boolean;
    simpleViewByModel(layout: LayoutField, deep: boolean): SimpleLayoutView<any>;
    simpleViewByDom(dom: Element, deep: boolean): SimpleLayoutView<any>;
    simpleViewByTag(tag: string, deep: boolean): SimpleLayoutView<any>;
    fieldViewByField(fieldName: string, deep: boolean): LayoutFieldView;
    valueViewByTag(tag: string, deep: boolean): LayoutLiteralView;
    setTheme(theme: string): void;
    setItemData(name: string, value: any): void;
    setLayoutPos(off: number, pos: number): void;
    protected abstract getItemStyle(manager: ILayoutViewManager): {
        itemDef?: CSSStyles;
        levelDef?: CSSStyles;
        dynamic?: StyleOrClass;
    };
    protected abstract getItemClass(): string;
    protected _getOverflow(): string;
    protected _getContentPosition(): string;
    protected _doInitContent(doc: Document, div: HTMLElement): void;
    protected _doPrepareExpander(doc: Document): void;
    protected _doPrepareRender(doc: Document, owner: IItemViewOwner): void;
    protected _doApplyStyles(css: CSSStyleDeclaration): void;
    setExplicit(width: number, height: number): ListItemView;
    protected _doMeasure(doc: Document, hint: IItemViewOwner, hintWidth: number, hintHeight: number): ISize;
    protected _doRender(doc: Document, width: number, height: number): void;
    protected _isRelativeLayout(): boolean;
    setFillHeight(fill: boolean): void;
    protected _doAfterRender(): void;
    protected _getPadding(): ISides;
    protected _getExpander(): {
        pos: RtControlBarPosition;
        size: number;
    };
    protected _isExpanded(): boolean;
    protected _doMeasureSide(pos: RtControlBarPosition, vertical: boolean, hintWidth: number, hintHeight: number): ISize;
    protected _doRenderNear(vertical: boolean, x: number, y: number, width: number, height: number): void;
    protected _doRenderFar(vertical: boolean, x: number, y: number, width: number, height: number): void;
    _borrowed(): void;
    _returned(): void;
}
declare abstract class RowViewBase extends ListItemView {
    static readonly ROW_CLASS = "rtc-row";
    static readonly CLASS_NAME: string;
    static isRowView(dom: Element): boolean;
    protected _rowCell: RowBarCell;
    protected _editCell: EditBarCell;
    _dv: IDataView;
    _row: number;
    _rowid: number;
    _gindex: number;
    _gvindex: number;
    _model: GroupRowType;
    _master: boolean;
    _szLine: number;
    _last: boolean;
    _groupLast: boolean;
    get rowCell(): RowBarCell;
    get editCell(): EditBarCell;
    dv(): IDataView;
    row(): number;
    model(): GroupRowType;
    group(): Group;
    index(): number;
    gvindex(): number;
    vindex(): number;
    setTable(table: TableModel): void;
    isRow(row: number): boolean;
    setRow(dv: IDataView, row: number, id: number, model: GroupRowType): RowViewBase;
    setTouched(touched: boolean): void;
    getNearIndent(indent: RtRowIndent): number;
    getFarIndent(indent: RtRowIndent): number;
    protected getItemStyle(manager: ILayoutViewManager): {
        itemDef?: CSSStyles;
        levelDef?: CSSStyles;
        dynamic?: StyleOrClass;
    };
    protected getItemClass(): string;
    protected _isExpanded(): boolean;
    protected _doPrepareRender(doc: Document, owner: IItemViewOwner): void;
    protected _doMeasureSide(pos: RtControlBarPosition, vertical: boolean, hintWidth: number, hintHeight: number): ISize;
    protected _doRenderNear(vertical: boolean, x: number, y: number, width: number, height: number): void;
    protected _doRenderFar(vertical: boolean, x: number, y: number, width: number, height: number): void;
}
declare class ListRowView extends RowViewBase {
    static readonly LINE_STYLES: {
        position: string;
        boxSizing: string;
        margin: string;
        padding: string;
    };
    private _line;
    protected _getExpander(): {
        pos: RtControlBarPosition;
        size: number;
    };
    protected _prepareRowBorder(doc: Document, owner: IItemViewOwner): void;
    protected _doPrepareRender(doc: Document, owner: IItemViewOwner): void;
    protected _doMeasure(doc: Document, hint: any, hintWidth: number, hintHeight: number): ISize;
    getNearIndent(indent: RtRowIndent): number;
    getFarIndent(indent: RtRowIndent): number;
    protected _doRender(doc: Document, width: number, height: number): void;
}

interface ILayoutViewManager {
    layoutContainer: any;
    owner(): IListViewOwner;
    data(): IDataView;
    isVertical(): boolean;
    isSkeleton(): boolean;
    startIndent(): number;
    endIndent(): number;
    createLayoutView(doc: Document, layout: ListLayoutType): LayoutViewType;
    borrowRenderer(renderer: RtRendererBase): RtRendererBaseImpl<any>;
    freeRenderer(renderer: RtRendererBaseImpl<any>): void;
    useImage(src: string): void;
    getImageSize(src: string): ISize;
    getIcon(iconSet: string, iconName: string): IRtIconInfo;
    textFormatter: RtTextFormatter;
    booleanFormatter: RtBooleanFormatter;
    numberFormatter: RtNumberFormatter;
    dateFormatter: RtDateFormatter;
}
declare abstract class LayoutChildView<T extends LayoutChild> extends ListElement {
    protected _model: T;
    protected _manager: ILayoutViewManager;
    _relWidth: number;
    _relHeight: number;
    _explicitWidth: number;
    _explicitHeight: number;
    _padding: IPadding;
    _expand: number;
    constructor(doc: Document, model: T, contentable: boolean, className: string);
    model(): T;
    manager(): ILayoutViewManager;
    abstract tag(): string;
    isSpacer(): boolean;
    abstract prepareView(manager: ILayoutViewManager): void;
    prepareLayout(doc: Document, hint: any): void;
    measureLayout(doc: Document, hint: any, maxWidth: number, maxHeight: number): ISize;
    protected abstract _doMeasureLayout(doc: Document, hint: any, maxWidth: number, maxHeight: number): ISize;
    protected _doMeasure(doc: Document, hint: any, hintWidth: number, hintHeight: number): ISize;
    protected _doApplyImportantStyles(css: CSSStyleDeclaration): void;
}
declare abstract class ListLayoutView<T extends ListLayout> extends LayoutChildView<T> {
    static readonly CLASS_NAME = "-rtc-layout-";
    static isView(dom: Element): boolean;
    root: boolean;
    protected _visibles: LayoutChildView<T>[];
    constructor(doc: Document, model: T);
    tag(): string;
    scrollable(): boolean;
    build(doc: Document, manager: ILayoutViewManager): void;
    refreshModels(layout: T): void;
    saveEditValues(manager: ILayoutViewManager | IListViewOwner): void;
    fieldBy(field: string, deep: boolean): LayoutFieldView;
    childByTag(tag: string, deep?: boolean): RtElement;
    simpleById(id: string, deep: boolean): SimpleLayoutView<any>;
    simpleByModel(layout: LayoutField, deep: boolean): SimpleLayoutView<any>;
    simpleByDom(dom: Element, deep: boolean): SimpleLayoutView<any>;
    getRenderer(dom: Element): RtRendererBase;
    simpleBy(tag: string, deep: boolean): SimpleLayoutView<any>;
    literalBy(tag: string, deep: boolean): LayoutLiteralView;
    simplesByRenderer(renderer: string): SimpleLayoutView<any>[];
    getValues(manager: ILayoutViewManager): RtRowValues;
    protected _getValues(manager: ILayoutViewManager, values: RtRowValues): void;
    needMeasuredSize(): boolean;
    protected _doInitContent(doc: Document, div: HTMLElement): void;
    prepareView(manager: ILayoutViewManager): void;
    protected _doPrepareRender(doc: Document, manager: ILayoutViewManager): void;
    protected _doApplyStyles(css: CSSStyleDeclaration): void;
    protected _doApplyImportantStyles(css: CSSStyleDeclaration): void;
    prepareLayout(doc: Document, hint: any): void;
    protected _doRender(doc: Document, width: number, height: number): void;
    protected _doAfterRender(): void;
    protected abstract _doLayoutContent(doc: Document, width: number, height: number): void;
    protected _canContain(layout: LayoutChild): boolean;
    protected _getChildMaxWidth(child: ListLayout, maxWidth: number): number;
    protected _getChildMaxHeight(child: ListLayout, maxHeight: number): number;
    protected _defaultExplicitWidth(maxWidth: number): number;
    protected _defaultExplicitHeight(maxHeight: number): number;
    protected _measureChildren(visibles: LayoutChildView<T>[], doc: Document, hint: any, maxWidth: number, maxHeight: number, callback: (v: LayoutChildView<T>) => void): void;
}
declare abstract class SimpleLayoutView<T extends SimpleLayoutChild> extends LayoutChildView<T> implements IRenderContext {
    static readonly CLASS_NAME = "-rtc-field-";
    protected _value: any;
    private _selected;
    private _focused;
    private _renderer;
    private _spacer;
    private _prevClass;
    private _prevStyles;
    protected _editValue: any;
    private _ctx;
    constructor(doc: Document, model: T);
    get layout(): T;
    needMeasureRenderer(): boolean;
    model(): T;
    value(): any;
    renderer(): RtRendererBase;
    rendererImpl(): IRtRendererImpl;
    tag(): string;
    get selected(): boolean;
    get focused(): boolean;
    get row(): number;
    get gindex(): number;
    field(): string;
    align(): RtHorizontalAlign;
    getValue(field: string): any;
    useImage(src: string): void;
    getImageSize(src: string): ISize;
    getIcon(iconSet: string, iconName: string): IRtIconInfo;
    inflate(ps: RtParamString): string;
    textFormatter(): RtTextFormatter;
    booleanFormatter(): RtBooleanFormatter;
    numberFormatter(): RtNumberFormatter;
    dateFormatter(): RtDateFormatter;
    getEditValue(manager: ILayoutViewManager | IListViewOwner): IRtFieldValue;
    setEditValue(manager: ILayoutViewManager | IListViewOwner, value: any): void;
    saveEditValue(manager: ILayoutViewManager | IListViewOwner): void;
    needRendererWidth(renderer: RtRendererImpl<any>): boolean;
    needRendererHeght(renderer: RtRendererImpl<any>): boolean;
    protected _getDisplayStyle(): string;
    isSpacer(): boolean;
    protected _doInitDom(doc: Document, dom: HTMLElement): void;
    isDom(dom: Element): boolean;
    prepareView(manager: ILayoutViewManager): void;
    protected _setValue(control: RtControlOrWrapper, layout: SimpleLayoutChild): void;
    protected _doPrepareRender(doc: Document, manager: ILayoutViewManager): void;
    protected _doApplyStyles(css: CSSStyleDeclaration): void;
    protected _doMeasureLayout(doc: Document, hint: any, hintWidth: number, hintHeight: number): ISize;
    protected _doRender(doc: Document, width: number, height: number): void;
    freeRenderer(): void;
    protected _getRenderSize(): ISize;
}
declare class LayoutFieldView extends SimpleLayoutView<LayoutField> {
    field(): string;
}
declare class LayoutLiteralView extends SimpleLayoutView<LayoutLiteral> {
}

interface IRtEditorClickArgs {
    control: ControlOrWrapper;
    element: Element;
    editor: object;
    row?: number;
    field?: string;
}
type RtEditorClick = (args: IRtEditorClickArgs) => boolean;
type RtEditorStyleCallback = (args: IRtStyleCallbackArgs) => CSSStyles;
interface IRtEditor {
    type(): string;
    id?: string;
    hint?: string;
    style?: CSSStyles;
    styleCallback?: RtEditorStyleCallback;
    clickable?: boolean;
    onClick: RtEditorClick;
    value: any;
}
declare abstract class RtEditor extends RtRendererBase implements IRtEditor {
    private _hint;
    private _clickable;
    private _onClick;
    private _value;
    private _clickArgs;
    get hint(): string;
    set hint(value: string);
    get clickable(): boolean;
    set clickable(value: boolean);
    get onClick(): RtEditorClick;
    set onClick(value: RtEditorClick);
    get value(): any;
    set value(value: any);
    click(control: ListControl, dom: Element, row: number, field: string): boolean;
    longPressed(control: ListControl, row: number, field: string): boolean;
    protected _doClick(control: ListControl, dom: Element, row: number, field: string): boolean;
    protected _doLongPressed(control: ListControl, row: number, field: string): boolean;
}
declare abstract class BoundableEditor extends RtEditor {
    private _fitWidth;
    private _fitHeight;
    get fitWidth(): number;
    set fitWidth(value: number);
    get fitHeight(): number;
    set fitHeight(value: number);
    getFitWidth(): number;
    getFitHeight(): number;
}

interface IRtLayoutContext {
}
type RtLayoutClassCallback = (ctx: IRtLayoutContext) => string;
type RtLayoutStyleCallback = (ctx: IRtLayoutContext) => CSSStyles;
interface IRenderContext {
    doc: Document;
    row: number;
    gindex: number;
    layout: SimpleLayoutChild;
    field(): string;
    value(): any;
    align(): RtHorizontalAlign;
    selected?: boolean;
    focused?: boolean;
    tag(): any;
    manager(): ILayoutViewManager;
    createElement(tag: string): HTMLElement;
    getValue(field: string): any;
    useImage(src: string): void;
    getImageSize(src: string): ISize;
    getIcon(iconSet: string, iconName: string): IRtIconInfo;
    inflate(ps: RtParamString): string;
    textFormatter(): RtTextFormatter;
    booleanFormatter(): RtBooleanFormatter;
    numberFormatter(): RtNumberFormatter;
    dateFormatter(): RtDateFormatter;
    needMeasureRenderer(): boolean;
    _explicitWidth: number;
    _explicitHeight: number;
    _padding: IPadding;
}
interface IRtRendererBaseImpl {
    model(): RtRendererBase;
    setModel(value: RtRendererBase): void;
    prepare(ctx: IRenderContext, div: HTMLDivElement): void;
    getStyle(row: number): CSSStyles;
    applyStyle(layout: HTMLElement, row: number): void;
    measureLayout(ctx: IRenderContext, div: HTMLDivElement, hintWidth: number, hintHeight: number): ISize;
    renderLayout(ctx: IRenderContext, div: HTMLDivElement, width: number, height: number): void;
    unprepare(ctx: IRenderContext, div: HTMLDivElement): void;
}
interface IRtRendererImpl extends IRtRendererBaseImpl {
}
interface IRtEditorImpl extends IRtRendererBaseImpl {
}
declare class LayoutChildProps {
    constructor(props?: any);
}
interface IRtLayoutChild {
    id: any;
    visible?: boolean;
    width?: SizeValue;
    height?: SizeValue;
    minWidth?: SizeValue;
    minHeight?: SizeValue;
}
declare abstract class LayoutChild extends RtObject {
    private _visible;
    private _width;
    private _height;
    _minWidth: RtPercentSize;
    _minHeight: RtPercentSize;
    tid: number;
    id: any;
    _parent: ListLayout;
    tag: string;
    _childProps: LayoutChildProps;
    _widthDim: IPercentSize;
    _heightDim: IPercentSize;
    _leftDim: IPercentSize;
    _rightDim: IPercentSize;
    _topDim: IPercentSize;
    _bottomDim: IPercentSize;
    inCell: boolean;
    scope: any;
    classCallback: RtLayoutClassCallback;
    styleCallback: RtLayoutStyleCallback;
    constructor(id: any, childProps: LayoutChildProps);
    loadProps(props: any): LayoutChild;
    getChildProp(prop: string): any;
    abstract setRow(dv: IDataView, row: number, gindex: number): void;
    get visible(): boolean;
    set visible(value: boolean);
    get width(): SizeValue;
    set width(value: SizeValue);
    get height(): SizeValue;
    set height(value: SizeValue);
    get minWidth(): SizeValue;
    set minWidth(value: SizeValue);
    get minHeight(): SizeValue;
    set minHeight(value: SizeValue);
    getLeftIn(domain: number): number;
    getRightIn(domain: number): number;
    getTopIn(domain: number): number;
    getBottomIn(domain: number): number;
    protected _doLoadProps(props: any): void;
    _internalChildProps(): any;
}
declare abstract class SimpleLayoutChild extends LayoutChild {
    private _align;
    private _valign;
    private _class;
    private _style;
    dv: IDataView;
    row: number;
    gindex: number;
    renderer: RtRendererBase;
    value: any;
    constructor(id: string, value: any, style: CSSStyles, renderer: RtRendererBase, childProps: LayoutChildProps);
    get align(): RtHorizontalAlign;
    set align(value: RtHorizontalAlign);
    get valign(): RtVerticalAlign;
    set valign(value: RtVerticalAlign);
    get class(): string;
    set class(value: string);
    get style(): CSSStyles;
    setRow(dv: IDataView, row: number, gindex: number): void;
    getField(): string;
    getValue(): any;
}
declare class LayoutField extends SimpleLayoutChild {
    field: string;
    fprop: string[];
    fields: string[];
    constructor(id: any, field: string, fields: string[] | null, value: any, style: CSSStyles | null, renderer: RtRendererBase | null, childProps: LayoutChildProps | null);
    getField(): string;
    getValue(): any;
}
declare class LayoutLiteral extends SimpleLayoutChild {
    constructor(id: any, value: any, style: CSSStyles, renderer: RtRendererBase, childProps: LayoutChildProps);
}
type ListLayoutType = ListLayout | HtmlLayout | TableRowLayout | TableSectionLayout<any>;
interface IRowLayout {
    layout: ListLayoutType;
    rowProps?: object;
    rowStyle?: RtRowStyles;
}
interface IRtLayout extends IRtLayoutChild {
    noShrink?: boolean;
    scrollable(): boolean;
}
declare abstract class ListLayout extends LayoutChild implements IRtLayout {
    static readonly CHILD_PROPS: typeof LayoutChildProps;
    row: number;
    private _style;
    protected _children: LayoutChild[];
    _extra: ListLayout;
    constructor(id: any, children: LayoutChild[], style?: StyleOrClass, childProps?: LayoutChildProps);
    protected _doInitChildren(children: LayoutChild[]): void;
    abstract get type(): string;
    get style(): StyleOrClass;
    childCount(): number;
    children(): LayoutChild[];
    scrollable(): boolean;
    getChild(index: number): LayoutChild;
    tagBy(tag: string): LayoutChild;
    literalBy(tag: string): LayoutLiteral;
    fieldBy(field: string): LayoutField;
    canContainHspace(): boolean;
    canContainVspace(): boolean;
    setRow(dv: IDataView, row: number, gindex: number): void;
    getOrderedChildren(): LayoutChild[];
    getSimples(): SimpleLayoutChild[];
}
interface IRtHtmlLayout {
}
declare class HtmlLayout extends RtObject implements IRtHtmlLayout {
    tid: number;
    private _dom;
    private _tokens;
    _extra: ListLayoutType;
    constructor(template: TemplateHtmlLayout);
    clone(): HTMLElement;
    setRow(dv: IDataView, row: number, gindex: number): void;
    inflate(inflater: IRtParamInflater): void;
    apply(target: HTMLElement): void;
}
declare class TableLayoutCell extends RtObject {
    col: number;
    row: number;
    cspan: number;
    rspan: number;
    layout: SimpleLayoutChild;
    style: CSSStyles;
    column: TableColumn;
    constructor(layout: SimpleLayoutChild);
}
declare abstract class TableLayoutSectionCell extends TableLayoutCell {
    constructor(layout: SimpleLayoutChild);
}
declare abstract class TableLayoutBase extends RtObject {
    tid: number;
    _extra: ListLayoutType;
    table: TableModel;
    cells: TableLayoutCell[];
    setTable(table: TableModel): void;
}
declare class TableRowLayout extends TableLayoutBase {
    row: number;
    constructor(template: TableRowTemplate, cells: TableLayoutCell[]);
    setRow(dv: IDataView, row: number, gindex: number): void;
}
declare class TableSectionLayout<T extends TableLayoutSectionCell> extends TableLayoutBase {
    constructor(template: TableTemplate, cells: T[]);
    setRow(dv: IDataView, row: number, gindex: number): void;
}

declare abstract class LayoutedElement extends ListElement {
    private _layoutView;
    private _layout;
    private _layoutChanged;
    private _owner;
    constructor(doc: Document, className?: string);
    dv(): IDataView;
    row(): number;
    setLayout(layout: ListLayoutType): void;
    getRenderer(dom: Element): RtRendererBase;
    simpleViewByDom(dom: Element, deep: boolean): SimpleLayoutView<any>;
    protected _doPrepareRender(doc: Document, hint: ILayoutViewManager): void;
    protected _doMeasure(doc: Document, hint: any, hintWidth: number, hintHeight: number): ISize;
    protected _doRender(doc: Document, width: number, height: number): void;
    protected _doAfterRender(): void;
}
declare abstract class ListSectionView<T extends ListSection<any>> extends ListElement {
    protected _model: T;
    private _padding;
    constructor(doc: Document, model: T, className?: string);
    model(): T;
    setModel(value: T): void;
    protected _doMeasure(doc: Document, hint: any, hintWidth: number, hintHeight: number): ISize;
    protected _doRender(doc: Document, width: number, height: number): void;
    protected abstract _doMeasureContent(doc: Document, hintWidth: number, hintHeight: number): ISize;
    protected abstract _doRenderContent(doc: Document, width: number, height: number): void;
}
declare abstract class LayoutedSectionView<T extends LayoutedSection<any>> extends ListSectionView<T> {
    private _layout;
    private _rowStyle;
    private _layoutChanged;
    protected _layoutView: LayoutViewType;
    protected _layoutManager: ILayoutViewManager;
    constructor(doc: Document, model: T, className: string);
    layoutView(): LayoutViewType;
    setLayout(layout: {
        layout: ListLayoutType;
        rowStyle: CSSStyles | string;
    }): void;
    click(dom: Element, x: number, y: number): void;
    clickable(): boolean;
    protected _doInitContent(doc: Document, div: HTMLElement): void;
    protected _doPrepareRender(doc: Document, manager: ILayoutViewManager): void;
    protected _doApplyStyles(css: CSSStyleDeclaration): void;
    protected _doMeasureContent(doc: Document, hintWidth: number, hintHeight: number): ISize;
    protected _doRenderContent(doc: Document, width: number, height: number): void;
    protected _doAfterRender(): void;
    protected _getRenderWidth(hintWidth: number): number;
}

declare abstract class ActionableSectionView<T extends ActionableSection<any>> extends LayoutedSectionView<T> {
    static readonly HEAD_CLASS = "rtc-section-head";
    static readonly TAIL_CLASS = "rtc-section-foot";
    protected _headView: RtElement;
    protected _tailView: RtElement;
    private _headActions;
    private _tailActions;
    private _headButtons;
    private _footButtons;
    private _visHeadButtons;
    private _visTailButtons;
    private _wHead;
    private _hHead;
    private _wTail;
    private _hTail;
    private _gap;
    protected _doInitContent(doc: Document, div: HTMLElement): void;
    protected _doPrepareRender(doc: Document, manager: ILayoutViewManager): void;
    protected _doMeasureContent(doc: Document, hintWidth: number, hintHeight: number): ISize;
    protected _doMeasureHead(doc: Document, hintSize: number): ISize;
    protected _doMeasureTail(doc: Document, hintSize: number): ISize;
    protected _doRenderContent(doc: Document, width: number, height: number): void;
    protected _doRenderHead(view: RtElement, w: number, h: number): void;
    protected _doRenderTail(view: RtElement, w: number, h: number): void;
    protected _doAfterRender(): void;
    private $_prepareActions;
    private $_measureButtons;
}

declare class ListFooterView extends ActionableSectionView<ListFooter> {
    static readonly CLASS_NAME = "rtc-footer";
    constructor(doc: Document, model: ListFooter);
}

declare class ListHeaderView extends ActionableSectionView<ListHeader> {
    static readonly CLASS_NAME = "rtc-header";
    constructor(doc: Document, model: ListHeader);
}

declare class ScrollIndicatorView extends PositonableControlElement<ScrollIndicator> {
    static readonly CLASS_NAME = "rtc-scroll-indicator";
    static readonly BAR_CLASS = "rtc-scroll-indicator-bar";
    static readonly SELECTION_CLASS = "rtc-scroll-indicator-selection";
    static readonly TIP_DELAY = 2000;
    private _rate;
    private _bar;
    private _tip;
    private _tipTimer;
    private _tipped;
    private _tipHandler;
    constructor(doc: Document, model: ScrollIndicator);
    rate(): number;
    setRate(value: number, render: boolean): void;
    updateRate(owner: IListViewOwner, lastPos: number, lastHeight: number, lastOff: number, render: boolean): void;
    private $_clearTipTimers;
    protected _doInitDom(doc: Document, dom: HTMLElement): void;
    protected _doMeasure(doc: Document, hint: any, hintWidth: number, hintHeight: number): ISize;
    protected _doRender(doc: Document, width: number, height: number): void;
    clickable(): boolean;
    click(dom: Element, x: number, y: number): void;
    private $_render;
}

declare class PageScrollerView extends ListControlElement<PageScroller> {
    static readonly CLASS_NAME = "rtc-page-scroller";
    static readonly INDEX_CLASS = "rtc-page-scroller-index";
    static readonly END_CLASS = "rtc-page-scroller-end";
    static readonly CURRENT_CLASS = "rtc-page-scroller-current";
    static isPageIndex(dom: HTMLElement): number;
    private _owner;
    private _tag;
    private _firstContainer;
    private _first;
    private _lastContainer;
    private _last;
    private _pageContainer;
    private _pagePool;
    private _pageViews;
    private _pageMap;
    private _scrollPos;
    private _scrollOff;
    private _indexClicked;
    constructor(doc: Document, owner: IPagingOwner, model: PageScroller);
    get scrollPos(): number;
    get scrollOff(): number;
    scrollBy(delta: number): void;
    scrollTo(page: number): void;
    makeVisible(page: number, center?: boolean): void;
    isDom(dom: Element): boolean;
    protected _doPrepareRender(hint: any): void;
    protected _doMeasure(doc: Document, hint: any, hintWidth: number, hintHeight: number): ISize;
    protected _doRender(doc: Document, width: number, height: number): void;
    private $_getIndexView;
    private $_measureIndexView;
    private $_preparePages;
    private $_refreshView;
}

declare class HeadRowsView extends ListElement {
    static readonly CLASS_NAME = "rtc-head-rows";
    private _model;
    private _vertical;
    private _rowViews;
    constructor(doc: Document, model: HeadRows);
    get model(): HeadRows;
    get rowCount(): number;
    getRowView(index: number): ListRowView;
    protected _doInitDom(doc: Document, dom: HTMLElement): void;
    protected _doMeasure(doc: Document, hint: any, hintWidth: number, hintHeight: number): ISize;
    protected _doRender(doc: Document, width: number, height: number): void;
    private $_measureVert;
    private $_measureHorz;
    private $_renderVert;
    private $_renderHorz;
}

declare class LetterView extends ButtonElement {
    static readonly CLASS_NAME = "rtc-index-bar-letter";
    letter: string;
    constructor(doc: Document);
    setLetter(c: string): void;
    isActive(): boolean;
    setActive(value: boolean): void;
    protected _getDisplayStyle(): string;
    click(): void;
}
interface IIndexBarOwner {
    scrollToLetter(field: string, letter: string): void;
}
declare class IndexBarView extends ListControlElement<IndexBar> {
    static readonly CLASS_NAME = "rtc-index-bar";
    private _owner;
    private _letterViews;
    private _hChar;
    constructor(doc: Document, owner: IIndexBarOwner, model: IndexBar);
    protected _doDestory(): void;
    letterCount(): number;
    getLetterView(index: number): LetterView;
    clickLetter(view: LetterView): void;
    protected _doMeasure(doc: Document, hint: any, hintWidth: number, hintHeight: number): ISize;
    protected _doRender(doc: Document, width: number, height: number): void;
}

declare class ScrollBarView extends ListControlElement<ScrollBar> {
    static readonly CLASS_NAME = "rtc-scroll-bar";
    static readonly THUMB_CLASS = "rtc-scroll-bar-thumb";
    private _thumb;
    private _len;
    private _page;
    private _pos;
    private _thumbSum;
    private _thumbed;
    private _vertical;
    constructor(doc: Document, model: ScrollBar);
    setVertical(vertical: boolean): void;
    setScroll(len: number, page: number, pos: number, render: boolean): void;
    calcPosition(p: number): number;
    reset(): void;
    isView(dom: Element): boolean;
    protected _doInitDom(doc: Document, dom: HTMLElement): void;
    protected _doMeasure(doc: Document, hint: any, hintWidth: number, hintHeight: number): ISize;
    protected _doRender(doc: Document, width: number, height: number): void;
    private $_calcThumb;
    private $_setScrollBar;
}

declare class SelectionView extends ListElement {
    static readonly CLASS_NAME = "rtc-selection-mask";
    private _handles;
    vertical: boolean;
    constructor(doc: Document);
    protected _doInitDom(doc: Document, dom: HTMLElement): void;
    protected _doMeasure(doc: Document, hint: any, hintWidth: number, hintHeight: number): ISize;
    protected _doRender(doc: Document, width: number, height: number): void;
}

declare class PanelButtonElement extends ButtonElement {
    static readonly CLASS_NAME = "rtc-row-button rtc-panel-button";
    model: ListButton;
    constructor(doc: Document);
    protected _doDestory(): void;
    setModel(control: RtControl, model: ListButton): PanelButtonElement;
    protected _getPositionStyle(): string;
    click(owner: IListViewOwner): void;
}
declare abstract class ListPanelView<T extends ListPanel<any>> extends ListElement {
    private static readonly DURATION;
    private _model;
    protected _padding: ISides;
    protected _manager: ILayoutViewManager;
    constructor(doc: Document, model: T, className: string);
    model(): T;
    refresh(manager: ILayoutViewManager, width?: number, height?: number): void;
    click(dom: Element, x: number, y: number): boolean;
    clickButton(button: PanelButtonElement, control: any): boolean;
    protected _doInitStyle(style: CSSStyles2): void;
    protected _doPrepareRender(doc: Document, hint: any): void;
    measure(doc: Document, hint: any, maxWidth: number, maxHeight: number): ISize;
    protected _doMeasure(doc: Document, hint: any, hintWidth: number, hintHeight: number): ISize;
    protected _doAfterRender(): void;
    protected abstract _doMeasureContent(doc: Document, hintWidth: number, hintHeight: number): ISize;
    protected _createButton(doc: Document, container: RtElement, button: ListButton): PanelButtonElement;
}
declare abstract class DialogPanelView<T extends DialogPanel<T>> extends ListPanelView<T> {
    private _bodyContainer;
    protected _buttonContainer: RtElement;
    private _buttonViews;
    private _layoutManager;
    private _hButton;
    private _wButton;
    private _hBody;
    private _bodyPad;
    constructor(doc: Document, model: T, className: string);
    getButton(model: ListButton): PanelButtonElement;
    buttonOf(dom: Element): PanelButtonElement;
    protected _getDefaultButtonPosition(): RtPanelButtonPosition;
    getButtonPosition(model: T): RtPanelButtonPosition;
    isDom(dom: Element): boolean;
    protected _doInitStyle(style: CSSStyles2): void;
    protected _doInitContent(doc: Document, div: HTMLElement): void;
    protected _doPrepareRender(doc: Document, manager: any): void;
    protected _doMeasureContent(doc: Document, hintWidth: number, hintHeight: number): ISize;
    protected _doRender(doc: Document, width: number, height: number): void;
    protected _doAfterRender(): void;
    clickButton(button: PanelButtonElement, control: any): boolean;
    protected _initBody(doc: Document, container: RtElement): void;
    protected _prepareBody(doc: Document, container: RtElement, manager: any, model: T): void;
    private $_initButtons;
    protected _prepareButtons(buttons: PanelButtonElement[]): void;
    protected abstract _measureBody(doc: Document, manager: ILayoutViewManager, container: RtElement, model: T, width: number, height: number): ISize;
    protected _measureButtons(buttons: PanelButtonElement[]): void;
    protected _renderBody(doc: Document, container: RtElement, width: number, height: number): void;
    protected _submit(): boolean;
}

declare class FormPanelView extends DialogPanelView<FormPanel> {
    static readonly CLASS_NAME = "rtc-form-panel";
    private _layout;
    private _layoutChanged;
    private _layoutView;
    constructor(doc: Document, model: FormPanel);
    setLayout(layout: ListLayoutType): void;
    protected _prepareBody(doc: Document, container: RtElement, manager: ILayoutViewManager, model: FormPanel): void;
    protected _measureBody(doc: Document, manager: ILayoutViewManager, container: RtElement, model: FormPanel, width: number, height: number): ISize;
    protected _renderBody(doc: Document, container: RtElement, width: number, height: number): void;
}

declare class ButtonPanelView extends ListPanelView<ButtonPanel> {
    static readonly CLASS_NAME = "rtc-button-panel";
    static createView(doc: Document, panel: ButtonPanel, display: RtButtonArrange): ButtonPanelView;
    private _buttonContainer;
    private _buttonViews;
    constructor(doc: Document, model: ButtonPanel);
    display(): RtButtonArrange;
    protected _doInitContent(doc: Document, div: HTMLElement): void;
    protected _doPrepareRender(doc: Document, hint: any): void;
    protected _doMeasureContent(doc: Document, hintWidth: number, hintHeight: number): ISize;
    protected _doRender(doc: Document, width: number, height: number): void;
    private $_prepareButtons;
    protected _containerStyle(): CSSStyles2;
    protected _layoutButtons(buttons: PanelButtonElement[], gap: string): void;
}

declare class ListFeedback extends RtElement {
    private _endBalloon;
    private _clearTimer;
    clearFeedbacks(): void;
    removeEndBalloon(): void;
    showEndBalloon(bounds: IRect, dir: RtDirection): void;
    protected _doInitStyle(style: CSSStyles2): void;
}

declare class SearchBarView extends ListSectionView<SearchBar> {
    static readonly CLASS_NAME = "rtc-search-bar";
    private _input;
    private _search;
    private _reset;
    private _menu;
    private _result;
    constructor(doc: Document, model: SearchBar);
    canEnter(): boolean;
    search(): void;
    setResult(result: SearchResult): void;
    isDom(dom: Element): boolean;
    clickable(): boolean;
    click(dom: Element, x: number, y: number): void;
    protected _doInitContent(doc: Document, div: HTMLElement): void;
    protected _doPrepareRender(doc: Document, owner: IListViewOwner): void;
    protected _doMeasureContent(doc: Document, hintWidth: number, hintHeight: number): ISize;
    protected _doRenderContent(doc: Document, width: number, height: number): void;
    private $_prepareButtons;
}

declare abstract class ListMenuItemElement<T extends ListMenuItem | ListMenuGroup> extends RtElement {
    protected _model: T;
    private _divImage;
    protected _divMenu: HTMLDivElement;
    private _spanLabel;
    protected _shape: RtShape;
    constructor(doc: Document, className: string);
    model(): T;
    setModel(model: T, bottomLine: boolean): void;
    refresh(): void;
    touched(): void;
    clearTouched(): void;
    isDom(dom: Element): boolean;
    protected _doInitStyle(style: CSSStyles2): void;
    protected _doInitDom(doc: Document, dom: HTMLElement): void;
}
declare class ListMenuView extends ListElement {
    private _model;
    private _itemContainer;
    private _itemPool;
    private _groupPool;
    private _itemViews;
    private _lineGap;
    private _touched;
    constructor(doc: Document);
    get model(): ListMenu;
    show(menu: ListMenu, width: number, height: number, animate: boolean): void;
    hide(animate: boolean): boolean;
    private $_refresh;
    private $_resetRadios;
    isMenuView(dom: Element): boolean;
    setTouched(view: ListMenuItemElement<any>): void;
    clearTouched(): void;
    clickItem(control: any, item: ListMenuItemElement<any>): boolean;
    protected _doInitStyle(style: CSSStyles2): void;
    protected _doInitContent(doc: Document, div: HTMLElement): void;
    protected _doPrepareRender(doc: Document, menu: ListMenu): void;
    protected _doMeasure(doc: Document, hint: any, hintWidth: number, hintHeight: number): ISize;
    protected _doRender(doc: Document, width: number, height: number): void;
}

declare class FieldBarView extends ListSectionView<FieldBar> {
    static readonly CLASS_NAME = "rtc-field-bar";
    private _itemViews;
    constructor(doc: Document, model: FieldBar);
    protected _doInitContent(doc: Document, div: HTMLElement): void;
    protected _doMeasureContent(doc: Document, hintWidth: number, hintHeight: number): ISize;
    protected _doRenderContent(doc: Document, width: number, height: number): void;
    clickable(): boolean;
    isDom(dom: Element): boolean;
    click(dom: Element, x: number, y: number): void;
    private $_buildItems;
}

declare class SubheaderView extends LayoutedSectionView<Subheader> {
    static readonly CLASS_NAME = "rtc-subheader";
    constructor(doc: Document, model: Subheader);
    protected _getRenderWidth(hintWidth: number): number;
    protected _doMeasure(doc: Document, hint: any, hintWidth: number, hintHeight: number): ISize;
    protected _doRenderContent(doc: Document, width: number, height: number): void;
}

declare abstract class GroupItemView<T extends GroupDecoItem> extends ListItemView {
    _model: T;
    model(): T;
    group(): Group;
    row(): number;
    dv(): IDataView;
    gvindex(): number;
    vindex(): number;
    index(): number;
    setModel(model: T): GroupItemView<T>;
    protected getItemStyle(manager: ILayoutViewManager): {
        itemDef?: CSSStyles;
        levelDef?: CSSStyles;
        dynamic?: CSSStyles;
    };
}

declare enum RtToastPosition {
    TOP = "top",
    BOTTOM = "bottom",
    CENTER = "center"
}
interface IRtToast {
    message: string;
    html?: string;
    duration?: number;
    position?: RtToastPosition;
    margin?: number;
    style?: StyleOrClass;
}

interface ITableSectionViewOwner {
    owner(): IListViewOwner;
    table: TableModel;
    startIndent(): number;
    endIndent(): number;
    rowOffset(): number;
}
declare class TableSectionCellView<T extends TableSectionCell<any>> extends ListElement {
    protected _model: T;
    protected _modelChanged: boolean;
    private _span;
    private _shape;
    private _image;
    private _views;
    constructor(doc: Document, className: string);
    setModel(model: T): void;
    click(dom: Element): void;
    isDom(dom: Element): boolean;
    protected _doInitStyle(style: CSSStyles2): void;
    protected _doApplyStyles(css: CSSStyleDeclaration): void;
    protected _doPrepareRender(doc: Document, hint: any): void;
    protected _doMeasure(doc: Document, hint: any, hintWidth: number, hintHeight: number): ISize;
    protected _doRender(doc: Document, width: number, height: number): void;
    protected _doModelChanged(model: T): void;
}
declare abstract class TableSectionLayoutView<T extends TableSection> extends TableLayoutView {
    model: T;
    clearCells(): void;
    buildCells(doc: Document, table: TableModel, layout: TableRowLayout): void;
    protected _getTable(): TableModel;
    protected _getMinRowHeight(row: number): number;
    protected _doPrepareRender(doc: Document, hint: any): void;
    protected _doAfterRender(): void;
}
declare abstract class TableSectionView<T extends TableSection> extends ListElement {
    static readonly CLASS_NAME: string;
    protected _model: T;
    private _modelChanged;
    protected _headView: TableSectionCellView<any>;
    protected _footView: TableSectionCellView<any>;
    protected _layoutView: TableSectionLayoutView<any>;
    private _startIndent;
    private _endIndent;
    private _rowOff;
    constructor(doc: Document, className: string);
    setModel(model: T): void;
    click(dom: Element, x: number, y: number): void;
    clickable(): boolean;
    protected _doPrepareRender(doc: Document, owner: ITableSectionViewOwner): void;
    protected _doMeasure(doc: Document, owner: ITableSectionViewOwner, hintWidth: number, hintHeight: number): ISize;
    protected _doRender(doc: Document, width: number, height: number): void;
    setLayoutPos(rowOff: number): void;
    protected abstract _createLayoutView(doc: Document): TableSectionLayoutView<any>;
    protected abstract _createHeadView(doc: Document): TableSectionCellView<any>;
    protected abstract _createFootView(doc: Document): TableSectionCellView<any>;
    private $_clipView;
}
declare class TableHeaderView extends TableSectionView<TableHeader> {
    static readonly CLASS_NAME: string;
    constructor(doc: Document);
    protected _createLayoutView(doc: Document): TableSectionLayoutView<any>;
    protected _createHeadView(doc: Document): TableSectionCellView<any>;
    protected _createFootView(doc: Document): TableSectionCellView<any>;
}
declare class TableFooterView extends TableSectionView<TableFooter> {
    static readonly CLASS_NAME: string;
    constructor(doc: Document);
    protected _createLayoutView(doc: Document): TableSectionLayoutView<any>;
    protected _createHeadView(doc: Document): TableSectionCellView<any>;
    protected _createFootView(doc: Document): TableSectionCellView<any>;
}

declare class TableRowView extends RowViewBase {
    static readonly TR_CLASS = "rtc-tr";
    static readonly CLASS_NAME: string;
    private _table;
    private _tableDirty;
    protected getItemClass(): string;
    protected _getPadding(): ISides;
    protected _isRelativeLayout(): boolean;
    protected _doPrepareRender(doc: Document, owner: IItemViewOwner): void;
    protected _doRender(doc: Document, width: number, height: number): void;
    protected _isLayoutChanged(owner: IListViewOwner): boolean;
    setTable(table: TableModel): void;
    setLayoutPos(off: number, pos: number): void;
    private $_clipView;
}

interface IListViewRenderInfo {
    table: TableModel;
    scrollPos: number;
    scrollOff: number;
    rowOffset: number;
}
declare abstract class ListRowAnimation<T extends ListBodyView> extends RtObject {
    protected _bodyView: T;
    constructor(bodyView: T);
    protected _doDestory(): void;
    start(): ListRowAnimation<T>;
    stop(): void;
    protected abstract _doStart(): boolean;
    protected abstract _doStop(): void;
}
declare abstract class ListView extends ListElement implements IItemViewOwner, ILayoutViewManager {
    static readonly CLASS_NAME = "rtc-list-view";
    static readonly PANEL_DURATION = 250;
    protected _owner: IListViewOwner;
    private _table;
    private _headRowsView;
    protected _bodyView: ListBodyView;
    protected _spareBodyView: ListBodyView;
    protected _headerView: ListHeaderView;
    private _subheaderView;
    protected _footerView: ListFooterView;
    private _searchBarView;
    private _fieldBarView;
    private _tableHeaderView;
    private _tableFooterView;
    private _searchResultView;
    private _scrollIndicatorView;
    private _indexBarView;
    private _scrollBarView;
    private _pageNavigatorView;
    private _pageScrollerView;
    private _pageMoveFeedback;
    private _sectionContainer;
    private _panelContainer;
    private _toolContainer;
    private _formPanelView;
    private _buttonPanelView;
    private _searchPanelView;
    private _filterPanelView;
    private _menuView;
    private _runScrollIndicator;
    private _runPageNavigator;
    private _headerViews;
    private _footerViews;
    private _layoutViews;
    private _panelViews;
    private _vertical;
    private _renderInfo;
    reqScrollPos: number;
    reqScrollOff: number;
    reqRowOffset: number;
    private _activePanel;
    private _menu;
    pageMoving: boolean;
    orderWidth: number;
    private _rowCell;
    private _editCell;
    private _startIndent;
    private _endIndent;
    textFormatter: RtTextFormatter;
    booleanFormatter: RtBooleanFormatter;
    numberFormatter: RtNumberFormatter;
    dateFormatter: RtDateFormatter;
    constructor(doc: Document, owner: IListViewOwner);
    protected _doDestory(): void;
    layoutContainer: any;
    isSkeleton(): boolean;
    startIndent(): number;
    endIndent(): number;
    createLayoutView(doc: Document, layout: ListLayoutType): LayoutViewType;
    borrowRenderer(renderer: RtRendererBase): RtRendererBaseImpl<any>;
    freeRenderer(renderer: RtRendererBaseImpl<any>): void;
    useImage(src: string): void;
    getImageSize(src: string): ISize;
    getIcon(iconSet: string, iconName: string): IRtIconInfo;
    rowBar: RowBar;
    editBar: EditBar;
    rightMargin: number;
    borderLine: RowBorderLine;
    focusMask: RowFocusMask;
    table: TableModel;
    rowBorderVisible(rv: ListRowView): boolean;
    setExplicits(itemView: ListItemView, vertical: boolean): void;
    owner(): IListViewOwner;
    data(): IDataView;
    isVertical(): boolean;
    isLandscape(): boolean;
    itemCount(): number;
    headRowsView(): HeadRowsView;
    formPanelView(): FormPanelView;
    buttonPanelView(): ButtonPanelView;
    bodyView(): ListBodyView;
    headerView(): ListHeaderView;
    subheaderView(): SubheaderView;
    footerView(): ListFooterView;
    searchBarView(): SearchBarView;
    fieldBarView(): FieldBarView;
    tableHeaderView(): TableHeaderView;
    tableFooterView(): TableFooterView;
    scrollIndicatorView(): ScrollIndicatorView;
    indexBarView(): IndexBarView;
    scrollBarView(): ScrollBarView;
    pageNavigatorView(): PageNavigatorView;
    pageScrollerView(): PageScrollerView;
    menuView(): ListMenuView;
    renderInfo(): IListViewRenderInfo;
    scrollPos(): number;
    scrollOff(): number;
    topRow(): number;
    rowOffset(): number;
    activePanel(): ListPanel<any>;
    menu(): ListMenu;
    getExpander(index: number): IRowExpander;
    protected _resetScrollStates(): void;
    scrollBy(delta: number): boolean | 'near' | 'far';
    scrollToEnd(row: number): void;
    rowOffsetBy(offset: number): boolean | 'near' | 'far';
    setTablePos(offset: number): void;
    pageChanged(page: number): void;
    closePanel(animate: boolean): void;
    showPanel(panel: ListPanel<any>, animate: boolean | IRtShowPanelOptions): void;
    togglePanel(panel: ListPanel<any>, animate: boolean): void;
    getPanel(dom: Element): ListPanelView<any>;
    isInPanel(dom: Element): boolean;
    isMenuView(dom: Element): boolean;
    showMenu(menu: ListMenu, animate: boolean): void;
    hideMenu(animate: boolean): boolean;
    canMovePage(dx: number, endEffect: boolean): boolean;
    canMoveSingle(dx: number, endEffect: boolean): boolean;
    getSpareBody(): ListBodyView;
    refreshPanel(): void;
    focusedRowChanged(focus: number, old: number): void;
    getLayoutView(dom: Element): LayoutedSectionView<LayoutedSection<any>> | TableSectionView<any>;
    addTooltipView(view: TooltipElement): void;
    removeTooltipView(view: TooltipElement): void;
    addFeedback(dom: HTMLElement): void;
    showToast(toast: IRtToast): void;
    keepSelectInfo(selection: Selection): void;
    getSelectInfo(): {
        start: number;
        end: number;
    };
    protected _doPrepareRender(doc: Document, hint: IListViewRenderInfo): void;
    private $_calcIndents;
    protected _measureTable(table: TableModel, hintWidth: number, hintHeight: number): void;
    private $_measureFull;
    protected _doMeasure(doc: Document, hint: any, hintWidth: number, hintHeight: number): ISize;
    protected _doRender(doc: Document, width: number, height: number): void;
    protected _doMeasureHorz(doc: Document, hintWidth: number, hintHeight: number): ISize;
    protected _doRenderHorz(doc: Document, width: number, height: number): void;
    protected _doAfterRender(): void;
    protected abstract _createBodyView(doc: Document, noCache: boolean, spare: boolean): ListBodyView;
    private $_destroyPanel;
    private $_getButtonPanel;
    private $_getFormPanel;
    private $_getSearchPanel;
    private $_getFilterPanel;
    private $_setScrollRate;
    private $_getPageLen;
    private $_setScrollBar;
    private $_getPanelView;
    private $_movePanel;
    private $_hidePanel;
    private $_showPanel;
}
interface IScrollResult {
    pos: number;
    off: number;
    row: number;
}
declare class AttachedRowView extends ListElement {
    static readonly CLASS_NAME = "rtc-attached-row";
    private _body;
    private _model;
    private _layout;
    private _rowStyle;
    private _layoutChanged;
    protected _layoutView: LayoutViewType;
    private _vertical;
    private _indicator;
    private _indiSize;
    private _indiType;
    private _padding;
    private _space;
    constructor(doc: Document, body: ListBodyView);
    protected _doDestory(): void;
    protected _getContentPosition(): string;
    protected _doPrepareRender(doc: Document, hint: any): void;
    protected _doApplyStyles(css: CSSStyleDeclaration): void;
    protected _doMeasure(doc: Document, hint: any, hintWidth: number, hintHeight: number): ISize;
    protected _doRender(doc: Document, width: number, height: number): void;
}
declare abstract class ListBodyView extends ListElement {
    static readonly CLASS_NAME = "rtc-body";
    static readonly DELETE_DURATION = 300;
    static readonly DETAIL_DURATION = 300;
    SIZE: 'width' | 'height';
    MEASURE_SIZE: 'mw' | 'mh';
    POS: 'x' | 'y';
    _preMode: boolean;
    protected _listView: ListView;
    protected _vertical: boolean;
    private _loadingView;
    private _emptyView;
    protected _feedback: ListFeedback;
    private _toolLayer;
    protected _table: TableModel;
    protected _startIndent: number;
    protected _endIndent: number;
    _rowViewPool: RowViewBase[];
    _tableRowViewPool: TableRowView[];
    _rowViewMap: {
        [row: number]: RowViewBase;
    };
    private _touchedRow;
    _deletingLayer: RtElement;
    _indentLayer: RtElement;
    _scrollLayer: RtElement;
    protected _itemLayer: RtElement;
    protected _itemSubLayer: RtElement;
    private _maskLayer;
    protected _attachedView: AttachedRowView;
    private _searchFieldView;
    private _focusView;
    private _selectionView;
    protected _commandRow: number;
    private _commandsView;
    private _commandPos;
    protected _noCache: boolean;
    protected _positionsDirty: boolean;
    protected _arVis: boolean;
    protected _scrollPos: number;
    protected _scrollOff: number;
    protected _topRow: number;
    protected _rowOffset: number;
    private _focusedRow;
    _searchResult: SearchResult;
    protected _rowEnded: boolean;
    protected _scrollEnded: boolean;
    protected _owner: IListViewOwner;
    protected _dv: IDataView;
    private _aniRequest;
    private _rowAnimation;
    private _deletingRowIds;
    private _detailingRow;
    _expWidth: number;
    _expHeight: number;
    constructor(doc: Document, fullMode: boolean);
    _setListView(listView: ListView): void;
    protected _doDestory(): void;
    listView(): ListView;
    owner(): IListViewOwner;
    isVertical(): boolean;
    data(): IDataView;
    scrollPos(): number;
    scrollOff(): number;
    topRow(): number;
    abstract bottomRow(): number;
    commandRow(): number;
    animating(): boolean;
    isRowEnded(): boolean;
    isScrollEnded(): boolean;
    abstract lastItemView(): ListItemView;
    itemLayerOff(): number;
    length(): number;
    isEmpty(): boolean;
    rowOffset(): number;
    canOffsetRow(): boolean;
    abstract itemViews(): ListItemView[];
    abstract clearItemViews(): void;
    abstract itemViewCount(): number;
    abstract rowViewCount(): number;
    abstract getItemView(index: number): ListItemView;
    abstract itemViewAt(x: number, y: number, pad: number): ListItemView;
    abstract getItemViewPoints(): number[];
    abstract validateViews(): void;
    abstract getPreLength(): number;
    abstract getPrePos(pos: number, off: number): number;
    abstract getExpander(index: number): IRowExpander;
    getGroupIndent(owner: IListViewOwner): number;
    addFeedback(dom: HTMLElement): void;
    indexOfRow(row: number): number;
    getRowView(row: number): RowViewBase;
    getRenderer(row: number, dom: Element): RtRendererBase;
    findSimpleLayoutView(row: number, tag: string): SimpleLayoutView<any>;
    findDom(row: number, id: string): HTMLElement;
    getRow(dom: Element): number;
    setTouchedRow(row: number): void;
    scrollBy(delta: number): boolean | 'near' | 'far';
    abstract scrollToEnd(row: number): void;
    abstract rowOffsetBy(delta: number): boolean | 'near' | 'far';
    resetRowOffset(max: number): number;
    setCommands(row: number, commands: IRowCommand[], animate: boolean): void;
    clearCommands(animate: boolean): boolean;
    isCommandVisible(): boolean;
    focusedRowChanged(focus: number, old: number): void;
    canMoveTo(row: number, target: ListItemView): boolean;
    abstract checkItemViewOrders(): void;
    abstract isRowVisible(row: number, full: boolean): boolean;
    abstract makeRowVisible(row: number): {
        pos: number;
        off: number;
    };
    protected _doInitStyle(style: CSSStyles2): void;
    protected _doPrepareRender(doc: Document, owner: IListViewOwner): void;
    protected _measureLayoutView(doc: Document, view: LayoutedElement, template: string, stockTemplate: string, inflater: IRtParamInflater, hintWidth: number, hintHeight: number): ISize;
    protected _renderLayoutedView(doc: Document, view: LayoutedElement, width: number, height: number): boolean;
    protected _createRowAnimation(): ListRowAnimation<ListBodyView>;
    protected _doMeasure(doc: Document, hint: any, hintWidth: number, hintHeight: number): ISize;
    private $_renderSelection;
    private $_renderSearchField;
    protected _doRender(doc: Document, width: number, height: number): void;
    setFocusedRow(row: number): void;
    resetFocusedView(): void;
    protected _doAfterRender(): void;
    abstract _itemPoints(): number[];
    protected abstract _doMeasureVert(doc: Document, hintWidth: number, hintHeight: number): ISize;
    protected abstract _doMeasureHorz(doc: Document, hintWidth: number, hintHeight: number): ISize;
    protected abstract _doRenderVert(doc: Document, width: number, height: number): void;
    protected abstract _doRenderHorz(doc: Document, width: number, height: number): void;
    protected abstract _doRenderSelection(doc: Document, selection: Selection, selectionView: SelectionView, width: number, height: number): void;
    protected abstract _doScrollNear(doc: Document, oldPos: number, oldOff: number, delta: number, hidth: number, height: number): IScrollResult;
    protected abstract _doScrollFar(doc: Document, oldPos: number, oldOff: number, delta: number, hidth: number, height: number): IScrollResult;
    protected _moveItemLayer(p: number): void;
    protected _canShowAttached(owner: IListViewOwner): boolean;
    protected _measureAttached(doc: Document, owner: IListViewOwner, vertical: boolean, w: number, h: number): AttachedRowView;
    protected _getRowIndent(v: RowViewBase): number;
    protected _getBodyIndent(v: RowViewBase | GroupItemView<any>): number;
    protected _getBodyMargin(v: RowViewBase | GroupItemView<any>): number;
    protected _prepareRowView(v: RowViewBase, row: number, owner: IListViewOwner): void;
    protected _getRowView(doc: Document, row: number, model: GroupRowType, before: ListItemView): RowViewBase;
    protected _returnRowView(view: RowViewBase): void;
    protected _returnRowViews(views: RowViewBase[], from: number): void;
    protected _resetRowViews(views: ListItemView[]): void;
    protected _addRowView(doc: Document, row: number, model: GroupRowType, before: ListItemView, vertical: boolean, width: number, height: number): RowViewBase;
    protected _createItemView(doc: Document, table: boolean): RowViewBase;
    protected _setScrollPos(pos: number, off: number, row: number): void;
    protected abstract _rowViewOfDom(dom: HTMLElement): RowViewBase;
    $_addDeletingRows(ids: number | number[]): void;
    $_setDetailingRow(row: number): void;
    $_scrollEnded(end: boolean): void;
    $_showOverEffect(dir: RtDirection): void;
    $_removeEndEffect(): void;
    protected abstract _createRowsDeleingAnimation(rowIds: number[]): RowsDeletingAni<ListBodyView>;
}
declare abstract class RowsDeletingAni<T extends ListBodyView> extends ListRowAnimation<T> {
    SIZE: 'width' | 'height';
    POS: 'x' | 'y';
    MOVE: 'moveX' | 'moveY';
    private _rowAni;
    protected _deletedViews: {
        rv: ListRowView;
        ani: Animation;
    }[];
    protected _allViews: ListItemView[];
    protected _views: ListItemView[];
    constructor(bodyView: T, rowIds: number[]);
    protected _doStart(): boolean;
    protected _doStop(): void;
    protected abstract _getItemViews(): ListItemView[];
    protected _doPrepare(): void;
    protected _preparePre(): void;
    protected _doRun(step: number): void;
    private $_collectDeleted;
    private $_clear;
}

declare abstract class RowPageView<T extends RowPage<any>> extends ListElement {
    static readonly SHOW_DURATION = 300;
    protected _model: T;
    private _headerView;
    private _layoutBack;
    protected _layoutView: LayoutViewType;
    private _spareView;
    private _layoutManager;
    private _animated;
    private _layout;
    private _rowStyle;
    private _layoutChanged;
    private _padding;
    private _showDirection;
    private _silent;
    private _hHeader;
    private _hLayout;
    private _scrollPos;
    private _firstTime;
    constructor(doc: Document, model: T, className: string);
    protected _doDestory(): void;
    model(): T;
    setModel(value: T): void;
    layoutBack(): HTMLDivElement;
    scrollHeight(): number;
    refresh(width: number, height: number, layoutManager: ILayoutViewManager, silent?: boolean): void;
    protected _doSilentRefresh(): void;
    private $_getDuration;
    show(manager: ILayoutViewManager, bounds: IRect, animate: boolean): void;
    protected _doShow(): void;
    hide(bounds: IRect, animate: boolean): void;
    protected _doHide(): void;
    getRenderer(dom: Element): RtRendererBase;
    scrollBy(dy: number): boolean;
    setScrollPos(v: number): void;
    private $_createLayoutBack;
    protected _doPrepareRender(doc: Document, hint: any): void;
    protected _doApplyStyles(css: CSSStyleDeclaration): void;
    protected _doMeasure(doc: Document, hint: any, hintWidth: number, hintHeight: number): ISize;
    protected _doRender(doc: Document, width: number, height: number): void;
    protected _doAfterRender(): void;
}

declare class RowInfoPageView extends RowPageView<RowInfoPage> {
    static readonly CLASS_NAME = "rtc-row-info-page";
    constructor(doc: Document, model: RowInfoPage);
}

declare class RowEditPageView extends RowPageView<RowEditPage> {
    static readonly CLASS_NAME = "rtc-row-edit-page";
    private _changeHandler;
    private _ctx;
    constructor(doc: Document, model: RowEditPage);
    model(): RowEditPage;
    setModel(value: RowEditPage): void;
    getValues(manager: ILayoutViewManager): RtRowValues;
    getFieldValue(id: string): any;
    setFieldValue(id: string, value: any): void;
    isFieldVisible(id: string): boolean;
    setFieldVisible(id: string, visible: boolean): void;
    commit(values: RtRowValues): boolean;
    protected _doShow(): void;
    protected _doHide(): void;
    protected _doSilentRefresh(): void;
    private $_clearHandlers;
}

declare abstract class RtEditorImpl<T extends RtEditor> extends RtRendererBaseImpl<T> implements IRtEditorImpl {
    abstract getValue(layout: HTMLElement): any;
    protected _getValue(ctx: IRenderContext): any;
    protected _setFitWidth(dom: HTMLElement, model: BoundableEditor, w: number): void;
    protected _setFitHeight(dom: HTMLElement, model: BoundableEditor, h: number): void;
}

type ControlOrWrapper = ListControl | RtWrapper<ListControl>;
interface IListControlRowArgs {
    control: ListControl | RtWrapper<ListControl>;
    row: number;
}
declare class ListControl extends RtControl implements ITemplateHtmlProvider, IListSectionOwner, IListDataViewListener, IListRowGroupListener, IRtPageListener, IListViewOwner, IPagingOwner, IDataRowInfoOwner, IGroupingOwner {
    static readonly CLASS_NAME = "rtc-control";
    static readonly SEARCH_FILTER = "@_dlist_search_filter_";
    static readonly NUMBER_FORMAT = "";
    static readonly BOOLEAN_FORMAT = "False:True";
    static readonly DATE_FORMAT = "yyyy.MM.dd HH:mm";
    onScroll: RtEventHandler<{
        control: ControlOrWrapper;
        top: number;
        prev: number;
    }>;
    onRowClick: RtEventHandler<{
        control: ControlOrWrapper;
        row: number;
        cancel?: boolean;
    }>;
    onRowLongPress: RtEventHandler<{
        control: ControlOrWrapper;
        row: number;
        cancel?: boolean;
    }>;
    onRowSwipe: RtEventHandler<{
        control: ControlOrWrapper;
        row: number;
        dir: RtDirection;
        cancel?: boolean;
    }>;
    onButtonClick: RtEventHandler<{
        control: ControlOrWrapper;
        button: string;
        row: number;
    }>;
    onRowCheck: RtEventHandler<IListControlRowArgs>;
    onRowsCheck: RtEventHandler<{
        control: ControlOrWrapper;
        rows: number[];
    }>;
    onAllRowsCheck: RtEventHandler<{
        control: ControlOrWrapper;
    }>;
    onRowDetail: RtEventHandler<IListControlRowArgs>;
    onRowsDetail: RtEventHandler<{
        control: ControlOrWrapper;
        rows: number[];
    }>;
    onAllRowsDetail: RtEventHandler<{
        control: ControlOrWrapper;
    }>;
    onRowFlagChange: RtEventHandler<{
        control: ControlOrWrapper;
        row: number;
        flag: number;
    }>;
    onRowsFlagChange: RtEventHandler<{
        control: ControlOrWrapper;
        rows: number[];
        flag: number;
    }>;
    onAllRowsFlagChange: RtEventHandler<{
        control: ControlOrWrapper;
        flag: number;
    }>;
    onSelectionAdd: RtEventHandler<{
        control: ControlOrWrapper;
        start: number;
        end: number;
    }>;
    onSelectionChange: RtEventHandler<{
        control: ControlOrWrapper;
        newStart: number;
        newEnd: number;
        oldStart: number;
        oldEnd: number;
    }>;
    onSelectionClear: RtEventHandler<{
        control: ControlOrWrapper;
    }>;
    onLastRowRevealed: RtEventHandler<{
        control: ControlOrWrapper;
    }>;
    onBeforeGroupExpand: RtEventHandler<{
        control: ControlOrWrapper;
        group: RowGroup;
        cancel?: boolean;
    }>;
    onGroupExpand: RtEventHandler<{
        control: ControlOrWrapper;
        group: RowGroup;
    }>;
    onBeforeGroupCollapse: RtEventHandler<{
        control: ControlOrWrapper;
        group: RowGroup;
        cancel?: boolean;
    }>;
    onGroupCollapse: RtEventHandler<{
        control: ControlOrWrapper;
        group: RowGroup;
    }>;
    onBeforePageChange: RtEventHandler<{
        control: ControlOrWrapper;
        page: number;
        cancel?: boolean;
    }>;
    onPageChange: RtEventHandler<{
        control: ControlOrWrapper;
        page: number;
    }>;
    onFocusedRowChange: RtEventHandler<{
        control: ControlOrWrapper;
        row: number;
        oldRow: any;
    }>;
    onEditFieldChange: RtEventHandler<{
        ctx: IListEditContenxt;
        row: number;
        field: string;
        newValue: any;
        oldValue: any;
    }>;
    onEditCommit: RtEventHandler<{
        ctx: IListEditContenxt;
        row: number;
        values: RtRowValues;
        cancel?: boolean;
        message?: string;
    }>;
    private _description;
    private _data;
    private _headData;
    private _alwaysFirstGroupHeader;
    private _textFormatter;
    private _boolFormatter;
    private _numberFormatter;
    private _dateFormatter;
    private _textFormat;
    private _boolFormat;
    private _numberFormat;
    private _dateFormat;
    private _lineSeparator;
    private _searchOptions;
    private _silentCommandSweep;
    private _renderMode;
    private _htmlTempls;
    private _tableModels;
    private _defaults;
    private _portrait;
    private _landscape;
    private _current;
    private _flags;
    private _layoutPool;
    private _iconSets;
    private _shapes;
    private _rowCommands;
    private _groupModel;
    private _rowGroup;
    private _dataGroup;
    private _pageModel;
    _templates: Registy<ListTemplate>;
    private _runTextFormatter;
    private _runBoolFormatter;
    private _runNumberFormatter;
    private _runDateFormatter;
    private _rendererPool;
    private _editorPool;
    private _defRowTempl;
    private _prevImages;
    private _imageList;
    private _imageSizes;
    private _imageLoaded;
    private _menus;
    private _listView;
    private _defaultListView;
    private _groupedListView;
    private _dataListView;
    private _skeletonListView;
    private _rowPageView;
    private _infoPageView;
    private _editPageView;
    private _fullMode;
    private _preMode;
    private _noCache;
    private _singleRow;
    private _layoutNeeded;
    private _dataLoading;
    private _dataAppending;
    private _dataChanged;
    private _table;
    private _reqScrollIndex;
    private _reqScrollOff;
    private _topRow;
    private _scrollIndex;
    private _scrollOff;
    private _lastRowRevealed;
    private _rowOffset;
    private _reqRowOffset;
    private _selection;
    private _lineSepReg;
    private _focusedRow;
    private _searchModel;
    private _searchResult;
    private _searchFilter;
    _orientationChanged: (orientation: RtScreenOrientation) => void;
    private _rowClickArgs;
    rowBorder: {
        style: string;
        masterStyle: string;
        skipLast: boolean;
        skipGroupLast: boolean;
        leafOnly: boolean;
    };
    private _rowScroller;
    private _singleScroller;
    private _userState;
    private readonly _rowStyleArgs;
    constructor(doc: Document, container: string | HTMLDivElement, renderMode: RtRenderMode);
    protected _doDestory(): void;
    optionItemChanged(option: any): void;
    autoScrollChanged(scroll: AutoScroll): void;
    getTemplateHtml(id: string): HTMLElement;
    control(): RtControlOrWrapper;
    sectionChanged(section: ListSection<any>): void;
    sectionLayoutChanged(section: ListSection<any>): void;
    private $_dataCountChanged;
    onDataReset(data: IDataView): void;
    onDataEndUpdated(data: IDataView, newCount: number, oldCount: number): void;
    onDataValueUpdated(data: IDataView, row: number, field: string, value: any, oldValue: RtRowValues): void;
    onDataRowUpdated(data: IDataView, row: number, oldValues: any[]): void;
    onDataRowsUpdated(data: IDataView, rows: number[]): void;
    onDataRowAdded(data: IDataView, row: number): void;
    onDataRowsAdded(data: IDataView, row: number, count: number): void;
    onDataCleared(data: IDataView, oldCount: number): void;
    onDataLoaded(data: IDataView, oldCount: number): void;
    onDataRowDeleted(data: IDataView, row: number, rowid: number): void;
    onDataRowsDeleted(data: IDataView, rows: number[], rowids: number[]): void;
    onDataRangeDeleted(data: IDataView, row: number, count: number): void;
    onDataRowMoved(data: IDataView, from: number, to: number): void;
    onDataRowsMoved(data: IDataView, from: number, count: number, to: number): void;
    onDataCountChanged(data: IDataView, newCount: number, oldCount: number): void;
    onDataStateChanged(data: IDataView, row: number): void;
    onDataStatesChanged(data: IDataView, rows: number[]): void;
    onDataChanged(data: IDataView): void;
    onDataFlagChanged(data: IDataView, flags: DataFlags, row: number, flag: number): void;
    onDataFlagsChanged(data: IDataView, flags: DataFlags, rows: number[], flag: number): void;
    onDataFlagAllChanged(data: IDataView, flags: DataFlags, flag: number): void;
    onDataViewFilterChanged?(dv: IDataView): void;
    onDataViewSortChanged(dv: IDataView): void;
    onGroupExpanded(group: RowGroup, expanded: boolean): void;
    onGroupChecked(group: RowGroup, checked: boolean): void;
    onDataGroup2Expanded(group: DataGroup, expanded: boolean): void;
    onPageChanged(model: ListPageModel, page: number, oldPage: number): void;
    groupingChanged(grouping: GroupOptions<any>): void;
    pageIndexClick(page: number): void;
    preMode(): boolean;
    fullMode(): boolean;
    noCache(): boolean;
    description(): string;
    setDescription(value: string): void;
    renderMode(): RtRenderMode;
    rowInfos(): DataRowInfoCollection;
    groupExpander(): RowExpander;
    dataExpander(): RowExpander;
    rowBar(): RowBar;
    editBar(): EditBar;
    scrollIndicator(): ScrollIndicator;
    indexBar(): IndexBar;
    scrollBar(): ScrollBar;
    pageNavigator(): PageNavigator;
    pageScroller(): PageScroller;
    commandBox(): CommandBox;
    selectionMask(): SelectionMask;
    options(): ListOptions;
    portrait(): ListOptions;
    landscape(): ListOptions;
    current(): ListOptions;
    data(): IDataView;
    setData(value: IDataView): IDataView;
    table(): TableModel;
    isRowGrouped(): boolean;
    isDataGrouped(): boolean;
    isGrouped(): boolean;
    isPaging(): boolean;
    pageSize(): number;
    pageCount(): number;
    page(): number;
    setPage(newPage: number): void;
    isVertical(): boolean;
    isLandscape(): boolean;
    setDataLoading(value: boolean): boolean;
    isDataLoading(): boolean;
    setDataAppending(appending: boolean, scroll: boolean): boolean;
    isDataAppending(): boolean;
    isDataEmpty(): boolean;
    isEmpty(): boolean;
    shouldShowEmptyPage(): boolean;
    isDataChanged(): boolean;
    scrollIndex(): number;
    setScrollIndex(value: number, off: number): void;
    scrollOff(): number;
    topRow(): number;
    setTopRow(value: number): void;
    rowOffset(): number;
    setRowOffset(value: number): void;
    textFormatter(): RtTextFormatter;
    setTextFormatter(value: RtTextFormatter): void;
    booleanFormatter(): RtBooleanFormatter;
    setBooleanFormatter(value: RtBooleanFormatter): void;
    numberFormatter(): RtNumberFormatter;
    setNumberFormatter(value: RtNumberFormatter): void;
    dateFormatter(): RtDateFormatter;
    setDateFormatter(value: RtDateFormatter): void;
    textFormat(): string;
    setTextFormat(value: string): void;
    boolFormat(): string;
    setBoolFormat(value: string): void;
    numberFormat(): string;
    setNumberFormat(value: string): void;
    dateFormat(): string;
    setDateFormat(value: string): void;
    groupModel(): IGroupModel;
    rowGroup(): RowGroupModel;
    dataGroup(): DataGroupModel;
    pageModel(): ListPageModel;
    get layoutViewManager(): ILayoutViewManager;
    get alwaysFirstGroupHeader(): boolean;
    set alwaysFirstGroupHeader(value: boolean);
    fitRowWhenScroll: boolean;
    fitRowWhenClick: boolean;
    skeletonVisible: boolean;
    alwaysEmptyPage: boolean;
    scrollByRow: boolean;
    selectable: boolean;
    autoClearSelection: boolean;
    focusedRow(): number;
    rowCommands(): RowCommandRunner;
    commandRow(): number;
    setCommandRow(row: number, animate: boolean): void;
    listView(): ListView;
    bodyView(): ListBodyView;
    rowPageView(): RowPageView<RowPage<any>>;
    infoPageView(): RowInfoPageView;
    editPageView(): RowEditPageView;
    leafRowCount(): number;
    checkedRowCount(): number;
    lineSeparator(): string | string[];
    setLineSeparator(value: string | string[]): void;
    shapes(): Shapes;
    lineSepReg(): RegExp;
    searchOptions(): IRtSearchOptions;
    setSearchOptions(value: IRtSearchOptions): void;
    searchResult(): SearchResult;
    silentCommandSweep(): boolean;
    setSilentCommandSweep(value: boolean): void;
    state(): object;
    setState(value: object): void;
    useImage(src: string): void;
    getImageSize(src: string): ISize;
    registerShape(shapeName: string, d: string, width: number, height: number): void;
    registerShapes(shapes: {
        [name: string]: {
            d: string;
            width: number;
            height: number;
        };
    }): void;
    registerIconSet(name: string, icons: RtIconSet | IRtIconSet): void;
    registerIconSets(icons: object): void;
    getIcon(set: string, icon: string): IRtIconInfo;
    registerTemplate(name: string, template: any, vars: any, shared: boolean): TemplateType;
    getStockTemplate(name: string): IListTemplate;
    getUserTemplate(name: string): TemplateType;
    getTemplate(name: string): TemplateType;
    getRowTemplate(row: number): TemplateType;
    getDefaultRowTemplate(): ListTemplate;
    getRowInflater(row: number): IRtParamInflater;
    getRowParams(row: number): RtParamValues;
    inflateField(ps: RtParamString, field: string): string;
    registerTableModel(name: string, table: IRtTableModel, overwrite: boolean): TableModel;
    registerTableModels(tables: {
        [name: string]: IRtTableModel;
    }, overwrite: boolean): void;
    getTableModel(name: string): TableModel;
    getRowLayout(row: number): IRowLayout;
    getTableLayout(template: string, target: TableSection): IRowLayout;
    getSearchLayout(row: number): ListLayoutType;
    getSkeletonLayout(): IRowLayout;
    searchIndexChanged(sr: SearchResult): void;
    searchCurrentDisplayChanged(): void;
    getGroupItemLayout(item: GroupItemType): IRowLayout;
    getRowStyleArgs(row: number): IRtRowStyleArgs;
    getRowStyle(row: number): {
        itemDef?: CSSStyles;
        levelDef?: CSSStyles;
        dynamic?: StyleOrClass;
    };
    borrowRenderer(renderer: RtRenderer | RtEditor): RtRendererBaseImpl<RtRendererBase>;
    freeRenderer(renderer: RtRendererImpl<RtRenderer> | RtEditorImpl<RtEditor>): void;
    getTextFormatter(): RtTextFormatter;
    getBoolFormatter(): RtBooleanFormatter;
    getNumberFormatter(): RtNumberFormatter;
    getDateFormatter(): RtDateFormatter;
    getRowCount(): number;
    getStartRow(): number;
    getEndRow(): number;
    getEndIndex(): number;
    pageOff(): number;
    getRowAt(index: number): number;
    clearGroupBy(): void;
    private $_destroyGroupModel;
    private $_destroyPageModel;
    rowGroupBy(infos: (IRtRowGroupInfo | string)[]): void;
    dataGroupBy(infos: {
        [data: string]: IDataGroupInfo;
    }): void;
    isMaster(row: number): boolean;
    setPaging(options: IRtPageOptions): void;
    getPageRows(page: number): number[];
    isSingleRow(): boolean;
    getSummary(field: string): IFieldSummary;
    scrollBy(delta: number): boolean;
    scrollToEnd(row: number): void;
    rowOffsetBy(delta: number): boolean;
    scrollToLetter(field: string, letter: string): void;
    findView(row: number, tag: string): ListElement;
    findElement(row: number, id: string): HTMLElement;
    isRowCheckable(row: number): boolean;
    isRowChecked(row: number): boolean;
    checkRow(row: number, checked: boolean, force: boolean): boolean;
    toggleChecked(row: number, force: boolean): void;
    checkRows(rows: number[], checked: boolean, force: boolean): number[];
    checkRowRange(row: number, count: number, checked: boolean, force: boolean): number[];
    checkAll(checked: boolean, force: boolean): boolean;
    checkSearchRows(clear: boolean, force: boolean): void;
    isRowSearched(row: number): boolean;
    isRowDetailed(row: number): boolean;
    setRowDetailed(row: number, detailed: boolean, exclusive: boolean, animate: boolean): void;
    $_getFlags(): DataFlags;
    getSelection(): Selection;
    clearSelection(keepSelectInfo?: boolean): boolean;
    itemCount(): number;
    setSelection(start: number, end: number): void;
    resizeSelection(newStart: number, newEnd: number): void;
    resetSelection(): void;
    swipeRow(row: number, dir: RtDirection): void;
    closePanel(animate: boolean): void;
    showPanel(panel: ListPanel<any>, animate: boolean): void;
    togglePanel(panel: string, animate: boolean): void;
    showFormPanel(actionTemplate: string, animate: boolean): void;
    showButtonPanel(animate: boolean): void;
    showSearchPanel(options: IRtSearchOptions, animate: boolean): void;
    showFilterPanel(options: IListFilterPanel, animate: boolean): void;
    registerMenu(name: string, menu: IRtMenu): void;
    registerMenus(menus: object): void;
    unregisterMenu(name: string): void;
    showMenu(menu: IRtMenu | string, animate: boolean): void;
    closeMenu(animate: boolean): void;
    toggleMenu(menu: IRtMenu | string, animate: boolean): void;
    clearSearch(): SearchResult;
    search(options: IRtSearchOptions, key: any): SearchResult | null;
    isRowPageVisible(): boolean;
    closeRowPage(commit: boolean, animate: boolean): void;
    isInfoPageVisible(): boolean;
    showInfoPage(row: number, info: IRtRowView, animate: boolean): void;
    isEditPageVisible(): boolean;
    showEditPage(row: number, model: IRtRowView, animate: boolean): void;
    makeRowVisible(row: number): boolean;
    makeGroupItemVisible(item: GroupItem<any>): boolean;
    setFocusedRow(row: number): void;
    getEditValues(): RtRowValues;
    addTooltipView(view: TooltipElement): void;
    removeTooltipView(view: TooltipElement): void;
    showToast(toast: IRtToast | string): void;
    getDataGroupOfRow(row: number, visibleOnly: boolean): DataGroup;
    expandAll(): void;
    collapseAll(): void;
    protected _prepareRenderers(dom: HTMLElement): void;
    invalidateLayout(force?: boolean): void;
    protected _windowResized(): void;
    protected _creatDefaultTool(): RtEditTool;
    protected _doInitModel(): void;
    protected _doInitView(doc: Document): void;
    protected _doOrientationChanged(orientation: RtScreenOrientation): void;
    protected _doControlObjectChanged(obj: RtControlObject, tag: string): void;
    protected _doBeforeRender(): void;
    protected _doRender(bounds: IRect): void;
    private $_renderRowList;
    private $_renderFull;
    private $_renderDefault;
    protected _doAfterRender(): void;
    $_rowTouched(row: number): void;
    $_restoreSelection(): boolean;
    private $_performRowClick;
    $_rowClicked(row: number): void;
    $_rowLongPressed(row: number): void;
    $_groupItemClicked(item: GroupItem<any>): void;
    $_clearUsedImages(): void;
    private $_checkRowEnded;
}

declare abstract class RtDataSource extends RtObject implements IDataViewWrapper {
    abstract get name(): string;
    abstract get source(): RtListData;
    abstract get rowCount(): number;
    isRowUpdated(row: number): boolean;
    isRowDeleted(row: number): boolean;
    getValue(row: number, field: string, fieldCheck?: boolean): any;
    findRow(where: {
        [field: string]: any;
    }, from: number, to: number): number;
    findRows(where: {
        [field: string]: any;
    }, from: number, to: number): number[];
    findDistinctRows(fields: string[], from: number, to: number): number[];
}
declare abstract class RtSimpleData extends RtDataSource {
    createLinkView(name: string, details: IRtDataLinkInfo | IRtDataLinkInfo[]): RtDataLinkView;
    getValues(row: number, fields?: string[], fieldCheck?: boolean): RtRowValues;
    getAllValues(rows?: number[], fields?: string[], fieldCheck?: boolean): RtRowValues;
}
declare class RtListData extends RtSimpleData {
    private $_d;
    constructor(name: string, options?: IRtDataOptions, source?: any[] | IRtDataValueSource);
    protected $_doDestory(): void;
    get onValueUpdate(): RtEventHandler<{
        data: RtListData;
        row: number;
        field: string;
        value: any;
        oldValue: any;
    }>;
    set onValueUpdate(value: RtEventHandler<{
        data: RtListData;
        row: number;
        field: string;
        value: any;
        oldValue: any;
    }>);
    get onRowsUpdate(): RtEventHandler<{
        data: RtListData;
        rows: number[];
        oldValues: RtRowValues[];
    }>;
    set onRowsUpdate(value: RtEventHandler<{
        data: RtListData;
        rows: number[];
        oldValues: RtRowValues[];
    }>);
    get onRowsAdd(): RtEventHandler<{
        data: RtListData;
        row: number;
        count: number;
    }>;
    set onRowsAdd(value: RtEventHandler<{
        data: RtListData;
        row: number;
        count: number;
    }>);
    get onRowsClear(): RtEventHandler<{
        data: RtListData;
        oldCount: number;
    }>;
    set onRowsClear(value: RtEventHandler<{
        data: RtListData;
        oldCount: number;
    }>);
    get onRowsDelete(): RtEventHandler<{
        data: RtListData;
        rows: number[];
        oldValues: RtRowValues[];
    }>;
    set onRowsDelete(value: RtEventHandler<{
        data: RtListData;
        rows: number[];
        oldValues: RtRowValues[];
    }>);
    get onRowMove(): RtEventHandler<{
        data: RtListData;
        from: number;
        to: number;
    }>;
    set onRowMove(value: RtEventHandler<{
        data: RtListData;
        from: number;
        to: number;
    }>);
    get onRowsMove(): RtEventHandler<{
        data: RtListData;
        from: number;
        count: number;
        to: number;
    }>;
    set onRowsMove(value: RtEventHandler<{
        data: RtListData;
        from: number;
        count: number;
        to: number;
    }>);
    get onRowStateChange(): RtEventHandler<{
        data: RtListData;
        row: number;
    }>;
    set onRowStateChange(value: RtEventHandler<{
        data: RtListData;
        row: number;
    }>);
    get onRowStatesChange(): RtEventHandler<{
        data: RtListData;
        rows: number[];
    }>;
    set onRowStatesChange(value: RtEventHandler<{
        data: RtListData;
        rows: number[];
    }>);
    get onRowCountChange(): RtEventHandler<{
        data: RtListData;
        newCount: number;
        oldCount: number;
    }>;
    set onRowCountChange(value: RtEventHandler<{
        data: RtListData;
        newCount: number;
        oldCount: number;
    }>);
    get onDataChange(): RtEventHandler<{
        data: RtListData;
    }>;
    set onDataChange(value: RtEventHandler<{
        data: RtListData;
    }>);
    get onEndUpdate(): RtEventHandler<{
        data: RtListData;
        newCount: number;
        oldCount: number;
    }>;
    set onEndUpdate(value: RtEventHandler<{
        data: RtListData;
        newCount: number;
        oldCount: number;
    }>);
    get title(): string;
    get fieldCount(): number;
    get fields(): IRtDataField[];
    get readonly(): boolean;
    get softDeleting(): boolean;
    get restorable(): boolean;
    get validator(): RtDataValidator;
    getField(index: number): IRtDataField;
    createView(name: string, options?: IRtDataViewOptions): RtDataView;
    setRowCount(newCount: number, fillDefaults?: boolean): void;
    isEmpty(row: number): boolean;
    getValues(row: number, fields?: string[], fieldCheck?: boolean): RtRowValues;
    getAllValues(rows?: number[], fields?: string[], fieldCheck?: boolean): RtRowValues;
    loadData(source: any[] | IRtDataValueSource): RtListData;
    beginUpdate(): void;
    endUpdate(): void;
    insertRow(row: number, values: RtRowValues): boolean;
    appendRow(values: RtRowValues): boolean;
    insertRows(row: number, values: RtRowValues[] | IRtDataValueSource): number;
    appendRows(values: RtRowValues[] | IRtDataValueSource): number;
    deleteAll(force?: boolean): boolean;
    deleteRow(row: number, force?: boolean): void;
    deleteRows(rows: number[], force?: boolean): number[];
    deleteRange(row: number, count: number, force?: boolean): number;
    updateValue(row: number, field: string, value: any): boolean;
    updateRow(row: number, values: RtRowValues, forceEmpty?: boolean, forceUpdate?: boolean): boolean;
    updateRows(rows: number[], values: RtRowValues[], forceEmpty?: boolean, forceUpdate?: boolean): number[];
    updateRange(row: number, count: number, values: RtRowValues[], forceEmpty?: boolean, forceUpdate?: boolean): number[];
    restoreRow(row: number): boolean;
    restoreRows(rows: number[]): number[];
    moveRow(from: number, to: number): boolean;
    moveRows(from: number, count: number, to: number): number;
    get name(): string;
    get source(): RtListData;
    get rowCount(): number;
    isRowUpdated(row: number): boolean;
    isRowDeleted(row: number): boolean;
    getValue(row: number, field: string, fieldCheck?: boolean): any;
    findRow(where: {
        [field: string]: any;
    }, from?: number, to?: number): number;
    findRows(where: {
        [field: string]: any;
    }, from?: number, to?: number): number[];
    findDistinctRows(fields: string[], from?: number, to?: number): number[];
}
declare class RtDataView extends RtSimpleData {
    private $_d;
    private _source;
    constructor(name: string, source: RtListData, options?: IRtDataViewOptions);
    protected $_doDestory(): void;
    get onSortChange(): RtEventHandler<{
        dv: RtDataView;
    }>;
    set onSortChange(value: RtEventHandler<{
        dv: RtDataView;
    }>);
    get onFilterChange(): RtEventHandler<{
        dv: RtDataView;
    }>;
    set onFilterChange(value: RtEventHandler<{
        dv: RtDataView;
    }>);
    get source(): RtListData;
    get fields(): IRtDataField[];
    get autoArrange(): boolean;
    set autoArrange(value: boolean);
    get hideDeleted(): boolean;
    set hideDeleted(value: boolean);
    snapshot(options?: IRtDataSnapshotOptions): RtListData;
    build(force?: boolean): RtDataView;
    sort(options: RtSortType, build?: boolean): RtDataView;
    addSort(field: string, dir: RtSortDirection, before?: string, build?: boolean): RtDataView;
    appendSort(field: string, dir: RtSortDirection, build?: boolean): RtDataView;
    removeSort(field: string | string[], build?: boolean): RtDataView;
    toggleSort(field: string, build?: boolean): RtDataView;
    clearSort(build?: boolean): RtDataView;
    select(name: string, filter: RtDataSelector, enabled?: boolean, build?: boolean): RtDataView;
    selectAfter(name: string, filter: RtDataSelector, enabled?: boolean, build?: boolean): RtDataView;
    slice(name: string, ranges: number[] | number, enabled?: boolean, build?: boolean): RtDataView;
    sliceAfter(name: string, ranges: number[] | number, enabled?: boolean, build?: boolean): RtDataView;
    dedupe(name: string, keyFields: string[], enabled?: boolean, build?: boolean): RtDataView;
    dedupeAfter(name: string, keyFields: string[], enabled?: boolean, build?: boolean): RtDataView;
    addFilter(filter: IRtDataFilter, build?: boolean): RtDataView;
    addPostFilter(filter: IRtDataFilter, build?: boolean): RtDataView;
    addFilterSet(fs: IRtDataFilterSet, build?: boolean): RtDataView;
    addPostFilterSet(fs: IRtDataFilterSet, build?: boolean): RtDataView;
    removeFilter(filter: string, build?: boolean): RtDataView;
    removeFilters(filters: string[], build?: boolean): RtDataView;
    clearFilters(build?: boolean): RtDataView;
    enableFilter(filter: string, enabled: boolean, build?: boolean): RtDataView;
    enableFilters(filters: string[], enabled: boolean, build?: boolean): RtDataView;
    enableAllFilters(enabled: boolean, build?: boolean): RtDataView;
    get name(): string;
    get rowCount(): number;
    getValue(row: number, field: string, fieldCheck?: boolean): any;
    getValues(row: number, fields?: string[], fieldCheck?: boolean): RtRowValues;
    getAllValues(rows?: number[], fields?: string[], fieldCheck?: boolean): RtRowValues;
    isRowUpdated(row: number): boolean;
    isRowDeleted(row: number): boolean;
    findRow(where: {
        [field: string]: any;
    }, from?: number, to?: number): number;
    findRows(where: {
        [field: string]: any;
    }, from?: number, to?: number): number[];
    findDistinctRows(fields: string[], from?: number, to?: number): number[];
    deleteRow(row: number, force?: boolean): void;
    deleteRows(rows: number[], force?: boolean): void;
    appendRows(values: RtRowValues[]): number;
    insertRow(row: number, values: RtRowValues, after?: boolean): boolean;
    updateRow(row: number, values: RtRowValues, forceEmpty?: boolean, forceUpdate?: boolean): boolean;
    updateValue(row: number, field: string, value: any): boolean;
}
interface IRtDataLinkInfo {
    data: RtListData | RtDataView;
    keyFields?: string[];
    masterFields?: string[];
    details?: IRtDataLinkInfo | IRtDataLinkInfo[];
}
declare class RtDataLinkView extends RtDataSource {
    private _data;
    private $_d;
    constructor(name: string, data: RtSimpleData, details: IRtDataLinkInfo | IRtDataLinkInfo[]);
    protected $_doDestory(): void;
    isMaster(row: number): boolean;
    isLeaf(row: number): boolean;
    get name(): string;
    get source(): RtListData;
    get rowCount(): number;
    getValue(row: number, field: string, fieldCheck?: boolean): any;
    getValues(row: number): RtRowValues;
    getAllValues(rows?: number[]): RtRowValues;
    isRowUpdated(row: number): boolean;
    isRowDeleted(row: number): boolean;
    findRow(where: {
        [field: string]: any;
    }, from: number, to: number): number;
    findRows(where: {
        [field: string]: any;
    }, from: number, to: number): number[];
    findDistinctRows(fields: string[], from: number, to: number): number[];
    getDataViews(): (RtListData | RtDataView)[];
    deleteRow(row: number, force?: boolean): void;
    deleteRows(rows: number[], force?: boolean): void;
}

interface IRtRowCellObject {
    cellStyle?: StyleOrClass;
    cellStyleCallback?: RtRowCellStyleCallback;
    style?: StyleOrClass;
    styleCallback?: RtRowCellStyleCallback;
}
declare abstract class RtRowCellObject<T extends RowCellObject<any>> extends RtWrapper<T> implements IRtRowCellObject {
    get control(): RtListControl;
    get cellStyle(): StyleOrClass;
    set cellStyle(value: StyleOrClass);
    get cellStyleCallback(): RtRowCellStyleCallback;
    set cellStyleCallback(value: RtRowCellStyleCallback);
    get style(): StyleOrClass;
    set style(value: StyleOrClass);
    get styleCallback(): RtRowCellStyleCallback;
    set styleCallback(value: RtRowCellStyleCallback);
}
declare class RtRowOrder extends RtRowCellObject<RowOrder> {
    get display(): RtRowOrderDisplay;
    set display(value: RtRowOrderDisplay);
    get rowOffset(): number;
    set rowOffset(value: number);
    get fitWidth(): boolean;
    set fitWidth(value: boolean);
    get prefix(): string;
    set prefix(value: string);
    get suffix(): string;
    set suffix(value: string);
}
declare class RtRowCheckBox extends RtRowCellObject<RowCheckBox> {
    get size(): number;
    set size(value: number);
    get masterVisible(): boolean;
    set masterVisible(value: boolean);
    get dragMode(): RtDragCheckMode;
    set dragMode(value: RtDragCheckMode);
}
declare class RtRowButton<T extends RowButton> extends RtRowCellObject<T> {
    get label(): string;
    set label(value: string);
    get hint(): string;
    set hint(value: string);
    get imageUrl(): string;
    set imageUrl(value: string);
    get width(): number;
    set width(value: number);
    get height(): RtPercentSize;
    set height(value: RtPercentSize);
    get className(): string;
    set className(value: string);
    get letter(): IRtRowButtonLetter;
    set letter(value: IRtRowButtonLetter);
    get onClick(): RtRowButtonClick;
    set onClick(value: RtRowButtonClick);
}
declare class RtRowImage extends RtRowCellObject<RowImage> {
    get imageUrl(): string;
    set imageUrl(value: string);
    get width(): number;
    set width(value: number);
    get height(): number;
    set height(value: number);
    get clickable(): boolean;
    set clickable(value: boolean);
    get onClick(): RtRowImageClickCallback;
    set onClick(value: RtRowImageClickCallback);
    get urlCallback(): RtRowImageUrlCallback;
    set urlCallback(value: RtRowImageUrlCallback);
}
declare class RtRowShape extends RtRowCellObject<RowShape> {
    get size(): number;
    set size(value: number);
    get shape(): string;
    set shape(value: string);
    get clickable(): boolean;
    set clickable(value: boolean);
    get shapeCallback(): RtRowShapeCallback;
    set shapeCallback(value: RtRowShapeCallback);
    get onClick(): RtRowShapeClick;
    set onClick(value: RtRowShapeClick);
}
declare class RtRowLetter extends RtRowCellObject<RowLetter> {
    get letter(): string;
    set letter(value: string);
}
declare class RtRowExpander extends RtRowButton<RowExpander> {
    get position(): RtRowExpanderPosition;
    set position(value: RtRowExpanderPosition);
}
declare class RtRowMover extends RtRowCellObject<RowMover> {
}

declare abstract class RtListControlObject<T extends ListControlObject<any>> extends RtWrapper<T> {
    get visible(): boolean;
    set visible(value: boolean);
    get style(): StyleOrClass;
    set style(value: StyleOrClass);
    protected _doAssignProps(source: any): boolean;
}
declare abstract class RtControlBar<T extends ListControlBar<any>> extends RtListControlObject<T> {
    get mode(): RtControlBarMode;
    set mode(value: RtControlBarMode);
    get position(): RtControlBarPosition;
    set position(value: RtControlBarPosition);
    get size(): number;
    set size(value: number);
    get gapLeft(): number;
    set gapLeft(value: number);
    get gapRight(): number;
    set gapRight(value: number);
    get gapTop(): number;
    set gapTop(value: number);
    get gapBottom(): number;
    set gapBottom(value: number);
}
declare class RtRowBar extends RtControlBar<RowBar> {
    private _order;
    private _check;
    private _shape;
    private _letter;
    private _image;
    private _button;
    private _move;
    constructor(bar: RowBar);
    get display(): RtRowBarDisplay;
    set display(value: RtRowBarDisplay);
    get order(): RtRowOrder;
    get check(): RtRowCheckBox;
    get shape(): RtRowShape;
    get letter(): RtRowLetter;
    get image(): RtRowImage;
    get button(): RtRowButton<RowButton>;
    get move(): RtRowMover;
}
declare class RtRowDeleteButton extends RtRowButton<RowDeleteButton> {
    get confirmMessage(): string;
    set confirmMessage(value: string);
}
declare class RtRowEditButton<T extends RowEditButton> extends RtRowButton<T> {
    get editHeader(): IListHeader;
    set editHeader(value: IListHeader);
    get editTemplate(): string;
    set editTemplate(value: string);
}
declare class RtRowAddButton extends RtRowEditButton<RowAddButton> {
    get appending(): boolean;
    set appending(value: boolean);
}
declare class RtRowInfoButton extends RtRowButton<RowInfoButton> {
    get infoHeader(): IListHeader;
    set infoHeader(value: IListHeader);
    get infoTemplate(): string;
    set infoTemplate(value: string);
}
declare class RtRowLinkButton extends RtRowButton<RowLinkButton> {
    get target(): string;
    set target(value: string);
    get url(): string;
    set url(value: string);
    get urlCallback(): RtRowLinkButtonUrlCallback;
    set urlCallback(value: RtRowLinkButtonUrlCallback);
}
declare class RtEditBar extends RtControlBar<EditBar> {
    private _delete;
    private _add;
    private _edit;
    private _info;
    private _link;
    private _custom;
    private _move;
    constructor(bar: EditBar);
    get action(): RtEditBarAction;
    set action(value: RtEditBarAction);
    get delete(): RtRowDeleteButton;
    setDelete(config: any): void;
    get add(): RtRowAddButton;
    get edit(): RtRowEditButton<RowEditButton>;
    get info(): RtRowInfoButton;
    get link(): RtRowLinkButton;
    get custom(): RtRowButton<RowButton>;
    get move(): RtRowMover;
}
declare class RtIndexBar extends RtListControlObject<IndexBar> {
    get onLetterClick(): RtIndexLetterClickCallback;
    set onLetterClick(value: RtIndexLetterClickCallback);
    get length(): SizeValue;
    set length(value: SizeValue);
    get floating(): boolean;
    set floating(value: boolean);
    get width(): number;
    set width(value: number);
    get minWidth(): number;
    set minWidth(value: number);
    get maxWidth(): number;
    set maxWidth(value: number);
    get spaceCharacter(): string;
    set spaceCharacter(value: string);
    get caseSensitive(): boolean;
    set caseSensitive(value: boolean);
    get letters(): string;
    set letters(value: string);
    get indexField(): string;
    set indexField(value: string);
    get autoScroll(): boolean;
    set autoScroll(value: boolean);
    get reversed(): boolean;
    set reversed(value: boolean);
}
declare class RtScrollIndicator extends RtListControlObject<ScrollIndicator> {
    get position(): RtControlObjectPosition;
    set position(value: RtControlObjectPosition);
    get mode(): RtScrollIndicatorMode;
    set mode(value: RtScrollIndicatorMode);
    get barWidth(): number;
    set barWidth(value: number);
    get showSelection(): boolean;
    set showSelection(value: boolean);
    get clickable(): boolean;
    set clickable(value: boolean);
    get tooltipVisible(): boolean;
    set tooltipVisible(value: boolean);
    get tooltipValue(): 'top' | 'bottom';
    set tooltipValue(value: 'top' | 'bottom');
    get firstTooltip(): string;
    set firstTooltip(value: string);
    get lastTooltip(): string;
    set lastTooltip(value: string);
    get tooltipStyle(): CSSStyles;
    set tooltipStyle(value: CSSStyles);
}
declare class RtScrollBar extends RtListControlObject<ScrollBar> {
    get floating(): boolean;
    set floating(value: boolean);
    get barWidth(): number;
    set barWidth(value: number);
    get thumbWidth(): number;
    set thumbWidth(value: number);
    get minThumbLength(): number;
    set minThumbLength(value: number);
}
declare class RtPageNavigatorItem extends RtWrapper<PageNavigatorItem> {
    get action(): RtPageNavigatorAction;
    get label(): string;
    get className(): string;
    set className(value: string);
    get disabledClass(): string;
    set disabledClass(value: string);
    get hint(): string;
    set hint(value: string);
    get disabled(): boolean;
}
declare class RtPageNavigator extends RtListControlObject<PageNavigator> {
    private _first;
    private _prev;
    private _next;
    private _last;
    constructor(navigator: PageNavigator);
    get position(): RtControlObjectPosition;
    set position(value: RtControlObjectPosition);
    get first(): RtPageNavigatorItem;
    get prev(): RtPageNavigatorItem;
    get next(): RtPageNavigatorItem;
    get last(): RtPageNavigatorItem;
    get width(): number;
    set width(value: number);
    get height(): number;
    set height(value: number);
    get itemGap(): number;
    set itemGap(value: number);
    get itemGap2(): number;
    set itemGap2(value: number);
}
declare class RtPageScrollerIndex extends RtWrapper<PageScrollerIndex> {
    get className(): string;
    set className(value: string);
    get hint(): string;
    set hint(value: string);
}
declare class RtPageScrollerEndIndex extends RtPageScrollerIndex {
    get visible(): boolean;
    set visible(value: boolean);
}
declare class RtPageScroller extends RtListControlObject<PageScroller> {
    private _first;
    private _last;
    private _index;
    private _current;
    constructor(scroller: PageScroller);
    get position(): DPageScrollerPosition;
    set position(value: DPageScrollerPosition);
    get itemGap(): number;
    set itemGap(value: number);
    get autoScroll(): boolean;
    set autoScroll(value: boolean);
    get first(): RtPageScrollerEndIndex;
    get last(): RtPageScrollerEndIndex;
    get index(): RtPageScrollerIndex;
    get current(): RtPageScrollerIndex;
    get width(): number;
    set width(value: number);
    get height(): number;
    set height(value: number);
}
declare class RtCommandBox extends RtListControlObject<CommandBox> {
    get orientation(): RtCommandBoxOrientation;
    set orientation(value: RtCommandBoxOrientation);
    get mode(): RtCommandBoxMode;
    set mode(value: RtCommandBoxMode);
    get minCellWidth(): number;
    set minCellWidth(value: number);
    get minCellHeight(): number;
    set minCellHeight(value: number);
}
declare class RtRowLink extends RtWrapper<ListRowLink> {
    get rootUrl(): string;
    set rootUrl(value: string);
    get linkField(): string;
    set linkField(value: string);
    get linkCallback(): RtRowLinkCallback;
    set linkCallback(value: RtRowLinkCallback);
    get target(): string;
    set target(value: string);
}
declare class RtAutoScroll<T extends AutoScroll> extends RtWrapper<T> {
    get enabled(): boolean;
    set enabled(value: boolean);
    get mode(): RtAutoScrollMode;
    set mode(value: RtAutoScrollMode);
    get backward(): boolean;
    set backward(value: boolean);
    get duration(): number;
    set duration(value: number);
    get changeDuration(): number;
    set changeDuration(value: number);
}
declare class RtRowScroll extends RtAutoScroll<ListRowScroll> {
    get rowsPerScroll(): number;
    set rowsPerScroll(value: number);
}
declare class RtListRow extends RtWrapper<ListRow> {
    private _link;
    private _focusMask;
    private _autoScroll;
    private _borderLine;
    constructor(row: ListRow);
    get template(): string;
    set template(value: string);
    get largeTemplate(): string;
    set largeTemplate(value: string);
    get templateCallback(): RtRowTemplateCallback;
    set templateCallback(value: RtRowTemplateCallback);
    get templateParams(): RtParamValues;
    set templateParams(value: RtParamValues);
    get style(): CSSStyles;
    set style(value: CSSStyles);
    get styleCallback(): RtRowStyleCallback;
    set styleCallback(value: RtRowStyleCallback);
    get clickAction(): RtRowClickAction;
    set clickAction(value: RtRowClickAction);
    get masterClickAction(): RtRowClickAction;
    set masterClickAction(value: RtRowClickAction);
    get longPressAction(): RtRowClickAction;
    set longPressAction(value: RtRowClickAction);
    get masterPressAction(): RtRowClickAction;
    set masterPressAction(value: RtRowClickAction);
    get swipeAction(): RtRowSwipeAction;
    set swipeAction(value: RtRowSwipeAction);
    get commands(): string[];
    set commands(value: string[]);
    get link(): RtRowLink;
    get focusMask(): RtRowFocusMask;
    get autoScroll(): RtRowScroll;
    get focusable(): boolean;
    set focusable(value: boolean);
    get touchEffect(): boolean;
    set touchEffect(value: boolean);
    get deleteAnimation(): boolean;
    set rowDeleteAnimation(value: boolean);
    get borderLine(): RtRowBorderLine;
    updateTemplate(template: string, id: string, prop: string, value: any): void;
    updateTemplateProps(template: string, id: string, props: Record<string, any>): void;
}
declare abstract class RtListSection<T extends ListSection<any>> extends RtWrapper<T> implements IRendererScope {
    get control(): RtListControl;
    get visible(): boolean;
    set visible(value: boolean);
    get sortMarkVisible(): boolean;
    set sortMarkVisible(value: boolean);
    get sortOrderVisible(): boolean;
    set sortOrderVisible(value: boolean);
    protected _doAssignProps(source: any): boolean;
}
declare abstract class RtLayoutedSection<T extends LayoutedSection<any>> extends RtListSection<T> {
    get template(): string;
    set template(value: string);
    get layoutParams(): RtParamValues;
    set layoutParams(value: RtParamValues);
    get style(): CSSStyles;
    set style(value: CSSStyles);
    get layoutStyle(): CSSStyles;
    set layoutStyle(value: CSSStyles);
}
declare abstract class RtActionableSection<T extends ActionableSection<any>> extends RtLayoutedSection<T> {
    get buttons(): IRtSectionButton[];
    set buttons(value: IRtSectionButton[]);
    get buttonGap(): number;
    set buttonGap(value: number);
    get clickAction(): RtSectionAction;
    set clickAction(value: RtSectionAction);
    getButton(name: string): IRtSectionButton;
    setButton(button: IRtSectionButton): void;
    removeButton(name: string): void;
    showButton(button: string): void;
    hideButton(button: string): void;
    setButtonEnabled(button: string, enabled: boolean): void;
    getButtonState(button: string): any;
    setButtonState(button: string, state: any): void;
}
declare class RtListHeader extends RtActionableSection<ListHeader> {
    get caption(): string;
    set caption(value: string);
    get captionAlign(): 'left' | 'right' | 'center';
    set captionAlign(value: 'left' | 'right' | 'center');
    get captionColor(): string;
    set captionColor(value: string);
    get showCheck(): boolean;
    set showCheck(value: boolean);
    get autoCheck(): boolean;
    set autoCheck(value: boolean);
}
declare class RtListFooter extends RtActionableSection<ListFooter> {
}
declare class RtSubheader extends RtLayoutedSection<Subheader> {
    get indent(): RtSubheaderIndent;
    set indent(value: RtSubheaderIndent);
}
declare class RtSearchBar extends RtListSection<SearchBar> {
    get position(): RtBarPosition;
    set position(value: RtBarPosition);
    get resetVisible(): boolean;
    set resetVisible(value: boolean);
    get optionsVisible(): boolean;
    set optionsVisible(value: boolean);
    get alwaysResult(): boolean;
    set alwaysResult(value: boolean);
}
declare class RtSearchResultBar extends RtListSection<SearchResultBar> {
    get position(): RtSearchResultPosition;
    set position(value: RtSearchResultPosition);
    get clearWhenClose(): boolean;
    set clearWhenClose(value: boolean);
}
declare class RtFieldBar extends RtListSection<FieldBar> {
    get fields(): RtFieldBarFields;
    set fields(value: RtFieldBarFields);
}
declare abstract class RtListPanel<T extends ListPanel<any>> extends RtWrapper<T> {
    get position(): RtPanelPosition;
    set position(value: RtPanelPosition);
    get showMode(): RtPanelShowMode;
    set showMode(value: RtPanelShowMode);
    get size(): RtPercentSize;
    set size(value: RtPercentSize);
    get minSize(): RtPercentSize;
    set minSize(value: RtPercentSize);
    get maxSize(): RtPercentSize;
    set maxSize(value: RtPercentSize);
    get style(): CSSStyles;
    set style(value: CSSStyles);
}
declare abstract class RtButtonPanelBase<T extends ButtonPanelBase<T>> extends RtListPanel<T> {
    get buttonGap(): number;
    set buttonGap(value: number);
}
declare abstract class RtDialogPanel<T extends DialogPanel<T>> extends RtButtonPanelBase<T> {
    get buttonPosition(): RtPanelButtonPosition;
    set buttonPosition(value: RtPanelButtonPosition);
    get cancelLabel(): string;
    set cancelLabel(value: string);
    get okLabel(): string;
    set okLabel(value: string);
    get closeLabel(): string;
    set closeLabel(value: string);
}
declare class RtFormPanel extends RtDialogPanel<FormPanel> {
    get template(): string;
    set template(value: string);
}
declare class RtButtonPanel extends RtButtonPanelBase<ButtonPanel> {
    get buttons(): IRtButton[];
    set buttons(value: IRtButton[]);
    get arrange(): RtButtonArrange;
    set arrange(value: RtButtonArrange);
    get align(): RtItemsAlign;
    set align(value: RtItemsAlign);
}
declare class RtSearchPanel extends RtDialogPanel<SearchPanel> {
    get display(): RtSearchPanelDisplay;
    set display(value: RtSearchPanelDisplay);
    get matchCaseLabel(): string;
    set matchCaseLabel(value: string);
    get wholeWordLabel(): string;
    set wholeWordLabel(value: string);
    get regExpLabel(): string;
    set regExpLabel(value: string);
    get searchNextLabel(): string;
    set searchNextLabel(value: string);
    get searchAllLabel(): string;
    set searchAllLabel(value: string);
    get lineGap(): number;
    set lineGap(value: number);
    get alwaysResult(): boolean;
    set alwaysResult(value: boolean);
}
declare class RtFilterPanel extends RtDialogPanel<FilterPanel> {
    get autoApply(): boolean;
    set autoApply(value: boolean);
    get autoClose(): boolean;
    set autoClose(value: boolean);
}
declare class RtGroupHeader extends RtWrapper<RowGroupHeader> {
    get visible(): boolean;
    set visible(value: boolean);
    get collapsedVisible(): boolean;
    set collapsedVisible(value: boolean);
    get template(): string;
    set template(value: string);
    get clickAction(): RtGroupClickAction;
    set clickAction(value: RtGroupClickAction);
}
declare class RtGroupFooter extends RtGroupHeader {
}
declare abstract class RtGroupOptions<T extends GroupOptions<any>> extends RtWrapper<T> {
    constructor(c: T);
    get theme(): string;
    set theme(value: string);
    get rowIndents(): RtRowIndents;
    set rowIndents(value: RtRowIndents);
    get indent(): number;
    set indent(value: number);
    get endMargin(): number;
    set endMargin(value: number);
}
declare class RtRowGroupOptions extends RtGroupOptions<RowGroupOptions> {
    private _header;
    private _footer;
    private _expander;
    constructor(c: RowGroupOptions);
    get header(): RtGroupHeader;
    get footer(): RtGroupFooter;
    get expander(): RtRowExpander;
    get groupIndent(): number;
    set groupIndent(value: number);
}
declare class RtDataGroupOptions extends RtGroupOptions<DataGroupOptions> {
    private _expander;
    constructor(c: DataGroupOptions);
    get expander(): RtRowExpander;
    get groupLevel(): number;
    set groupLevel(value: number);
    get masterHeaderVisible(): boolean;
    set masterHeaderVisible(value: boolean);
    get masterFooterVisible(): boolean;
    set masterFooterVisible(value: boolean);
    get emptyMasterHeaderVisible(): boolean;
    set emptyMasterHeaderVisible(value: boolean);
    get emptyMasterFooterVisible(): boolean;
    set emptyMasterFooterVisible(value: boolean);
    get detailHeaderVisible(): boolean;
    set detailHeaderVisible(value: boolean);
    get detailFooterVisible(): boolean;
    set detailFooterVisible(value: boolean);
    get singleDetailHeaderVisible(): boolean;
    set singleDetailHeaderVisible(value: boolean);
    get singleDetailFooterVisible(): boolean;
    set singleDetailFooterVisible(value: boolean);
}
declare class RtRowInfos extends RtWrapper<DataRowInfoCollection> {
    get master(): IRtDataRowInfo;
    set master(info: IRtDataRowInfo);
    getInfo(dataName: string): IRtDataRowInfo;
    setInfo(dataName: string, info: IRtDataRowInfo, redraw?: boolean): void;
    setInfos(infos: {
        [dataName: string]: IRtDataRowInfo;
    }): void;
}
declare class RtRowBorderLine extends RtWrapper<RowBorderLine> {
    get visible(): boolean;
    set visible(value: boolean);
    get style(): string;
    set style(value: string);
    get masterStyle(): string;
    set masterStyle(value: string);
    get nearIndent(): RtRowIndent;
    set nearIndent(value: RtRowIndent);
    get farIndent(): RtRowIndent;
    set farIndent(value: RtRowIndent);
    get skipLast(): boolean;
    set skipLast(value: boolean);
    get skipGroupLast(): boolean;
    set skipGroupLast(value: boolean);
    get leafOnly(): boolean;
    set leafOnly(value: boolean);
    protected _doAssignProps(source: any): boolean;
}
declare class RtRowFocusMask extends RtWrapper<RowFocusMask> {
    get visible(): boolean;
    set visible(value: boolean);
    get nearIndent(): RtRowIndent;
    set nearIndent(value: RtRowIndent);
    get farIndent(): RtRowIndent;
    set farIndent(value: RtRowIndent);
}
declare abstract class RtRowPageHeader extends RtListHeader {
}
declare abstract class RtRowPage<T extends RowPage<any>> extends RtWrapper<T> {
    private _header;
    constructor(c: T);
    get header(): RtRowPageHeader;
    get fitSize(): boolean;
    set fitSize(value: boolean);
    get style(): StyleOrClass;
    set style(value: StyleOrClass);
    get effectDuration(): number;
    set effectDuration(value: number);
    get template(): string;
    set template(value: string);
    get showDirection(): RtSlideDirection;
    set showDirection(value: RtSlideDirection);
    get hideDirection(): RtSlideDirection;
    set hideDirection(value: RtSlideDirection);
    get allFields(): boolean;
    set allFields(value: boolean);
    get fields(): {
        [field: string]: IRtRowViewField;
    };
    set fields(value: {
        [field: string]: IRtRowViewField;
    });
    get templateVars(): any;
    set templateVars(value: any);
    get templateParams(): any;
    set templateParams(value: any);
    protected abstract _createHeader(page: T): RtRowPageHeader;
}
declare class RtRowInfoPage extends RtRowPage<RowInfoPage> {
    constructor(c: RowInfoPage);
    get viewType(): RtRowInfoPageType;
    set viewType(value: RtRowInfoPageType);
    get rowChangeable(): boolean;
    set rowChangeable(value: boolean);
    protected _createHeader(page: RowInfoPage): RtRowPageHeader;
}
declare class RtRowEditPage extends RtRowPage<RowEditPage> {
    constructor(c: RowEditPage);
    get viewType(): RtEditPageType;
    set viewType(value: RtEditPageType);
    protected _createHeader(page: RowEditPage): RtRowPageHeader;
}
declare class RtSingleRowScroll extends RtAutoScroll<SingleRowScroll> {
    get changeEffect(): RtSingleRowChangeEffect;
    set changeEffect(value: RtSingleRowChangeEffect);
}
declare class RtSingleRow extends RtWrapper<SingleRow> {
    private _autoScroll;
    constructor(row: SingleRow);
    get visible(): boolean;
    set visible(value: boolean);
    get maskEffect(): boolean;
    set maskEffect(value: boolean);
    get showPrev(): boolean;
    set showPrev(value: boolean);
    get showNext(): boolean;
    set showNext(value: boolean);
    get rowChangeDir(): RtRowChangeDirection;
    set rowChangeDir(value: RtRowChangeDirection);
    get rowNavigator(): any;
    set rowNavigator(value: any);
    get rowBorderVisible(): boolean;
    set rowBorderVisible(value: boolean);
    get fillHeight(): boolean;
    set fillHeight(value: boolean);
    get autoScroll(): RtSingleRowScroll;
    protected _doAssignProps(source: any): boolean;
}
interface IRtAttachedRow {
    visible?: boolean;
    endSpace?: number;
    rowTemplate?: string;
    indicatorVisible?: boolean;
}
declare class RtAttachedRow extends RtWrapper<AttachedRow> implements IRtAttachedRow {
    get visible(): boolean;
    set visible(value: boolean);
    get endSpace(): number;
    set endSpace(value: number);
    get rowTemplate(): string;
    set rowTemplate(value: string);
    get indicatorVisible(): boolean;
    set indicatorVisible(value: boolean);
    get indicatorType(): RtSpinnerType;
    set indicatorType(value: RtSpinnerType);
    get indicatorSize(): number;
    set indicatorSize(value: number);
    get indicatorMargin(): number;
    set indicatorMargin(value: number);
    get layoutParams(): RtParamValues;
    set layoutParams(value: RtParamValues);
    protected _doAssignProps(source: any): boolean;
}
declare abstract class RtTempPage<T extends TempPage<any>> extends RtWrapper<T> {
    get fullModeWidth(): number;
    set fullModeWidth(value: number);
    get fullModeHeight(): number;
    set fullModeHeight(value: number);
}
declare class RtEmptyPage extends RtTempPage<EmptyPage> {
    get messageVisible(): boolean;
    set messageVisible(value: boolean);
    get message(): string;
    set message(value: string);
    get loadVisible(): boolean;
    set loadVisible(value: boolean);
    get loadLabel(): string;
    set loadLabel(value: string);
    get onLoadClick(): RtRendererClick;
    set onLoadClick(value: RtRendererClick);
}
declare class RtLoadingPage extends RtTempPage<LoadingPage> {
}

declare class RtListOptionsBase<T extends ListOptionsBase<T>> extends RtWrapper<T> {
    constructor(c: T);
}
declare class RtListOptions extends RtListOptionsBase<ListOptions> {
    private _rowBar;
    private _editBar;
    private _scrollIndicator;
    private _indexBar;
    private _scrollBar;
    private _pageNavigator;
    private _pageScroller;
    private _commandBox;
    private _selectionMask;
    private _row;
    private _headRows;
    private _header;
    private _footer;
    private _searchBar;
    private _searchResultBar;
    private _fieldBar;
    private _subheader;
    private _formPanel;
    private _buttonPanel;
    private _searchPanel;
    private _filterPanel;
    private _rowGroup;
    private _dataGroup;
    private _rowInfos;
    private _singleRow;
    private _attachedRow;
    private _emptyPage;
    private _loadingPage;
    private _infoPage;
    private _editPage;
    private _addPage;
    constructor(c: ListOptions);
    get rowType(): RtRowType;
    set rowType(value: RtRowType);
    get table(): string;
    set table(value: string | object);
    get largeTable(): string;
    set largeTable(value: string | object);
    get isLandScape(): boolean;
    get orientation(): RtOrientation;
    set orientation(value: RtOrientation);
    get largeSize(): number;
    set largeSize(value: number);
    get rowWidth(): number;
    set rowWidth(value: number);
    get minRowWidth(): number;
    set minRowWidth(value: number);
    get maxRowWidth(): number;
    set maxRowWidth(value: number);
    get rowCount(): number;
    set rowCount(value: number);
    get levelIndent(): number;
    set levelIndent(value: number);
    get menu(): string;
    set menu(value: string | object);
    get dragEdgeGap(): number;
    set dragEdgeGap(value: number);
    get rowBar(): RtRowBar;
    get editBar(): RtEditBar;
    get indexBar(): RtIndexBar;
    get scrollIndicator(): RtScrollIndicator;
    get scrollBar(): RtScrollBar;
    get pageNavigator(): RtPageNavigator;
    get pageScroller(): RtPageScroller;
    get commandBox(): RtCommandBox;
    get row(): RtListRow;
    get header(): RtListHeader;
    get footer(): RtListFooter;
    get searchBar(): RtSearchBar;
    get searchResultBar(): RtSearchResultBar;
    get fieldBar(): RtFieldBar;
    get subheader(): RtSubheader;
    get formPanel(): RtFormPanel;
    get buttonPanel(): RtButtonPanel;
    get searchPanel(): RtSearchPanel;
    get filterPanel(): RtFilterPanel;
    get rowGroup(): RtRowGroupOptions;
    get dataGroup(): RtDataGroupOptions;
    get rowInfos(): RtRowInfos;
    get singleRow(): RtSingleRow;
    get attachedRow(): RtAttachedRow;
    get emptyPage(): RtEmptyPage;
    get loadingPage(): RtLoadingPage;
    get infoPage(): RtRowInfoPage;
    get editPage(): RtRowEditPage;
    get addView(): RtRowEditPage;
    assign(source: any): void;
}

declare class RtDefaultOptions extends RtListOptions {
    private _owner;
    private _portrait;
    private _landscape;
    constructor(c: ListOptions, owner: RtListControl, portrait: RtListOptions, landscape: RtListOptions);
    get portrait(): RtListOptions;
    get landscape(): RtListOptions;
    get current(): RtListOptions;
}
interface IRtGroupProxy {
    _idx: any;
    level: number;
    field: string;
    value: any;
    expanded: boolean;
}
interface IRtShape {
    name: string;
    d: string;
    width: number;
    height: number;
}
declare class RtListControl extends RtWrapper<ListControl> {
    private _data;
    private _options;
    private _portrait;
    private _landscape;
    private _current;
    constructor(doc: Document, container: string | HTMLDivElement, renderMode?: RtRenderMode);
    protected _doDestory(): void;
    get onScroll(): RtEventHandler<{
        control: RtListControl;
        top: number;
        prev: number;
    }>;
    set onScroll(value: RtEventHandler<{
        control: RtListControl;
        top: number;
        prev: number;
    }>);
    get onRowClick(): RtEventHandler<{
        control: RtListControl;
        row: number;
    }>;
    set onRowClick(value: RtEventHandler<{
        control: RtListControl;
        row: number;
    }>);
    get onRowLongPress(): RtEventHandler<{
        control: RtListControl;
        row: number;
    }>;
    set onRowLongPress(value: RtEventHandler<{
        control: RtListControl;
        row: number;
    }>);
    get onRowSwipe(): RtEventHandler<{
        control: RtListControl;
        row: number;
        dir: RtDirection;
        cancel?: boolean;
    }>;
    set onRowSwipe(value: RtEventHandler<{
        control: RtListControl;
        row: number;
        dir: RtDirection;
        cancel?: boolean;
    }>);
    get onButtonClick(): RtEventHandler<{
        control: RtListControl;
        button: string;
        row: number;
    }>;
    set onButtonClick(value: RtEventHandler<{
        control: RtListControl;
        button: string;
        row: number;
    }>);
    get onRowCheck(): RtEventHandler<{
        control: RtListControl;
        row: number;
    }>;
    set onRowCheck(value: RtEventHandler<{
        control: RtListControl;
        row: number;
    }>);
    get onRowsCheck(): RtEventHandler<{
        control: RtListControl;
        rows: number[];
    }>;
    set onRowsCheck(value: RtEventHandler<{
        control: RtListControl;
        rows: number[];
    }>);
    get onAllRowsCheck(): RtEventHandler<{
        control: RtListControl;
    }>;
    set onAllRowsCheck(value: RtEventHandler<{
        control: RtListControl;
    }>);
    get onRowDetail(): RtEventHandler<{
        control: RtListControl;
        row: number;
    }>;
    set onRowDetail(value: RtEventHandler<{
        control: RtListControl;
        row: number;
    }>);
    get onRowsDetail(): RtEventHandler<{
        control: RtListControl;
        rows: number[];
    }>;
    set onRowsDetail(value: RtEventHandler<{
        control: RtListControl;
        rows: number[];
    }>);
    get onAllRowsDetail(): RtEventHandler<{
        control: RtListControl;
    }>;
    set onAllRowsDetail(value: RtEventHandler<{
        control: RtListControl;
    }>);
    get onRowFlagChange(): RtEventHandler<{
        control: RtListControl;
        row: number;
        flag: number;
    }>;
    set onRowFlagChange(value: RtEventHandler<{
        control: RtListControl;
        row: number;
        flag: number;
    }>);
    get onRowsFlagChange(): RtEventHandler<{
        control: RtListControl;
        rows: number[];
        flag: number;
    }>;
    set onRowsFlagChange(value: RtEventHandler<{
        control: RtListControl;
        rows: number[];
        flag: number;
    }>);
    get onAllRowsFlagChange(): RtEventHandler<{
        control: RtListControl;
        flag: number;
    }>;
    set onAllRowsFlagChange(value: RtEventHandler<{
        control: RtListControl;
        flag: number;
    }>);
    get onSelectionAdd(): RtEventHandler<{
        control: RtListControl;
        start: number;
        end: number;
    }>;
    set onSelectionAdd(value: RtEventHandler<{
        control: RtListControl;
        start: number;
        end: number;
    }>);
    get onSelectionClear(): RtEventHandler<{
        control: RtListControl;
    }>;
    set onSelectionClear(value: RtEventHandler<{
        control: RtListControl;
    }>);
    get onSelectionChange(): RtEventHandler<{
        control: RtListControl;
        newStart: number;
        newEnd: number;
        oldStart: number;
        oldEnd: number;
    }>;
    set onSelectionChange(value: RtEventHandler<{
        control: RtListControl;
        newStart: number;
        newEnd: number;
        oldStart: number;
        oldEnd: number;
    }>);
    get onLastRowRevealed(): RtEventHandler<{
        control: RtListControl;
    }>;
    set onLastRowRevealed(value: RtEventHandler<{
        control: RtListControl;
    }>);
    get onBeforeGroupExpand(): RtEventHandler<{
        control: RtListControl;
        group: RowGroup;
        cancel?: boolean;
    }>;
    set onBeforeGroupExpand(value: RtEventHandler<{
        control: RtListControl;
        group: RowGroup;
        cancel?: boolean;
    }>);
    get onGroupExpand(): RtEventHandler<{
        control: RtListControl;
        group: RowGroup;
    }>;
    set onGroupExpand(value: RtEventHandler<{
        control: RtListControl;
        group: RowGroup;
    }>);
    get onBeforeGroupCollapse(): RtEventHandler<{
        control: RtListControl;
        group: RowGroup;
        cancel?: boolean;
    }>;
    set onBeforeGroupCollapse(value: RtEventHandler<{
        control: RtListControl;
        group: RowGroup;
        cancel?: boolean;
    }>);
    get onGroupCollapse(): RtEventHandler<{
        control: RtListControl;
        group: RowGroup;
    }>;
    set onGroupCollapse(value: RtEventHandler<{
        control: RtListControl;
        group: RowGroup;
    }>);
    get onBeforePageChange(): RtEventHandler<{
        control: RtListControl;
        page: number;
        cancel?: boolean;
    }>;
    set onBeforePageChange(value: RtEventHandler<{
        control: RtListControl;
        page: number;
        cancel?: boolean;
    }>);
    get onPageChange(): RtEventHandler<{
        control: RtListControl;
        page: number;
    }>;
    set onPageChange(value: RtEventHandler<{
        control: RtListControl;
        page: number;
    }>);
    get onFocusedRowChange(): RtEventHandler<{
        control: RtListControl;
        data: RtDataSource;
        row: number;
        oldData: RtDataSource;
        oldRow: number;
    }>;
    set onFocusedRowChange(value: RtEventHandler<{
        control: RtListControl;
        data: RtDataSource;
        row: number;
        oldData: RtDataSource;
        oldRow: number;
    }>);
    get onEditFieldChange(): RtEventHandler<{
        ctx: IListEditContenxt;
        row: number;
        field: string;
        newValue: any;
        oldValue: any;
    }>;
    set onEditFieldChange(value: RtEventHandler<{
        ctx: IListEditContenxt;
        row: number;
        field: string;
        newValue: any;
        oldValue: any;
    }>);
    get onEditCommit(): RtEventHandler<{
        ctx: IListEditContenxt;
        row: number;
        values: RtRowValues;
        cancel?: boolean;
        message?: string;
    }>;
    set onEditCommit(value: RtEventHandler<{
        ctx: IListEditContenxt;
        row: number;
        values: RtRowValues;
        cancel?: boolean;
        message?: string;
    }>);
    get state(): object;
    setState(value: object): void;
    get orientation(): RtScreenOrientation;
    get syncOrientation(): boolean;
    set syncOrientation(value: boolean);
    get screenOrientation(): RtScreenOrientation;
    get syncScreenOrientation(): boolean;
    set screenSyncOrientation(value: boolean);
    get renderMode(): RtRenderMode;
    get description(): string;
    set description(value: string);
    get data(): RtDataSource;
    set data(value: RtDataSource);
    get textFormatter(): RtTextFormatter;
    set textFormatter(value: RtTextFormatter);
    get booleanFormatter(): RtBooleanFormatter;
    set booleanFormatter(value: RtBooleanFormatter);
    get numberFormatter(): RtNumberFormatter;
    set numberFormatter(value: RtNumberFormatter);
    get dateFormatter(): RtDateFormatter;
    set dateFormatter(value: RtDateFormatter);
    get textFormat(): string;
    set textFormat(value: string);
    get boolFormat(): string;
    set boolFormat(value: string);
    get numberFormat(): string;
    set numberFormat(value: string);
    get dateFormat(): string;
    set dateFormat(value: string);
    get options(): RtDefaultOptions;
    setOptions(config: any): RtListControl;
    get portrait(): RtListOptions;
    setPortrait(config: any): RtListControl;
    get landscape(): RtListOptions;
    setLandscape(config: any): RtListControl;
    get current(): RtListOptions;
    get isEmpty(): boolean;
    get topRow(): number;
    set topRow(value: number);
    get isRowGrouped(): boolean;
    get isDataGrouped(): boolean;
    get isPaging(): boolean;
    get isSingleRow(): boolean;
    get pageSize(): number;
    get pageCount(): number;
    get page(): number;
    set page(value: number);
    get registeredRowCommands(): string[];
    get commandRow(): number;
    get checkedRowCount(): number;
    get lineSeparator(): string | string[];
    set lineSeparator(value: string | string[]);
    get searchOptions(): IRtSearchOptions;
    set searchOptions(value: IRtSearchOptions);
    get fitRowWhenScroll(): boolean;
    set fitRowWhenScroll(value: boolean);
    get fitRowWhenClick(): boolean;
    set fitRowWhenClick(value: boolean);
    get scrollIndex(): number;
    set scrollIndex(value: number);
    get focusedRow(): number;
    get dataLoading(): boolean;
    setDataLoading(value: boolean): boolean;
    get dataAppending(): boolean;
    setDataAppending(appending: boolean, scroll?: boolean): boolean;
    get skeletonVisible(): boolean;
    set skeletonVisible(value: boolean);
    get alwaysEmptyPage(): boolean;
    set alwaysEmptyPage(value: boolean);
    get selectable(): boolean;
    set selectable(value: boolean);
    setConfig(config: any): RtListControl;
    resetSize(): void;
    registerTemplate(template: any, name?: string, vars?: any): string;
    registerTemplates(templates: any): void;
    registerSharedTemplate(template: any, name?: string, vars?: any): string;
    registerSharedTemplates(templates: any): void;
    registerShape(shape: IRtShape): void;
    registerShapes(shapes: IRtShape[]): void;
    registerIconSet(name: string, icons: IRtIconSet): void;
    registerTableModel(name: string, table: IRtTableModel, overwrite?: boolean): void;
    registerTableModels(tables: {
        [name: string]: IRtTableModel;
    }, overwrite?: boolean): void;
    rowGroupBy(infos: (IRtRowGroupInfo | string) | (IRtRowGroupInfo | string)[]): void;
    groupOfRow(row: number): IRtGroupProxy;
    parentOfGroup(group: IRtGroupProxy): IRtGroupProxy;
    childrenOfGroup(group: IRtGroupProxy): IRtGroupProxy[];
    expandGroup(group: IRtGroupProxy): boolean;
    collapseGroup(group: IRtGroupProxy): boolean;
    dataGroupBy(infos: {
        [data: string]: IDataGroupInfo;
    }): void;
    setPaging(options: IRtPageOptions): RtListControl;
    clearSelection(): void;
    setSelection(start: number, end: number): void;
    resizeSelection(newEnd: number, newStart?: number): void;
    isRowSelected(row: number): boolean;
    getSelectedRows(): number[];
    isRowChecked(row: number): boolean;
    getCheckedRows(checked?: boolean): number[];
    checkRow(row: number, checked: boolean, force?: boolean): boolean;
    toggleChecked(row: number, force?: boolean): void;
    checkRows(rows: number[], checked: boolean, force?: boolean): number[];
    checkRowRange(row: number, count: number, checked: boolean, force?: boolean): number[];
    checkAllRows(checked: boolean, force?: boolean): boolean;
    checkAll(checked: boolean, force?: boolean): boolean;
    checkSearchedRows(clear?: boolean, force?: boolean): void;
    isRowCheckable(row: number): boolean;
    setCheckable(row: number, checkable: boolean): boolean;
    isRowDetailed(row: number): boolean;
    getDetailedRows(collapsed: boolean): number[];
    setRowDetailed(row: number, collapsed: boolean, exclusive?: boolean): void;
    setRowsDetailed(data: RtDataSource, rows: number[], collapsed: boolean): number[];
    setRowRangeDetailed(data: RtDataSource, row: number, count: number, collapsed: boolean): number[];
    setAllRowsDetailed(collapsed: boolean): boolean;
    isRowFlagged(row: number, flag: number): boolean;
    getFlaggedRows(flag: number, set: boolean): number[];
    setRowFlagAll(flag: number, set: boolean): boolean;
    setRowFlag(row: number, flag: number, set: boolean): boolean;
    setRowsFlag(rows: number[], flag: number, set: boolean): number[];
    setRowRangeFlag(row: number, count: number, flag: number, set: boolean): number[];
    registerRowCommand(commandName: string, config: IRowCommand, overwrite?: boolean): void;
    unregisterRowCommands(commandNames: string[]): void;
    getRowCommand(commandName: string): IRowCommand;
    updateRowCommand(commandName: string, config: IRowCommand): void;
    setCommandRow(row: number, animate?: boolean): void;
    closePanel(animate?: boolean): void;
    showFormPanel(animate?: boolean): void;
    showButtonPanel(animate?: boolean): void;
    showSearchPanel(optons?: IRtSearchOptions, animate?: boolean): void;
    showFilterPanel(options: IListFilterPanel, animate?: boolean): void;
    showMenu(menu: IRtMenu | string, animate?: boolean): void;
    closeMenu(animate?: boolean): void;
    showInfoPage(row: number, model?: IRtRowView, animate?: boolean): void;
    closeInfoPage(): void;
    showEditPage(row: number, model?: IRtRowView, animate?: boolean): void;
    closeEditPage(commit: boolean, animate?: boolean): void;
    getEditValues(): RtRowValues;
    search(key: any, options?: IRtSearchOptions): IRtSearchField[];
    makeRowVisible(row: number): void;
    setFocusedRow(row: number): void;
    scrollToEnd(row?: number): void;
    showToast(toast: IRtToast | string): void;
    expandAll(): void;
    collapseAll(): void;
}

interface IRtLocale {
    dateFormat: string;
    am: string;
    pm: string;
    notExistsDataField: string;
    notSpecifiedDataField: string;
    invalidFieldName: string;
    invalidFieldIndex: string;
    invalidRowIndex: string;
    canNotModifyData: string;
    canNotModifyDeleted: string;
    requiredField: string;
    invalidValueInDomain: string;
    invalidValueInRange: string;
    invalidToIndex: string;
    requireSourceData: string;
    requireFilterName: string;
    invalidDateFormat: string;
    invalidSizeValue: string;
    invalidOuterDiv: string;
    canNotHorzGrouping: string;
    dataMustSet: string;
    requireGroupingInfos: string;
    canNotRowGrouping: string;
    canNotDataGrouping: string;
    canNotHorzInGrouping: string;
    unknownLayoutType: string;
    layoutMustSet: string;
    unknownItemViewType: string;
    requireCommandName: string;
    commandNameDuplicated: string;
    requireDataOrGroup: string;
    requireTableName: string;
    alreadyTableExists: string;
}

declare class Globals {
    static getVersion(): string;
    static setLocale(lang: string, config?: IRtLocale): void;
    static registerLocale(lang: string, config: IRtLocale): void;
    static setLogging(logging: boolean): void;
    static setDebugging(debugging: boolean): void;
    static setBounding(bounding: boolean): void;
    static destroy(): void;
    static registerTemplate(name: string, template: any, vars: any): TemplateType;
    static unregisterTemplates(templates: string[] | string): void;
    static createListData(name: string, options: IRtDataOptions, source?: any[] | IRtDataValueSource): RtListData;
    static createDataView(name: string, data: RtListData, options?: IRtDataViewOptions): RtDataView;
    static createDataLink(name: string, data: RtSimpleData, details: IRtDataLinkInfo | IRtDataLinkInfo[]): RtDataLinkView;
    static createListControl(doc: Document, container: string | HTMLDivElement, renderMode?: RtRenderMode): RtListControl;
    static loadControl(doc: Document, container: string | HTMLDivElement, config: any, callback: (control: RtListControl) => void, renderMode?: RtRenderMode): void;
}

declare const getVersion: typeof Globals.getVersion;
declare const setLocale: typeof Globals.setLocale;
declare const registerLocale: typeof Globals.registerLocale;
declare const setLogging: typeof Globals.setLogging;
declare const setDebugging: typeof Globals.setDebugging;
declare const setBounding: typeof Globals.setBounding;
declare const destroy: typeof Globals.destroy;
declare const registerTemplate: typeof Globals.registerTemplate;
declare const unregisterTemplates: typeof Globals.unregisterTemplates;
declare const createListData: typeof Globals.createListData;
declare const createDataView: typeof Globals.createDataView;
declare const createDataLink: typeof Globals.createDataLink;
declare const createListControl: typeof Globals.createListControl;
declare const loadControl: typeof Globals.loadControl;

export { IRtButtonModel, IRtDataLinkInfo, IRtDataOptions, IRtDataValueSource, IRtDataViewOptions, IRtIconSet, IRtRowParamArgs, IRtShowPanelOptions, IRtStyleCallbackArgs, RtBadgePosition, RtBarPosition, RtBooleanFormatter, RtButtonLabelPosition, RtControlObjectPosition, RtDataLinkView, RtDataSource, RtDataType, RtDataView, RtDateFormatter, RtGroupIndentMode, RtHorizontalAlign, RtItemsAlign, RtItemsArrange, RtListControl, RtListData, RtMode, RtNumberFormatter, RtOrientation, RtPanelType, RtRenderMode, RtRowBarDisplay, RtRowChangeDirection, RtRowClickAction, RtRowIndent, RtRowIndents, RtRowSwipeAction, RtRowType, RtScrollIndicatorMode, RtSimpleData, RtSlideDirection, RtSortDirection, RtTextFormatter, RtVerticalAlign, createDataLink, createDataView, createListControl, createListData, destroy, getVersion, loadControl, registerLocale, registerTemplate, setBounding, setDebugging, setLocale, setLogging, unregisterTemplates };
