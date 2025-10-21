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
exports.id = "app/api/chats/create/route";
exports.ids = ["app/api/chats/create/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fchats%2Fcreate%2Froute&page=%2Fapi%2Fchats%2Fcreate%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fchats%2Fcreate%2Froute.ts&appDir=C%3A%5Cravochat-app%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5Cravochat-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fchats%2Fcreate%2Froute&page=%2Fapi%2Fchats%2Fcreate%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fchats%2Fcreate%2Froute.ts&appDir=C%3A%5Cravochat-app%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5Cravochat-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_ravochat_app_src_app_api_chats_create_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/chats/create/route.ts */ \"(rsc)/./src/app/api/chats/create/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/chats/create/route\",\n        pathname: \"/api/chats/create\",\n        filename: \"route\",\n        bundlePath: \"app/api/chats/create/route\"\n    },\n    resolvedPagePath: \"C:\\\\ravochat-app\\\\src\\\\app\\\\api\\\\chats\\\\create\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_ravochat_app_src_app_api_chats_create_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/chats/create/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZjaGF0cyUyRmNyZWF0ZSUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGY2hhdHMlMkZjcmVhdGUlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZjaGF0cyUyRmNyZWF0ZSUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDcmF2b2NoYXQtYXBwJTVDc3JjJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDcmF2b2NoYXQtYXBwJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ1E7QUFDckY7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1R0FBdUc7QUFDL0c7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUM2Sjs7QUFFN0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yYXZvY2hhdC1hcHAvPzk2YTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxccmF2b2NoYXQtYXBwXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGNoYXRzXFxcXGNyZWF0ZVxcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvY2hhdHMvY3JlYXRlL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvY2hhdHMvY3JlYXRlXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9jaGF0cy9jcmVhdGUvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxyYXZvY2hhdC1hcHBcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcY2hhdHNcXFxcY3JlYXRlXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2NoYXRzL2NyZWF0ZS9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fchats%2Fcreate%2Froute&page=%2Fapi%2Fchats%2Fcreate%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fchats%2Fcreate%2Froute.ts&appDir=C%3A%5Cravochat-app%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5Cravochat-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/chats/create/route.ts":
/*!*******************************************!*\
  !*** ./src/app/api/chats/create/route.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/db */ \"(rsc)/./src/lib/db.ts\");\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./src/lib/auth.ts\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jsonwebtoken */ \"(rsc)/./node_modules/jsonwebtoken/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst JWT_SECRET = process.env.JWT_SECRET || \"supersecret\";\nasync function POST(req) {\n    try {\n        // JWT ile userId bulmaya çalış\n        let userId = null;\n        const authHeader = req.headers.get(\"authorization\");\n        if (authHeader && authHeader.startsWith(\"Bearer \")) {\n            const token = authHeader.replace(\"Bearer \", \"\");\n            try {\n                const decoded = jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default().verify(token, JWT_SECRET);\n                userId = decoded.userId;\n            } catch  {\n                return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                    error: \"Ge\\xe7ersiz token\"\n                }, {\n                    status: 401\n                });\n            }\n        }\n        // Eğer JWT yoksa NextAuth session ile devam et\n        let session = null;\n        if (!userId) {\n            session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(_lib_auth__WEBPACK_IMPORTED_MODULE_3__.authOptions);\n            if (!session?.user?.id) {\n                return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                    error: \"Oturum a\\xe7manız gerekiyor\"\n                }, {\n                    status: 401\n                });\n            }\n            userId = session.user.id;\n        }\n        const { friendId } = await req.json();\n        // Kullanıcıyı bul\n        const user = await _lib_db__WEBPACK_IMPORTED_MODULE_2__.db.user.findUnique({\n            where: {\n                id: userId\n            }\n        });\n        if (!user) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                error: \"Kullanıcı bulunamadı\"\n            }, {\n                status: 404\n            });\n        }\n        // Arkadaşlık durumunu kontrol et\n        const friendship = await _lib_db__WEBPACK_IMPORTED_MODULE_2__.db.friend.findFirst({\n            where: {\n                OR: [\n                    {\n                        userId: userId,\n                        friendId: friendId\n                    },\n                    {\n                        userId: friendId,\n                        friendId: userId\n                    }\n                ]\n            }\n        });\n        if (!friendship) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                error: \"Bu kullanıcı ile arkadaş değilsiniz\"\n            }, {\n                status: 403\n            });\n        }\n        // Mevcut sohbeti kontrol et\n        const existingChat = await _lib_db__WEBPACK_IMPORTED_MODULE_2__.db.chat.findFirst({\n            where: {\n                type: \"private\",\n                AND: [\n                    {\n                        participants: {\n                            some: {\n                                userId: userId\n                            }\n                        }\n                    },\n                    {\n                        participants: {\n                            some: {\n                                userId: friendId\n                            }\n                        }\n                    }\n                ]\n            }\n        });\n        if (existingChat) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json(existingChat);\n        }\n        // Yeni sohbet oluştur\n        const newChat = await _lib_db__WEBPACK_IMPORTED_MODULE_2__.db.chat.create({\n            data: {\n                type: \"private\",\n                participants: {\n                    create: [\n                        {\n                            userId: userId\n                        },\n                        {\n                            userId: friendId\n                        }\n                    ]\n                }\n            },\n            include: {\n                participants: {\n                    include: {\n                        user: true\n                    }\n                }\n            }\n        });\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json(newChat);\n    } catch (error) {\n        console.error(\"[CHAT_CREATE]\", error);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            error: \"Sohbet oluşturulurken bir hata oluştu\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFRZTt3QkFBUztxQkFBRTtnQkFDcEQ7WUFDRjtZQUNBZ0IsU0FBUztnQkFDUEwsY0FBYztvQkFDWkssU0FBUzt3QkFDUGxCLE1BQU07b0JBQ1I7Z0JBQ0Y7WUFDRjtRQUNGO1FBRUEsT0FBT3ZCLGtGQUFZQSxDQUFDbUIsSUFBSSxDQUFDbUI7SUFDM0IsRUFBRSxPQUFPbEIsT0FBTztRQUNkc0IsUUFBUXRCLEtBQUssQ0FBQyxpQkFBaUJBO1FBQy9CLE9BQU9wQixrRkFBWUEsQ0FBQ21CLElBQUksQ0FDdEI7WUFBRUMsT0FBTztRQUF3QyxHQUNqRDtZQUFFQyxRQUFRO1FBQUk7SUFFbEI7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3Jhdm9jaGF0LWFwcC8uL3NyYy9hcHAvYXBpL2NoYXRzL2NyZWF0ZS9yb3V0ZS50cz9lMmQxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xuaW1wb3J0IHsgZ2V0U2VydmVyU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGhcIjtcbmltcG9ydCB7IGRiIH0gZnJvbSBcIkAvbGliL2RiXCI7XG5pbXBvcnQgeyBhdXRoT3B0aW9ucyB9IGZyb20gXCJAL2xpYi9hdXRoXCI7XG5pbXBvcnQgand0IGZyb20gXCJqc29ud2VidG9rZW5cIjtcblxuY29uc3QgSldUX1NFQ1JFVCA9IHByb2Nlc3MuZW52LkpXVF9TRUNSRVQgfHwgXCJzdXBlcnNlY3JldFwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXE6IFJlcXVlc3QpIHtcbiAgdHJ5IHtcbiAgICAvLyBKV1QgaWxlIHVzZXJJZCBidWxtYXlhIMOnYWzEscWfXG4gICAgbGV0IHVzZXJJZDogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG4gICAgY29uc3QgYXV0aEhlYWRlciA9IHJlcS5oZWFkZXJzLmdldChcImF1dGhvcml6YXRpb25cIik7XG4gICAgaWYgKGF1dGhIZWFkZXIgJiYgYXV0aEhlYWRlci5zdGFydHNXaXRoKFwiQmVhcmVyIFwiKSkge1xuICAgICAgY29uc3QgdG9rZW4gPSBhdXRoSGVhZGVyLnJlcGxhY2UoXCJCZWFyZXIgXCIsIFwiXCIpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZGVjb2RlZDogYW55ID0gand0LnZlcmlmeSh0b2tlbiwgSldUX1NFQ1JFVCk7XG4gICAgICAgIHVzZXJJZCA9IGRlY29kZWQudXNlcklkO1xuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBcIkdlw6dlcnNpeiB0b2tlblwiIH0sIHsgc3RhdHVzOiA0MDEgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIEXEn2VyIEpXVCB5b2tzYSBOZXh0QXV0aCBzZXNzaW9uIGlsZSBkZXZhbSBldFxuICAgIGxldCBzZXNzaW9uID0gbnVsbDtcbiAgICBpZiAoIXVzZXJJZCkge1xuICAgICAgc2Vzc2lvbiA9IGF3YWl0IGdldFNlcnZlclNlc3Npb24oYXV0aE9wdGlvbnMpO1xuICAgICAgaWYgKCFzZXNzaW9uPy51c2VyPy5pZCkge1xuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICAgICAgeyBlcnJvcjogXCJPdHVydW0gYcOnbWFuxLF6IGdlcmVraXlvclwiIH0sXG4gICAgICAgICAgeyBzdGF0dXM6IDQwMSB9XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICB1c2VySWQgPSBzZXNzaW9uLnVzZXIuaWQ7XG4gICAgfVxuICAgIGNvbnN0IHsgZnJpZW5kSWQgfSA9IGF3YWl0IHJlcS5qc29uKCk7XG5cbiAgICAvLyBLdWxsYW7EsWPEsXnEsSBidWxcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgZGIudXNlci5maW5kVW5pcXVlKHsgd2hlcmU6IHsgaWQ6IHVzZXJJZCB9IH0pO1xuXG4gICAgaWYgKCF1c2VyKSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICAgIHsgZXJyb3I6IFwiS3VsbGFuxLFjxLEgYnVsdW5hbWFkxLFcIiB9LFxuICAgICAgICB7IHN0YXR1czogNDA0IH1cbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gQXJrYWRhxZ9sxLFrIGR1cnVtdW51IGtvbnRyb2wgZXRcbiAgICBjb25zdCBmcmllbmRzaGlwID0gYXdhaXQgZGIuZnJpZW5kLmZpbmRGaXJzdCh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBPUjogW1xuICAgICAgICAgIHsgdXNlcklkOiB1c2VySWQsIGZyaWVuZElkOiBmcmllbmRJZCB9LFxuICAgICAgICAgIHsgdXNlcklkOiBmcmllbmRJZCwgZnJpZW5kSWQ6IHVzZXJJZCB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGlmICghZnJpZW5kc2hpcCkge1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgICB7IGVycm9yOiBcIkJ1IGt1bGxhbsSxY8SxIGlsZSBhcmthZGHFnyBkZcSfaWxzaW5pelwiIH0sXG4gICAgICAgIHsgc3RhdHVzOiA0MDMgfVxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBNZXZjdXQgc29oYmV0aSBrb250cm9sIGV0XG4gICAgY29uc3QgZXhpc3RpbmdDaGF0ID0gYXdhaXQgZGIuY2hhdC5maW5kRmlyc3Qoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgdHlwZTogXCJwcml2YXRlXCIsXG4gICAgICAgIEFORDogW1xuICAgICAgICAgIHsgcGFydGljaXBhbnRzOiB7IHNvbWU6IHsgdXNlcklkOiB1c2VySWQgfSB9IH0sXG4gICAgICAgICAgeyBwYXJ0aWNpcGFudHM6IHsgc29tZTogeyB1c2VySWQ6IGZyaWVuZElkIH0gfSB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGlmIChleGlzdGluZ0NoYXQpIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihleGlzdGluZ0NoYXQpO1xuICAgIH1cblxuICAgIC8vIFllbmkgc29oYmV0IG9sdcWfdHVyXG4gICAgY29uc3QgbmV3Q2hhdCA9IGF3YWl0IGRiLmNoYXQuY3JlYXRlKHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdHlwZTogXCJwcml2YXRlXCIsXG4gICAgICAgIHBhcnRpY2lwYW50czoge1xuICAgICAgICAgIGNyZWF0ZTogW3sgdXNlcklkOiB1c2VySWQgfSwgeyB1c2VySWQ6IGZyaWVuZElkIH1dLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgcGFydGljaXBhbnRzOiB7XG4gICAgICAgICAgaW5jbHVkZToge1xuICAgICAgICAgICAgdXNlcjogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihuZXdDaGF0KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiW0NIQVRfQ1JFQVRFXVwiLCBlcnJvcik7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgeyBlcnJvcjogXCJTb2hiZXQgb2x1xZ90dXJ1bHVya2VuIGJpciBoYXRhIG9sdcWfdHVcIiB9LFxuICAgICAgeyBzdGF0dXM6IDUwMCB9XG4gICAgKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImdldFNlcnZlclNlc3Npb24iLCJkYiIsImF1dGhPcHRpb25zIiwiand0IiwiSldUX1NFQ1JFVCIsInByb2Nlc3MiLCJlbnYiLCJQT1NUIiwicmVxIiwidXNlcklkIiwiYXV0aEhlYWRlciIsImhlYWRlcnMiLCJnZXQiLCJzdGFydHNXaXRoIiwidG9rZW4iLCJyZXBsYWNlIiwiZGVjb2RlZCIsInZlcmlmeSIsImpzb24iLCJlcnJvciIsInN0YXR1cyIsInNlc3Npb24iLCJ1c2VyIiwiaWQiLCJmcmllbmRJZCIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsImZyaWVuZHNoaXAiLCJmcmllbmQiLCJmaW5kRmlyc3QiLCJPUiIsImV4aXN0aW5nQ2hhdCIsImNoYXQiLCJ0eXBlIiwiQU5EIiwicGFydGljaXBhbnRzIiwic29tZSIsIm5ld0NoYXQiLCJjcmVhdGUiLCJkYXRhIiwiaW5jbHVkZSIsImNvbnNvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/chats/create/route.ts\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/jose","vendor-chunks/next-auth","vendor-chunks/openid-client","vendor-chunks/semver","vendor-chunks/oauth","vendor-chunks/jsonwebtoken","vendor-chunks/@babel","vendor-chunks/lodash.includes","vendor-chunks/preact","vendor-chunks/preact-render-to-string","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/cookie","vendor-chunks/jws","vendor-chunks/jwa","vendor-chunks/lodash.once","vendor-chunks/lodash.isinteger","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/oidc-token-hash","vendor-chunks/lodash.isplainobject","vendor-chunks/ms","vendor-chunks/@panva","vendor-chunks/lodash.isstring","vendor-chunks/lodash.isnumber","vendor-chunks/lodash.isboolean","vendor-chunks/safe-buffer","vendor-chunks/buffer-equal-constant-time"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fchats%2Fcreate%2Froute&page=%2Fapi%2Fchats%2Fcreate%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fchats%2Fcreate%2Froute.ts&appDir=C%3A%5Cravochat-app%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5Cravochat-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();