import { FunctionComponent } from "preact";
import { useState } from "preact/hooks";


type Props = {
    id: string;
    fav: boolean;
    userid: string;
}

const Fav: FunctionComponent<Props> = ({userid, fav, id}) => {
    
    const [favourite, setFavourite] = useState<boolean> (fav);

    const toggleFav = async (userid:string, id:string) => {
        const response = await fetch(`https://videoapp-api.deno.dev/${userid}/${id}`, 
            {
                method: "POST",
                headers: {"Content-Type": "application/json"}
            }
        )
    }

    return (
        <button onClick = {() => toggleFav(userid, id)}>
            {favourite? "Ya añadido a me gusta":"Añadir a me gusta"}
        </button>
    )
};

export default Fav;

