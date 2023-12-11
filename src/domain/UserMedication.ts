export type UserMedication = {
    id: string;
    medication_id: string;
    name: string;
    leafletUrl: string;
    frequency: number;
    initialTime: string;
    observations?: string;
    stock: number;
}
