import React from "react";
import galleryImages from "./galleryImages";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const MasonryImagesGallery = () => {
    return (
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 3, 768: 3, 992: 4 }}>
            <Masonry gutter="1rem">
                {galleryImages.map((item, index) => (
                    <div key={index}>
                        <img
                            className="masonry__img"
                            src={item}
    
                            alt="Gallery item"
                            loading="lazy"
                            style={{ width: "100%", display: "block", borderRadius: "10px" }}
                        />
                    </div>
                ))}
            </Masonry>
        </ResponsiveMasonry>
    );
};

export default MasonryImagesGallery;
