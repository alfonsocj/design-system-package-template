import { ReactNode } from 'react';
import './Carousel.scss';

interface CarouselProps {
  children: ReactNode;
}

export function Carousel(props: CarouselProps) {
  return <div>{props.children}</div>;
}