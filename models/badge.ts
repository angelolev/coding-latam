export interface IBadge {
    id: number;
    elementClass: string;
    handleClick: () => void;
    name: string;
    type: string;
}