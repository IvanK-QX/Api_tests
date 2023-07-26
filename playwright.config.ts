/* eslint-disable no-irregular-whitespace */
import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  
  testDir: './tests',
  timeout: 2 * 60 * 1000,
  expect: {
    timeout: 20000
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 0,
  workers: process.env.CI ? 1 : 6,
  reporter: [
    ['line'],
    ['allure-playwright']
  ],
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',
    actionTimeout: 20000,
    baseURL: 'https://webclient.streamsqa.com',
    trace: 'on',
  },
  
  // grep:[new RegExp("@smoke")],
  projects: [
    {
      name: 'chromium',
      use: {
        launchOptions: {
          args: [
            '--use-fake-ui-for-media-stream', // avoids the need to grant camera/microphone permissions
            '--use-fake-device-for-media-stream', // feeds a test pattern to getUserMedia() instead of live camera input
          ]},
        ...devices[
          'Desktop Chrome'],
      },
    } 
    // {
    //   name: 'firefox',
    //   use: {
    //     ...devices['Desktop Firefox'],
    //   },
    // }  
    // {
    //   name: 'webkit',
    //   use: {
    //     ...devices['Desktop Safari'],
    //   },
    // }  
    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: {
    //     ...devices['Pixel 5'],
    //   },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: {
    //     ...devices['iPhone 12'],
    //   },
    // }  
    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: {
    //     channel: 'msedge',
    //   },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: {
    //     channel: 'chrome',
    //   },
    // },
  ],
  outputDir: 'test-results/'  
  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   port: 3000,
  // },
};

export default config;