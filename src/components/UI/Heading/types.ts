export interface HeadingProps {
  node: 'h1' | 'h2' | 'h3' | 'h4';
  fontSize: number;
  children: string;
  className?: string;
}
