import React, { useEffect } from 'react';

export const SeoHelmet = ({ title, description, keywords }) => {
  useEffect(() => {
    // Sahifa sarlavhasini yangilash
    document.title = `${title} | EduBio`;
    
    // Meta tavsifni yangilash
    let metaDesc = document.querySelector("meta[name='description']");
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = description || "EduBio - Biologiyani sun'iy intellekt yordamida o'rganing.";

    // Kalit so'zlarni yangilash
    if (keywords) {
      let metaKeywords = document.querySelector("meta[name='keywords']");
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.name = "keywords";
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.content = keywords;
    }
  }, [title, description, keywords]);

  return null;
};
