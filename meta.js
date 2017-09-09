module.exports = {
  prompts: {
    name: {
      type: 'string',
      required: true,
      label: 'Project name'
    },
    description: {
      'type': 'string',
      'required': true,
      'label': 'Project description',
      'default': 'A Vue.js plugin'
    },
    author: {
      'type': 'string',
      'label': 'Author'
    },
    version: {
      'type': 'string',
      'required': true,
      'label': 'Project version',
      'default': '0.0.1'
    }
  },
  skipInterpolation: 'components/**/*.vue',
  helpers: {
    camelcase: (s) => {
      return s.replace (/(?:^|[-])(\w)/g, (_,c) => {
        return c ? c.toUpperCase () : '';
      })
    },
    kebabcase: (s) => {
      return s.replace(/([a-z])([A-Z])/g, '$1-$2')
             .replace(/\s+/g, '-')
             .toLowerCase();
    }
  },
  completeMessage: '{{#inPlace}}To get started:\n\n  npm install\n  npm run build.{{else}}To get started:\n\n  cd {{destDirName}}\n  npm install\n  npm run build{{/inPlace}}'
}
