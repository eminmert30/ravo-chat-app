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
exports.id = "app/api/messages/send/route";
exports.ids = ["app/api/messages/send/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fmessages%2Fsend%2Froute&page=%2Fapi%2Fmessages%2Fsend%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmessages%2Fsend%2Froute.ts&appDir=C%3A%5CUsers%5CYunus%5CDesktop%5Cravochat-app%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CYunus%5CDesktop%5Cravochat-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fmessages%2Fsend%2Froute&page=%2Fapi%2Fmessages%2Fsend%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmessages%2Fsend%2Froute.ts&appDir=C%3A%5CUsers%5CYunus%5CDesktop%5Cravochat-app%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CYunus%5CDesktop%5Cravochat-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Yunus_Desktop_ravochat_app_src_app_api_messages_send_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/messages/send/route.ts */ \"(rsc)/./src/app/api/messages/send/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/messages/send/route\",\n        pathname: \"/api/messages/send\",\n        filename: \"route\",\n        bundlePath: \"app/api/messages/send/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Yunus\\\\Desktop\\\\ravochat-app\\\\src\\\\app\\\\api\\\\messages\\\\send\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_Yunus_Desktop_ravochat_app_src_app_api_messages_send_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/messages/send/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZtZXNzYWdlcyUyRnNlbmQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRm1lc3NhZ2VzJTJGc2VuZCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRm1lc3NhZ2VzJTJGc2VuZCUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNZdW51cyU1Q0Rlc2t0b3AlNUNyYXZvY2hhdC1hcHAlNUNzcmMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q1l1bnVzJTVDRGVza3RvcCU1Q3Jhdm9jaGF0LWFwcCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUNnQztBQUM3RztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVHQUF1RztBQUMvRztBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzZKOztBQUU3SiIsInNvdXJjZXMiOlsid2VicGFjazovL3Jhdm9jaGF0LWFwcC8/MmQ0MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxZdW51c1xcXFxEZXNrdG9wXFxcXHJhdm9jaGF0LWFwcFxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxtZXNzYWdlc1xcXFxzZW5kXFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9tZXNzYWdlcy9zZW5kL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvbWVzc2FnZXMvc2VuZFwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvbWVzc2FnZXMvc2VuZC9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFVzZXJzXFxcXFl1bnVzXFxcXERlc2t0b3BcXFxccmF2b2NoYXQtYXBwXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXG1lc3NhZ2VzXFxcXHNlbmRcXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0IH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvbWVzc2FnZXMvc2VuZC9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fmessages%2Fsend%2Froute&page=%2Fapi%2Fmessages%2Fsend%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmessages%2Fsend%2Froute.ts&appDir=C%3A%5CUsers%5CYunus%5CDesktop%5Cravochat-app%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CYunus%5CDesktop%5Cravochat-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/messages/send/route.ts":
/*!********************************************!*\
  !*** ./src/app/api/messages/send/route.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/db */ \"(rsc)/./src/lib/db.ts\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./src/lib/auth.ts\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jsonwebtoken */ \"(rsc)/./node_modules/jsonwebtoken/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst JWT_SECRET = process.env.JWT_SECRET || \"supersecret\";\nasync function POST(request) {\n    try {\n        // JWT ile userId bulmaya çalış\n        let userId = null;\n        const authHeader = request.headers.get(\"authorization\");\n        if (authHeader && authHeader.startsWith(\"Bearer \")) {\n            const token = authHeader.replace(\"Bearer \", \"\");\n            try {\n                const decoded = jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default().verify(token, JWT_SECRET);\n                userId = decoded.userId;\n            } catch  {\n                console.log(\"[API][send] JWT token doğrulama başarısız\");\n                return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                    error: \"Ge\\xe7ersiz token\"\n                }, {\n                    status: 401\n                });\n            }\n        }\n        // Eğer JWT yoksa NextAuth session ile devam et\n        let session = null;\n        if (!userId) {\n            session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_2__.getServerSession)(_lib_auth__WEBPACK_IMPORTED_MODULE_3__.authOptions);\n            if (!session?.user?.id) {\n                console.log(\"[API][send] Oturum yok, userId bulunamadı\");\n                return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                    error: \"Oturum a\\xe7manız gerekiyor\"\n                }, {\n                    status: 401\n                });\n            }\n            userId = session.user.id;\n        }\n        // Parametreleri al\n        const { friendId, content, fileUrl, fileType, fileName } = await request.json();\n        console.log(\"[API][send] Parametreler:\", {\n            userId,\n            friendId,\n            content,\n            fileUrl,\n            fileType,\n            fileName\n        });\n        if (!friendId || !content && !fileUrl) {\n            console.log(\"[API][send] Eksik parametre!\", {\n                friendId,\n                content,\n                fileUrl\n            });\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                error: \"Alıcı ID ve mesaj i\\xe7eriği veya dosya gerekli\"\n            }, {\n                status: 400\n            });\n        }\n        // Arkadaşlık durumunu kontrol et\n        const friendship = await _lib_db__WEBPACK_IMPORTED_MODULE_1__.db.friend.findFirst({\n            where: {\n                OR: [\n                    {\n                        userId: userId,\n                        friendId: friendId\n                    },\n                    {\n                        userId: friendId,\n                        friendId: userId\n                    }\n                ]\n            }\n        });\n        if (!friendship) {\n            console.log(\"[API][send] Arkadaşlık yok!\", {\n                userId,\n                friendId\n            });\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                error: \"Bu kullanıcıya mesaj g\\xf6nderme yetkiniz yok\"\n            }, {\n                status: 403\n            });\n        }\n        // Chat var mı kontrol et, yoksa oluştur\n        let chat = await _lib_db__WEBPACK_IMPORTED_MODULE_1__.db.chat.findFirst({\n            where: {\n                type: \"private\",\n                participants: {\n                    every: {\n                        OR: [\n                            {\n                                userId: userId\n                            },\n                            {\n                                userId: friendId\n                            }\n                        ]\n                    }\n                }\n            }\n        });\n        if (!chat) {\n            chat = await _lib_db__WEBPACK_IMPORTED_MODULE_1__.db.chat.create({\n                data: {\n                    type: \"private\",\n                    participants: {\n                        create: [\n                            {\n                                user: {\n                                    connect: {\n                                        id: userId\n                                    }\n                                }\n                            },\n                            {\n                                user: {\n                                    connect: {\n                                        id: friendId\n                                    }\n                                }\n                            }\n                        ]\n                    }\n                }\n            });\n        }\n        // Mesajı oluştur\n        const message = await _lib_db__WEBPACK_IMPORTED_MODULE_1__.db.message.create({\n            data: {\n                senderId: userId,\n                chatId: chat.id,\n                content: content || \"\",\n                fileUrl,\n                fileType,\n                fileName,\n                isAudio: fileType?.startsWith(\"audio/\") || false\n            }\n        });\n        console.log(\"[API][send] Mesaj oluşturuldu:\", message);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json(message);\n    } catch (error) {\n        console.error(\"[API][send] Mesaj g\\xf6nderme hatası:\", error);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            error: \"Mesaj g\\xf6nderilirken bir hata oluştu\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9tZXNzYWdlcy9zZW5kL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTJDO0FBQ2I7QUFDZTtBQUNKO0FBQ1Y7QUFFL0IsTUFBTUssYUFBYUMsUUFBUUMsR0FBRyxDQUFDRixVQUFVLElBQUk7QUFFdEMsZUFBZUcsS0FBS0MsT0FBZ0I7SUFDekMsSUFBSTtRQUNGLCtCQUErQjtRQUMvQixJQUFJQyxTQUF3QjtRQUM1QixNQUFNQyxhQUFhRixRQUFRRyxPQUFPLENBQUNDLEdBQUcsQ0FBQztRQUN2QyxJQUFJRixjQUFjQSxXQUFXRyxVQUFVLENBQUMsWUFBWTtZQUNsRCxNQUFNQyxRQUFRSixXQUFXSyxPQUFPLENBQUMsV0FBVztZQUM1QyxJQUFJO2dCQUNGLE1BQU1DLFVBQWViLDBEQUFVLENBQUNXLE9BQU9WO2dCQUN2Q0ssU0FBU08sUUFBUVAsTUFBTTtZQUN6QixFQUFFLE9BQU07Z0JBQ05TLFFBQVFDLEdBQUcsQ0FBQztnQkFDWixPQUFPcEIsa0ZBQVlBLENBQUNxQixJQUFJLENBQUM7b0JBQUVDLE9BQU87Z0JBQWlCLEdBQUc7b0JBQUVDLFFBQVE7Z0JBQUk7WUFDdEU7UUFDRjtRQUNBLCtDQUErQztRQUMvQyxJQUFJQyxVQUFVO1FBQ2QsSUFBSSxDQUFDZCxRQUFRO1lBQ1hjLFVBQVUsTUFBTXRCLDJEQUFnQkEsQ0FBQ0Msa0RBQVdBO1lBQzVDLElBQUksQ0FBQ3FCLFNBQVNDLE1BQU1DLElBQUk7Z0JBQ3RCUCxRQUFRQyxHQUFHLENBQUM7Z0JBQ1osT0FBT3BCLGtGQUFZQSxDQUFDcUIsSUFBSSxDQUN0QjtvQkFBRUMsT0FBTztnQkFBMkIsR0FDcEM7b0JBQUVDLFFBQVE7Z0JBQUk7WUFFbEI7WUFDQWIsU0FBU2MsUUFBUUMsSUFBSSxDQUFDQyxFQUFFO1FBQzFCO1FBQ0EsbUJBQW1CO1FBQ25CLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxPQUFPLEVBQUVDLE9BQU8sRUFBRUMsUUFBUSxFQUFFQyxRQUFRLEVBQUUsR0FDdEQsTUFBTXRCLFFBQVFZLElBQUk7UUFDcEJGLFFBQVFDLEdBQUcsQ0FBQyw2QkFBNkI7WUFDdkNWO1lBQ0FpQjtZQUNBQztZQUNBQztZQUNBQztZQUNBQztRQUNGO1FBQ0EsSUFBSSxDQUFDSixZQUFhLENBQUNDLFdBQVcsQ0FBQ0MsU0FBVTtZQUN2Q1YsUUFBUUMsR0FBRyxDQUFDLGdDQUFnQztnQkFDMUNPO2dCQUNBQztnQkFDQUM7WUFDRjtZQUNBLE9BQU83QixrRkFBWUEsQ0FBQ3FCLElBQUksQ0FDdEI7Z0JBQUVDLE9BQU87WUFBK0MsR0FDeEQ7Z0JBQUVDLFFBQVE7WUFBSTtRQUVsQjtRQUNBLGlDQUFpQztRQUNqQyxNQUFNUyxhQUFhLE1BQU0vQix1Q0FBRUEsQ0FBQ2dDLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDO1lBQzNDQyxPQUFPO2dCQUNMQyxJQUFJO29CQUNGO3dCQUFFMUIsUUFBUUE7d0JBQVFpQixVQUFVQTtvQkFBUztvQkFDckM7d0JBQUVqQixRQUFRaUI7d0JBQVVBLFVBQVVqQjtvQkFBTztpQkFDdEM7WUFDSDtRQUNGO1FBQ0EsSUFBSSxDQUFDc0IsWUFBWTtZQUNmYixRQUFRQyxHQUFHLENBQUMsK0JBQStCO2dCQUFFVjtnQkFBUWlCO1lBQVM7WUFDOUQsT0FBTzNCLGtGQUFZQSxDQUFDcUIsSUFBSSxDQUN0QjtnQkFBRUMsT0FBTztZQUE2QyxHQUN0RDtnQkFBRUMsUUFBUTtZQUFJO1FBRWxCO1FBQ0Esd0NBQXdDO1FBQ3hDLElBQUljLE9BQU8sTUFBTXBDLHVDQUFFQSxDQUFDb0MsSUFBSSxDQUFDSCxTQUFTLENBQUM7WUFDakNDLE9BQU87Z0JBQ0xHLE1BQU07Z0JBQ05DLGNBQWM7b0JBQ1pDLE9BQU87d0JBQ0xKLElBQUk7NEJBQUM7Z0NBQUUxQixRQUFRQTs0QkFBTzs0QkFBRztnQ0FBRUEsUUFBUWlCOzRCQUFTO3lCQUFFO29CQUNoRDtnQkFDRjtZQUNGO1FBQ0Y7UUFDQSxJQUFJLENBQUNVLE1BQU07WUFDVEEsT0FBTyxNQUFNcEMsdUNBQUVBLENBQUNvQyxJQUFJLENBQUNJLE1BQU0sQ0FBQztnQkFDMUJDLE1BQU07b0JBQ0pKLE1BQU07b0JBQ05DLGNBQWM7d0JBQ1pFLFFBQVE7NEJBQ047Z0NBQUVoQixNQUFNO29DQUFFa0IsU0FBUzt3Q0FBRWpCLElBQUloQjtvQ0FBTztnQ0FBRTs0QkFBRTs0QkFDcEM7Z0NBQUVlLE1BQU07b0NBQUVrQixTQUFTO3dDQUFFakIsSUFBSUM7b0NBQVM7Z0NBQUU7NEJBQUU7eUJBQ3ZDO29CQUNIO2dCQUNGO1lBQ0Y7UUFDRjtRQUNBLGlCQUFpQjtRQUNqQixNQUFNaUIsVUFBVSxNQUFNM0MsdUNBQUVBLENBQUMyQyxPQUFPLENBQUNILE1BQU0sQ0FBQztZQUN0Q0MsTUFBTTtnQkFDSkcsVUFBVW5DO2dCQUNWb0MsUUFBUVQsS0FBS1gsRUFBRTtnQkFDZkUsU0FBU0EsV0FBVztnQkFDcEJDO2dCQUNBQztnQkFDQUM7Z0JBQ0FnQixTQUFTakIsVUFBVWhCLFdBQVcsYUFBYTtZQUM3QztRQUNGO1FBQ0FLLFFBQVFDLEdBQUcsQ0FBQyxrQ0FBa0N3QjtRQUM5QyxPQUFPNUMsa0ZBQVlBLENBQUNxQixJQUFJLENBQUN1QjtJQUMzQixFQUFFLE9BQU90QixPQUFPO1FBQ2RILFFBQVFHLEtBQUssQ0FBQyx5Q0FBc0NBO1FBQ3BELE9BQU90QixrRkFBWUEsQ0FBQ3FCLElBQUksQ0FDdEI7WUFBRUMsT0FBTztRQUFzQyxHQUMvQztZQUFFQyxRQUFRO1FBQUk7SUFFbEI7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3Jhdm9jaGF0LWFwcC8uL3NyYy9hcHAvYXBpL21lc3NhZ2VzL3NlbmQvcm91dGUudHM/YzA1MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcbmltcG9ydCB7IGRiIH0gZnJvbSBcIkAvbGliL2RiXCI7XG5pbXBvcnQgeyBnZXRTZXJ2ZXJTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IHsgYXV0aE9wdGlvbnMgfSBmcm9tIFwiQC9saWIvYXV0aFwiO1xuaW1wb3J0IGp3dCBmcm9tIFwianNvbndlYnRva2VuXCI7XG5cbmNvbnN0IEpXVF9TRUNSRVQgPSBwcm9jZXNzLmVudi5KV1RfU0VDUkVUIHx8IFwic3VwZXJzZWNyZXRcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxdWVzdDogUmVxdWVzdCkge1xuICB0cnkge1xuICAgIC8vIEpXVCBpbGUgdXNlcklkIGJ1bG1heWEgw6dhbMSxxZ9cbiAgICBsZXQgdXNlcklkOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcbiAgICBjb25zdCBhdXRoSGVhZGVyID0gcmVxdWVzdC5oZWFkZXJzLmdldChcImF1dGhvcml6YXRpb25cIik7XG4gICAgaWYgKGF1dGhIZWFkZXIgJiYgYXV0aEhlYWRlci5zdGFydHNXaXRoKFwiQmVhcmVyIFwiKSkge1xuICAgICAgY29uc3QgdG9rZW4gPSBhdXRoSGVhZGVyLnJlcGxhY2UoXCJCZWFyZXIgXCIsIFwiXCIpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZGVjb2RlZDogYW55ID0gand0LnZlcmlmeSh0b2tlbiwgSldUX1NFQ1JFVCk7XG4gICAgICAgIHVzZXJJZCA9IGRlY29kZWQudXNlcklkO1xuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiW0FQSV1bc2VuZF0gSldUIHRva2VuIGRvxJ9ydWxhbWEgYmHFn2FyxLFzxLF6XCIpO1xuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogXCJHZcOnZXJzaXogdG9rZW5cIiB9LCB7IHN0YXR1czogNDAxIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBFxJ9lciBKV1QgeW9rc2EgTmV4dEF1dGggc2Vzc2lvbiBpbGUgZGV2YW0gZXRcbiAgICBsZXQgc2Vzc2lvbiA9IG51bGw7XG4gICAgaWYgKCF1c2VySWQpIHtcbiAgICAgIHNlc3Npb24gPSBhd2FpdCBnZXRTZXJ2ZXJTZXNzaW9uKGF1dGhPcHRpb25zKTtcbiAgICAgIGlmICghc2Vzc2lvbj8udXNlcj8uaWQpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJbQVBJXVtzZW5kXSBPdHVydW0geW9rLCB1c2VySWQgYnVsdW5hbWFkxLFcIik7XG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgICAgICB7IGVycm9yOiBcIk90dXJ1bSBhw6dtYW7EsXogZ2VyZWtpeW9yXCIgfSxcbiAgICAgICAgICB7IHN0YXR1czogNDAxIH1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHVzZXJJZCA9IHNlc3Npb24udXNlci5pZDtcbiAgICB9XG4gICAgLy8gUGFyYW1ldHJlbGVyaSBhbFxuICAgIGNvbnN0IHsgZnJpZW5kSWQsIGNvbnRlbnQsIGZpbGVVcmwsIGZpbGVUeXBlLCBmaWxlTmFtZSB9ID1cbiAgICAgIGF3YWl0IHJlcXVlc3QuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKFwiW0FQSV1bc2VuZF0gUGFyYW1ldHJlbGVyOlwiLCB7XG4gICAgICB1c2VySWQsXG4gICAgICBmcmllbmRJZCxcbiAgICAgIGNvbnRlbnQsXG4gICAgICBmaWxlVXJsLFxuICAgICAgZmlsZVR5cGUsXG4gICAgICBmaWxlTmFtZSxcbiAgICB9KTtcbiAgICBpZiAoIWZyaWVuZElkIHx8ICghY29udGVudCAmJiAhZmlsZVVybCkpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiW0FQSV1bc2VuZF0gRWtzaWsgcGFyYW1ldHJlIVwiLCB7XG4gICAgICAgIGZyaWVuZElkLFxuICAgICAgICBjb250ZW50LFxuICAgICAgICBmaWxlVXJsLFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICAgIHsgZXJyb3I6IFwiQWzEsWPEsSBJRCB2ZSBtZXNhaiBpw6dlcmnEn2kgdmV5YSBkb3N5YSBnZXJla2xpXCIgfSxcbiAgICAgICAgeyBzdGF0dXM6IDQwMCB9XG4gICAgICApO1xuICAgIH1cbiAgICAvLyBBcmthZGHFn2zEsWsgZHVydW11bnUga29udHJvbCBldFxuICAgIGNvbnN0IGZyaWVuZHNoaXAgPSBhd2FpdCBkYi5mcmllbmQuZmluZEZpcnN0KHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIE9SOiBbXG4gICAgICAgICAgeyB1c2VySWQ6IHVzZXJJZCwgZnJpZW5kSWQ6IGZyaWVuZElkIH0sXG4gICAgICAgICAgeyB1c2VySWQ6IGZyaWVuZElkLCBmcmllbmRJZDogdXNlcklkIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIH0pO1xuICAgIGlmICghZnJpZW5kc2hpcCkge1xuICAgICAgY29uc29sZS5sb2coXCJbQVBJXVtzZW5kXSBBcmthZGHFn2zEsWsgeW9rIVwiLCB7IHVzZXJJZCwgZnJpZW5kSWQgfSk7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICAgIHsgZXJyb3I6IFwiQnUga3VsbGFuxLFjxLF5YSBtZXNhaiBnw7ZuZGVybWUgeWV0a2luaXogeW9rXCIgfSxcbiAgICAgICAgeyBzdGF0dXM6IDQwMyB9XG4gICAgICApO1xuICAgIH1cbiAgICAvLyBDaGF0IHZhciBtxLEga29udHJvbCBldCwgeW9rc2Egb2x1xZ90dXJcbiAgICBsZXQgY2hhdCA9IGF3YWl0IGRiLmNoYXQuZmluZEZpcnN0KHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIHR5cGU6IFwicHJpdmF0ZVwiLFxuICAgICAgICBwYXJ0aWNpcGFudHM6IHtcbiAgICAgICAgICBldmVyeToge1xuICAgICAgICAgICAgT1I6IFt7IHVzZXJJZDogdXNlcklkIH0sIHsgdXNlcklkOiBmcmllbmRJZCB9XSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KTtcbiAgICBpZiAoIWNoYXQpIHtcbiAgICAgIGNoYXQgPSBhd2FpdCBkYi5jaGF0LmNyZWF0ZSh7XG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICB0eXBlOiBcInByaXZhdGVcIixcbiAgICAgICAgICBwYXJ0aWNpcGFudHM6IHtcbiAgICAgICAgICAgIGNyZWF0ZTogW1xuICAgICAgICAgICAgICB7IHVzZXI6IHsgY29ubmVjdDogeyBpZDogdXNlcklkIH0gfSB9LFxuICAgICAgICAgICAgICB7IHVzZXI6IHsgY29ubmVjdDogeyBpZDogZnJpZW5kSWQgfSB9IH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9XG4gICAgLy8gTWVzYWrEsSBvbHXFn3R1clxuICAgIGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCBkYi5tZXNzYWdlLmNyZWF0ZSh7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIHNlbmRlcklkOiB1c2VySWQsXG4gICAgICAgIGNoYXRJZDogY2hhdC5pZCxcbiAgICAgICAgY29udGVudDogY29udGVudCB8fCBcIlwiLFxuICAgICAgICBmaWxlVXJsLFxuICAgICAgICBmaWxlVHlwZSxcbiAgICAgICAgZmlsZU5hbWUsXG4gICAgICAgIGlzQXVkaW86IGZpbGVUeXBlPy5zdGFydHNXaXRoKFwiYXVkaW8vXCIpIHx8IGZhbHNlLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhcIltBUEldW3NlbmRdIE1lc2FqIG9sdcWfdHVydWxkdTpcIiwgbWVzc2FnZSk7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKG1lc3NhZ2UpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJbQVBJXVtzZW5kXSBNZXNhaiBnw7ZuZGVybWUgaGF0YXPEsTpcIiwgZXJyb3IpO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgIHsgZXJyb3I6IFwiTWVzYWogZ8O2bmRlcmlsaXJrZW4gYmlyIGhhdGEgb2x1xZ90dVwiIH0sXG4gICAgICB7IHN0YXR1czogNTAwIH1cbiAgICApO1xuICB9XG59XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiZGIiLCJnZXRTZXJ2ZXJTZXNzaW9uIiwiYXV0aE9wdGlvbnMiLCJqd3QiLCJKV1RfU0VDUkVUIiwicHJvY2VzcyIsImVudiIsIlBPU1QiLCJyZXF1ZXN0IiwidXNlcklkIiwiYXV0aEhlYWRlciIsImhlYWRlcnMiLCJnZXQiLCJzdGFydHNXaXRoIiwidG9rZW4iLCJyZXBsYWNlIiwiZGVjb2RlZCIsInZlcmlmeSIsImNvbnNvbGUiLCJsb2ciLCJqc29uIiwiZXJyb3IiLCJzdGF0dXMiLCJzZXNzaW9uIiwidXNlciIsImlkIiwiZnJpZW5kSWQiLCJjb250ZW50IiwiZmlsZVVybCIsImZpbGVUeXBlIiwiZmlsZU5hbWUiLCJmcmllbmRzaGlwIiwiZnJpZW5kIiwiZmluZEZpcnN0Iiwid2hlcmUiLCJPUiIsImNoYXQiLCJ0eXBlIiwicGFydGljaXBhbnRzIiwiZXZlcnkiLCJjcmVhdGUiLCJkYXRhIiwiY29ubmVjdCIsIm1lc3NhZ2UiLCJzZW5kZXJJZCIsImNoYXRJZCIsImlzQXVkaW8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/messages/send/route.ts\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/ms","vendor-chunks/next-auth","vendor-chunks/semver","vendor-chunks/@babel","vendor-chunks/jsonwebtoken","vendor-chunks/lodash.includes","vendor-chunks/jws","vendor-chunks/jwa","vendor-chunks/lodash.once","vendor-chunks/lodash.isinteger","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/lodash.isplainobject","vendor-chunks/lodash.isstring","vendor-chunks/lodash.isnumber","vendor-chunks/lodash.isboolean","vendor-chunks/safe-buffer","vendor-chunks/buffer-equal-constant-time","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/oauth","vendor-chunks/preact","vendor-chunks/preact-render-to-string","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fmessages%2Fsend%2Froute&page=%2Fapi%2Fmessages%2Fsend%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmessages%2Fsend%2Froute.ts&appDir=C%3A%5CUsers%5CYunus%5CDesktop%5Cravochat-app%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CYunus%5CDesktop%5Cravochat-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();