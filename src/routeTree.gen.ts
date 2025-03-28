/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as SearchIndexImport } from './routes/search/index'
import { Route as BlogsIndexImport } from './routes/blogs/index'
import { Route as AboutIndexImport } from './routes/about/index'
import { Route as BlogsIdImport } from './routes/blogs/$id'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const SearchIndexRoute = SearchIndexImport.update({
  id: '/search/',
  path: '/search/',
  getParentRoute: () => rootRoute,
} as any)

const BlogsIndexRoute = BlogsIndexImport.update({
  id: '/blogs/',
  path: '/blogs/',
  getParentRoute: () => rootRoute,
} as any)

const AboutIndexRoute = AboutIndexImport.update({
  id: '/about/',
  path: '/about/',
  getParentRoute: () => rootRoute,
} as any)

const BlogsIdRoute = BlogsIdImport.update({
  id: '/blogs/$id',
  path: '/blogs/$id',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/blogs/$id': {
      id: '/blogs/$id'
      path: '/blogs/$id'
      fullPath: '/blogs/$id'
      preLoaderRoute: typeof BlogsIdImport
      parentRoute: typeof rootRoute
    }
    '/about/': {
      id: '/about/'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutIndexImport
      parentRoute: typeof rootRoute
    }
    '/blogs/': {
      id: '/blogs/'
      path: '/blogs'
      fullPath: '/blogs'
      preLoaderRoute: typeof BlogsIndexImport
      parentRoute: typeof rootRoute
    }
    '/search/': {
      id: '/search/'
      path: '/search'
      fullPath: '/search'
      preLoaderRoute: typeof SearchIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/blogs/$id': typeof BlogsIdRoute
  '/about': typeof AboutIndexRoute
  '/blogs': typeof BlogsIndexRoute
  '/search': typeof SearchIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/blogs/$id': typeof BlogsIdRoute
  '/about': typeof AboutIndexRoute
  '/blogs': typeof BlogsIndexRoute
  '/search': typeof SearchIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/blogs/$id': typeof BlogsIdRoute
  '/about/': typeof AboutIndexRoute
  '/blogs/': typeof BlogsIndexRoute
  '/search/': typeof SearchIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/blogs/$id' | '/about' | '/blogs' | '/search'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/blogs/$id' | '/about' | '/blogs' | '/search'
  id: '__root__' | '/' | '/blogs/$id' | '/about/' | '/blogs/' | '/search/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  BlogsIdRoute: typeof BlogsIdRoute
  AboutIndexRoute: typeof AboutIndexRoute
  BlogsIndexRoute: typeof BlogsIndexRoute
  SearchIndexRoute: typeof SearchIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  BlogsIdRoute: BlogsIdRoute,
  AboutIndexRoute: AboutIndexRoute,
  BlogsIndexRoute: BlogsIndexRoute,
  SearchIndexRoute: SearchIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/blogs/$id",
        "/about/",
        "/blogs/",
        "/search/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/blogs/$id": {
      "filePath": "blogs/$id.tsx"
    },
    "/about/": {
      "filePath": "about/index.tsx"
    },
    "/blogs/": {
      "filePath": "blogs/index.tsx"
    },
    "/search/": {
      "filePath": "search/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
