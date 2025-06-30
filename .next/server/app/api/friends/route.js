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
exports.id = "app/api/friends/route";
exports.ids = ["app/api/friends/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ffriends%2Froute&page=%2Fapi%2Ffriends%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ffriends%2Froute.ts&appDir=C%3A%5CUsers%5CYunus%5CDesktop%5Cravochat-app%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CYunus%5CDesktop%5Cravochat-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ffriends%2Froute&page=%2Fapi%2Ffriends%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ffriends%2Froute.ts&appDir=C%3A%5CUsers%5CYunus%5CDesktop%5Cravochat-app%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CYunus%5CDesktop%5Cravochat-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Yunus_Desktop_ravochat_app_src_app_api_friends_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/friends/route.ts */ \"(rsc)/./src/app/api/friends/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/friends/route\",\n        pathname: \"/api/friends\",\n        filename: \"route\",\n        bundlePath: \"app/api/friends/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Yunus\\\\Desktop\\\\ravochat-app\\\\src\\\\app\\\\api\\\\friends\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_Yunus_Desktop_ravochat_app_src_app_api_friends_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/friends/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZmcmllbmRzJTJGcm91dGUmcGFnZT0lMkZhcGklMkZmcmllbmRzJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGZnJpZW5kcyUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNZdW51cyU1Q0Rlc2t0b3AlNUNyYXZvY2hhdC1hcHAlNUNzcmMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q1l1bnVzJTVDRGVza3RvcCU1Q3Jhdm9jaGF0LWFwcCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUN5QjtBQUN0RztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVHQUF1RztBQUMvRztBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzZKOztBQUU3SiIsInNvdXJjZXMiOlsid2VicGFjazovL3Jhdm9jaGF0LWFwcC8/MGM3ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxZdW51c1xcXFxEZXNrdG9wXFxcXHJhdm9jaGF0LWFwcFxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxmcmllbmRzXFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9mcmllbmRzL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvZnJpZW5kc1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvZnJpZW5kcy9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFVzZXJzXFxcXFl1bnVzXFxcXERlc2t0b3BcXFxccmF2b2NoYXQtYXBwXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGZyaWVuZHNcXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0IH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvZnJpZW5kcy9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ffriends%2Froute&page=%2Fapi%2Ffriends%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ffriends%2Froute.ts&appDir=C%3A%5CUsers%5CYunus%5CDesktop%5Cravochat-app%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CYunus%5CDesktop%5Cravochat-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/friends/route.ts":
/*!**************************************!*\
  !*** ./src/app/api/friends/route.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/db */ \"(rsc)/./src/lib/db.ts\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./src/lib/auth.ts\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jsonwebtoken */ \"(rsc)/./node_modules/jsonwebtoken/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst JWT_SECRET = process.env.JWT_SECRET || \"supersecret\";\nasync function GET(request) {\n    try {\n        // Önce NextAuth session kontrolü\n        let userId = null;\n        const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_2__.getServerSession)(_lib_auth__WEBPACK_IMPORTED_MODULE_3__.authOptions);\n        if (session?.user?.id) {\n            userId = session.user.id;\n        } else {\n            // JWT ile kontrol\n            const authHeader = request.headers.get(\"authorization\");\n            if (authHeader && authHeader.startsWith(\"Bearer \")) {\n                const token = authHeader.replace(\"Bearer \", \"\");\n                try {\n                    const decoded = jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default().verify(token, JWT_SECRET);\n                    userId = decoded.userId;\n                } catch (e) {\n                    return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                        error: \"Ge\\xe7ersiz token\"\n                    }, {\n                        status: 401\n                    });\n                }\n            }\n        }\n        if (!userId) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                error: \"Oturum a\\xe7manız gerekiyor\"\n            }, {\n                status: 401\n            });\n        }\n        // Arkadaşları getir\n        const friends = await _lib_db__WEBPACK_IMPORTED_MODULE_1__.db.friend.findMany({\n            where: {\n                OR: [\n                    {\n                        userId: userId\n                    },\n                    {\n                        friendId: userId\n                    }\n                ]\n            },\n            include: {\n                friend: true,\n                user: true\n            }\n        });\n        // Arkadaş listesini düzenle ve tekrar eden kayıtları engelle\n        const uniqueFriends = new Map();\n        friends.forEach((friendship)=>{\n            const isFriend = friendship.userId === userId;\n            const otherUser = isFriend ? friendship.friend : friendship.user;\n            if (!uniqueFriends.has(otherUser.id)) {\n                uniqueFriends.set(otherUser.id, {\n                    id: otherUser.id,\n                    name: otherUser.name,\n                    email: otherUser.email,\n                    isOnline: otherUser.isOnline || false\n                });\n            }\n        });\n        const formattedFriends = Array.from(uniqueFriends.values());\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json(formattedFriends);\n    } catch (error) {\n        console.error(\"Arkadaş listesi getirme hatası:\", error);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            error: \"Arkadaş listesi alınırken bir hata oluştu\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9mcmllbmRzL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTJDO0FBQ2I7QUFDZTtBQUNKO0FBQ1Y7QUFFL0IsTUFBTUssYUFBYUMsUUFBUUMsR0FBRyxDQUFDRixVQUFVLElBQUk7QUFFdEMsZUFBZUcsSUFBSUMsT0FBZ0I7SUFDeEMsSUFBSTtRQUNGLGlDQUFpQztRQUNqQyxJQUFJQyxTQUF3QjtRQUM1QixNQUFNQyxVQUFVLE1BQU1ULDJEQUFnQkEsQ0FBQ0Msa0RBQVdBO1FBQ2xELElBQUlRLFNBQVNDLE1BQU1DLElBQUk7WUFDckJILFNBQVNDLFFBQVFDLElBQUksQ0FBQ0MsRUFBRTtRQUMxQixPQUFPO1lBQ0wsa0JBQWtCO1lBQ2xCLE1BQU1DLGFBQWFMLFFBQVFNLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDO1lBQ3ZDLElBQUlGLGNBQWNBLFdBQVdHLFVBQVUsQ0FBQyxZQUFZO2dCQUNsRCxNQUFNQyxRQUFRSixXQUFXSyxPQUFPLENBQUMsV0FBVztnQkFDNUMsSUFBSTtvQkFDRixNQUFNQyxVQUFlaEIsMERBQVUsQ0FBQ2MsT0FBT2I7b0JBQ3ZDSyxTQUFTVSxRQUFRVixNQUFNO2dCQUN6QixFQUFFLE9BQU9ZLEdBQUc7b0JBQ1YsT0FBT3RCLGtGQUFZQSxDQUFDdUIsSUFBSSxDQUN0Qjt3QkFBRUMsT0FBTztvQkFBaUIsR0FDMUI7d0JBQUVDLFFBQVE7b0JBQUk7Z0JBRWxCO1lBQ0Y7UUFDRjtRQUNBLElBQUksQ0FBQ2YsUUFBUTtZQUNYLE9BQU9WLGtGQUFZQSxDQUFDdUIsSUFBSSxDQUN0QjtnQkFBRUMsT0FBTztZQUEyQixHQUNwQztnQkFBRUMsUUFBUTtZQUFJO1FBRWxCO1FBQ0Esb0JBQW9CO1FBQ3BCLE1BQU1DLFVBQVUsTUFBTXpCLHVDQUFFQSxDQUFDMEIsTUFBTSxDQUFDQyxRQUFRLENBQUM7WUFDdkNDLE9BQU87Z0JBQ0xDLElBQUk7b0JBQUM7d0JBQUVwQixRQUFRQTtvQkFBTztvQkFBRzt3QkFBRXFCLFVBQVVyQjtvQkFBTztpQkFBRTtZQUNoRDtZQUNBc0IsU0FBUztnQkFDUEwsUUFBUTtnQkFDUmYsTUFBTTtZQUNSO1FBQ0Y7UUFDQSw2REFBNkQ7UUFDN0QsTUFBTXFCLGdCQUFnQixJQUFJQztRQUMxQlIsUUFBUVMsT0FBTyxDQUFDLENBQUNDO1lBQ2YsTUFBTUMsV0FBV0QsV0FBVzFCLE1BQU0sS0FBS0E7WUFDdkMsTUFBTTRCLFlBQVlELFdBQVdELFdBQVdULE1BQU0sR0FBR1MsV0FBV3hCLElBQUk7WUFDaEUsSUFBSSxDQUFDcUIsY0FBY00sR0FBRyxDQUFDRCxVQUFVekIsRUFBRSxHQUFHO2dCQUNwQ29CLGNBQWNPLEdBQUcsQ0FBQ0YsVUFBVXpCLEVBQUUsRUFBRTtvQkFDOUJBLElBQUl5QixVQUFVekIsRUFBRTtvQkFDaEI0QixNQUFNSCxVQUFVRyxJQUFJO29CQUNwQkMsT0FBT0osVUFBVUksS0FBSztvQkFDdEJDLFVBQVVMLFVBQVVLLFFBQVEsSUFBSTtnQkFDbEM7WUFDRjtRQUNGO1FBQ0EsTUFBTUMsbUJBQW1CQyxNQUFNQyxJQUFJLENBQUNiLGNBQWNjLE1BQU07UUFDeEQsT0FBTy9DLGtGQUFZQSxDQUFDdUIsSUFBSSxDQUFDcUI7SUFDM0IsRUFBRSxPQUFPcEIsT0FBTztRQUNkd0IsUUFBUXhCLEtBQUssQ0FBQyxtQ0FBbUNBO1FBQ2pELE9BQU94QixrRkFBWUEsQ0FBQ3VCLElBQUksQ0FDdEI7WUFBRUMsT0FBTztRQUE0QyxHQUNyRDtZQUFFQyxRQUFRO1FBQUk7SUFFbEI7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3Jhdm9jaGF0LWFwcC8uL3NyYy9hcHAvYXBpL2ZyaWVuZHMvcm91dGUudHM/Nzg0YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcbmltcG9ydCB7IGRiIH0gZnJvbSBcIkAvbGliL2RiXCI7XG5pbXBvcnQgeyBnZXRTZXJ2ZXJTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IHsgYXV0aE9wdGlvbnMgfSBmcm9tIFwiQC9saWIvYXV0aFwiO1xuaW1wb3J0IGp3dCBmcm9tIFwianNvbndlYnRva2VuXCI7XG5cbmNvbnN0IEpXVF9TRUNSRVQgPSBwcm9jZXNzLmVudi5KV1RfU0VDUkVUIHx8IFwic3VwZXJzZWNyZXRcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVChyZXF1ZXN0OiBSZXF1ZXN0KSB7XG4gIHRyeSB7XG4gICAgLy8gw5ZuY2UgTmV4dEF1dGggc2Vzc2lvbiBrb250cm9sw7xcbiAgICBsZXQgdXNlcklkOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihhdXRoT3B0aW9ucyk7XG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LmlkKSB7XG4gICAgICB1c2VySWQgPSBzZXNzaW9uLnVzZXIuaWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEpXVCBpbGUga29udHJvbFxuICAgICAgY29uc3QgYXV0aEhlYWRlciA9IHJlcXVlc3QuaGVhZGVycy5nZXQoXCJhdXRob3JpemF0aW9uXCIpO1xuICAgICAgaWYgKGF1dGhIZWFkZXIgJiYgYXV0aEhlYWRlci5zdGFydHNXaXRoKFwiQmVhcmVyIFwiKSkge1xuICAgICAgICBjb25zdCB0b2tlbiA9IGF1dGhIZWFkZXIucmVwbGFjZShcIkJlYXJlciBcIiwgXCJcIik7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgZGVjb2RlZDogYW55ID0gand0LnZlcmlmeSh0b2tlbiwgSldUX1NFQ1JFVCk7XG4gICAgICAgICAgdXNlcklkID0gZGVjb2RlZC51c2VySWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICAgICAgICB7IGVycm9yOiBcIkdlw6dlcnNpeiB0b2tlblwiIH0sXG4gICAgICAgICAgICB7IHN0YXR1czogNDAxIH1cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghdXNlcklkKSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICAgIHsgZXJyb3I6IFwiT3R1cnVtIGHDp21hbsSxeiBnZXJla2l5b3JcIiB9LFxuICAgICAgICB7IHN0YXR1czogNDAxIH1cbiAgICAgICk7XG4gICAgfVxuICAgIC8vIEFya2FkYcWfbGFyxLEgZ2V0aXJcbiAgICBjb25zdCBmcmllbmRzID0gYXdhaXQgZGIuZnJpZW5kLmZpbmRNYW55KHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIE9SOiBbeyB1c2VySWQ6IHVzZXJJZCB9LCB7IGZyaWVuZElkOiB1c2VySWQgfV0sXG4gICAgICB9LFxuICAgICAgaW5jbHVkZToge1xuICAgICAgICBmcmllbmQ6IHRydWUsXG4gICAgICAgIHVzZXI6IHRydWUsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIC8vIEFya2FkYcWfIGxpc3Rlc2luaSBkw7x6ZW5sZSB2ZSB0ZWtyYXIgZWRlbiBrYXnEsXRsYXLEsSBlbmdlbGxlXG4gICAgY29uc3QgdW5pcXVlRnJpZW5kcyA9IG5ldyBNYXAoKTtcbiAgICBmcmllbmRzLmZvckVhY2goKGZyaWVuZHNoaXApID0+IHtcbiAgICAgIGNvbnN0IGlzRnJpZW5kID0gZnJpZW5kc2hpcC51c2VySWQgPT09IHVzZXJJZDtcbiAgICAgIGNvbnN0IG90aGVyVXNlciA9IGlzRnJpZW5kID8gZnJpZW5kc2hpcC5mcmllbmQgOiBmcmllbmRzaGlwLnVzZXI7XG4gICAgICBpZiAoIXVuaXF1ZUZyaWVuZHMuaGFzKG90aGVyVXNlci5pZCkpIHtcbiAgICAgICAgdW5pcXVlRnJpZW5kcy5zZXQob3RoZXJVc2VyLmlkLCB7XG4gICAgICAgICAgaWQ6IG90aGVyVXNlci5pZCxcbiAgICAgICAgICBuYW1lOiBvdGhlclVzZXIubmFtZSxcbiAgICAgICAgICBlbWFpbDogb3RoZXJVc2VyLmVtYWlsLFxuICAgICAgICAgIGlzT25saW5lOiBvdGhlclVzZXIuaXNPbmxpbmUgfHwgZmFsc2UsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IGZvcm1hdHRlZEZyaWVuZHMgPSBBcnJheS5mcm9tKHVuaXF1ZUZyaWVuZHMudmFsdWVzKCkpO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihmb3JtYXR0ZWRGcmllbmRzKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiQXJrYWRhxZ8gbGlzdGVzaSBnZXRpcm1lIGhhdGFzxLE6XCIsIGVycm9yKTtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICB7IGVycm9yOiBcIkFya2FkYcWfIGxpc3Rlc2kgYWzEsW7EsXJrZW4gYmlyIGhhdGEgb2x1xZ90dVwiIH0sXG4gICAgICB7IHN0YXR1czogNTAwIH1cbiAgICApO1xuICB9XG59XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiZGIiLCJnZXRTZXJ2ZXJTZXNzaW9uIiwiYXV0aE9wdGlvbnMiLCJqd3QiLCJKV1RfU0VDUkVUIiwicHJvY2VzcyIsImVudiIsIkdFVCIsInJlcXVlc3QiLCJ1c2VySWQiLCJzZXNzaW9uIiwidXNlciIsImlkIiwiYXV0aEhlYWRlciIsImhlYWRlcnMiLCJnZXQiLCJzdGFydHNXaXRoIiwidG9rZW4iLCJyZXBsYWNlIiwiZGVjb2RlZCIsInZlcmlmeSIsImUiLCJqc29uIiwiZXJyb3IiLCJzdGF0dXMiLCJmcmllbmRzIiwiZnJpZW5kIiwiZmluZE1hbnkiLCJ3aGVyZSIsIk9SIiwiZnJpZW5kSWQiLCJpbmNsdWRlIiwidW5pcXVlRnJpZW5kcyIsIk1hcCIsImZvckVhY2giLCJmcmllbmRzaGlwIiwiaXNGcmllbmQiLCJvdGhlclVzZXIiLCJoYXMiLCJzZXQiLCJuYW1lIiwiZW1haWwiLCJpc09ubGluZSIsImZvcm1hdHRlZEZyaWVuZHMiLCJBcnJheSIsImZyb20iLCJ2YWx1ZXMiLCJjb25zb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/friends/route.ts\n");

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/ms","vendor-chunks/next-auth","vendor-chunks/semver","vendor-chunks/@babel","vendor-chunks/jsonwebtoken","vendor-chunks/lodash.includes","vendor-chunks/jws","vendor-chunks/jwa","vendor-chunks/lodash.once","vendor-chunks/lodash.isinteger","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/lodash.isplainobject","vendor-chunks/lodash.isstring","vendor-chunks/lodash.isnumber","vendor-chunks/lodash.isboolean","vendor-chunks/safe-buffer","vendor-chunks/buffer-equal-constant-time","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/oauth","vendor-chunks/preact","vendor-chunks/preact-render-to-string","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ffriends%2Froute&page=%2Fapi%2Ffriends%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ffriends%2Froute.ts&appDir=C%3A%5CUsers%5CYunus%5CDesktop%5Cravochat-app%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CYunus%5CDesktop%5Cravochat-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();