interface DataLayerEvent {
  event: string;
  page?: string;
  title?: string;
}

declare global {
  interface Window {
    dataLayer: DataLayerEvent[];
  }
}

export {};