import React, { useEffect, useRef } from 'react';
import { IconsType } from './icon.type';
import { ColorsType } from '../style/colors.type';

interface IconProps extends React.SVGAttributes<HTMLOrSVGElement> {
    name: IconsType;
    width: number;
    height: number;
    color?: ColorsType;
    className?: string;
}

const replaceColor = (svgString: string, newColor: string) => {
    const regex = /fill="#[A-Fa-f0-9]{6}"/g;
    const replacement = `fill="var(${newColor})"`;
    return svgString.replace(regex, replacement);
};

export const Icon: React.FC<IconProps> = ({ name, width, height, color = '--c-oxford-blue-500',className, ...props }) => {
    const svgRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        const svgElement = async () => await import(`../public/${name}.svg`);

        svgElement().catch(e => {
            console.error('<strong>On loading the SVG</strong>', e);
        });

        svgElement().then(svg => {
            svgRef!.current!.innerHTML = replaceColor(svg.default, color);
        });
        console.log('masuk berapakali');
        
    }, [name, color]);

    return <svg width={width} height={height} ref={svgRef} className={className} {...props}></svg>;
};