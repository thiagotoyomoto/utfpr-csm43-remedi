import { Gender } from "@/domain";

export type Profile = {
    id: string;
    name: string;
    birthdate: string;
    gender: Gender;
}
