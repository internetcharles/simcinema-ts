export interface Movie {
  title: string;
  averageScore: number;
  earnings: number;
  budget: number;
  cast: MovieOption[];
  genre: string;
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
  image: any;
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
  description: string;
  quality: {
    actionAdventure: number;
    comedy: number;
    drama: number;
    romance: number;
    horror: number;
    sciFi: number;
    animated: number;
  };
}
