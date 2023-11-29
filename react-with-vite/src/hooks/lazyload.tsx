import React, { useEffect, useRef, useState } from "react";
const LazyLoadImage = ({src, alt, width, height}: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
}) => {
    const imgRef = useRef(null)
    const [isVisible, setVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if(entry.isIntersecting) {
                    setVisible(true)
                    observer.unobserve(imgRef.current!)
                }
            }
        )
        if(imgRef.current) {
            observer.observe(imgRef.current)
        }

        return () => {
            if(imgRef.current) {
                observer.unobserve(imgRef.current)
            }
        }
    }, [])

    return <img ref={imgRef} src={isVisible ? src : ''} alt={alt} width={width ?? 200} height={height ?? 200}></img>
}

export default LazyLoadImage