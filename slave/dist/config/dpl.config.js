"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  appsRoot: '/home/marcos/dpl/apps',
  // appsRoot: 'C:\\Users\\marodriguez\\Desktop\\apps',
  backups: '/home/marcos/dpl/backups',
  // backups: 'C:\\Users\\marodriguez\\Desktop\\backups',
  projects: [// PIXEL-SUSHI
  {
    name: 'pixel-sushi',
    root: '/pixel-sushi',
    apps: [{
      name: 'app',
      root: '/app',
      prescripts: [{
        command: 'npm',
        params: ['run', 'pm2:down']
      }],
      postscripts: [{
        command: 'npm',
        params: ['i']
      }, {
        command: 'npm',
        params: ['run', 'pm2:up']
      }]
    }, {
      name: 'api',
      root: '/api',
      prescripts: [{
        command: 'npm',
        params: ['run', 'pm2:down']
      }],
      postscripts: [{
        command: 'npm',
        params: ['i']
      }, {
        command: 'npm',
        params: ['run', 'pm2:up']
      }]
    }]
  }, // EXAMPLE PROJECT
  {
    name: 'example-project',
    root: '/apps/example',
    apps: [{
      name: 'example-app',
      root: '/app',
      prescripts: [{
        command: 'npm',
        params: ['run', 'pm2:down']
      }],
      postscripts: [{
        command: 'npm',
        params: ['i']
      }, {
        command: 'npm',
        params: ['run', 'pm2:up']
      }]
    }, {
      name: 'example-api',
      root: '/api',
      prescripts: [{
        command: 'npm',
        params: ['run', 'pm2:down']
      }],
      postscripts: [{
        command: 'npm',
        params: ['i']
      }, {
        command: 'npm',
        params: ['run', 'pm2:up']
      }]
    }]
  }, // TEST PROJECT
  {
    name: 'pixel',
    root: '/pixel',
    apps: [{
      name: 'sushi',
      root: '/app',
      prescripts: [// { command: 'npm', params: ['run', 'pm2:down'] }
      ],
      postscripts: [{
        command: 'echo',
        params: ['$PATH']
      }]
    }, {
      name: 'example-api',
      root: '/api',
      prescripts: [{
        command: 'npm',
        params: ['run', 'pm2:down']
      }],
      postscripts: [{
        command: 'npm',
        params: ['i']
      }, {
        command: 'npm',
        params: ['run', 'pm2:up']
      }]
    }]
  }]
};
exports.default = _default;