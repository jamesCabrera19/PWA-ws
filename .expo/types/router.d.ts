/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/about` | `/about`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `/components/Button`; params?: Router.UnknownInputParams; } | { pathname: `/components/ImageViewer`; params?: Router.UnknownInputParams; } | { pathname: `/components/SensorItem`; params?: Router.UnknownInputParams; } | { pathname: `/components/SensorScreen`; params?: Router.UnknownInputParams; } | { pathname: `/hooks/useWebSocket`; params?: Router.UnknownInputParams; } | { pathname: `/context/WebSocketContext`; params?: Router.UnknownInputParams; } | { pathname: `/+not-found`, params: Router.UnknownInputParams & {  } } | { pathname: `${'/(tabs)'}/sensor/[id]` | `/sensor/[id]`, params: Router.UnknownInputParams & { id: string | number; } };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/about` | `/about`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownOutputParams; } | { pathname: `/components/Button`; params?: Router.UnknownOutputParams; } | { pathname: `/components/ImageViewer`; params?: Router.UnknownOutputParams; } | { pathname: `/components/SensorItem`; params?: Router.UnknownOutputParams; } | { pathname: `/components/SensorScreen`; params?: Router.UnknownOutputParams; } | { pathname: `/hooks/useWebSocket`; params?: Router.UnknownOutputParams; } | { pathname: `/context/WebSocketContext`; params?: Router.UnknownOutputParams; } | { pathname: `/+not-found`, params: Router.UnknownOutputParams & {  } } | { pathname: `${'/(tabs)'}/sensor/[id]` | `/sensor/[id]`, params: Router.UnknownOutputParams & { id: string; } };
      href: Router.RelativePathString | Router.ExternalPathString | `/_sitemap${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/about${`?${string}` | `#${string}` | ''}` | `/about${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}${`?${string}` | `#${string}` | ''}` | `/${`?${string}` | `#${string}` | ''}` | `/components/Button${`?${string}` | `#${string}` | ''}` | `/components/ImageViewer${`?${string}` | `#${string}` | ''}` | `/components/SensorItem${`?${string}` | `#${string}` | ''}` | `/components/SensorScreen${`?${string}` | `#${string}` | ''}` | `/hooks/useWebSocket${`?${string}` | `#${string}` | ''}` | `/context/WebSocketContext${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/about` | `/about`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `/components/Button`; params?: Router.UnknownInputParams; } | { pathname: `/components/ImageViewer`; params?: Router.UnknownInputParams; } | { pathname: `/components/SensorItem`; params?: Router.UnknownInputParams; } | { pathname: `/components/SensorScreen`; params?: Router.UnknownInputParams; } | { pathname: `/hooks/useWebSocket`; params?: Router.UnknownInputParams; } | { pathname: `/context/WebSocketContext`; params?: Router.UnknownInputParams; } | `/+not-found` | `${'/(tabs)'}/sensor/${Router.SingleRoutePart<T>}` | `/sensor/${Router.SingleRoutePart<T>}` | { pathname: `/+not-found`, params: Router.UnknownInputParams & {  } } | { pathname: `${'/(tabs)'}/sensor/[id]` | `/sensor/[id]`, params: Router.UnknownInputParams & { id: string | number; } };
    }
  }
}
