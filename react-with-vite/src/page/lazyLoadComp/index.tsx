import { useEffect } from "react"

export default function LazyLoadComp() {
    useEffect(() => {
        console.log('a lazy load component');
    }, [])
    return (
        <>
            a lazy load component
        </>
    )
}