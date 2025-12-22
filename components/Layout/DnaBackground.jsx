import React from 'react';

export const DnaBackground = () => {
  // Create 40 base pairs for the helix
  const basePairs = Array.from({ length: 40 });

  return (
    <div className="dna-scene">
      <div className="dna-helix">
        {basePairs.map((_, i) => (
          <div 
            key={i} 
            className="dna-base" 
            style={{ '--i': i } as React.CSSProperties} 
          />
        ))}
      </div>
    </div>
  );
};