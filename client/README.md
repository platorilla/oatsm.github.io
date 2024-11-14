# Obcerv Automated Testing Support Matrix

This page shows all possible tests for the deployments of Obcerv.

## Quick start

Ensure that you have `npm` installed, then run these commands:

```shell
cd client
npm i -D
```

To run a development server:

```shell
npm run dev
```

To publish this to GitHub pages, merge your changes to the `main` branch then wait for GitHub actions to publish.

## Configuration

You can find the app's configuration in [`client/src/config.ts`](/client/src/config.ts).

`config.filters` is where you can change the filtering checkboxes that will appear on the left sidebar.

`config.jobs` are the jobs that will be shown by the app.
