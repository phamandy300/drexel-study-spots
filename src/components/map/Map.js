import React, { useRef } from 'react';
import { Viewer, Entity, Cesium3DTileset, Camera, ImageryLayer } from "resium";
import { Cartesian3, IonImageryProvider, IonResource } from "cesium";

function Map() {
    const viewerRef = useRef(null);
    const position = Cartesian3.fromDegrees(-75.1899265, 39.9569305, 10);
    const pointGraphics = { pixelSize: 25 };
    const cameraPosition = Cartesian3.fromDegrees(-75.1905, 39.9569, 400);
    const direction = Cartesian3.normalize(
        Cartesian3.subtract(position, cameraPosition, new Cartesian3()),
        new Cartesian3()
    );

    return (
        <Viewer 
            full 
            ref={viewerRef}
            homeButton={false}
            sceneModePicker={false}
            projectionPicker={false}
            baseLayerPicker={false}
            navigationHelpButton={false}
            animation={false}
            timeline={false}

            imageryProvider={false}
        >
            <ImageryLayer imageryProvider={IonImageryProvider.fromAssetId(4)} />
            <Entity position={position} point={pointGraphics} description="Drexel University" />
            <Cesium3DTileset
                url={IonResource.fromAssetId(96188)}
            />
            <Camera position={cameraPosition} direction={direction} />
        </Viewer>
      );
}

export default Map;