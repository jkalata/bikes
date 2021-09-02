export interface IBikeListRequestResponse {
  features: IBikeStation[];
  crs: {
    type: string;
    properties: {
      code: string;
    };
  };
  type: string;
}

export interface IBikeStation {
  geometry: IBikeGeometry;
  id: string;
  type: string;
  properties: IBikeProperties;
}

interface IBikeGeometry {
  coordinates: number[];
  type: string;
  distance: number;
}

interface IBikeProperties {
  free_racks: string;
  bikes: string;
  label: string;
  bike_racks: string;
  updated: string;
}
