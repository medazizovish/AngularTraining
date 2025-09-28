export interface Eventy {

    id: number;
    title: string;
    description: string;
    date: Date;
    location: string;
    price: number;
    organizerId: number;
    imagerUrl: string;
    Nbplace: number;
    NbLike: number;
    isLiked? : Boolean
    showDoubleTap?: boolean;
}
