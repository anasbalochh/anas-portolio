declare module "gsap-trial/SplitText" {
  export class SplitText {
    chars: HTMLElement[];
    words: HTMLElement[];
    lines: HTMLElement[];
    constructor(
      target: string | string[] | Element | Element[],
      options?: { type?: string; linesClass?: string }
    );
    revert(): void;
  }
}

declare module "gsap-trial/ScrollSmoother" {
  export interface ScrollSmoother {
    scrollTop(value: number): void;
    paused(value: boolean): void;
    scrollTo(target: string, smooth?: boolean, position?: string): void;
    scrollTrigger?: unknown;
    progress?: unknown;
    content?: unknown;
    effects?: unknown;
    [key: string]: unknown;
  }
  export const ScrollSmoother: {
    create: (config: Record<string, unknown>) => ScrollSmoother;
    refresh: (reset?: boolean) => void;
  };
}
