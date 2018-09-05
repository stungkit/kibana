export const shape = () => ({
  name: 'shape',
  aliases: [],
  type: 'shape',
  help: 'Create a shape',
  context: {
    types: ['null'],
  },
  args: {
    shape: {
      types: ['string', 'null'],
      help: 'Pick a shape',
      aliases: ['_'],
      default: 'square',
    },
    fill: {
      types: ['string', 'null'],
      help: 'Valid CSS color string',
      default: 'black',
    },
    border: {
      types: ['string', 'null'],
      aliases: ['stroke'],
      help: 'Valid CSS color string',
    },
    borderWidth: {
      types: ['number', 'null'],
      aliases: ['strokeWidth'],
      help: 'Thickness of the border',
      default: '0',
    },
    maintainAspect: {
      types: ['boolean'],
      help: 'Select true to maintain aspect ratio',
      default: false,
    },
  },
  fn: (context, { shape, fill, border, borderWidth, maintainAspect }) => ({
    type: 'shape',
    shape,
    fill,
    border,
    borderWidth,
    maintainAspect,
  }),
});
