"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/users/last-seen/route";
exports.ids = ["app/api/users/last-seen/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "argon2":
/*!*************************!*\
  !*** external "argon2" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("argon2");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "./action-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist\\client\\components\\action-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist\\client\\components\\action-async-storage.external.js");

/***/ }),

/***/ "./request-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist\\client\\components\\request-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist\\client\\components\\request-async-storage.external.js");

/***/ }),

/***/ "./static-generation-async-storage.external":
/*!*********************************************************************************************!*\
  !*** external "next/dist\\client\\components\\static-generation-async-storage.external.js" ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist\\client\\components\\static-generation-async-storage.external.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fusers%2Flast-seen%2Froute&page=%2Fapi%2Fusers%2Flast-seen%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Flast-seen%2Froute.ts&appDir=C%3A%5Cravochat-app%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5Cravochat-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fusers%2Flast-seen%2Froute&page=%2Fapi%2Fusers%2Flast-seen%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Flast-seen%2Froute.ts&appDir=C%3A%5Cravochat-app%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5Cravochat-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_ravochat_app_src_app_api_users_last_seen_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/users/last-seen/route.ts */ \"(rsc)/./src/app/api/users/last-seen/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/users/last-seen/route\",\n        pathname: \"/api/users/last-seen\",\n        filename: \"route\",\n        bundlePath: \"app/api/users/last-seen/route\"\n    },\n    resolvedPagePath: \"C:\\\\ravochat-app\\\\src\\\\app\\\\api\\\\users\\\\last-seen\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_ravochat_app_src_app_api_users_last_seen_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/users/last-seen/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZ1c2VycyUyRmxhc3Qtc2VlbiUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGdXNlcnMlMkZsYXN0LXNlZW4lMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZ1c2VycyUyRmxhc3Qtc2VlbiUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDcmF2b2NoYXQtYXBwJTVDc3JjJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDcmF2b2NoYXQtYXBwJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ1c7QUFDeEY7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1R0FBdUc7QUFDL0c7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUM2Sjs7QUFFN0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yYXZvY2hhdC1hcHAvPzZiNmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxccmF2b2NoYXQtYXBwXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXHVzZXJzXFxcXGxhc3Qtc2VlblxcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvdXNlcnMvbGFzdC1zZWVuL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvdXNlcnMvbGFzdC1zZWVuXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS91c2Vycy9sYXN0LXNlZW4vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxyYXZvY2hhdC1hcHBcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcdXNlcnNcXFxcbGFzdC1zZWVuXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL3VzZXJzL2xhc3Qtc2Vlbi9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fusers%2Flast-seen%2Froute&page=%2Fapi%2Fusers%2Flast-seen%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Flast-seen%2Froute.ts&appDir=C%3A%5Cravochat-app%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5Cravochat-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/users/last-seen/route.ts":
/*!**********************************************!*\
  !*** ./src/app/api/users/last-seen/route.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/db */ \"(rsc)/./src/lib/db.ts\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./src/lib/auth.ts\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jsonwebtoken */ \"(rsc)/./node_modules/jsonwebtoken/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst JWT_SECRET = process.env.JWT_SECRET || \"supersecret\";\nasync function GET(request) {\n    try {\n        // JWT ile userId bulmaya çalış\n        let userId = null;\n        const authHeader = request.headers.get(\"authorization\");\n        if (authHeader && authHeader.startsWith(\"Bearer \")) {\n            const token = authHeader.replace(\"Bearer \", \"\");\n            try {\n                const decoded = jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default().verify(token, JWT_SECRET);\n                userId = decoded.userId;\n            } catch  {\n                return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                    error: \"Ge\\xe7ersiz token\"\n                }, {\n                    status: 401\n                });\n            }\n        }\n        // Eğer JWT yoksa NextAuth session ile devam et\n        let session = null;\n        if (!userId) {\n            session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_2__.getServerSession)(_lib_auth__WEBPACK_IMPORTED_MODULE_3__.authOptions);\n            if (!session?.user?.id) {\n                return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                    error: \"Oturum a\\xe7manız gerekiyor\"\n                }, {\n                    status: 401\n                });\n            }\n            userId = session.user.id;\n        }\n        // friendId parametresini al\n        const { searchParams } = new URL(request.url);\n        const friendId = searchParams.get(\"friendId\");\n        if (!friendId) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                error: \"friendId parametresi gerekli\"\n            }, {\n                status: 400\n            });\n        }\n        const user = await _lib_db__WEBPACK_IMPORTED_MODULE_1__.db.user.findUnique({\n            where: {\n                id: friendId\n            }\n        });\n        if (!user) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                error: \"Kullanıcı bulunamadı\"\n            }, {\n                status: 404\n            });\n        }\n        const lastSeen = user.lastSeen ? new Date(user.lastSeen).toLocaleString(\"tr-TR\", {\n            timeZone: \"Europe/Istanbul\",\n            hour: \"2-digit\",\n            minute: \"2-digit\"\n        }) : null;\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            lastSeen\n        });\n    } catch (error) {\n        console.error(\"[USERS_LAST_SEEN]\", error);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            error: \"Bir hata oluştu\"\n        }, {\n            status: 500\n        });\n    }\n}\nasync function POST(request) {\n    let userId = null;\n    try {\n        // JWT ile userId bulmaya çalış\n        const authHeader = request.headers.get(\"authorization\");\n        if (authHeader && authHeader.startsWith(\"Bearer \")) {\n            const token = authHeader.replace(\"Bearer \", \"\");\n            try {\n                const decoded = jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default().verify(token, JWT_SECRET);\n                userId = decoded.userId;\n            } catch  {\n                return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                    error: \"Ge\\xe7ersiz token\"\n                }, {\n                    status: 401\n                });\n            }\n        }\n        // Eğer JWT yoksa NextAuth session ile devam et\n        let session = null;\n        if (!userId) {\n            session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_2__.getServerSession)(_lib_auth__WEBPACK_IMPORTED_MODULE_3__.authOptions);\n            if (!session?.user?.id) {\n                return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                    error: \"Oturum a\\xe7manız gerekiyor\"\n                }, {\n                    status: 401\n                });\n            }\n            userId = session.user.id;\n        }\n        // Kullanıcının lastSeen bilgisini güncelle\n        const updated = await _lib_db__WEBPACK_IMPORTED_MODULE_1__.db.user.update({\n            where: {\n                id: userId\n            },\n            data: {\n                lastSeen: new Date()\n            }\n        });\n        console.log(\"[API] lastSeen g\\xfcncellendi\", userId, updated.lastSeen);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            success: true\n        });\n    } catch (error) {\n        console.error(\"[USERS_LAST_SEEN_POST]\", error, \"userId:\", userId);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            error: \"Bir hata oluştu\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS91c2Vycy9sYXN0LXNlZW4vcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTJDO0FBQ2I7QUFDZTtBQUNKO0FBQ1Y7QUFFL0IsTUFBTUssYUFBYUMsUUFBUUMsR0FBRyxDQUFDRixVQUFVLElBQUk7QUFFdEMsZUFBZUcsSUFBSUMsT0FBZ0I7SUFDeEMsSUFBSTtRQUNGLCtCQUErQjtRQUMvQixJQUFJQyxTQUF3QjtRQUM1QixNQUFNQyxhQUFhRixRQUFRRyxPQUFPLENBQUNDLEdBQUcsQ0FBQztRQUN2QyxJQUFJRixjQUFjQSxXQUFXRyxVQUFVLENBQUMsWUFBWTtZQUNsRCxNQUFNQyxRQUFRSixXQUFXSyxPQUFPLENBQUMsV0FBVztZQUM1QyxJQUFJO2dCQUNGLE1BQU1DLFVBQWViLDBEQUFVLENBQUNXLE9BQU9WO2dCQUN2Q0ssU0FBU08sUUFBUVAsTUFBTTtZQUN6QixFQUFFLE9BQU07Z0JBQ04sT0FBT1Ysa0ZBQVlBLENBQUNtQixJQUFJLENBQUM7b0JBQUVDLE9BQU87Z0JBQWlCLEdBQUc7b0JBQUVDLFFBQVE7Z0JBQUk7WUFDdEU7UUFDRjtRQUNBLCtDQUErQztRQUMvQyxJQUFJQyxVQUFVO1FBQ2QsSUFBSSxDQUFDWixRQUFRO1lBQ1hZLFVBQVUsTUFBTXBCLDJEQUFnQkEsQ0FBQ0Msa0RBQVdBO1lBQzVDLElBQUksQ0FBQ21CLFNBQVNDLE1BQU1DLElBQUk7Z0JBQ3RCLE9BQU94QixrRkFBWUEsQ0FBQ21CLElBQUksQ0FDdEI7b0JBQUVDLE9BQU87Z0JBQTJCLEdBQ3BDO29CQUFFQyxRQUFRO2dCQUFJO1lBRWxCO1lBQ0FYLFNBQVNZLFFBQVFDLElBQUksQ0FBQ0MsRUFBRTtRQUMxQjtRQUNBLDRCQUE0QjtRQUM1QixNQUFNLEVBQUVDLFlBQVksRUFBRSxHQUFHLElBQUlDLElBQUlqQixRQUFRa0IsR0FBRztRQUM1QyxNQUFNQyxXQUFXSCxhQUFhWixHQUFHLENBQUM7UUFDbEMsSUFBSSxDQUFDZSxVQUFVO1lBQ2IsT0FBTzVCLGtGQUFZQSxDQUFDbUIsSUFBSSxDQUN0QjtnQkFBRUMsT0FBTztZQUErQixHQUN4QztnQkFBRUMsUUFBUTtZQUFJO1FBRWxCO1FBQ0EsTUFBTUUsT0FBTyxNQUFNdEIsdUNBQUVBLENBQUNzQixJQUFJLENBQUNNLFVBQVUsQ0FBQztZQUFFQyxPQUFPO2dCQUFFTixJQUFJSTtZQUFTO1FBQUU7UUFDaEUsSUFBSSxDQUFDTCxNQUFNO1lBQ1QsT0FBT3ZCLGtGQUFZQSxDQUFDbUIsSUFBSSxDQUN0QjtnQkFBRUMsT0FBTztZQUF1QixHQUNoQztnQkFBRUMsUUFBUTtZQUFJO1FBRWxCO1FBQ0EsTUFBTVUsV0FBV1IsS0FBS1EsUUFBUSxHQUMxQixJQUFJQyxLQUFLVCxLQUFLUSxRQUFRLEVBQUVFLGNBQWMsQ0FBQyxTQUFTO1lBQzlDQyxVQUFVO1lBQ1ZDLE1BQU07WUFDTkMsUUFBUTtRQUNWLEtBQ0E7UUFDSixPQUFPcEMsa0ZBQVlBLENBQUNtQixJQUFJLENBQUM7WUFBRVk7UUFBUztJQUN0QyxFQUFFLE9BQU9YLE9BQU87UUFDZGlCLFFBQVFqQixLQUFLLENBQUMscUJBQXFCQTtRQUNuQyxPQUFPcEIsa0ZBQVlBLENBQUNtQixJQUFJLENBQUM7WUFBRUMsT0FBTztRQUFrQixHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUN2RTtBQUNGO0FBRU8sZUFBZWlCLEtBQUs3QixPQUFnQjtJQUN6QyxJQUFJQyxTQUF3QjtJQUM1QixJQUFJO1FBQ0YsK0JBQStCO1FBQy9CLE1BQU1DLGFBQWFGLFFBQVFHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDO1FBQ3ZDLElBQUlGLGNBQWNBLFdBQVdHLFVBQVUsQ0FBQyxZQUFZO1lBQ2xELE1BQU1DLFFBQVFKLFdBQVdLLE9BQU8sQ0FBQyxXQUFXO1lBQzVDLElBQUk7Z0JBQ0YsTUFBTUMsVUFBZWIsMERBQVUsQ0FBQ1csT0FBT1Y7Z0JBQ3ZDSyxTQUFTTyxRQUFRUCxNQUFNO1lBQ3pCLEVBQUUsT0FBTTtnQkFDTixPQUFPVixrRkFBWUEsQ0FBQ21CLElBQUksQ0FBQztvQkFBRUMsT0FBTztnQkFBaUIsR0FBRztvQkFBRUMsUUFBUTtnQkFBSTtZQUN0RTtRQUNGO1FBQ0EsK0NBQStDO1FBQy9DLElBQUlDLFVBQVU7UUFDZCxJQUFJLENBQUNaLFFBQVE7WUFDWFksVUFBVSxNQUFNcEIsMkRBQWdCQSxDQUFDQyxrREFBV0E7WUFDNUMsSUFBSSxDQUFDbUIsU0FBU0MsTUFBTUMsSUFBSTtnQkFDdEIsT0FBT3hCLGtGQUFZQSxDQUFDbUIsSUFBSSxDQUN0QjtvQkFBRUMsT0FBTztnQkFBMkIsR0FDcEM7b0JBQUVDLFFBQVE7Z0JBQUk7WUFFbEI7WUFDQVgsU0FBU1ksUUFBUUMsSUFBSSxDQUFDQyxFQUFFO1FBQzFCO1FBQ0EsMkNBQTJDO1FBQzNDLE1BQU1lLFVBQVUsTUFBTXRDLHVDQUFFQSxDQUFDc0IsSUFBSSxDQUFDaUIsTUFBTSxDQUFDO1lBQ25DVixPQUFPO2dCQUFFTixJQUFJZDtZQUFPO1lBQ3BCK0IsTUFBTTtnQkFBRVYsVUFBVSxJQUFJQztZQUFPO1FBQy9CO1FBQ0FLLFFBQVFLLEdBQUcsQ0FBQyxpQ0FBOEJoQyxRQUFRNkIsUUFBUVIsUUFBUTtRQUNsRSxPQUFPL0Isa0ZBQVlBLENBQUNtQixJQUFJLENBQUM7WUFBRXdCLFNBQVM7UUFBSztJQUMzQyxFQUFFLE9BQU92QixPQUFPO1FBQ2RpQixRQUFRakIsS0FBSyxDQUFDLDBCQUEwQkEsT0FBTyxXQUFXVjtRQUMxRCxPQUFPVixrRkFBWUEsQ0FBQ21CLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQWtCLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQ3ZFO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yYXZvY2hhdC1hcHAvLi9zcmMvYXBwL2FwaS91c2Vycy9sYXN0LXNlZW4vcm91dGUudHM/OWZkYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcclxuaW1wb3J0IHsgZGIgfSBmcm9tIFwiQC9saWIvZGJcIjtcclxuaW1wb3J0IHsgZ2V0U2VydmVyU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGhcIjtcclxuaW1wb3J0IHsgYXV0aE9wdGlvbnMgfSBmcm9tIFwiQC9saWIvYXV0aFwiO1xyXG5pbXBvcnQgand0IGZyb20gXCJqc29ud2VidG9rZW5cIjtcclxuXHJcbmNvbnN0IEpXVF9TRUNSRVQgPSBwcm9jZXNzLmVudi5KV1RfU0VDUkVUIHx8IFwic3VwZXJzZWNyZXRcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQocmVxdWVzdDogUmVxdWVzdCkge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBKV1QgaWxlIHVzZXJJZCBidWxtYXlhIMOnYWzEscWfXHJcbiAgICBsZXQgdXNlcklkOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxuICAgIGNvbnN0IGF1dGhIZWFkZXIgPSByZXF1ZXN0LmhlYWRlcnMuZ2V0KFwiYXV0aG9yaXphdGlvblwiKTtcclxuICAgIGlmIChhdXRoSGVhZGVyICYmIGF1dGhIZWFkZXIuc3RhcnRzV2l0aChcIkJlYXJlciBcIikpIHtcclxuICAgICAgY29uc3QgdG9rZW4gPSBhdXRoSGVhZGVyLnJlcGxhY2UoXCJCZWFyZXIgXCIsIFwiXCIpO1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGRlY29kZWQ6IGFueSA9IGp3dC52ZXJpZnkodG9rZW4sIEpXVF9TRUNSRVQpO1xyXG4gICAgICAgIHVzZXJJZCA9IGRlY29kZWQudXNlcklkO1xyXG4gICAgICB9IGNhdGNoIHtcclxuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogXCJHZcOnZXJzaXogdG9rZW5cIiB9LCB7IHN0YXR1czogNDAxIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBFxJ9lciBKV1QgeW9rc2EgTmV4dEF1dGggc2Vzc2lvbiBpbGUgZGV2YW0gZXRcclxuICAgIGxldCBzZXNzaW9uID0gbnVsbDtcclxuICAgIGlmICghdXNlcklkKSB7XHJcbiAgICAgIHNlc3Npb24gPSBhd2FpdCBnZXRTZXJ2ZXJTZXNzaW9uKGF1dGhPcHRpb25zKTtcclxuICAgICAgaWYgKCFzZXNzaW9uPy51c2VyPy5pZCkge1xyXG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAgICAgIHsgZXJyb3I6IFwiT3R1cnVtIGHDp21hbsSxeiBnZXJla2l5b3JcIiB9LFxyXG4gICAgICAgICAgeyBzdGF0dXM6IDQwMSB9XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICB1c2VySWQgPSBzZXNzaW9uLnVzZXIuaWQ7XHJcbiAgICB9XHJcbiAgICAvLyBmcmllbmRJZCBwYXJhbWV0cmVzaW5pIGFsXHJcbiAgICBjb25zdCB7IHNlYXJjaFBhcmFtcyB9ID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XHJcbiAgICBjb25zdCBmcmllbmRJZCA9IHNlYXJjaFBhcmFtcy5nZXQoXCJmcmllbmRJZFwiKTtcclxuICAgIGlmICghZnJpZW5kSWQpIHtcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxyXG4gICAgICAgIHsgZXJyb3I6IFwiZnJpZW5kSWQgcGFyYW1ldHJlc2kgZ2VyZWtsaVwiIH0sXHJcbiAgICAgICAgeyBzdGF0dXM6IDQwMCB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgZGIudXNlci5maW5kVW5pcXVlKHsgd2hlcmU6IHsgaWQ6IGZyaWVuZElkIH0gfSk7XHJcbiAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxyXG4gICAgICAgIHsgZXJyb3I6IFwiS3VsbGFuxLFjxLEgYnVsdW5hbWFkxLFcIiB9LFxyXG4gICAgICAgIHsgc3RhdHVzOiA0MDQgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbGFzdFNlZW4gPSB1c2VyLmxhc3RTZWVuXHJcbiAgICAgID8gbmV3IERhdGUodXNlci5sYXN0U2VlbikudG9Mb2NhbGVTdHJpbmcoXCJ0ci1UUlwiLCB7XHJcbiAgICAgICAgICB0aW1lWm9uZTogXCJFdXJvcGUvSXN0YW5idWxcIixcclxuICAgICAgICAgIGhvdXI6IFwiMi1kaWdpdFwiLFxyXG4gICAgICAgICAgbWludXRlOiBcIjItZGlnaXRcIixcclxuICAgICAgICB9KVxyXG4gICAgICA6IG51bGw7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBsYXN0U2VlbiB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIltVU0VSU19MQVNUX1NFRU5dXCIsIGVycm9yKTtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBcIkJpciBoYXRhIG9sdcWfdHVcIiB9LCB7IHN0YXR1czogNTAwIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxdWVzdDogUmVxdWVzdCkge1xyXG4gIGxldCB1c2VySWQ6IHN0cmluZyB8IG51bGwgPSBudWxsO1xyXG4gIHRyeSB7XHJcbiAgICAvLyBKV1QgaWxlIHVzZXJJZCBidWxtYXlhIMOnYWzEscWfXHJcbiAgICBjb25zdCBhdXRoSGVhZGVyID0gcmVxdWVzdC5oZWFkZXJzLmdldChcImF1dGhvcml6YXRpb25cIik7XHJcbiAgICBpZiAoYXV0aEhlYWRlciAmJiBhdXRoSGVhZGVyLnN0YXJ0c1dpdGgoXCJCZWFyZXIgXCIpKSB7XHJcbiAgICAgIGNvbnN0IHRva2VuID0gYXV0aEhlYWRlci5yZXBsYWNlKFwiQmVhcmVyIFwiLCBcIlwiKTtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBkZWNvZGVkOiBhbnkgPSBqd3QudmVyaWZ5KHRva2VuLCBKV1RfU0VDUkVUKTtcclxuICAgICAgICB1c2VySWQgPSBkZWNvZGVkLnVzZXJJZDtcclxuICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiR2XDp2Vyc2l6IHRva2VuXCIgfSwgeyBzdGF0dXM6IDQwMSB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gRcSfZXIgSldUIHlva3NhIE5leHRBdXRoIHNlc3Npb24gaWxlIGRldmFtIGV0XHJcbiAgICBsZXQgc2Vzc2lvbiA9IG51bGw7XHJcbiAgICBpZiAoIXVzZXJJZCkge1xyXG4gICAgICBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihhdXRoT3B0aW9ucyk7XHJcbiAgICAgIGlmICghc2Vzc2lvbj8udXNlcj8uaWQpIHtcclxuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXHJcbiAgICAgICAgICB7IGVycm9yOiBcIk90dXJ1bSBhw6dtYW7EsXogZ2VyZWtpeW9yXCIgfSxcclxuICAgICAgICAgIHsgc3RhdHVzOiA0MDEgfVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICAgdXNlcklkID0gc2Vzc2lvbi51c2VyLmlkO1xyXG4gICAgfVxyXG4gICAgLy8gS3VsbGFuxLFjxLFuxLFuIGxhc3RTZWVuIGJpbGdpc2luaSBnw7xuY2VsbGVcclxuICAgIGNvbnN0IHVwZGF0ZWQgPSBhd2FpdCBkYi51c2VyLnVwZGF0ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkOiB1c2VySWQgfSxcclxuICAgICAgZGF0YTogeyBsYXN0U2VlbjogbmV3IERhdGUoKSB9LFxyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhcIltBUEldIGxhc3RTZWVuIGfDvG5jZWxsZW5kaVwiLCB1c2VySWQsIHVwZGF0ZWQubGFzdFNlZW4pO1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgc3VjY2VzczogdHJ1ZSB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIltVU0VSU19MQVNUX1NFRU5fUE9TVF1cIiwgZXJyb3IsIFwidXNlcklkOlwiLCB1c2VySWQpO1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiQmlyIGhhdGEgb2x1xZ90dVwiIH0sIHsgc3RhdHVzOiA1MDAgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJkYiIsImdldFNlcnZlclNlc3Npb24iLCJhdXRoT3B0aW9ucyIsImp3dCIsIkpXVF9TRUNSRVQiLCJwcm9jZXNzIiwiZW52IiwiR0VUIiwicmVxdWVzdCIsInVzZXJJZCIsImF1dGhIZWFkZXIiLCJoZWFkZXJzIiwiZ2V0Iiwic3RhcnRzV2l0aCIsInRva2VuIiwicmVwbGFjZSIsImRlY29kZWQiLCJ2ZXJpZnkiLCJqc29uIiwiZXJyb3IiLCJzdGF0dXMiLCJzZXNzaW9uIiwidXNlciIsImlkIiwic2VhcmNoUGFyYW1zIiwiVVJMIiwidXJsIiwiZnJpZW5kSWQiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJsYXN0U2VlbiIsIkRhdGUiLCJ0b0xvY2FsZVN0cmluZyIsInRpbWVab25lIiwiaG91ciIsIm1pbnV0ZSIsImNvbnNvbGUiLCJQT1NUIiwidXBkYXRlZCIsInVwZGF0ZSIsImRhdGEiLCJsb2ciLCJzdWNjZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/users/last-seen/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/auth.ts":
/*!*************************!*\
  !*** ./src/lib/auth.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/db */ \"(rsc)/./src/lib/db.ts\");\n/* harmony import */ var argon2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! argon2 */ \"argon2\");\n/* harmony import */ var argon2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(argon2__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst authOptions = {\n    pages: {\n        signIn: \"/login\"\n    },\n    session: {\n        strategy: \"jwt\"\n    },\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n            credentials: {\n                email: {\n                    type: \"email\"\n                },\n                password: {\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                if (!credentials?.email || !credentials?.password) {\n                    return null;\n                }\n                const user = await _lib_db__WEBPACK_IMPORTED_MODULE_1__.db.user.findUnique({\n                    where: {\n                        email: credentials.email\n                    }\n                });\n                if (!user || !user.password) {\n                    return null;\n                }\n                const isPasswordValid = await argon2__WEBPACK_IMPORTED_MODULE_2__.verify(user.password, credentials.password);\n                if (!isPasswordValid) {\n                    return null;\n                }\n                return {\n                    id: user.id,\n                    email: user.email,\n                    name: user.name\n                };\n            }\n        })\n    ],\n    callbacks: {\n        async session ({ token, session }) {\n            if (token) {\n                session.user.id = token.id;\n                session.user.email = token.email;\n                session.user.name = token.name;\n            }\n            return session;\n        },\n        async jwt ({ token, user }) {\n            if (user) {\n                token.id = user.id;\n            }\n            return token;\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2F1dGgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDa0U7QUFDcEM7QUFDRztBQUUxQixNQUFNRyxjQUErQjtJQUMxQ0MsT0FBTztRQUNMQyxRQUFRO0lBQ1Y7SUFDQUMsU0FBUztRQUNQQyxVQUFVO0lBQ1o7SUFDQUMsV0FBVztRQUNUUiwyRUFBbUJBLENBQUM7WUFDbEJTLGFBQWE7Z0JBQ1hDLE9BQU87b0JBQUVDLE1BQU07Z0JBQVE7Z0JBQ3ZCQyxVQUFVO29CQUFFRCxNQUFNO2dCQUFXO1lBQy9CO1lBQ0EsTUFBTUUsV0FBVUosV0FBVztnQkFDekIsSUFBSSxDQUFDQSxhQUFhQyxTQUFTLENBQUNELGFBQWFHLFVBQVU7b0JBQ2pELE9BQU87Z0JBQ1Q7Z0JBRUEsTUFBTUUsT0FBTyxNQUFNYix1Q0FBRUEsQ0FBQ2EsSUFBSSxDQUFDQyxVQUFVLENBQUM7b0JBQ3BDQyxPQUFPO3dCQUNMTixPQUFPRCxZQUFZQyxLQUFLO29CQUMxQjtnQkFDRjtnQkFFQSxJQUFJLENBQUNJLFFBQVEsQ0FBQ0EsS0FBS0YsUUFBUSxFQUFFO29CQUMzQixPQUFPO2dCQUNUO2dCQUVBLE1BQU1LLGtCQUFrQixNQUFNZiwwQ0FBYSxDQUFDWSxLQUFLRixRQUFRLEVBQUVILFlBQVlHLFFBQVE7Z0JBRS9FLElBQUksQ0FBQ0ssaUJBQWlCO29CQUNwQixPQUFPO2dCQUNUO2dCQUVBLE9BQU87b0JBQ0xFLElBQUlMLEtBQUtLLEVBQUU7b0JBQ1hULE9BQU9JLEtBQUtKLEtBQUs7b0JBQ2pCVSxNQUFNTixLQUFLTSxJQUFJO2dCQUNqQjtZQUNGO1FBQ0Y7S0FDRDtJQUNEQyxXQUFXO1FBQ1QsTUFBTWYsU0FBUSxFQUFFZ0IsS0FBSyxFQUFFaEIsT0FBTyxFQUFFO1lBQzlCLElBQUlnQixPQUFPO2dCQUNUaEIsUUFBUVEsSUFBSSxDQUFDSyxFQUFFLEdBQUdHLE1BQU1ILEVBQUU7Z0JBQzFCYixRQUFRUSxJQUFJLENBQUNKLEtBQUssR0FBR1ksTUFBTVosS0FBSztnQkFDaENKLFFBQVFRLElBQUksQ0FBQ00sSUFBSSxHQUFHRSxNQUFNRixJQUFJO1lBQ2hDO1lBQ0EsT0FBT2Q7UUFDVDtRQUNBLE1BQU1pQixLQUFJLEVBQUVELEtBQUssRUFBRVIsSUFBSSxFQUFFO1lBQ3ZCLElBQUlBLE1BQU07Z0JBQ1JRLE1BQU1ILEVBQUUsR0FBR0wsS0FBS0ssRUFBRTtZQUNwQjtZQUNBLE9BQU9HO1FBQ1Q7SUFDRjtBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yYXZvY2hhdC1hcHAvLi9zcmMvbGliL2F1dGgudHM/NjY5MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXV0aE9wdGlvbnMgfSBmcm9tIFwibmV4dC1hdXRoXCI7XG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFsc1wiO1xuaW1wb3J0IHsgZGIgfSBmcm9tIFwiQC9saWIvZGJcIjtcbmltcG9ydCAqIGFzIGFyZ29uMiBmcm9tIFwiYXJnb24yXCI7XG5cbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9uczogTmV4dEF1dGhPcHRpb25zID0ge1xuICBwYWdlczoge1xuICAgIHNpZ25JbjogXCIvbG9naW5cIixcbiAgfSxcbiAgc2Vzc2lvbjoge1xuICAgIHN0cmF0ZWd5OiBcImp3dFwiLFxuICB9LFxuICBwcm92aWRlcnM6IFtcbiAgICBDcmVkZW50aWFsc1Byb3ZpZGVyKHtcbiAgICAgIGNyZWRlbnRpYWxzOiB7XG4gICAgICAgIGVtYWlsOiB7IHR5cGU6IFwiZW1haWxcIiB9LFxuICAgICAgICBwYXNzd29yZDogeyB0eXBlOiBcInBhc3N3b3JkXCIgfVxuICAgICAgfSxcbiAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFscykge1xuICAgICAgICBpZiAoIWNyZWRlbnRpYWxzPy5lbWFpbCB8fCAhY3JlZGVudGlhbHM/LnBhc3N3b3JkKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgZGIudXNlci5maW5kVW5pcXVlKHtcbiAgICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgZW1haWw6IGNyZWRlbnRpYWxzLmVtYWlsXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIXVzZXIgfHwgIXVzZXIucGFzc3dvcmQpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGlzUGFzc3dvcmRWYWxpZCA9IGF3YWl0IGFyZ29uMi52ZXJpZnkodXNlci5wYXNzd29yZCwgY3JlZGVudGlhbHMucGFzc3dvcmQpO1xuXG4gICAgICAgIGlmICghaXNQYXNzd29yZFZhbGlkKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGlkOiB1c2VyLmlkLFxuICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgICAgIG5hbWU6IHVzZXIubmFtZSxcbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIGNhbGxiYWNrczoge1xuICAgIGFzeW5jIHNlc3Npb24oeyB0b2tlbiwgc2Vzc2lvbiB9KSB7XG4gICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgc2Vzc2lvbi51c2VyLmlkID0gdG9rZW4uaWQgYXMgc3RyaW5nO1xuICAgICAgICBzZXNzaW9uLnVzZXIuZW1haWwgPSB0b2tlbi5lbWFpbCBhcyBzdHJpbmc7XG4gICAgICAgIHNlc3Npb24udXNlci5uYW1lID0gdG9rZW4ubmFtZSBhcyBzdHJpbmc7XG4gICAgICB9XG4gICAgICByZXR1cm4gc2Vzc2lvbjtcbiAgICB9LFxuICAgIGFzeW5jIGp3dCh7IHRva2VuLCB1c2VyIH0pIHtcbiAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgIHRva2VuLmlkID0gdXNlci5pZDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0b2tlbjtcbiAgICB9LFxuICB9LFxufTtcbiJdLCJuYW1lcyI6WyJDcmVkZW50aWFsc1Byb3ZpZGVyIiwiZGIiLCJhcmdvbjIiLCJhdXRoT3B0aW9ucyIsInBhZ2VzIiwic2lnbkluIiwic2Vzc2lvbiIsInN0cmF0ZWd5IiwicHJvdmlkZXJzIiwiY3JlZGVudGlhbHMiLCJlbWFpbCIsInR5cGUiLCJwYXNzd29yZCIsImF1dGhvcml6ZSIsInVzZXIiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJpc1Bhc3N3b3JkVmFsaWQiLCJ2ZXJpZnkiLCJpZCIsIm5hbWUiLCJjYWxsYmFja3MiLCJ0b2tlbiIsImp3dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/auth.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/db.ts":
/*!***********************!*\
  !*** ./src/lib/db.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   db: () => (/* binding */ db)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prismaClientSingleton = ()=>{\n    return new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n        log:  true ? [\n            \"query\",\n            \"error\",\n            \"warn\"\n        ] : 0,\n        errorFormat: \"pretty\"\n    });\n};\nconst db = globalThis.prisma ?? prismaClientSingleton();\nif (true) {\n    globalThis.prisma = db;\n}\n// Bağlantı havuzu sağlık kontrolü\ndb.$use(async (params, next)=>{\n    const before = Date.now();\n    const result = await next(params);\n    const after = Date.now();\n    if (after - before > 1000) {\n        console.warn(`Uzun süren sorgu tespit edildi: ${params.model}.${params.action} - ${after - before}ms`);\n    }\n    return result;\n});\n// Uygulama kapatıldığında bağlantıyı kapat\nprocess.on(\"beforeExit\", async ()=>{\n    await db.$disconnect();\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2RiLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE2QztBQU03QyxNQUFNQyx3QkFBd0I7SUFDNUIsT0FBTyxJQUFJRCx3REFBWUEsQ0FBQztRQUN0QkUsS0FBS0MsS0FBeUIsR0FBZ0I7WUFBQztZQUFTO1lBQVM7U0FBTyxHQUFHLENBQVM7UUFDcEZDLGFBQWE7SUFDZjtBQUNGO0FBRU8sTUFBTUMsS0FBS0MsV0FBV0MsTUFBTSxJQUFJTix3QkFBdUI7QUFFOUQsSUFBSUUsSUFBeUIsRUFBYztJQUN6Q0csV0FBV0MsTUFBTSxHQUFHRjtBQUN0QjtBQUVBLGtDQUFrQztBQUNsQ0EsR0FBR0csSUFBSSxDQUFDLE9BQU9DLFFBQVFDO0lBQ3JCLE1BQU1DLFNBQVNDLEtBQUtDLEdBQUc7SUFDdkIsTUFBTUMsU0FBUyxNQUFNSixLQUFLRDtJQUMxQixNQUFNTSxRQUFRSCxLQUFLQyxHQUFHO0lBRXRCLElBQUlFLFFBQVFKLFNBQVMsTUFBTTtRQUN6QkssUUFBUUMsSUFBSSxDQUFDLENBQUMsZ0NBQWdDLEVBQUVSLE9BQU9TLEtBQUssQ0FBQyxDQUFDLEVBQUVULE9BQU9VLE1BQU0sQ0FBQyxHQUFHLEVBQUVKLFFBQVFKLE9BQU8sRUFBRSxDQUFDO0lBQ3ZHO0lBRUEsT0FBT0c7QUFDVDtBQUVBLDJDQUEyQztBQUMzQ1gsUUFBUWlCLEVBQUUsQ0FBQyxjQUFjO0lBQ3ZCLE1BQU1mLEdBQUdnQixXQUFXO0FBQ3RCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmF2b2NoYXQtYXBwLy4vc3JjL2xpYi9kYi50cz85ZTRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIHZhciBwcmlzbWE6IFByaXNtYUNsaWVudCB8IHVuZGVmaW5lZFxufVxuXG5jb25zdCBwcmlzbWFDbGllbnRTaW5nbGV0b24gPSAoKSA9PiB7XG4gIHJldHVybiBuZXcgUHJpc21hQ2xpZW50KHtcbiAgICBsb2c6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnID8gWydxdWVyeScsICdlcnJvcicsICd3YXJuJ10gOiBbJ2Vycm9yJ10sXG4gICAgZXJyb3JGb3JtYXQ6ICdwcmV0dHknXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBkYiA9IGdsb2JhbFRoaXMucHJpc21hID8/IHByaXNtYUNsaWVudFNpbmdsZXRvbigpXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIGdsb2JhbFRoaXMucHJpc21hID0gZGJcbn1cblxuLy8gQmHEn2xhbnTEsSBoYXZ1enUgc2HEn2zEsWsga29udHJvbMO8XG5kYi4kdXNlKGFzeW5jIChwYXJhbXMsIG5leHQpID0+IHtcbiAgY29uc3QgYmVmb3JlID0gRGF0ZS5ub3coKVxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBuZXh0KHBhcmFtcylcbiAgY29uc3QgYWZ0ZXIgPSBEYXRlLm5vdygpXG4gIFxuICBpZiAoYWZ0ZXIgLSBiZWZvcmUgPiAxMDAwKSB7IC8vIDEgc2FuaXllZGVuIHV6dW4gc8O8cmVuIHNvcmd1bGFyXG4gICAgY29uc29sZS53YXJuKGBVenVuIHPDvHJlbiBzb3JndSB0ZXNwaXQgZWRpbGRpOiAke3BhcmFtcy5tb2RlbH0uJHtwYXJhbXMuYWN0aW9ufSAtICR7YWZ0ZXIgLSBiZWZvcmV9bXNgKVxuICB9XG4gIFxuICByZXR1cm4gcmVzdWx0XG59KVxuXG4vLyBVeWd1bGFtYSBrYXBhdMSxbGTEscSfxLFuZGEgYmHEn2xhbnTEsXnEsSBrYXBhdFxucHJvY2Vzcy5vbignYmVmb3JlRXhpdCcsIGFzeW5jICgpID0+IHtcbiAgYXdhaXQgZGIuJGRpc2Nvbm5lY3QoKVxufSlcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWFDbGllbnRTaW5nbGV0b24iLCJsb2ciLCJwcm9jZXNzIiwiZXJyb3JGb3JtYXQiLCJkYiIsImdsb2JhbFRoaXMiLCJwcmlzbWEiLCIkdXNlIiwicGFyYW1zIiwibmV4dCIsImJlZm9yZSIsIkRhdGUiLCJub3ciLCJyZXN1bHQiLCJhZnRlciIsImNvbnNvbGUiLCJ3YXJuIiwibW9kZWwiLCJhY3Rpb24iLCJvbiIsIiRkaXNjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/db.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/jose","vendor-chunks/next-auth","vendor-chunks/openid-client","vendor-chunks/semver","vendor-chunks/oauth","vendor-chunks/jsonwebtoken","vendor-chunks/@babel","vendor-chunks/lodash.includes","vendor-chunks/preact","vendor-chunks/preact-render-to-string","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/cookie","vendor-chunks/jws","vendor-chunks/jwa","vendor-chunks/lodash.once","vendor-chunks/lodash.isinteger","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/oidc-token-hash","vendor-chunks/lodash.isplainobject","vendor-chunks/ms","vendor-chunks/@panva","vendor-chunks/lodash.isstring","vendor-chunks/lodash.isnumber","vendor-chunks/lodash.isboolean","vendor-chunks/safe-buffer","vendor-chunks/buffer-equal-constant-time"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fusers%2Flast-seen%2Froute&page=%2Fapi%2Fusers%2Flast-seen%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Flast-seen%2Froute.ts&appDir=C%3A%5Cravochat-app%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5Cravochat-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();