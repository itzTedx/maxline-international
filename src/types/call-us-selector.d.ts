declare namespace JSX {
  interface IntrinsicElements {
    "call-us-selector": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      "phonesystem-url": string;
      party: string;
    };
  }
}
