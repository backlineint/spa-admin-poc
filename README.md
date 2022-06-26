# SPA Admin POC

## Setup

- `composer install`
- `lando start`
- `lando db-import seed.sql.gz`
- `lando drush cim`
- `cd web/app/react`
- `npm install`
- `npm run build`
- `lando drush cr`

## Usage

Edit any article for SPA admin contextual editing.

## Configuration

React app assumes the URL https://spa-admin-poc.lndo.site. If you are using a
different URL, update this value in /web/app/react/app.js.
