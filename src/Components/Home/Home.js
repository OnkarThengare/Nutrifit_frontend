import React,{useEffect} from 'react'
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";

export default function Home(props) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    
    return (
        <>
            <Section1 />
            <Section2 />
            <Section3 onClick={props.onClick} />
            <Section4 />
            <Section5 />
            <Section6 />
        </>
    )
}
