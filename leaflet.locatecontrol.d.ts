declare namespace L.Control {

    interface LocateOptions {
        enableHighAccuracy: boolean,
        watch: boolean,
        timeout: number,
        maximumAge: number;
        maxZoom?: number;
    }
    type LocateControlViewType = false | "once" | "always" | "untilPan" | "untilPanOrZoom";
     
    interface LocateControlOptions extends ControlOptions {
        position: L.ControlPosition
        layer?: L.Layer;
        setView?: LocateControlViewType,
        keepCurrentZoomLevel?: boolean,
        initialZoomLevel?: boolean,
        getLocationBounds?(locationEvent): L.LatLngBounds
        flyTo?: boolean
        returnToPrevBounds?: boolean
        cacheLocation?: boolean
        drawCircle?: boolean
        drawMarker?: boolean
        showCompass?: boolean
        markerClass?: L.Layer
        compassClass?: L.Layer
        circleStyle?: any
        markerStyle?: any
        compassStyle?: any
        followCircleStyle?: any
        followMarkerStyle?: any
        icon?: string,
        iconLoading?: string,
        iconElementTag?: string,
        textElementTag?: string;
        circlePadding?: [number, number]
        metric?: boolean;
        createButtonCallback?(container, options): any;
        onLocationError?(err, control): void
        showPopup?: boolean;
        strings?: any;
        locateOptions?: L.Control.LocateOptions;
    }
    class Locate extends L.Control{
        _event: LocationEvent
        _onLocationFound(e: any): void;
        constructor(options: any)
        _active: boolean;
        protected _link: HTMLDivElement;
        protected _activate(): void;
        protected _deactivate(): void;
        protected _map: L.Map;
        _compassHeading: number;

    }
}