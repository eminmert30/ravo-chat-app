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
exports.id = "app/api/friends/respond/route";
exports.ids = ["app/api/friends/respond/route"];
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

/***/ "./action-async-storage.external?8652":
/*!**********************************************************************************!*\
  !*** external "next/dist\\client\\components\\action-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist\\client\\components\\action-async-storage.external.js");

/***/ }),

/***/ "./request-async-storage.external?0211":
/*!***********************************************************************************!*\
  !*** external "next/dist\\client\\components\\request-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist\\client\\components\\request-async-storage.external.js");

/***/ }),

/***/ "./static-generation-async-storage.external?137c":
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ffriends%2Frespond%2Froute&page=%2Fapi%2Ffriends%2Frespond%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ffriends%2Frespond%2Froute.ts&appDir=C%3A%5CUsers%5CYunus%5CDesktop%5Cravochat-app%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CYunus%5CDesktop%5Cravochat-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ffriends%2Frespond%2Froute&page=%2Fapi%2Ffriends%2Frespond%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ffriends%2Frespond%2Froute.ts&appDir=C%3A%5CUsers%5CYunus%5CDesktop%5Cravochat-app%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CYunus%5CDesktop%5Cravochat-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Yunus_Desktop_ravochat_app_src_app_api_friends_respond_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/friends/respond/route.ts */ \"(rsc)/./src/app/api/friends/respond/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/friends/respond/route\",\n        pathname: \"/api/friends/respond\",\n        filename: \"route\",\n        bundlePath: \"app/api/friends/respond/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Yunus\\\\Desktop\\\\ravochat-app\\\\src\\\\app\\\\api\\\\friends\\\\respond\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_Yunus_Desktop_ravochat_app_src_app_api_friends_respond_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/friends/respond/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZmcmllbmRzJTJGcmVzcG9uZCUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGZnJpZW5kcyUyRnJlc3BvbmQlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZmcmllbmRzJTJGcmVzcG9uZCUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNZdW51cyU1Q0Rlc2t0b3AlNUNyYXZvY2hhdC1hcHAlNUNzcmMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q1l1bnVzJTVDRGVza3RvcCU1Q3Jhdm9jaGF0LWFwcCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUNrQztBQUMvRztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVHQUF1RztBQUMvRztBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzZKOztBQUU3SiIsInNvdXJjZXMiOlsid2VicGFjazovL3Jhdm9jaGF0LWFwcC8/ZjUxZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxZdW51c1xcXFxEZXNrdG9wXFxcXHJhdm9jaGF0LWFwcFxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxmcmllbmRzXFxcXHJlc3BvbmRcXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2ZyaWVuZHMvcmVzcG9uZC9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2ZyaWVuZHMvcmVzcG9uZFwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvZnJpZW5kcy9yZXNwb25kL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcWXVudXNcXFxcRGVza3RvcFxcXFxyYXZvY2hhdC1hcHBcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcZnJpZW5kc1xcXFxyZXNwb25kXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2ZyaWVuZHMvcmVzcG9uZC9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ffriends%2Frespond%2Froute&page=%2Fapi%2Ffriends%2Frespond%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ffriends%2Frespond%2Froute.ts&appDir=C%3A%5CUsers%5CYunus%5CDesktop%5Cravochat-app%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CYunus%5CDesktop%5Cravochat-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/friends/respond/route.ts":
/*!**********************************************!*\
  !*** ./src/app/api/friends/respond/route.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/db */ \"(rsc)/./src/lib/db.ts\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./src/lib/auth.ts\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jsonwebtoken */ \"(rsc)/./node_modules/jsonwebtoken/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst JWT_SECRET = process.env.JWT_SECRET || \"supersecret\";\nasync function POST(request) {\n    try {\n        // JWT ile userId bulmaya çalış\n        let userId = null;\n        const authHeader = request.headers.get(\"authorization\");\n        if (authHeader && authHeader.startsWith(\"Bearer \")) {\n            const token = authHeader.replace(\"Bearer \", \"\");\n            try {\n                const decoded = jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default().verify(token, JWT_SECRET);\n                userId = decoded.userId;\n            } catch  {\n                return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                    error: \"Ge\\xe7ersiz token\"\n                }, {\n                    status: 401\n                });\n            }\n        }\n        // Eğer JWT yoksa NextAuth session ile devam et\n        let session = null;\n        if (!userId) {\n            session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_2__.getServerSession)(_lib_auth__WEBPACK_IMPORTED_MODULE_3__.authOptions);\n            if (!session?.user?.id) {\n                return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                    error: \"Oturum a\\xe7manız gerekiyor\"\n                }, {\n                    status: 401\n                });\n            }\n            userId = session.user.id;\n        }\n        const { requestId, action } = await request.json();\n        if (!requestId || !action) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                error: \"İstek ID ve aksiyon gerekli\"\n            }, {\n                status: 400\n            });\n        }\n        if (![\n            \"accept\",\n            \"reject\"\n        ].includes(action)) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                error: \"Ge\\xe7ersiz aksiyon\"\n            }, {\n                status: 400\n            });\n        }\n        // İsteği bul\n        const friendRequest = await _lib_db__WEBPACK_IMPORTED_MODULE_1__.db.friendRequest.findFirst({\n            where: {\n                id: requestId,\n                receiverId: userId,\n                status: \"pending\"\n            },\n            include: {\n                sender: {\n                    select: {\n                        id: true,\n                        name: true,\n                        email: true\n                    }\n                }\n            }\n        });\n        if (!friendRequest) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                error: \"Arkadaşlık isteği bulunamadı\"\n            }, {\n                status: 404\n            });\n        }\n        if (action === \"accept\") {\n            await _lib_db__WEBPACK_IMPORTED_MODULE_1__.db.$transaction([\n                _lib_db__WEBPACK_IMPORTED_MODULE_1__.db.friendRequest.update({\n                    where: {\n                        id: requestId\n                    },\n                    data: {\n                        status: \"accepted\"\n                    }\n                }),\n                _lib_db__WEBPACK_IMPORTED_MODULE_1__.db.friend.create({\n                    data: {\n                        userId: userId,\n                        friendId: friendRequest.senderId\n                    }\n                }),\n                _lib_db__WEBPACK_IMPORTED_MODULE_1__.db.friend.create({\n                    data: {\n                        userId: friendRequest.senderId,\n                        friendId: userId\n                    }\n                })\n            ]);\n            if (global.io) {\n                global.io.to(friendRequest.sender.email).emit(\"friendRequestAccepted\", {\n                    type: \"friendRequestAccepted\",\n                    data: {\n                        requestId,\n                        acceptedBy: {\n                            id: userId,\n                            name: session?.user?.name || \"\",\n                            email: session?.user?.email || \"\"\n                        }\n                    }\n                });\n                global.io.to(friendRequest.sender.email).emit(\"refreshFriendsList\");\n                global.io.to(friendRequest.sender.email).emit(\"refreshFriendsList\");\n            }\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                message: \"Arkadaşlık isteği kabul edildi\"\n            });\n        } else {\n            await _lib_db__WEBPACK_IMPORTED_MODULE_1__.db.friendRequest.update({\n                where: {\n                    id: requestId\n                },\n                data: {\n                    status: \"rejected\"\n                }\n            });\n            if (global.io) {\n                global.io.to(friendRequest.sender.email).emit(\"friendRequestRejected\", {\n                    type: \"friendRequestRejected\",\n                    data: {\n                        requestId\n                    }\n                });\n            }\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                message: \"Arkadaşlık isteği reddedildi\"\n            });\n        }\n    } catch (error) {\n        console.error(\"Arkadaşlık isteği yanıtlama hatası:\", error);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            error: \"İstek yanıtlanırken bir hata oluştu\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9mcmllbmRzL3Jlc3BvbmQvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBMkM7QUFDYjtBQUNlO0FBQ0o7QUFFVjtBQUUvQixNQUFNSyxhQUFhQyxRQUFRQyxHQUFHLENBQUNGLFVBQVUsSUFBSTtBQUV0QyxlQUFlRyxLQUFLQyxPQUFnQjtJQUN6QyxJQUFJO1FBQ0YsK0JBQStCO1FBQy9CLElBQUlDLFNBQXdCO1FBQzVCLE1BQU1DLGFBQWFGLFFBQVFHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDO1FBQ3ZDLElBQUlGLGNBQWNBLFdBQVdHLFVBQVUsQ0FBQyxZQUFZO1lBQ2xELE1BQU1DLFFBQVFKLFdBQVdLLE9BQU8sQ0FBQyxXQUFXO1lBQzVDLElBQUk7Z0JBQ0YsTUFBTUMsVUFBZWIsMERBQVUsQ0FBQ1csT0FBT1Y7Z0JBQ3ZDSyxTQUFTTyxRQUFRUCxNQUFNO1lBQ3pCLEVBQUUsT0FBTTtnQkFDTixPQUFPVixrRkFBWUEsQ0FBQ21CLElBQUksQ0FBQztvQkFBRUMsT0FBTztnQkFBaUIsR0FBRztvQkFBRUMsUUFBUTtnQkFBSTtZQUN0RTtRQUNGO1FBQ0EsK0NBQStDO1FBQy9DLElBQUlDLFVBQVU7UUFDZCxJQUFJLENBQUNaLFFBQVE7WUFDWFksVUFBVSxNQUFNcEIsMkRBQWdCQSxDQUFDQyxrREFBV0E7WUFDNUMsSUFBSSxDQUFDbUIsU0FBU0MsTUFBTUMsSUFBSTtnQkFDdEIsT0FBT3hCLGtGQUFZQSxDQUFDbUIsSUFBSSxDQUN0QjtvQkFBRUMsT0FBTztnQkFBMkIsR0FDcEM7b0JBQUVDLFFBQVE7Z0JBQUk7WUFFbEI7WUFDQVgsU0FBU1ksUUFBUUMsSUFBSSxDQUFDQyxFQUFFO1FBQzFCO1FBQ0EsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLE1BQU0sRUFBRSxHQUFHLE1BQU1qQixRQUFRVSxJQUFJO1FBQ2hELElBQUksQ0FBQ00sYUFBYSxDQUFDQyxRQUFRO1lBQ3pCLE9BQU8xQixrRkFBWUEsQ0FBQ21CLElB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SSxDQUN0QjtZQUFFQyxPQUFPO1FBQXNDLEdBQy9DO1lBQUVDLFFBQVE7UUFBSTtJQUVsQjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmF2b2NoYXQtYXBwLy4vc3JjL2FwcC9hcGkvZnJpZW5kcy9yZXNwb25kL3JvdXRlLnRzPzgyZDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5pbXBvcnQgeyBkYiB9IGZyb20gXCJAL2xpYi9kYlwiO1xuaW1wb3J0IHsgZ2V0U2VydmVyU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGhcIjtcbmltcG9ydCB7IGF1dGhPcHRpb25zIH0gZnJvbSBcIkAvbGliL2F1dGhcIjtcbmltcG9ydCB7IGlvIH0gZnJvbSBcIkAvbGliL3NvY2tldFwiO1xuaW1wb3J0IGp3dCBmcm9tIFwianNvbndlYnRva2VuXCI7XG5cbmNvbnN0IEpXVF9TRUNSRVQgPSBwcm9jZXNzLmVudi5KV1RfU0VDUkVUIHx8IFwic3VwZXJzZWNyZXRcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxdWVzdDogUmVxdWVzdCkge1xuICB0cnkge1xuICAgIC8vIEpXVCBpbGUgdXNlcklkIGJ1bG1heWEgw6dhbMSxxZ9cbiAgICBsZXQgdXNlcklkOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcbiAgICBjb25zdCBhdXRoSGVhZGVyID0gcmVxdWVzdC5oZWFkZXJzLmdldChcImF1dGhvcml6YXRpb25cIik7XG4gICAgaWYgKGF1dGhIZWFkZXIgJiYgYXV0aEhlYWRlci5zdGFydHNXaXRoKFwiQmVhcmVyIFwiKSkge1xuICAgICAgY29uc3QgdG9rZW4gPSBhdXRoSGVhZGVyLnJlcGxhY2UoXCJCZWFyZXIgXCIsIFwiXCIpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZGVjb2RlZDogYW55ID0gand0LnZlcmlmeSh0b2tlbiwgSldUX1NFQ1JFVCk7XG4gICAgICAgIHVzZXJJZCA9IGRlY29kZWQudXNlcklkO1xuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBcIkdlw6dlcnNpeiB0b2tlblwiIH0sIHsgc3RhdHVzOiA0MDEgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIEXEn2VyIEpXVCB5b2tzYSBOZXh0QXV0aCBzZXNzaW9uIGlsZSBkZXZhbSBldFxuICAgIGxldCBzZXNzaW9uID0gbnVsbDtcbiAgICBpZiAoIXVzZXJJZCkge1xuICAgICAgc2Vzc2lvbiA9IGF3YWl0IGdldFNlcnZlclNlc3Npb24oYXV0aE9wdGlvbnMpO1xuICAgICAgaWYgKCFzZXNzaW9uPy51c2VyPy5pZCkge1xuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICAgICAgeyBlcnJvcjogXCJPdHVydW0gYcOnbWFuxLF6IGdlcmVraXlvclwiIH0sXG4gICAgICAgICAgeyBzdGF0dXM6IDQwMSB9XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICB1c2VySWQgPSBzZXNzaW9uLnVzZXIuaWQ7XG4gICAgfVxuICAgIGNvbnN0IHsgcmVxdWVzdElkLCBhY3Rpb24gfSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xuICAgIGlmICghcmVxdWVzdElkIHx8ICFhY3Rpb24pIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgICAgeyBlcnJvcjogXCLEsHN0ZWsgSUQgdmUgYWtzaXlvbiBnZXJla2xpXCIgfSxcbiAgICAgICAgeyBzdGF0dXM6IDQwMCB9XG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoIVtcImFjY2VwdFwiLCBcInJlamVjdFwiXS5pbmNsdWRlcyhhY3Rpb24pKSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogXCJHZcOnZXJzaXogYWtzaXlvblwiIH0sIHsgc3RhdHVzOiA0MDAgfSk7XG4gICAgfVxuICAgIC8vIMSwc3RlxJ9pIGJ1bFxuICAgIGNvbnN0IGZyaWVuZFJlcXVlc3QgPSBhd2FpdCBkYi5mcmllbmRSZXF1ZXN0LmZpbmRGaXJzdCh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBpZDogcmVxdWVzdElkLFxuICAgICAgICByZWNlaXZlcklkOiB1c2VySWQsXG4gICAgICAgIHN0YXR1czogXCJwZW5kaW5nXCIsXG4gICAgICB9LFxuICAgICAgaW5jbHVkZToge1xuICAgICAgICBzZW5kZXI6IHtcbiAgICAgICAgICBzZWxlY3Q6IHtcbiAgICAgICAgICAgIGlkOiB0cnVlLFxuICAgICAgICAgICAgbmFtZTogdHJ1ZSxcbiAgICAgICAgICAgIGVtYWlsOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pO1xuICAgIGlmICghZnJpZW5kUmVxdWVzdCkge1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgICB7IGVycm9yOiBcIkFya2FkYcWfbMSxayBpc3RlxJ9pIGJ1bHVuYW1hZMSxXCIgfSxcbiAgICAgICAgeyBzdGF0dXM6IDQwNCB9XG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoYWN0aW9uID09PSBcImFjY2VwdFwiKSB7XG4gICAgICBhd2FpdCBkYi4kdHJhbnNhY3Rpb24oW1xuICAgICAgICBkYi5mcmllbmRSZXF1ZXN0LnVwZGF0ZSh7XG4gICAgICAgICAgd2hlcmU6IHsgaWQ6IHJlcXVlc3RJZCB9LFxuICAgICAgICAgIGRhdGE6IHsgc3RhdHVzOiBcImFjY2VwdGVkXCIgfSxcbiAgICAgICAgfSksXG4gICAgICAgIGRiLmZyaWVuZC5jcmVhdGUoe1xuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIHVzZXJJZDogdXNlcklkLFxuICAgICAgICAgICAgZnJpZW5kSWQ6IGZyaWVuZFJlcXVlc3Quc2VuZGVySWQsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSksXG4gICAgICAgIGRiLmZyaWVuZC5jcmVhdGUoe1xuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIHVzZXJJZDogZnJpZW5kUmVxdWVzdC5zZW5kZXJJZCxcbiAgICAgICAgICAgIGZyaWVuZElkOiB1c2VySWQsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSksXG4gICAgICBdKTtcbiAgICAgIGlmIChnbG9iYWwuaW8pIHtcbiAgICAgICAgZ2xvYmFsLmlvLnRvKGZyaWVuZFJlcXVlc3Quc2VuZGVyLmVtYWlsKS5lbWl0KFwiZnJpZW5kUmVxdWVzdEFjY2VwdGVkXCIsIHtcbiAgICAgICAgICB0eXBlOiBcImZyaWVuZFJlcXVlc3RBY2NlcHRlZFwiLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIHJlcXVlc3RJZCxcbiAgICAgICAgICAgIGFjY2VwdGVkQnk6IHtcbiAgICAgICAgICAgICAgaWQ6IHVzZXJJZCxcbiAgICAgICAgICAgICAgbmFtZTogc2Vzc2lvbj8udXNlcj8ubmFtZSB8fCBcIlwiLFxuICAgICAgICAgICAgICBlbWFpbDogc2Vzc2lvbj8udXNlcj8uZW1haWwgfHwgXCJcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIGdsb2JhbC5pby50byhmcmllbmRSZXF1ZXN0LnNlbmRlci5lbWFpbCkuZW1pdChcInJlZnJlc2hGcmllbmRzTGlzdFwiKTtcbiAgICAgICAgZ2xvYmFsLmlvLnRvKGZyaWVuZFJlcXVlc3Quc2VuZGVyLmVtYWlsKS5lbWl0KFwicmVmcmVzaEZyaWVuZHNMaXN0XCIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgbWVzc2FnZTogXCJBcmthZGHFn2zEsWsgaXN0ZcSfaSBrYWJ1bCBlZGlsZGlcIiB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXdhaXQgZGIuZnJpZW5kUmVxdWVzdC51cGRhdGUoe1xuICAgICAgICB3aGVyZTogeyBpZDogcmVxdWVzdElkIH0sXG4gICAgICAgIGRhdGE6IHsgc3RhdHVzOiBcInJlamVjdGVkXCIgfSxcbiAgICAgIH0pO1xuICAgICAgaWYgKGdsb2JhbC5pbykge1xuICAgICAgICBnbG9iYWwuaW8udG8oZnJpZW5kUmVxdWVzdC5zZW5kZXIuZW1haWwpLmVtaXQoXCJmcmllbmRSZXF1ZXN0UmVqZWN0ZWRcIiwge1xuICAgICAgICAgIHR5cGU6IFwiZnJpZW5kUmVxdWVzdFJlamVjdGVkXCIsXG4gICAgICAgICAgZGF0YTogeyByZXF1ZXN0SWQgfSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBtZXNzYWdlOiBcIkFya2FkYcWfbMSxayBpc3RlxJ9pIHJlZGRlZGlsZGlcIiB9KTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkFya2FkYcWfbMSxayBpc3RlxJ9pIHlhbsSxdGxhbWEgaGF0YXPEsTpcIiwgZXJyb3IpO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgIHsgZXJyb3I6IFwixLBzdGVrIHlhbsSxdGxhbsSxcmtlbiBiaXIgaGF0YSBvbHXFn3R1XCIgfSxcbiAgICAgIHsgc3RhdHVzOiA1MDAgfVxuICAgICk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJkYiIsImdldFNlcnZlclNlc3Npb24iLCJhdXRoT3B0aW9ucyIsImp3dCIsIkpXVF9TRUNSRVQiLCJwcm9jZXNzIiwiZW52IiwiUE9TVCIsInJlcXVlc3QiLCJ1c2VySWQiLCJhdXRoSGVhZGVyIiwiaGVhZGVycyIsImdldCIsInN0YXJ0c1dpdGgiLCJ0b2tlbiIsInJlcGxhY2UiLCJkZWNvZGVkIiwidmVyaWZ5IiwianNvbiIsImVycm9yIiwic3RhdHVzIiwic2Vzc2lvbiIsInVzZXIiLCJpZCIsInJlcXVlc3RJZCIsImFjdGlvbiIsImluY2x1ZGVzIiwiZnJpZW5kUmVxdWVzdCIsImZpbmRGaXJzdCIsIndoZXJlIiwicmVjZWl2ZXJJZCIsImluY2x1ZGUiLCJzZW5kZXIiLCJzZWxlY3QiLCJuYW1lIiwiZW1haWwiLCIkdHJhbnNhY3Rpb24iLCJ1cGRhdGUiLCJkYXRhIiwiZnJpZW5kIiwiY3JlYXRlIiwiZnJpZW5kSWQiLCJzZW5kZXJJZCIsImdsb2JhbCIsImlvIiwidG8iLCJlbWl0IiwidHlwZSIsImFjY2VwdGVkQnkiLCJtZXNzYWdlIiwiY29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/friends/respond/route.ts\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/ms","vendor-chunks/next-auth","vendor-chunks/semver","vendor-chunks/@babel","vendor-chunks/jsonwebtoken","vendor-chunks/lodash.includes","vendor-chunks/jws","vendor-chunks/jwa","vendor-chunks/lodash.once","vendor-chunks/lodash.isinteger","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/lodash.isplainobject","vendor-chunks/lodash.isstring","vendor-chunks/lodash.isnumber","vendor-chunks/lodash.isboolean","vendor-chunks/safe-buffer","vendor-chunks/buffer-equal-constant-time","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/oauth","vendor-chunks/preact","vendor-chunks/preact-render-to-string","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ffriends%2Frespond%2Froute&page=%2Fapi%2Ffriends%2Frespond%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ffriends%2Frespond%2Froute.ts&appDir=C%3A%5CUsers%5CYunus%5CDesktop%5Cravochat-app%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CYunus%5CDesktop%5Cravochat-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();