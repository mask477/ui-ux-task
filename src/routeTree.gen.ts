/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const SupportLazyImport = createFileRoute('/support')()
const RecipientsLazyImport = createFileRoute('/recipients')()
const LeadsLazyImport = createFileRoute('/leads')()
const HygieneListLazyImport = createFileRoute('/hygiene-list')()
const DashboardLazyImport = createFileRoute('/dashboard')()
const AudienceLazyImport = createFileRoute('/audience')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const SupportLazyRoute = SupportLazyImport.update({
  id: '/support',
  path: '/support',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/support.lazy').then((d) => d.Route))

const RecipientsLazyRoute = RecipientsLazyImport.update({
  id: '/recipients',
  path: '/recipients',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/recipients.lazy').then((d) => d.Route))

const LeadsLazyRoute = LeadsLazyImport.update({
  id: '/leads',
  path: '/leads',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/leads.lazy').then((d) => d.Route))

const HygieneListLazyRoute = HygieneListLazyImport.update({
  id: '/hygiene-list',
  path: '/hygiene-list',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/hygiene-list.lazy').then((d) => d.Route))

const DashboardLazyRoute = DashboardLazyImport.update({
  id: '/dashboard',
  path: '/dashboard',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/dashboard.lazy').then((d) => d.Route))

const AudienceLazyRoute = AudienceLazyImport.update({
  id: '/audience',
  path: '/audience',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/audience.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/audience': {
      id: '/audience'
      path: '/audience'
      fullPath: '/audience'
      preLoaderRoute: typeof AudienceLazyImport
      parentRoute: typeof rootRoute
    }
    '/dashboard': {
      id: '/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof DashboardLazyImport
      parentRoute: typeof rootRoute
    }
    '/hygiene-list': {
      id: '/hygiene-list'
      path: '/hygiene-list'
      fullPath: '/hygiene-list'
      preLoaderRoute: typeof HygieneListLazyImport
      parentRoute: typeof rootRoute
    }
    '/leads': {
      id: '/leads'
      path: '/leads'
      fullPath: '/leads'
      preLoaderRoute: typeof LeadsLazyImport
      parentRoute: typeof rootRoute
    }
    '/recipients': {
      id: '/recipients'
      path: '/recipients'
      fullPath: '/recipients'
      preLoaderRoute: typeof RecipientsLazyImport
      parentRoute: typeof rootRoute
    }
    '/support': {
      id: '/support'
      path: '/support'
      fullPath: '/support'
      preLoaderRoute: typeof SupportLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/audience': typeof AudienceLazyRoute
  '/dashboard': typeof DashboardLazyRoute
  '/hygiene-list': typeof HygieneListLazyRoute
  '/leads': typeof LeadsLazyRoute
  '/recipients': typeof RecipientsLazyRoute
  '/support': typeof SupportLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/audience': typeof AudienceLazyRoute
  '/dashboard': typeof DashboardLazyRoute
  '/hygiene-list': typeof HygieneListLazyRoute
  '/leads': typeof LeadsLazyRoute
  '/recipients': typeof RecipientsLazyRoute
  '/support': typeof SupportLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/audience': typeof AudienceLazyRoute
  '/dashboard': typeof DashboardLazyRoute
  '/hygiene-list': typeof HygieneListLazyRoute
  '/leads': typeof LeadsLazyRoute
  '/recipients': typeof RecipientsLazyRoute
  '/support': typeof SupportLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/audience'
    | '/dashboard'
    | '/hygiene-list'
    | '/leads'
    | '/recipients'
    | '/support'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/audience'
    | '/dashboard'
    | '/hygiene-list'
    | '/leads'
    | '/recipients'
    | '/support'
  id:
    | '__root__'
    | '/'
    | '/audience'
    | '/dashboard'
    | '/hygiene-list'
    | '/leads'
    | '/recipients'
    | '/support'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  AudienceLazyRoute: typeof AudienceLazyRoute
  DashboardLazyRoute: typeof DashboardLazyRoute
  HygieneListLazyRoute: typeof HygieneListLazyRoute
  LeadsLazyRoute: typeof LeadsLazyRoute
  RecipientsLazyRoute: typeof RecipientsLazyRoute
  SupportLazyRoute: typeof SupportLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  AudienceLazyRoute: AudienceLazyRoute,
  DashboardLazyRoute: DashboardLazyRoute,
  HygieneListLazyRoute: HygieneListLazyRoute,
  LeadsLazyRoute: LeadsLazyRoute,
  RecipientsLazyRoute: RecipientsLazyRoute,
  SupportLazyRoute: SupportLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/audience",
        "/dashboard",
        "/hygiene-list",
        "/leads",
        "/recipients",
        "/support"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/audience": {
      "filePath": "audience.lazy.tsx"
    },
    "/dashboard": {
      "filePath": "dashboard.lazy.tsx"
    },
    "/hygiene-list": {
      "filePath": "hygiene-list.lazy.tsx"
    },
    "/leads": {
      "filePath": "leads.lazy.tsx"
    },
    "/recipients": {
      "filePath": "recipients.lazy.tsx"
    },
    "/support": {
      "filePath": "support.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
