export interface Movie {
  title: string;
  averageScore: number;
  earnings: number;
}

export interface Option {
  label: string;
  value: string;
}

export interface PictureOption {
  image: string;
  name: string;
  price: number;
}

export interface Studio {
  id: number;
  studioName: string;
  image: string;
  offerRequested: boolean;
  rejected: boolean;
  offer: number;
  message: string;
}

export interface MovieOption {
  name: string;
  price: number;
  status: string;
  portrait: string;
  quality: number;
}
