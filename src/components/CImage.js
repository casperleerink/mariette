import React, {useEffect, useState, useRef} from 'react'
import {Image} from 'cloudinary-react'

function CImage({cloudName, photoId, className, crop, aspectRatio=null}) {
    const container = useRef(null);
    const [w, setW] = useState(20);
    useEffect(() => {
        const rect = container.current.getBoundingClientRect();
        setW(parseInt(rect.width));
    }, []);
    return (
        <div ref={container} className={className}>
            <Image 
                cloudName={cloudName} 
                publicId={photoId} 
                width={w} 
                aspectRatio={aspectRatio} 
                crop={crop}
                style={{width: "100%"}} 
            />
        </div>
    )
}

export default CImage
