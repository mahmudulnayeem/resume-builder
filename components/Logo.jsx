import Image from 'next/image';
import React from 'react';

const Logo = ({height,width}) => (
    <Image src={'https://media.discordapp.net/attachments/922720652803321906/1073239019774816346/logo-rb.png?width=468&height=468'} alt='logo' height={height} width={width} />

);

export default Logo;
