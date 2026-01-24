import React from 'react';

interface BottomDualImagesProps {
  leftImage: string;
  rightImage: string;
  leftAlt?: string;
  rightAlt?: string;
}

export const BottomDualImages: React.FC<BottomDualImagesProps> = ({
  leftImage,
  rightImage,
  leftAlt = "Left Image",
  rightAlt = "Right Image"
}) => {
  return (
    <div className="fixed bottom-0 left-0 w-full h-[50vh] md:h-[60vh] flex z-0">
      <div className="w-1/2 h-full relative">
        <img 
          src={leftImage} 
          alt={leftAlt} 
          className="w-full h-full object-cover block"
          draggable={false}
        />
      </div>
      <div className="w-1/2 h-full relative">
        <img 
          src={rightImage} 
          alt={rightAlt} 
          className="w-full h-full object-cover block"
          draggable={false}
        />
      </div>
    </div>
  );
};
