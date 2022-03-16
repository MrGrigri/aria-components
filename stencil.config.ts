import { readFileSync } from 'fs';
import { Config } from '@stencil/core';

const os = require('os');

const developerHasCertificates = () => {
  const dir = os.homedir();
  const sshDir = `${dir}/.ssh/localhost`;

  try {
    const cert = readFileSync(`${sshDir}/localhost.crt`, 'utf8');
    const key = readFileSync(`${sshDir}/localhost.key`, 'utf8');

    return { https: { cert, key } };
  } catch (err) {
    return null;
  }
};

export const config: Config = {
  namespace: 'aria',
  globalStyle: 'src/global/css/app.css',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  devServer: {
    ...developerHasCertificates(),
  },
  sourceMap: true,
};
