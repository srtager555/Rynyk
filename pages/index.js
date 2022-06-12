import { useEffect } from "react";
import discordApp from "../src/index";

export default function app() {

    useEffect(() => {
        discordApp();
    },[]);

    return ('XD');
}