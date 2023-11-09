// FullScreenIframe.js
import React from 'react';

const FullScreenIframe = ({ videoSrc }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <iframe
        src={videoSrc}
        title="Full Screen Video"
        className="w-full h-full"
        allowFullScreen
        autoPlay // Add the autoplay attribute
      ></iframe>
    </div>
  );
};

// Default video source URL
FullScreenIframe.defaultProps = {
  videoSrc:
    'https://rr3---sn-h557sn6e.c.drive.google.com/videoplayback?expire=1699541431&ei=h8dMZY7hHcafrvIP7OOH6AI&ip=2405:201:c023:8129:f143:d525:bd93:5fbb&id=02e8d1ce8e01b2f1&itag=22&source=webdrive&requiressl=yes&xpc=EghotM6WJ3oBAQ==&mh=oE&mm=32&mn=sn-h557sn6e&ms=su&mv=m&mvi=3&pl=47&ttl=transient&susc=dr&driveid=1WS_bE1pcSaMEu6ZUtuJXuornyh-nVvTf&app=explorer&eaua=rbtpvI8GoUg&mime=video/mp4&vprv=1&prv=1&dur=4251.387&lmt=1699514071282584&mt=1699530527&subapp=DRIVE_WEB_FILE_VIEWER&txp=0006224&sparams=expire,ei,ip,id,itag,source,requiressl,xpc,ttl,susc,driveid,app,eaua,mime,vprv,prv,dur,lmt&sig=ANLwegAwRQIhALD4w4DfpQB3YFp8PleqVbrxKohBj0ZSrqEnRoWYBJzJAiAb5IyiUQNI9pIlBJvaJaSBUO7IALDsnR6GKAsDZlXXZA==&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AM8Gb2swRQIhAJRd9oT0NqjQSsj2SfqmmfqIlYXoiVdi79YnH60q9f6UAiBSLLynnyxPRkG8qxr0f-lnfaxcq-9gi7yIfIY2zXxVUg==&cpn=R5yKS82fp_ESy-I8&c=WEB_EMBEDDED_PLAYER&cver=1.20231105.00.01',
};

export default FullScreenIframe;
