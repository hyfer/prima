const tw = (strings: TemplateStringsArray, ...values: string[]) =>
  String.raw({ raw: strings }, ...values);

export { tw };
