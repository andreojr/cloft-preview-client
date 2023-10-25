import loading from "../assets/arts/1.png";
import code from "../assets/arts/2.png";
import classic from "../assets/arts/3.png";
import fun from "../assets/arts/4.png";
import program from "../assets/arts/5.png";

export interface Item {
    label: string;
    value: string;
    url: string;
}

export const allArts = [
    {
        label: "Classic",
        value: "classic",
        url: classic,
    },
    {
        label: "Code",
        value: "code",
        url: code,
    },
];
