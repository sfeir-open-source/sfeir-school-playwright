import { css, cx } from 'hono/css';

interface LogoProps {
  size?: 'small' | 'medium';
  class?: string | Promise<string>;
}

export function Logo({ size = 'medium', ...props }: LogoProps) {
  const styleSize = size === 'small' ? 20 : 30;
  const logoClass = css`
    max-height: ${styleSize}vh;
    max-width: ${styleSize}vw;
    display: block;
  `;
  return <img class={cx(logoClass, props.class)} src="/assets/logo.png" />;
}
