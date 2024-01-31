### Updating to app router

# Overview

### Utils

- [`tsconfig.json`](/tsconfig.json)
    - added `@@` as an alias for imports from the `/src` directory.
    - changes to update next compatibility

## Root route

- `index.tsx` -> `layout.tsx`
    - [**+**] `page.tsx`
    - [**-**] `_app.tsx`
    - [**-**] `_document.tsx`

## API routes

- each folder structure to end with a `route.ts`
- all routes return a `Response` or `NextResponse` as required in all branches of your handler
