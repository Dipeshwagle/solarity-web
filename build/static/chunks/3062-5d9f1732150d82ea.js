(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[3062],{

/***/ 978:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useWalletNfts = void 0;
var react_1 = __webpack_require__(7294);
var sol_rayz_1 = __webpack_require__(5902);
/**
 * This hook is wrapper over `getParsedNftAccountsByOwner`
 * it fetches NFT list when wallet public address changes
 * and returns possible states: error, isLoading or list of NFT
 */
var useWalletNfts = function (_a) {
    var publicAddress = _a.publicAddress, rest = __rest(_a, ["publicAddress"]);
    var _b = (0, react_1.useState)([]), nfts = _b[0], setNfts = _b[1];
    var _c = (0, react_1.useState)(), error = _c[0], setError = _c[1];
    var _d = (0, react_1.useState)(false), isLoading = _d[0], setIsLoading = _d[1];
    (0, react_1.useEffect)(function () {
        fetchNftAccounts();
    }, [publicAddress]);
    var fetchNftAccounts = function () { return __awaiter(void 0, void 0, void 0, function () {
        var isValidAddress, nfts_1, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    isValidAddress = (0, sol_rayz_1.isValidSolanaAddress)(publicAddress);
                    if (!isValidAddress) {
                        setNfts([]);
                        setError(new Error("Invalid address: " + publicAddress));
                        return [2 /*return*/];
                    }
                    setIsLoading(true);
                    setError(undefined);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, (0, sol_rayz_1.getParsedNftAccountsByOwner)(__assign({ publicAddress: publicAddress }, rest))];
                case 2:
                    nfts_1 = _a.sent();
                    setNfts(nfts_1);
                    return [3 /*break*/, 5];
                case 3:
                    error_1 = _a.sent();
                    console.log("Error ocurred while Solana NFT list fetched:", error_1.message);
                    setNfts([]);
                    setError(error_1);
                    return [3 /*break*/, 5];
                case 4:
                    setIsLoading(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    return {
        nfts: nfts,
        error: error,
        isLoading: isLoading,
    };
};
exports.useWalletNfts = useWalletNfts;
//# sourceMappingURL=useWalletNfts.js.map

/***/ }),

/***/ 7452:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
exports.R = void 0;
var useWalletNfts_1 = __webpack_require__(978);
Object.defineProperty(exports, "R", ({ enumerable: true, get: function () { return useWalletNfts_1.useWalletNfts; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 937:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.extendBorsh = void 0;
var web3_js_1 = __webpack_require__(8155);
var borsh_1 = __webpack_require__(5120);
var extendBorsh = function () {
    borsh_1.BinaryReader.prototype.readPubkey = function () {
        var reader = this;
        var array = reader.readFixedArray(32);
        return new web3_js_1.PublicKey(array);
    };
    borsh_1.BinaryWriter.prototype.writePubkey = function (value) {
        var writer = this;
        writer.writeFixedArray(value.toBuffer());
    };
};
exports.extendBorsh = extendBorsh;
(0, exports.extendBorsh)();
//# sourceMappingURL=borsh.js.map

/***/ }),

/***/ 4996:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Metadata = exports.METADATA_PROGRAM = exports.METADATA_PREFIX = exports.METADATA_SCHEMA = exports.Data = exports.Creator = exports.MetadataKey = void 0;
var METADATA_PREFIX = "metadata";
exports.METADATA_PREFIX = METADATA_PREFIX;
var METADATA_PROGRAM = "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s";
exports.METADATA_PROGRAM = METADATA_PROGRAM;
var MetadataKey;
(function (MetadataKey) {
    MetadataKey[MetadataKey["Uninitialized"] = 0] = "Uninitialized";
    MetadataKey[MetadataKey["MetadataV1"] = 4] = "MetadataV1";
    MetadataKey[MetadataKey["EditionV1"] = 1] = "EditionV1";
    MetadataKey[MetadataKey["MasterEditionV1"] = 2] = "MasterEditionV1";
    MetadataKey[MetadataKey["MasterEditionV2"] = 6] = "MasterEditionV2";
    MetadataKey[MetadataKey["EditionMarker"] = 7] = "EditionMarker";
})(MetadataKey = exports.MetadataKey || (exports.MetadataKey = {}));
var Creator = /** @class */ (function () {
    function Creator(args) {
        this.address = args.address;
        this.verified = args.verified;
        this.share = args.share;
    }
    return Creator;
}());
exports.Creator = Creator;
var Metadata = /** @class */ (function () {
    function Metadata(args) {
        var _a;
        this.key = MetadataKey.MetadataV1;
        this.updateAuthority = args.updateAuthority;
        this.mint = args.mint;
        this.data = args.data;
        this.primarySaleHappened = args.primarySaleHappened;
        this.isMutable = args.isMutable;
        this.editionNonce = (_a = args.editionNonce) !== null && _a !== void 0 ? _a : null;
    }
    return Metadata;
}());
exports.Metadata = Metadata;
var Data = /** @class */ (function () {
    function Data(args) {
        this.name = args.name;
        this.symbol = args.symbol;
        this.uri = args.uri;
        this.sellerFeeBasisPoints = args.sellerFeeBasisPoints;
        this.creators = args.creators;
    }
    return Data;
}());
exports.Data = Data;
var METADATA_SCHEMA = new Map([
    [
        Data,
        {
            kind: "struct",
            fields: [
                ["name", "string"],
                ["symbol", "string"],
                ["uri", "string"],
                ["sellerFeeBasisPoints", "u16"],
                ["creators", { kind: "option", type: [Creator] }],
            ],
        },
    ],
    [
        Metadata,
        {
            kind: "struct",
            fields: [
                ["key", "u8"],
                ["updateAuthority", "pubkey"],
                ["mint", "pubkey"],
                ["data", Data],
                ["primarySaleHappened", "u8"],
                ["isMutable", "u8"], // bool
            ],
        },
    ],
    [
        Creator,
        {
            kind: "struct",
            fields: [
                ["address", "pubkey"],
                ["verified", "u8"],
                ["share", "u8"],
            ],
        },
    ],
]);
exports.METADATA_SCHEMA = METADATA_SCHEMA;
//# sourceMappingURL=metaplex.js.map

/***/ }),

/***/ 2689:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TOKEN_PROGRAM = void 0;
exports.TOKEN_PROGRAM = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
//# sourceMappingURL=solana.js.map

/***/ }),

/***/ 9303:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getParsedAccountByMint = void 0;
var web3_js_1 = __webpack_require__(8155);
var solana_1 = __webpack_require__(2689);
var utils_1 = __webpack_require__(7655);
function isParsedAccountData(obj) {
    return (obj === null || obj === void 0 ? void 0 : obj.parsed) !== undefined;
}
/**
 * This fn look for the account associated with passed NFT token mint field.
 * This associated account holds some useful information like who is current owner of token.
 * it is stored within result.account.data.parsed.info.owner
 * Finding the token owner is main purpose of using this fn.
 */
var getParsedAccountByMint = function (_a) {
    var mintAddress = _a.mintAddress, _b = _a.connection, connection = _b === void 0 ? (0, utils_1.createConnectionConfig)() : _b, _c = _a.stringifyPubKeys, stringifyPubKeys = _c === void 0 ? true : _c;
    return __awaiter(void 0, void 0, void 0, function () {
        var res, positiveAmountResult, formatedData;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0: return [4 /*yield*/, connection.getParsedProgramAccounts(new web3_js_1.PublicKey(solana_1.TOKEN_PROGRAM), {
                        filters: [
                            { dataSize: 165 },
                            {
                                memcmp: {
                                    offset: 0,
                                    bytes: mintAddress,
                                },
                            },
                        ],
                    })];
                case 1:
                    res = _d.sent();
                    if (!(res === null || res === void 0 ? void 0 : res.length)) {
                        return [2 /*return*/, undefined];
                    }
                    positiveAmountResult = res === null || res === void 0 ? void 0 : res.find(function (_a) {
                        var _b, _c, _d;
                        var account = _a.account;
                        var data = account.data;
                        if (isParsedAccountData(data)) {
                            var amount = +((_d = (_c = (_b = data === null || data === void 0 ? void 0 : data.parsed) === null || _b === void 0 ? void 0 : _b.info) === null || _c === void 0 ? void 0 : _c.tokenAmount) === null || _d === void 0 ? void 0 : _d.amount);
                            return amount;
                        }
                        return false;
                    });
                    formatedData = stringifyPubKeys
                        ? publicKeyToString(positiveAmountResult)
                        : positiveAmountResult;
                    return [2 /*return*/, formatedData];
            }
        });
    });
};
exports.getParsedAccountByMint = getParsedAccountByMint;
var publicKeyToString = function (tokenData) {
    var _a, _b, _c, _d;
    return (__assign(__assign({}, tokenData), { account: __assign(__assign({}, tokenData === null || tokenData === void 0 ? void 0 : tokenData.account), { owner: (_b = (_a = new web3_js_1.PublicKey(tokenData === null || tokenData === void 0 ? void 0 : tokenData.account.owner)) === null || _a === void 0 ? void 0 : _a.toString) === null || _b === void 0 ? void 0 : _b.call(_a) }), pubkey: (_d = (_c = new web3_js_1.PublicKey(tokenData === null || tokenData === void 0 ? void 0 : tokenData.pubkey)) === null || _c === void 0 ? void 0 : _c.toString) === null || _d === void 0 ? void 0 : _d.call(_c) }));
};
//# sourceMappingURL=getParsedAccountByMint.js.map

/***/ }),

/***/ 504:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.sanitizeMetaStrings = exports.getParsedNftAccountsByOwner = void 0;
var web3_js_1 = __webpack_require__(8155);
var lodash_chunk_1 = __importDefault(__webpack_require__(2658));
var lodash_orderby_1 = __importDefault(__webpack_require__(5316));
var utils_1 = __webpack_require__(7655);
var solana_1 = __webpack_require__(2689);
var sortKeys;
(function (sortKeys) {
    sortKeys["updateAuthority"] = "updateAuthority";
})(sortKeys || (sortKeys = {}));
var getParsedNftAccountsByOwner = function (_a) {
    var publicAddress = _a.publicAddress, _b = _a.connection, connection = _b === void 0 ? (0, utils_1.createConnectionConfig)() : _b, _c = _a.sanitize, sanitize = _c === void 0 ? true : _c, _d = _a.strictNftStandard, strictNftStandard = _d === void 0 ? false : _d, _e = _a.stringifyPubKeys, stringifyPubKeys = _e === void 0 ? true : _e, _f = _a.sort, sort = _f === void 0 ? true : _f;
    return __awaiter(void 0, void 0, void 0, function () {
        var isValidAddress, splAccounts, nftAccounts, acountsMetaAddressPromises, acountsMetaAddress, accountsRawMetaResponse, accountsRawMeta, accountsDecodedMeta, accountsFiltered, accountsSorted;
        return __generator(this, function (_g) {
            switch (_g.label) {
                case 0:
                    isValidAddress = (0, utils_1.isValidSolanaAddress)(publicAddress);
                    if (!isValidAddress) {
                        return [2 /*return*/, []];
                    }
                    return [4 /*yield*/, connection.getParsedTokenAccountsByOwner(new web3_js_1.PublicKey(publicAddress), {
                            programId: new web3_js_1.PublicKey(solana_1.TOKEN_PROGRAM),
                        })];
                case 1:
                    splAccounts = (_g.sent()).value;
                    nftAccounts = splAccounts.filter(function (_a) {
                        var _b, _c, _d, _e, _f, _g, _h, _j;
                        var account = _a.account;
                        var amount = (_e = (_d = (_c = (_b = account === null || account === void 0 ? void 0 : account.data) === null || _b === void 0 ? void 0 : _b.parsed) === null || _c === void 0 ? void 0 : _c.info) === null || _d === void 0 ? void 0 : _d.tokenAmount) === null || _e === void 0 ? void 0 : _e.uiAmount;
                        var decimals = (_j = (_h = (_g = (_f = account === null || account === void 0 ? void 0 : account.data) === null || _f === void 0 ? void 0 : _f.parsed) === null || _g === void 0 ? void 0 : _g.info) === null || _h === void 0 ? void 0 : _h.tokenAmount) === null || _j === void 0 ? void 0 : _j.decimals;
                        if (strictNftStandard) {
                            // Here is correct way to do it. it is described by Solana
                            // faster way, will filter out most unrelivant SPL-tokens
                            return decimals === 0 && amount >= 1;
                        }
                        // Weak method to find NFT tokens
                        // some older NFTs can be found only this way, like Solarians e.g.
                        return amount > 0;
                    });
                    return [4 /*yield*/, Promise.allSettled(nftAccounts.map(function (_a) {
                            var _b, _c, _d;
                            var account = _a.account;
                            var address = (_d = (_c = (_b = account === null || account === void 0 ? void 0 : account.data) === null || _b === void 0 ? void 0 : _b.parsed) === null || _c === void 0 ? void 0 : _c.info) === null || _d === void 0 ? void 0 : _d.mint;
                            return address ? (0, utils_1.getSolanaMetadataAddress)(new web3_js_1.PublicKey(address)) : null;
                        }))];
                case 2:
                    acountsMetaAddressPromises = _g.sent();
                    acountsMetaAddress = acountsMetaAddressPromises
                        .filter(onlySuccessfullPromises)
                        .map(function (p) { return p.value; });
                    return [4 /*yield*/, Promise.allSettled((0, lodash_chunk_1.default)(acountsMetaAddress, 99).map(function (chunk) { return __awaiter(void 0, void 0, void 0, function () {
                            var err_1;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 2, , 3]);
                                        return [4 /*yield*/, connection.getMultipleAccountsInfo(chunk)];
                                    case 1: return [2 /*return*/, _a.sent()];
                                    case 2:
                                        err_1 = _a.sent();
                                        console.log(err_1); // eslint-disable-line
                                        return [2 /*return*/, false];
                                    case 3: return [2 /*return*/];
                                }
                            });
                        }); }))];
                case 3:
                    accountsRawMetaResponse = _g.sent();
                    accountsRawMeta = accountsRawMetaResponse
                        .filter(function (_a) {
                        var status = _a.status;
                        return status === "fulfilled";
                    })
                        .flatMap(function (p) { return p.value; });
                    return [4 /*yield*/, Promise.allSettled(accountsRawMeta.map(function (accountInfo) { var _a; return (0, utils_1.decodeTokenMetadata)((_a = accountInfo) === null || _a === void 0 ? void 0 : _a.data); }))];
                case 4:
                    accountsDecodedMeta = _g.sent();
                    accountsFiltered = accountsDecodedMeta
                        .filter(onlySuccessfullPromises)
                        .filter(onlyNftsWithMetadata)
                        .map(function (p) {
                        var value = p.value;
                        return sanitize ? sanitizeTokenMeta(value) : value;
                    })
                        .map(function (token) { return (stringifyPubKeys ? publicKeyToString(token) : token); });
                    // sort accounts if sort is true & updateAuthority stringified
                    if (stringifyPubKeys && sort) {
                        accountsSorted = (0, lodash_orderby_1.default)(accountsFiltered, [sortKeys.updateAuthority], ["asc"]);
                        return [2 /*return*/, accountsSorted];
                    }
                    // otherwise return unsorted
                    return [2 /*return*/, accountsFiltered];
            }
        });
    });
};
exports.getParsedNftAccountsByOwner = getParsedNftAccountsByOwner;
var sanitizeTokenMeta = function (tokenData) {
    var _a, _b, _c;
    return (__assign(__assign({}, tokenData), { data: __assign(__assign({}, tokenData === null || tokenData === void 0 ? void 0 : tokenData.data), { name: (0, exports.sanitizeMetaStrings)((_a = tokenData === null || tokenData === void 0 ? void 0 : tokenData.data) === null || _a === void 0 ? void 0 : _a.name), symbol: (0, exports.sanitizeMetaStrings)((_b = tokenData === null || tokenData === void 0 ? void 0 : tokenData.data) === null || _b === void 0 ? void 0 : _b.symbol), uri: (0, exports.sanitizeMetaStrings)((_c = tokenData === null || tokenData === void 0 ? void 0 : tokenData.data) === null || _c === void 0 ? void 0 : _c.uri) }) }));
};
var publicKeyToString = function (tokenData) {
    var _a, _b, _c, _d, _e, _f;
    return (__assign(__assign({}, tokenData), { mint: (_b = (_a = tokenData === null || tokenData === void 0 ? void 0 : tokenData.mint) === null || _a === void 0 ? void 0 : _a.toString) === null || _b === void 0 ? void 0 : _b.call(_a), updateAuthority: (_d = (_c = tokenData === null || tokenData === void 0 ? void 0 : tokenData.updateAuthority) === null || _c === void 0 ? void 0 : _c.toString) === null || _d === void 0 ? void 0 : _d.call(_c), data: __assign(__assign({}, tokenData === null || tokenData === void 0 ? void 0 : tokenData.data), { creators: (_f = (_e = tokenData === null || tokenData === void 0 ? void 0 : tokenData.data) === null || _e === void 0 ? void 0 : _e.creators) === null || _f === void 0 ? void 0 : _f.map(function (c) {
                var _a, _b;
                return (__assign(__assign({}, c), { address: (_b = (_a = new web3_js_1.PublicKey(c === null || c === void 0 ? void 0 : c.address)) === null || _a === void 0 ? void 0 : _a.toString) === null || _b === void 0 ? void 0 : _b.call(_a) }));
            }) }) }));
};
var sanitizeMetaStrings = function (metaString) {
    return metaString.replace(/\0/g, "");
};
exports.sanitizeMetaStrings = sanitizeMetaStrings;
var onlySuccessfullPromises = function (result) { return result && result.status === "fulfilled"; };
var onlyNftsWithMetadata = function (t) {
    var _a, _b, _c;
    var uri = (_c = (_b = (_a = t.value.data) === null || _a === void 0 ? void 0 : _a.uri) === null || _b === void 0 ? void 0 : _b.replace) === null || _c === void 0 ? void 0 : _c.call(_b, /\0/g, "");
    return uri !== "" && uri !== undefined;
};
//# sourceMappingURL=getParsedNftAccountsByOwner.js.map

/***/ }),

/***/ 6576:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getParsedNftAccountsByUpdateAuthority = exports.createConnectionConfig = void 0;
// @ts-nocheck
var web3_js_1 = __webpack_require__(8155);
var metaplex_1 = __webpack_require__(4996);
var utils_1 = __webpack_require__(7655);
var createConnectionConfig = function (clusterApi, commitment) {
    if (clusterApi === void 0) { clusterApi = (0, web3_js_1.clusterApiUrl)('mainnet-beta'); }
    if (commitment === void 0) { commitment = 'confirmed'; }
    return new web3_js_1.Connection(clusterApi, commitment);
};
exports.createConnectionConfig = createConnectionConfig;
var getParsedNftAccountsByUpdateAuthority = function (_a) {
    var updateAuthority = _a.updateAuthority, _b = _a.connection, connection = _b === void 0 ? (0, exports.createConnectionConfig)() : _b;
    return __awaiter(void 0, void 0, void 0, function () {
        var res, decodedArray, err_1;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, connection.getProgramAccounts(new web3_js_1.PublicKey(metaplex_1.METADATA_PROGRAM), {
                            encoding: 'base64',
                            filters: [
                                {
                                    memcmp: {
                                        offset: 1,
                                        bytes: updateAuthority,
                                    },
                                },
                            ],
                        })];
                case 1:
                    res = _c.sent();
                    return [4 /*yield*/, Promise.all(res.map(function (acc) { return (0, utils_1.decodeTokenMetadata)(acc.account.data); }))];
                case 2:
                    decodedArray = _c.sent();
                    return [2 /*return*/, decodedArray];
                case 3:
                    err_1 = _c.sent();
                    console.error(err_1);
                    return [2 /*return*/, []];
                case 4: return [2 /*return*/];
            }
        });
    });
};
exports.getParsedNftAccountsByUpdateAuthority = getParsedNftAccountsByUpdateAuthority;
//# sourceMappingURL=getParsedNftAccountsByUpdateAuthority.js.map

/***/ }),

/***/ 5902:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.decodeTokenMetadata = exports.getSolanaMetadataAddress = exports.createConnectionConfig = exports.isValidSolanaAddress = exports.resolveToWalletAddrress = exports.getParsedAccountByMint = exports.getParsedNftAccountsByUpdateAuthority = exports.getParsedNftAccountsByOwner = void 0;
var getParsedNftAccountsByOwner_1 = __webpack_require__(504);
Object.defineProperty(exports, "getParsedNftAccountsByOwner", ({ enumerable: true, get: function () { return getParsedNftAccountsByOwner_1.getParsedNftAccountsByOwner; } }));
var getParsedNftAccountsByUpdateAuthority_1 = __webpack_require__(6576);
Object.defineProperty(exports, "getParsedNftAccountsByUpdateAuthority", ({ enumerable: true, get: function () { return getParsedNftAccountsByUpdateAuthority_1.getParsedNftAccountsByUpdateAuthority; } }));
var getParsedAccountByMint_1 = __webpack_require__(9303);
Object.defineProperty(exports, "getParsedAccountByMint", ({ enumerable: true, get: function () { return getParsedAccountByMint_1.getParsedAccountByMint; } }));
var resolveToWalletAddrress_1 = __webpack_require__(6731);
Object.defineProperty(exports, "resolveToWalletAddrress", ({ enumerable: true, get: function () { return resolveToWalletAddrress_1.resolveToWalletAddrress; } }));
var utils_1 = __webpack_require__(7655);
Object.defineProperty(exports, "isValidSolanaAddress", ({ enumerable: true, get: function () { return utils_1.isValidSolanaAddress; } }));
Object.defineProperty(exports, "createConnectionConfig", ({ enumerable: true, get: function () { return utils_1.createConnectionConfig; } }));
Object.defineProperty(exports, "getSolanaMetadataAddress", ({ enumerable: true, get: function () { return utils_1.getSolanaMetadataAddress; } }));
Object.defineProperty(exports, "decodeTokenMetadata", ({ enumerable: true, get: function () { return utils_1.decodeTokenMetadata; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 6731:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.resolveToWalletAddrress = exports.getInputKey = exports.SOL_TLD_AUTHORITY = void 0;
var web3_js_1 = __webpack_require__(8155);
var spl_name_service_1 = __webpack_require__(3509);
var utils_1 = __webpack_require__(7655);
// Address of the SOL TLD
exports.SOL_TLD_AUTHORITY = new web3_js_1.PublicKey("58PwtjSDuFHuUkYjH9BYnnQKHfwo9reZhC2zMJv9JPkx");
var getInputKey = function (input) { return __awaiter(void 0, void 0, void 0, function () {
    var hashedInputName, inputDomainKey;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, spl_name_service_1.getHashedName)(input)];
            case 1:
                hashedInputName = _a.sent();
                return [4 /*yield*/, (0, spl_name_service_1.getNameAccountKey)(hashedInputName, undefined, exports.SOL_TLD_AUTHORITY)];
            case 2:
                inputDomainKey = _a.sent();
                return [2 /*return*/, { inputDomainKey: inputDomainKey, hashedInputName: hashedInputName }];
        }
    });
}); };
exports.getInputKey = getInputKey;
var errorCantResolve = new Error("Can't resolve provided name into valid Solana address =(");
/**
 * Fn to resolve text into Solana wallet Public Key,
 * For now it resolves Solana Domain Names.
 * If Solana address passed it is validated and send back.
 *
 * Throw error if input text can't be resolved and validated.
 */
var resolveToWalletAddrress = function (_a) {
    var rawText = _a.text, _b = _a.connection, connection = _b === void 0 ? (0, utils_1.createConnectionConfig)() : _b;
    return __awaiter(void 0, void 0, void 0, function () {
        var input, isValidSolana, inputLowerCased, isSolDamain, domainName, inputDomainKey, registry, owner;
        var _c, _d, _e, _f;
        return __generator(this, function (_g) {
            switch (_g.label) {
                case 0:
                    input = (_c = rawText === null || rawText === void 0 ? void 0 : rawText.trim) === null || _c === void 0 ? void 0 : _c.call(rawText);
                    // throw and error if input is not provided
                    if (!input) {
                        return [2 /*return*/, Promise.reject(errorCantResolve)];
                    }
                    isValidSolana = (0, utils_1.isValidSolanaAddress)(input);
                    if (isValidSolana) {
                        return [2 /*return*/, Promise.resolve(input)];
                    }
                    inputLowerCased = input === null || input === void 0 ? void 0 : input.toLowerCase();
                    isSolDamain = (_d = inputLowerCased === null || inputLowerCased === void 0 ? void 0 : inputLowerCased.endsWith) === null || _d === void 0 ? void 0 : _d.call(inputLowerCased, ".sol");
                    if (!isSolDamain) return [3 /*break*/, 3];
                    domainName = inputLowerCased.split(".sol")[0];
                    return [4 /*yield*/, (0, exports.getInputKey)(domainName)];
                case 1:
                    inputDomainKey = (_g.sent()).inputDomainKey;
                    return [4 /*yield*/, spl_name_service_1.NameRegistryState.retrieve(connection, inputDomainKey)];
                case 2:
                    registry = _g.sent();
                    owner = (_f = (_e = registry === null || registry === void 0 ? void 0 : registry.owner) === null || _e === void 0 ? void 0 : _e.toBase58) === null || _f === void 0 ? void 0 : _f.call(_e);
                    if (owner) {
                        return [2 /*return*/, Promise.resolve(owner)];
                    }
                    _g.label = 3;
                case 3: 
                // throw error if had no luck get valid Solana address
                return [2 /*return*/, Promise.reject(errorCantResolve)];
            }
        });
    });
};
exports.resolveToWalletAddrress = resolveToWalletAddrress;
//# sourceMappingURL=resolveToWalletAddrress.js.map

/***/ }),

/***/ 7655:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(8764)["Buffer"];

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createConnectionConfig = exports.isValidSolanaAddress = exports.getSolanaMetadataAddress = exports.decodeTokenMetadata = void 0;
var borsh_1 = __webpack_require__(5120);
var web3_js_1 = __webpack_require__(8155);
var metaplex_1 = __webpack_require__(4996);
var borsh_2 = __webpack_require__(937);
(0, borsh_2.extendBorsh)();
var metaProgamPublicKey = new web3_js_1.PublicKey(metaplex_1.METADATA_PROGRAM);
var metaProgamPublicKeyBuffer = metaProgamPublicKey.toBuffer();
var metaProgamPrefixBuffer = Buffer.from(metaplex_1.METADATA_PREFIX);
var decodeTokenMetadata = function (buffer) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, borsh_1.deserializeUnchecked)(metaplex_1.METADATA_SCHEMA, metaplex_1.Metadata, buffer)];
}); }); };
exports.decodeTokenMetadata = decodeTokenMetadata;
function getSolanaMetadataAddress(tokenMint) {
    return __awaiter(this, void 0, void 0, function () {
        var metaProgamPublicKey;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    metaProgamPublicKey = new web3_js_1.PublicKey(metaplex_1.METADATA_PROGRAM);
                    return [4 /*yield*/, web3_js_1.PublicKey.findProgramAddress([metaProgamPrefixBuffer, metaProgamPublicKeyBuffer, tokenMint.toBuffer()], metaProgamPublicKey)];
                case 1: return [2 /*return*/, (_a.sent())[0]];
            }
        });
    });
}
exports.getSolanaMetadataAddress = getSolanaMetadataAddress;
/**
 * Check if passed address is Solana address
 */
var isValidSolanaAddress = function (address) {
    try {
        // this fn accepts Base58 character
        // and if it pass we suppose Solana address is valid
        new web3_js_1.PublicKey(address);
        return true;
    }
    catch (error) {
        // Non-base58 character or can't be used as Solana address
        return false;
    }
};
exports.isValidSolanaAddress = isValidSolanaAddress;
var createConnectionConfig = function (clusterApi, commitment) {
    if (clusterApi === void 0) { clusterApi = (0, web3_js_1.clusterApiUrl)("mainnet-beta"); }
    if (commitment === void 0) { commitment = "confirmed"; }
    return new web3_js_1.Connection(clusterApi, commitment);
};
exports.createConnectionConfig = createConnectionConfig;
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 5120:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(8764)["Buffer"];

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.deserializeUnchecked = exports.deserialize = exports.serialize = exports.BinaryReader = exports.BinaryWriter = exports.BorshError = exports.baseDecode = exports.baseEncode = void 0;
const bn_js_1 = __importDefault(__webpack_require__(3550));
const bs58_1 = __importDefault(__webpack_require__(7191));
// TODO: Make sure this polyfill not included when not required
const encoding = __importStar(__webpack_require__(1127));
const TextDecoder = (typeof __webpack_require__.g.TextDecoder !== 'function') ? encoding.TextDecoder : __webpack_require__.g.TextDecoder;
const textDecoder = new TextDecoder('utf-8', { fatal: true });
function baseEncode(value) {
    if (typeof (value) === 'string') {
        value = Buffer.from(value, 'utf8');
    }
    return bs58_1.default.encode(Buffer.from(value));
}
exports.baseEncode = baseEncode;
function baseDecode(value) {
    return Buffer.from(bs58_1.default.decode(value));
}
exports.baseDecode = baseDecode;
const INITIAL_LENGTH = 1024;
class BorshError extends Error {
    constructor(message) {
        super(message);
        this.fieldPath = [];
        this.originalMessage = message;
    }
    addToFieldPath(fieldName) {
        this.fieldPath.splice(0, 0, fieldName);
        // NOTE: Modifying message directly as jest doesn't use .toString()
        this.message = this.originalMessage + ': ' + this.fieldPath.join('.');
    }
}
exports.BorshError = BorshError;
/// Binary encoder.
class BinaryWriter {
    constructor() {
        this.buf = Buffer.alloc(INITIAL_LENGTH);
        this.length = 0;
    }
    maybeResize() {
        if (this.buf.length < 16 + this.length) {
            this.buf = Buffer.concat([this.buf, Buffer.alloc(INITIAL_LENGTH)]);
        }
    }
    writeU8(value) {
        this.maybeResize();
        this.buf.writeUInt8(value, this.length);
        this.length += 1;
    }
    writeU16(value) {
        this.maybeResize();
        this.buf.writeUInt16LE(value, this.length);
        this.length += 2;
    }
    writeU32(value) {
        this.maybeResize();
        this.buf.writeUInt32LE(value, this.length);
        this.length += 4;
    }
    writeU64(value) {
        this.maybeResize();
        this.writeBuffer(Buffer.from(new bn_js_1.default(value).toArray('le', 8)));
    }
    writeU128(value) {
        this.maybeResize();
        this.writeBuffer(Buffer.from(new bn_js_1.default(value).toArray('le', 16)));
    }
    writeU256(value) {
        this.maybeResize();
        this.writeBuffer(Buffer.from(new bn_js_1.default(value).toArray('le', 32)));
    }
    writeU512(value) {
        this.maybeResize();
        this.writeBuffer(Buffer.from(new bn_js_1.default(value).toArray('le', 64)));
    }
    writeBuffer(buffer) {
        // Buffer.from is needed as this.buf.subarray can return plain Uint8Array in browser
        this.buf = Buffer.concat([Buffer.from(this.buf.subarray(0, this.length)), buffer, Buffer.alloc(INITIAL_LENGTH)]);
        this.length += buffer.length;
    }
    writeString(str) {
        this.maybeResize();
        const b = Buffer.from(str, 'utf8');
        this.writeU32(b.length);
        this.writeBuffer(b);
    }
    writeFixedArray(array) {
        this.writeBuffer(Buffer.from(array));
    }
    writeArray(array, fn) {
        this.maybeResize();
        this.writeU32(array.length);
        for (const elem of array) {
            this.maybeResize();
            fn(elem);
        }
    }
    toArray() {
        return this.buf.subarray(0, this.length);
    }
}
exports.BinaryWriter = BinaryWriter;
function handlingRangeError(target, propertyKey, propertyDescriptor) {
    const originalMethod = propertyDescriptor.value;
    propertyDescriptor.value = function (...args) {
        try {
            return originalMethod.apply(this, args);
        }
        catch (e) {
            if (e instanceof RangeError) {
                const code = e.code;
                if (['ERR_BUFFER_OUT_OF_BOUNDS', 'ERR_OUT_OF_RANGE'].indexOf(code) >= 0) {
                    throw new BorshError('Reached the end of buffer when deserializing');
                }
            }
            throw e;
        }
    };
}
class BinaryReader {
    constructor(buf) {
        this.buf = buf;
        this.offset = 0;
    }
    readU8() {
        const value = this.buf.readUInt8(this.offset);
        this.offset += 1;
        return value;
    }
    readU16() {
        const value = this.buf.readUInt16LE(this.offset);
        this.offset += 2;
        return value;
    }
    readU32() {
        const value = this.buf.readUInt32LE(this.offset);
        this.offset += 4;
        return value;
    }
    readU64() {
        const buf = this.readBuffer(8);
        return new bn_js_1.default(buf, 'le');
    }
    readU128() {
        const buf = this.readBuffer(16);
        return new bn_js_1.default(buf, 'le');
    }
    readU256() {
        const buf = this.readBuffer(32);
        return new bn_js_1.default(buf, 'le');
    }
    readU512() {
        const buf = this.readBuffer(64);
        return new bn_js_1.default(buf, 'le');
    }
    readBuffer(len) {
        if ((this.offset + len) > this.buf.length) {
            throw new BorshError(`Expected buffer length ${len} isn't within bounds`);
        }
        const result = this.buf.slice(this.offset, this.offset + len);
        this.offset += len;
        return result;
    }
    readString() {
        const len = this.readU32();
        const buf = this.readBuffer(len);
        try {
            // NOTE: Using TextDecoder to fail on invalid UTF-8
            return textDecoder.decode(buf);
        }
        catch (e) {
            throw new BorshError(`Error decoding UTF-8 string: ${e}`);
        }
    }
    readFixedArray(len) {
        return new Uint8Array(this.readBuffer(len));
    }
    readArray(fn) {
        const len = this.readU32();
        const result = Array();
        for (let i = 0; i < len; ++i) {
            result.push(fn());
        }
        return result;
    }
}
__decorate([
    handlingRangeError
], BinaryReader.prototype, "readU8", null);
__decorate([
    handlingRangeError
], BinaryReader.prototype, "readU16", null);
__decorate([
    handlingRangeError
], BinaryReader.prototype, "readU32", null);
__decorate([
    handlingRangeError
], BinaryReader.prototype, "readU64", null);
__decorate([
    handlingRangeError
], BinaryReader.prototype, "readU128", null);
__decorate([
    handlingRangeError
], BinaryReader.prototype, "readU256", null);
__decorate([
    handlingRangeError
], BinaryReader.prototype, "readU512", null);
__decorate([
    handlingRangeError
], BinaryReader.prototype, "readString", null);
__decorate([
    handlingRangeError
], BinaryReader.prototype, "readFixedArray", null);
__decorate([
    handlingRangeError
], BinaryReader.prototype, "readArray", null);
exports.BinaryReader = BinaryReader;
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function serializeField(schema, fieldName, value, fieldType, writer) {
    try {
        // TODO: Handle missing values properly (make sure they never result in just skipped write)
        if (typeof fieldType === 'string') {
            writer[`write${capitalizeFirstLetter(fieldType)}`](value);
        }
        else if (fieldType instanceof Array) {
            if (typeof fieldType[0] === 'number') {
                if (value.length !== fieldType[0]) {
                    throw new BorshError(`Expecting byte array of length ${fieldType[0]}, but got ${value.length} bytes`);
                }
                writer.writeFixedArray(value);
            }
            else if (fieldType.length === 2 && typeof fieldType[1] === 'number') {
                if (value.length !== fieldType[1]) {
                    throw new BorshError(`Expecting byte array of length ${fieldType[1]}, but got ${value.length} bytes`);
                }
                for (let i = 0; i < fieldType[1]; i++) {
                    serializeField(schema, null, value[i], fieldType[0], writer);
                }
            }
            else {
                writer.writeArray(value, (item) => { serializeField(schema, fieldName, item, fieldType[0], writer); });
            }
        }
        else if (fieldType.kind !== undefined) {
            switch (fieldType.kind) {
                case 'option': {
                    if (value === null || value === undefined) {
                        writer.writeU8(0);
                    }
                    else {
                        writer.writeU8(1);
                        serializeField(schema, fieldName, value, fieldType.type, writer);
                    }
                    break;
                }
                default: throw new BorshError(`FieldType ${fieldType} unrecognized`);
            }
        }
        else {
            serializeStruct(schema, value, writer);
        }
    }
    catch (error) {
        if (error instanceof BorshError) {
            error.addToFieldPath(fieldName);
        }
        throw error;
    }
}
function serializeStruct(schema, obj, writer) {
    if (typeof obj.borshSerialize === 'function') {
        obj.borshSerialize(writer);
        return;
    }
    const structSchema = schema.get(obj.constructor);
    if (!structSchema) {
        throw new BorshError(`Class ${obj.constructor.name} is missing in schema`);
    }
    if (structSchema.kind === 'struct') {
        structSchema.fields.map(([fieldName, fieldType]) => {
            serializeField(schema, fieldName, obj[fieldName], fieldType, writer);
        });
    }
    else if (structSchema.kind === 'enum') {
        const name = obj[structSchema.field];
        for (let idx = 0; idx < structSchema.values.length; ++idx) {
            const [fieldName, fieldType] = structSchema.values[idx];
            if (fieldName === name) {
                writer.writeU8(idx);
                serializeField(schema, fieldName, obj[fieldName], fieldType, writer);
                break;
            }
        }
    }
    else {
        throw new BorshError(`Unexpected schema kind: ${structSchema.kind} for ${obj.constructor.name}`);
    }
}
/// Serialize given object using schema of the form:
/// { class_name -> [ [field_name, field_type], .. ], .. }
function serialize(schema, obj, Writer = BinaryWriter) {
    const writer = new Writer();
    serializeStruct(schema, obj, writer);
    return writer.toArray();
}
exports.serialize = serialize;
function deserializeField(schema, fieldName, fieldType, reader) {
    try {
        if (typeof fieldType === 'string') {
            return reader[`read${capitalizeFirstLetter(fieldType)}`]();
        }
        if (fieldType instanceof Array) {
            if (typeof fieldType[0] === 'number') {
                return reader.readFixedArray(fieldType[0]);
            }
            else if (typeof fieldType[1] === 'number') {
                const arr = [];
                for (let i = 0; i < fieldType[1]; i++) {
                    arr.push(deserializeField(schema, null, fieldType[0], reader));
                }
                return arr;
            }
            else {
                return reader.readArray(() => deserializeField(schema, fieldName, fieldType[0], reader));
            }
        }
        if (fieldType.kind === 'option') {
            const option = reader.readU8();
            if (option) {
                return deserializeField(schema, fieldName, fieldType.type, reader);
            }
            return undefined;
        }
        return deserializeStruct(schema, fieldType, reader);
    }
    catch (error) {
        if (error instanceof BorshError) {
            error.addToFieldPath(fieldName);
        }
        throw error;
    }
}
function deserializeStruct(schema, classType, reader) {
    if (typeof classType.borshDeserialize === 'function') {
        return classType.borshDeserialize(reader);
    }
    const structSchema = schema.get(classType);
    if (!structSchema) {
        throw new BorshError(`Class ${classType.name} is missing in schema`);
    }
    if (structSchema.kind === 'struct') {
        const result = {};
        for (const [fieldName, fieldType] of schema.get(classType).fields) {
            result[fieldName] = deserializeField(schema, fieldName, fieldType, reader);
        }
        return new classType(result);
    }
    if (structSchema.kind === 'enum') {
        const idx = reader.readU8();
        if (idx >= structSchema.values.length) {
            throw new BorshError(`Enum index: ${idx} is out of range`);
        }
        const [fieldName, fieldType] = structSchema.values[idx];
        const fieldValue = deserializeField(schema, fieldName, fieldType, reader);
        return new classType({ [fieldName]: fieldValue });
    }
    throw new BorshError(`Unexpected schema kind: ${structSchema.kind} for ${classType.constructor.name}`);
}
/// Deserializes object from bytes using schema.
function deserialize(schema, classType, buffer, Reader = BinaryReader) {
    const reader = new Reader(buffer);
    const result = deserializeStruct(schema, classType, reader);
    if (reader.offset < buffer.length) {
        throw new BorshError(`Unexpected ${buffer.length - reader.offset} bytes after deserialized data`);
    }
    return result;
}
exports.deserialize = deserialize;
/// Deserializes object from bytes using schema, without checking the length read
function deserializeUnchecked(schema, classType, buffer, Reader = BinaryReader) {
    const reader = new Reader(buffer);
    return deserializeStruct(schema, classType, reader);
}
exports.deserializeUnchecked = deserializeUnchecked;


/***/ }),

/***/ 4758:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BN": function() { return /* reexport default from dynamic */ bn_js__WEBPACK_IMPORTED_MODULE_0___default.a; },
/* harmony export */   "rV": function() { return /* reexport module object */ _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__; },
/* harmony export */   "$r": function() { return /* binding */ Tt; },
/* harmony export */   "zt": function() { return /* binding */ v; }
/* harmony export */ });
/* unused harmony exports AccountClient, AccountsCoder, Coder, EventCoder, EventManager, EventParser, IdlError, InstructionCoder, ProgramError, StateClient, StateCoder, getProvider, parseIdlErrors, setProvider, splitArgsAndCtx, toInstruction, translateAddress, utils, validateAccounts */
/* harmony import */ var bn_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3550);
/* harmony import */ var bn_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bn_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8155);
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8764);
/* harmony import */ var camelcase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3204);
/* harmony import */ var camelcase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(camelcase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _project_serum_borsh__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9593);
/* harmony import */ var _project_serum_borsh__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_project_serum_borsh__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var bs58__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7191);
/* harmony import */ var bs58__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bs58__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var js_sha256__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2023);
/* harmony import */ var js_sha256__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(js_sha256__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var base64_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9742);
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7596);
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(assert__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var pako__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7885);
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6729);
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(eventemitter3__WEBPACK_IMPORTED_MODULE_10__);
class v{constructor(t,e,n){this.connection=t,this.wallet=e,this.opts=n}static defaultOptions(){return{preflightCommitment:"recent",commitment:"recent"}}static local(t,e){throw new Error("Provider local is not available on browser.")}static env(){throw new Error("Provider env is not available on browser.")}async send(t,n,r){void 0===n&&(n=[]),void 0===r&&(r=this.opts),t.feePayer=this.wallet.publicKey,t.recentBlockhash=(await this.connection.getRecentBlockhash(r.preflightCommitment)).blockhash,await this.wallet.signTransaction(t),n.filter((t=>void 0!==t)).forEach((e=>{t.partialSign(e)}));const o=t.serialize();return await (0,_solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.sendAndConfirmRawTransaction)(this.connection,o,r)}async sendAll(t,n){void 0===n&&(n=this.opts);const r=await this.connection.getRecentBlockhash(n.preflightCommitment);let o=t.map((t=>{let e=t.tx,n=t.signers;return void 0===n&&(n=[]),e.feePayer=this.wallet.publicKey,e.recentBlockhash=r.blockhash,n.filter((t=>void 0!==t)).forEach((t=>{e.partialSign(t)})),e}));const i=await this.wallet.signAllTransactions(o),s=[];for(let t=0;t<o.length;t+=1){const r=i[t].serialize();s.push(await (0,_solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.sendAndConfirmRawTransaction)(this.connection,r,n))}return s}async simulate(t,e,n=this.opts){var r,o,i;return void 0===e&&(e=[]),t.feePayer=this.wallet.publicKey,t.recentBlockhash=(await this.connection.getRecentBlockhash(null!==(r=n.preflightCommitment)&&void 0!==r?r:this.opts.preflightCommitment)).blockhash,await this.wallet.signTransaction(t),e.filter((t=>void 0!==t)).forEach((e=>{t.partialSign(e)})),await async function(t,e,n){e.recentBlockhash=await t._recentBlockhash(t._disableBlockhashCaching);const r=e.serializeMessage(),o=e._serialize(r).toString("base64"),i=[o,{encoding:"base64",commitment:n}],s=await t._rpcRequest("simulateTransaction",i);if(s.error)throw new Error("failed to simulate transaction: "+s.error.message);return s.result}(this.connection,t,null!==(i=null!==(o=n.commitment)&&void 0!==o?o:this.opts.commitment)&&void 0!==i?i:"recent")}}function y(t){b=t}function w(){return null===b?v.local():b}let b=null;class _ extends Error{constructor(t){super(t),this.name="IdlError"}}class A extends Error{constructor(t,e,...n){super(...n),this.code=t,this.msg=e}static parse(t,e){let n,r=t.toString().split("custom program error: ");if(2!==r.length)return null;try{n=parseInt(r[1])}catch(t){return null}let o=e.get(n);return void 0!==o?new A(n,o,n+": "+o):(o=I.get(n),void 0!==o?new A(n,o,n+": "+o):null)}toString(){return this.msg}}const I=new Map([[100,"8 byte instruction identifier not provided"],[101,"Fallback functions are not supported"],[102,"The program could not deserialize the given instruction"],[103,"The program could not serialize the given instruction"],[1e3,"The program was compiled without idl instructions"],[1001,"The transaction was given an invalid program for the IDL instruction"],[2e3,"A mut constraint was violated"],[2001,"A has_one constraint was violated"],[2002,"A signer constraint was violated"],[2003,"A raw constraint was violated"],[2004,"An owner constraint was violated"],[2005,"A rent exempt constraint was violated"],[2006,"A seeds constraint was violated"],[2007,"An executable constraint was violated"],[2008,"A state constraint was violated"],[2009,"An associated constraint was violated"],[2010,"An associated init constraint was violated"],[2011,"A close constraint was violated"],[2012,"An address constraint was violated"],[2013,"Expected zero account discriminant"],[2014,"A token mint constraint was violated"],[2015,"A token owner constraint was violated"],[2016,"A mint mint authority constraint was violated"],[2017,"A mint freeze authority constraint was violated"],[2018,"A mint decimals constraint was violated"],[2019,"A space constraint was violated"],[3e3,"The account discriminator was already set on this account"],[3001,"No 8 byte discriminator was found on the account"],[3002,"8 byte discriminator did not match what was expected"],[3003,"Failed to deserialize the account"],[3004,"Failed to serialize the account"],[3005,"Not enough account keys given to the instruction"],[3006,"The given account is not mutable"],[3007,"The given account is owned by a different program than expected"],[3008,"Program ID was not as expected"],[3009,"Program account is not executable"],[3010,"The given account did not sign"],[3011,"The given account is not owned by the system program"],[3012,"The program expected this account to be already initialized"],[3013,"The given account is not a program data account"],[4e3,"The given state account does not have the correct address"],[5e3,"The API being used is deprecated and should no longer be used"]]);class E{static fieldLayout(t,e){const n=void 0!==t.name?camelcase__WEBPACK_IMPORTED_MODULE_3___default()(t.name):void 0;switch(t.type){case"bool":return _project_serum_borsh__WEBPACK_IMPORTED_MODULE_4__.bool(n);case"u8":return _project_serum_borsh__WEBPACK_IMPORTED_MODULE_4__.u8(n);case"i8":return _project_serum_borsh__WEBPACK_IMPORTED_MODULE_4__.i8(n);case"u16":return _project_serum_borsh__WEBPACK_IMPORTED_MODULE_4__.u16(n);case"i16":return _project_serum_borsh__WEBPACK_IMPORTED_MODULE_4__.i16(n);case"u32":return _project_serum_borsh__WEBPACK_IMPORTED_MODULE_4__.u32(n);case"i32":return _project_serum_borsh__WEBPACK_IMPORTED_MODULE_4__.i32(n);case"u64":return _project_serum_borsh__WEBPACK_IMPORTED_MODULE_4__.u64(n);case"i64":return _project_serum_borsh__WEBPACK_IMPORTED_MODULE_4__.i64(n);case"u128":return _project_serum_borsh__WEBPACK_IMPORTED_MODULE_4__.u128(n);case"i128":return _project_serum_borsh__WEBPACK_IMPORTED_MODULE_4__.i128(n);case"bytes":return _project_serum_borsh__WEBPACK_IMPORTED_MODULE_4__.vecU8(n);case"string":return _project_serum_borsh__WEBPACK_IMPORTED_MODULE_4__.str(n);case"publicKey":return _project_serum_borsh__WEBPACK_IMPORTED_MODULE_4__.publicKey(n);default:if("vec"in t.type)return _project_serum_borsh__WEBPACK_IMPORTED_MODULE_4__.vec(E.fieldLayout({name:void 0,type:t.type.vec},e),n);if("option"in t.type)return _project_serum_borsh__WEBPACK_IMPORTED_MODULE_4__.option(E.fieldLayout({name:void 0,type:t.type.option},e),n);if("defined"in t.type){const r=t.type.defined;if(void 0===e)throw new _("User defined types not provided");const o=e.filter((t=>t.name===r));if(1!==o.length)throw new _(`Type not found: ${JSON.stringify(t)}`);return E.typeDefLayout(o[0],e,n)}if("array"in t.type){let r=t.type.array[0],o=t.type.array[1],i=E.fieldLayout({name:void 0,type:r},e);return _project_serum_borsh__WEBPACK_IMPORTED_MODULE_4__.array(i,o,n)}throw new Error(`Not yet implemented: ${t}`)}}static typeDefLayout(t,e=[],n){if("struct"===t.type.kind){const r=t.type.fields.map((t=>E.fieldLayout(t,e)));return _project_serum_borsh__WEBPACK_IMPORTED_MODULE_4__.struct(r,n)}if("enum"===t.type.kind){let r=t.type.variants.map((t=>{const n=camelcase__WEBPACK_IMPORTED_MODULE_3___default()(t.name);if(void 0===t.fields)return _project_serum_borsh__WEBPACK_IMPORTED_MODULE_4__.struct([],n);const r=t.fields.map((t=>{if(void 0===t.name)throw new Error("Tuple enum variants not yet implemented.");return E.fieldLayout(t,e)}));return _project_serum_borsh__WEBPACK_IMPORTED_MODULE_4__.struct(r,n)}));return void 0!==n?_project_serum_borsh__WEBPACK_IMPORTED_MODULE_4__.rustEnum(r).replicate(n):_project_serum_borsh__WEBPACK_IMPORTED_MODULE_4__.rustEnum(r,n)}throw new Error(`Unknown type kint: ${t}`)}}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var k=function(){return k=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},k.apply(this,arguments)},L=function(){return L=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},L.apply(this,arguments)};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function S(t){return t.toLowerCase()}var x=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],$=/[^A-Z0-9]+/gi;function T(t,e,n){return e instanceof RegExp?t.replace(e,n):e.reduce((function(t,e){return t.replace(e,n)}),t)}function j(t,e){return void 0===e&&(e={}),function(t,e){void 0===e&&(e={});for(var n=e.splitRegexp,r=void 0===n?x:n,o=e.stripRegexp,i=void 0===o?$:o,s=e.transform,a=void 0===s?S:s,c=e.delimiter,u=void 0===c?" ":c,l=T(T(t,r,"$1\0$2"),i,"\0"),d=0,h=l.length;"\0"===l.charAt(d);)d++;for(;"\0"===l.charAt(h-1);)h--;return l.slice(d,h).split("\0").map(a).join(u)}(t,L({delimiter:"."},e))}function P(t,e){if("enum"===e.type.kind){let n=e.type.variants.map((e=>void 0===e.fields?0:e.fields.map((e=>{if("object"!=typeof e||!("name"in e))throw new Error("Tuple enum variants not yet implemented.");return O(t,e.type)})).reduce(((t,e)=>t+e))));return Math.max(...n)+1}return void 0===e.type.fields?0:e.type.fields.map((e=>O(t,e.type))).reduce(((t,e)=>t+e),0)}function O(t,e){var n,r;switch(e){case"bool":case"u8":case"i8":case"bytes":case"string":return 1;case"i16":case"u16":return 2;case"u32":case"i32":return 4;case"u64":case"i64":return 8;case"u128":case"i128":return 16;case"publicKey":return 32;default:if("vec"in e)return 1;if("option"in e)return 1+O(t,e.option);if("defined"in e){const o=null!==(r=null===(n=t.types)||void 0===n?void 0:n.filter((t=>t.name===e.defined)))&&void 0!==r?r:[];if(1!==o.length)throw new _(`Type not found: ${JSON.stringify(e)}`);return P(t,o[0])}if("array"in e){let n=e.array[0],r=e.array[1];return O(t,n)*r}throw new Error(`Invalid type ${JSON.stringify(e)}`)}}function z(t,e){var n;let r=`${t}:${void 0===n&&(n={}),j(e,k({delimiter:"_"},n))}`;return buffer__WEBPACK_IMPORTED_MODULE_2__.Buffer.from(js_sha256__WEBPACK_IMPORTED_MODULE_6__.sha256.digest(r)).slice(0,8)}class D{constructor(t){this.idl=t,this.ixLayout=D.parseIxLayout(t);const e=new Map;t.instructions.forEach((t=>{const n=z("global",t.name);e.set(bs58__WEBPACK_IMPORTED_MODULE_5___default().encode(n),{layout:this.ixLayout.get(t.name),name:t.name})})),t.state&&t.state.methods.map((t=>{const n=z("state",t.name);e.set(bs58__WEBPACK_IMPORTED_MODULE_5___default().encode(n),{layout:this.ixLayout.get(t.name),name:t.name})})),this.sighashLayouts=e}encode(t,e){return this._encode("global",t,e)}encodeState(t,e){return this._encode("state",t,e)}_encode(t,e,n){const r=buffer__WEBPACK_IMPORTED_MODULE_2__.Buffer.alloc(1e3),o=camelcase__WEBPACK_IMPORTED_MODULE_3___default()(e),i=this.ixLayout.get(o);if(!i)throw new Error(`Unknown method: ${o}`);const s=i.encode(n,r),u=r.slice(0,s);return buffer__WEBPACK_IMPORTED_MODULE_2__.Buffer.concat([z(t,e),u])}static parseIxLayout(t){const e=(t.state?t.state.methods:[]).map((e=>{let n=e.args.map((e=>{var n,r;return E.fieldLayout(e,Array.from([...null!==(n=t.accounts)&&void 0!==n?n:[],...null!==(r=t.types)&&void 0!==r?r:[]]))}));const r=camelcase__WEBPACK_IMPORTED_MODULE_3___default()(e.name);return[r,_project_serum_borsh__WEBPACK_IMPORTED_MODULE_4__.struct(n,r)]})).concat(t.instructions.map((e=>{let n=e.args.map((e=>{var n,r;return E.fieldLayout(e,Array.from([...null!==(n=t.accounts)&&void 0!==n?n:[],...null!==(r=t.types)&&void 0!==r?r:[]]))}));const r=camelcase__WEBPACK_IMPORTED_MODULE_3___default()(e.name);return[r,_project_serum_borsh__WEBPACK_IMPORTED_MODULE_4__.struct(n,r)]})));return new Map(e)}decode(t,e="hex"){"string"==typeof t&&(t="hex"===e?buffer__WEBPACK_IMPORTED_MODULE_2__.Buffer.from(t,"hex"):bs58__WEBPACK_IMPORTED_MODULE_5___default().decode(t));let n=bs58__WEBPACK_IMPORTED_MODULE_5___default().encode(t.slice(0,8)),r=t.slice(8);const o=this.sighashLayouts.get(n);return o?{data:o.layout.decode(r),name:o.name}:null}format(t,e){return C.format(t,e,this.idl)}}class C{static format(t,e,n){const r=n.instructions.filter((e=>t.name===e.name))[0];if(void 0===r)return console.error("Invalid instruction given"),null;const o=r.args.map((e=>({name:e.name,type:C.formatIdlType(e.type),data:C.formatIdlData(e,t.data[e.name],n.types)}))),i=C.flattenIdlAccounts(r.accounts);return{args:o,accounts:e.map(((t,e)=>e<i.length?{name:i[e].name,...t}:{name:void 0,...t}))}}static formatIdlType(t){if("string"==typeof t)return t;if("vec"in t)return`Vec<${this.formatIdlType(t.vec)}>`;if("option"in t)return`Option<${this.formatIdlType(t.option)}>`;if("defined"in t)return t.defined;if("array"in t)return`Array<${t.array[0]}; ${t.array[1]}>`;throw new Error(`Unknown IDL type: ${t}`)}static formatIdlData(t,e,n){if("string"==typeof t.type)return e.toString();if(t.type.vec)return"["+e.map((e=>this.formatIdlData({name:"",type:t.type.vec},e))).join(", ")+"]";if(t.type.option)return null===e?"null":this.formatIdlData({name:"",type:t.type.option},e);if(t.type.defined){if(void 0===n)throw new Error("User defined types not provided");const r=n.filter((e=>e.name===t.type.defined));if(1!==r.length)throw new Error(`Type not found: ${t.type.defined}`);return C.formatIdlDataDefined(r[0],e,n)}return"unknown"}static formatIdlDataDefined(t,e,n){if("struct"===t.type.kind){const r=t.type;return"{ "+Object.keys(e).map((t=>{const o=r.fields.filter((e=>e.name===t))[0];if(void 0===o)throw new Error("Unable to find type");return t+": "+C.formatIdlData(o,e[t],n)})).join(", ")+" }"}if(0===t.type.variants.length)return"{}";if(t.type.variants[0].name){const r=t.type.variants,o=Object.keys(e)[0],i=e[o],s=Object.keys(i).map((t=>{var e;const s=i[t],a=null===(e=r[o])||void 0===e?void 0:e.filter((e=>e.name===t))[0];if(void 0===a)throw new Error("Unable to find variant");return t+": "+C.formatIdlData(a,s,n)})).join(", "),a=camelcase__WEBPACK_IMPORTED_MODULE_3___default()(o,{pascalCase:!0});return 0===s.length?a:`${a} { ${s} }`}return"Tuple formatting not yet implemented"}static flattenIdlAccounts(t,e){return t.map((t=>{const n=function(t){const e=t.replace(/([A-Z])/g," $1");return e.charAt(0).toUpperCase()+e.slice(1)}(t.name);if(t.accounts){const r=e?`${e} > ${n}`:n;return C.flattenIdlAccounts(t.accounts,r)}return{...t,name:e?`${e} > ${n}`:n}})).flat()}}class B{constructor(t){if(void 0===t.accounts)return void(this.accountLayouts=new Map);const e=t.accounts.map((e=>[e.name,E.typeDefLayout(e,t.types)]));this.accountLayouts=new Map(e)}async encode(t,e){const n=buffer__WEBPACK_IMPORTED_MODULE_2__.Buffer.alloc(1e3),r=this.accountLayouts.get(t);if(!r)throw new Error(`Unknown account: ${t}`);const o=r.encode(e,n);let i=n.slice(0,o),s=B.accountDiscriminator(t);return buffer__WEBPACK_IMPORTED_MODULE_2__.Buffer.concat([s,i])}decode(t,e){const n=e.slice(8),r=this.accountLayouts.get(t);if(!r)throw new Error(`Unknown account: ${t}`);return r.decode(n)}static accountDiscriminator(t){return buffer__WEBPACK_IMPORTED_MODULE_2__.Buffer.from(js_sha256__WEBPACK_IMPORTED_MODULE_6__.sha256.digest(`account:${camelcase__WEBPACK_IMPORTED_MODULE_3___default()(t,{pascalCase:!0})}`)).slice(0,8)}}class M{constructor(t){if(void 0===t.events)return void(this.layouts=new Map);const e=t.events.map((e=>{let n={name:e.name,type:{kind:"struct",fields:e.fields.map((t=>({name:t.name,type:t.type})))}};return[e.name,E.typeDefLayout(n,t.types)]}));this.layouts=new Map(e),this.discriminators=new Map(void 0===t.events?[]:t.events.map((t=>{return[base64_js__WEBPACK_IMPORTED_MODULE_7__.fromByteArray((e=t.name,buffer__WEBPACK_IMPORTED_MODULE_2__.Buffer.from(js_sha256__WEBPACK_IMPORTED_MODULE_6__.sha256.digest(`event:${e}`)).slice(0,8))),t.name];var e})))}decode(t){let e;try{e=buffer__WEBPACK_IMPORTED_MODULE_2__.Buffer.from(base64_js__WEBPACK_IMPORTED_MODULE_7__.toByteArray(t))}catch(t){return null}const n=base64_js__WEBPACK_IMPORTED_MODULE_7__.fromByteArray(e.slice(0,8)),r=this.discriminators.get(n);if(void 0===r)return null;const o=this.layouts.get(r);if(!o)throw new Error(`Unknown event: ${r}`);return{data:o.decode(e.slice(8)),name:r}}}const U=new Set(["anchor-deprecated-state"]),K=new Map;function W(t){return void 0!==K.get(t)}var N=Object.freeze({__proto__:null,set:function(t){if(!U.has(t))throw new Error("Invalid feature");K.set(t,!0)},isSet:W});class R{constructor(t){if(void 0===t.state)throw new Error("Idl state not defined.");this.layout=E.typeDefLayout(t.state.struct,t.types)}async encode(t,e){const n=buffer__WEBPACK_IMPORTED_MODULE_2__.Buffer.alloc(1e3),r=this.layout.encode(e,n),o=await Z(t),i=n.slice(0,r);return buffer__WEBPACK_IMPORTED_MODULE_2__.Buffer.concat([o,i])}decode(t){const e=t.slice(8);return this.layout.decode(e)}}async function Z(t){let e=W("anchor-deprecated-state")?"account":"state";return buffer__WEBPACK_IMPORTED_MODULE_2__.Buffer.from(js_sha256__WEBPACK_IMPORTED_MODULE_6__.sha256.digest(`${e}:${t}`)).slice(0,8)}class J{constructor(t){this.instruction=new D(t),this.accounts=new B(t),this.events=new M(t),t.state&&(this.state=new R(t))}sighash(t,e){return z(t,e)}}var F=Object.freeze({__proto__:null,hash:function(t){return (0,js_sha256__WEBPACK_IMPORTED_MODULE_6__.sha256)(t)}});function q(t){const e=new Map;return t.errors&&t.errors.forEach((t=>{var n;let r=null!==(n=t.msg)&&void 0!==n?n:t.name;e.set(t.code,r)})),e}function G(t,...e){if(t.args.length!=e.length)throw new Error("Invalid argument length");const n={};let r=0;return t.args.forEach((t=>{n[t.name]=e[r],r+=1})),n}function V(t,e={}){t.forEach((t=>{if("accounts"in t)V(t.accounts,e[t.name]);else if(void 0===e[t.name])throw new Error(`Invalid arguments: ${t.name} not provided.`)}))}function Q(t){return t instanceof _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.PublicKey?t:new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.PublicKey(t)}async function H(t,e){if(e.length<=99)return await X(t,e);{const o=(n=e,r=99,Array.apply(0,new Array(Math.ceil(n.length/r))).map(((t,e)=>n.slice(e*r,(e+1)*r))));return(await Promise.all(o.map((e=>X(t,e))))).flat()}var n,r}async function X(t,e){const r=[e.map((t=>t.toBase58())),{commitment:"recent"}],o=await t._rpcRequest("getMultipleAccounts",r);if(o.error)throw new Error("failed to get info about accounts "+e.map((t=>t.toBase58())).join(", ")+": "+o.error.message);assert__WEBPACK_IMPORTED_MODULE_8___default()(void 0!==o.result);const i=[];for(const t of o.result.value){let e=null;if(null!==t){if(o.result.value){const{executable:r,owner:o,lamports:i,data:s}=t;assert__WEBPACK_IMPORTED_MODULE_8___default()("base64"===s[1]),e={executable:r,owner:new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.PublicKey(o),lamports:i,data:buffer__WEBPACK_IMPORTED_MODULE_2__.Buffer.from(s[0],"base64")}}if(null===e)throw new Error("Invalid response");i.push(e)}else i.push(null)}return i.map(((t,n)=>null===t?null:{publicKey:e[n],account:t}))}var Y=Object.freeze({__proto__:null,invoke:async function(t,e,n,i){t=Q(t),i||(i=w());const s=new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.Transaction;return s.add(new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.TransactionInstruction({programId:t,keys:null!=e?e:[],data:n})),await i.send(s)},getMultipleAccounts:H});function tt(t,e,r){const o=buffer__WEBPACK_IMPORTED_MODULE_2__.Buffer.concat([t.toBuffer(),buffer__WEBPACK_IMPORTED_MODULE_2__.Buffer.from(e),r.toBuffer()]),i=js_sha256__WEBPACK_IMPORTED_MODULE_6__.sha256.digest(o);return new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.PublicKey(buffer__WEBPACK_IMPORTED_MODULE_2__.Buffer.from(i))}function et(e,r){let o=buffer__WEBPACK_IMPORTED_MODULE_2__.Buffer.alloc(0);e.forEach((function(t){if(t.length>32)throw new TypeError("Max seed length exceeded");o=buffer__WEBPACK_IMPORTED_MODULE_2__.Buffer.concat([o,rt(t)])})),o=buffer__WEBPACK_IMPORTED_MODULE_2__.Buffer.concat([o,r.toBuffer(),buffer__WEBPACK_IMPORTED_MODULE_2__.Buffer.from("ProgramDerivedAddress")]);let i=(0,js_sha256__WEBPACK_IMPORTED_MODULE_6__.sha256)(new Uint8Array(o)),s=new (bn_js__WEBPACK_IMPORTED_MODULE_0___default())(i,16).toArray(void 0,32);if(_solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.PublicKey.isOnCurve(new Uint8Array(s)))throw new Error("Invalid seeds, address must fall off the curve");return new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.PublicKey(s)}function nt(t,e){let n,r=255;for(;0!=r;){try{n=et(t.concat(buffer__WEBPACK_IMPORTED_MODULE_2__.Buffer.from([r])),e)}catch(t){if(t instanceof TypeError)throw t;r--;continue}return[n,r]}throw new Error("Unable to find a viable program address nonce")}const rt=t=>t instanceof buffer__WEBPACK_IMPORTED_MODULE_2__.Buffer?t:t instanceof Uint8Array?buffer__WEBPACK_IMPORTED_MODULE_2__.Buffer.from(t.buffer,t.byteOffset,t.byteLength):buffer__WEBPACK_IMPORTED_MODULE_2__.Buffer.from(t);async function ot(t,...e){let r=[buffer__WEBPACK_IMPORTED_MODULE_2__.Buffer.from([97,110,99,104,111,114])];e.forEach((t=>{r.push(void 0!==t.buffer?t:Q(t).toBuffer())}));const[o]=await _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.PublicKey.findProgramAddress(r,Q(t));return o}var it=Object.freeze({__proto__:null,createWithSeedSync:tt,createProgramAddressSync:et,findProgramAddressSync:nt,associated:ot});var st=Object.freeze({__proto__:null,encode:function(t){return t.reduce(((t,e)=>t+e.toString(16).padStart(2,"0")),"0x")},decode:function(t){0===t.indexOf("0x")&&(t=t.substr(2)),t.length%2==1&&(t="0"+t);let e=t.match(/.{2}/g);return null===e?buffer__WEBPACK_IMPORTED_MODULE_2__.Buffer.from([]):buffer__WEBPACK_IMPORTED_MODULE_2__.Buffer.from(e.map((t=>parseInt(t,16))))}});function at(t){return new TextDecoder("utf-8").decode(t)}var ct=Object.freeze({__proto__:null,decode:at,encode:function(t){return(new TextEncoder).encode(t)}});var ut=Object.freeze({__proto__:null,encode:function(t){return bs58__WEBPACK_IMPORTED_MODULE_5___default().encode(t)},decode:function(t){return bs58__WEBPACK_IMPORTED_MODULE_5___default().decode(t)}});var lt=Object.freeze({__proto__:null,encode:function(t){return base64_js__WEBPACK_IMPORTED_MODULE_7__.fromByteArray(t)},decode:function(t){return buffer__WEBPACK_IMPORTED_MODULE_2__.Buffer.from(base64_js__WEBPACK_IMPORTED_MODULE_7__.toByteArray(t))}}),dt=Object.freeze({__proto__:null,hex:st,utf8:ct,bs58:ut,base64:lt});const ht=new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"),ft=new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL");var pt=Object.freeze({__proto__:null,associatedAddress:async function({mint:t,owner:e}){return(await _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.PublicKey.findProgramAddress([e.toBuffer(),ht.toBuffer(),t.toBuffer()],ft))[0]}}),mt=Object.freeze({__proto__:null,sha256:F,rpc:Y,publicKey:it,bytes:dt,token:pt,features:N});const gt=_project_serum_borsh__WEBPACK_IMPORTED_MODULE_4__.struct([_project_serum_borsh__WEBPACK_IMPORTED_MODULE_4__.publicKey("authority"),_project_serum_borsh__WEBPACK_IMPORTED_MODULE_4__.vecU8("data")]);function vt(t,e){var n,r;let o={};const i=t.args?t.args.length:0;if(e.length>i){if(e.length!==i+1)throw new Error(`provided too many arguments ${e} to instruction ${null==t?void 0:t.name} expecting: ${null!==(r=null===(n=t.args)||void 0===n?void 0:n.map((t=>t.name)))&&void 0!==r?r:[]}`);o=e.pop()}return[e,o]}class yt{static build(t,e,n){if("_inner"===t.name)throw new _("the _inner name is reserved");const r=(...i)=>{const[s,a]=vt(t,[...i]);V(t.accounts,a.accounts);const c=r.accounts(a.accounts);return void 0!==a.remainingAccounts&&c.push(...a.remainingAccounts),W("debug-logs")&&console.log("Outgoing account metas:",c),new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.TransactionInstruction({keys:c,programId:n,data:e(t.name,G(t,...s))})};return r.accounts=e=>yt.accountsArray(e,t.accounts,t.name),r}static accountsArray(t,e,n){return t?e.map((e=>{if(void 0!==("accounts"in e?e.accounts:void 0)){const r=t[e.name];return yt.accountsArray(r,e.accounts,n).flat()}{const r=e;let o;try{o=Q(t[e.name])}catch(t){throw new Error(`Wrong input type for account "${e.name}" in the instruction accounts object${void 0!==n?' for instruction "'+n+'"':""}. Expected PublicKey or string.`)}return{pubkey:o,isWritable:r.isMut,isSigner:r.isSigner}}})).flat():[]}}class wt{static build(t,e,n,r){return async(...o)=>{const i=e(...o),[,s]=vt(t,[...o]);try{return await r.send(i,s.signers,s.options)}catch(t){W("debug-logs")&&console.log("Translating error:",t);let e=A.parse(t,n);if(null===e)throw t;throw e}}}}class bt{static build(t,e){return(...n)=>{var o,i,s;const[,a]=vt(t,[...n]),c=new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.Transaction;if(a.preInstructions&&a.instructions)throw new Error("instructions is deprecated, use preInstructions");return null===(o=a.preInstructions)||void 0===o||o.forEach((t=>c.add(t))),null===(i=a.instructions)||void 0===i||i.forEach((t=>c.add(t))),c.add(e(...n)),null===(s=a.postInstructions)||void 0===s||s.forEach((t=>c.add(t))),c}}}class _t{constructor(t,e,n=w(),r=new J(t)){this.provider=n,this.coder=r,this._idl=t,this._programId=e,this._address=At(e),this._sub=null;const[o,s,a]=(()=>{var o;let s={},a={},u={};return null===(o=t.state)||void 0===o||o.methods.forEach((o=>{const l=yt.build(o,((t,e)=>r.instruction.encodeState(t,e)),e);l.accounts=t=>{const r=function(t,e,n,r){if("new"===n.name){const[n]=nt([],t);return[{pubkey:e.wallet.publicKey,isWritable:!1,isSigner:!0},{pubkey:At(t),isWritable:!0,isSigner:!1},{pubkey:n,isWritable:!1,isSigner:!1},{pubkey:_solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.SystemProgram.programId,isWritable:!1,isSigner:!1},{pubkey:t,isWritable:!1,isSigner:!1}]}return V(n.accounts,r),[{pubkey:At(t),isWritable:!0,isSigner:!1}]}(e,n,o,t);return r.concat(yt.accountsArray(t,o.accounts,o.name))};const d=bt.build(o,l),h=wt.build(o,d,q(t),n),f=camelcase__WEBPACK_IMPORTED_MODULE_3___default()(o.name);s[f]=l,a[f]=d,u[f]=h})),[s,a,u]})();this.instruction=o,this.transaction=s,this.rpc=a}get programId(){return this._programId}async fetch(){const t=this.address(),e=await this.provider.connection.getAccountInfo(t);if(null===e)throw new Error(`Account does not exist ${t.toString()}`);const n=this._idl.state;if(!n)throw new Error("State is not specified in IDL.");if((await Z(n.struct.name)).compare(e.data.slice(0,8)))throw new Error("Invalid account discriminator");return this.coder.state.decode(e.data)}address(){return this._address}subscribe(t){if(null!==this._sub)return this._sub.ee;const e=new (eventemitter3__WEBPACK_IMPORTED_MODULE_10___default()),n=this.provider.connection.onAccountChange(this.address(),(t=>{const n=this.coder.state.decode(t.data);e.emit("change",n)}),t);return this._sub={ee:e,listener:n},e}unsubscribe(){null!==this._sub&&this.provider.connection.removeAccountChangeListener(this._sub.listener).then((async()=>{this._sub=null})).catch(console.error)}}function At(t){let[e]=nt([],t);return tt(e,"unversioned",t)}class It{constructor(t,e,n,r,o){var i;this._idlAccount=e,this._programId=n,this._provider=null!=r?r:w(),this._coder=null!=o?o:new J(t),this._size=8+(null!==(i=P(t,e))&&void 0!==i?i:0)}get size(){return this._size}get programId(){return this._programId}get provider(){return this._provider}get coder(){return this._coder}async fetchNullable(t){const e=await this.getAccountInfo(t);if(null===e)return null;if(B.accountDiscriminator(this._idlAccount.name).compare(e.data.slice(0,8)))throw new Error("Invalid account discriminator");return this._coder.accounts.decode(this._idlAccount.name,e.data)}async fetch(t){const e=await this.fetchNullable(t);if(null===e)throw new Error(`Account does not exist ${t.toString()}`);return e}async fetchMultiple(t){const e=await H(this._provider.connection,t.map((t=>Q(t)))),n=B.accountDiscriminator(this._idlAccount.name);return e.map((t=>null==t||n.compare(null==t?void 0:t.account.data.slice(0,8))?null:this._coder.accounts.decode(this._idlAccount.name,null==t?void 0:t.account.data)))}async all(t){const e=B.accountDiscriminator(this._idlAccount.name);return(await this._provider.connection.getProgramAccounts(this._programId,{commitment:this._provider.connection.commitment,filters:[{memcmp:{offset:0,bytes:bs58__WEBPACK_IMPORTED_MODULE_5___default().encode(t instanceof buffer__WEBPACK_IMPORTED_MODULE_2__.Buffer?buffer__WEBPACK_IMPORTED_MODULE_2__.Buffer.concat([e,t]):e)}},...Array.isArray(t)?t:[]]})).map((({pubkey:t,account:e})=>({publicKey:t,account:this._coder.accounts.decode(this._idlAccount.name,e.data)})))}subscribe(t,e){const n=Et.get(t.toString());if(n)return n.ee;const r=new (eventemitter3__WEBPACK_IMPORTED_MODULE_10___default());t=Q(t);const o=this._provider.connection.onAccountChange(t,(t=>{const e=this._coder.accounts.decode(this._idlAccount.name,t.data);r.emit("change",e)}),e);return Et.set(t.toString(),{ee:r,listener:o}),r}async unsubscribe(t){let e=Et.get(t.toString());e?Et&&await this._provider.connection.removeAccountChangeListener(e.listener).then((()=>{Et.delete(t.toString())})).catch(console.error):console.warn("Address is not subscribed")}async createInstruction(t,e){const n=this.size;return _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.SystemProgram.createAccount({fromPubkey:this._provider.wallet.publicKey,newAccountPubkey:t.publicKey,space:null!=e?e:n,lamports:await this._provider.connection.getMinimumBalanceForRentExemption(null!=e?e:n),programId:this._programId})}async associated(...t){const e=await this.associatedAddress(...t);return await this.fetch(e)}async associatedAddress(...t){return await ot(this._programId,...t)}async getAccountInfo(t,e){return await this._provider.connection.getAccountInfo(Q(t),e)}}const Et=new Map,kt="Program log: ".length;class Lt{constructor(t,e,n){this._programId=t,this._provider=e,this._eventParser=new St(t,n),this._eventCallbacks=new Map,this._eventListeners=new Map,this._listenerIdCount=0}addEventListener(t,e){var n;let r=this._listenerIdCount;return this._listenerIdCount+=1,t in this._eventCallbacks||this._eventListeners.set(t,[]),this._eventListeners.set(t,(null!==(n=this._eventListeners.get(t))&&void 0!==n?n:[]).concat(r)),this._eventCallbacks.set(r,[t,e]),void 0!==this._onLogsSubscriptionId||(this._onLogsSubscriptionId=this._provider.connection.onLogs(this._programId,((t,e)=>{t.err?console.error(t):this._eventParser.parseLogs(t.logs,(t=>{const n=this._eventListeners.get(t.name);n&&n.forEach((n=>{const r=this._eventCallbacks.get(n);if(r){const[,n]=r;n(t.data,e.slot)}}))}))}))),r}async removeEventListener(t){const e=this._eventCallbacks.get(t);if(!e)throw new Error(`Event listener ${t} doesn't exist!`);const[n]=e;let r=this._eventListeners.get(n);if(!r)throw new Error(`Event listeners don't exist for ${n}!`);this._eventCallbacks.delete(t),r=r.filter((e=>e!==t)),0===r.length&&this._eventListeners.delete(n),0==this._eventCallbacks.size&&(assert__WEBPACK_IMPORTED_MODULE_8__.ok(0===this._eventListeners.size),void 0!==this._onLogsSubscriptionId&&(await this._provider.connection.removeOnLogsListener(this._onLogsSubscriptionId),this._onLogsSubscriptionId=void 0))}}class St{constructor(t,e){this.coder=e,this.programId=t}parseLogs(t,e){const n=new $t(t),r=new xt(n.next());let o=n.next();for(;null!==o;){let[t,i,s]=this.handleLog(r,o);t&&e(t),i&&r.push(i),s&&r.pop(),o=n.next()}}handleLog(t,e){return t.stack.length>0&&t.program()===this.programId.toString()?this.handleProgramLog(e):[null,...this.handleSystemLog(e)]}handleProgramLog(t){if(t.startsWith("Program log:")){const e=t.slice(kt);return[this.coder.events.decode(e),null,!1]}return[null,...this.handleSystemLog(t)]}handleSystemLog(t){const e=t.split(":")[0];return null!==e.match(/^Program (.*) success/g)?[null,!0]:e.startsWith(`Program ${this.programId.toString()} invoke`)?[this.programId.toString(),!1]:e.includes("invoke")?["cpi",!1]:[null,!1]}}class xt{constructor(t){var e;const n=null===(e=/^Program (.*) invoke.*$/g.exec(t))||void 0===e?void 0:e[1];if(!n)throw new Error("Could not find program invocation log line");this.stack=[n]}program(){return assert__WEBPACK_IMPORTED_MODULE_8__.ok(this.stack.length>0),this.stack[this.stack.length-1]}push(t){this.stack.push(t)}pop(){assert__WEBPACK_IMPORTED_MODULE_8__.ok(this.stack.length>0),this.stack.pop()}}class $t{constructor(t){this.logs=t}next(){if(0===this.logs.length)return null;let t=this.logs[0];return this.logs=this.logs.slice(1),t}}class Tt{constructor(t,e,n){e=Q(e),n||(n=w()),this._idl=t,this._provider=n,this._programId=e,this._coder=new J(t),this._events=new Lt(this._programId,n,this._coder);const[r,o,i,s,a,u]=class{static build(t,e,n,r){const o={},i={},s={},a={},u=q(t),l=class{static build(t,e,n,r){if(void 0!==t.state)return new _t(t,n,r,e)}}.build(t,e,n,r);t.instructions.forEach((l=>{const d=yt.build(l,((t,n)=>e.instruction.encode(t,n)),n),h=bt.build(l,d),f=wt.build(l,h,u,r),p=class{static build(t,e,n,r,o,i,s){return async(...a)=>{const c=e(...a),[,u]=vt(t,[...a]);let l;try{l=await r.simulate(c,u.signers,u.options)}catch(t){W("debug-logs")&&console.log("Translating error:",t);let e=A.parse(t,n);if(null===e)throw t;throw e}if(void 0===l)throw new Error("Unable to simulate transaction");if(l.value.err)throw new Error(`Simulate error: ${l.value.err.toString()}`);const d=l.value.logs;if(!d)throw new Error("Simulated logs not found");const h=[];return s.events&&new St(i,o).parseLogs(d,(t=>{h.push(t)})),{events:h,raw:d}}}}.build(l,h,u,r,e,n,t),m=camelcase__WEBPACK_IMPORTED_MODULE_3___default()(l.name);i[m]=d,s[m]=h,o[m]=f,a[m]=p}));const d=t.accounts?class{static build(t,e,n,r){var o;const i={};return null===(o=t.accounts)||void 0===o||o.forEach((o=>{const s=camelcase__WEBPACK_IMPORTED_MODULE_3___default()(o.name);i[s]=new It(t,o,n,r,e)})),i}}.build(t,e,n,r):{};return[o,i,s,d,a,l]}}.build(t,this._coder,e,n);this.rpc=r,this.instruction=o,this.transaction=i,this.account=s,this.simulate=a,this.state=u}get programId(){return this._programId}get idl(){return this._idl}get coder(){return this._coder}get provider(){return this._provider}static async at(t,e){const n=Q(t),r=await Tt.fetchIdl(n,e);if(!r)throw new Error(`IDL not found for program: ${t.toString()}`);return new Tt(r,n,e)}static async fetchIdl(t,e){e=null!=e?e:w();const r=Q(t),o=await async function(t){const e=(await _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.PublicKey.findProgramAddress([],t))[0];return await _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.PublicKey.createWithSeed(e,"anchor:idl",t)}(r),i=await e.connection.getAccountInfo(o);if(!i)return null;let s=(a=i.data.slice(8),gt.decode(a));var a;const c=(0,pako__WEBPACK_IMPORTED_MODULE_9__/* .inflate */ .rr)(s.data);return JSON.parse(at(c))}addEventListener(t,e){return this._events.addEventListener(t,e)}async removeEventListener(t){return await this._events.removeEventListener(t)}}
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 9593:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(8764)["Buffer"];

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.map = exports.array = exports.rustEnum = exports.str = exports.vecU8 = exports.tagged = exports.vec = exports.bool = exports.option = exports.publicKey = exports.i128 = exports.u128 = exports.i64 = exports.u64 = exports.struct = exports.f64 = exports.f32 = exports.i32 = exports.u32 = exports.i16 = exports.u16 = exports.i8 = exports.u8 = void 0;
const buffer_layout_1 = __webpack_require__(698);
const web3_js_1 = __webpack_require__(8155);
const bn_js_1 = __importDefault(__webpack_require__(3550));
var buffer_layout_2 = __webpack_require__(698);
Object.defineProperty(exports, "u8", ({ enumerable: true, get: function () { return buffer_layout_2.u8; } }));
Object.defineProperty(exports, "i8", ({ enumerable: true, get: function () { return buffer_layout_2.s8; } }));
Object.defineProperty(exports, "u16", ({ enumerable: true, get: function () { return buffer_layout_2.u16; } }));
Object.defineProperty(exports, "i16", ({ enumerable: true, get: function () { return buffer_layout_2.s16; } }));
Object.defineProperty(exports, "u32", ({ enumerable: true, get: function () { return buffer_layout_2.u32; } }));
Object.defineProperty(exports, "i32", ({ enumerable: true, get: function () { return buffer_layout_2.s32; } }));
Object.defineProperty(exports, "f32", ({ enumerable: true, get: function () { return buffer_layout_2.f32; } }));
Object.defineProperty(exports, "f64", ({ enumerable: true, get: function () { return buffer_layout_2.f64; } }));
Object.defineProperty(exports, "struct", ({ enumerable: true, get: function () { return buffer_layout_2.struct; } }));
class BNLayout extends buffer_layout_1.Layout {
    constructor(span, signed, property) {
        super(span, property);
        this.blob = buffer_layout_1.blob(span);
        this.signed = signed;
    }
    decode(b, offset = 0) {
        const num = new bn_js_1.default(this.blob.decode(b, offset), 10, 'le');
        if (this.signed) {
            return num.fromTwos(this.span * 8).clone();
        }
        return num;
    }
    encode(src, b, offset = 0) {
        if (this.signed) {
            src = src.toTwos(this.span * 8);
        }
        return this.blob.encode(src.toArrayLike(Buffer, 'le', this.span), b, offset);
    }
}
function u64(property) {
    return new BNLayout(8, false, property);
}
exports.u64 = u64;
function i64(property) {
    return new BNLayout(8, true, property);
}
exports.i64 = i64;
function u128(property) {
    return new BNLayout(16, false, property);
}
exports.u128 = u128;
function i128(property) {
    return new BNLayout(16, true, property);
}
exports.i128 = i128;
class WrappedLayout extends buffer_layout_1.Layout {
    constructor(layout, decoder, encoder, property) {
        super(layout.span, property);
        this.layout = layout;
        this.decoder = decoder;
        this.encoder = encoder;
    }
    decode(b, offset) {
        return this.decoder(this.layout.decode(b, offset));
    }
    encode(src, b, offset) {
        return this.layout.encode(this.encoder(src), b, offset);
    }
    getSpan(b, offset) {
        return this.layout.getSpan(b, offset);
    }
}
function publicKey(property) {
    return new WrappedLayout(buffer_layout_1.blob(32), (b) => new web3_js_1.PublicKey(b), (key) => key.toBuffer(), property);
}
exports.publicKey = publicKey;
class OptionLayout extends buffer_layout_1.Layout {
    constructor(layout, property) {
        super(-1, property);
        this.layout = layout;
        this.discriminator = buffer_layout_1.u8();
    }
    encode(src, b, offset = 0) {
        if (src === null || src === undefined) {
            return this.discriminator.encode(0, b, offset);
        }
        this.discriminator.encode(1, b, offset);
        return this.layout.encode(src, b, offset + 1) + 1;
    }
    decode(b, offset = 0) {
        const discriminator = this.discriminator.decode(b, offset);
        if (discriminator === 0) {
            return null;
        }
        else if (discriminator === 1) {
            return this.layout.decode(b, offset + 1);
        }
        throw new Error('Invalid option ' + this.property);
    }
    getSpan(b, offset = 0) {
        const discriminator = this.discriminator.decode(b, offset);
        if (discriminator === 0) {
            return 1;
        }
        else if (discriminator === 1) {
            return this.layout.getSpan(b, offset + 1) + 1;
        }
        throw new Error('Invalid option ' + this.property);
    }
}
function option(layout, property) {
    return new OptionLayout(layout, property);
}
exports.option = option;
function bool(property) {
    return new WrappedLayout(buffer_layout_1.u8(), decodeBool, encodeBool, property);
}
exports.bool = bool;
function decodeBool(value) {
    if (value === 0) {
        return false;
    }
    else if (value === 1) {
        return true;
    }
    throw new Error('Invalid bool: ' + value);
}
function encodeBool(value) {
    return value ? 1 : 0;
}
function vec(elementLayout, property) {
    const length = buffer_layout_1.u32('length');
    const layout = buffer_layout_1.struct([
        length,
        buffer_layout_1.seq(elementLayout, buffer_layout_1.offset(length, -length.span), 'values'),
    ]);
    return new WrappedLayout(layout, ({ values }) => values, values => ({ values }), property);
}
exports.vec = vec;
function tagged(tag, layout, property) {
    const wrappedLayout = buffer_layout_1.struct([
        u64('tag'),
        layout.replicate('data'),
    ]);
    function decodeTag({ tag: receivedTag, data }) {
        if (!receivedTag.eq(tag)) {
            throw new Error('Invalid tag, expected: ' +
                tag.toString('hex') +
                ', got: ' +
                receivedTag.toString('hex'));
        }
        return data;
    }
    return new WrappedLayout(wrappedLayout, decodeTag, data => ({ tag, data }), property);
}
exports.tagged = tagged;
function vecU8(property) {
    const length = buffer_layout_1.u32('length');
    const layout = buffer_layout_1.struct([
        length,
        buffer_layout_1.blob(buffer_layout_1.offset(length, -length.span), 'data'),
    ]);
    return new WrappedLayout(layout, ({ data }) => data, data => ({ data }), property);
}
exports.vecU8 = vecU8;
function str(property) {
    return new WrappedLayout(vecU8(), data => data.toString('utf-8'), s => Buffer.from(s, 'utf-8'), property);
}
exports.str = str;
function rustEnum(variants, property, discriminant) {
    const unionLayout = buffer_layout_1.union(discriminant !== null && discriminant !== void 0 ? discriminant : buffer_layout_1.u8(), property);
    variants.forEach((variant, index) => unionLayout.addVariant(index, variant, variant.property));
    return unionLayout;
}
exports.rustEnum = rustEnum;
function array(elementLayout, length, property) {
    const layout = buffer_layout_1.struct([
        buffer_layout_1.seq(elementLayout, length, 'values'),
    ]);
    return new WrappedLayout(layout, ({ values }) => values, values => ({ values }), property);
}
exports.array = array;
class MapEntryLayout extends buffer_layout_1.Layout {
    constructor(keyLayout, valueLayout, property) {
        super(keyLayout.span + valueLayout.span, property);
        this.keyLayout = keyLayout;
        this.valueLayout = valueLayout;
    }
    decode(b, offset) {
        offset = offset || 0;
        const key = this.keyLayout.decode(b, offset);
        const value = this.valueLayout.decode(b, offset + this.keyLayout.getSpan(b, offset));
        return [key, value];
    }
    encode(src, b, offset) {
        offset = offset || 0;
        const keyBytes = this.keyLayout.encode(src[0], b, offset);
        const valueBytes = this.valueLayout.encode(src[1], b, offset + keyBytes);
        return keyBytes + valueBytes;
    }
    getSpan(b, offset) {
        return (this.keyLayout.getSpan(b, offset) + this.valueLayout.getSpan(b, offset));
    }
}
function map(keyLayout, valueLayout, property) {
    const length = buffer_layout_1.u32('length');
    const layout = buffer_layout_1.struct([
        length,
        buffer_layout_1.seq(new MapEntryLayout(keyLayout, valueLayout), buffer_layout_1.offset(length, -length.span), 'values'),
    ]);
    return new WrappedLayout(layout, ({ values }) => new Map(values), values => ({ values: Array.from(values.entries()) }), property);
}
exports.map = map;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1574:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.deleteNameRegistry = exports.transferNameOwnership = exports.updateNameRegistryData = exports.createNameRegistry = exports.HASH_PREFIX = exports.NAME_PROGRAM_ID = void 0;
const web3_js_1 = __webpack_require__(8155);
const instructions_1 = __webpack_require__(1917);
const state_1 = __webpack_require__(5192);
const utils_1 = __webpack_require__(3623);
const utils_2 = __webpack_require__(3623);
////////////////////////////////////////////////////////////
exports.NAME_PROGRAM_ID = new web3_js_1.PublicKey('namesLPneVptA9Z5rqUDD9tMTWEJwofgaYwp8cawRkX');
exports.HASH_PREFIX = 'SPL Name Service';
////////////////////////////////////////////////////////////
/**
 * Creates a name account with the given rent budget, allocated space, owner and class.
 *
 * @param connection The solana connection object to the RPC node
 * @param name The name of the new account
 * @param space The space in bytes allocated to the account
 * @param payerKey The allocation cost payer
 * @param nameOwner The pubkey to be set as owner of the new name account
 * @param lamports The budget to be set for the name account. If not specified, it'll be the minimum for rent exemption
 * @param nameClass The class of this new name
 * @param parentName The parent name of the new name. If specified its owner needs to sign
 * @returns
 */
async function createNameRegistry(connection, name, space, payerKey, nameOwner, lamports, nameClass, parentName) {
    const hashed_name = await utils_2.getHashedName(name);
    const nameAccountKey = await utils_2.getNameAccountKey(hashed_name, nameClass, parentName);
    const balance = lamports
        ? lamports
        : await connection.getMinimumBalanceForRentExemption(space);
    let nameParentOwner;
    if (parentName) {
        const parentAccount = await utils_2.getNameOwner(connection, parentName);
        nameParentOwner = parentAccount.owner;
    }
    const createNameInstr = instructions_1.createInstruction(exports.NAME_PROGRAM_ID, web3_js_1.SystemProgram.programId, nameAccountKey, nameOwner, payerKey, hashed_name, new utils_1.Numberu64(balance), new utils_2.Numberu32(space), nameClass, parentName, nameParentOwner);
    return createNameInstr;
}
exports.createNameRegistry = createNameRegistry;
/**
 * Overwrite the data of the given name registry.
 *
 * @param connection The solana connection object to the RPC node
 * @param name The name of the name registry to update
 * @param offset The offset to which the data should be written into the registry
 * @param input_data The data to be written
 * @param nameClass The class of this name, if it exsists
 * @param nameParent The parent name of this name, if it exists
 */
async function updateNameRegistryData(connection, name, offset, input_data, nameClass, nameParent) {
    const hashed_name = await utils_2.getHashedName(name);
    const nameAccountKey = await utils_2.getNameAccountKey(hashed_name, nameClass, nameParent);
    let signer;
    if (nameClass) {
        signer = nameClass;
    }
    else {
        signer = (await state_1.NameRegistryState.retrieve(connection, nameAccountKey))
            .owner;
    }
    const updateInstr = instructions_1.updateInstruction(exports.NAME_PROGRAM_ID, nameAccountKey, new utils_2.Numberu32(offset), input_data, signer);
    return updateInstr;
}
exports.updateNameRegistryData = updateNameRegistryData;
/**
 * Change the owner of a given name account.
 *
 * @param connection The solana connection object to the RPC node
 * @param name The name of the name account
 * @param newOwner The new owner to be set
 * @param curentNameOwner the current name Owner
 * @param nameClass The class of this name, if it exsists
 * @param nameParent The parent name of this name, if it exists
 * @returns
 */
async function transferNameOwnership(connection, name, newOwner, nameClass, nameParent) {
    const hashed_name = await utils_2.getHashedName(name);
    const nameAccountKey = await utils_2.getNameAccountKey(hashed_name, nameClass, nameParent);
    let curentNameOwner;
    if (nameClass) {
        curentNameOwner = nameClass;
    }
    else {
        curentNameOwner = (await state_1.NameRegistryState.retrieve(connection, nameAccountKey)).owner;
    }
    const transferInstr = instructions_1.transferInstruction(exports.NAME_PROGRAM_ID, nameAccountKey, newOwner, curentNameOwner, nameClass);
    return transferInstr;
}
exports.transferNameOwnership = transferNameOwnership;
/**
 * Delete the name account and transfer the rent to the target.
 *
 * @param connection The solana connection object to the RPC node
 * @param name The name of the name account
 * @param refundTargetKey The refund destination address
 * @param nameClass The class of this name, if it exsists
 * @param nameParent The parent name of this name, if it exists
 * @returns
 */
async function deleteNameRegistry(connection, name, refundTargetKey, nameClass, nameParent) {
    const hashed_name = await utils_2.getHashedName(name);
    const nameAccountKey = await utils_2.getNameAccountKey(hashed_name, nameClass, nameParent);
    let nameOwner;
    if (nameClass) {
        nameOwner = nameClass;
    }
    else {
        nameOwner = (await state_1.NameRegistryState.retrieve(connection, nameAccountKey))
            .owner;
    }
    const changeAuthoritiesInstr = instructions_1.deleteInstruction(exports.NAME_PROGRAM_ID, nameAccountKey, refundTargetKey, nameOwner);
    return changeAuthoritiesInstr;
}
exports.deleteNameRegistry = deleteNameRegistry;
//# sourceMappingURL=bindings.js.map

/***/ }),

/***/ 3509:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(1574), exports);
__exportStar(__webpack_require__(1917), exports);
__exportStar(__webpack_require__(5192), exports);
__exportStar(__webpack_require__(3623), exports);
__exportStar(__webpack_require__(2328), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1917:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(8764)["Buffer"];

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.deleteInstruction = exports.transferInstruction = exports.updateInstruction = exports.createInstruction = void 0;
const web3_js_1 = __webpack_require__(8155);
const utils_1 = __webpack_require__(3623);
function createInstruction(nameProgramId, systemProgramId, nameKey, nameOwnerKey, payerKey, hashed_name, lamports, space, nameClassKey, nameParent, nameParentOwner) {
    const buffers = [
        Buffer.from(Int8Array.from([0])),
        new utils_1.Numberu32(hashed_name.length).toBuffer(),
        hashed_name,
        lamports.toBuffer(),
        space.toBuffer(),
    ];
    const data = Buffer.concat(buffers);
    const keys = [
        {
            pubkey: systemProgramId,
            isSigner: false,
            isWritable: false,
        },
        {
            pubkey: payerKey,
            isSigner: true,
            isWritable: true,
        },
        {
            pubkey: nameKey,
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: nameOwnerKey,
            isSigner: false,
            isWritable: false,
        },
    ];
    if (nameClassKey) {
        keys.push({
            pubkey: nameClassKey,
            isSigner: true,
            isWritable: false,
        });
    }
    else {
        keys.push({
            pubkey: new web3_js_1.PublicKey(Buffer.alloc(32)),
            isSigner: false,
            isWritable: false,
        });
    }
    if (nameParent) {
        keys.push({
            pubkey: nameParent,
            isSigner: false,
            isWritable: false,
        });
    }
    else {
        keys.push({
            pubkey: new web3_js_1.PublicKey(Buffer.alloc(32)),
            isSigner: false,
            isWritable: false,
        });
    }
    if (nameParentOwner) {
        keys.push({
            pubkey: nameParentOwner,
            isSigner: true,
            isWritable: false,
        });
    }
    return new web3_js_1.TransactionInstruction({
        keys,
        programId: nameProgramId,
        data,
    });
}
exports.createInstruction = createInstruction;
function updateInstruction(nameProgramId, nameAccountKey, offset, input_data, nameUpdateSigner) {
    const buffers = [
        Buffer.from(Int8Array.from([1])),
        offset.toBuffer(),
        new utils_1.Numberu32(input_data.length).toBuffer(),
        input_data,
    ];
    const data = Buffer.concat(buffers);
    const keys = [
        {
            pubkey: nameAccountKey,
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: nameUpdateSigner,
            isSigner: true,
            isWritable: false,
        },
    ];
    return new web3_js_1.TransactionInstruction({
        keys,
        programId: nameProgramId,
        data,
    });
}
exports.updateInstruction = updateInstruction;
function transferInstruction(nameProgramId, nameAccountKey, newOwnerKey, currentNameOwnerKey, nameClassKey) {
    const buffers = [Buffer.from(Int8Array.from([2])), newOwnerKey.toBuffer()];
    const data = Buffer.concat(buffers);
    const keys = [
        {
            pubkey: nameAccountKey,
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: currentNameOwnerKey,
            isSigner: true,
            isWritable: false,
        },
    ];
    if (nameClassKey) {
        keys.push({
            pubkey: nameClassKey,
            isSigner: true,
            isWritable: false,
        });
    }
    return new web3_js_1.TransactionInstruction({
        keys,
        programId: nameProgramId,
        data,
    });
}
exports.transferInstruction = transferInstruction;
function deleteInstruction(nameProgramId, nameAccountKey, refundTargetKey, nameOwnerKey) {
    const buffers = [Buffer.from(Int8Array.from([3]))];
    const data = Buffer.concat(buffers);
    const keys = [
        {
            pubkey: nameAccountKey,
            isSigner: false,
            isWritable: true,
        },
        {
            pubkey: nameOwnerKey,
            isSigner: true,
            isWritable: false,
        },
        {
            pubkey: refundTargetKey,
            isSigner: false,
            isWritable: true,
        },
    ];
    return new web3_js_1.TransactionInstruction({
        keys,
        programId: nameProgramId,
        data,
    });
}
exports.deleteInstruction = deleteInstruction;
//# sourceMappingURL=instructions.js.map

/***/ }),

/***/ 5192:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NameRegistryState = void 0;
const web3_js_1 = __webpack_require__(8155);
const borsh_1 = __webpack_require__(5532);
class NameRegistryState {
    constructor(obj) {
        this.parentName = new web3_js_1.PublicKey(obj.parentName);
        this.owner = new web3_js_1.PublicKey(obj.owner);
        this.class = new web3_js_1.PublicKey(obj.class);
    }
    static async retrieve(connection, nameAccountKey) {
        var _a;
        let nameAccount = await connection.getAccountInfo(nameAccountKey, 'processed');
        if (!nameAccount) {
            throw new Error('Invalid name account provided');
        }
        let res = borsh_1.deserializeUnchecked(this.schema, NameRegistryState, nameAccount.data);
        res.data = (_a = nameAccount.data) === null || _a === void 0 ? void 0 : _a.slice(this.HEADER_LEN);
        return res;
    }
}
exports.NameRegistryState = NameRegistryState;
NameRegistryState.HEADER_LEN = 96;
NameRegistryState.schema = new Map([
    [
        NameRegistryState,
        {
            kind: 'struct',
            fields: [
                ['parentName', [32]],
                ['owner', [32]],
                ['class', [32]],
            ],
        },
    ],
]);
//# sourceMappingURL=state.js.map

/***/ }),

/***/ 2328:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(8764)["Buffer"];

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createReverseTwitterRegistry = exports.ReverseTwitterRegistryState = exports.getTwitterRegistryData = exports.getTwitterHandleandRegistryKeyViaFilters = exports.getHandleAndRegistryKey = exports.getTwitterRegistry = exports.getTwitterRegistryKey = exports.deleteTwitterRegistry = exports.changeVerifiedPubkey = exports.changeTwitterRegistryData = exports.createVerifiedTwitterRegistry = exports.TWITTER_ROOT_PARENT_REGISTRY_KEY = exports.TWITTER_VERIFICATION_AUTHORITY = void 0;
const web3_js_1 = __webpack_require__(8155);
const bindings_1 = __webpack_require__(1574);
const instructions_1 = __webpack_require__(1917);
const state_1 = __webpack_require__(5192);
const utils_1 = __webpack_require__(3623);
const borsh_1 = __webpack_require__(5532);
////////////////////////////////////////////////////
// Global Variables
exports.TWITTER_VERIFICATION_AUTHORITY = new web3_js_1.PublicKey('FvPH7PrVrLGKPfqaf3xJodFTjZriqrAXXLTVWEorTFBi');
// The address of the name registry that will be a parent to all twitter handle registries,
// it should be owned by the TWITTER_VERIFICATION_AUTHORITY and it's name is irrelevant
exports.TWITTER_ROOT_PARENT_REGISTRY_KEY = new web3_js_1.PublicKey('4YcexoW3r78zz16J2aqmukBLRwGq6rAvWzJpkYAXqebv');
////////////////////////////////////////////////////
// Bindings
// Signed by the authority, the payer and the verified pubkey
async function createVerifiedTwitterRegistry(connection, twitterHandle, verifiedPubkey, space, // The space that the user will have to write data into the verified registry
payerKey) {
    // Create user facing registry
    const hashedTwitterHandle = await utils_1.getHashedName(twitterHandle);
    const twitterHandleRegistryKey = await utils_1.getNameAccountKey(hashedTwitterHandle, undefined, exports.TWITTER_ROOT_PARENT_REGISTRY_KEY);
    let instructions = [
        instructions_1.createInstruction(bindings_1.NAME_PROGRAM_ID, web3_js_1.SystemProgram.programId, twitterHandleRegistryKey, verifiedPubkey, payerKey, hashedTwitterHandle, new utils_1.Numberu64(await connection.getMinimumBalanceForRentExemption(space)), new utils_1.Numberu32(space), undefined, exports.TWITTER_ROOT_PARENT_REGISTRY_KEY, exports.TWITTER_VERIFICATION_AUTHORITY // Twitter authority acts as owner of the parent for all user-facing registries
        ),
    ];
    instructions = instructions.concat(await createReverseTwitterRegistry(connection, twitterHandle, twitterHandleRegistryKey, verifiedPubkey, payerKey));
    return instructions;
}
exports.createVerifiedTwitterRegistry = createVerifiedTwitterRegistry;
// Overwrite the data that is written in the user facing registry
// Signed by the verified pubkey
async function changeTwitterRegistryData(twitterHandle, verifiedPubkey, offset, // The offset at which to write the input data into the NameRegistryData
input_data) {
    const hashedTwitterHandle = await utils_1.getHashedName(twitterHandle);
    const twitterHandleRegistryKey = await utils_1.getNameAccountKey(hashedTwitterHandle, undefined, exports.TWITTER_ROOT_PARENT_REGISTRY_KEY);
    const instructions = [
        instructions_1.updateInstruction(bindings_1.NAME_PROGRAM_ID, twitterHandleRegistryKey, new utils_1.Numberu32(offset), input_data, verifiedPubkey),
    ];
    return instructions;
}
exports.changeTwitterRegistryData = changeTwitterRegistryData;
// Change the verified pubkey for a given twitter handle
// Signed by the Authority, the verified pubkey and the payer
async function changeVerifiedPubkey(connection, twitterHandle, currentVerifiedPubkey, newVerifiedPubkey, payerKey) {
    const hashedTwitterHandle = await utils_1.getHashedName(twitterHandle);
    const twitterHandleRegistryKey = await utils_1.getNameAccountKey(hashedTwitterHandle, undefined, exports.TWITTER_ROOT_PARENT_REGISTRY_KEY);
    // Transfer the user-facing registry ownership
    let instructions = [
        instructions_1.transferInstruction(bindings_1.NAME_PROGRAM_ID, twitterHandleRegistryKey, newVerifiedPubkey, currentVerifiedPubkey, undefined),
    ];
    // Delete the current reverse registry
    const currentHashedVerifiedPubkey = await utils_1.getHashedName(currentVerifiedPubkey.toString());
    const currentReverseRegistryKey = await utils_1.getNameAccountKey(currentHashedVerifiedPubkey, exports.TWITTER_VERIFICATION_AUTHORITY, undefined);
    instructions.push(await bindings_1.deleteNameRegistry(connection, currentVerifiedPubkey.toString(), payerKey, exports.TWITTER_VERIFICATION_AUTHORITY, exports.TWITTER_ROOT_PARENT_REGISTRY_KEY));
    // Create the new reverse registry
    instructions = instructions.concat(await createReverseTwitterRegistry(connection, twitterHandle, twitterHandleRegistryKey, newVerifiedPubkey, payerKey));
    return instructions;
}
exports.changeVerifiedPubkey = changeVerifiedPubkey;
// Delete the verified registry for a given twitter handle
// Signed by the verified pubkey
async function deleteTwitterRegistry(twitterHandle, verifiedPubkey) {
    const hashedTwitterHandle = await utils_1.getHashedName(twitterHandle);
    const twitterHandleRegistryKey = await utils_1.getNameAccountKey(hashedTwitterHandle, undefined, exports.TWITTER_ROOT_PARENT_REGISTRY_KEY);
    const hashedVerifiedPubkey = await utils_1.getHashedName(verifiedPubkey.toString());
    const reverseRegistryKey = await utils_1.getNameAccountKey(hashedVerifiedPubkey, exports.TWITTER_VERIFICATION_AUTHORITY, exports.TWITTER_ROOT_PARENT_REGISTRY_KEY);
    const instructions = [
        // Delete the user facing registry
        instructions_1.deleteInstruction(bindings_1.NAME_PROGRAM_ID, twitterHandleRegistryKey, verifiedPubkey, verifiedPubkey),
        // Delete the reverse registry
        instructions_1.deleteInstruction(bindings_1.NAME_PROGRAM_ID, reverseRegistryKey, verifiedPubkey, verifiedPubkey),
    ];
    return instructions;
}
exports.deleteTwitterRegistry = deleteTwitterRegistry;
//////////////////////////////////////////
// Getter Functions
// Returns the key of the user-facing registry
async function getTwitterRegistryKey(twitter_handle) {
    const hashedTwitterHandle = await utils_1.getHashedName(twitter_handle);
    return await utils_1.getNameAccountKey(hashedTwitterHandle, undefined, exports.TWITTER_ROOT_PARENT_REGISTRY_KEY);
}
exports.getTwitterRegistryKey = getTwitterRegistryKey;
async function getTwitterRegistry(connection, twitter_handle) {
    const hashedTwitterHandle = await utils_1.getHashedName(twitter_handle);
    const twitterHandleRegistryKey = await utils_1.getNameAccountKey(hashedTwitterHandle, undefined, exports.TWITTER_ROOT_PARENT_REGISTRY_KEY);
    const registry = state_1.NameRegistryState.retrieve(connection, twitterHandleRegistryKey);
    return registry;
}
exports.getTwitterRegistry = getTwitterRegistry;
async function getHandleAndRegistryKey(connection, verifiedPubkey) {
    const hashedVerifiedPubkey = await utils_1.getHashedName(verifiedPubkey.toString());
    const reverseRegistryKey = await utils_1.getNameAccountKey(hashedVerifiedPubkey, exports.TWITTER_VERIFICATION_AUTHORITY, exports.TWITTER_ROOT_PARENT_REGISTRY_KEY);
    let reverseRegistryState = await ReverseTwitterRegistryState.retrieve(connection, reverseRegistryKey);
    return [
        reverseRegistryState.twitterHandle,
        new web3_js_1.PublicKey(reverseRegistryState.twitterRegistryKey),
    ];
}
exports.getHandleAndRegistryKey = getHandleAndRegistryKey;
// Uses the RPC node filtering feature, execution speed may vary
async function getTwitterHandleandRegistryKeyViaFilters(connection, verifiedPubkey) {
    const filters = [
        {
            memcmp: {
                offset: 0,
                bytes: exports.TWITTER_ROOT_PARENT_REGISTRY_KEY.toBase58(),
            },
        },
        {
            memcmp: {
                offset: 32,
                bytes: verifiedPubkey.toBase58(),
            },
        },
        {
            memcmp: {
                offset: 64,
                bytes: exports.TWITTER_VERIFICATION_AUTHORITY.toBase58(),
            },
        },
    ];
    const filteredAccounts = await utils_1.getFilteredProgramAccounts(connection, bindings_1.NAME_PROGRAM_ID, filters);
    for (const f of filteredAccounts) {
        if (f.accountInfo.data.length > state_1.NameRegistryState.HEADER_LEN + 32) {
            let data = f.accountInfo.data.slice(state_1.NameRegistryState.HEADER_LEN);
            let state = borsh_1.deserialize(ReverseTwitterRegistryState.schema, ReverseTwitterRegistryState, data);
            return [state.twitterHandle, new web3_js_1.PublicKey(state.twitterRegistryKey)];
        }
    }
    throw new Error('Registry not found.');
}
exports.getTwitterHandleandRegistryKeyViaFilters = getTwitterHandleandRegistryKeyViaFilters;
// Uses the RPC node filtering feature, execution speed may vary
// Does not give you the handle, but is an alternative to getHandlesAndKeysFromVerifiedPubkey + getTwitterRegistry to get the data
async function getTwitterRegistryData(connection, verifiedPubkey) {
    const filters = [
        {
            memcmp: {
                offset: 0,
                bytes: exports.TWITTER_ROOT_PARENT_REGISTRY_KEY.toBytes(),
            },
        },
        {
            memcmp: {
                offset: 32,
                bytes: verifiedPubkey.toBytes(),
            },
        },
        {
            memcmp: {
                offset: 64,
                bytes: new web3_js_1.PublicKey(Buffer.alloc(32, 0)).toBase58(),
            },
        },
    ];
    const filteredAccounts = await utils_1.getFilteredProgramAccounts(connection, bindings_1.NAME_PROGRAM_ID, filters);
    if (filteredAccounts.length > 1) {
        throw new Error('Found more than one registry.');
    }
    return filteredAccounts[0].accountInfo.data.slice(state_1.NameRegistryState.HEADER_LEN);
}
exports.getTwitterRegistryData = getTwitterRegistryData;
//////////////////////////////////////////////
// Utils
class ReverseTwitterRegistryState {
    constructor(obj) {
        this.twitterRegistryKey = obj.twitterRegistryKey;
        this.twitterHandle = obj.twitterHandle;
    }
    static async retrieve(connection, reverseTwitterAccountKey) {
        let reverseTwitterAccount = await connection.getAccountInfo(reverseTwitterAccountKey, 'processed');
        if (!reverseTwitterAccount) {
            throw new Error('Invalid reverse Twitter account provided');
        }
        let res = borsh_1.deserializeUnchecked(this.schema, ReverseTwitterRegistryState, reverseTwitterAccount.data.slice(state_1.NameRegistryState.HEADER_LEN));
        return res;
    }
}
exports.ReverseTwitterRegistryState = ReverseTwitterRegistryState;
ReverseTwitterRegistryState.schema = new Map([
    [
        ReverseTwitterRegistryState,
        {
            kind: 'struct',
            fields: [
                ['twitterRegistryKey', [32]],
                ['twitterHandle', 'string'],
            ],
        },
    ],
]);
async function createReverseTwitterRegistry(connection, twitterHandle, twitterRegistryKey, verifiedPubkey, payerKey) {
    // Create the reverse lookup registry
    const hashedVerifiedPubkey = await utils_1.getHashedName(verifiedPubkey.toString());
    const reverseRegistryKey = await utils_1.getNameAccountKey(hashedVerifiedPubkey, exports.TWITTER_VERIFICATION_AUTHORITY, exports.TWITTER_ROOT_PARENT_REGISTRY_KEY);
    let reverseTwitterRegistryStateBuff = borsh_1.serialize(ReverseTwitterRegistryState.schema, new ReverseTwitterRegistryState({
        twitterRegistryKey: twitterRegistryKey.toBytes(),
        twitterHandle,
    }));
    return [
        instructions_1.createInstruction(bindings_1.NAME_PROGRAM_ID, web3_js_1.SystemProgram.programId, reverseRegistryKey, verifiedPubkey, payerKey, hashedVerifiedPubkey, new utils_1.Numberu64(await connection.getMinimumBalanceForRentExemption(reverseTwitterRegistryStateBuff.length)), new utils_1.Numberu32(reverseTwitterRegistryStateBuff.length), exports.TWITTER_VERIFICATION_AUTHORITY, // Twitter authority acts as class for all reverse-lookup registries
        exports.TWITTER_ROOT_PARENT_REGISTRY_KEY, // Reverse registries are also children of the root
        exports.TWITTER_VERIFICATION_AUTHORITY),
        instructions_1.updateInstruction(bindings_1.NAME_PROGRAM_ID, reverseRegistryKey, new utils_1.Numberu32(0), Buffer.from(reverseTwitterRegistryStateBuff), exports.TWITTER_VERIFICATION_AUTHORITY),
    ];
}
exports.createReverseTwitterRegistry = createReverseTwitterRegistry;
//# sourceMappingURL=twitter.js.map

/***/ }),

/***/ 3623:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(8764)["Buffer"];

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getFilteredProgramAccounts = exports.getNameOwner = exports.getNameAccountKey = exports.getHashedName = exports.signAndSendTransactionInstructions = exports.Numberu64 = exports.Numberu32 = void 0;
const assert_1 = __importDefault(__webpack_require__(7596));
const crypto_1 = __webpack_require__(2474);
const web3_js_1 = __webpack_require__(8155);
const bn_js_1 = __importDefault(__webpack_require__(3550));
const bindings_1 = __webpack_require__(1574);
const state_1 = __webpack_require__(5192);
class Numberu32 extends bn_js_1.default {
    /**
     * Convert to Buffer representation
     */
    toBuffer() {
        const a = super.toArray().reverse();
        const b = Buffer.from(a);
        if (b.length === 4) {
            return b;
        }
        assert_1.default(b.length < 4, 'Numberu32 too large');
        const zeroPad = Buffer.alloc(4);
        b.copy(zeroPad);
        return zeroPad;
    }
    /**
     * Construct a Numberu64 from Buffer representation
     */
    static fromBuffer(buffer) {
        assert_1.default(buffer.length === 4, `Invalid buffer length: ${buffer.length}`);
        return new bn_js_1.default([...buffer]
            .reverse()
            .map((i) => `00${i.toString(16)}`.slice(-2))
            .join(''), 16);
    }
}
exports.Numberu32 = Numberu32;
class Numberu64 extends bn_js_1.default {
    /**
     * Convert to Buffer representation
     */
    toBuffer() {
        const a = super.toArray().reverse();
        const b = Buffer.from(a);
        if (b.length === 8) {
            return b;
        }
        assert_1.default(b.length < 8, 'Numberu64 too large');
        const zeroPad = Buffer.alloc(8);
        b.copy(zeroPad);
        return zeroPad;
    }
    /**
     * Construct a Numberu64 from Buffer representation
     */
    static fromBuffer(buffer) {
        assert_1.default(buffer.length === 8, `Invalid buffer length: ${buffer.length}`);
        return new bn_js_1.default([...buffer]
            .reverse()
            .map((i) => `00${i.toString(16)}`.slice(-2))
            .join(''), 16);
    }
}
exports.Numberu64 = Numberu64;
const signAndSendTransactionInstructions = async (
// sign and send transaction
connection, signers, feePayer, txInstructions) => {
    const tx = new web3_js_1.Transaction();
    tx.feePayer = feePayer.publicKey;
    signers.push(feePayer);
    tx.add(...txInstructions);
    return await connection.sendTransaction(tx, signers);
};
exports.signAndSendTransactionInstructions = signAndSendTransactionInstructions;
async function getHashedName(name) {
    const input = bindings_1.HASH_PREFIX + name;
    const buffer = crypto_1.createHash('sha256').update(input, 'utf8').digest();
    return buffer;
}
exports.getHashedName = getHashedName;
async function getNameAccountKey(hashed_name, nameClass, nameParent) {
    const seeds = [hashed_name];
    if (nameClass) {
        seeds.push(nameClass.toBuffer());
    }
    else {
        seeds.push(Buffer.alloc(32));
    }
    if (nameParent) {
        seeds.push(nameParent.toBuffer());
    }
    else {
        seeds.push(Buffer.alloc(32));
    }
    const [nameAccountKey] = await web3_js_1.PublicKey.findProgramAddress(seeds, bindings_1.NAME_PROGRAM_ID);
    return nameAccountKey;
}
exports.getNameAccountKey = getNameAccountKey;
async function getNameOwner(connection, nameAccountKey) {
    const nameAccount = await connection.getAccountInfo(nameAccountKey);
    if (!nameAccount) {
        throw new Error('Unable to find the given account.');
    }
    return state_1.NameRegistryState.retrieve(connection, nameAccountKey);
}
exports.getNameOwner = getNameOwner;
//Taken from Serum
async function getFilteredProgramAccounts(connection, programId, filters) {
    const resp = await connection.getProgramAccounts(programId, {
        commitment: connection.commitment,
        filters,
        encoding: 'base64',
    });
    return resp.map(({ pubkey, account: { data, executable, owner, lamports } }) => ({
        publicKey: pubkey,
        accountInfo: {
            data: data,
            executable,
            owner: owner,
            lamports,
        },
    }));
}
exports.getFilteredProgramAccounts = getFilteredProgramAccounts;
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 698:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(8764)["Buffer"];
/* The MIT License (MIT)
 *
 * Copyright 2015-2018 Peter A. Bigot
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/**
 * Support for translating between Buffer instances and JavaScript
 * native types.
 *
 * {@link module:Layout~Layout|Layout} is the basis of a class
 * hierarchy that associates property names with sequences of encoded
 * bytes.
 *
 * Layouts are supported for these scalar (numeric) types:
 * * {@link module:Layout~UInt|Unsigned integers in little-endian
 *   format} with {@link module:Layout.u8|8-bit}, {@link
 *   module:Layout.u16|16-bit}, {@link module:Layout.u24|24-bit},
 *   {@link module:Layout.u32|32-bit}, {@link
 *   module:Layout.u40|40-bit}, and {@link module:Layout.u48|48-bit}
 *   representation ranges;
 * * {@link module:Layout~UIntBE|Unsigned integers in big-endian
 *   format} with {@link module:Layout.u16be|16-bit}, {@link
 *   module:Layout.u24be|24-bit}, {@link module:Layout.u32be|32-bit},
 *   {@link module:Layout.u40be|40-bit}, and {@link
 *   module:Layout.u48be|48-bit} representation ranges;
 * * {@link module:Layout~Int|Signed integers in little-endian
 *   format} with {@link module:Layout.s8|8-bit}, {@link
 *   module:Layout.s16|16-bit}, {@link module:Layout.s24|24-bit},
 *   {@link module:Layout.s32|32-bit}, {@link
 *   module:Layout.s40|40-bit}, and {@link module:Layout.s48|48-bit}
 *   representation ranges;
 * * {@link module:Layout~IntBE|Signed integers in big-endian format}
 *   with {@link module:Layout.s16be|16-bit}, {@link
 *   module:Layout.s24be|24-bit}, {@link module:Layout.s32be|32-bit},
 *   {@link module:Layout.s40be|40-bit}, and {@link
 *   module:Layout.s48be|48-bit} representation ranges;
 * * 64-bit integral values that decode to an exact (if magnitude is
 *   less than 2^53) or nearby integral Number in {@link
 *   module:Layout.nu64|unsigned little-endian}, {@link
 *   module:Layout.nu64be|unsigned big-endian}, {@link
 *   module:Layout.ns64|signed little-endian}, and {@link
 *   module:Layout.ns64be|unsigned big-endian} encodings;
 * * 32-bit floating point values with {@link
 *   module:Layout.f32|little-endian} and {@link
 *   module:Layout.f32be|big-endian} representations;
 * * 64-bit floating point values with {@link
 *   module:Layout.f64|little-endian} and {@link
 *   module:Layout.f64be|big-endian} representations;
 * * {@link module:Layout.const|Constants} that take no space in the
 *   encoded expression.
 *
 * and for these aggregate types:
 * * {@link module:Layout.seq|Sequence}s of instances of a {@link
 *   module:Layout~Layout|Layout}, with JavaScript representation as
 *   an Array and constant or data-dependent {@link
 *   module:Layout~Sequence#count|length};
 * * {@link module:Layout.struct|Structure}s that aggregate a
 *   heterogeneous sequence of {@link module:Layout~Layout|Layout}
 *   instances, with JavaScript representation as an Object;
 * * {@link module:Layout.union|Union}s that support multiple {@link
 *   module:Layout~VariantLayout|variant layouts} over a fixed
 *   (padded) or variable (not padded) span of bytes, using an
 *   unsigned integer at the start of the data or a separate {@link
 *   module:Layout.unionLayoutDiscriminator|layout element} to
 *   determine which layout to use when interpreting the buffer
 *   contents;
 * * {@link module:Layout.bits|BitStructure}s that contain a sequence
 *   of individual {@link
 *   module:Layout~BitStructure#addField|BitField}s packed into an 8,
 *   16, 24, or 32-bit unsigned integer starting at the least- or
 *   most-significant bit;
 * * {@link module:Layout.cstr|C strings} of varying length;
 * * {@link module:Layout.blob|Blobs} of fixed- or variable-{@link
 *   module:Layout~Blob#length|length} raw data.
 *
 * All {@link module:Layout~Layout|Layout} instances are immutable
 * after construction, to prevent internal state from becoming
 * inconsistent.
 *
 * @local Layout
 * @local ExternalLayout
 * @local GreedyCount
 * @local OffsetLayout
 * @local UInt
 * @local UIntBE
 * @local Int
 * @local IntBE
 * @local NearUInt64
 * @local NearUInt64BE
 * @local NearInt64
 * @local NearInt64BE
 * @local Float
 * @local FloatBE
 * @local Double
 * @local DoubleBE
 * @local Sequence
 * @local Structure
 * @local UnionDiscriminator
 * @local UnionLayoutDiscriminator
 * @local Union
 * @local VariantLayout
 * @local BitStructure
 * @local BitField
 * @local Boolean
 * @local Blob
 * @local CString
 * @local Constant
 * @local bindConstructorLayout
 * @module Layout
 * @license MIT
 * @author Peter A. Bigot
 * @see {@link https://github.com/pabigot/buffer-layout|buffer-layout on GitHub}
 */



/**
 * Base class for layout objects.
 *
 * **NOTE** This is an abstract base class; you can create instances
 * if it amuses you, but they won't support the {@link
 * Layout#encode|encode} or {@link Layout#decode|decode} functions.
 *
 * @param {Number} span - Initializer for {@link Layout#span|span}.  The
 * parameter must be an integer; a negative value signifies that the
 * span is {@link Layout#getSpan|value-specific}.
 *
 * @param {string} [property] - Initializer for {@link
 * Layout#property|property}.
 *
 * @abstract
 */
class Layout {
  constructor(span, property) {
    if (!Number.isInteger(span)) {
      throw new TypeError('span must be an integer');
    }

    /** The span of the layout in bytes.
     *
     * Positive values are generally expected.
     *
     * Zero will only appear in {@link Constant}s and in {@link
     * Sequence}s where the {@link Sequence#count|count} is zero.
     *
     * A negative value indicates that the span is value-specific, and
     * must be obtained using {@link Layout#getSpan|getSpan}. */
    this.span = span;

    /** The property name used when this layout is represented in an
     * Object.
     *
     * Used only for layouts that {@link Layout#decode|decode} to Object
     * instances.  If left undefined the span of the unnamed layout will
     * be treated as padding: it will not be mutated by {@link
     * Layout#encode|encode} nor represented as a property in the
     * decoded Object. */
    this.property = property;
  }

  /** Function to create an Object into which decoded properties will
   * be written.
   *
   * Used only for layouts that {@link Layout#decode|decode} to Object
   * instances, which means:
   * * {@link Structure}
   * * {@link Union}
   * * {@link VariantLayout}
   * * {@link BitStructure}
   *
   * If left undefined the JavaScript representation of these layouts
   * will be Object instances.
   *
   * See {@link bindConstructorLayout}.
   */
  makeDestinationObject() {
    return {};
  }

  /**
   * Decode from a Buffer into an JavaScript value.
   *
   * @param {Buffer} b - the buffer from which encoded data is read.
   *
   * @param {Number} [offset] - the offset at which the encoded data
   * starts.  If absent a zero offset is inferred.
   *
   * @returns {(Number|Array|Object)} - the value of the decoded data.
   *
   * @abstract
   */
  decode(b, offset) {
    throw new Error('Layout is abstract');
  }

  /**
   * Encode a JavaScript value into a Buffer.
   *
   * @param {(Number|Array|Object)} src - the value to be encoded into
   * the buffer.  The type accepted depends on the (sub-)type of {@link
   * Layout}.
   *
   * @param {Buffer} b - the buffer into which encoded data will be
   * written.
   *
   * @param {Number} [offset] - the offset at which the encoded data
   * starts.  If absent a zero offset is inferred.
   *
   * @returns {Number} - the number of bytes encoded, including the
   * space skipped for internal padding, but excluding data such as
   * {@link Sequence#count|lengths} when stored {@link
   * ExternalLayout|externally}.  This is the adjustment to `offset`
   * producing the offset where data for the next layout would be
   * written.
   *
   * @abstract
   */
  encode(src, b, offset) {
    throw new Error('Layout is abstract');
  }

  /**
   * Calculate the span of a specific instance of a layout.
   *
   * @param {Buffer} b - the buffer that contains an encoded instance.
   *
   * @param {Number} [offset] - the offset at which the encoded instance
   * starts.  If absent a zero offset is inferred.
   *
   * @return {Number} - the number of bytes covered by the layout
   * instance.  If this method is not overridden in a subclass the
   * definition-time constant {@link Layout#span|span} will be
   * returned.
   *
   * @throws {RangeError} - if the length of the value cannot be
   * determined.
   */
  getSpan(b, offset) {
    if (0 > this.span) {
      throw new RangeError('indeterminate span');
    }
    return this.span;
  }

  /**
   * Replicate the layout using a new property.
   *
   * This function must be used to get a structurally-equivalent layout
   * with a different name since all {@link Layout} instances are
   * immutable.
   *
   * **NOTE** This is a shallow copy.  All fields except {@link
   * Layout#property|property} are strictly equal to the origin layout.
   *
   * @param {String} property - the value for {@link
   * Layout#property|property} in the replica.
   *
   * @returns {Layout} - the copy with {@link Layout#property|property}
   * set to `property`.
   */
  replicate(property) {
    const rv = Object.create(this.constructor.prototype);
    Object.assign(rv, this);
    rv.property = property;
    return rv;
  }

  /**
   * Create an object from layout properties and an array of values.
   *
   * **NOTE** This function returns `undefined` if invoked on a layout
   * that does not return its value as an Object.  Objects are
   * returned for things that are a {@link Structure}, which includes
   * {@link VariantLayout|variant layouts} if they are structures, and
   * excludes {@link Union}s.  If you want this feature for a union
   * you must use {@link Union.getVariant|getVariant} to select the
   * desired layout.
   *
   * @param {Array} values - an array of values that correspond to the
   * default order for properties.  As with {@link Layout#decode|decode}
   * layout elements that have no property name are skipped when
   * iterating over the array values.  Only the top-level properties are
   * assigned; arguments are not assigned to properties of contained
   * layouts.  Any unused values are ignored.
   *
   * @return {(Object|undefined)}
   */
  fromArray(values) {
    return undefined;
  }
}
exports.Layout = Layout;

/* Provide text that carries a name (such as for a function that will
 * be throwing an error) annotated with the property of a given layout
 * (such as one for which the value was unacceptable).
 *
 * @ignore */
function nameWithProperty(name, lo) {
  if (lo.property) {
    return name + '[' + lo.property + ']';
  }
  return name;
}
exports.nameWithProperty = nameWithProperty;

/**
 * Augment a class so that instances can be encoded/decoded using a
 * given layout.
 *
 * Calling this function couples `Class` with `layout` in several ways:
 *
 * * `Class.layout_` becomes a static member property equal to `layout`;
 * * `layout.boundConstructor_` becomes a static member property equal
 *    to `Class`;
 * * The {@link Layout#makeDestinationObject|makeDestinationObject()}
 *   property of `layout` is set to a function that returns a `new
 *   Class()`;
 * * `Class.decode(b, offset)` becomes a static member function that
 *   delegates to {@link Layout#decode|layout.decode}.  The
 *   synthesized function may be captured and extended.
 * * `Class.prototype.encode(b, offset)` provides an instance member
 *   function that delegates to {@link Layout#encode|layout.encode}
 *   with `src` set to `this`.  The synthesized function may be
 *   captured and extended, but when the extension is invoked `this`
 *   must be explicitly bound to the instance.
 *
 * @param {class} Class - a JavaScript class with a nullary
 * constructor.
 *
 * @param {Layout} layout - the {@link Layout} instance used to encode
 * instances of `Class`.
 */
function bindConstructorLayout(Class, layout) {
  if ('function' !== typeof Class) {
    throw new TypeError('Class must be constructor');
  }
  if (Class.hasOwnProperty('layout_')) {
    throw new Error('Class is already bound to a layout');
  }
  if (!(layout && (layout instanceof Layout))) {
    throw new TypeError('layout must be a Layout');
  }
  if (layout.hasOwnProperty('boundConstructor_')) {
    throw new Error('layout is already bound to a constructor');
  }
  Class.layout_ = layout;
  layout.boundConstructor_ = Class;
  layout.makeDestinationObject = (() => new Class());
  Object.defineProperty(Class.prototype, 'encode', {
    value: function(b, offset) {
      return layout.encode(this, b, offset);
    },
    writable: true,
  });
  Object.defineProperty(Class, 'decode', {
    value: function(b, offset) {
      return layout.decode(b, offset);
    },
    writable: true,
  });
}
exports.bindConstructorLayout = bindConstructorLayout;

/**
 * An object that behaves like a layout but does not consume space
 * within its containing layout.
 *
 * This is primarily used to obtain metadata about a member, such as a
 * {@link OffsetLayout} that can provide data about a {@link
 * Layout#getSpan|value-specific span}.
 *
 * **NOTE** This is an abstract base class; you can create instances
 * if it amuses you, but they won't support {@link
 * ExternalLayout#isCount|isCount} or other {@link Layout} functions.
 *
 * @param {Number} span - initializer for {@link Layout#span|span}.
 * The parameter can range from 1 through 6.
 *
 * @param {string} [property] - initializer for {@link
 * Layout#property|property}.
 *
 * @abstract
 * @augments {Layout}
 */
class ExternalLayout extends Layout {
  /**
   * Return `true` iff the external layout decodes to an unsigned
   * integer layout.
   *
   * In that case it can be used as the source of {@link
   * Sequence#count|Sequence counts}, {@link Blob#length|Blob lengths},
   * or as {@link UnionLayoutDiscriminator#layout|external union
   * discriminators}.
   *
   * @abstract
   */
  isCount() {
    throw new Error('ExternalLayout is abstract');
  }
}

/**
 * An {@link ExternalLayout} that determines its {@link
 * Layout#decode|value} based on offset into and length of the buffer
 * on which it is invoked.
 *
 * *Factory*: {@link module:Layout.greedy|greedy}
 *
 * @param {Number} [elementSpan] - initializer for {@link
 * GreedyCount#elementSpan|elementSpan}.
 *
 * @param {string} [property] - initializer for {@link
 * Layout#property|property}.
 *
 * @augments {ExternalLayout}
 */
class GreedyCount extends ExternalLayout {
  constructor(elementSpan, property) {
    if (undefined === elementSpan) {
      elementSpan = 1;
    }
    if ((!Number.isInteger(elementSpan)) || (0 >= elementSpan)) {
      throw new TypeError('elementSpan must be a (positive) integer');
    }
    super(-1, property);

    /** The layout for individual elements of the sequence.  The value
     * must be a positive integer.  If not provided, the value will be
     * 1. */
    this.elementSpan = elementSpan;
  }

  /** @override */
  isCount() {
    return true;
  }

  /** @override */
  decode(b, offset) {
    if (undefined === offset) {
      offset = 0;
    }
    const rem = b.length - offset;
    return Math.floor(rem / this.elementSpan);
  }

  /** @override */
  encode(src, b, offset) {
    return 0;
  }
}

/**
 * An {@link ExternalLayout} that supports accessing a {@link Layout}
 * at a fixed offset from the start of another Layout.  The offset may
 * be before, within, or after the base layout.
 *
 * *Factory*: {@link module:Layout.offset|offset}
 *
 * @param {Layout} layout - initializer for {@link
 * OffsetLayout#layout|layout}, modulo `property`.
 *
 * @param {Number} [offset] - Initializes {@link
 * OffsetLayout#offset|offset}.  Defaults to zero.
 *
 * @param {string} [property] - Optional new property name for a
 * {@link Layout#replicate| replica} of `layout` to be used as {@link
 * OffsetLayout#layout|layout}.  If not provided the `layout` is used
 * unchanged.
 *
 * @augments {Layout}
 */
class OffsetLayout extends ExternalLayout {
  constructor(layout, offset, property) {
    if (!(layout instanceof Layout)) {
      throw new TypeError('layout must be a Layout');
    }

    if (undefined === offset) {
      offset = 0;
    } else if (!Number.isInteger(offset)) {
      throw new TypeError('offset must be integer or undefined');
    }

    super(layout.span, property || layout.property);

    /** The subordinated layout. */
    this.layout = layout;

    /** The location of {@link OffsetLayout#layout} relative to the
     * start of another layout.
     *
     * The value may be positive or negative, but an error will thrown
     * if at the point of use it goes outside the span of the Buffer
     * being accessed.  */
    this.offset = offset;
  }

  /** @override */
  isCount() {
    return ((this.layout instanceof UInt)
            || (this.layout instanceof UIntBE));
  }

  /** @override */
  decode(b, offset) {
    if (undefined === offset) {
      offset = 0;
    }
    return this.layout.decode(b, offset + this.offset);
  }

  /** @override */
  encode(src, b, offset) {
    if (undefined === offset) {
      offset = 0;
    }
    return this.layout.encode(src, b, offset + this.offset);
  }
}

/**
 * Represent an unsigned integer in little-endian format.
 *
 * *Factory*: {@link module:Layout.u8|u8}, {@link
 *  module:Layout.u16|u16}, {@link module:Layout.u24|u24}, {@link
 *  module:Layout.u32|u32}, {@link module:Layout.u40|u40}, {@link
 *  module:Layout.u48|u48}
 *
 * @param {Number} span - initializer for {@link Layout#span|span}.
 * The parameter can range from 1 through 6.
 *
 * @param {string} [property] - initializer for {@link
 * Layout#property|property}.
 *
 * @augments {Layout}
 */
class UInt extends Layout {
  constructor(span, property) {
    super(span, property);
    if (6 < this.span) {
      throw new RangeError('span must not exceed 6 bytes');
    }
  }

  /** @override */
  decode(b, offset) {
    if (undefined === offset) {
      offset = 0;
    }
    return b.readUIntLE(offset, this.span);
  }

  /** @override */
  encode(src, b, offset) {
    if (undefined === offset) {
      offset = 0;
    }
    b.writeUIntLE(src, offset, this.span);
    return this.span;
  }
}

/**
 * Represent an unsigned integer in big-endian format.
 *
 * *Factory*: {@link module:Layout.u8be|u8be}, {@link
 * module:Layout.u16be|u16be}, {@link module:Layout.u24be|u24be},
 * {@link module:Layout.u32be|u32be}, {@link
 * module:Layout.u40be|u40be}, {@link module:Layout.u48be|u48be}
 *
 * @param {Number} span - initializer for {@link Layout#span|span}.
 * The parameter can range from 1 through 6.
 *
 * @param {string} [property] - initializer for {@link
 * Layout#property|property}.
 *
 * @augments {Layout}
 */
class UIntBE extends Layout {
  constructor(span, property) {
    super( span, property);
    if (6 < this.span) {
      throw new RangeError('span must not exceed 6 bytes');
    }
  }

  /** @override */
  decode(b, offset) {
    if (undefined === offset) {
      offset = 0;
    }
    return b.readUIntBE(offset, this.span);
  }

  /** @override */
  encode(src, b, offset) {
    if (undefined === offset) {
      offset = 0;
    }
    b.writeUIntBE(src, offset, this.span);
    return this.span;
  }
}

/**
 * Represent a signed integer in little-endian format.
 *
 * *Factory*: {@link module:Layout.s8|s8}, {@link
 *  module:Layout.s16|s16}, {@link module:Layout.s24|s24}, {@link
 *  module:Layout.s32|s32}, {@link module:Layout.s40|s40}, {@link
 *  module:Layout.s48|s48}
 *
 * @param {Number} span - initializer for {@link Layout#span|span}.
 * The parameter can range from 1 through 6.
 *
 * @param {string} [property] - initializer for {@link
 * Layout#property|property}.
 *
 * @augments {Layout}
 */
class Int extends Layout {
  constructor(span, property) {
    super(span, property);
    if (6 < this.span) {
      throw new RangeError('span must not exceed 6 bytes');
    }
  }

  /** @override */
  decode(b, offset) {
    if (undefined === offset) {
      offset = 0;
    }
    return b.readIntLE(offset, this.span);
  }

  /** @override */
  encode(src, b, offset) {
    if (undefined === offset) {
      offset = 0;
    }
    b.writeIntLE(src, offset, this.span);
    return this.span;
  }
}

/**
 * Represent a signed integer in big-endian format.
 *
 * *Factory*: {@link module:Layout.s8be|s8be}, {@link
 * module:Layout.s16be|s16be}, {@link module:Layout.s24be|s24be},
 * {@link module:Layout.s32be|s32be}, {@link
 * module:Layout.s40be|s40be}, {@link module:Layout.s48be|s48be}
 *
 * @param {Number} span - initializer for {@link Layout#span|span}.
 * The parameter can range from 1 through 6.
 *
 * @param {string} [property] - initializer for {@link
 * Layout#property|property}.
 *
 * @augments {Layout}
 */
class IntBE extends Layout {
  constructor(span, property) {
    super(span, property);
    if (6 < this.span) {
      throw new RangeError('span must not exceed 6 bytes');
    }
  }

  /** @override */
  decode(b, offset) {
    if (undefined === offset) {
      offset = 0;
    }
    return b.readIntBE(offset, this.span);
  }

  /** @override */
  encode(src, b, offset) {
    if (undefined === offset) {
      offset = 0;
    }
    b.writeIntBE(src, offset, this.span);
    return this.span;
  }
}

const V2E32 = Math.pow(2, 32);

/* True modulus high and low 32-bit words, where low word is always
 * non-negative. */
function divmodInt64(src) {
  const hi32 = Math.floor(src / V2E32);
  const lo32 = src - (hi32 * V2E32);
  return {hi32, lo32};
}
/* Reconstruct Number from quotient and non-negative remainder */
function roundedInt64(hi32, lo32) {
  return hi32 * V2E32 + lo32;
}

/**
 * Represent an unsigned 64-bit integer in little-endian format when
 * encoded and as a near integral JavaScript Number when decoded.
 *
 * *Factory*: {@link module:Layout.nu64|nu64}
 *
 * **NOTE** Values with magnitude greater than 2^52 may not decode to
 * the exact value of the encoded representation.
 *
 * @augments {Layout}
 */
class NearUInt64 extends Layout {
  constructor(property) {
    super(8, property);
  }

  /** @override */
  decode(b, offset) {
    if (undefined === offset) {
      offset = 0;
    }
    const lo32 = b.readUInt32LE(offset);
    const hi32 = b.readUInt32LE(offset + 4);
    return roundedInt64(hi32, lo32);
  }

  /** @override */
  encode(src, b, offset) {
    if (undefined === offset) {
      offset = 0;
    }
    const split = divmodInt64(src);
    b.writeUInt32LE(split.lo32, offset);
    b.writeUInt32LE(split.hi32, offset + 4);
    return 8;
  }
}

/**
 * Represent an unsigned 64-bit integer in big-endian format when
 * encoded and as a near integral JavaScript Number when decoded.
 *
 * *Factory*: {@link module:Layout.nu64be|nu64be}
 *
 * **NOTE** Values with magnitude greater than 2^52 may not decode to
 * the exact value of the encoded representation.
 *
 * @augments {Layout}
 */
class NearUInt64BE extends Layout {
  constructor(property) {
    super(8, property);
  }

  /** @override */
  decode(b, offset) {
    if (undefined === offset) {
      offset = 0;
    }
    const hi32 = b.readUInt32BE(offset);
    const lo32 = b.readUInt32BE(offset + 4);
    return roundedInt64(hi32, lo32);
  }

  /** @override */
  encode(src, b, offset) {
    if (undefined === offset) {
      offset = 0;
    }
    const split = divmodInt64(src);
    b.writeUInt32BE(split.hi32, offset);
    b.writeUInt32BE(split.lo32, offset + 4);
    return 8;
  }
}

/**
 * Represent a signed 64-bit integer in little-endian format when
 * encoded and as a near integral JavaScript Number when decoded.
 *
 * *Factory*: {@link module:Layout.ns64|ns64}
 *
 * **NOTE** Values with magnitude greater than 2^52 may not decode to
 * the exact value of the encoded representation.
 *
 * @augments {Layout}
 */
class NearInt64 extends Layout {
  constructor(property) {
    super(8, property);
  }

  /** @override */
  decode(b, offset) {
    if (undefined === offset) {
      offset = 0;
    }
    const lo32 = b.readUInt32LE(offset);
    const hi32 = b.readInt32LE(offset + 4);
    return roundedInt64(hi32, lo32);
  }

  /** @override */
  encode(src, b, offset) {
    if (undefined === offset) {
      offset = 0;
    }
    const split = divmodInt64(src);
    b.writeUInt32LE(split.lo32, offset);
    b.writeInt32LE(split.hi32, offset + 4);
    return 8;
  }
}

/**
 * Represent a signed 64-bit integer in big-endian format when
 * encoded and as a near integral JavaScript Number when decoded.
 *
 * *Factory*: {@link module:Layout.ns64be|ns64be}
 *
 * **NOTE** Values with magnitude greater than 2^52 may not decode to
 * the exact value of the encoded representation.
 *
 * @augments {Layout}
 */
class NearInt64BE extends Layout {
  constructor(property) {
    super(8, property);
  }

  /** @override */
  decode(b, offset) {
    if (undefined === offset) {
      offset = 0;
    }
    const hi32 = b.readInt32BE(offset);
    const lo32 = b.readUInt32BE(offset + 4);
    return roundedInt64(hi32, lo32);
  }

  /** @override */
  encode(src, b, offset) {
    if (undefined === offset) {
      offset = 0;
    }
    const split = divmodInt64(src);
    b.writeInt32BE(split.hi32, offset);
    b.writeUInt32BE(split.lo32, offset + 4);
    return 8;
  }
}

/**
 * Represent a 32-bit floating point number in little-endian format.
 *
 * *Factory*: {@link module:Layout.f32|f32}
 *
 * @param {string} [property] - initializer for {@link
 * Layout#property|property}.
 *
 * @augments {Layout}
 */
class Float extends Layout {
  constructor(property) {
    super(4, property);
  }

  /** @override */
  decode(b, offset) {
    if (undefined === offset) {
      offset = 0;
    }
    return b.readFloatLE(offset);
  }

  /** @override */
  encode(src, b, offset) {
    if (undefined === offset) {
      offset = 0;
    }
    b.writeFloatLE(src, offset);
    return 4;
  }
}

/**
 * Represent a 32-bit floating point number in big-endian format.
 *
 * *Factory*: {@link module:Layout.f32be|f32be}
 *
 * @param {string} [property] - initializer for {@link
 * Layout#property|property}.
 *
 * @augments {Layout}
 */
class FloatBE extends Layout {
  constructor(property) {
    super(4, property);
  }

  /** @override */
  decode(b, offset) {
    if (undefined === offset) {
      offset = 0;
    }
    return b.readFloatBE(offset);
  }

  /** @override */
  encode(src, b, offset) {
    if (undefined === offset) {
      offset = 0;
    }
    b.writeFloatBE(src, offset);
    return 4;
  }
}

/**
 * Represent a 64-bit floating point number in little-endian format.
 *
 * *Factory*: {@link module:Layout.f64|f64}
 *
 * @param {string} [property] - initializer for {@link
 * Layout#property|property}.
 *
 * @augments {Layout}
 */
class Double extends Layout {
  constructor(property) {
    super(8, property);
  }

  /** @override */
  decode(b, offset) {
    if (undefined === offset) {
      offset = 0;
    }
    return b.readDoubleLE(offset);
  }

  /** @override */
  encode(src, b, offset) {
    if (undefined === offset) {
      offset = 0;
    }
    b.writeDoubleLE(src, offset);
    return 8;
  }
}

/**
 * Represent a 64-bit floating point number in big-endian format.
 *
 * *Factory*: {@link module:Layout.f64be|f64be}
 *
 * @param {string} [property] - initializer for {@link
 * Layout#property|property}.
 *
 * @augments {Layout}
 */
class DoubleBE extends Layout {
  constructor(property) {
    super(8, property);
  }

  /** @override */
  decode(b, offset) {
    if (undefined === offset) {
      offset = 0;
    }
    return b.readDoubleBE(offset);
  }

  /** @override */
  encode(src, b, offset) {
    if (undefined === offset) {
      offset = 0;
    }
    b.writeDoubleBE(src, offset);
    return 8;
  }
}

/**
 * Represent a contiguous sequence of a specific layout as an Array.
 *
 * *Factory*: {@link module:Layout.seq|seq}
 *
 * @param {Layout} elementLayout - initializer for {@link
 * Sequence#elementLayout|elementLayout}.
 *
 * @param {(Number|ExternalLayout)} count - initializer for {@link
 * Sequence#count|count}.  The parameter must be either a positive
 * integer or an instance of {@link ExternalLayout}.
 *
 * @param {string} [property] - initializer for {@link
 * Layout#property|property}.
 *
 * @augments {Layout}
 */
class Sequence extends Layout {
  constructor(elementLayout, count, property) {
    if (!(elementLayout instanceof Layout)) {
      throw new TypeError('elementLayout must be a Layout');
    }
    if (!(((count instanceof ExternalLayout) && count.isCount())
          || (Number.isInteger(count) && (0 <= count)))) {
      throw new TypeError('count must be non-negative integer '
                          + 'or an unsigned integer ExternalLayout');
    }
    let span = -1;
    if ((!(count instanceof ExternalLayout))
        && (0 < elementLayout.span)) {
      span = count * elementLayout.span;
    }

    super(span, property);

    /** The layout for individual elements of the sequence. */
    this.elementLayout = elementLayout;

    /** The number of elements in the sequence.
     *
     * This will be either a non-negative integer or an instance of
     * {@link ExternalLayout} for which {@link
     * ExternalLayout#isCount|isCount()} is `true`. */
    this.count = count;
  }

  /** @override */
  getSpan(b, offset) {
    if (0 <= this.span) {
      return this.span;
    }
    if (undefined === offset) {
      offset = 0;
    }
    let span = 0;
    let count = this.count;
    if (count instanceof ExternalLayout) {
      count = count.decode(b, offset);
    }
    if (0 < this.elementLayout.span) {
      span = count * this.elementLayout.span;
    } else {
      let idx = 0;
      while (idx < count) {
        span += this.elementLayout.getSpan(b, offset + span);
        ++idx;
      }
    }
    return span;
  }

  /** @override */
  decode(b, offset) {
    if (undefined === offset) {
      offset = 0;
    }
    const rv = [];
    let i = 0;
    let count = this.count;
    if (count instanceof ExternalLayout) {
      count = count.decode(b, offset);
    }
    while (i < count) {
      rv.push(this.elementLayout.decode(b, offset));
      offset += this.elementLayout.getSpan(b, offset);
      i += 1;
    }
    return rv;
  }

  /** Implement {@link Layout#encode|encode} for {@link Sequence}.
   *
   * **NOTE** If `src` is shorter than {@link Sequence#count|count} then
   * the unused space in the buffer is left unchanged.  If `src` is
   * longer than {@link Sequence#count|count} the unneeded elements are
   * ignored.
   *
   * **NOTE** If {@link Layout#count|count} is an instance of {@link
   * ExternalLayout} then the length of `src` will be encoded as the
   * count after `src` is encoded. */
  encode(src, b, offset) {
    if (undefined === offset) {
      offset = 0;
    }
    const elo = this.elementLayout;
    const span = src.reduce((span, v) => {
      return span + elo.encode(v, b, offset + span);
    }, 0);
    if (this.count instanceof ExternalLayout) {
      this.count.encode(src.length, b, offset);
    }
    return span;
  }
}

/**
 * Represent a contiguous sequence of arbitrary layout elements as an
 * Object.
 *
 * *Factory*: {@link module:Layout.struct|struct}
 *
 * **NOTE** The {@link Layout#span|span} of the structure is variable
 * if any layout in {@link Structure#fields|fields} has a variable
 * span.  When {@link Layout#encode|encoding} we must have a value for
 * all variable-length fields, or we wouldn't be able to figure out
 * how much space to use for storage.  We can only identify the value
 * for a field when it has a {@link Layout#property|property}.  As
 * such, although a structure may contain both unnamed fields and
 * variable-length fields, it cannot contain an unnamed
 * variable-length field.
 *
 * @param {Layout[]} fields - initializer for {@link
 * Structure#fields|fields}.  An error is raised if this contains a
 * variable-length field for which a {@link Layout#property|property}
 * is not defined.
 *
 * @param {string} [property] - initializer for {@link
 * Layout#property|property}.
 *
 * @param {Boolean} [decodePrefixes] - initializer for {@link
 * Structure#decodePrefixes|property}.
 *
 * @throws {Error} - if `fields` contains an unnamed variable-length
 * layout.
 *
 * @augments {Layout}
 */
class Structure extends Layout {
  constructor(fields, property, decodePrefixes) {
    if (!(Array.isArray(fields)
          && fields.reduce((acc, v) => acc && (v instanceof Layout), true))) {
      throw new TypeError('fields must be array of Layout instances');
    }
    if (('boolean' === typeof property)
        && (undefined === decodePrefixes)) {
      decodePrefixes = property;
      property = undefined;
    }

    /* Verify absence of unnamed variable-length fields. */
    for (const fd of fields) {
      if ((0 > fd.span)
          && (undefined === fd.property)) {
        throw new Error('fields cannot contain unnamed variable-length layout');
      }
    }

    let span = -1;
    try {
      span = fields.reduce((span, fd) => span + fd.getSpan(), 0);
    } catch (e) {
    }
    super(span, property);

    /** The sequence of {@link Layout} values that comprise the
     * structure.
     *
     * The individual elements need not be the same type, and may be
     * either scalar or aggregate layouts.  If a member layout leaves
     * its {@link Layout#property|property} undefined the
     * corresponding region of the buffer associated with the element
     * will not be mutated.
     *
     * @type {Layout[]} */
    this.fields = fields;

    /** Control behavior of {@link Layout#decode|decode()} given short
     * buffers.
     *
     * In some situations a structure many be extended with additional
     * fields over time, with older installations providing only a
     * prefix of the full structure.  If this property is `true`
     * decoding will accept those buffers and leave subsequent fields
     * undefined, as long as the buffer ends at a field boundary.
     * Defaults to `false`. */
    this.decodePrefixes = !!decodePrefixes;
  }

  /** @override */
  getSpan(b, offset) {
    if (0 <= this.span) {
      return this.span;
    }
    if (undefined === offset) {
      offset = 0;
    }
    let span = 0;
    try {
      span = this.fields.reduce((span, fd) => {
        const fsp = fd.getSpan(b, offset);
        offset += fsp;
        return span + fsp;
      }, 0);
    } catch (e) {
      throw new RangeError('indeterminate span');
    }
    return span;
  }

  /** @override */
  decode(b, offset) {
    if (undefined === offset) {
      offset = 0;
    }
    const dest = this.makeDestinationObject();
    for (const fd of this.fields) {
      if (undefined !== fd.property) {
        dest[fd.property] = fd.decode(b, offset);
      }
      offset += fd.getSpan(b, offset);
      if (this.decodePrefixes
          && (b.length === offset)) {
        break;
      }
    }
    return dest;
  }

  /** Implement {@link Layout#encode|encode} for {@link Structure}.
   *
   * If `src` is missing a property for a member with a defined {@link
   * Layout#property|property} the corresponding region of the buffer is
   * left unmodified. */
  encode(src, b, offset) {
    if (undefined === offset) {
      offset = 0;
    }
    const firstOffset = offset;
    let lastOffset = 0;
    let lastWrote = 0;
    for (const fd of this.fields) {
      let span = fd.span;
      lastWrote = (0 < span) ? span : 0;
      if (undefined !== fd.property) {
        const fv = src[fd.property];
        if (undefined !== fv) {
          lastWrote = fd.encode(fv, b, offset);
          if (0 > span) {
            /* Read the as-encoded span, which is not necessarily the
             * same as what we wrote. */
            span = fd.getSpan(b, offset);
          }
        }
      }
      lastOffset = offset;
      offset += span;
    }
    /* Use (lastOffset + lastWrote) instead of offset because the last
     * item may have had a dynamic length and we don't want to include
     * the padding between it and the end of the space reserved for
     * it. */
    return (lastOffset + lastWrote) - firstOffset;
  }

  /** @override */
  fromArray(values) {
    const dest = this.makeDestinationObject();
    for (const fd of this.fields) {
      if ((undefined !== fd.property)
          && (0 < values.length)) {
        dest[fd.property] = values.shift();
      }
    }
    return dest;
  }

  /**
   * Get access to the layout of a given property.
   *
   * @param {String} property - the structure member of interest.
   *
   * @return {Layout} - the layout associated with `property`, or
   * undefined if there is no such property.
   */
  layoutFor(property) {
    if ('string' !== typeof property) {
      throw new TypeError('property must be string');
    }
    for (const fd of this.fields) {
      if (fd.property === property) {
        return fd;
      }
    }
  }

  /**
   * Get the offset of a structure member.
   *
   * @param {String} property - the structure member of interest.
   *
   * @return {Number} - the offset in bytes to the start of `property`
   * within the structure, or undefined if `property` is not a field
   * within the structure.  If the property is a member but follows a
   * variable-length structure member a negative number will be
   * returned.
   */
  offsetOf(property) {
    if ('string' !== typeof property) {
      throw new TypeError('property must be string');
    }
    let offset = 0;
    for (const fd of this.fields) {
      if (fd.property === property) {
        return offset;
      }
      if (0 > fd.span) {
        offset = -1;
      } else if (0 <= offset) {
        offset += fd.span;
      }
    }
  }
}

/**
 * An object that can provide a {@link
 * Union#discriminator|discriminator} API for {@link Union}.
 *
 * **NOTE** This is an abstract base class; you can create instances
 * if it amuses you, but they won't support the {@link
 * UnionDiscriminator#encode|encode} or {@link
 * UnionDiscriminator#decode|decode} functions.
 *
 * @param {string} [property] - Default for {@link
 * UnionDiscriminator#property|property}.
 *
 * @abstract
 */
class UnionDiscriminator {
  constructor(property) {
    /** The {@link Layout#property|property} to be used when the
     * discriminator is referenced in isolation (generally when {@link
     * Union#decode|Union decode} cannot delegate to a specific
     * variant). */
    this.property = property;
  }

  /** Analog to {@link Layout#decode|Layout decode} for union discriminators.
   *
   * The implementation of this method need not reference the buffer if
   * variant information is available through other means. */
  decode() {
    throw new Error('UnionDiscriminator is abstract');
  }

  /** Analog to {@link Layout#decode|Layout encode} for union discriminators.
   *
   * The implementation of this method need not store the value if
   * variant information is maintained through other means. */
  encode() {
    throw new Error('UnionDiscriminator is abstract');
  }
}

/**
 * An object that can provide a {@link
 * UnionDiscriminator|discriminator API} for {@link Union} using an
 * unsigned integral {@link Layout} instance located either inside or
 * outside the union.
 *
 * @param {ExternalLayout} layout - initializes {@link
 * UnionLayoutDiscriminator#layout|layout}.  Must satisfy {@link
 * ExternalLayout#isCount|isCount()}.
 *
 * @param {string} [property] - Default for {@link
 * UnionDiscriminator#property|property}, superseding the property
 * from `layout`, but defaulting to `variant` if neither `property`
 * nor layout provide a property name.
 *
 * @augments {UnionDiscriminator}
 */
class UnionLayoutDiscriminator extends UnionDiscriminator {
  constructor(layout, property) {
    if (!((layout instanceof ExternalLayout)
          && layout.isCount())) {
      throw new TypeError('layout must be an unsigned integer ExternalLayout');
    }

    super(property || layout.property || 'variant');

    /** The {@link ExternalLayout} used to access the discriminator
     * value. */
    this.layout = layout;
  }

  /** Delegate decoding to {@link UnionLayoutDiscriminator#layout|layout}. */
  decode(b, offset) {
    return this.layout.decode(b, offset);
  }

  /** Delegate encoding to {@link UnionLayoutDiscriminator#layout|layout}. */
  encode(src, b, offset) {
    return this.layout.encode(src, b, offset);
  }
}

/**
 * Represent any number of span-compatible layouts.
 *
 * *Factory*: {@link module:Layout.union|union}
 *
 * If the union has a {@link Union#defaultLayout|default layout} that
 * layout must have a non-negative {@link Layout#span|span}.  The span
 * of a fixed-span union includes its {@link
 * Union#discriminator|discriminator} if the variant is a {@link
 * Union#usesPrefixDiscriminator|prefix of the union}, plus the span
 * of its {@link Union#defaultLayout|default layout}.
 *
 * If the union does not have a default layout then the encoded span
 * of the union depends on the encoded span of its variant (which may
 * be fixed or variable).
 *
 * {@link VariantLayout#layout|Variant layout}s are added through
 * {@link Union#addVariant|addVariant}.  If the union has a default
 * layout, the span of the {@link VariantLayout#layout|layout
 * contained by the variant} must not exceed the span of the {@link
 * Union#defaultLayout|default layout} (minus the span of a {@link
 * Union#usesPrefixDiscriminator|prefix disriminator}, if used).  The
 * span of the variant will equal the span of the union itself.
 *
 * The variant for a buffer can only be identified from the {@link
 * Union#discriminator|discriminator} {@link
 * UnionDiscriminator#property|property} (in the case of the {@link
 * Union#defaultLayout|default layout}), or by using {@link
 * Union#getVariant|getVariant} and examining the resulting {@link
 * VariantLayout} instance.
 *
 * A variant compatible with a JavaScript object can be identified
 * using {@link Union#getSourceVariant|getSourceVariant}.
 *
 * @param {(UnionDiscriminator|ExternalLayout|Layout)} discr - How to
 * identify the layout used to interpret the union contents.  The
 * parameter must be an instance of {@link UnionDiscriminator}, an
 * {@link ExternalLayout} that satisfies {@link
 * ExternalLayout#isCount|isCount()}, or {@link UInt} (or {@link
 * UIntBE}).  When a non-external layout element is passed the layout
 * appears at the start of the union.  In all cases the (synthesized)
 * {@link UnionDiscriminator} instance is recorded as {@link
 * Union#discriminator|discriminator}.
 *
 * @param {(Layout|null)} defaultLayout - initializer for {@link
 * Union#defaultLayout|defaultLayout}.  If absent defaults to `null`.
 * If `null` there is no default layout: the union has data-dependent
 * length and attempts to decode or encode unrecognized variants will
 * throw an exception.  A {@link Layout} instance must have a
 * non-negative {@link Layout#span|span}, and if it lacks a {@link
 * Layout#property|property} the {@link
 * Union#defaultLayout|defaultLayout} will be a {@link
 * Layout#replicate|replica} with property `content`.
 *
 * @param {string} [property] - initializer for {@link
 * Layout#property|property}.
 *
 * @augments {Layout}
 */
class Union extends Layout {
  constructor(discr, defaultLayout, property) {
    const upv = ((discr instanceof UInt)
               || (discr instanceof UIntBE));
    if (upv) {
      discr = new UnionLayoutDiscriminator(new OffsetLayout(discr));
    } else if ((discr instanceof ExternalLayout)
               && discr.isCount()) {
      discr = new UnionLayoutDiscriminator(discr);
    } else if (!(discr instanceof UnionDiscriminator)) {
      throw new TypeError('discr must be a UnionDiscriminator '
                          + 'or an unsigned integer layout');
    }
    if (undefined === defaultLayout) {
      defaultLayout = null;
    }
    if (!((null === defaultLayout)
          || (defaultLayout instanceof Layout))) {
      throw new TypeError('defaultLayout must be null or a Layout');
    }
    if (null !== defaultLayout) {
      if (0 > defaultLayout.span) {
        throw new Error('defaultLayout must have constant span');
      }
      if (undefined === defaultLayout.property) {
        defaultLayout = defaultLayout.replicate('content');
      }
    }

    /* The union span can be estimated only if there's a default
     * layout.  The union spans its default layout, plus any prefix
     * variant layout.  By construction both layouts, if present, have
     * non-negative span. */
    let span = -1;
    if (defaultLayout) {
      span = defaultLayout.span;
      if ((0 <= span) && upv) {
        span += discr.layout.span;
      }
    }
    super(span, property);

    /** The interface for the discriminator value in isolation.
     *
     * This a {@link UnionDiscriminator} either passed to the
     * constructor or synthesized from the `discr` constructor
     * argument.  {@link
     * Union#usesPrefixDiscriminator|usesPrefixDiscriminator} will be
     * `true` iff the `discr` parameter was a non-offset {@link
     * Layout} instance. */
    this.discriminator = discr;

    /** `true` if the {@link Union#discriminator|discriminator} is the
     * first field in the union.
     *
     * If `false` the discriminator is obtained from somewhere
     * else. */
    this.usesPrefixDiscriminator = upv;

    /** The layout for non-discriminator content when the value of the
     * discriminator is not recognized.
     *
     * This is the value passed to the constructor.  It is
     * structurally equivalent to the second component of {@link
     * Union#layout|layout} but may have a different property
     * name. */
    this.defaultLayout = defaultLayout;

    /** A registry of allowed variants.
     *
     * The keys are unsigned integers which should be compatible with
     * {@link Union.discriminator|discriminator}.  The property value
     * is the corresponding {@link VariantLayout} instances assigned
     * to this union by {@link Union#addVariant|addVariant}.
     *
     * **NOTE** The registry remains mutable so that variants can be
     * {@link Union#addVariant|added} at any time.  Users should not
     * manipulate the content of this property. */
    this.registry = {};

    /* Private variable used when invoking getSourceVariant */
    let boundGetSourceVariant = this.defaultGetSourceVariant.bind(this);

    /** Function to infer the variant selected by a source object.
     *
     * Defaults to {@link
     * Union#defaultGetSourceVariant|defaultGetSourceVariant} but may
     * be overridden using {@link
     * Union#configGetSourceVariant|configGetSourceVariant}.
     *
     * @param {Object} src - as with {@link
     * Union#defaultGetSourceVariant|defaultGetSourceVariant}.
     *
     * @returns {(undefined|VariantLayout)} The default variant
     * (`undefined`) or first registered variant that uses a property
     * available in `src`. */
    this.getSourceVariant = function(src) {
      return boundGetSourceVariant(src);
    };

    /** Function to override the implementation of {@link
     * Union#getSourceVariant|getSourceVariant}.
     *
     * Use this if the desired variant cannot be identified using the
     * algorithm of {@link
     * Union#defaultGetSourceVariant|defaultGetSourceVariant}.
     *
     * **NOTE** The provided function will be invoked bound to this
     * Union instance, providing local access to {@link
     * Union#registry|registry}.
     *
     * @param {Function} gsv - a function that follows the API of
     * {@link Union#defaultGetSourceVariant|defaultGetSourceVariant}. */
    this.configGetSourceVariant = function(gsv) {
      boundGetSourceVariant = gsv.bind(this);
    };
  }

  /** @override */
  getSpan(b, offset) {
    if (0 <= this.span) {
      return this.span;
    }
    if (undefined === offset) {
      offset = 0;
    }
    /* Default layouts always have non-negative span, so we don't have
     * one and we have to recognize the variant which will in turn
     * determine the span. */
    const vlo = this.getVariant(b, offset);
    if (!vlo) {
      throw new Error('unable to determine span for unrecognized variant');
    }
    return vlo.getSpan(b, offset);
  }

  /**
   * Method to infer a registered Union variant compatible with `src`.
   *
   * The first satisified rule in the following sequence defines the
   * return value:
   * * If `src` has properties matching the Union discriminator and
   *   the default layout, `undefined` is returned regardless of the
   *   value of the discriminator property (this ensures the default
   *   layout will be used);
   * * If `src` has a property matching the Union discriminator, the
   *   value of the discriminator identifies a registered variant, and
   *   either (a) the variant has no layout, or (b) `src` has the
   *   variant's property, then the variant is returned (because the
   *   source satisfies the constraints of the variant it identifies);
   * * If `src` does not have a property matching the Union
   *   discriminator, but does have a property matching a registered
   *   variant, then the variant is returned (because the source
   *   matches a variant without an explicit conflict);
   * * An error is thrown (because we either can't identify a variant,
   *   or we were explicitly told the variant but can't satisfy it).
   *
   * @param {Object} src - an object presumed to be compatible with
   * the content of the Union.
   *
   * @return {(undefined|VariantLayout)} - as described above.
   *
   * @throws {Error} - if `src` cannot be associated with a default or
   * registered variant.
   */
  defaultGetSourceVariant(src) {
    if (src.hasOwnProperty(this.discriminator.property)) {
      if (this.defaultLayout
          && src.hasOwnProperty(this.defaultLayout.property)) {
        return undefined;
      }
      const vlo = this.registry[src[this.discriminator.property]];
      if (vlo
          && ((!vlo.layout)
              || src.hasOwnProperty(vlo.property))) {
        return vlo;
      }
    } else {
      for (const tag in this.registry) {
        const vlo = this.registry[tag];
        if (src.hasOwnProperty(vlo.property)) {
          return vlo;
        }
      }
    }
    throw new Error('unable to infer src variant');
  }

  /** Implement {@link Layout#decode|decode} for {@link Union}.
   *
   * If the variant is {@link Union#addVariant|registered} the return
   * value is an instance of that variant, with no explicit
   * discriminator.  Otherwise the {@link Union#defaultLayout|default
   * layout} is used to decode the content. */
  decode(b, offset) {
    if (undefined === offset) {
      offset = 0;
    }
    let dest;
    const dlo = this.discriminator;
    const discr = dlo.decode(b, offset);
    let clo = this.registry[discr];
    if (undefined === clo) {
      let contentOffset = 0;
      clo = this.defaultLayout;
      if (this.usesPrefixDiscriminator) {
        contentOffset = dlo.layout.span;
      }
      dest = this.makeDestinationObject();
      dest[dlo.property] = discr;
      dest[clo.property] = this.defaultLayout.decode(b, offset + contentOffset);
    } else {
      dest = clo.decode(b, offset);
    }
    return dest;
  }

  /** Implement {@link Layout#encode|encode} for {@link Union}.
   *
   * This API assumes the `src` object is consistent with the union's
   * {@link Union#defaultLayout|default layout}.  To encode variants
   * use the appropriate variant-specific {@link VariantLayout#encode}
   * method. */
  encode(src, b, offset) {
    if (undefined === offset) {
      offset = 0;
    }
    const vlo = this.getSourceVariant(src);
    if (undefined === vlo) {
      const dlo = this.discriminator;
      const clo = this.defaultLayout;
      let contentOffset = 0;
      if (this.usesPrefixDiscriminator) {
        contentOffset = dlo.layout.span;
      }
      dlo.encode(src[dlo.property], b, offset);
      return contentOffset + clo.encode(src[clo.property], b,
                                        offset + contentOffset);
    }
    return vlo.encode(src, b, offset);
  }

  /** Register a new variant structure within a union.  The newly
   * created variant is returned.
   *
   * @param {Number} variant - initializer for {@link
   * VariantLayout#variant|variant}.
   *
   * @param {Layout} layout - initializer for {@link
   * VariantLayout#layout|layout}.
   *
   * @param {String} property - initializer for {@link
   * Layout#property|property}.
   *
   * @return {VariantLayout} */
  addVariant(variant, layout, property) {
    const rv = new VariantLayout(this, variant, layout, property);
    this.registry[variant] = rv;
    return rv;
  }

  /**
   * Get the layout associated with a registered variant.
   *
   * If `vb` does not produce a registered variant the function returns
   * `undefined`.
   *
   * @param {(Number|Buffer)} vb - either the variant number, or a
   * buffer from which the discriminator is to be read.
   *
   * @param {Number} offset - offset into `vb` for the start of the
   * union.  Used only when `vb` is an instance of {Buffer}.
   *
   * @return {({VariantLayout}|undefined)}
   */
  getVariant(vb, offset) {
    let variant = vb;
    if (Buffer.isBuffer(vb)) {
      if (undefined === offset) {
        offset = 0;
      }
      variant = this.discriminator.decode(vb, offset);
    }
    return this.registry[variant];
  }
}

/**
 * Represent a specific variant within a containing union.
 *
 * **NOTE** The {@link Layout#span|span} of the variant may include
 * the span of the {@link Union#discriminator|discriminator} used to
 * identify it, but values read and written using the variant strictly
 * conform to the content of {@link VariantLayout#layout|layout}.
 *
 * **NOTE** User code should not invoke this constructor directly.  Use
 * the union {@link Union#addVariant|addVariant} helper method.
 *
 * @param {Union} union - initializer for {@link
 * VariantLayout#union|union}.
 *
 * @param {Number} variant - initializer for {@link
 * VariantLayout#variant|variant}.
 *
 * @param {Layout} [layout] - initializer for {@link
 * VariantLayout#layout|layout}.  If absent the variant carries no
 * data.
 *
 * @param {String} [property] - initializer for {@link
 * Layout#property|property}.  Unlike many other layouts, variant
 * layouts normally include a property name so they can be identified
 * within their containing {@link Union}.  The property identifier may
 * be absent only if `layout` is is absent.
 *
 * @augments {Layout}
 */
class VariantLayout extends Layout {
  constructor(union, variant, layout, property) {
    if (!(union instanceof Union)) {
      throw new TypeError('union must be a Union');
    }
    if ((!Number.isInteger(variant)) || (0 > variant)) {
      throw new TypeError('variant must be a (non-negative) integer');
    }
    if (('string' === typeof layout)
        && (undefined === property)) {
      property = layout;
      layout = null;
    }
    if (layout) {
      if (!(layout instanceof Layout)) {
        throw new TypeError('layout must be a Layout');
      }
      if ((null !== union.defaultLayout)
          && (0 <= layout.span)
          && (layout.span > union.defaultLayout.span)) {
        throw new Error('variant span exceeds span of containing union');
      }
      if ('string' !== typeof property) {
        throw new TypeError('variant must have a String property');
      }
    }
    let span = union.span;
    if (0 > union.span) {
      span = layout ? layout.span : 0;
      if ((0 <= span) && union.usesPrefixDiscriminator) {
        span += union.discriminator.layout.span;
      }
    }
    super(span, property);

    /** The {@link Union} to which this variant belongs. */
    this.union = union;

    /** The unsigned integral value identifying this variant within
     * the {@link Union#discriminator|discriminator} of the containing
     * union. */
    this.variant = variant;

    /** The {@link Layout} to be used when reading/writing the
     * non-discriminator part of the {@link
     * VariantLayout#union|union}.  If `null` the variant carries no
     * data. */
    this.layout = layout || null;
  }

  /** @override */
  getSpan(b, offset) {
    if (0 <= this.span) {
      /* Will be equal to the containing union span if that is not
       * variable. */
      return this.span;
    }
    if (undefined === offset) {
      offset = 0;
    }
    let contentOffset = 0;
    if (this.union.usesPrefixDiscriminator) {
      contentOffset = this.union.discriminator.layout.span;
    }
    /* Span is defined solely by the variant (and prefix discriminator) */
    return contentOffset + this.layout.getSpan(b, offset + contentOffset);
  }

  /** @override */
  decode(b, offset) {
    const dest = this.makeDestinationObject();
    if (undefined === offset) {
      offset = 0;
    }
    if (this !== this.union.getVariant(b, offset)) {
      throw new Error('variant mismatch');
    }
    let contentOffset = 0;
    if (this.union.usesPrefixDiscriminator) {
      contentOffset = this.union.discriminator.layout.span;
    }
    if (this.layout) {
      dest[this.property] = this.layout.decode(b, offset + contentOffset);
    } else if (this.property) {
      dest[this.property] = true;
    } else if (this.union.usesPrefixDiscriminator) {
      dest[this.union.discriminator.property] = this.variant;
    }
    return dest;
  }

  /** @override */
  encode(src, b, offset) {
    if (undefined === offset) {
      offset = 0;
    }
    let contentOffset = 0;
    if (this.union.usesPrefixDiscriminator) {
      contentOffset = this.union.discriminator.layout.span;
    }
    if (this.layout
        && (!src.hasOwnProperty(this.property))) {
      throw new TypeError('variant lacks property ' + this.property);
    }
    this.union.discriminator.encode(this.variant, b, offset);
    let span = contentOffset;
    if (this.layout) {
      this.layout.encode(src[this.property], b, offset + contentOffset);
      span += this.layout.getSpan(b, offset + contentOffset);
      if ((0 <= this.union.span)
          && (span > this.union.span)) {
        throw new Error('encoded variant overruns containing union');
      }
    }
    return span;
  }

  /** Delegate {@link Layout#fromArray|fromArray} to {@link
   * VariantLayout#layout|layout}. */
  fromArray(values) {
    if (this.layout) {
      return this.layout.fromArray(values);
    }
  }
}

/** JavaScript chose to define bitwise operations as operating on
 * signed 32-bit values in 2's complement form, meaning any integer
 * with bit 31 set is going to look negative.  For right shifts that's
 * not a problem, because `>>>` is a logical shift, but for every
 * other bitwise operator we have to compensate for possible negative
 * results. */
function fixBitwiseResult(v) {
  if (0 > v) {
    v += 0x100000000;
  }
  return v;
}

/**
 * Contain a sequence of bit fields as an unsigned integer.
 *
 * *Factory*: {@link module:Layout.bits|bits}
 *
 * This is a container element; within it there are {@link BitField}
 * instances that provide the extracted properties.  The container
 * simply defines the aggregate representation and its bit ordering.
 * The representation is an object containing properties with numeric
 * or {@link Boolean} values.
 *
 * {@link BitField}s are added with the {@link
 * BitStructure#addField|addField} and {@link
 * BitStructure#addBoolean|addBoolean} methods.

 * @param {Layout} word - initializer for {@link
 * BitStructure#word|word}.  The parameter must be an instance of
 * {@link UInt} (or {@link UIntBE}) that is no more than 4 bytes wide.
 *
 * @param {bool} [msb] - `true` if the bit numbering starts at the
 * most significant bit of the containing word; `false` (default) if
 * it starts at the least significant bit of the containing word.  If
 * the parameter at this position is a string and `property` is
 * `undefined` the value of this argument will instead be used as the
 * value of `property`.
 *
 * @param {string} [property] - initializer for {@link
 * Layout#property|property}.
 *
 * @augments {Layout}
 */
class BitStructure extends Layout {
  constructor(word, msb, property) {
    if (!((word instanceof UInt)
          || (word instanceof UIntBE))) {
      throw new TypeError('word must be a UInt or UIntBE layout');
    }
    if (('string' === typeof msb)
        && (undefined === property)) {
      property = msb;
      msb = undefined;
    }
    if (4 < word.span) {
      throw new RangeError('word cannot exceed 32 bits');
    }
    super(word.span, property);

    /** The layout used for the packed value.  {@link BitField}
     * instances are packed sequentially depending on {@link
     * BitStructure#msb|msb}. */
    this.word = word;

    /** Whether the bit sequences are packed starting at the most
     * significant bit growing down (`true`), or the least significant
     * bit growing up (`false`).
     *
     * **NOTE** Regardless of this value, the least significant bit of
     * any {@link BitField} value is the least significant bit of the
     * corresponding section of the packed value. */
    this.msb = !!msb;

    /** The sequence of {@link BitField} layouts that comprise the
     * packed structure.
     *
     * **NOTE** The array remains mutable to allow fields to be {@link
     * BitStructure#addField|added} after construction.  Users should
     * not manipulate the content of this property.*/
    this.fields = [];

    /* Storage for the value.  Capture a variable instead of using an
     * instance property because we don't want anything to change the
     * value without going through the mutator. */
    let value = 0;
    this._packedSetValue = function(v) {
      value = fixBitwiseResult(v);
      return this;
    };
    this._packedGetValue = function() {
      return value;
    };
  }

  /** @override */
  decode(b, offset) {
    const dest = this.makeDestinationObject();
    if (undefined === offset) {
      offset = 0;
    }
    const value = this.word.decode(b, offset);
    this._packedSetValue(value);
    for (const fd of this.fields) {
      if (undefined !== fd.property) {
        dest[fd.property] = fd.decode(value);
      }
    }
    return dest;
  }

  /** Implement {@link Layout#encode|encode} for {@link BitStructure}.
   *
   * If `src` is missing a property for a member with a defined {@link
   * Layout#property|property} the corresponding region of the packed
   * value is left unmodified.  Unused bits are also left unmodified. */
  encode(src, b, offset) {
    if (undefined === offset) {
      offset = 0;
    }
    const value = this.word.decode(b, offset);
    this._packedSetValue(value);
    for (const fd of this.fields) {
      if (undefined !== fd.property) {
        const fv = src[fd.property];
        if (undefined !== fv) {
          fd.encode(fv);
        }
      }
    }
    return this.word.encode(this._packedGetValue(), b, offset);
  }

  /** Register a new bitfield with a containing bit structure.  The
   * resulting bitfield is returned.
   *
   * @param {Number} bits - initializer for {@link BitField#bits|bits}.
   *
   * @param {string} property - initializer for {@link
   * Layout#property|property}.
   *
   * @return {BitField} */
  addField(bits, property) {
    const bf = new BitField(this, bits, property);
    this.fields.push(bf);
    return bf;
  }

  /** As with {@link BitStructure#addField|addField} for single-bit
   * fields with `boolean` value representation.
   *
   * @param {string} property - initializer for {@link
   * Layout#property|property}.
   *
   * @return {Boolean} */
  addBoolean(property) {
    // This is my Boolean, not the Javascript one.
    // eslint-disable-next-line no-new-wrappers
    const bf = new Boolean(this, property);
    this.fields.push(bf);
    return bf;
  }

  /**
   * Get access to the bit field for a given property.
   *
   * @param {String} property - the bit field of interest.
   *
   * @return {BitField} - the field associated with `property`, or
   * undefined if there is no such property.
   */
  fieldFor(property) {
    if ('string' !== typeof property) {
      throw new TypeError('property must be string');
    }
    for (const fd of this.fields) {
      if (fd.property === property) {
        return fd;
      }
    }
  }
}

/**
 * Represent a sequence of bits within a {@link BitStructure}.
 *
 * All bit field values are represented as unsigned integers.
 *
 * **NOTE** User code should not invoke this constructor directly.
 * Use the container {@link BitStructure#addField|addField} helper
 * method.
 *
 * **NOTE** BitField instances are not instances of {@link Layout}
 * since {@link Layout#span|span} measures 8-bit units.
 *
 * @param {BitStructure} container - initializer for {@link
 * BitField#container|container}.
 *
 * @param {Number} bits - initializer for {@link BitField#bits|bits}.
 *
 * @param {string} [property] - initializer for {@link
 * Layout#property|property}.
 */
class BitField {
  constructor(container, bits, property) {
    if (!(container instanceof BitStructure)) {
      throw new TypeError('container must be a BitStructure');
    }
    if ((!Number.isInteger(bits)) || (0 >= bits)) {
      throw new TypeError('bits must be positive integer');
    }
    const totalBits = 8 * container.span;
    const usedBits = container.fields.reduce((sum, fd) => sum + fd.bits, 0);
    if ((bits + usedBits) > totalBits) {
      throw new Error('bits too long for span remainder ('
                      + (totalBits - usedBits) + ' of '
                      + totalBits + ' remain)');
    }

    /** The {@link BitStructure} instance to which this bit field
     * belongs. */
    this.container = container;

    /** The span of this value in bits. */
    this.bits = bits;

    /** A mask of {@link BitField#bits|bits} bits isolating value bits
     * that fit within the field.
     *
     * That is, it masks a value that has not yet been shifted into
     * position within its containing packed integer. */
    this.valueMask = (1 << bits) - 1;
    if (32 === bits) { // shifted value out of range
      this.valueMask = 0xFFFFFFFF;
    }

    /** The offset of the value within the containing packed unsigned
     * integer.  The least significant bit of the packed value is at
     * offset zero, regardless of bit ordering used. */
    this.start = usedBits;
    if (this.container.msb) {
      this.start = totalBits - usedBits - bits;
    }

    /** A mask of {@link BitField#bits|bits} isolating the field value
     * within the containing packed unsigned integer. */
    this.wordMask = fixBitwiseResult(this.valueMask << this.start);

    /** The property name used when this bitfield is represented in an
     * Object.
     *
     * Intended to be functionally equivalent to {@link
     * Layout#property}.
     *
     * If left undefined the corresponding span of bits will be
     * treated as padding: it will not be mutated by {@link
     * Layout#encode|encode} nor represented as a property in the
     * decoded Object. */
    this.property = property;
  }

  /** Store a value into the corresponding subsequence of the containing
   * bit field. */
  decode() {
    const word = this.container._packedGetValue();
    const wordValue = fixBitwiseResult(word & this.wordMask);
    const value = wordValue >>> this.start;
    return value;
  }

  /** Store a value into the corresponding subsequence of the containing
   * bit field.
   *
   * **NOTE** This is not a specialization of {@link
   * Layout#encode|Layout.encode} and there is no return value. */
  encode(value) {
    if ((!Number.isInteger(value))
        || (value !== fixBitwiseResult(value & this.valueMask))) {
      throw new TypeError(nameWithProperty('BitField.encode', this)
                          + ' value must be integer not exceeding ' + this.valueMask);
    }
    const word = this.container._packedGetValue();
    const wordValue = fixBitwiseResult(value << this.start);
    this.container._packedSetValue(fixBitwiseResult(word & ~this.wordMask)
                                   | wordValue);
  };
}

/**
 * Represent a single bit within a {@link BitStructure} as a
 * JavaScript boolean.
 *
 * **NOTE** User code should not invoke this constructor directly.
 * Use the container {@link BitStructure#addBoolean|addBoolean} helper
 * method.
 *
 * @param {BitStructure} container - initializer for {@link
 * BitField#container|container}.
 *
 * @param {string} [property] - initializer for {@link
 * Layout#property|property}.
 *
 * @augments {BitField}
 */
/* eslint-disable no-extend-native */
class Boolean extends BitField {
  constructor(container, property) {
    super(container, 1, property);
  }

  /** Override {@link BitField#decode|decode} for {@link Boolean|Boolean}.
   *
   * @returns {boolean} */
  decode(b, offset) {
    return !!BitField.prototype.decode.call(this, b, offset);
  }

  /** @override */
  encode(value) {
    if ('boolean' === typeof value) {
      // BitField requires integer values
      value = +value;
    }
    return BitField.prototype.encode.call(this, value);
  }
}
/* eslint-enable no-extend-native */

/**
 * Contain a fixed-length block of arbitrary data, represented as a
 * Buffer.
 *
 * *Factory*: {@link module:Layout.blob|blob}
 *
 * @param {(Number|ExternalLayout)} length - initializes {@link
 * Blob#length|length}.
 *
 * @param {String} [property] - initializer for {@link
 * Layout#property|property}.
 *
 * @augments {Layout}
 */
class Blob extends Layout {
  constructor(length, property) {
    if (!(((length instanceof ExternalLayout) && length.isCount())
          || (Number.isInteger(length) && (0 <= length)))) {
      throw new TypeError('length must be positive integer '
                          + 'or an unsigned integer ExternalLayout');
    }

    let span = -1;
    if (!(length instanceof ExternalLayout)) {
      span = length;
    }
    super(span, property);

    /** The number of bytes in the blob.
     *
     * This may be a non-negative integer, or an instance of {@link
     * ExternalLayout} that satisfies {@link
     * ExternalLayout#isCount|isCount()}. */
    this.length = length;
  }

  /** @override */
  getSpan(b, offset) {
    let span = this.span;
    if (0 > span) {
      span = this.length.decode(b, offset);
    }
    return span;
  }

  /** @override */
  decode(b, offset) {
    if (undefined === offset) {
      offset = 0;
    }
    let span = this.span;
    if (0 > span) {
      span = this.length.decode(b, offset);
    }
    return b.slice(offset, offset + span);
  }

  /** Implement {@link Layout#encode|encode} for {@link Blob}.
   *
   * **NOTE** If {@link Layout#count|count} is an instance of {@link
   * ExternalLayout} then the length of `src` will be encoded as the
   * count after `src` is encoded. */
  encode(src, b, offset) {
    let span = this.length;
    if (this.length instanceof ExternalLayout) {
      span = src.length;
    }
    if (!(Buffer.isBuffer(src)
          && (span === src.length))) {
      throw new TypeError(nameWithProperty('Blob.encode', this)
                          + ' requires (length ' + span + ') Buffer as src');
    }
    if ((offset + span) > b.length) {
      throw new RangeError('encoding overruns Buffer');
    }
    b.write(src.toString('hex'), offset, span, 'hex');
    if (this.length instanceof ExternalLayout) {
      this.length.encode(span, b, offset);
    }
    return span;
  }
}

/**
 * Contain a `NUL`-terminated UTF8 string.
 *
 * *Factory*: {@link module:Layout.cstr|cstr}
 *
 * **NOTE** Any UTF8 string that incorporates a zero-valued byte will
 * not be correctly decoded by this layout.
 *
 * @param {String} [property] - initializer for {@link
 * Layout#property|property}.
 *
 * @augments {Layout}
 */
class CString extends Layout {
  constructor(property) {
    super(-1, property);
  }

  /** @override */
  getSpan(b, offset) {
    if (!Buffer.isBuffer(b)) {
      throw new TypeError('b must be a Buffer');
    }
    if (undefined === offset) {
      offset = 0;
    }
    let idx = offset;
    while ((idx < b.length) && (0 !== b[idx])) {
      idx += 1;
    }
    return 1 + idx - offset;
  }

  /** @override */
  decode(b, offset, dest) {
    if (undefined === offset) {
      offset = 0;
    }
    let span = this.getSpan(b, offset);
    return b.slice(offset, offset + span - 1).toString('utf-8');
  }

  /** @override */
  encode(src, b, offset) {
    if (undefined === offset) {
      offset = 0;
    }
    /* Must force this to a string, lest it be a number and the
     * "utf8-encoding" below actually allocate a buffer of length
     * src */
    if ('string' !== typeof src) {
      src = src.toString();
    }
    const srcb = new Buffer(src, 'utf8');
    const span = srcb.length;
    if ((offset + span) > b.length) {
      throw new RangeError('encoding overruns Buffer');
    }
    srcb.copy(b, offset);
    b[offset + span] = 0;
    return span + 1;
  }
}

/**
 * Contain a UTF8 string with implicit length.
 *
 * *Factory*: {@link module:Layout.utf8|utf8}
 *
 * **NOTE** Because the length is implicit in the size of the buffer
 * this layout should be used only in isolation, or in a situation
 * where the length can be expressed by operating on a slice of the
 * containing buffer.
 *
 * @param {Number} [maxSpan] - the maximum length allowed for encoded
 * string content.  If not provided there is no bound on the allowed
 * content.
 *
 * @param {String} [property] - initializer for {@link
 * Layout#property|property}.
 *
 * @augments {Layout}
 */
class UTF8 extends Layout {
  constructor(maxSpan, property) {
    if (('string' === typeof maxSpan)
        && (undefined === property)) {
      property = maxSpan;
      maxSpan = undefined;
    }
    if (undefined === maxSpan) {
      maxSpan = -1;
    } else if (!Number.isInteger(maxSpan)) {
      throw new TypeError('maxSpan must be an integer');
    }

    super(-1, property);

    /** The maximum span of the layout in bytes.
     *
     * Positive values are generally expected.  Zero is abnormal.
     * Attempts to encode or decode a value that exceeds this length
     * will throw a `RangeError`.
     *
     * A negative value indicates that there is no bound on the length
     * of the content. */
    this.maxSpan = maxSpan;
  }

  /** @override */
  getSpan(b, offset) {
    if (!Buffer.isBuffer(b)) {
      throw new TypeError('b must be a Buffer');
    }
    if (undefined === offset) {
      offset = 0;
    }
    return b.length - offset;
  }

  /** @override */
  decode(b, offset, dest) {
    if (undefined === offset) {
      offset = 0;
    }
    let span = this.getSpan(b, offset);
    if ((0 <= this.maxSpan)
        && (this.maxSpan < span)) {
      throw new RangeError('text length exceeds maxSpan');
    }
    return b.slice(offset, offset + span).toString('utf-8');
  }

  /** @override */
  encode(src, b, offset) {
    if (undefined === offset) {
      offset = 0;
    }
    /* Must force this to a string, lest it be a number and the
     * "utf8-encoding" below actually allocate a buffer of length
     * src */
    if ('string' !== typeof src) {
      src = src.toString();
    }
    const srcb = new Buffer(src, 'utf8');
    const span = srcb.length;
    if ((0 <= this.maxSpan)
        && (this.maxSpan < span)) {
      throw new RangeError('text length exceeds maxSpan');
    }
    if ((offset + span) > b.length) {
      throw new RangeError('encoding overruns Buffer');
    }
    srcb.copy(b, offset);
    return span;
  }
}

/**
 * Contain a constant value.
 *
 * This layout may be used in cases where a JavaScript value can be
 * inferred without an expression in the binary encoding.  An example
 * would be a {@link VariantLayout|variant layout} where the content
 * is implied by the union {@link Union#discriminator|discriminator}.
 *
 * @param {Object|Number|String} value - initializer for {@link
 * Constant#value|value}.  If the value is an object (or array) and
 * the application intends the object to remain unchanged regardless
 * of what is done to values decoded by this layout, the value should
 * be frozen prior passing it to this constructor.
 *
 * @param {String} [property] - initializer for {@link
 * Layout#property|property}.
 *
 * @augments {Layout}
 */
class Constant extends Layout {
  constructor(value, property) {
    super(0, property);

    /** The value produced by this constant when the layout is {@link
     * Constant#decode|decoded}.
     *
     * Any JavaScript value including `null` and `undefined` is
     * permitted.
     *
     * **WARNING** If `value` passed in the constructor was not
     * frozen, it is possible for users of decoded values to change
     * the content of the value. */
    this.value = value;
  }

  /** @override */
  decode(b, offset, dest) {
    return this.value;
  }

  /** @override */
  encode(src, b, offset) {
    /* Constants take no space */
    return 0;
  }
}

exports.ExternalLayout = ExternalLayout;
exports.GreedyCount = GreedyCount;
exports.OffsetLayout = OffsetLayout;
exports.UInt = UInt;
exports.UIntBE = UIntBE;
exports.Int = Int;
exports.IntBE = IntBE;
exports.Float = Float;
exports.FloatBE = FloatBE;
exports.Double = Double;
exports.DoubleBE = DoubleBE;
exports.Sequence = Sequence;
exports.Structure = Structure;
exports.UnionDiscriminator = UnionDiscriminator;
exports.UnionLayoutDiscriminator = UnionLayoutDiscriminator;
exports.Union = Union;
exports.VariantLayout = VariantLayout;
exports.BitStructure = BitStructure;
exports.BitField = BitField;
exports.Boolean = Boolean;
exports.Blob = Blob;
exports.CString = CString;
exports.UTF8 = UTF8;
exports.Constant = Constant;

/** Factory for {@link GreedyCount}. */
exports.greedy = ((elementSpan, property) => new GreedyCount(elementSpan, property));

/** Factory for {@link OffsetLayout}. */
exports.offset = ((layout, offset, property) => new OffsetLayout(layout, offset, property));

/** Factory for {@link UInt|unsigned int layouts} spanning one
 * byte. */
exports.u8 = (property => new UInt(1, property));

/** Factory for {@link UInt|little-endian unsigned int layouts}
 * spanning two bytes. */
exports.u16 = (property => new UInt(2, property));

/** Factory for {@link UInt|little-endian unsigned int layouts}
 * spanning three bytes. */
exports.u24 = (property => new UInt(3, property));

/** Factory for {@link UInt|little-endian unsigned int layouts}
 * spanning four bytes. */
exports.u32 = (property => new UInt(4, property));

/** Factory for {@link UInt|little-endian unsigned int layouts}
 * spanning five bytes. */
exports.u40 = (property => new UInt(5, property));

/** Factory for {@link UInt|little-endian unsigned int layouts}
 * spanning six bytes. */
exports.u48 = (property => new UInt(6, property));

/** Factory for {@link NearUInt64|little-endian unsigned int
 * layouts} interpreted as Numbers. */
exports.nu64 = (property => new NearUInt64(property));

/** Factory for {@link UInt|big-endian unsigned int layouts}
 * spanning two bytes. */
exports.u16be = (property => new UIntBE(2, property));

/** Factory for {@link UInt|big-endian unsigned int layouts}
 * spanning three bytes. */
exports.u24be = (property => new UIntBE(3, property));

/** Factory for {@link UInt|big-endian unsigned int layouts}
 * spanning four bytes. */
exports.u32be = (property => new UIntBE(4, property));

/** Factory for {@link UInt|big-endian unsigned int layouts}
 * spanning five bytes. */
exports.u40be = (property => new UIntBE(5, property));

/** Factory for {@link UInt|big-endian unsigned int layouts}
 * spanning six bytes. */
exports.u48be = (property => new UIntBE(6, property));

/** Factory for {@link NearUInt64BE|big-endian unsigned int
 * layouts} interpreted as Numbers. */
exports.nu64be = (property => new NearUInt64BE(property));

/** Factory for {@link Int|signed int layouts} spanning one
 * byte. */
exports.s8 = (property => new Int(1, property));

/** Factory for {@link Int|little-endian signed int layouts}
 * spanning two bytes. */
exports.s16 = (property => new Int(2, property));

/** Factory for {@link Int|little-endian signed int layouts}
 * spanning three bytes. */
exports.s24 = (property => new Int(3, property));

/** Factory for {@link Int|little-endian signed int layouts}
 * spanning four bytes. */
exports.s32 = (property => new Int(4, property));

/** Factory for {@link Int|little-endian signed int layouts}
 * spanning five bytes. */
exports.s40 = (property => new Int(5, property));

/** Factory for {@link Int|little-endian signed int layouts}
 * spanning six bytes. */
exports.s48 = (property => new Int(6, property));

/** Factory for {@link NearInt64|little-endian signed int layouts}
 * interpreted as Numbers. */
exports.ns64 = (property => new NearInt64(property));

/** Factory for {@link Int|big-endian signed int layouts}
 * spanning two bytes. */
exports.s16be = (property => new IntBE(2, property));

/** Factory for {@link Int|big-endian signed int layouts}
 * spanning three bytes. */
exports.s24be = (property => new IntBE(3, property));

/** Factory for {@link Int|big-endian signed int layouts}
 * spanning four bytes. */
exports.s32be = (property => new IntBE(4, property));

/** Factory for {@link Int|big-endian signed int layouts}
 * spanning five bytes. */
exports.s40be = (property => new IntBE(5, property));

/** Factory for {@link Int|big-endian signed int layouts}
 * spanning six bytes. */
exports.s48be = (property => new IntBE(6, property));

/** Factory for {@link NearInt64BE|big-endian signed int layouts}
 * interpreted as Numbers. */
exports.ns64be = (property => new NearInt64BE(property));

/** Factory for {@link Float|little-endian 32-bit floating point} values. */
exports.f32 = (property => new Float(property));

/** Factory for {@link FloatBE|big-endian 32-bit floating point} values. */
exports.f32be = (property => new FloatBE(property));

/** Factory for {@link Double|little-endian 64-bit floating point} values. */
exports.f64 = (property => new Double(property));

/** Factory for {@link DoubleBE|big-endian 64-bit floating point} values. */
exports.f64be = (property => new DoubleBE(property));

/** Factory for {@link Structure} values. */
exports.struct = ((fields, property, decodePrefixes) => new Structure(fields, property, decodePrefixes));

/** Factory for {@link BitStructure} values. */
exports.bits = ((word, msb, property) => new BitStructure(word, msb, property));

/** Factory for {@link Sequence} values. */
exports.seq = ((elementLayout, count, property) => new Sequence(elementLayout, count, property));

/** Factory for {@link Union} values. */
exports.union = ((discr, defaultLayout, property) => new Union(discr, defaultLayout, property));

/** Factory for {@link UnionLayoutDiscriminator} values. */
exports.unionLayoutDiscriminator = ((layout, property) => new UnionLayoutDiscriminator(layout, property));

/** Factory for {@link Blob} values. */
exports.blob = ((length, property) => new Blob(length, property));

/** Factory for {@link CString} values. */
exports.cstr = (property => new CString(property));

/** Factory for {@link UTF8} values. */
exports.utf8 = ((maxSpan, property) => new UTF8(maxSpan, property));

/** Factory for {@link Constant} values. */
exports["const"] = ((value, property) => new Constant(value, property));


/***/ }),

/***/ 3204:
/***/ (function(module) {

"use strict";


const preserveCamelCase = string => {
	let isLastCharLower = false;
	let isLastCharUpper = false;
	let isLastLastCharUpper = false;

	for (let i = 0; i < string.length; i++) {
		const character = string[i];

		if (isLastCharLower && /[a-zA-Z]/.test(character) && character.toUpperCase() === character) {
			string = string.slice(0, i) + '-' + string.slice(i);
			isLastCharLower = false;
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = true;
			i++;
		} else if (isLastCharUpper && isLastLastCharUpper && /[a-zA-Z]/.test(character) && character.toLowerCase() === character) {
			string = string.slice(0, i - 1) + '-' + string.slice(i - 1);
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = false;
			isLastCharLower = true;
		} else {
			isLastCharLower = character.toLowerCase() === character && character.toUpperCase() !== character;
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = character.toUpperCase() === character && character.toLowerCase() !== character;
		}
	}

	return string;
};

const camelCase = (input, options) => {
	if (!(typeof input === 'string' || Array.isArray(input))) {
		throw new TypeError('Expected the input to be `string | string[]`');
	}

	options = Object.assign({
		pascalCase: false
	}, options);

	const postProcess = x => options.pascalCase ? x.charAt(0).toUpperCase() + x.slice(1) : x;

	if (Array.isArray(input)) {
		input = input.map(x => x.trim())
			.filter(x => x.length)
			.join('-');
	} else {
		input = input.trim();
	}

	if (input.length === 0) {
		return '';
	}

	if (input.length === 1) {
		return options.pascalCase ? input.toUpperCase() : input.toLowerCase();
	}

	const hasUpperCase = input !== input.toLowerCase();

	if (hasUpperCase) {
		input = preserveCamelCase(input);
	}

	input = input
		.replace(/^[_.\- ]+/, '')
		.toLowerCase()
		.replace(/[_.\- ]+(\w|$)/g, (_, p1) => p1.toUpperCase())
		.replace(/\d+(\w|$)/g, m => m.toUpperCase());

	return postProcess(input);
};

module.exports = camelCase;
// TODO: Remove this for the next major release
module.exports["default"] = camelCase;


/***/ }),

/***/ 7187:
/***/ (function(module) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function errorListener(err) {
      emitter.removeListener(name, resolver);
      reject(err);
    }

    function resolver() {
      if (typeof emitter.removeListener === 'function') {
        emitter.removeListener('error', errorListener);
      }
      resolve([].slice.call(arguments));
    };

    eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
    if (name !== 'error') {
      addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
    }
  });
}

function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
  if (typeof emitter.on === 'function') {
    eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
  }
}

function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
  if (typeof emitter.on === 'function') {
    if (flags.once) {
      emitter.once(name, listener);
    } else {
      emitter.on(name, listener);
    }
  } else if (typeof emitter.addEventListener === 'function') {
    // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
      // IE does not have builtin `{ once: true }` support so we
      // have to do it manually.
      if (flags.once) {
        emitter.removeEventListener(name, wrapListener);
      }
      listener(arg);
    });
  } else {
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
  }
}


/***/ }),

/***/ 2023:
/***/ (function(module, exports, __webpack_require__) {

/* provided dependency */ var process = __webpack_require__(4155);
var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * [js-sha256]{@link https://github.com/emn178/js-sha256}
 *
 * @version 0.9.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */
/*jslint bitwise: true */
(function () {
  'use strict';

  var ERROR = 'input is invalid type';
  var WINDOW = typeof window === 'object';
  var root = WINDOW ? window : {};
  if (root.JS_SHA256_NO_WINDOW) {
    WINDOW = false;
  }
  var WEB_WORKER = !WINDOW && typeof self === 'object';
  var NODE_JS = !root.JS_SHA256_NO_NODE_JS && typeof process === 'object' && process.versions && process.versions.node;
  if (NODE_JS) {
    root = __webpack_require__.g;
  } else if (WEB_WORKER) {
    root = self;
  }
  var COMMON_JS = !root.JS_SHA256_NO_COMMON_JS && "object" === 'object' && module.exports;
  var AMD =  true && __webpack_require__.amdO;
  var ARRAY_BUFFER = !root.JS_SHA256_NO_ARRAY_BUFFER && typeof ArrayBuffer !== 'undefined';
  var HEX_CHARS = '0123456789abcdef'.split('');
  var EXTRA = [-2147483648, 8388608, 32768, 128];
  var SHIFT = [24, 16, 8, 0];
  var K = [
    0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
    0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
    0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
    0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
    0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
    0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
    0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
    0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2
  ];
  var OUTPUT_TYPES = ['hex', 'array', 'digest', 'arrayBuffer'];

  var blocks = [];

  if (root.JS_SHA256_NO_NODE_JS || !Array.isArray) {
    Array.isArray = function (obj) {
      return Object.prototype.toString.call(obj) === '[object Array]';
    };
  }

  if (ARRAY_BUFFER && (root.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView)) {
    ArrayBuffer.isView = function (obj) {
      return typeof obj === 'object' && obj.buffer && obj.buffer.constructor === ArrayBuffer;
    };
  }

  var createOutputMethod = function (outputType, is224) {
    return function (message) {
      return new Sha256(is224, true).update(message)[outputType]();
    };
  };

  var createMethod = function (is224) {
    var method = createOutputMethod('hex', is224);
    if (NODE_JS) {
      method = nodeWrap(method, is224);
    }
    method.create = function () {
      return new Sha256(is224);
    };
    method.update = function (message) {
      return method.create().update(message);
    };
    for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
      var type = OUTPUT_TYPES[i];
      method[type] = createOutputMethod(type, is224);
    }
    return method;
  };

  var nodeWrap = function (method, is224) {
    var crypto = eval("require('crypto')");
    var Buffer = eval("require('buffer').Buffer");
    var algorithm = is224 ? 'sha224' : 'sha256';
    var nodeMethod = function (message) {
      if (typeof message === 'string') {
        return crypto.createHash(algorithm).update(message, 'utf8').digest('hex');
      } else {
        if (message === null || message === undefined) {
          throw new Error(ERROR);
        } else if (message.constructor === ArrayBuffer) {
          message = new Uint8Array(message);
        }
      }
      if (Array.isArray(message) || ArrayBuffer.isView(message) ||
        message.constructor === Buffer) {
        return crypto.createHash(algorithm).update(new Buffer(message)).digest('hex');
      } else {
        return method(message);
      }
    };
    return nodeMethod;
  };

  var createHmacOutputMethod = function (outputType, is224) {
    return function (key, message) {
      return new HmacSha256(key, is224, true).update(message)[outputType]();
    };
  };

  var createHmacMethod = function (is224) {
    var method = createHmacOutputMethod('hex', is224);
    method.create = function (key) {
      return new HmacSha256(key, is224);
    };
    method.update = function (key, message) {
      return method.create(key).update(message);
    };
    for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
      var type = OUTPUT_TYPES[i];
      method[type] = createHmacOutputMethod(type, is224);
    }
    return method;
  };

  function Sha256(is224, sharedMemory) {
    if (sharedMemory) {
      blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] =
        blocks[4] = blocks[5] = blocks[6] = blocks[7] =
        blocks[8] = blocks[9] = blocks[10] = blocks[11] =
        blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
      this.blocks = blocks;
    } else {
      this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    }

    if (is224) {
      this.h0 = 0xc1059ed8;
      this.h1 = 0x367cd507;
      this.h2 = 0x3070dd17;
      this.h3 = 0xf70e5939;
      this.h4 = 0xffc00b31;
      this.h5 = 0x68581511;
      this.h6 = 0x64f98fa7;
      this.h7 = 0xbefa4fa4;
    } else { // 256
      this.h0 = 0x6a09e667;
      this.h1 = 0xbb67ae85;
      this.h2 = 0x3c6ef372;
      this.h3 = 0xa54ff53a;
      this.h4 = 0x510e527f;
      this.h5 = 0x9b05688c;
      this.h6 = 0x1f83d9ab;
      this.h7 = 0x5be0cd19;
    }

    this.block = this.start = this.bytes = this.hBytes = 0;
    this.finalized = this.hashed = false;
    this.first = true;
    this.is224 = is224;
  }

  Sha256.prototype.update = function (message) {
    if (this.finalized) {
      return;
    }
    var notString, type = typeof message;
    if (type !== 'string') {
      if (type === 'object') {
        if (message === null) {
          throw new Error(ERROR);
        } else if (ARRAY_BUFFER && message.constructor === ArrayBuffer) {
          message = new Uint8Array(message);
        } else if (!Array.isArray(message)) {
          if (!ARRAY_BUFFER || !ArrayBuffer.isView(message)) {
            throw new Error(ERROR);
          }
        }
      } else {
        throw new Error(ERROR);
      }
      notString = true;
    }
    var code, index = 0, i, length = message.length, blocks = this.blocks;

    while (index < length) {
      if (this.hashed) {
        this.hashed = false;
        blocks[0] = this.block;
        blocks[16] = blocks[1] = blocks[2] = blocks[3] =
          blocks[4] = blocks[5] = blocks[6] = blocks[7] =
          blocks[8] = blocks[9] = blocks[10] = blocks[11] =
          blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
      }

      if (notString) {
        for (i = this.start; index < length && i < 64; ++index) {
          blocks[i >> 2] |= message[index] << SHIFT[i++ & 3];
        }
      } else {
        for (i = this.start; index < length && i < 64; ++index) {
          code = message.charCodeAt(index);
          if (code < 0x80) {
            blocks[i >> 2] |= code << SHIFT[i++ & 3];
          } else if (code < 0x800) {
            blocks[i >> 2] |= (0xc0 | (code >> 6)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
          } else if (code < 0xd800 || code >= 0xe000) {
            blocks[i >> 2] |= (0xe0 | (code >> 12)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | ((code >> 6) & 0x3f)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
          } else {
            code = 0x10000 + (((code & 0x3ff) << 10) | (message.charCodeAt(++index) & 0x3ff));
            blocks[i >> 2] |= (0xf0 | (code >> 18)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | ((code >> 12) & 0x3f)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | ((code >> 6) & 0x3f)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
          }
        }
      }

      this.lastByteIndex = i;
      this.bytes += i - this.start;
      if (i >= 64) {
        this.block = blocks[16];
        this.start = i - 64;
        this.hash();
        this.hashed = true;
      } else {
        this.start = i;
      }
    }
    if (this.bytes > 4294967295) {
      this.hBytes += this.bytes / 4294967296 << 0;
      this.bytes = this.bytes % 4294967296;
    }
    return this;
  };

  Sha256.prototype.finalize = function () {
    if (this.finalized) {
      return;
    }
    this.finalized = true;
    var blocks = this.blocks, i = this.lastByteIndex;
    blocks[16] = this.block;
    blocks[i >> 2] |= EXTRA[i & 3];
    this.block = blocks[16];
    if (i >= 56) {
      if (!this.hashed) {
        this.hash();
      }
      blocks[0] = this.block;
      blocks[16] = blocks[1] = blocks[2] = blocks[3] =
        blocks[4] = blocks[5] = blocks[6] = blocks[7] =
        blocks[8] = blocks[9] = blocks[10] = blocks[11] =
        blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
    }
    blocks[14] = this.hBytes << 3 | this.bytes >>> 29;
    blocks[15] = this.bytes << 3;
    this.hash();
  };

  Sha256.prototype.hash = function () {
    var a = this.h0, b = this.h1, c = this.h2, d = this.h3, e = this.h4, f = this.h5, g = this.h6,
      h = this.h7, blocks = this.blocks, j, s0, s1, maj, t1, t2, ch, ab, da, cd, bc;

    for (j = 16; j < 64; ++j) {
      // rightrotate
      t1 = blocks[j - 15];
      s0 = ((t1 >>> 7) | (t1 << 25)) ^ ((t1 >>> 18) | (t1 << 14)) ^ (t1 >>> 3);
      t1 = blocks[j - 2];
      s1 = ((t1 >>> 17) | (t1 << 15)) ^ ((t1 >>> 19) | (t1 << 13)) ^ (t1 >>> 10);
      blocks[j] = blocks[j - 16] + s0 + blocks[j - 7] + s1 << 0;
    }

    bc = b & c;
    for (j = 0; j < 64; j += 4) {
      if (this.first) {
        if (this.is224) {
          ab = 300032;
          t1 = blocks[0] - 1413257819;
          h = t1 - 150054599 << 0;
          d = t1 + 24177077 << 0;
        } else {
          ab = 704751109;
          t1 = blocks[0] - 210244248;
          h = t1 - 1521486534 << 0;
          d = t1 + 143694565 << 0;
        }
        this.first = false;
      } else {
        s0 = ((a >>> 2) | (a << 30)) ^ ((a >>> 13) | (a << 19)) ^ ((a >>> 22) | (a << 10));
        s1 = ((e >>> 6) | (e << 26)) ^ ((e >>> 11) | (e << 21)) ^ ((e >>> 25) | (e << 7));
        ab = a & b;
        maj = ab ^ (a & c) ^ bc;
        ch = (e & f) ^ (~e & g);
        t1 = h + s1 + ch + K[j] + blocks[j];
        t2 = s0 + maj;
        h = d + t1 << 0;
        d = t1 + t2 << 0;
      }
      s0 = ((d >>> 2) | (d << 30)) ^ ((d >>> 13) | (d << 19)) ^ ((d >>> 22) | (d << 10));
      s1 = ((h >>> 6) | (h << 26)) ^ ((h >>> 11) | (h << 21)) ^ ((h >>> 25) | (h << 7));
      da = d & a;
      maj = da ^ (d & b) ^ ab;
      ch = (h & e) ^ (~h & f);
      t1 = g + s1 + ch + K[j + 1] + blocks[j + 1];
      t2 = s0 + maj;
      g = c + t1 << 0;
      c = t1 + t2 << 0;
      s0 = ((c >>> 2) | (c << 30)) ^ ((c >>> 13) | (c << 19)) ^ ((c >>> 22) | (c << 10));
      s1 = ((g >>> 6) | (g << 26)) ^ ((g >>> 11) | (g << 21)) ^ ((g >>> 25) | (g << 7));
      cd = c & d;
      maj = cd ^ (c & a) ^ da;
      ch = (g & h) ^ (~g & e);
      t1 = f + s1 + ch + K[j + 2] + blocks[j + 2];
      t2 = s0 + maj;
      f = b + t1 << 0;
      b = t1 + t2 << 0;
      s0 = ((b >>> 2) | (b << 30)) ^ ((b >>> 13) | (b << 19)) ^ ((b >>> 22) | (b << 10));
      s1 = ((f >>> 6) | (f << 26)) ^ ((f >>> 11) | (f << 21)) ^ ((f >>> 25) | (f << 7));
      bc = b & c;
      maj = bc ^ (b & d) ^ cd;
      ch = (f & g) ^ (~f & h);
      t1 = e + s1 + ch + K[j + 3] + blocks[j + 3];
      t2 = s0 + maj;
      e = a + t1 << 0;
      a = t1 + t2 << 0;
    }

    this.h0 = this.h0 + a << 0;
    this.h1 = this.h1 + b << 0;
    this.h2 = this.h2 + c << 0;
    this.h3 = this.h3 + d << 0;
    this.h4 = this.h4 + e << 0;
    this.h5 = this.h5 + f << 0;
    this.h6 = this.h6 + g << 0;
    this.h7 = this.h7 + h << 0;
  };

  Sha256.prototype.hex = function () {
    this.finalize();

    var h0 = this.h0, h1 = this.h1, h2 = this.h2, h3 = this.h3, h4 = this.h4, h5 = this.h5,
      h6 = this.h6, h7 = this.h7;

    var hex = HEX_CHARS[(h0 >> 28) & 0x0F] + HEX_CHARS[(h0 >> 24) & 0x0F] +
      HEX_CHARS[(h0 >> 20) & 0x0F] + HEX_CHARS[(h0 >> 16) & 0x0F] +
      HEX_CHARS[(h0 >> 12) & 0x0F] + HEX_CHARS[(h0 >> 8) & 0x0F] +
      HEX_CHARS[(h0 >> 4) & 0x0F] + HEX_CHARS[h0 & 0x0F] +
      HEX_CHARS[(h1 >> 28) & 0x0F] + HEX_CHARS[(h1 >> 24) & 0x0F] +
      HEX_CHARS[(h1 >> 20) & 0x0F] + HEX_CHARS[(h1 >> 16) & 0x0F] +
      HEX_CHARS[(h1 >> 12) & 0x0F] + HEX_CHARS[(h1 >> 8) & 0x0F] +
      HEX_CHARS[(h1 >> 4) & 0x0F] + HEX_CHARS[h1 & 0x0F] +
      HEX_CHARS[(h2 >> 28) & 0x0F] + HEX_CHARS[(h2 >> 24) & 0x0F] +
      HEX_CHARS[(h2 >> 20) & 0x0F] + HEX_CHARS[(h2 >> 16) & 0x0F] +
      HEX_CHARS[(h2 >> 12) & 0x0F] + HEX_CHARS[(h2 >> 8) & 0x0F] +
      HEX_CHARS[(h2 >> 4) & 0x0F] + HEX_CHARS[h2 & 0x0F] +
      HEX_CHARS[(h3 >> 28) & 0x0F] + HEX_CHARS[(h3 >> 24) & 0x0F] +
      HEX_CHARS[(h3 >> 20) & 0x0F] + HEX_CHARS[(h3 >> 16) & 0x0F] +
      HEX_CHARS[(h3 >> 12) & 0x0F] + HEX_CHARS[(h3 >> 8) & 0x0F] +
      HEX_CHARS[(h3 >> 4) & 0x0F] + HEX_CHARS[h3 & 0x0F] +
      HEX_CHARS[(h4 >> 28) & 0x0F] + HEX_CHARS[(h4 >> 24) & 0x0F] +
      HEX_CHARS[(h4 >> 20) & 0x0F] + HEX_CHARS[(h4 >> 16) & 0x0F] +
      HEX_CHARS[(h4 >> 12) & 0x0F] + HEX_CHARS[(h4 >> 8) & 0x0F] +
      HEX_CHARS[(h4 >> 4) & 0x0F] + HEX_CHARS[h4 & 0x0F] +
      HEX_CHARS[(h5 >> 28) & 0x0F] + HEX_CHARS[(h5 >> 24) & 0x0F] +
      HEX_CHARS[(h5 >> 20) & 0x0F] + HEX_CHARS[(h5 >> 16) & 0x0F] +
      HEX_CHARS[(h5 >> 12) & 0x0F] + HEX_CHARS[(h5 >> 8) & 0x0F] +
      HEX_CHARS[(h5 >> 4) & 0x0F] + HEX_CHARS[h5 & 0x0F] +
      HEX_CHARS[(h6 >> 28) & 0x0F] + HEX_CHARS[(h6 >> 24) & 0x0F] +
      HEX_CHARS[(h6 >> 20) & 0x0F] + HEX_CHARS[(h6 >> 16) & 0x0F] +
      HEX_CHARS[(h6 >> 12) & 0x0F] + HEX_CHARS[(h6 >> 8) & 0x0F] +
      HEX_CHARS[(h6 >> 4) & 0x0F] + HEX_CHARS[h6 & 0x0F];
    if (!this.is224) {
      hex += HEX_CHARS[(h7 >> 28) & 0x0F] + HEX_CHARS[(h7 >> 24) & 0x0F] +
        HEX_CHARS[(h7 >> 20) & 0x0F] + HEX_CHARS[(h7 >> 16) & 0x0F] +
        HEX_CHARS[(h7 >> 12) & 0x0F] + HEX_CHARS[(h7 >> 8) & 0x0F] +
        HEX_CHARS[(h7 >> 4) & 0x0F] + HEX_CHARS[h7 & 0x0F];
    }
    return hex;
  };

  Sha256.prototype.toString = Sha256.prototype.hex;

  Sha256.prototype.digest = function () {
    this.finalize();

    var h0 = this.h0, h1 = this.h1, h2 = this.h2, h3 = this.h3, h4 = this.h4, h5 = this.h5,
      h6 = this.h6, h7 = this.h7;

    var arr = [
      (h0 >> 24) & 0xFF, (h0 >> 16) & 0xFF, (h0 >> 8) & 0xFF, h0 & 0xFF,
      (h1 >> 24) & 0xFF, (h1 >> 16) & 0xFF, (h1 >> 8) & 0xFF, h1 & 0xFF,
      (h2 >> 24) & 0xFF, (h2 >> 16) & 0xFF, (h2 >> 8) & 0xFF, h2 & 0xFF,
      (h3 >> 24) & 0xFF, (h3 >> 16) & 0xFF, (h3 >> 8) & 0xFF, h3 & 0xFF,
      (h4 >> 24) & 0xFF, (h4 >> 16) & 0xFF, (h4 >> 8) & 0xFF, h4 & 0xFF,
      (h5 >> 24) & 0xFF, (h5 >> 16) & 0xFF, (h5 >> 8) & 0xFF, h5 & 0xFF,
      (h6 >> 24) & 0xFF, (h6 >> 16) & 0xFF, (h6 >> 8) & 0xFF, h6 & 0xFF
    ];
    if (!this.is224) {
      arr.push((h7 >> 24) & 0xFF, (h7 >> 16) & 0xFF, (h7 >> 8) & 0xFF, h7 & 0xFF);
    }
    return arr;
  };

  Sha256.prototype.array = Sha256.prototype.digest;

  Sha256.prototype.arrayBuffer = function () {
    this.finalize();

    var buffer = new ArrayBuffer(this.is224 ? 28 : 32);
    var dataView = new DataView(buffer);
    dataView.setUint32(0, this.h0);
    dataView.setUint32(4, this.h1);
    dataView.setUint32(8, this.h2);
    dataView.setUint32(12, this.h3);
    dataView.setUint32(16, this.h4);
    dataView.setUint32(20, this.h5);
    dataView.setUint32(24, this.h6);
    if (!this.is224) {
      dataView.setUint32(28, this.h7);
    }
    return buffer;
  };

  function HmacSha256(key, is224, sharedMemory) {
    var i, type = typeof key;
    if (type === 'string') {
      var bytes = [], length = key.length, index = 0, code;
      for (i = 0; i < length; ++i) {
        code = key.charCodeAt(i);
        if (code < 0x80) {
          bytes[index++] = code;
        } else if (code < 0x800) {
          bytes[index++] = (0xc0 | (code >> 6));
          bytes[index++] = (0x80 | (code & 0x3f));
        } else if (code < 0xd800 || code >= 0xe000) {
          bytes[index++] = (0xe0 | (code >> 12));
          bytes[index++] = (0x80 | ((code >> 6) & 0x3f));
          bytes[index++] = (0x80 | (code & 0x3f));
        } else {
          code = 0x10000 + (((code & 0x3ff) << 10) | (key.charCodeAt(++i) & 0x3ff));
          bytes[index++] = (0xf0 | (code >> 18));
          bytes[index++] = (0x80 | ((code >> 12) & 0x3f));
          bytes[index++] = (0x80 | ((code >> 6) & 0x3f));
          bytes[index++] = (0x80 | (code & 0x3f));
        }
      }
      key = bytes;
    } else {
      if (type === 'object') {
        if (key === null) {
          throw new Error(ERROR);
        } else if (ARRAY_BUFFER && key.constructor === ArrayBuffer) {
          key = new Uint8Array(key);
        } else if (!Array.isArray(key)) {
          if (!ARRAY_BUFFER || !ArrayBuffer.isView(key)) {
            throw new Error(ERROR);
          }
        }
      } else {
        throw new Error(ERROR);
      }
    }

    if (key.length > 64) {
      key = (new Sha256(is224, true)).update(key).array();
    }

    var oKeyPad = [], iKeyPad = [];
    for (i = 0; i < 64; ++i) {
      var b = key[i] || 0;
      oKeyPad[i] = 0x5c ^ b;
      iKeyPad[i] = 0x36 ^ b;
    }

    Sha256.call(this, is224, sharedMemory);

    this.update(iKeyPad);
    this.oKeyPad = oKeyPad;
    this.inner = true;
    this.sharedMemory = sharedMemory;
  }
  HmacSha256.prototype = new Sha256();

  HmacSha256.prototype.finalize = function () {
    Sha256.prototype.finalize.call(this);
    if (this.inner) {
      this.inner = false;
      var innerHash = this.array();
      Sha256.call(this, this.is224, this.sharedMemory);
      this.update(this.oKeyPad);
      this.update(innerHash);
      Sha256.prototype.finalize.call(this);
    }
  };

  var exports = createMethod();
  exports.sha256 = exports;
  exports.sha224 = createMethod(true);
  exports.sha256.hmac = createHmacMethod();
  exports.sha224.hmac = createHmacMethod(true);

  if (COMMON_JS) {
    module.exports = exports;
  } else {
    root.sha256 = exports.sha256;
    root.sha224 = exports.sha224;
    if (AMD) {
      !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
        return exports;
      }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
  }
})();


/***/ }),

/***/ 2658:
/***/ (function(module) {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_SAFE_INTEGER = 9007199254740991,
    MAX_INTEGER = 1.7976931348623157e+308,
    NAN = 0 / 0;

/** `Object#toString` result references. */
var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeCeil = Math.ceil,
    nativeMax = Math.max;

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

/**
 * Creates an array of elements split into groups the length of `size`.
 * If `array` can't be split evenly, the final chunk will be the remaining
 * elements.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to process.
 * @param {number} [size=1] The length of each chunk
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the new array of chunks.
 * @example
 *
 * _.chunk(['a', 'b', 'c', 'd'], 2);
 * // => [['a', 'b'], ['c', 'd']]
 *
 * _.chunk(['a', 'b', 'c', 'd'], 3);
 * // => [['a', 'b', 'c'], ['d']]
 */
function chunk(array, size, guard) {
  if ((guard ? isIterateeCall(array, size, guard) : size === undefined)) {
    size = 1;
  } else {
    size = nativeMax(toInteger(size), 0);
  }
  var length = array ? array.length : 0;
  if (!length || size < 1) {
    return [];
  }
  var index = 0,
      resIndex = 0,
      result = Array(nativeCeil(length / size));

  while (index < length) {
    result[resIndex++] = baseSlice(array, index, (index += size));
  }
  return result;
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = chunk;


/***/ }),

/***/ 5316:
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used to compose bitmasks for comparison styles. */
var UNORDERED_COMPARE_FLAG = 1,
    PARTIAL_COMPARE_FLAG = 2;

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/,
    reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding('util');
  } catch (e) {}
}());

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

/**
 * The base implementation of `_.sortBy` which uses `comparer` to define the
 * sort order of `array` and replaces criteria objects with their corresponding
 * values.
 *
 * @private
 * @param {Array} array The array to sort.
 * @param {Function} comparer The function to define sort order.
 * @returns {Array} Returns `array`.
 */
function baseSortBy(array, comparer) {
  var length = array.length;

  array.sort(comparer);
  while (length--) {
    array[length] = array[length].value;
  }
  return array;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values ? values.length : 0;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  this.__data__ = new ListCache(entries);
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  return this.__data__['delete'](key);
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var cache = this.__data__;
  if (cache instanceof ListCache) {
    var pairs = cache.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      return this;
    }
    cache = this.__data__ = new MapCache(pairs);
  }
  cache.set(key, value);
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = isKey(path, object) ? [path] : castPath(path);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  return objectToString.call(value);
}

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {boolean} [bitmask] The bitmask of comparison flags.
 *  The bitmask may be composed of the following flags:
 *     1 - Unordered comparison
 *     2 - Partial comparison
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, customizer, bitmask, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, baseIsEqual, customizer, bitmask, stack);
}

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, equalFunc, customizer, bitmask, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = arrayTag,
      othTag = arrayTag;

  if (!objIsArr) {
    objTag = getTag(object);
    objTag = objTag == argsTag ? objectTag : objTag;
  }
  if (!othIsArr) {
    othTag = getTag(other);
    othTag = othTag == argsTag ? objectTag : othTag;
  }
  var objIsObj = objTag == objectTag && !isHostObject(object),
      othIsObj = othTag == objectTag && !isHostObject(other),
      isSameTag = objTag == othTag;

  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, equalFunc, customizer, bitmask, stack)
      : equalByTag(object, other, objTag, equalFunc, customizer, bitmask, stack);
  }
  if (!(bitmask & PARTIAL_COMPARE_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, customizer, bitmask, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, equalFunc, customizer, bitmask, stack);
}

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, customizer, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
}

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap(collection, iteratee) {
  var index = -1,
      result = isArrayLike(collection) ? Array(collection.length) : [];

  baseEach(collection, function(value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, undefined, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG);
  };
}

/**
 * The base implementation of `_.orderBy` without param guards.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
 * @param {string[]} orders The sort orders of `iteratees`.
 * @returns {Array} Returns the new sorted array.
 */
function baseOrderBy(collection, iteratees, orders) {
  var index = -1;
  iteratees = arrayMap(iteratees.length ? iteratees : [identity], baseUnary(baseIteratee));

  var result = baseMap(collection, function(value, key, collection) {
    var criteria = arrayMap(iteratees, function(iteratee) {
      return iteratee(value);
    });
    return { 'criteria': criteria, 'index': ++index, 'value': value };
  });

  return baseSortBy(result, function(object, other) {
    return compareMultiple(object, other, orders);
  });
}

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value) {
  return isArray(value) ? value : stringToPath(value);
}

/**
 * Compares values to sort them in ascending order.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {number} Returns the sort order indicator for `value`.
 */
function compareAscending(value, other) {
  if (value !== other) {
    var valIsDefined = value !== undefined,
        valIsNull = value === null,
        valIsReflexive = value === value,
        valIsSymbol = isSymbol(value);

    var othIsDefined = other !== undefined,
        othIsNull = other === null,
        othIsReflexive = other === other,
        othIsSymbol = isSymbol(other);

    if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
        (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
        (valIsNull && othIsDefined && othIsReflexive) ||
        (!valIsDefined && othIsReflexive) ||
        !valIsReflexive) {
      return 1;
    }
    if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
        (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
        (othIsNull && valIsDefined && valIsReflexive) ||
        (!othIsDefined && valIsReflexive) ||
        !othIsReflexive) {
      return -1;
    }
  }
  return 0;
}

/**
 * Used by `_.orderBy` to compare multiple properties of a value to another
 * and stable sort them.
 *
 * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
 * specify an order of "desc" for descending or "asc" for ascending sort order
 * of corresponding values.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {boolean[]|string[]} orders The order to sort by for each property.
 * @returns {number} Returns the sort order indicator for `object`.
 */
function compareMultiple(object, other, orders) {
  var index = -1,
      objCriteria = object.criteria,
      othCriteria = other.criteria,
      length = objCriteria.length,
      ordersLength = orders.length;

  while (++index < length) {
    var result = compareAscending(objCriteria[index], othCriteria[index]);
    if (result) {
      if (index >= ordersLength) {
        return result;
      }
      var order = orders[index];
      return result * (order == 'desc' ? -1 : 1);
    }
  }
  // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
  // that causes it, under certain circumstances, to provide the same value for
  // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
  // for more details.
  //
  // This also ensures a stable sort in V8 and other engines.
  // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
  return object.index - other.index;
}

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} customizer The function to customize comparisons.
 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, equalFunc, customizer, bitmask, stack) {
  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & UNORDERED_COMPARE_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!seen.has(othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
              return seen.add(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, customizer, bitmask, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} customizer The function to customize comparisons.
 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, equalFunc, customizer, bitmask, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & PARTIAL_COMPARE_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= UNORDERED_COMPARE_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), equalFunc, customizer, bitmask, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} customizer The function to customize comparisons.
 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, equalFunc, customizer, bitmask, stack) {
  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
      objProps = keys(object),
      objLength = objProps.length,
      othProps = keys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = objectToString.call(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : undefined;

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = isKey(path, object) ? [path] : castPath(path);

  var result,
      index = -1,
      length = path.length;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result) {
    return result;
  }
  var length = object ? object.length : 0;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoize(function(string) {
  string = toString(string);

  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * This method is like `_.sortBy` except that it allows specifying the sort
 * orders of the iteratees to sort by. If `orders` is unspecified, all values
 * are sorted in ascending order. Otherwise, specify an order of "desc" for
 * descending or "asc" for ascending sort order of corresponding values.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Array[]|Function[]|Object[]|string[]} [iteratees=[_.identity]]
 *  The iteratees to sort by.
 * @param {string[]} [orders] The sort orders of `iteratees`.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
 * @returns {Array} Returns the new sorted array.
 * @example
 *
 * var users = [
 *   { 'user': 'fred',   'age': 48 },
 *   { 'user': 'barney', 'age': 34 },
 *   { 'user': 'fred',   'age': 40 },
 *   { 'user': 'barney', 'age': 36 }
 * ];
 *
 * // Sort by `user` in ascending order and by `age` in descending order.
 * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
 * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
 */
function orderBy(collection, iteratees, orders, guard) {
  if (collection == null) {
    return [];
  }
  if (!isArray(iteratees)) {
    iteratees = iteratees == null ? [] : [iteratees];
  }
  orders = guard ? undefined : orders;
  if (!isArray(orders)) {
    orders = orders == null ? [] : [orders];
  }
  return baseOrderBy(collection, iteratees, orders);
}

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Assign cache to `_.memoize`.
memoize.Cache = MapCache;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = orderBy;


/***/ }),

/***/ 8418:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;

function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
__webpack_unused_export__ = ({
    value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(__webpack_require__(7294));
var _router = __webpack_require__(6273);
var _router1 = __webpack_require__(387);
var _useIntersection = __webpack_require__(7190);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var prefetched = {};
function prefetch(router, href, as, options) {
    if ( false || !router) return;
    if (!(0, _router).isLocalURL(href)) return;
    // Prefetch the JSON page if asked (only in the client)
    // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch
    router.prefetch(href, as, options).catch(function(err) {
        if (false) {}
    });
    var curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale;
    // Join on an invalid URI character
    prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}
function isModifiedEvent(event) {
    var target = event.currentTarget.target;
    return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
    var nodeName = e.currentTarget.nodeName;
    // anchors inside an svg have a lowercase nodeName
    var isAnchorNodeName = nodeName.toUpperCase() === 'A';
    if (isAnchorNodeName && (isModifiedEvent(e) || !(0, _router).isLocalURL(href))) {
        // ignore click for browser’s default behavior
        return;
    }
    e.preventDefault();
    // replace state instead of push if prop is present
    router[replace ? 'replace' : 'push'](href, as, {
        shallow: shallow,
        locale: locale,
        scroll: scroll
    });
}
function Link(props) {
    if (false) { var hasWarned, optionalProps, optionalPropsGuard, requiredProps, requiredPropsGuard, createPropError; }
    var p = props.prefetch !== false;
    var router = (0, _router1).useRouter();
    var ref2 = _react.default.useMemo(function() {
        var ref = _slicedToArray((0, _router).resolveHref(router, props.href, true), 2), resolvedHref = ref[0], resolvedAs = ref[1];
        return {
            href: resolvedHref,
            as: props.as ? (0, _router).resolveHref(router, props.as) : resolvedAs || resolvedHref
        };
    }, [
        router,
        props.href,
        props.as
    ]), href = ref2.href, as = ref2.as;
    var children = props.children, replace = props.replace, shallow = props.shallow, scroll = props.scroll, locale = props.locale;
    if (typeof children === 'string') {
        children = /*#__PURE__*/ _react.default.createElement("a", null, children);
    }
    // This will return the first child, if multiple are provided it will throw an error
    var child;
    if (false) {} else {
        child = _react.default.Children.only(children);
    }
    var childRef = child && typeof child === 'object' && child.ref;
    var ref1 = _slicedToArray((0, _useIntersection).useIntersection({
        rootMargin: '200px'
    }), 2), setIntersectionRef = ref1[0], isVisible = ref1[1];
    var setRef = _react.default.useCallback(function(el) {
        setIntersectionRef(el);
        if (childRef) {
            if (typeof childRef === 'function') childRef(el);
            else if (typeof childRef === 'object') {
                childRef.current = el;
            }
        }
    }, [
        childRef,
        setIntersectionRef
    ]);
    _react.default.useEffect(function() {
        var shouldPrefetch = isVisible && p && (0, _router).isLocalURL(href);
        var curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
        var isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];
        if (shouldPrefetch && !isPrefetched) {
            prefetch(router, href, as, {
                locale: curLocale
            });
        }
    }, [
        as,
        href,
        isVisible,
        locale,
        p,
        router
    ]);
    var childProps = {
        ref: setRef,
        onClick: function(e) {
            if (false) {}
            if (child.props && typeof child.props.onClick === 'function') {
                child.props.onClick(e);
            }
            if (!e.defaultPrevented) {
                linkClicked(e, router, href, as, replace, shallow, scroll, locale);
            }
        }
    };
    childProps.onMouseEnter = function(e) {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
            child.props.onMouseEnter(e);
        }
        if ((0, _router).isLocalURL(href)) {
            prefetch(router, href, as, {
                priority: true
            });
        }
    };
    // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user
    if (props.passHref || child.type === 'a' && !('href' in child.props)) {
        var curLocale1 = typeof locale !== 'undefined' ? locale : router && router.locale;
        // we only render domain locales if we are currently on a domain locale
        // so that locale links are still visitable in development/preview envs
        var localeDomain = router && router.isLocaleDomain && (0, _router).getDomainLocale(as, curLocale1, router && router.locales, router && router.domainLocales);
        childProps.href = localeDomain || (0, _router).addBasePath((0, _router).addLocale(as, curLocale1, router && router.defaultLocale));
    }
    return(/*#__PURE__*/ _react.default.cloneElement(child, childProps));
}
var _default = Link;
exports["default"] = _default; //# sourceMappingURL=link.js.map


/***/ }),

/***/ 7190:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.useIntersection = useIntersection;
var _react = __webpack_require__(7294);
var _requestIdleCallback = __webpack_require__(9311);
var hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';
function useIntersection(param) {
    var rootRef = param.rootRef, rootMargin = param.rootMargin, disabled = param.disabled;
    var isDisabled = disabled || !hasIntersectionObserver;
    var unobserve = (0, _react).useRef();
    var ref = _slicedToArray((0, _react).useState(false), 2), visible = ref[0], setVisible = ref[1];
    var ref1 = _slicedToArray((0, _react).useState(rootRef ? rootRef.current : null), 2), root = ref1[0], setRoot = ref1[1];
    var setRef = (0, _react).useCallback(function(el) {
        if (unobserve.current) {
            unobserve.current();
            unobserve.current = undefined;
        }
        if (isDisabled || visible) return;
        if (el && el.tagName) {
            unobserve.current = observe(el, function(isVisible) {
                return isVisible && setVisible(isVisible);
            }, {
                root: root,
                rootMargin: rootMargin
            });
        }
    }, [
        isDisabled,
        root,
        rootMargin,
        visible
    ]);
    (0, _react).useEffect(function() {
        if (!hasIntersectionObserver) {
            if (!visible) {
                var idleCallback = (0, _requestIdleCallback).requestIdleCallback(function() {
                    return setVisible(true);
                });
                return function() {
                    return (0, _requestIdleCallback).cancelIdleCallback(idleCallback);
                };
            }
        }
    }, [
        visible
    ]);
    (0, _react).useEffect(function() {
        if (rootRef) setRoot(rootRef.current);
    }, [
        rootRef
    ]);
    return [
        setRef,
        visible
    ];
}
function observe(element, callback, options) {
    var ref = createObserver(options), id = ref.id, observer = ref.observer, elements = ref.elements;
    elements.set(element, callback);
    observer.observe(element);
    return function unobserve() {
        elements.delete(element);
        observer.unobserve(element);
        // Destroy observer when there's nothing left to watch:
        if (elements.size === 0) {
            observer.disconnect();
            observers.delete(id);
            var index = idList.findIndex(function(obj) {
                return obj.root === id.root && obj.margin === id.margin;
            });
            if (index > -1) {
                idList.splice(index, 1);
            }
        }
    };
}
var observers = new Map();
var idList = [];
function createObserver(options) {
    var id = {
        root: options.root || null,
        margin: options.rootMargin || ''
    };
    var existing = idList.find(function(obj) {
        return obj.root === id.root && obj.margin === id.margin;
    });
    var instance;
    if (existing) {
        instance = observers.get(existing);
    } else {
        instance = observers.get(id);
        idList.push(id);
    }
    if (instance) {
        return instance;
    }
    var elements = new Map();
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            var callback = elements.get(entry.target);
            var isVisible = entry.isIntersecting || entry.intersectionRatio > 0;
            if (callback && isVisible) {
                callback(isVisible);
            }
        });
    }, options);
    observers.set(id, instance = {
        id: id,
        observer: observer,
        elements: elements
    });
    return instance;
} //# sourceMappingURL=use-intersection.js.map


/***/ }),

/***/ 8877:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": function() { return /* binding */ useAnchorWallet; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _useWallet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7257);


function useAnchorWallet() {
    var ref = (0,_useWallet__WEBPACK_IMPORTED_MODULE_1__/* .useWallet */ .O)(), publicKey = ref.publicKey, signTransaction = ref.signTransaction, signAllTransactions = ref.signAllTransactions;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function() {
        return publicKey && signTransaction && signAllTransactions ? {
            publicKey: publicKey,
            signTransaction: signTransaction,
            signAllTransactions: signAllTransactions
        } : undefined;
    }, [
        publicKey,
        signTransaction,
        signAllTransactions
    ]);
} //# sourceMappingURL=useAnchorWallet.js.map


/***/ }),

/***/ 7596:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var __dirname = "/";
/* provided dependency */ var process = __webpack_require__(4155);
/* provided dependency */ var Buffer = __webpack_require__(8764)["Buffer"];
(function(){var e={901:function(e){e.exports=function(e,r,n){if(e.filter)return e.filter(r,n);if(void 0===e||null===e)throw new TypeError;if("function"!=typeof r)throw new TypeError;var o=[];for(var a=0;a<e.length;a++){if(!t.call(e,a))continue;var i=e[a];if(r.call(n,i,a,e))o.push(i)}return o};var t=Object.prototype.hasOwnProperty},313:function(e,t,r){"use strict";function _typeof(e){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(e){return typeof e}}else{_typeof=function _typeof(e){return e&&typeof Symbol==="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}}return _typeof(e)}function _classCallCheck(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}var n=r(823),o=n.codes,a=o.ERR_AMBIGUOUS_ARGUMENT,i=o.ERR_INVALID_ARG_TYPE,c=o.ERR_INVALID_ARG_VALUE,u=o.ERR_INVALID_RETURN_VALUE,f=o.ERR_MISSING_ARGS;var s=r(298);var p=r(650),l=p.inspect;var y=r(650).types,d=y.isPromise,g=y.isRegExp;var v=Object.assign?Object.assign:r(274).assign;var b=Object.is?Object.is:r(450);var h=new Map;var m;var A;var S;var E;var P;function lazyLoadComparison(){var e=r(655);m=e.isDeepEqual;A=e.isDeepStrictEqual}var w=/[\x00-\x08\x0b\x0c\x0e-\x1f]/g;var O=null&&0;var j=function escapeFn(e){return O[e.charCodeAt(0)]};var _=false;var x=e.exports=ok;var I={};function innerFail(e){if(e.message instanceof Error)throw e.message;throw new s(e)}function fail(e,t,r,n,o){var a=arguments.length;var i;if(a===0){i="Failed"}else if(a===1){r=e;e=undefined}else{if(_===false){_=true;var c=process.emitWarning?process.emitWarning:console.warn.bind(console);c("assert.fail() with more than one argument is deprecated. "+"Please use assert.strictEqual() instead or only pass a message.","DeprecationWarning","DEP0094")}if(a===2)n="!="}if(r instanceof Error)throw r;var u={actual:e,expected:t,operator:n===undefined?"fail":n,stackStartFn:o||fail};if(r!==undefined){u.message=r}var f=new s(u);if(i){f.message=i;f.generatedMessage=true}throw f}x.fail=fail;x.AssertionError=s;function innerOk(e,t,r,n){if(!r){var o=false;if(t===0){o=true;n="No value argument passed to `assert.ok()`"}else if(n instanceof Error){throw n}var a=new s({actual:r,expected:true,message:n,operator:"==",stackStartFn:e});a.generatedMessage=o;throw a}}function ok(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++){t[r]=arguments[r]}innerOk.apply(void 0,[ok,t.length].concat(t))}x.ok=ok;x.equal=function equal(e,t,r){if(arguments.length<2){throw new f("actual","expected")}if(e!=t){innerFail({actual:e,expected:t,message:r,operator:"==",stackStartFn:equal})}};x.notEqual=function notEqual(e,t,r){if(arguments.length<2){throw new f("actual","expected")}if(e==t){innerFail({actual:e,expected:t,message:r,operator:"!=",stackStartFn:notEqual})}};x.deepEqual=function deepEqual(e,t,r){if(arguments.length<2){throw new f("actual","expected")}if(m===undefined)lazyLoadComparison();if(!m(e,t)){innerFail({actual:e,expected:t,message:r,operator:"deepEqual",stackStartFn:deepEqual})}};x.notDeepEqual=function notDeepEqual(e,t,r){if(arguments.length<2){throw new f("actual","expected")}if(m===undefined)lazyLoadComparison();if(m(e,t)){innerFail({actual:e,expected:t,message:r,operator:"notDeepEqual",stackStartFn:notDeepEqual})}};x.deepStrictEqual=function deepStrictEqual(e,t,r){if(arguments.length<2){throw new f("actual","expected")}if(m===undefined)lazyLoadComparison();if(!A(e,t)){innerFail({actual:e,expected:t,message:r,operator:"deepStrictEqual",stackStartFn:deepStrictEqual})}};x.notDeepStrictEqual=notDeepStrictEqual;function notDeepStrictEqual(e,t,r){if(arguments.length<2){throw new f("actual","expected")}if(m===undefined)lazyLoadComparison();if(A(e,t)){innerFail({actual:e,expected:t,message:r,operator:"notDeepStrictEqual",stackStartFn:notDeepStrictEqual})}}x.strictEqual=function strictEqual(e,t,r){if(arguments.length<2){throw new f("actual","expected")}if(!b(e,t)){innerFail({actual:e,expected:t,message:r,operator:"strictEqual",stackStartFn:strictEqual})}};x.notStrictEqual=function notStrictEqual(e,t,r){if(arguments.length<2){throw new f("actual","expected")}if(b(e,t)){innerFail({actual:e,expected:t,message:r,operator:"notStrictEqual",stackStartFn:notStrictEqual})}};var F=function Comparison(e,t,r){var n=this;_classCallCheck(this,Comparison);t.forEach((function(t){if(t in e){if(r!==undefined&&typeof r[t]==="string"&&g(e[t])&&e[t].test(r[t])){n[t]=r[t]}else{n[t]=e[t]}}}))};function compareExceptionKey(e,t,r,n,o,a){if(!(r in e)||!A(e[r],t[r])){if(!n){var i=new F(e,o);var c=new F(t,o,e);var u=new s({actual:i,expected:c,operator:"deepStrictEqual",stackStartFn:a});u.actual=e;u.expected=t;u.operator=a.name;throw u}innerFail({actual:e,expected:t,message:n,operator:a.name,stackStartFn:a})}}function expectedException(e,t,r,n){if(typeof t!=="function"){if(g(t))return t.test(e);if(arguments.length===2){throw new i("expected",["Function","RegExp"],t)}if(_typeof(e)!=="object"||e===null){var o=new s({actual:e,expected:t,message:r,operator:"deepStrictEqual",stackStartFn:n});o.operator=n.name;throw o}var a=Object.keys(t);if(t instanceof Error){a.push("name","message")}else if(a.length===0){throw new c("error",t,"may not be an empty object")}if(m===undefined)lazyLoadComparison();a.forEach((function(o){if(typeof e[o]==="string"&&g(t[o])&&t[o].test(e[o])){return}compareExceptionKey(e,t,o,r,a,n)}));return true}if(t.prototype!==undefined&&e instanceof t){return true}if(Error.isPrototypeOf(t)){return false}return t.call({},e)===true}function getActual(e){if(typeof e!=="function"){throw new i("fn","Function",e)}try{e()}catch(e){return e}return I}function checkIsPromise(e){return d(e)||e!==null&&_typeof(e)==="object"&&typeof e.then==="function"&&typeof e.catch==="function"}function waitForActual(e){return Promise.resolve().then((function(){var t;if(typeof e==="function"){t=e();if(!checkIsPromise(t)){throw new u("instance of Promise","promiseFn",t)}}else if(checkIsPromise(e)){t=e}else{throw new i("promiseFn",["Function","Promise"],e)}return Promise.resolve().then((function(){return t})).then((function(){return I})).catch((function(e){return e}))}))}function expectsError(e,t,r,n){if(typeof r==="string"){if(arguments.length===4){throw new i("error",["Object","Error","Function","RegExp"],r)}if(_typeof(t)==="object"&&t!==null){if(t.message===r){throw new a("error/message",'The error message "'.concat(t.message,'" is identical to the message.'))}}else if(t===r){throw new a("error/message",'The error "'.concat(t,'" is identical to the message.'))}n=r;r=undefined}else if(r!=null&&_typeof(r)!=="object"&&typeof r!=="function"){throw new i("error",["Object","Error","Function","RegExp"],r)}if(t===I){var o="";if(r&&r.name){o+=" (".concat(r.name,")")}o+=n?": ".concat(n):".";var c=e.name==="rejects"?"rejection":"exception";innerFail({actual:undefined,expected:r,operator:e.name,message:"Missing expected ".concat(c).concat(o),stackStartFn:e})}if(r&&!expectedException(t,r,n,e)){throw t}}function expectsNoError(e,t,r,n){if(t===I)return;if(typeof r==="string"){n=r;r=undefined}if(!r||expectedException(t,r)){var o=n?": ".concat(n):".";var a=e.name==="doesNotReject"?"rejection":"exception";innerFail({actual:t,expected:r,operator:e.name,message:"Got unwanted ".concat(a).concat(o,"\n")+'Actual message: "'.concat(t&&t.message,'"'),stackStartFn:e})}throw t}x.throws=function throws(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++){r[n-1]=arguments[n]}expectsError.apply(void 0,[throws,getActual(e)].concat(r))};x.rejects=function rejects(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++){r[n-1]=arguments[n]}return waitForActual(e).then((function(e){return expectsError.apply(void 0,[rejects,e].concat(r))}))};x.doesNotThrow=function doesNotThrow(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++){r[n-1]=arguments[n]}expectsNoError.apply(void 0,[doesNotThrow,getActual(e)].concat(r))};x.doesNotReject=function doesNotReject(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++){r[n-1]=arguments[n]}return waitForActual(e).then((function(e){return expectsNoError.apply(void 0,[doesNotReject,e].concat(r))}))};x.ifError=function ifError(e){if(e!==null&&e!==undefined){var t="ifError got unwanted exception: ";if(_typeof(e)==="object"&&typeof e.message==="string"){if(e.message.length===0&&e.constructor){t+=e.constructor.name}else{t+=e.message}}else{t+=l(e)}var r=new s({actual:e,expected:null,operator:"ifError",message:t,stackStartFn:ifError});var n=e.stack;if(typeof n==="string"){var o=n.split("\n");o.shift();var a=r.stack.split("\n");for(var i=0;i<o.length;i++){var c=a.indexOf(o[i]);if(c!==-1){a=a.slice(0,c);break}}r.stack="".concat(a.join("\n"),"\n").concat(o.join("\n"))}throw r}};function strict(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++){t[r]=arguments[r]}innerOk.apply(void 0,[strict,t.length].concat(t))}x.strict=v(strict,x,{equal:x.strictEqual,deepEqual:x.deepStrictEqual,notEqual:x.notStrictEqual,notDeepEqual:x.notDeepStrictEqual});x.strict.strict=x.strict},298:function(e,t,r){"use strict";function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};var n=Object.keys(r);if(typeof Object.getOwnPropertySymbols==="function"){n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))}n.forEach((function(t){_defineProperty(e,t,r[t])}))}return e}function _defineProperty(e,t,r){if(t in e){Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true})}else{e[t]=r}return e}function _classCallCheck(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}function _createClass(e,t,r){if(t)_defineProperties(e.prototype,t);if(r)_defineProperties(e,r);return e}function _possibleConstructorReturn(e,t){if(t&&(_typeof(t)==="object"||typeof t==="function")){return t}return _assertThisInitialized(e)}function _assertThisInitialized(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function _inherits(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}});if(t)_setPrototypeOf(e,t)}function _wrapNativeSuper(e){var t=typeof Map==="function"?new Map:undefined;_wrapNativeSuper=function _wrapNativeSuper(e){if(e===null||!_isNativeFunction(e))return e;if(typeof e!=="function"){throw new TypeError("Super expression must either be null or a function")}if(typeof t!=="undefined"){if(t.has(e))return t.get(e);t.set(e,Wrapper)}function Wrapper(){return _construct(e,arguments,_getPrototypeOf(this).constructor)}Wrapper.prototype=Object.create(e.prototype,{constructor:{value:Wrapper,enumerable:false,writable:true,configurable:true}});return _setPrototypeOf(Wrapper,e)};return _wrapNativeSuper(e)}function isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],(function(){})));return true}catch(e){return false}}function _construct(e,t,r){if(isNativeReflectConstruct()){_construct=Reflect.construct}else{_construct=function _construct(e,t,r){var n=[null];n.push.apply(n,t);var o=Function.bind.apply(e,n);var a=new o;if(r)_setPrototypeOf(a,r.prototype);return a}}return _construct.apply(null,arguments)}function _isNativeFunction(e){return Function.toString.call(e).indexOf("[native code]")!==-1}function _setPrototypeOf(e,t){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){e.__proto__=t;return e};return _setPrototypeOf(e,t)}function _getPrototypeOf(e){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)};return _getPrototypeOf(e)}function _typeof(e){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(e){return typeof e}}else{_typeof=function _typeof(e){return e&&typeof Symbol==="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}}return _typeof(e)}var n=r(650),o=n.inspect;var a=r(823),i=a.codes.ERR_INVALID_ARG_TYPE;function endsWith(e,t,r){if(r===undefined||r>e.length){r=e.length}return e.substring(r-t.length,r)===t}function repeat(e,t){t=Math.floor(t);if(e.length==0||t==0)return"";var r=e.length*t;t=Math.floor(Math.log(t)/Math.log(2));while(t){e+=e;t--}e+=e.substring(0,r-e.length);return e}var c="";var u="";var f="";var s="";var p={deepStrictEqual:"Expected values to be strictly deep-equal:",strictEqual:"Expected values to be strictly equal:",strictEqualObject:'Expected "actual" to be reference-equal to "expected":',deepEqual:"Expected values to be loosely deep-equal:",equal:"Expected values to be loosely equal:",notDeepStrictEqual:'Expected "actual" not to be strictly deep-equal to:',notStrictEqual:'Expected "actual" to be strictly unequal to:',notStrictEqualObject:'Expected "actual" not to be reference-equal to "expected":',notDeepEqual:'Expected "actual" not to be loosely deep-equal to:',notEqual:'Expected "actual" to be loosely unequal to:',notIdentical:"Values identical but not reference-equal:"};var l=10;function copyError(e){var t=Object.keys(e);var r=Object.create(Object.getPrototypeOf(e));t.forEach((function(t){r[t]=e[t]}));Object.defineProperty(r,"message",{value:e.message});return r}function inspectValue(e){return o(e,{compact:false,customInspect:false,depth:1e3,maxArrayLength:Infinity,showHidden:false,breakLength:Infinity,showProxy:false,sorted:true,getters:true})}function createErrDiff(e,t,r){var n="";var o="";var a=0;var i="";var y=false;var d=inspectValue(e);var g=d.split("\n");var v=inspectValue(t).split("\n");var b=0;var h="";if(r==="strictEqual"&&_typeof(e)==="object"&&_typeof(t)==="object"&&e!==null&&t!==null){r="strictEqualObject"}if(g.length===1&&v.length===1&&g[0]!==v[0]){var m=g[0].length+v[0].length;if(m<=l){if((_typeof(e)!=="object"||e===null)&&(_typeof(t)!=="object"||t===null)&&(e!==0||t!==0)){return"".concat(p[r],"\n\n")+"".concat(g[0]," !== ").concat(v[0],"\n")}}else if(r!=="strictEqualObject"){var A=process.stderr&&process.stderr.isTTY?process.stderr.columns:80;if(m<A){while(g[0][b]===v[0][b]){b++}if(b>2){h="\n  ".concat(repeat(" ",b),"^");b=0}}}}var S=g[g.length-1];var E=v[v.length-1];while(S===E){if(b++<2){i="\n  ".concat(S).concat(i)}else{n=S}g.pop();v.pop();if(g.length===0||v.length===0)break;S=g[g.length-1];E=v[v.length-1]}var P=Math.max(g.length,v.length);if(P===0){var w=d.split("\n");if(w.length>30){w[26]="".concat(c,"...").concat(s);while(w.length>27){w.pop()}}return"".concat(p.notIdentical,"\n\n").concat(w.join("\n"),"\n")}if(b>3){i="\n".concat(c,"...").concat(s).concat(i);y=true}if(n!==""){i="\n  ".concat(n).concat(i);n=""}var O=0;var j=p[r]+"\n".concat(u,"+ actual").concat(s," ").concat(f,"- expected").concat(s);var _=" ".concat(c,"...").concat(s," Lines skipped");for(b=0;b<P;b++){var x=b-a;if(g.length<b+1){if(x>1&&b>2){if(x>4){o+="\n".concat(c,"...").concat(s);y=true}else if(x>3){o+="\n  ".concat(v[b-2]);O++}o+="\n  ".concat(v[b-1]);O++}a=b;n+="\n".concat(f,"-").concat(s," ").concat(v[b]);O++}else if(v.length<b+1){if(x>1&&b>2){if(x>4){o+="\n".concat(c,"...").concat(s);y=true}else if(x>3){o+="\n  ".concat(g[b-2]);O++}o+="\n  ".concat(g[b-1]);O++}a=b;o+="\n".concat(u,"+").concat(s," ").concat(g[b]);O++}else{var I=v[b];var F=g[b];var k=F!==I&&(!endsWith(F,",")||F.slice(0,-1)!==I);if(k&&endsWith(I,",")&&I.slice(0,-1)===F){k=false;F+=","}if(k){if(x>1&&b>2){if(x>4){o+="\n".concat(c,"...").concat(s);y=true}else if(x>3){o+="\n  ".concat(g[b-2]);O++}o+="\n  ".concat(g[b-1]);O++}a=b;o+="\n".concat(u,"+").concat(s," ").concat(F);n+="\n".concat(f,"-").concat(s," ").concat(I);O+=2}else{o+=n;n="";if(x===1||b===0){o+="\n  ".concat(F);O++}}}if(O>20&&b<P-2){return"".concat(j).concat(_,"\n").concat(o,"\n").concat(c,"...").concat(s).concat(n,"\n")+"".concat(c,"...").concat(s)}}return"".concat(j).concat(y?_:"","\n").concat(o).concat(n).concat(i).concat(h)}var y=function(e){_inherits(AssertionError,e);function AssertionError(e){var t;_classCallCheck(this,AssertionError);if(_typeof(e)!=="object"||e===null){throw new i("options","Object",e)}var r=e.message,n=e.operator,o=e.stackStartFn;var a=e.actual,l=e.expected;var y=Error.stackTraceLimit;Error.stackTraceLimit=0;if(r!=null){t=_possibleConstructorReturn(this,_getPrototypeOf(AssertionError).call(this,String(r)))}else{if(process.stderr&&process.stderr.isTTY){if(process.stderr&&process.stderr.getColorDepth&&process.stderr.getColorDepth()!==1){c="[34m";u="[32m";s="[39m";f="[31m"}else{c="";u="";s="";f=""}}if(_typeof(a)==="object"&&a!==null&&_typeof(l)==="object"&&l!==null&&"stack"in a&&a instanceof Error&&"stack"in l&&l instanceof Error){a=copyError(a);l=copyError(l)}if(n==="deepStrictEqual"||n==="strictEqual"){t=_possibleConstructorReturn(this,_getPrototypeOf(AssertionError).call(this,createErrDiff(a,l,n)))}else if(n==="notDeepStrictEqual"||n==="notStrictEqual"){var d=p[n];var g=inspectValue(a).split("\n");if(n==="notStrictEqual"&&_typeof(a)==="object"&&a!==null){d=p.notStrictEqualObject}if(g.length>30){g[26]="".concat(c,"...").concat(s);while(g.length>27){g.pop()}}if(g.length===1){t=_possibleConstructorReturn(this,_getPrototypeOf(AssertionError).call(this,"".concat(d," ").concat(g[0])))}else{t=_possibleConstructorReturn(this,_getPrototypeOf(AssertionError).call(this,"".concat(d,"\n\n").concat(g.join("\n"),"\n")))}}else{var v=inspectValue(a);var b="";var h=p[n];if(n==="notDeepEqual"||n==="notEqual"){v="".concat(p[n],"\n\n").concat(v);if(v.length>1024){v="".concat(v.slice(0,1021),"...")}}else{b="".concat(inspectValue(l));if(v.length>512){v="".concat(v.slice(0,509),"...")}if(b.length>512){b="".concat(b.slice(0,509),"...")}if(n==="deepEqual"||n==="equal"){v="".concat(h,"\n\n").concat(v,"\n\nshould equal\n\n")}else{b=" ".concat(n," ").concat(b)}}t=_possibleConstructorReturn(this,_getPrototypeOf(AssertionError).call(this,"".concat(v).concat(b)))}}Error.stackTraceLimit=y;t.generatedMessage=!r;Object.defineProperty(_assertThisInitialized(t),"name",{value:"AssertionError [ERR_ASSERTION]",enumerable:false,writable:true,configurable:true});t.code="ERR_ASSERTION";t.actual=a;t.expected=l;t.operator=n;if(Error.captureStackTrace){Error.captureStackTrace(_assertThisInitialized(t),o)}t.stack;t.name="AssertionError";return _possibleConstructorReturn(t)}_createClass(AssertionError,[{key:"toString",value:function toString(){return"".concat(this.name," [").concat(this.code,"]: ").concat(this.message)}},{key:o.custom,value:function value(e,t){return o(this,_objectSpread({},t,{customInspect:false,depth:0}))}}]);return AssertionError}(_wrapNativeSuper(Error));e.exports=y},823:function(e,t,r){"use strict";function _typeof(e){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(e){return typeof e}}else{_typeof=function _typeof(e){return e&&typeof Symbol==="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}}return _typeof(e)}function _classCallCheck(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function _possibleConstructorReturn(e,t){if(t&&(_typeof(t)==="object"||typeof t==="function")){return t}return _assertThisInitialized(e)}function _assertThisInitialized(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function _getPrototypeOf(e){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)};return _getPrototypeOf(e)}function _inherits(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}});if(t)_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){e.__proto__=t;return e};return _setPrototypeOf(e,t)}var n={};var o;var a;function createErrorType(e,t,r){if(!r){r=Error}function getMessage(e,r,n){if(typeof t==="string"){return t}else{return t(e,r,n)}}var o=function(t){_inherits(NodeError,t);function NodeError(t,r,n){var o;_classCallCheck(this,NodeError);o=_possibleConstructorReturn(this,_getPrototypeOf(NodeError).call(this,getMessage(t,r,n)));o.code=e;return o}return NodeError}(r);n[e]=o}function oneOf(e,t){if(Array.isArray(e)){var r=e.length;e=e.map((function(e){return String(e)}));if(r>2){return"one of ".concat(t," ").concat(e.slice(0,r-1).join(", "),", or ")+e[r-1]}else if(r===2){return"one of ".concat(t," ").concat(e[0]," or ").concat(e[1])}else{return"of ".concat(t," ").concat(e[0])}}else{return"of ".concat(t," ").concat(String(e))}}function startsWith(e,t,r){return e.substr(!r||r<0?0:+r,t.length)===t}function endsWith(e,t,r){if(r===undefined||r>e.length){r=e.length}return e.substring(r-t.length,r)===t}function includes(e,t,r){if(typeof r!=="number"){r=0}if(r+t.length>e.length){return false}else{return e.indexOf(t,r)!==-1}}createErrorType("ERR_AMBIGUOUS_ARGUMENT",'The "%s" argument is ambiguous. %s',TypeError);createErrorType("ERR_INVALID_ARG_TYPE",(function(e,t,n){if(o===undefined)o=r(313);o(typeof e==="string","'name' must be a string");var a;if(typeof t==="string"&&startsWith(t,"not ")){a="must not be";t=t.replace(/^not /,"")}else{a="must be"}var i;if(endsWith(e," argument")){i="The ".concat(e," ").concat(a," ").concat(oneOf(t,"type"))}else{var c=includes(e,".")?"property":"argument";i='The "'.concat(e,'" ').concat(c," ").concat(a," ").concat(oneOf(t,"type"))}i+=". Received type ".concat(_typeof(n));return i}),TypeError);createErrorType("ERR_INVALID_ARG_VALUE",(function(e,t){var n=arguments.length>2&&arguments[2]!==undefined?arguments[2]:"is invalid";if(a===undefined)a=r(650);var o=a.inspect(t);if(o.length>128){o="".concat(o.slice(0,128),"...")}return"The argument '".concat(e,"' ").concat(n,". Received ").concat(o)}),TypeError,RangeError);createErrorType("ERR_INVALID_RETURN_VALUE",(function(e,t,r){var n;if(r&&r.constructor&&r.constructor.name){n="instance of ".concat(r.constructor.name)}else{n="type ".concat(_typeof(r))}return"Expected ".concat(e,' to be returned from the "').concat(t,'"')+" function but got ".concat(n,".")}),TypeError);createErrorType("ERR_MISSING_ARGS",(function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++){t[n]=arguments[n]}if(o===undefined)o=r(313);o(t.length>0,"At least one arg needs to be specified");var a="The ";var i=t.length;t=t.map((function(e){return'"'.concat(e,'"')}));switch(i){case 1:a+="".concat(t[0]," argument");break;case 2:a+="".concat(t[0]," and ").concat(t[1]," arguments");break;default:a+=t.slice(0,i-1).join(", ");a+=", and ".concat(t[i-1]," arguments");break}return"".concat(a," must be specified")}),TypeError);e.exports.codes=n},655:function(e,t,r){"use strict";function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(e,t){var r=[];var n=true;var o=false;var a=undefined;try{for(var i=e[Symbol.iterator](),c;!(n=(c=i.next()).done);n=true){r.push(c.value);if(t&&r.length===t)break}}catch(e){o=true;a=e}finally{try{if(!n&&i["return"]!=null)i["return"]()}finally{if(o)throw a}}return r}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _typeof(e){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(e){return typeof e}}else{_typeof=function _typeof(e){return e&&typeof Symbol==="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}}return _typeof(e)}var n=/a/g.flags!==undefined;var o=function arrayFromSet(e){var t=[];e.forEach((function(e){return t.push(e)}));return t};var a=function arrayFromMap(e){var t=[];e.forEach((function(e,r){return t.push([r,e])}));return t};var i=Object.is?Object.is:r(450);var c=Object.getOwnPropertySymbols?Object.getOwnPropertySymbols:function(){return[]};var u=Number.isNaN?Number.isNaN:r(674);function uncurryThis(e){return e.call.bind(e)}var f=uncurryThis(Object.prototype.hasOwnProperty);var s=uncurryThis(Object.prototype.propertyIsEnumerable);var p=uncurryThis(Object.prototype.toString);var l=r(650).types,y=l.isAnyArrayBuffer,d=l.isArrayBufferView,g=l.isDate,v=l.isMap,b=l.isRegExp,h=l.isSet,m=l.isNativeError,A=l.isBoxedPrimitive,S=l.isNumberObject,E=l.isStringObject,P=l.isBooleanObject,w=l.isBigIntObject,O=l.isSymbolObject,j=l.isFloat32Array,_=l.isFloat64Array;function isNonIndex(e){if(e.length===0||e.length>10)return true;for(var t=0;t<e.length;t++){var r=e.charCodeAt(t);if(r<48||r>57)return true}return e.length===10&&e>=Math.pow(2,32)}function getOwnNonIndexProperties(e){return Object.keys(e).filter(isNonIndex).concat(c(e).filter(Object.prototype.propertyIsEnumerable.bind(e)))}
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */function compare(e,t){if(e===t){return 0}var r=e.length;var n=t.length;for(var o=0,a=Math.min(r,n);o<a;++o){if(e[o]!==t[o]){r=e[o];n=t[o];break}}if(r<n){return-1}if(n<r){return 1}return 0}var x=undefined;var I=true;var F=false;var k=0;var R=1;var T=2;var N=3;function areSimilarRegExps(e,t){return n?e.source===t.source&&e.flags===t.flags:RegExp.prototype.toString.call(e)===RegExp.prototype.toString.call(t)}function areSimilarFloatArrays(e,t){if(e.byteLength!==t.byteLength){return false}for(var r=0;r<e.byteLength;r++){if(e[r]!==t[r]){return false}}return true}function areSimilarTypedArrays(e,t){if(e.byteLength!==t.byteLength){return false}return compare(new Uint8Array(e.buffer,e.byteOffset,e.byteLength),new Uint8Array(t.buffer,t.byteOffset,t.byteLength))===0}function areEqualArrayBuffers(e,t){return e.byteLength===t.byteLength&&compare(new Uint8Array(e),new Uint8Array(t))===0}function isEqualBoxedPrimitive(e,t){if(S(e)){return S(t)&&i(Number.prototype.valueOf.call(e),Number.prototype.valueOf.call(t))}if(E(e)){return E(t)&&String.prototype.valueOf.call(e)===String.prototype.valueOf.call(t)}if(P(e)){return P(t)&&Boolean.prototype.valueOf.call(e)===Boolean.prototype.valueOf.call(t)}if(w(e)){return w(t)&&BigInt.prototype.valueOf.call(e)===BigInt.prototype.valueOf.call(t)}return O(t)&&Symbol.prototype.valueOf.call(e)===Symbol.prototype.valueOf.call(t)}function innerDeepEqual(e,t,r,n){if(e===t){if(e!==0)return true;return r?i(e,t):true}if(r){if(_typeof(e)!=="object"){return typeof e==="number"&&u(e)&&u(t)}if(_typeof(t)!=="object"||e===null||t===null){return false}if(Object.getPrototypeOf(e)!==Object.getPrototypeOf(t)){return false}}else{if(e===null||_typeof(e)!=="object"){if(t===null||_typeof(t)!=="object"){return e==t}return false}if(t===null||_typeof(t)!=="object"){return false}}var o=p(e);var a=p(t);if(o!==a){return false}if(Array.isArray(e)){if(e.length!==t.length){return false}var c=getOwnNonIndexProperties(e,x);var f=getOwnNonIndexProperties(t,x);if(c.length!==f.length){return false}return keyCheck(e,t,r,n,R,c)}if(o==="[object Object]"){if(!v(e)&&v(t)||!h(e)&&h(t)){return false}}if(g(e)){if(!g(t)||Date.prototype.getTime.call(e)!==Date.prototype.getTime.call(t)){return false}}else if(b(e)){if(!b(t)||!areSimilarRegExps(e,t)){return false}}else if(m(e)||e instanceof Error){if(e.message!==t.message||e.name!==t.name){return false}}else if(d(e)){if(!r&&(j(e)||_(e))){if(!areSimilarFloatArrays(e,t)){return false}}else if(!areSimilarTypedArrays(e,t)){return false}var s=getOwnNonIndexProperties(e,x);var l=getOwnNonIndexProperties(t,x);if(s.length!==l.length){return false}return keyCheck(e,t,r,n,k,s)}else if(h(e)){if(!h(t)||e.size!==t.size){return false}return keyCheck(e,t,r,n,T)}else if(v(e)){if(!v(t)||e.size!==t.size){return false}return keyCheck(e,t,r,n,N)}else if(y(e)){if(!areEqualArrayBuffers(e,t)){return false}}else if(A(e)&&!isEqualBoxedPrimitive(e,t)){return false}return keyCheck(e,t,r,n,k)}function getEnumerables(e,t){return t.filter((function(t){return s(e,t)}))}function keyCheck(e,t,r,n,o,a){if(arguments.length===5){a=Object.keys(e);var i=Object.keys(t);if(a.length!==i.length){return false}}var u=0;for(;u<a.length;u++){if(!f(t,a[u])){return false}}if(r&&arguments.length===5){var p=c(e);if(p.length!==0){var l=0;for(u=0;u<p.length;u++){var y=p[u];if(s(e,y)){if(!s(t,y)){return false}a.push(y);l++}else if(s(t,y)){return false}}var d=c(t);if(p.length!==d.length&&getEnumerables(t,d).length!==l){return false}}else{var g=c(t);if(g.length!==0&&getEnumerables(t,g).length!==0){return false}}}if(a.length===0&&(o===k||o===R&&e.length===0||e.size===0)){return true}if(n===undefined){n={val1:new Map,val2:new Map,position:0}}else{var v=n.val1.get(e);if(v!==undefined){var b=n.val2.get(t);if(b!==undefined){return v===b}}n.position++}n.val1.set(e,n.position);n.val2.set(t,n.position);var h=objEquiv(e,t,r,a,n,o);n.val1.delete(e);n.val2.delete(t);return h}function setHasEqualElement(e,t,r,n){var a=o(e);for(var i=0;i<a.length;i++){var c=a[i];if(innerDeepEqual(t,c,r,n)){e.delete(c);return true}}return false}function findLooseMatchingPrimitives(e){switch(_typeof(e)){case"undefined":return null;case"object":return undefined;case"symbol":return false;case"string":e=+e;case"number":if(u(e)){return false}}return true}function setMightHaveLoosePrim(e,t,r){var n=findLooseMatchingPrimitives(r);if(n!=null)return n;return t.has(n)&&!e.has(n)}function mapMightHaveLoosePrim(e,t,r,n,o){var a=findLooseMatchingPrimitives(r);if(a!=null){return a}var i=t.get(a);if(i===undefined&&!t.has(a)||!innerDeepEqual(n,i,false,o)){return false}return!e.has(a)&&innerDeepEqual(n,i,false,o)}function setEquiv(e,t,r,n){var a=null;var i=o(e);for(var c=0;c<i.length;c++){var u=i[c];if(_typeof(u)==="object"&&u!==null){if(a===null){a=new Set}a.add(u)}else if(!t.has(u)){if(r)return false;if(!setMightHaveLoosePrim(e,t,u)){return false}if(a===null){a=new Set}a.add(u)}}if(a!==null){var f=o(t);for(var s=0;s<f.length;s++){var p=f[s];if(_typeof(p)==="object"&&p!==null){if(!setHasEqualElement(a,p,r,n))return false}else if(!r&&!e.has(p)&&!setHasEqualElement(a,p,r,n)){return false}}return a.size===0}return true}function mapHasEqualEntry(e,t,r,n,a,i){var c=o(e);for(var u=0;u<c.length;u++){var f=c[u];if(innerDeepEqual(r,f,a,i)&&innerDeepEqual(n,t.get(f),a,i)){e.delete(f);return true}}return false}function mapEquiv(e,t,r,n){var o=null;var i=a(e);for(var c=0;c<i.length;c++){var u=_slicedToArray(i[c],2),f=u[0],s=u[1];if(_typeof(f)==="object"&&f!==null){if(o===null){o=new Set}o.add(f)}else{var p=t.get(f);if(p===undefined&&!t.has(f)||!innerDeepEqual(s,p,r,n)){if(r)return false;if(!mapMightHaveLoosePrim(e,t,f,s,n))return false;if(o===null){o=new Set}o.add(f)}}}if(o!==null){var l=a(t);for(var y=0;y<l.length;y++){var d=_slicedToArray(l[y],2),f=d[0],g=d[1];if(_typeof(f)==="object"&&f!==null){if(!mapHasEqualEntry(o,e,f,g,r,n))return false}else if(!r&&(!e.has(f)||!innerDeepEqual(e.get(f),g,false,n))&&!mapHasEqualEntry(o,e,f,g,false,n)){return false}}return o.size===0}return true}function objEquiv(e,t,r,n,o,a){var i=0;if(a===T){if(!setEquiv(e,t,r,o)){return false}}else if(a===N){if(!mapEquiv(e,t,r,o)){return false}}else if(a===R){for(;i<e.length;i++){if(f(e,i)){if(!f(t,i)||!innerDeepEqual(e[i],t[i],r,o)){return false}}else if(f(t,i)){return false}else{var c=Object.keys(e);for(;i<c.length;i++){var u=c[i];if(!f(t,u)||!innerDeepEqual(e[u],t[u],r,o)){return false}}if(c.length!==Object.keys(t).length){return false}return true}}}for(i=0;i<n.length;i++){var s=n[i];if(!innerDeepEqual(e[s],t[s],r,o)){return false}}return true}function isDeepEqual(e,t){return innerDeepEqual(e,t,F)}function isDeepStrictEqual(e,t){return innerDeepEqual(e,t,I)}e.exports={isDeepEqual:isDeepEqual,isDeepStrictEqual:isDeepStrictEqual}},749:function(e,t,r){"use strict";var n=r(91);var o=r(112);var a=o(n("String.prototype.indexOf"));e.exports=function callBoundIntrinsic(e,t){var r=n(e,!!t);if(typeof r==="function"&&a(e,".prototype.")>-1){return o(r)}return r}},112:function(e,t,r){"use strict";var n=r(517);var o=r(91);var a=o("%Function.prototype.apply%");var i=o("%Function.prototype.call%");var c=o("%Reflect.apply%",true)||n.call(i,a);var u=o("%Object.getOwnPropertyDescriptor%",true);var f=o("%Object.defineProperty%",true);var s=o("%Math.max%");if(f){try{f({},"a",{value:1})}catch(e){f=null}}e.exports=function callBind(e){var t=c(n,i,arguments);if(u&&f){var r=u(t,"length");if(r.configurable){f(t,"length",{value:1+s(0,e.length-(arguments.length-1))})}}return t};var p=function applyBind(){return c(n,a,arguments)};if(f){f(e.exports,"apply",{value:p})}else{e.exports.apply=p}},91:function(e,t,r){"use strict";var n;var o=SyntaxError;var a=Function;var i=TypeError;var getEvalledConstructor=function(e){try{return Function('"use strict"; return ('+e+").constructor;")()}catch(e){}};var c=Object.getOwnPropertyDescriptor;if(c){try{c({},"")}catch(e){c=null}}var throwTypeError=function(){throw new i};var u=c?function(){try{arguments.callee;return throwTypeError}catch(e){try{return c(arguments,"callee").get}catch(e){return throwTypeError}}}():throwTypeError;var f=r(449)();var s=Object.getPrototypeOf||function(e){return e.__proto__};var p=getEvalledConstructor("async function* () {}");var l=p?p.prototype:n;var y=l?l.prototype:n;var d=typeof Uint8Array==="undefined"?n:s(Uint8Array);var g={"%AggregateError%":typeof AggregateError==="undefined"?n:AggregateError,"%Array%":Array,"%ArrayBuffer%":typeof ArrayBuffer==="undefined"?n:ArrayBuffer,"%ArrayIteratorPrototype%":f?s([][Symbol.iterator]()):n,"%AsyncFromSyncIteratorPrototype%":n,"%AsyncFunction%":getEvalledConstructor("async function () {}"),"%AsyncGenerator%":l,"%AsyncGeneratorFunction%":p,"%AsyncIteratorPrototype%":y?s(y):n,"%Atomics%":typeof Atomics==="undefined"?n:Atomics,"%BigInt%":typeof BigInt==="undefined"?n:BigInt,"%Boolean%":Boolean,"%DataView%":typeof DataView==="undefined"?n:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":Error,"%eval%":eval,"%EvalError%":EvalError,"%Float32Array%":typeof Float32Array==="undefined"?n:Float32Array,"%Float64Array%":typeof Float64Array==="undefined"?n:Float64Array,"%FinalizationRegistry%":typeof FinalizationRegistry==="undefined"?n:FinalizationRegistry,"%Function%":a,"%GeneratorFunction%":getEvalledConstructor("function* () {}"),"%Int8Array%":typeof Int8Array==="undefined"?n:Int8Array,"%Int16Array%":typeof Int16Array==="undefined"?n:Int16Array,"%Int32Array%":typeof Int32Array==="undefined"?n:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":f?s(s([][Symbol.iterator]())):n,"%JSON%":typeof JSON==="object"?JSON:n,"%Map%":typeof Map==="undefined"?n:Map,"%MapIteratorPrototype%":typeof Map==="undefined"||!f?n:s((new Map)[Symbol.iterator]()),"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":typeof Promise==="undefined"?n:Promise,"%Proxy%":typeof Proxy==="undefined"?n:Proxy,"%RangeError%":RangeError,"%ReferenceError%":ReferenceError,"%Reflect%":typeof Reflect==="undefined"?n:Reflect,"%RegExp%":RegExp,"%Set%":typeof Set==="undefined"?n:Set,"%SetIteratorPrototype%":typeof Set==="undefined"||!f?n:s((new Set)[Symbol.iterator]()),"%SharedArrayBuffer%":typeof SharedArrayBuffer==="undefined"?n:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":f?s(""[Symbol.iterator]()):n,"%Symbol%":f?Symbol:n,"%SyntaxError%":o,"%ThrowTypeError%":u,"%TypedArray%":d,"%TypeError%":i,"%Uint8Array%":typeof Uint8Array==="undefined"?n:Uint8Array,"%Uint8ClampedArray%":typeof Uint8ClampedArray==="undefined"?n:Uint8ClampedArray,"%Uint16Array%":typeof Uint16Array==="undefined"?n:Uint16Array,"%Uint32Array%":typeof Uint32Array==="undefined"?n:Uint32Array,"%URIError%":URIError,"%WeakMap%":typeof WeakMap==="undefined"?n:WeakMap,"%WeakRef%":typeof WeakRef==="undefined"?n:WeakRef,"%WeakSet%":typeof WeakSet==="undefined"?n:WeakSet};var v={"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]};var b=r(517);var h=r(793);var m=b.call(Function.call,Array.prototype.concat);var A=b.call(Function.apply,Array.prototype.splice);var S=b.call(Function.call,String.prototype.replace);var E=b.call(Function.call,String.prototype.slice);var P=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;var w=/\\(\\)?/g;var O=function stringToPath(e){var t=E(e,0,1);var r=E(e,-1);if(t==="%"&&r!=="%"){throw new o("invalid intrinsic syntax, expected closing `%`")}else if(r==="%"&&t!=="%"){throw new o("invalid intrinsic syntax, expected opening `%`")}var n=[];S(e,P,(function(e,t,r,o){n[n.length]=r?S(o,w,"$1"):t||e}));return n};var j=function getBaseIntrinsic(e,t){var r=e;var n;if(h(v,r)){n=v[r];r="%"+n[0]+"%"}if(h(g,r)){var a=g[r];if(typeof a==="undefined"&&!t){throw new i("intrinsic "+e+" exists, but is not available. Please file an issue!")}return{alias:n,name:r,value:a}}throw new o("intrinsic "+e+" does not exist!")};e.exports=function GetIntrinsic(e,t){if(typeof e!=="string"||e.length===0){throw new i("intrinsic name must be a non-empty string")}if(arguments.length>1&&typeof t!=="boolean"){throw new i('"allowMissing" argument must be a boolean')}var r=O(e);var a=r.length>0?r[0]:"";var u=j("%"+a+"%",t);var f=u.name;var s=u.value;var p=false;var l=u.alias;if(l){a=l[0];A(r,m([0,1],l))}for(var y=1,d=true;y<r.length;y+=1){var v=r[y];var b=E(v,0,1);var S=E(v,-1);if((b==='"'||b==="'"||b==="`"||(S==='"'||S==="'"||S==="`"))&&b!==S){throw new o("property names with quotes must have matching quotes")}if(v==="constructor"||!d){p=true}a+="."+v;f="%"+a+"%";if(h(g,f)){s=g[f]}else if(s!=null){if(!(v in s)){if(!t){throw new i("base intrinsic for "+e+" exists, but the property is not available.")}return void n}if(c&&y+1>=r.length){var P=c(s,v);d=!!P;if(d&&"get"in P&&!("originalValue"in P.get)){s=P.get}else{s=s[v]}}else{d=h(s,v);s=s[v]}if(d&&!p){g[f]=s}}}return s}},961:function(e,t,r){"use strict";var n=r(283);var o=typeof Symbol==="function"&&typeof Symbol("foo")==="symbol";var a=Object.prototype.toString;var i=Array.prototype.concat;var c=Object.defineProperty;var isFunction=function(e){return typeof e==="function"&&a.call(e)==="[object Function]"};var arePropertyDescriptorsSupported=function(){var e={};try{c(e,"x",{enumerable:false,value:e});for(var t in e){return false}return e.x===e}catch(e){return false}};var u=c&&arePropertyDescriptorsSupported();var defineProperty=function(e,t,r,n){if(t in e&&(!isFunction(n)||!n())){return}if(u){c(e,t,{configurable:true,enumerable:false,value:r,writable:true})}else{e[t]=r}};var defineProperties=function(e,t){var r=arguments.length>2?arguments[2]:{};var a=n(t);if(o){a=i.call(a,Object.getOwnPropertySymbols(t))}for(var c=0;c<a.length;c+=1){defineProperty(e,a[c],t[a[c]],r[a[c]])}};defineProperties.supportsDescriptors=!!u;e.exports=defineProperties},274:function(e){"use strict";function assign(e,t){if(e===undefined||e===null){throw new TypeError("Cannot convert first argument to object")}var r=Object(e);for(var n=1;n<arguments.length;n++){var o=arguments[n];if(o===undefined||o===null){continue}var a=Object.keys(Object(o));for(var i=0,c=a.length;i<c;i++){var u=a[i];var f=Object.getOwnPropertyDescriptor(o,u);if(f!==undefined&&f.enumerable){r[u]=o[u]}}}return r}function polyfill(){if(!Object.assign){Object.defineProperty(Object,"assign",{enumerable:false,configurable:true,writable:true,value:assign})}}e.exports={assign:assign,polyfill:polyfill}},219:function(e){var t=Object.prototype.hasOwnProperty;var r=Object.prototype.toString;e.exports=function forEach(e,n,o){if(r.call(n)!=="[object Function]"){throw new TypeError("iterator must be a function")}var a=e.length;if(a===+a){for(var i=0;i<a;i++){n.call(o,e[i],i,e)}}else{for(var c in e){if(t.call(e,c)){n.call(o,e[c],c,e)}}}}},733:function(e){"use strict";var t="Function.prototype.bind called on incompatible ";var r=Array.prototype.slice;var n=Object.prototype.toString;var o="[object Function]";e.exports=function bind(e){var a=this;if(typeof a!=="function"||n.call(a)!==o){throw new TypeError(t+a)}var i=r.call(arguments,1);var c;var binder=function(){if(this instanceof c){var t=a.apply(this,i.concat(r.call(arguments)));if(Object(t)===t){return t}return this}else{return a.apply(e,i.concat(r.call(arguments)))}};var u=Math.max(0,a.length-i.length);var f=[];for(var s=0;s<u;s++){f.push("$"+s)}c=Function("binder","return function ("+f.join(",")+"){ return binder.apply(this,arguments); }")(binder);if(a.prototype){var p=function Empty(){};p.prototype=a.prototype;c.prototype=new p;p.prototype=null}return c}},517:function(e,t,r){"use strict";var n=r(733);e.exports=Function.prototype.bind||n},879:function(e,t,r){"use strict";var n;var o=SyntaxError;var a=Function;var i=TypeError;var getEvalledConstructor=function(e){try{return a('"use strict"; return ('+e+").constructor;")()}catch(e){}};var c=Object.getOwnPropertyDescriptor;if(c){try{c({},"")}catch(e){c=null}}var throwTypeError=function(){throw new i};var u=c?function(){try{arguments.callee;return throwTypeError}catch(e){try{return c(arguments,"callee").get}catch(e){return throwTypeError}}}():throwTypeError;var f=r(449)();var s=Object.getPrototypeOf||function(e){return e.__proto__};var p={};var l=typeof Uint8Array==="undefined"?n:s(Uint8Array);var y={"%AggregateError%":typeof AggregateError==="undefined"?n:AggregateError,"%Array%":Array,"%ArrayBuffer%":typeof ArrayBuffer==="undefined"?n:ArrayBuffer,"%ArrayIteratorPrototype%":f?s([][Symbol.iterator]()):n,"%AsyncFromSyncIteratorPrototype%":n,"%AsyncFunction%":p,"%AsyncGenerator%":p,"%AsyncGeneratorFunction%":p,"%AsyncIteratorPrototype%":p,"%Atomics%":typeof Atomics==="undefined"?n:Atomics,"%BigInt%":typeof BigInt==="undefined"?n:BigInt,"%Boolean%":Boolean,"%DataView%":typeof DataView==="undefined"?n:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":Error,"%eval%":eval,"%EvalError%":EvalError,"%Float32Array%":typeof Float32Array==="undefined"?n:Float32Array,"%Float64Array%":typeof Float64Array==="undefined"?n:Float64Array,"%FinalizationRegistry%":typeof FinalizationRegistry==="undefined"?n:FinalizationRegistry,"%Function%":a,"%GeneratorFunction%":p,"%Int8Array%":typeof Int8Array==="undefined"?n:Int8Array,"%Int16Array%":typeof Int16Array==="undefined"?n:Int16Array,"%Int32Array%":typeof Int32Array==="undefined"?n:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":f?s(s([][Symbol.iterator]())):n,"%JSON%":typeof JSON==="object"?JSON:n,"%Map%":typeof Map==="undefined"?n:Map,"%MapIteratorPrototype%":typeof Map==="undefined"||!f?n:s((new Map)[Symbol.iterator]()),"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":typeof Promise==="undefined"?n:Promise,"%Proxy%":typeof Proxy==="undefined"?n:Proxy,"%RangeError%":RangeError,"%ReferenceError%":ReferenceError,"%Reflect%":typeof Reflect==="undefined"?n:Reflect,"%RegExp%":RegExp,"%Set%":typeof Set==="undefined"?n:Set,"%SetIteratorPrototype%":typeof Set==="undefined"||!f?n:s((new Set)[Symbol.iterator]()),"%SharedArrayBuffer%":typeof SharedArrayBuffer==="undefined"?n:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":f?s(""[Symbol.iterator]()):n,"%Symbol%":f?Symbol:n,"%SyntaxError%":o,"%ThrowTypeError%":u,"%TypedArray%":l,"%TypeError%":i,"%Uint8Array%":typeof Uint8Array==="undefined"?n:Uint8Array,"%Uint8ClampedArray%":typeof Uint8ClampedArray==="undefined"?n:Uint8ClampedArray,"%Uint16Array%":typeof Uint16Array==="undefined"?n:Uint16Array,"%Uint32Array%":typeof Uint32Array==="undefined"?n:Uint32Array,"%URIError%":URIError,"%WeakMap%":typeof WeakMap==="undefined"?n:WeakMap,"%WeakRef%":typeof WeakRef==="undefined"?n:WeakRef,"%WeakSet%":typeof WeakSet==="undefined"?n:WeakSet};var d=function doEval(e){var t;if(e==="%AsyncFunction%"){t=getEvalledConstructor("async function () {}")}else if(e==="%GeneratorFunction%"){t=getEvalledConstructor("function* () {}")}else if(e==="%AsyncGeneratorFunction%"){t=getEvalledConstructor("async function* () {}")}else if(e==="%AsyncGenerator%"){var r=doEval("%AsyncGeneratorFunction%");if(r){t=r.prototype}}else if(e==="%AsyncIteratorPrototype%"){var n=doEval("%AsyncGenerator%");if(n){t=s(n.prototype)}}y[e]=t;return t};var g={"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]};var v=r(517);var b=r(793);var h=v.call(Function.call,Array.prototype.concat);var m=v.call(Function.apply,Array.prototype.splice);var A=v.call(Function.call,String.prototype.replace);var S=v.call(Function.call,String.prototype.slice);var E=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;var P=/\\(\\)?/g;var w=function stringToPath(e){var t=S(e,0,1);var r=S(e,-1);if(t==="%"&&r!=="%"){throw new o("invalid intrinsic syntax, expected closing `%`")}else if(r==="%"&&t!=="%"){throw new o("invalid intrinsic syntax, expected opening `%`")}var n=[];A(e,E,(function(e,t,r,o){n[n.length]=r?A(o,P,"$1"):t||e}));return n};var O=function getBaseIntrinsic(e,t){var r=e;var n;if(b(g,r)){n=g[r];r="%"+n[0]+"%"}if(b(y,r)){var a=y[r];if(a===p){a=d(r)}if(typeof a==="undefined"&&!t){throw new i("intrinsic "+e+" exists, but is not available. Please file an issue!")}return{alias:n,name:r,value:a}}throw new o("intrinsic "+e+" does not exist!")};e.exports=function GetIntrinsic(e,t){if(typeof e!=="string"||e.length===0){throw new i("intrinsic name must be a non-empty string")}if(arguments.length>1&&typeof t!=="boolean"){throw new i('"allowMissing" argument must be a boolean')}var r=w(e);var a=r.length>0?r[0]:"";var u=O("%"+a+"%",t);var f=u.name;var s=u.value;var p=false;var l=u.alias;if(l){a=l[0];m(r,h([0,1],l))}for(var d=1,g=true;d<r.length;d+=1){var v=r[d];var A=S(v,0,1);var E=S(v,-1);if((A==='"'||A==="'"||A==="`"||(E==='"'||E==="'"||E==="`"))&&A!==E){throw new o("property names with quotes must have matching quotes")}if(v==="constructor"||!g){p=true}a+="."+v;f="%"+a+"%";if(b(y,f)){s=y[f]}else if(s!=null){if(!(v in s)){if(!t){throw new i("base intrinsic for "+e+" exists, but the property is not available.")}return void n}if(c&&d+1>=r.length){var P=c(s,v);g=!!P;if(g&&"get"in P&&!("originalValue"in P.get)){s=P.get}else{s=s[v]}}else{g=b(s,v);s=s[v]}if(g&&!p){y[f]=s}}}return s}},449:function(e,t,r){"use strict";var n=__webpack_require__.g.Symbol;var o=r(545);e.exports=function hasNativeSymbols(){if(typeof n!=="function"){return false}if(typeof Symbol!=="function"){return false}if(typeof n("foo")!=="symbol"){return false}if(typeof Symbol("bar")!=="symbol"){return false}return o()}},545:function(e){"use strict";e.exports=function hasSymbols(){if(typeof Symbol!=="function"||typeof Object.getOwnPropertySymbols!=="function"){return false}if(typeof Symbol.iterator==="symbol"){return true}var e={};var t=Symbol("test");var r=Object(t);if(typeof t==="string"){return false}if(Object.prototype.toString.call(t)!=="[object Symbol]"){return false}if(Object.prototype.toString.call(r)!=="[object Symbol]"){return false}var n=42;e[t]=n;for(t in e){return false}if(typeof Object.keys==="function"&&Object.keys(e).length!==0){return false}if(typeof Object.getOwnPropertyNames==="function"&&Object.getOwnPropertyNames(e).length!==0){return false}var o=Object.getOwnPropertySymbols(e);if(o.length!==1||o[0]!==t){return false}if(!Object.prototype.propertyIsEnumerable.call(e,t)){return false}if(typeof Object.getOwnPropertyDescriptor==="function"){var a=Object.getOwnPropertyDescriptor(e,t);if(a.value!==n||a.enumerable!==true){return false}}return true}},793:function(e,t,r){"use strict";var n=r(517);e.exports=n.call(Function.call,Object.prototype.hasOwnProperty)},526:function(e){if(typeof Object.create==="function"){e.exports=function inherits(e,t){if(t){e.super_=t;e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}})}}}else{e.exports=function inherits(e,t){if(t){e.super_=t;var TempCtor=function(){};TempCtor.prototype=t.prototype;e.prototype=new TempCtor;e.prototype.constructor=e}}}},312:function(e){"use strict";var t=typeof Symbol==="function"&&typeof Symbol.toStringTag==="symbol";var r=Object.prototype.toString;var n=function isArguments(e){if(t&&e&&typeof e==="object"&&Symbol.toStringTag in e){return false}return r.call(e)==="[object Arguments]"};var o=function isArguments(e){if(n(e)){return true}return e!==null&&typeof e==="object"&&typeof e.length==="number"&&e.length>=0&&r.call(e)!=="[object Array]"&&r.call(e.callee)==="[object Function]"};var a=function(){return n(arguments)}();n.isLegacyArguments=o;e.exports=a?n:o},906:function(e){"use strict";var t=Object.prototype.toString;var r=Function.prototype.toString;var n=/^\s*(?:function)?\*/;var o=typeof Symbol==="function"&&typeof Symbol.toStringTag==="symbol";var a=Object.getPrototypeOf;var getGeneratorFunc=function(){if(!o){return false}try{return Function("return function*() {}")()}catch(e){}};var i=getGeneratorFunc();var c=i?a(i):{};e.exports=function isGeneratorFunction(e){if(typeof e!=="function"){return false}if(n.test(r.call(e))){return true}if(!o){var i=t.call(e);return i==="[object GeneratorFunction]"}return a(e)===c}},720:function(e){"use strict";e.exports=function isNaN(e){return e!==e}},674:function(e,t,r){"use strict";var n=r(112);var o=r(961);var a=r(720);var i=r(78);var c=r(81);var u=n(i(),Number);o(u,{getPolyfill:i,implementation:a,shim:c});e.exports=u},78:function(e,t,r){"use strict";var n=r(720);e.exports=function getPolyfill(){if(Number.isNaN&&Number.isNaN(NaN)&&!Number.isNaN("a")){return Number.isNaN}return n}},81:function(e,t,r){"use strict";var n=r(961);var o=r(78);e.exports=function shimNumberIsNaN(){var e=o();n(Number,{isNaN:e},{isNaN:function testIsNaN(){return Number.isNaN!==e}});return e}},234:function(e,t,r){"use strict";var n=r(219);var o=r(627);var a=r(749);var i=a("Object.prototype.toString");var c=r(449)();var u=c&&typeof Symbol.toStringTag==="symbol";var f=o();var s=a("Array.prototype.indexOf",true)||function indexOf(e,t){for(var r=0;r<e.length;r+=1){if(e[r]===t){return r}}return-1};var p=a("String.prototype.slice");var l={};var y=r(982);var d=Object.getPrototypeOf;if(u&&y&&d){n(f,(function(e){var t=new __webpack_require__.g[e];if(!(Symbol.toStringTag in t)){throw new EvalError("this engine has support for Symbol.toStringTag, but "+e+" does not have the property! Please report this.")}var r=d(t);var n=y(r,Symbol.toStringTag);if(!n){var o=d(r);n=y(o,Symbol.toStringTag)}l[e]=n.get}))}var g=function tryAllTypedArrays(e){var t=false;n(l,(function(r,n){if(!t){try{t=r.call(e)===n}catch(e){}}}));return t};e.exports=function isTypedArray(e){if(!e||typeof e!=="object"){return false}if(!u){var t=p(i(e),8,-1);return s(f,t)>-1}if(!y){return false}return g(e)}},982:function(e,t,r){"use strict";var n=r(879);var o=n("%Object.getOwnPropertyDescriptor%");if(o){try{o([],"length")}catch(e){o=null}}e.exports=o},450:function(e){"use strict";var numberIsNaN=function(e){return e!==e};e.exports=function is(e,t){if(e===0&&t===0){return 1/e===1/t}if(e===t){return true}if(numberIsNaN(e)&&numberIsNaN(t)){return true}return false}},595:function(e,t,r){"use strict";var n;if(!Object.keys){var o=Object.prototype.hasOwnProperty;var a=Object.prototype.toString;var i=r(750);var c=Object.prototype.propertyIsEnumerable;var u=!c.call({toString:null},"toString");var f=c.call((function(){}),"prototype");var s=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var equalsConstructorPrototype=function(e){var t=e.constructor;return t&&t.prototype===e};var p={$applicationCache:true,$console:true,$external:true,$frame:true,$frameElement:true,$frames:true,$innerHeight:true,$innerWidth:true,$onmozfullscreenchange:true,$onmozfullscreenerror:true,$outerHeight:true,$outerWidth:true,$pageXOffset:true,$pageYOffset:true,$parent:true,$scrollLeft:true,$scrollTop:true,$scrollX:true,$scrollY:true,$self:true,$webkitIndexedDB:true,$webkitStorageInfo:true,$window:true};var l=function(){if(typeof window==="undefined"){return false}for(var e in window){try{if(!p["$"+e]&&o.call(window,e)&&window[e]!==null&&typeof window[e]==="object"){try{equalsConstructorPrototype(window[e])}catch(e){return true}}}catch(e){return true}}return false}();var equalsConstructorPrototypeIfNotBuggy=function(e){if(typeof window==="undefined"||!l){return equalsConstructorPrototype(e)}try{return equalsConstructorPrototype(e)}catch(e){return false}};n=function keys(e){var t=e!==null&&typeof e==="object";var r=a.call(e)==="[object Function]";var n=i(e);var c=t&&a.call(e)==="[object String]";var p=[];if(!t&&!r&&!n){throw new TypeError("Object.keys called on a non-object")}var l=f&&r;if(c&&e.length>0&&!o.call(e,0)){for(var y=0;y<e.length;++y){p.push(String(y))}}if(n&&e.length>0){for(var d=0;d<e.length;++d){p.push(String(d))}}else{for(var g in e){if(!(l&&g==="prototype")&&o.call(e,g)){p.push(String(g))}}}if(u){var v=equalsConstructorPrototypeIfNotBuggy(e);for(var b=0;b<s.length;++b){if(!(v&&s[b]==="constructor")&&o.call(e,s[b])){p.push(s[b])}}}return p}}e.exports=n},283:function(e,t,r){"use strict";var n=Array.prototype.slice;var o=r(750);var a=Object.keys;var i=a?function keys(e){return a(e)}:r(595);var c=Object.keys;i.shim=function shimObjectKeys(){if(Object.keys){var e=function(){var e=Object.keys(arguments);return e&&e.length===arguments.length}(1,2);if(!e){Object.keys=function keys(e){if(o(e)){return c(n.call(e))}return c(e)}}}else{Object.keys=i}return Object.keys||i};e.exports=i},750:function(e){"use strict";var t=Object.prototype.toString;e.exports=function isArguments(e){var r=t.call(e);var n=r==="[object Arguments]";if(!n){n=r!=="[object Array]"&&e!==null&&typeof e==="object"&&typeof e.length==="number"&&e.length>=0&&t.call(e.callee)==="[object Function]"}return n}},536:function(e){e.exports=function isBuffer(e){return e instanceof Buffer}},3:function(e,t,r){"use strict";var n=r(312);var o=r(906);var a=r(715);var i=r(234);function uncurryThis(e){return e.call.bind(e)}var c=typeof BigInt!=="undefined";var u=typeof Symbol!=="undefined";var f=uncurryThis(Object.prototype.toString);var s=uncurryThis(Number.prototype.valueOf);var p=uncurryThis(String.prototype.valueOf);var l=uncurryThis(Boolean.prototype.valueOf);if(c){var y=uncurryThis(BigInt.prototype.valueOf)}if(u){var d=uncurryThis(Symbol.prototype.valueOf)}function checkBoxedPrimitive(e,t){if(typeof e!=="object"){return false}try{t(e);return true}catch(e){return false}}t.isArgumentsObject=n;t.isGeneratorFunction=o;t.isTypedArray=i;function isPromise(e){return typeof Promise!=="undefined"&&e instanceof Promise||e!==null&&typeof e==="object"&&typeof e.then==="function"&&typeof e.catch==="function"}t.isPromise=isPromise;function isArrayBufferView(e){if(typeof ArrayBuffer!=="undefined"&&ArrayBuffer.isView){return ArrayBuffer.isView(e)}return i(e)||isDataView(e)}t.isArrayBufferView=isArrayBufferView;function isUint8Array(e){return a(e)==="Uint8Array"}t.isUint8Array=isUint8Array;function isUint8ClampedArray(e){return a(e)==="Uint8ClampedArray"}t.isUint8ClampedArray=isUint8ClampedArray;function isUint16Array(e){return a(e)==="Uint16Array"}t.isUint16Array=isUint16Array;function isUint32Array(e){return a(e)==="Uint32Array"}t.isUint32Array=isUint32Array;function isInt8Array(e){return a(e)==="Int8Array"}t.isInt8Array=isInt8Array;function isInt16Array(e){return a(e)==="Int16Array"}t.isInt16Array=isInt16Array;function isInt32Array(e){return a(e)==="Int32Array"}t.isInt32Array=isInt32Array;function isFloat32Array(e){return a(e)==="Float32Array"}t.isFloat32Array=isFloat32Array;function isFloat64Array(e){return a(e)==="Float64Array"}t.isFloat64Array=isFloat64Array;function isBigInt64Array(e){return a(e)==="BigInt64Array"}t.isBigInt64Array=isBigInt64Array;function isBigUint64Array(e){return a(e)==="BigUint64Array"}t.isBigUint64Array=isBigUint64Array;function isMapToString(e){return f(e)==="[object Map]"}isMapToString.working=typeof Map!=="undefined"&&isMapToString(new Map);function isMap(e){if(typeof Map==="undefined"){return false}return isMapToString.working?isMapToString(e):e instanceof Map}t.isMap=isMap;function isSetToString(e){return f(e)==="[object Set]"}isSetToString.working=typeof Set!=="undefined"&&isSetToString(new Set);function isSet(e){if(typeof Set==="undefined"){return false}return isSetToString.working?isSetToString(e):e instanceof Set}t.isSet=isSet;function isWeakMapToString(e){return f(e)==="[object WeakMap]"}isWeakMapToString.working=typeof WeakMap!=="undefined"&&isWeakMapToString(new WeakMap);function isWeakMap(e){if(typeof WeakMap==="undefined"){return false}return isWeakMapToString.working?isWeakMapToString(e):e instanceof WeakMap}t.isWeakMap=isWeakMap;function isWeakSetToString(e){return f(e)==="[object WeakSet]"}isWeakSetToString.working=typeof WeakSet!=="undefined"&&isWeakSetToString(new WeakSet);function isWeakSet(e){return isWeakSetToString(e)}t.isWeakSet=isWeakSet;function isArrayBufferToString(e){return f(e)==="[object ArrayBuffer]"}isArrayBufferToString.working=typeof ArrayBuffer!=="undefined"&&isArrayBufferToString(new ArrayBuffer);function isArrayBuffer(e){if(typeof ArrayBuffer==="undefined"){return false}return isArrayBufferToString.working?isArrayBufferToString(e):e instanceof ArrayBuffer}t.isArrayBuffer=isArrayBuffer;function isDataViewToString(e){return f(e)==="[object DataView]"}isDataViewToString.working=typeof ArrayBuffer!=="undefined"&&typeof DataView!=="undefined"&&isDataViewToString(new DataView(new ArrayBuffer(1),0,1));function isDataView(e){if(typeof DataView==="undefined"){return false}return isDataViewToString.working?isDataViewToString(e):e instanceof DataView}t.isDataView=isDataView;var g=typeof SharedArrayBuffer!=="undefined"?SharedArrayBuffer:undefined;function isSharedArrayBufferToString(e){return f(e)==="[object SharedArrayBuffer]"}function isSharedArrayBuffer(e){if(typeof g==="undefined"){return false}if(typeof isSharedArrayBufferToString.working==="undefined"){isSharedArrayBufferToString.working=isSharedArrayBufferToString(new g)}return isSharedArrayBufferToString.working?isSharedArrayBufferToString(e):e instanceof g}t.isSharedArrayBuffer=isSharedArrayBuffer;function isAsyncFunction(e){return f(e)==="[object AsyncFunction]"}t.isAsyncFunction=isAsyncFunction;function isMapIterator(e){return f(e)==="[object Map Iterator]"}t.isMapIterator=isMapIterator;function isSetIterator(e){return f(e)==="[object Set Iterator]"}t.isSetIterator=isSetIterator;function isGeneratorObject(e){return f(e)==="[object Generator]"}t.isGeneratorObject=isGeneratorObject;function isWebAssemblyCompiledModule(e){return f(e)==="[object WebAssembly.Module]"}t.isWebAssemblyCompiledModule=isWebAssemblyCompiledModule;function isNumberObject(e){return checkBoxedPrimitive(e,s)}t.isNumberObject=isNumberObject;function isStringObject(e){return checkBoxedPrimitive(e,p)}t.isStringObject=isStringObject;function isBooleanObject(e){return checkBoxedPrimitive(e,l)}t.isBooleanObject=isBooleanObject;function isBigIntObject(e){return c&&checkBoxedPrimitive(e,y)}t.isBigIntObject=isBigIntObject;function isSymbolObject(e){return u&&checkBoxedPrimitive(e,d)}t.isSymbolObject=isSymbolObject;function isBoxedPrimitive(e){return isNumberObject(e)||isStringObject(e)||isBooleanObject(e)||isBigIntObject(e)||isSymbolObject(e)}t.isBoxedPrimitive=isBoxedPrimitive;function isAnyArrayBuffer(e){return typeof Uint8Array!=="undefined"&&(isArrayBuffer(e)||isSharedArrayBuffer(e))}t.isAnyArrayBuffer=isAnyArrayBuffer;["isProxy","isExternal","isModuleNamespaceObject"].forEach((function(e){Object.defineProperty(t,e,{enumerable:false,value:function(){throw new Error(e+" is not supported in userland")}})}))},650:function(e,t,r){var n=Object.getOwnPropertyDescriptors||function getOwnPropertyDescriptors(e){var t=Object.keys(e);var r={};for(var n=0;n<t.length;n++){r[t[n]]=Object.getOwnPropertyDescriptor(e,t[n])}return r};var o=/%[sdj%]/g;t.format=function(e){if(!isString(e)){var t=[];for(var r=0;r<arguments.length;r++){t.push(inspect(arguments[r]))}return t.join(" ")}var r=1;var n=arguments;var a=n.length;var i=String(e).replace(o,(function(e){if(e==="%%")return"%";if(r>=a)return e;switch(e){case"%s":return String(n[r++]);case"%d":return Number(n[r++]);case"%j":try{return JSON.stringify(n[r++])}catch(e){return"[Circular]"}default:return e}}));for(var c=n[r];r<a;c=n[++r]){if(isNull(c)||!isObject(c)){i+=" "+c}else{i+=" "+inspect(c)}}return i};t.deprecate=function(e,r){if(typeof process!=="undefined"&&process.noDeprecation===true){return e}if(typeof process==="undefined"){return function(){return t.deprecate(e,r).apply(this,arguments)}}var n=false;function deprecated(){if(!n){if(process.throwDeprecation){throw new Error(r)}else if(process.traceDeprecation){console.trace(r)}else{console.error(r)}n=true}return e.apply(this,arguments)}return deprecated};var a={};var i=/^$/;if(process.env.NODE_DEBUG){var c=process.env.NODE_DEBUG;c=c.replace(/[|\\{}()[\]^$+?.]/g,"\\$&").replace(/\*/g,".*").replace(/,/g,"$|^").toUpperCase();i=new RegExp("^"+c+"$","i")}t.debuglog=function(e){e=e.toUpperCase();if(!a[e]){if(i.test(e)){var r=process.pid;a[e]=function(){var n=t.format.apply(t,arguments);console.error("%s %d: %s",e,r,n)}}else{a[e]=function(){}}}return a[e]};function inspect(e,r){var n={seen:[],stylize:stylizeNoColor};if(arguments.length>=3)n.depth=arguments[2];if(arguments.length>=4)n.colors=arguments[3];if(isBoolean(r)){n.showHidden=r}else if(r){t._extend(n,r)}if(isUndefined(n.showHidden))n.showHidden=false;if(isUndefined(n.depth))n.depth=2;if(isUndefined(n.colors))n.colors=false;if(isUndefined(n.customInspect))n.customInspect=true;if(n.colors)n.stylize=stylizeWithColor;return formatValue(n,e,n.depth)}t.inspect=inspect;inspect.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]};inspect.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"};function stylizeWithColor(e,t){var r=inspect.styles[t];if(r){return"["+inspect.colors[r][0]+"m"+e+"["+inspect.colors[r][1]+"m"}else{return e}}function stylizeNoColor(e,t){return e}function arrayToHash(e){var t={};e.forEach((function(e,r){t[e]=true}));return t}function formatValue(e,r,n){if(e.customInspect&&r&&isFunction(r.inspect)&&r.inspect!==t.inspect&&!(r.constructor&&r.constructor.prototype===r)){var o=r.inspect(n,e);if(!isString(o)){o=formatValue(e,o,n)}return o}var a=formatPrimitive(e,r);if(a){return a}var i=Object.keys(r);var c=arrayToHash(i);if(e.showHidden){i=Object.getOwnPropertyNames(r)}if(isError(r)&&(i.indexOf("message")>=0||i.indexOf("description")>=0)){return formatError(r)}if(i.length===0){if(isFunction(r)){var u=r.name?": "+r.name:"";return e.stylize("[Function"+u+"]","special")}if(isRegExp(r)){return e.stylize(RegExp.prototype.toString.call(r),"regexp")}if(isDate(r)){return e.stylize(Date.prototype.toString.call(r),"date")}if(isError(r)){return formatError(r)}}var f="",s=false,p=["{","}"];if(isArray(r)){s=true;p=["[","]"]}if(isFunction(r)){var l=r.name?": "+r.name:"";f=" [Function"+l+"]"}if(isRegExp(r)){f=" "+RegExp.prototype.toString.call(r)}if(isDate(r)){f=" "+Date.prototype.toUTCString.call(r)}if(isError(r)){f=" "+formatError(r)}if(i.length===0&&(!s||r.length==0)){return p[0]+f+p[1]}if(n<0){if(isRegExp(r)){return e.stylize(RegExp.prototype.toString.call(r),"regexp")}else{return e.stylize("[Object]","special")}}e.seen.push(r);var y;if(s){y=formatArray(e,r,n,c,i)}else{y=i.map((function(t){return formatProperty(e,r,n,c,t,s)}))}e.seen.pop();return reduceToSingleString(y,f,p)}function formatPrimitive(e,t){if(isUndefined(t))return e.stylize("undefined","undefined");if(isString(t)){var r="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(r,"string")}if(isNumber(t))return e.stylize(""+t,"number");if(isBoolean(t))return e.stylize(""+t,"boolean");if(isNull(t))return e.stylize("null","null")}function formatError(e){return"["+Error.prototype.toString.call(e)+"]"}function formatArray(e,t,r,n,o){var a=[];for(var i=0,c=t.length;i<c;++i){if(hasOwnProperty(t,String(i))){a.push(formatProperty(e,t,r,n,String(i),true))}else{a.push("")}}o.forEach((function(o){if(!o.match(/^\d+$/)){a.push(formatProperty(e,t,r,n,o,true))}}));return a}function formatProperty(e,t,r,n,o,a){var i,c,u;u=Object.getOwnPropertyDescriptor(t,o)||{value:t[o]};if(u.get){if(u.set){c=e.stylize("[Getter/Setter]","special")}else{c=e.stylize("[Getter]","special")}}else{if(u.set){c=e.stylize("[Setter]","special")}}if(!hasOwnProperty(n,o)){i="["+o+"]"}if(!c){if(e.seen.indexOf(u.value)<0){if(isNull(r)){c=formatValue(e,u.value,null)}else{c=formatValue(e,u.value,r-1)}if(c.indexOf("\n")>-1){if(a){c=c.split("\n").map((function(e){return"  "+e})).join("\n").substr(2)}else{c="\n"+c.split("\n").map((function(e){return"   "+e})).join("\n")}}}else{c=e.stylize("[Circular]","special")}}if(isUndefined(i)){if(a&&o.match(/^\d+$/)){return c}i=JSON.stringify(""+o);if(i.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)){i=i.substr(1,i.length-2);i=e.stylize(i,"name")}else{i=i.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'");i=e.stylize(i,"string")}}return i+": "+c}function reduceToSingleString(e,t,r){var n=0;var o=e.reduce((function(e,t){n++;if(t.indexOf("\n")>=0)n++;return e+t.replace(/\u001b\[\d\d?m/g,"").length+1}),0);if(o>60){return r[0]+(t===""?"":t+"\n ")+" "+e.join(",\n  ")+" "+r[1]}return r[0]+t+" "+e.join(", ")+" "+r[1]}t.types=r(3);function isArray(e){return Array.isArray(e)}t.isArray=isArray;function isBoolean(e){return typeof e==="boolean"}t.isBoolean=isBoolean;function isNull(e){return e===null}t.isNull=isNull;function isNullOrUndefined(e){return e==null}t.isNullOrUndefined=isNullOrUndefined;function isNumber(e){return typeof e==="number"}t.isNumber=isNumber;function isString(e){return typeof e==="string"}t.isString=isString;function isSymbol(e){return typeof e==="symbol"}t.isSymbol=isSymbol;function isUndefined(e){return e===void 0}t.isUndefined=isUndefined;function isRegExp(e){return isObject(e)&&objectToString(e)==="[object RegExp]"}t.isRegExp=isRegExp;t.types.isRegExp=isRegExp;function isObject(e){return typeof e==="object"&&e!==null}t.isObject=isObject;function isDate(e){return isObject(e)&&objectToString(e)==="[object Date]"}t.isDate=isDate;t.types.isDate=isDate;function isError(e){return isObject(e)&&(objectToString(e)==="[object Error]"||e instanceof Error)}t.isError=isError;t.types.isNativeError=isError;function isFunction(e){return typeof e==="function"}t.isFunction=isFunction;function isPrimitive(e){return e===null||typeof e==="boolean"||typeof e==="number"||typeof e==="string"||typeof e==="symbol"||typeof e==="undefined"}t.isPrimitive=isPrimitive;t.isBuffer=r(536);function objectToString(e){return Object.prototype.toString.call(e)}function pad(e){return e<10?"0"+e.toString(10):e.toString(10)}var u=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function timestamp(){var e=new Date;var t=[pad(e.getHours()),pad(e.getMinutes()),pad(e.getSeconds())].join(":");return[e.getDate(),u[e.getMonth()],t].join(" ")}t.log=function(){console.log("%s - %s",timestamp(),t.format.apply(t,arguments))};t.inherits=r(526);t._extend=function(e,t){if(!t||!isObject(t))return e;var r=Object.keys(t);var n=r.length;while(n--){e[r[n]]=t[r[n]]}return e};function hasOwnProperty(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var f=typeof Symbol!=="undefined"?Symbol("util.promisify.custom"):undefined;t.promisify=function promisify(e){if(typeof e!=="function")throw new TypeError('The "original" argument must be of type Function');if(f&&e[f]){var t=e[f];if(typeof t!=="function"){throw new TypeError('The "util.promisify.custom" argument must be of type Function')}Object.defineProperty(t,f,{value:t,enumerable:false,writable:false,configurable:true});return t}function t(){var t,r;var n=new Promise((function(e,n){t=e;r=n}));var o=[];for(var a=0;a<arguments.length;a++){o.push(arguments[a])}o.push((function(e,n){if(e){r(e)}else{t(n)}}));try{e.apply(this,o)}catch(e){r(e)}return n}Object.setPrototypeOf(t,Object.getPrototypeOf(e));if(f)Object.defineProperty(t,f,{value:t,enumerable:false,writable:false,configurable:true});return Object.defineProperties(t,n(e))};t.promisify.custom=f;function callbackifyOnRejected(e,t){if(!e){var r=new Error("Promise was rejected with a falsy value");r.reason=e;e=r}return t(e)}function callbackify(e){if(typeof e!=="function"){throw new TypeError('The "original" argument must be of type Function')}function callbackified(){var t=[];for(var r=0;r<arguments.length;r++){t.push(arguments[r])}var n=t.pop();if(typeof n!=="function"){throw new TypeError("The last argument must be of type Function")}var o=this;var cb=function(){return n.apply(o,arguments)};e.apply(this,t).then((function(e){process.nextTick(cb.bind(null,null,e))}),(function(e){process.nextTick(callbackifyOnRejected.bind(null,e,cb))}))}Object.setPrototypeOf(callbackified,Object.getPrototypeOf(e));Object.defineProperties(callbackified,n(e));return callbackified}t.callbackify=callbackify},715:function(e,t,r){"use strict";var n=r(219);var o=r(627);var a=r(749);var i=a("Object.prototype.toString");var c=r(449)();var u=c&&typeof Symbol.toStringTag==="symbol";var f=o();var s=a("String.prototype.slice");var p={};var l=r(850);var y=Object.getPrototypeOf;if(u&&l&&y){n(f,(function(e){if(typeof __webpack_require__.g[e]==="function"){var t=new __webpack_require__.g[e];if(!(Symbol.toStringTag in t)){throw new EvalError("this engine has support for Symbol.toStringTag, but "+e+" does not have the property! Please report this.")}var r=y(t);var n=l(r,Symbol.toStringTag);if(!n){var o=y(r);n=l(o,Symbol.toStringTag)}p[e]=n.get}}))}var d=function tryAllTypedArrays(e){var t=false;n(p,(function(r,n){if(!t){try{var o=r.call(e);if(o===n){t=o}}catch(e){}}}));return t};var g=r(234);e.exports=function whichTypedArray(e){if(!g(e)){return false}if(!u){return s(i(e),8,-1)}return d(e)}},227:function(e,t,r){"use strict";var n;var o=SyntaxError;var a=Function;var i=TypeError;var getEvalledConstructor=function(e){try{return Function('"use strict"; return ('+e+").constructor;")()}catch(e){}};var c=Object.getOwnPropertyDescriptor;if(c){try{c({},"")}catch(e){c=null}}var throwTypeError=function(){throw new i};var u=c?function(){try{arguments.callee;return throwTypeError}catch(e){try{return c(arguments,"callee").get}catch(e){return throwTypeError}}}():throwTypeError;var f=r(449)();var s=Object.getPrototypeOf||function(e){return e.__proto__};var p=getEvalledConstructor("async function* () {}");var l=p?p.prototype:n;var y=l?l.prototype:n;var d=typeof Uint8Array==="undefined"?n:s(Uint8Array);var g={"%AggregateError%":typeof AggregateError==="undefined"?n:AggregateError,"%Array%":Array,"%ArrayBuffer%":typeof ArrayBuffer==="undefined"?n:ArrayBuffer,"%ArrayIteratorPrototype%":f?s([][Symbol.iterator]()):n,"%AsyncFromSyncIteratorPrototype%":n,"%AsyncFunction%":getEvalledConstructor("async function () {}"),"%AsyncGenerator%":l,"%AsyncGeneratorFunction%":p,"%AsyncIteratorPrototype%":y?s(y):n,"%Atomics%":typeof Atomics==="undefined"?n:Atomics,"%BigInt%":typeof BigInt==="undefined"?n:BigInt,"%Boolean%":Boolean,"%DataView%":typeof DataView==="undefined"?n:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":Error,"%eval%":eval,"%EvalError%":EvalError,"%Float32Array%":typeof Float32Array==="undefined"?n:Float32Array,"%Float64Array%":typeof Float64Array==="undefined"?n:Float64Array,"%FinalizationRegistry%":typeof FinalizationRegistry==="undefined"?n:FinalizationRegistry,"%Function%":a,"%GeneratorFunction%":getEvalledConstructor("function* () {}"),"%Int8Array%":typeof Int8Array==="undefined"?n:Int8Array,"%Int16Array%":typeof Int16Array==="undefined"?n:Int16Array,"%Int32Array%":typeof Int32Array==="undefined"?n:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":f?s(s([][Symbol.iterator]())):n,"%JSON%":typeof JSON==="object"?JSON:n,"%Map%":typeof Map==="undefined"?n:Map,"%MapIteratorPrototype%":typeof Map==="undefined"||!f?n:s((new Map)[Symbol.iterator]()),"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":typeof Promise==="undefined"?n:Promise,"%Proxy%":typeof Proxy==="undefined"?n:Proxy,"%RangeError%":RangeError,"%ReferenceError%":ReferenceError,"%Reflect%":typeof Reflect==="undefined"?n:Reflect,"%RegExp%":RegExp,"%Set%":typeof Set==="undefined"?n:Set,"%SetIteratorPrototype%":typeof Set==="undefined"||!f?n:s((new Set)[Symbol.iterator]()),"%SharedArrayBuffer%":typeof SharedArrayBuffer==="undefined"?n:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":f?s(""[Symbol.iterator]()):n,"%Symbol%":f?Symbol:n,"%SyntaxError%":o,"%ThrowTypeError%":u,"%TypedArray%":d,"%TypeError%":i,"%Uint8Array%":typeof Uint8Array==="undefined"?n:Uint8Array,"%Uint8ClampedArray%":typeof Uint8ClampedArray==="undefined"?n:Uint8ClampedArray,"%Uint16Array%":typeof Uint16Array==="undefined"?n:Uint16Array,"%Uint32Array%":typeof Uint32Array==="undefined"?n:Uint32Array,"%URIError%":URIError,"%WeakMap%":typeof WeakMap==="undefined"?n:WeakMap,"%WeakRef%":typeof WeakRef==="undefined"?n:WeakRef,"%WeakSet%":typeof WeakSet==="undefined"?n:WeakSet};var v={"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]};var b=r(517);var h=r(793);var m=b.call(Function.call,Array.prototype.concat);var A=b.call(Function.apply,Array.prototype.splice);var S=b.call(Function.call,String.prototype.replace);var E=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;var P=/\\(\\)?/g;var w=function stringToPath(e){var t=[];S(e,E,(function(e,r,n,o){t[t.length]=n?S(o,P,"$1"):r||e}));return t};var O=function getBaseIntrinsic(e,t){var r=e;var n;if(h(v,r)){n=v[r];r="%"+n[0]+"%"}if(h(g,r)){var a=g[r];if(typeof a==="undefined"&&!t){throw new i("intrinsic "+e+" exists, but is not available. Please file an issue!")}return{alias:n,name:r,value:a}}throw new o("intrinsic "+e+" does not exist!")};e.exports=function GetIntrinsic(e,t){if(typeof e!=="string"||e.length===0){throw new i("intrinsic name must be a non-empty string")}if(arguments.length>1&&typeof t!=="boolean"){throw new i('"allowMissing" argument must be a boolean')}var r=w(e);var n=r.length>0?r[0]:"";var o=O("%"+n+"%",t);var a=o.name;var u=o.value;var f=false;var s=o.alias;if(s){n=s[0];A(r,m([0,1],s))}for(var p=1,l=true;p<r.length;p+=1){var y=r[p];if(y==="constructor"||!l){f=true}n+="."+y;a="%"+n+"%";if(h(g,a)){u=g[a]}else if(u!=null){if(c&&p+1>=r.length){var d=c(u,y);l=!!d;if(!t&&!(y in u)){throw new i("base intrinsic for "+e+" exists, but the property is not available.")}if(l&&"get"in d&&!("originalValue"in d.get)){u=d.get}else{u=u[y]}}else{l=h(u,y);u=u[y]}if(l&&!f){g[a]=u}}}return u}},850:function(e,t,r){"use strict";var n=r(227);var o=n("%Object.getOwnPropertyDescriptor%");if(o){try{o([],"length")}catch(e){o=null}}e.exports=o},627:function(e,t,r){"use strict";var n=r(901);e.exports=function availableTypedArrays(){return n(["BigInt64Array","BigUint64Array","Float32Array","Float64Array","Int16Array","Int32Array","Int8Array","Uint16Array","Uint32Array","Uint8Array","Uint8ClampedArray"],(function(e){return typeof __webpack_require__.g[e]==="function"}))}}};var t={};function __nccwpck_require__(r){var n=t[r];if(n!==undefined){return n.exports}var o=t[r]={exports:{}};var a=true;try{e[r](o,o.exports,__nccwpck_require__);a=false}finally{if(a)delete t[r]}return o.exports}if(typeof __nccwpck_require__!=="undefined")__nccwpck_require__.ab=__dirname+"/";var r=__nccwpck_require__(313);module.exports=r})();

/***/ }),

/***/ 9681:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var __dirname = "/";
/* provided dependency */ var process = __webpack_require__(4155);
(function(){var e={526:function(e){if(typeof Object.create==="function"){e.exports=function inherits(e,t){if(t){e.super_=t;e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}})}}}else{e.exports=function inherits(e,t){if(t){e.super_=t;var TempCtor=function(){};TempCtor.prototype=t.prototype;e.prototype=new TempCtor;e.prototype.constructor=e}}}},118:function(e,t,r){var n=r(300);var i=n.Buffer;function copyProps(e,t){for(var r in e){t[r]=e[r]}}if(i.from&&i.alloc&&i.allocUnsafe&&i.allocUnsafeSlow){e.exports=n}else{copyProps(n,t);t.Buffer=SafeBuffer}function SafeBuffer(e,t,r){return i(e,t,r)}SafeBuffer.prototype=Object.create(i.prototype);copyProps(i,SafeBuffer);SafeBuffer.from=function(e,t,r){if(typeof e==="number"){throw new TypeError("Argument must not be a number")}return i(e,t,r)};SafeBuffer.alloc=function(e,t,r){if(typeof e!=="number"){throw new TypeError("Argument must be a number")}var n=i(e);if(t!==undefined){if(typeof r==="string"){n.fill(t,r)}else{n.fill(t)}}else{n.fill(0)}return n};SafeBuffer.allocUnsafe=function(e){if(typeof e!=="number"){throw new TypeError("Argument must be a number")}return i(e)};SafeBuffer.allocUnsafeSlow=function(e){if(typeof e!=="number"){throw new TypeError("Argument must be a number")}return n.SlowBuffer(e)}},562:function(e,t,r){e.exports=Stream;var n=r(361).EventEmitter;var i=r(526);i(Stream,n);Stream.Readable=r(375);Stream.Writable=r(886);Stream.Duplex=r(239);Stream.Transform=r(786);Stream.PassThrough=r(663);Stream.finished=r(494);Stream.pipeline=r(229);Stream.Stream=Stream;function Stream(){n.call(this)}Stream.prototype.pipe=function(e,t){var r=this;function ondata(t){if(e.writable){if(false===e.write(t)&&r.pause){r.pause()}}}r.on("data",ondata);function ondrain(){if(r.readable&&r.resume){r.resume()}}e.on("drain",ondrain);if(!e._isStdio&&(!t||t.end!==false)){r.on("end",onend);r.on("close",onclose)}var i=false;function onend(){if(i)return;i=true;e.end()}function onclose(){if(i)return;i=true;if(typeof e.destroy==="function")e.destroy()}function onerror(e){cleanup();if(n.listenerCount(this,"error")===0){throw e}}r.on("error",onerror);e.on("error",onerror);function cleanup(){r.removeListener("data",ondata);e.removeListener("drain",ondrain);r.removeListener("end",onend);r.removeListener("close",onclose);r.removeListener("error",onerror);e.removeListener("error",onerror);r.removeListener("end",cleanup);r.removeListener("close",cleanup);e.removeListener("close",cleanup)}r.on("end",cleanup);r.on("close",cleanup);e.on("close",cleanup);e.emit("pipe",r);return e}},833:function(e){"use strict";const t={};function createErrorType(e,r,n){if(!n){n=Error}function getMessage(e,t,n){if(typeof r==="string"){return r}else{return r(e,t,n)}}class NodeError extends n{constructor(e,t,r){super(getMessage(e,t,r))}}NodeError.prototype.name=n.name;NodeError.prototype.code=e;t[e]=NodeError}function oneOf(e,t){if(Array.isArray(e)){const r=e.length;e=e.map((e=>String(e)));if(r>2){return`one of ${t} ${e.slice(0,r-1).join(", ")}, or `+e[r-1]}else if(r===2){return`one of ${t} ${e[0]} or ${e[1]}`}else{return`of ${t} ${e[0]}`}}else{return`of ${t} ${String(e)}`}}function startsWith(e,t,r){return e.substr(!r||r<0?0:+r,t.length)===t}function endsWith(e,t,r){if(r===undefined||r>e.length){r=e.length}return e.substring(r-t.length,r)===t}function includes(e,t,r){if(typeof r!=="number"){r=0}if(r+t.length>e.length){return false}else{return e.indexOf(t,r)!==-1}}createErrorType("ERR_INVALID_OPT_VALUE",(function(e,t){return'The value "'+t+'" is invalid for option "'+e+'"'}),TypeError);createErrorType("ERR_INVALID_ARG_TYPE",(function(e,t,r){let n;if(typeof t==="string"&&startsWith(t,"not ")){n="must not be";t=t.replace(/^not /,"")}else{n="must be"}let i;if(endsWith(e," argument")){i=`The ${e} ${n} ${oneOf(t,"type")}`}else{const r=includes(e,".")?"property":"argument";i=`The "${e}" ${r} ${n} ${oneOf(t,"type")}`}i+=`. Received type ${typeof r}`;return i}),TypeError);createErrorType("ERR_STREAM_PUSH_AFTER_EOF","stream.push() after EOF");createErrorType("ERR_METHOD_NOT_IMPLEMENTED",(function(e){return"The "+e+" method is not implemented"}));createErrorType("ERR_STREAM_PREMATURE_CLOSE","Premature close");createErrorType("ERR_STREAM_DESTROYED",(function(e){return"Cannot call "+e+" after a stream was destroyed"}));createErrorType("ERR_MULTIPLE_CALLBACK","Callback called multiple times");createErrorType("ERR_STREAM_CANNOT_PIPE","Cannot pipe, not readable");createErrorType("ERR_STREAM_WRITE_AFTER_END","write after end");createErrorType("ERR_STREAM_NULL_VALUES","May not write null values to stream",TypeError);createErrorType("ERR_UNKNOWN_ENCODING",(function(e){return"Unknown encoding: "+e}),TypeError);createErrorType("ERR_STREAM_UNSHIFT_AFTER_END_EVENT","stream.unshift() after end event");e.exports.q=t},239:function(e,t,r){"use strict";var n=Object.keys||function(e){var t=[];for(var r in e){t.push(r)}return t};e.exports=Duplex;var i=r(375);var a=r(886);r(526)(Duplex,i);{var o=n(a.prototype);for(var s=0;s<o.length;s++){var f=o[s];if(!Duplex.prototype[f])Duplex.prototype[f]=a.prototype[f]}}function Duplex(e){if(!(this instanceof Duplex))return new Duplex(e);i.call(this,e);a.call(this,e);this.allowHalfOpen=true;if(e){if(e.readable===false)this.readable=false;if(e.writable===false)this.writable=false;if(e.allowHalfOpen===false){this.allowHalfOpen=false;this.once("end",onend)}}}Object.defineProperty(Duplex.prototype,"writableHighWaterMark",{enumerable:false,get:function get(){return this._writableState.highWaterMark}});Object.defineProperty(Duplex.prototype,"writableBuffer",{enumerable:false,get:function get(){return this._writableState&&this._writableState.getBuffer()}});Object.defineProperty(Duplex.prototype,"writableLength",{enumerable:false,get:function get(){return this._writableState.length}});function onend(){if(this._writableState.ended)return;process.nextTick(onEndNT,this)}function onEndNT(e){e.end()}Object.defineProperty(Duplex.prototype,"destroyed",{enumerable:false,get:function get(){if(this._readableState===undefined||this._writableState===undefined){return false}return this._readableState.destroyed&&this._writableState.destroyed},set:function set(e){if(this._readableState===undefined||this._writableState===undefined){return}this._readableState.destroyed=e;this._writableState.destroyed=e}})},663:function(e,t,r){"use strict";e.exports=PassThrough;var n=r(786);r(526)(PassThrough,n);function PassThrough(e){if(!(this instanceof PassThrough))return new PassThrough(e);n.call(this,e)}PassThrough.prototype._transform=function(e,t,r){r(null,e)}},375:function(e,t,r){"use strict";e.exports=Readable;var n;Readable.ReadableState=ReadableState;var i=r(361).EventEmitter;var a=function EElistenerCount(e,t){return e.listeners(t).length};var o=r(919);var s=r(300).Buffer;var f=__webpack_require__.g.Uint8Array||function(){};function _uint8ArrayToBuffer(e){return s.from(e)}function _isUint8Array(e){return s.isBuffer(e)||e instanceof f}var l=r(837);var u;if(l&&l.debuglog){u=l.debuglog("stream")}else{u=function debug(){}}var d=r(914);var c=r(364);var h=r(322),p=h.getHighWaterMark;var b=r(833).q,g=b.ERR_INVALID_ARG_TYPE,y=b.ERR_STREAM_PUSH_AFTER_EOF,_=b.ERR_METHOD_NOT_IMPLEMENTED,v=b.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;var w;var m;var S;r(526)(Readable,o);var R=c.errorOrDestroy;var E=["error","close","destroy","pause","resume"];function prependListener(e,t,r){if(typeof e.prependListener==="function")return e.prependListener(t,r);if(!e._events||!e._events[t])e.on(t,r);else if(Array.isArray(e._events[t]))e._events[t].unshift(r);else e._events[t]=[r,e._events[t]]}function ReadableState(e,t,i){n=n||r(239);e=e||{};if(typeof i!=="boolean")i=t instanceof n;this.objectMode=!!e.objectMode;if(i)this.objectMode=this.objectMode||!!e.readableObjectMode;this.highWaterMark=p(this,e,"readableHighWaterMark",i);this.buffer=new d;this.length=0;this.pipes=null;this.pipesCount=0;this.flowing=null;this.ended=false;this.endEmitted=false;this.reading=false;this.sync=true;this.needReadable=false;this.emittedReadable=false;this.readableListening=false;this.resumeScheduled=false;this.paused=true;this.emitClose=e.emitClose!==false;this.autoDestroy=!!e.autoDestroy;this.destroyed=false;this.defaultEncoding=e.defaultEncoding||"utf8";this.awaitDrain=0;this.readingMore=false;this.decoder=null;this.encoding=null;if(e.encoding){if(!w)w=r(642).s;this.decoder=new w(e.encoding);this.encoding=e.encoding}}function Readable(e){n=n||r(239);if(!(this instanceof Readable))return new Readable(e);var t=this instanceof n;this._readableState=new ReadableState(e,this,t);this.readable=true;if(e){if(typeof e.read==="function")this._read=e.read;if(typeof e.destroy==="function")this._destroy=e.destroy}o.call(this)}Object.defineProperty(Readable.prototype,"destroyed",{enumerable:false,get:function get(){if(this._readableState===undefined){return false}return this._readableState.destroyed},set:function set(e){if(!this._readableState){return}this._readableState.destroyed=e}});Readable.prototype.destroy=c.destroy;Readable.prototype._undestroy=c.undestroy;Readable.prototype._destroy=function(e,t){t(e)};Readable.prototype.push=function(e,t){var r=this._readableState;var n;if(!r.objectMode){if(typeof e==="string"){t=t||r.defaultEncoding;if(t!==r.encoding){e=s.from(e,t);t=""}n=true}}else{n=true}return readableAddChunk(this,e,t,false,n)};Readable.prototype.unshift=function(e){return readableAddChunk(this,e,null,true,false)};function readableAddChunk(e,t,r,n,i){u("readableAddChunk",t);var a=e._readableState;if(t===null){a.reading=false;onEofChunk(e,a)}else{var o;if(!i)o=chunkInvalid(a,t);if(o){R(e,o)}else if(a.objectMode||t&&t.length>0){if(typeof t!=="string"&&!a.objectMode&&Object.getPrototypeOf(t)!==s.prototype){t=_uint8ArrayToBuffer(t)}if(n){if(a.endEmitted)R(e,new v);else addChunk(e,a,t,true)}else if(a.ended){R(e,new y)}else if(a.destroyed){return false}else{a.reading=false;if(a.decoder&&!r){t=a.decoder.write(t);if(a.objectMode||t.length!==0)addChunk(e,a,t,false);else maybeReadMore(e,a)}else{addChunk(e,a,t,false)}}}else if(!n){a.reading=false;maybeReadMore(e,a)}}return!a.ended&&(a.length<a.highWaterMark||a.length===0)}function addChunk(e,t,r,n){if(t.flowing&&t.length===0&&!t.sync){t.awaitDrain=0;e.emit("data",r)}else{t.length+=t.objectMode?1:r.length;if(n)t.buffer.unshift(r);else t.buffer.push(r);if(t.needReadable)emitReadable(e)}maybeReadMore(e,t)}function chunkInvalid(e,t){var r;if(!_isUint8Array(t)&&typeof t!=="string"&&t!==undefined&&!e.objectMode){r=new g("chunk",["string","Buffer","Uint8Array"],t)}return r}Readable.prototype.isPaused=function(){return this._readableState.flowing===false};Readable.prototype.setEncoding=function(e){if(!w)w=r(642).s;var t=new w(e);this._readableState.decoder=t;this._readableState.encoding=this._readableState.decoder.encoding;var n=this._readableState.buffer.head;var i="";while(n!==null){i+=t.write(n.data);n=n.next}this._readableState.buffer.clear();if(i!=="")this._readableState.buffer.push(i);this._readableState.length=i.length;return this};var T=1073741824;function computeNewHighWaterMark(e){if(e>=T){e=T}else{e--;e|=e>>>1;e|=e>>>2;e|=e>>>4;e|=e>>>8;e|=e>>>16;e++}return e}function howMuchToRead(e,t){if(e<=0||t.length===0&&t.ended)return 0;if(t.objectMode)return 1;if(e!==e){if(t.flowing&&t.length)return t.buffer.head.data.length;else return t.length}if(e>t.highWaterMark)t.highWaterMark=computeNewHighWaterMark(e);if(e<=t.length)return e;if(!t.ended){t.needReadable=true;return 0}return t.length}Readable.prototype.read=function(e){u("read",e);e=parseInt(e,10);var t=this._readableState;var r=e;if(e!==0)t.emittedReadable=false;if(e===0&&t.needReadable&&((t.highWaterMark!==0?t.length>=t.highWaterMark:t.length>0)||t.ended)){u("read: emitReadable",t.length,t.ended);if(t.length===0&&t.ended)endReadable(this);else emitReadable(this);return null}e=howMuchToRead(e,t);if(e===0&&t.ended){if(t.length===0)endReadable(this);return null}var n=t.needReadable;u("need readable",n);if(t.length===0||t.length-e<t.highWaterMark){n=true;u("length less than watermark",n)}if(t.ended||t.reading){n=false;u("reading or ended",n)}else if(n){u("do read");t.reading=true;t.sync=true;if(t.length===0)t.needReadable=true;this._read(t.highWaterMark);t.sync=false;if(!t.reading)e=howMuchToRead(r,t)}var i;if(e>0)i=fromList(e,t);else i=null;if(i===null){t.needReadable=t.length<=t.highWaterMark;e=0}else{t.length-=e;t.awaitDrain=0}if(t.length===0){if(!t.ended)t.needReadable=true;if(r!==e&&t.ended)endReadable(this)}if(i!==null)this.emit("data",i);return i};function onEofChunk(e,t){u("onEofChunk");if(t.ended)return;if(t.decoder){var r=t.decoder.end();if(r&&r.length){t.buffer.push(r);t.length+=t.objectMode?1:r.length}}t.ended=true;if(t.sync){emitReadable(e)}else{t.needReadable=false;if(!t.emittedReadable){t.emittedReadable=true;emitReadable_(e)}}}function emitReadable(e){var t=e._readableState;u("emitReadable",t.needReadable,t.emittedReadable);t.needReadable=false;if(!t.emittedReadable){u("emitReadable",t.flowing);t.emittedReadable=true;process.nextTick(emitReadable_,e)}}function emitReadable_(e){var t=e._readableState;u("emitReadable_",t.destroyed,t.length,t.ended);if(!t.destroyed&&(t.length||t.ended)){e.emit("readable");t.emittedReadable=false}t.needReadable=!t.flowing&&!t.ended&&t.length<=t.highWaterMark;flow(e)}function maybeReadMore(e,t){if(!t.readingMore){t.readingMore=true;process.nextTick(maybeReadMore_,e,t)}}function maybeReadMore_(e,t){while(!t.reading&&!t.ended&&(t.length<t.highWaterMark||t.flowing&&t.length===0)){var r=t.length;u("maybeReadMore read 0");e.read(0);if(r===t.length)break}t.readingMore=false}Readable.prototype._read=function(e){R(this,new _("_read()"))};Readable.prototype.pipe=function(e,t){var r=this;var n=this._readableState;switch(n.pipesCount){case 0:n.pipes=e;break;case 1:n.pipes=[n.pipes,e];break;default:n.pipes.push(e);break}n.pipesCount+=1;u("pipe count=%d opts=%j",n.pipesCount,t);var i=(!t||t.end!==false)&&e!==process.stdout&&e!==process.stderr;var o=i?onend:unpipe;if(n.endEmitted)process.nextTick(o);else r.once("end",o);e.on("unpipe",onunpipe);function onunpipe(e,t){u("onunpipe");if(e===r){if(t&&t.hasUnpiped===false){t.hasUnpiped=true;cleanup()}}}function onend(){u("onend");e.end()}var s=pipeOnDrain(r);e.on("drain",s);var f=false;function cleanup(){u("cleanup");e.removeListener("close",onclose);e.removeListener("finish",onfinish);e.removeListener("drain",s);e.removeListener("error",onerror);e.removeListener("unpipe",onunpipe);r.removeListener("end",onend);r.removeListener("end",unpipe);r.removeListener("data",ondata);f=true;if(n.awaitDrain&&(!e._writableState||e._writableState.needDrain))s()}r.on("data",ondata);function ondata(t){u("ondata");var i=e.write(t);u("dest.write",i);if(i===false){if((n.pipesCount===1&&n.pipes===e||n.pipesCount>1&&indexOf(n.pipes,e)!==-1)&&!f){u("false write response, pause",n.awaitDrain);n.awaitDrain++}r.pause()}}function onerror(t){u("onerror",t);unpipe();e.removeListener("error",onerror);if(a(e,"error")===0)R(e,t)}prependListener(e,"error",onerror);function onclose(){e.removeListener("finish",onfinish);unpipe()}e.once("close",onclose);function onfinish(){u("onfinish");e.removeListener("close",onclose);unpipe()}e.once("finish",onfinish);function unpipe(){u("unpipe");r.unpipe(e)}e.emit("pipe",r);if(!n.flowing){u("pipe resume");r.resume()}return e};function pipeOnDrain(e){return function pipeOnDrainFunctionResult(){var t=e._readableState;u("pipeOnDrain",t.awaitDrain);if(t.awaitDrain)t.awaitDrain--;if(t.awaitDrain===0&&a(e,"data")){t.flowing=true;flow(e)}}}Readable.prototype.unpipe=function(e){var t=this._readableState;var r={hasUnpiped:false};if(t.pipesCount===0)return this;if(t.pipesCount===1){if(e&&e!==t.pipes)return this;if(!e)e=t.pipes;t.pipes=null;t.pipesCount=0;t.flowing=false;if(e)e.emit("unpipe",this,r);return this}if(!e){var n=t.pipes;var i=t.pipesCount;t.pipes=null;t.pipesCount=0;t.flowing=false;for(var a=0;a<i;a++){n[a].emit("unpipe",this,{hasUnpiped:false})}return this}var o=indexOf(t.pipes,e);if(o===-1)return this;t.pipes.splice(o,1);t.pipesCount-=1;if(t.pipesCount===1)t.pipes=t.pipes[0];e.emit("unpipe",this,r);return this};Readable.prototype.on=function(e,t){var r=o.prototype.on.call(this,e,t);var n=this._readableState;if(e==="data"){n.readableListening=this.listenerCount("readable")>0;if(n.flowing!==false)this.resume()}else if(e==="readable"){if(!n.endEmitted&&!n.readableListening){n.readableListening=n.needReadable=true;n.flowing=false;n.emittedReadable=false;u("on readable",n.length,n.reading);if(n.length){emitReadable(this)}else if(!n.reading){process.nextTick(nReadingNextTick,this)}}}return r};Readable.prototype.addListener=Readable.prototype.on;Readable.prototype.removeListener=function(e,t){var r=o.prototype.removeListener.call(this,e,t);if(e==="readable"){process.nextTick(updateReadableListening,this)}return r};Readable.prototype.removeAllListeners=function(e){var t=o.prototype.removeAllListeners.apply(this,arguments);if(e==="readable"||e===undefined){process.nextTick(updateReadableListening,this)}return t};function updateReadableListening(e){var t=e._readableState;t.readableListening=e.listenerCount("readable")>0;if(t.resumeScheduled&&!t.paused){t.flowing=true}else if(e.listenerCount("data")>0){e.resume()}}function nReadingNextTick(e){u("readable nexttick read 0");e.read(0)}Readable.prototype.resume=function(){var e=this._readableState;if(!e.flowing){u("resume");e.flowing=!e.readableListening;resume(this,e)}e.paused=false;return this};function resume(e,t){if(!t.resumeScheduled){t.resumeScheduled=true;process.nextTick(resume_,e,t)}}function resume_(e,t){u("resume",t.reading);if(!t.reading){e.read(0)}t.resumeScheduled=false;e.emit("resume");flow(e);if(t.flowing&&!t.reading)e.read(0)}Readable.prototype.pause=function(){u("call pause flowing=%j",this._readableState.flowing);if(this._readableState.flowing!==false){u("pause");this._readableState.flowing=false;this.emit("pause")}this._readableState.paused=true;return this};function flow(e){var t=e._readableState;u("flow",t.flowing);while(t.flowing&&e.read()!==null){}}Readable.prototype.wrap=function(e){var t=this;var r=this._readableState;var n=false;e.on("end",(function(){u("wrapped end");if(r.decoder&&!r.ended){var e=r.decoder.end();if(e&&e.length)t.push(e)}t.push(null)}));e.on("data",(function(i){u("wrapped data");if(r.decoder)i=r.decoder.write(i);if(r.objectMode&&(i===null||i===undefined))return;else if(!r.objectMode&&(!i||!i.length))return;var a=t.push(i);if(!a){n=true;e.pause()}}));for(var i in e){if(this[i]===undefined&&typeof e[i]==="function"){this[i]=function methodWrap(t){return function methodWrapReturnFunction(){return e[t].apply(e,arguments)}}(i)}}for(var a=0;a<E.length;a++){e.on(E[a],this.emit.bind(this,E[a]))}this._read=function(t){u("wrapped _read",t);if(n){n=false;e.resume()}};return this};if(typeof Symbol==="function"){Readable.prototype[Symbol.asyncIterator]=function(){if(m===undefined){m=r(771)}return m(this)}}Object.defineProperty(Readable.prototype,"readableHighWaterMark",{enumerable:false,get:function get(){return this._readableState.highWaterMark}});Object.defineProperty(Readable.prototype,"readableBuffer",{enumerable:false,get:function get(){return this._readableState&&this._readableState.buffer}});Object.defineProperty(Readable.prototype,"readableFlowing",{enumerable:false,get:function get(){return this._readableState.flowing},set:function set(e){if(this._readableState){this._readableState.flowing=e}}});Readable._fromList=fromList;Object.defineProperty(Readable.prototype,"readableLength",{enumerable:false,get:function get(){return this._readableState.length}});function fromList(e,t){if(t.length===0)return null;var r;if(t.objectMode)r=t.buffer.shift();else if(!e||e>=t.length){if(t.decoder)r=t.buffer.join("");else if(t.buffer.length===1)r=t.buffer.first();else r=t.buffer.concat(t.length);t.buffer.clear()}else{r=t.buffer.consume(e,t.decoder)}return r}function endReadable(e){var t=e._readableState;u("endReadable",t.endEmitted);if(!t.endEmitted){t.ended=true;process.nextTick(endReadableNT,t,e)}}function endReadableNT(e,t){u("endReadableNT",e.endEmitted,e.length);if(!e.endEmitted&&e.length===0){e.endEmitted=true;t.readable=false;t.emit("end");if(e.autoDestroy){var r=t._writableState;if(!r||r.autoDestroy&&r.finished){t.destroy()}}}}if(typeof Symbol==="function"){Readable.from=function(e,t){if(S===undefined){S=r(16)}return S(Readable,e,t)}}function indexOf(e,t){for(var r=0,n=e.length;r<n;r++){if(e[r]===t)return r}return-1}},786:function(e,t,r){"use strict";e.exports=Transform;var n=r(833).q,i=n.ERR_METHOD_NOT_IMPLEMENTED,a=n.ERR_MULTIPLE_CALLBACK,o=n.ERR_TRANSFORM_ALREADY_TRANSFORMING,s=n.ERR_TRANSFORM_WITH_LENGTH_0;var f=r(239);r(526)(Transform,f);function afterTransform(e,t){var r=this._transformState;r.transforming=false;var n=r.writecb;if(n===null){return this.emit("error",new a)}r.writechunk=null;r.writecb=null;if(t!=null)this.push(t);n(e);var i=this._readableState;i.reading=false;if(i.needReadable||i.length<i.highWaterMark){this._read(i.highWaterMark)}}function Transform(e){if(!(this instanceof Transform))return new Transform(e);f.call(this,e);this._transformState={afterTransform:afterTransform.bind(this),needTransform:false,transforming:false,writecb:null,writechunk:null,writeencoding:null};this._readableState.needReadable=true;this._readableState.sync=false;if(e){if(typeof e.transform==="function")this._transform=e.transform;if(typeof e.flush==="function")this._flush=e.flush}this.on("prefinish",prefinish)}function prefinish(){var e=this;if(typeof this._flush==="function"&&!this._readableState.destroyed){this._flush((function(t,r){done(e,t,r)}))}else{done(this,null,null)}}Transform.prototype.push=function(e,t){this._transformState.needTransform=false;return f.prototype.push.call(this,e,t)};Transform.prototype._transform=function(e,t,r){r(new i("_transform()"))};Transform.prototype._write=function(e,t,r){var n=this._transformState;n.writecb=r;n.writechunk=e;n.writeencoding=t;if(!n.transforming){var i=this._readableState;if(n.needTransform||i.needReadable||i.length<i.highWaterMark)this._read(i.highWaterMark)}};Transform.prototype._read=function(e){var t=this._transformState;if(t.writechunk!==null&&!t.transforming){t.transforming=true;this._transform(t.writechunk,t.writeencoding,t.afterTransform)}else{t.needTransform=true}};Transform.prototype._destroy=function(e,t){f.prototype._destroy.call(this,e,(function(e){t(e)}))};function done(e,t,r){if(t)return e.emit("error",t);if(r!=null)e.push(r);if(e._writableState.length)throw new s;if(e._transformState.transforming)throw new o;return e.push(null)}},886:function(e,t,r){"use strict";e.exports=Writable;function WriteReq(e,t,r){this.chunk=e;this.encoding=t;this.callback=r;this.next=null}function CorkedRequest(e){var t=this;this.next=null;this.entry=null;this.finish=function(){onCorkedFinish(t,e)}}var n;Writable.WritableState=WritableState;var i={deprecate:r(121)};var a=r(919);var o=r(300).Buffer;var s=__webpack_require__.g.Uint8Array||function(){};function _uint8ArrayToBuffer(e){return o.from(e)}function _isUint8Array(e){return o.isBuffer(e)||e instanceof s}var f=r(364);var l=r(322),u=l.getHighWaterMark;var d=r(833).q,c=d.ERR_INVALID_ARG_TYPE,h=d.ERR_METHOD_NOT_IMPLEMENTED,p=d.ERR_MULTIPLE_CALLBACK,b=d.ERR_STREAM_CANNOT_PIPE,g=d.ERR_STREAM_DESTROYED,y=d.ERR_STREAM_NULL_VALUES,_=d.ERR_STREAM_WRITE_AFTER_END,v=d.ERR_UNKNOWN_ENCODING;var w=f.errorOrDestroy;r(526)(Writable,a);function nop(){}function WritableState(e,t,i){n=n||r(239);e=e||{};if(typeof i!=="boolean")i=t instanceof n;this.objectMode=!!e.objectMode;if(i)this.objectMode=this.objectMode||!!e.writableObjectMode;this.highWaterMark=u(this,e,"writableHighWaterMark",i);this.finalCalled=false;this.needDrain=false;this.ending=false;this.ended=false;this.finished=false;this.destroyed=false;var a=e.decodeStrings===false;this.decodeStrings=!a;this.defaultEncoding=e.defaultEncoding||"utf8";this.length=0;this.writing=false;this.corked=0;this.sync=true;this.bufferProcessing=false;this.onwrite=function(e){onwrite(t,e)};this.writecb=null;this.writelen=0;this.bufferedRequest=null;this.lastBufferedRequest=null;this.pendingcb=0;this.prefinished=false;this.errorEmitted=false;this.emitClose=e.emitClose!==false;this.autoDestroy=!!e.autoDestroy;this.bufferedRequestCount=0;this.corkedRequestsFree=new CorkedRequest(this)}WritableState.prototype.getBuffer=function getBuffer(){var e=this.bufferedRequest;var t=[];while(e){t.push(e);e=e.next}return t};(function(){try{Object.defineProperty(WritableState.prototype,"buffer",{get:i.deprecate((function writableStateBufferGetter(){return this.getBuffer()}),"_writableState.buffer is deprecated. Use _writableState.getBuffer "+"instead.","DEP0003")})}catch(e){}})();var m;if(typeof Symbol==="function"&&Symbol.hasInstance&&typeof Function.prototype[Symbol.hasInstance]==="function"){m=Function.prototype[Symbol.hasInstance];Object.defineProperty(Writable,Symbol.hasInstance,{value:function value(e){if(m.call(this,e))return true;if(this!==Writable)return false;return e&&e._writableState instanceof WritableState}})}else{m=function realHasInstance(e){return e instanceof this}}function Writable(e){n=n||r(239);var t=this instanceof n;if(!t&&!m.call(Writable,this))return new Writable(e);this._writableState=new WritableState(e,this,t);this.writable=true;if(e){if(typeof e.write==="function")this._write=e.write;if(typeof e.writev==="function")this._writev=e.writev;if(typeof e.destroy==="function")this._destroy=e.destroy;if(typeof e.final==="function")this._final=e.final}a.call(this)}Writable.prototype.pipe=function(){w(this,new b)};function writeAfterEnd(e,t){var r=new _;w(e,r);process.nextTick(t,r)}function validChunk(e,t,r,n){var i;if(r===null){i=new y}else if(typeof r!=="string"&&!t.objectMode){i=new c("chunk",["string","Buffer"],r)}if(i){w(e,i);process.nextTick(n,i);return false}return true}Writable.prototype.write=function(e,t,r){var n=this._writableState;var i=false;var a=!n.objectMode&&_isUint8Array(e);if(a&&!o.isBuffer(e)){e=_uint8ArrayToBuffer(e)}if(typeof t==="function"){r=t;t=null}if(a)t="buffer";else if(!t)t=n.defaultEncoding;if(typeof r!=="function")r=nop;if(n.ending)writeAfterEnd(this,r);else if(a||validChunk(this,n,e,r)){n.pendingcb++;i=writeOrBuffer(this,n,a,e,t,r)}return i};Writable.prototype.cork=function(){this._writableState.corked++};Writable.prototype.uncork=function(){var e=this._writableState;if(e.corked){e.corked--;if(!e.writing&&!e.corked&&!e.bufferProcessing&&e.bufferedRequest)clearBuffer(this,e)}};Writable.prototype.setDefaultEncoding=function setDefaultEncoding(e){if(typeof e==="string")e=e.toLowerCase();if(!(["hex","utf8","utf-8","ascii","binary","base64","ucs2","ucs-2","utf16le","utf-16le","raw"].indexOf((e+"").toLowerCase())>-1))throw new v(e);this._writableState.defaultEncoding=e;return this};Object.defineProperty(Writable.prototype,"writableBuffer",{enumerable:false,get:function get(){return this._writableState&&this._writableState.getBuffer()}});function decodeChunk(e,t,r){if(!e.objectMode&&e.decodeStrings!==false&&typeof t==="string"){t=o.from(t,r)}return t}Object.defineProperty(Writable.prototype,"writableHighWaterMark",{enumerable:false,get:function get(){return this._writableState.highWaterMark}});function writeOrBuffer(e,t,r,n,i,a){if(!r){var o=decodeChunk(t,n,i);if(n!==o){r=true;i="buffer";n=o}}var s=t.objectMode?1:n.length;t.length+=s;var f=t.length<t.highWaterMark;if(!f)t.needDrain=true;if(t.writing||t.corked){var l=t.lastBufferedRequest;t.lastBufferedRequest={chunk:n,encoding:i,isBuf:r,callback:a,next:null};if(l){l.next=t.lastBufferedRequest}else{t.bufferedRequest=t.lastBufferedRequest}t.bufferedRequestCount+=1}else{doWrite(e,t,false,s,n,i,a)}return f}function doWrite(e,t,r,n,i,a,o){t.writelen=n;t.writecb=o;t.writing=true;t.sync=true;if(t.destroyed)t.onwrite(new g("write"));else if(r)e._writev(i,t.onwrite);else e._write(i,a,t.onwrite);t.sync=false}function onwriteError(e,t,r,n,i){--t.pendingcb;if(r){process.nextTick(i,n);process.nextTick(finishMaybe,e,t);e._writableState.errorEmitted=true;w(e,n)}else{i(n);e._writableState.errorEmitted=true;w(e,n);finishMaybe(e,t)}}function onwriteStateUpdate(e){e.writing=false;e.writecb=null;e.length-=e.writelen;e.writelen=0}function onwrite(e,t){var r=e._writableState;var n=r.sync;var i=r.writecb;if(typeof i!=="function")throw new p;onwriteStateUpdate(r);if(t)onwriteError(e,r,n,t,i);else{var a=needFinish(r)||e.destroyed;if(!a&&!r.corked&&!r.bufferProcessing&&r.bufferedRequest){clearBuffer(e,r)}if(n){process.nextTick(afterWrite,e,r,a,i)}else{afterWrite(e,r,a,i)}}}function afterWrite(e,t,r,n){if(!r)onwriteDrain(e,t);t.pendingcb--;n();finishMaybe(e,t)}function onwriteDrain(e,t){if(t.length===0&&t.needDrain){t.needDrain=false;e.emit("drain")}}function clearBuffer(e,t){t.bufferProcessing=true;var r=t.bufferedRequest;if(e._writev&&r&&r.next){var n=t.bufferedRequestCount;var i=new Array(n);var a=t.corkedRequestsFree;a.entry=r;var o=0;var s=true;while(r){i[o]=r;if(!r.isBuf)s=false;r=r.next;o+=1}i.allBuffers=s;doWrite(e,t,true,t.length,i,"",a.finish);t.pendingcb++;t.lastBufferedRequest=null;if(a.next){t.corkedRequestsFree=a.next;a.next=null}else{t.corkedRequestsFree=new CorkedRequest(t)}t.bufferedRequestCount=0}else{while(r){var f=r.chunk;var l=r.encoding;var u=r.callback;var d=t.objectMode?1:f.length;doWrite(e,t,false,d,f,l,u);r=r.next;t.bufferedRequestCount--;if(t.writing){break}}if(r===null)t.lastBufferedRequest=null}t.bufferedRequest=r;t.bufferProcessing=false}Writable.prototype._write=function(e,t,r){r(new h("_write()"))};Writable.prototype._writev=null;Writable.prototype.end=function(e,t,r){var n=this._writableState;if(typeof e==="function"){r=e;e=null;t=null}else if(typeof t==="function"){r=t;t=null}if(e!==null&&e!==undefined)this.write(e,t);if(n.corked){n.corked=1;this.uncork()}if(!n.ending)endWritable(this,n,r);return this};Object.defineProperty(Writable.prototype,"writableLength",{enumerable:false,get:function get(){return this._writableState.length}});function needFinish(e){return e.ending&&e.length===0&&e.bufferedRequest===null&&!e.finished&&!e.writing}function callFinal(e,t){e._final((function(r){t.pendingcb--;if(r){w(e,r)}t.prefinished=true;e.emit("prefinish");finishMaybe(e,t)}))}function prefinish(e,t){if(!t.prefinished&&!t.finalCalled){if(typeof e._final==="function"&&!t.destroyed){t.pendingcb++;t.finalCalled=true;process.nextTick(callFinal,e,t)}else{t.prefinished=true;e.emit("prefinish")}}}function finishMaybe(e,t){var r=needFinish(t);if(r){prefinish(e,t);if(t.pendingcb===0){t.finished=true;e.emit("finish");if(t.autoDestroy){var n=e._readableState;if(!n||n.autoDestroy&&n.endEmitted){e.destroy()}}}}return r}function endWritable(e,t,r){t.ending=true;finishMaybe(e,t);if(r){if(t.finished)process.nextTick(r);else e.once("finish",r)}t.ended=true;e.writable=false}function onCorkedFinish(e,t,r){var n=e.entry;e.entry=null;while(n){var i=n.callback;t.pendingcb--;i(r);n=n.next}t.corkedRequestsFree.next=e}Object.defineProperty(Writable.prototype,"destroyed",{enumerable:false,get:function get(){if(this._writableState===undefined){return false}return this._writableState.destroyed},set:function set(e){if(!this._writableState){return}this._writableState.destroyed=e}});Writable.prototype.destroy=f.destroy;Writable.prototype._undestroy=f.undestroy;Writable.prototype._destroy=function(e,t){t(e)}},771:function(e,t,r){"use strict";var n;function _defineProperty(e,t,r){if(t in e){Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true})}else{e[t]=r}return e}var i=r(494);var a=Symbol("lastResolve");var o=Symbol("lastReject");var s=Symbol("error");var f=Symbol("ended");var l=Symbol("lastPromise");var u=Symbol("handlePromise");var d=Symbol("stream");function createIterResult(e,t){return{value:e,done:t}}function readAndResolve(e){var t=e[a];if(t!==null){var r=e[d].read();if(r!==null){e[l]=null;e[a]=null;e[o]=null;t(createIterResult(r,false))}}}function onReadable(e){process.nextTick(readAndResolve,e)}function wrapForNext(e,t){return function(r,n){e.then((function(){if(t[f]){r(createIterResult(undefined,true));return}t[u](r,n)}),n)}}var c=Object.getPrototypeOf((function(){}));var h=Object.setPrototypeOf((n={get stream(){return this[d]},next:function next(){var e=this;var t=this[s];if(t!==null){return Promise.reject(t)}if(this[f]){return Promise.resolve(createIterResult(undefined,true))}if(this[d].destroyed){return new Promise((function(t,r){process.nextTick((function(){if(e[s]){r(e[s])}else{t(createIterResult(undefined,true))}}))}))}var r=this[l];var n;if(r){n=new Promise(wrapForNext(r,this))}else{var i=this[d].read();if(i!==null){return Promise.resolve(createIterResult(i,false))}n=new Promise(this[u])}this[l]=n;return n}},_defineProperty(n,Symbol.asyncIterator,(function(){return this})),_defineProperty(n,"return",(function _return(){var e=this;return new Promise((function(t,r){e[d].destroy(null,(function(e){if(e){r(e);return}t(createIterResult(undefined,true))}))}))})),n),c);var p=function createReadableStreamAsyncIterator(e){var t;var r=Object.create(h,(t={},_defineProperty(t,d,{value:e,writable:true}),_defineProperty(t,a,{value:null,writable:true}),_defineProperty(t,o,{value:null,writable:true}),_defineProperty(t,s,{value:null,writable:true}),_defineProperty(t,f,{value:e._readableState.endEmitted,writable:true}),_defineProperty(t,u,{value:function value(e,t){var n=r[d].read();if(n){r[l]=null;r[a]=null;r[o]=null;e(createIterResult(n,false))}else{r[a]=e;r[o]=t}},writable:true}),t));r[l]=null;i(e,(function(e){if(e&&e.code!=="ERR_STREAM_PREMATURE_CLOSE"){var t=r[o];if(t!==null){r[l]=null;r[a]=null;r[o]=null;t(e)}r[s]=e;return}var n=r[a];if(n!==null){r[l]=null;r[a]=null;r[o]=null;n(createIterResult(undefined,true))}r[f]=true}));e.on("readable",onReadable.bind(null,r));return r};e.exports=p},914:function(e,t,r){"use strict";function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);if(t)n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}));r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};if(t%2){ownKeys(Object(r),true).forEach((function(t){_defineProperty(e,t,r[t])}))}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(e,Object.getOwnPropertyDescriptors(r))}else{ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}}return e}function _defineProperty(e,t,r){if(t in e){Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true})}else{e[t]=r}return e}function _classCallCheck(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}function _createClass(e,t,r){if(t)_defineProperties(e.prototype,t);if(r)_defineProperties(e,r);return e}var n=r(300),i=n.Buffer;var a=r(837),o=a.inspect;var s=o&&o.custom||"inspect";function copyBuffer(e,t,r){i.prototype.copy.call(e,t,r)}e.exports=function(){function BufferList(){_classCallCheck(this,BufferList);this.head=null;this.tail=null;this.length=0}_createClass(BufferList,[{key:"push",value:function push(e){var t={data:e,next:null};if(this.length>0)this.tail.next=t;else this.head=t;this.tail=t;++this.length}},{key:"unshift",value:function unshift(e){var t={data:e,next:this.head};if(this.length===0)this.tail=t;this.head=t;++this.length}},{key:"shift",value:function shift(){if(this.length===0)return;var e=this.head.data;if(this.length===1)this.head=this.tail=null;else this.head=this.head.next;--this.length;return e}},{key:"clear",value:function clear(){this.head=this.tail=null;this.length=0}},{key:"join",value:function join(e){if(this.length===0)return"";var t=this.head;var r=""+t.data;while(t=t.next){r+=e+t.data}return r}},{key:"concat",value:function concat(e){if(this.length===0)return i.alloc(0);var t=i.allocUnsafe(e>>>0);var r=this.head;var n=0;while(r){copyBuffer(r.data,t,n);n+=r.data.length;r=r.next}return t}},{key:"consume",value:function consume(e,t){var r;if(e<this.head.data.length){r=this.head.data.slice(0,e);this.head.data=this.head.data.slice(e)}else if(e===this.head.data.length){r=this.shift()}else{r=t?this._getString(e):this._getBuffer(e)}return r}},{key:"first",value:function first(){return this.head.data}},{key:"_getString",value:function _getString(e){var t=this.head;var r=1;var n=t.data;e-=n.length;while(t=t.next){var i=t.data;var a=e>i.length?i.length:e;if(a===i.length)n+=i;else n+=i.slice(0,e);e-=a;if(e===0){if(a===i.length){++r;if(t.next)this.head=t.next;else this.head=this.tail=null}else{this.head=t;t.data=i.slice(a)}break}++r}this.length-=r;return n}},{key:"_getBuffer",value:function _getBuffer(e){var t=i.allocUnsafe(e);var r=this.head;var n=1;r.data.copy(t);e-=r.data.length;while(r=r.next){var a=r.data;var o=e>a.length?a.length:e;a.copy(t,t.length-e,0,o);e-=o;if(e===0){if(o===a.length){++n;if(r.next)this.head=r.next;else this.head=this.tail=null}else{this.head=r;r.data=a.slice(o)}break}++n}this.length-=n;return t}},{key:s,value:function value(e,t){return o(this,_objectSpread({},t,{depth:0,customInspect:false}))}}]);return BufferList}()},364:function(e){"use strict";function destroy(e,t){var r=this;var n=this._readableState&&this._readableState.destroyed;var i=this._writableState&&this._writableState.destroyed;if(n||i){if(t){t(e)}else if(e){if(!this._writableState){process.nextTick(emitErrorNT,this,e)}else if(!this._writableState.errorEmitted){this._writableState.errorEmitted=true;process.nextTick(emitErrorNT,this,e)}}return this}if(this._readableState){this._readableState.destroyed=true}if(this._writableState){this._writableState.destroyed=true}this._destroy(e||null,(function(e){if(!t&&e){if(!r._writableState){process.nextTick(emitErrorAndCloseNT,r,e)}else if(!r._writableState.errorEmitted){r._writableState.errorEmitted=true;process.nextTick(emitErrorAndCloseNT,r,e)}else{process.nextTick(emitCloseNT,r)}}else if(t){process.nextTick(emitCloseNT,r);t(e)}else{process.nextTick(emitCloseNT,r)}}));return this}function emitErrorAndCloseNT(e,t){emitErrorNT(e,t);emitCloseNT(e)}function emitCloseNT(e){if(e._writableState&&!e._writableState.emitClose)return;if(e._readableState&&!e._readableState.emitClose)return;e.emit("close")}function undestroy(){if(this._readableState){this._readableState.destroyed=false;this._readableState.reading=false;this._readableState.ended=false;this._readableState.endEmitted=false}if(this._writableState){this._writableState.destroyed=false;this._writableState.ended=false;this._writableState.ending=false;this._writableState.finalCalled=false;this._writableState.prefinished=false;this._writableState.finished=false;this._writableState.errorEmitted=false}}function emitErrorNT(e,t){e.emit("error",t)}function errorOrDestroy(e,t){var r=e._readableState;var n=e._writableState;if(r&&r.autoDestroy||n&&n.autoDestroy)e.destroy(t);else e.emit("error",t)}e.exports={destroy:destroy,undestroy:undestroy,errorOrDestroy:errorOrDestroy}},494:function(e,t,r){"use strict";var n=r(833).q.ERR_STREAM_PREMATURE_CLOSE;function once(e){var t=false;return function(){if(t)return;t=true;for(var r=arguments.length,n=new Array(r),i=0;i<r;i++){n[i]=arguments[i]}e.apply(this,n)}}function noop(){}function isRequest(e){return e.setHeader&&typeof e.abort==="function"}function eos(e,t,r){if(typeof t==="function")return eos(e,null,t);if(!t)t={};r=once(r||noop);var i=t.readable||t.readable!==false&&e.readable;var a=t.writable||t.writable!==false&&e.writable;var o=function onlegacyfinish(){if(!e.writable)f()};var s=e._writableState&&e._writableState.finished;var f=function onfinish(){a=false;s=true;if(!i)r.call(e)};var l=e._readableState&&e._readableState.endEmitted;var u=function onend(){i=false;l=true;if(!a)r.call(e)};var d=function onerror(t){r.call(e,t)};var c=function onclose(){var t;if(i&&!l){if(!e._readableState||!e._readableState.ended)t=new n;return r.call(e,t)}if(a&&!s){if(!e._writableState||!e._writableState.ended)t=new n;return r.call(e,t)}};var h=function onrequest(){e.req.on("finish",f)};if(isRequest(e)){e.on("complete",f);e.on("abort",c);if(e.req)h();else e.on("request",h)}else if(a&&!e._writableState){e.on("end",o);e.on("close",o)}e.on("end",u);e.on("finish",f);if(t.error!==false)e.on("error",d);e.on("close",c);return function(){e.removeListener("complete",f);e.removeListener("abort",c);e.removeListener("request",h);if(e.req)e.req.removeListener("finish",f);e.removeListener("end",o);e.removeListener("close",o);e.removeListener("finish",f);e.removeListener("end",u);e.removeListener("error",d);e.removeListener("close",c)}}e.exports=eos},16:function(e,t,r){"use strict";function asyncGeneratorStep(e,t,r,n,i,a,o){try{var s=e[a](o);var f=s.value}catch(e){r(e);return}if(s.done){t(f)}else{Promise.resolve(f).then(n,i)}}function _asyncToGenerator(e){return function(){var t=this,r=arguments;return new Promise((function(n,i){var a=e.apply(t,r);function _next(e){asyncGeneratorStep(a,n,i,_next,_throw,"next",e)}function _throw(e){asyncGeneratorStep(a,n,i,_next,_throw,"throw",e)}_next(undefined)}))}}function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);if(t)n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}));r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};if(t%2){ownKeys(Object(r),true).forEach((function(t){_defineProperty(e,t,r[t])}))}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(e,Object.getOwnPropertyDescriptors(r))}else{ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}}return e}function _defineProperty(e,t,r){if(t in e){Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true})}else{e[t]=r}return e}var n=r(833).q.ERR_INVALID_ARG_TYPE;function from(e,t,r){var i;if(t&&typeof t.next==="function"){i=t}else if(t&&t[Symbol.asyncIterator])i=t[Symbol.asyncIterator]();else if(t&&t[Symbol.iterator])i=t[Symbol.iterator]();else throw new n("iterable",["Iterable"],t);var a=new e(_objectSpread({objectMode:true},r));var o=false;a._read=function(){if(!o){o=true;next()}};function next(){return _next2.apply(this,arguments)}function _next2(){_next2=_asyncToGenerator((function*(){try{var e=yield i.next(),t=e.value,r=e.done;if(r){a.push(null)}else if(a.push(yield t)){next()}else{o=false}}catch(e){a.destroy(e)}}));return _next2.apply(this,arguments)}return a}e.exports=from},229:function(e,t,r){"use strict";var n;function once(e){var t=false;return function(){if(t)return;t=true;e.apply(void 0,arguments)}}var i=r(833).q,a=i.ERR_MISSING_ARGS,o=i.ERR_STREAM_DESTROYED;function noop(e){if(e)throw e}function isRequest(e){return e.setHeader&&typeof e.abort==="function"}function destroyer(e,t,i,a){a=once(a);var s=false;e.on("close",(function(){s=true}));if(n===undefined)n=r(494);n(e,{readable:t,writable:i},(function(e){if(e)return a(e);s=true;a()}));var f=false;return function(t){if(s)return;if(f)return;f=true;if(isRequest(e))return e.abort();if(typeof e.destroy==="function")return e.destroy();a(t||new o("pipe"))}}function call(e){e()}function pipe(e,t){return e.pipe(t)}function popCallback(e){if(!e.length)return noop;if(typeof e[e.length-1]!=="function")return noop;return e.pop()}function pipeline(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++){t[r]=arguments[r]}var n=popCallback(t);if(Array.isArray(t[0]))t=t[0];if(t.length<2){throw new a("streams")}var i;var o=t.map((function(e,r){var a=r<t.length-1;var s=r>0;return destroyer(e,a,s,(function(e){if(!i)i=e;if(e)o.forEach(call);if(a)return;o.forEach(call);n(i)}))}));return t.reduce(pipe)}e.exports=pipeline},322:function(e,t,r){"use strict";var n=r(833).q.ERR_INVALID_OPT_VALUE;function highWaterMarkFrom(e,t,r){return e.highWaterMark!=null?e.highWaterMark:t?e[r]:null}function getHighWaterMark(e,t,r,i){var a=highWaterMarkFrom(t,i,r);if(a!=null){if(!(isFinite(a)&&Math.floor(a)===a)||a<0){var o=i?r:"highWaterMark";throw new n(o,a)}return Math.floor(a)}return e.objectMode?16:16*1024}e.exports={getHighWaterMark:getHighWaterMark}},919:function(e,t,r){e.exports=r(781)},642:function(e,t,r){"use strict";var n=r(118).Buffer;var i=n.isEncoding||function(e){e=""+e;switch(e&&e.toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":case"raw":return true;default:return false}};function _normalizeEncoding(e){if(!e)return"utf8";var t;while(true){switch(e){case"utf8":case"utf-8":return"utf8";case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return"utf16le";case"latin1":case"binary":return"latin1";case"base64":case"ascii":case"hex":return e;default:if(t)return;e=(""+e).toLowerCase();t=true}}}function normalizeEncoding(e){var t=_normalizeEncoding(e);if(typeof t!=="string"&&(n.isEncoding===i||!i(e)))throw new Error("Unknown encoding: "+e);return t||e}t.s=StringDecoder;function StringDecoder(e){this.encoding=normalizeEncoding(e);var t;switch(this.encoding){case"utf16le":this.text=utf16Text;this.end=utf16End;t=4;break;case"utf8":this.fillLast=utf8FillLast;t=4;break;case"base64":this.text=base64Text;this.end=base64End;t=3;break;default:this.write=simpleWrite;this.end=simpleEnd;return}this.lastNeed=0;this.lastTotal=0;this.lastChar=n.allocUnsafe(t)}StringDecoder.prototype.write=function(e){if(e.length===0)return"";var t;var r;if(this.lastNeed){t=this.fillLast(e);if(t===undefined)return"";r=this.lastNeed;this.lastNeed=0}else{r=0}if(r<e.length)return t?t+this.text(e,r):this.text(e,r);return t||""};StringDecoder.prototype.end=utf8End;StringDecoder.prototype.text=utf8Text;StringDecoder.prototype.fillLast=function(e){if(this.lastNeed<=e.length){e.copy(this.lastChar,this.lastTotal-this.lastNeed,0,this.lastNeed);return this.lastChar.toString(this.encoding,0,this.lastTotal)}e.copy(this.lastChar,this.lastTotal-this.lastNeed,0,e.length);this.lastNeed-=e.length};function utf8CheckByte(e){if(e<=127)return 0;else if(e>>5===6)return 2;else if(e>>4===14)return 3;else if(e>>3===30)return 4;return e>>6===2?-1:-2}function utf8CheckIncomplete(e,t,r){var n=t.length-1;if(n<r)return 0;var i=utf8CheckByte(t[n]);if(i>=0){if(i>0)e.lastNeed=i-1;return i}if(--n<r||i===-2)return 0;i=utf8CheckByte(t[n]);if(i>=0){if(i>0)e.lastNeed=i-2;return i}if(--n<r||i===-2)return 0;i=utf8CheckByte(t[n]);if(i>=0){if(i>0){if(i===2)i=0;else e.lastNeed=i-3}return i}return 0}function utf8CheckExtraBytes(e,t,r){if((t[0]&192)!==128){e.lastNeed=0;return"�"}if(e.lastNeed>1&&t.length>1){if((t[1]&192)!==128){e.lastNeed=1;return"�"}if(e.lastNeed>2&&t.length>2){if((t[2]&192)!==128){e.lastNeed=2;return"�"}}}}function utf8FillLast(e){var t=this.lastTotal-this.lastNeed;var r=utf8CheckExtraBytes(this,e,t);if(r!==undefined)return r;if(this.lastNeed<=e.length){e.copy(this.lastChar,t,0,this.lastNeed);return this.lastChar.toString(this.encoding,0,this.lastTotal)}e.copy(this.lastChar,t,0,e.length);this.lastNeed-=e.length}function utf8Text(e,t){var r=utf8CheckIncomplete(this,e,t);if(!this.lastNeed)return e.toString("utf8",t);this.lastTotal=r;var n=e.length-(r-this.lastNeed);e.copy(this.lastChar,0,n);return e.toString("utf8",t,n)}function utf8End(e){var t=e&&e.length?this.write(e):"";if(this.lastNeed)return t+"�";return t}function utf16Text(e,t){if((e.length-t)%2===0){var r=e.toString("utf16le",t);if(r){var n=r.charCodeAt(r.length-1);if(n>=55296&&n<=56319){this.lastNeed=2;this.lastTotal=4;this.lastChar[0]=e[e.length-2];this.lastChar[1]=e[e.length-1];return r.slice(0,-1)}}return r}this.lastNeed=1;this.lastTotal=2;this.lastChar[0]=e[e.length-1];return e.toString("utf16le",t,e.length-1)}function utf16End(e){var t=e&&e.length?this.write(e):"";if(this.lastNeed){var r=this.lastTotal-this.lastNeed;return t+this.lastChar.toString("utf16le",0,r)}return t}function base64Text(e,t){var r=(e.length-t)%3;if(r===0)return e.toString("base64",t);this.lastNeed=3-r;this.lastTotal=3;if(r===1){this.lastChar[0]=e[e.length-1]}else{this.lastChar[0]=e[e.length-2];this.lastChar[1]=e[e.length-1]}return e.toString("base64",t,e.length-r)}function base64End(e){var t=e&&e.length?this.write(e):"";if(this.lastNeed)return t+this.lastChar.toString("base64",0,3-this.lastNeed);return t}function simpleWrite(e){return e.toString(this.encoding)}function simpleEnd(e){return e&&e.length?this.write(e):""}},121:function(e){e.exports=deprecate;function deprecate(e,t){if(config("noDeprecation")){return e}var r=false;function deprecated(){if(!r){if(config("throwDeprecation")){throw new Error(t)}else if(config("traceDeprecation")){console.trace(t)}else{console.warn(t)}r=true}return e.apply(this,arguments)}return deprecated}function config(e){try{if(!__webpack_require__.g.localStorage)return false}catch(e){return false}var t=__webpack_require__.g.localStorage[e];if(null==t)return false;return String(t).toLowerCase()==="true"}},300:function(e){"use strict";e.exports=__webpack_require__(8764)},361:function(e){"use strict";e.exports=__webpack_require__(7187)},781:function(e){"use strict";e.exports=(__webpack_require__(7187).EventEmitter)},837:function(e){"use strict";e.exports=__webpack_require__(9720)}};var t={};function __nccwpck_require__(r){var n=t[r];if(n!==undefined){return n.exports}var i=t[r]={exports:{}};var a=true;try{e[r](i,i.exports,__nccwpck_require__);a=false}finally{if(a)delete t[r]}return i.exports}if(typeof __nccwpck_require__!=="undefined")__nccwpck_require__.ab=__dirname+"/";var r=__nccwpck_require__(562);module.exports=r})();

/***/ }),

/***/ 9720:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var __dirname = "/";
/* provided dependency */ var Buffer = __webpack_require__(8764)["Buffer"];
/* provided dependency */ var process = __webpack_require__(4155);
(function(){var r={901:function(r){r.exports=function(r,e,o){if(r.filter)return r.filter(e,o);if(void 0===r||null===r)throw new TypeError;if("function"!=typeof e)throw new TypeError;var n=[];for(var i=0;i<r.length;i++){if(!t.call(r,i))continue;var a=r[i];if(e.call(o,a,i,r))n.push(a)}return n};var t=Object.prototype.hasOwnProperty},749:function(r,t,e){"use strict";var o=e(91);var n=e(112);var i=n(o("String.prototype.indexOf"));r.exports=function callBoundIntrinsic(r,t){var e=o(r,!!t);if(typeof e==="function"&&i(r,".prototype.")>-1){return n(e)}return e}},112:function(r,t,e){"use strict";var o=e(517);var n=e(91);var i=n("%Function.prototype.apply%");var a=n("%Function.prototype.call%");var y=n("%Reflect.apply%",true)||o.call(a,i);var p=n("%Object.getOwnPropertyDescriptor%",true);var f=n("%Object.defineProperty%",true);var u=n("%Math.max%");if(f){try{f({},"a",{value:1})}catch(r){f=null}}r.exports=function callBind(r){var t=y(o,a,arguments);if(p&&f){var e=p(t,"length");if(e.configurable){f(t,"length",{value:1+u(0,r.length-(arguments.length-1))})}}return t};var s=function applyBind(){return y(o,i,arguments)};if(f){f(r.exports,"apply",{value:s})}else{r.exports.apply=s}},91:function(r,t,e){"use strict";var o;var n=SyntaxError;var i=Function;var a=TypeError;var getEvalledConstructor=function(r){try{return Function('"use strict"; return ('+r+").constructor;")()}catch(r){}};var y=Object.getOwnPropertyDescriptor;if(y){try{y({},"")}catch(r){y=null}}var throwTypeError=function(){throw new a};var p=y?function(){try{arguments.callee;return throwTypeError}catch(r){try{return y(arguments,"callee").get}catch(r){return throwTypeError}}}():throwTypeError;var f=e(449)();var u=Object.getPrototypeOf||function(r){return r.__proto__};var s=getEvalledConstructor("async function* () {}");var c=s?s.prototype:o;var l=c?c.prototype:o;var d=typeof Uint8Array==="undefined"?o:u(Uint8Array);var g={"%AggregateError%":typeof AggregateError==="undefined"?o:AggregateError,"%Array%":Array,"%ArrayBuffer%":typeof ArrayBuffer==="undefined"?o:ArrayBuffer,"%ArrayIteratorPrototype%":f?u([][Symbol.iterator]()):o,"%AsyncFromSyncIteratorPrototype%":o,"%AsyncFunction%":getEvalledConstructor("async function () {}"),"%AsyncGenerator%":c,"%AsyncGeneratorFunction%":s,"%AsyncIteratorPrototype%":l?u(l):o,"%Atomics%":typeof Atomics==="undefined"?o:Atomics,"%BigInt%":typeof BigInt==="undefined"?o:BigInt,"%Boolean%":Boolean,"%DataView%":typeof DataView==="undefined"?o:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":Error,"%eval%":eval,"%EvalError%":EvalError,"%Float32Array%":typeof Float32Array==="undefined"?o:Float32Array,"%Float64Array%":typeof Float64Array==="undefined"?o:Float64Array,"%FinalizationRegistry%":typeof FinalizationRegistry==="undefined"?o:FinalizationRegistry,"%Function%":i,"%GeneratorFunction%":getEvalledConstructor("function* () {}"),"%Int8Array%":typeof Int8Array==="undefined"?o:Int8Array,"%Int16Array%":typeof Int16Array==="undefined"?o:Int16Array,"%Int32Array%":typeof Int32Array==="undefined"?o:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":f?u(u([][Symbol.iterator]())):o,"%JSON%":typeof JSON==="object"?JSON:o,"%Map%":typeof Map==="undefined"?o:Map,"%MapIteratorPrototype%":typeof Map==="undefined"||!f?o:u((new Map)[Symbol.iterator]()),"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":typeof Promise==="undefined"?o:Promise,"%Proxy%":typeof Proxy==="undefined"?o:Proxy,"%RangeError%":RangeError,"%ReferenceError%":ReferenceError,"%Reflect%":typeof Reflect==="undefined"?o:Reflect,"%RegExp%":RegExp,"%Set%":typeof Set==="undefined"?o:Set,"%SetIteratorPrototype%":typeof Set==="undefined"||!f?o:u((new Set)[Symbol.iterator]()),"%SharedArrayBuffer%":typeof SharedArrayBuffer==="undefined"?o:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":f?u(""[Symbol.iterator]()):o,"%Symbol%":f?Symbol:o,"%SyntaxError%":n,"%ThrowTypeError%":p,"%TypedArray%":d,"%TypeError%":a,"%Uint8Array%":typeof Uint8Array==="undefined"?o:Uint8Array,"%Uint8ClampedArray%":typeof Uint8ClampedArray==="undefined"?o:Uint8ClampedArray,"%Uint16Array%":typeof Uint16Array==="undefined"?o:Uint16Array,"%Uint32Array%":typeof Uint32Array==="undefined"?o:Uint32Array,"%URIError%":URIError,"%WeakMap%":typeof WeakMap==="undefined"?o:WeakMap,"%WeakRef%":typeof WeakRef==="undefined"?o:WeakRef,"%WeakSet%":typeof WeakSet==="undefined"?o:WeakSet};var A={"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]};var v=e(517);var b=e(793);var S=v.call(Function.call,Array.prototype.concat);var m=v.call(Function.apply,Array.prototype.splice);var P=v.call(Function.call,String.prototype.replace);var h=v.call(Function.call,String.prototype.slice);var O=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;var w=/\\(\\)?/g;var E=function stringToPath(r){var t=h(r,0,1);var e=h(r,-1);if(t==="%"&&e!=="%"){throw new n("invalid intrinsic syntax, expected closing `%`")}else if(e==="%"&&t!=="%"){throw new n("invalid intrinsic syntax, expected opening `%`")}var o=[];P(r,O,(function(r,t,e,n){o[o.length]=e?P(n,w,"$1"):t||r}));return o};var j=function getBaseIntrinsic(r,t){var e=r;var o;if(b(A,e)){o=A[e];e="%"+o[0]+"%"}if(b(g,e)){var i=g[e];if(typeof i==="undefined"&&!t){throw new a("intrinsic "+r+" exists, but is not available. Please file an issue!")}return{alias:o,name:e,value:i}}throw new n("intrinsic "+r+" does not exist!")};r.exports=function GetIntrinsic(r,t){if(typeof r!=="string"||r.length===0){throw new a("intrinsic name must be a non-empty string")}if(arguments.length>1&&typeof t!=="boolean"){throw new a('"allowMissing" argument must be a boolean')}var e=E(r);var i=e.length>0?e[0]:"";var p=j("%"+i+"%",t);var f=p.name;var u=p.value;var s=false;var c=p.alias;if(c){i=c[0];m(e,S([0,1],c))}for(var l=1,d=true;l<e.length;l+=1){var A=e[l];var v=h(A,0,1);var P=h(A,-1);if((v==='"'||v==="'"||v==="`"||(P==='"'||P==="'"||P==="`"))&&v!==P){throw new n("property names with quotes must have matching quotes")}if(A==="constructor"||!d){s=true}i+="."+A;f="%"+i+"%";if(b(g,f)){u=g[f]}else if(u!=null){if(!(A in u)){if(!t){throw new a("base intrinsic for "+r+" exists, but the property is not available.")}return void o}if(y&&l+1>=e.length){var O=y(u,A);d=!!O;if(d&&"get"in O&&!("originalValue"in O.get)){u=O.get}else{u=u[A]}}else{d=b(u,A);u=u[A]}if(d&&!s){g[f]=u}}}return u}},219:function(r){var t=Object.prototype.hasOwnProperty;var e=Object.prototype.toString;r.exports=function forEach(r,o,n){if(e.call(o)!=="[object Function]"){throw new TypeError("iterator must be a function")}var i=r.length;if(i===+i){for(var a=0;a<i;a++){o.call(n,r[a],a,r)}}else{for(var y in r){if(t.call(r,y)){o.call(n,r[y],y,r)}}}}},733:function(r){"use strict";var t="Function.prototype.bind called on incompatible ";var e=Array.prototype.slice;var o=Object.prototype.toString;var n="[object Function]";r.exports=function bind(r){var i=this;if(typeof i!=="function"||o.call(i)!==n){throw new TypeError(t+i)}var a=e.call(arguments,1);var y;var binder=function(){if(this instanceof y){var t=i.apply(this,a.concat(e.call(arguments)));if(Object(t)===t){return t}return this}else{return i.apply(r,a.concat(e.call(arguments)))}};var p=Math.max(0,i.length-a.length);var f=[];for(var u=0;u<p;u++){f.push("$"+u)}y=Function("binder","return function ("+f.join(",")+"){ return binder.apply(this,arguments); }")(binder);if(i.prototype){var s=function Empty(){};s.prototype=i.prototype;y.prototype=new s;s.prototype=null}return y}},517:function(r,t,e){"use strict";var o=e(733);r.exports=Function.prototype.bind||o},879:function(r,t,e){"use strict";var o;var n=SyntaxError;var i=Function;var a=TypeError;var getEvalledConstructor=function(r){try{return i('"use strict"; return ('+r+").constructor;")()}catch(r){}};var y=Object.getOwnPropertyDescriptor;if(y){try{y({},"")}catch(r){y=null}}var throwTypeError=function(){throw new a};var p=y?function(){try{arguments.callee;return throwTypeError}catch(r){try{return y(arguments,"callee").get}catch(r){return throwTypeError}}}():throwTypeError;var f=e(449)();var u=Object.getPrototypeOf||function(r){return r.__proto__};var s={};var c=typeof Uint8Array==="undefined"?o:u(Uint8Array);var l={"%AggregateError%":typeof AggregateError==="undefined"?o:AggregateError,"%Array%":Array,"%ArrayBuffer%":typeof ArrayBuffer==="undefined"?o:ArrayBuffer,"%ArrayIteratorPrototype%":f?u([][Symbol.iterator]()):o,"%AsyncFromSyncIteratorPrototype%":o,"%AsyncFunction%":s,"%AsyncGenerator%":s,"%AsyncGeneratorFunction%":s,"%AsyncIteratorPrototype%":s,"%Atomics%":typeof Atomics==="undefined"?o:Atomics,"%BigInt%":typeof BigInt==="undefined"?o:BigInt,"%Boolean%":Boolean,"%DataView%":typeof DataView==="undefined"?o:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":Error,"%eval%":eval,"%EvalError%":EvalError,"%Float32Array%":typeof Float32Array==="undefined"?o:Float32Array,"%Float64Array%":typeof Float64Array==="undefined"?o:Float64Array,"%FinalizationRegistry%":typeof FinalizationRegistry==="undefined"?o:FinalizationRegistry,"%Function%":i,"%GeneratorFunction%":s,"%Int8Array%":typeof Int8Array==="undefined"?o:Int8Array,"%Int16Array%":typeof Int16Array==="undefined"?o:Int16Array,"%Int32Array%":typeof Int32Array==="undefined"?o:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":f?u(u([][Symbol.iterator]())):o,"%JSON%":typeof JSON==="object"?JSON:o,"%Map%":typeof Map==="undefined"?o:Map,"%MapIteratorPrototype%":typeof Map==="undefined"||!f?o:u((new Map)[Symbol.iterator]()),"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":typeof Promise==="undefined"?o:Promise,"%Proxy%":typeof Proxy==="undefined"?o:Proxy,"%RangeError%":RangeError,"%ReferenceError%":ReferenceError,"%Reflect%":typeof Reflect==="undefined"?o:Reflect,"%RegExp%":RegExp,"%Set%":typeof Set==="undefined"?o:Set,"%SetIteratorPrototype%":typeof Set==="undefined"||!f?o:u((new Set)[Symbol.iterator]()),"%SharedArrayBuffer%":typeof SharedArrayBuffer==="undefined"?o:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":f?u(""[Symbol.iterator]()):o,"%Symbol%":f?Symbol:o,"%SyntaxError%":n,"%ThrowTypeError%":p,"%TypedArray%":c,"%TypeError%":a,"%Uint8Array%":typeof Uint8Array==="undefined"?o:Uint8Array,"%Uint8ClampedArray%":typeof Uint8ClampedArray==="undefined"?o:Uint8ClampedArray,"%Uint16Array%":typeof Uint16Array==="undefined"?o:Uint16Array,"%Uint32Array%":typeof Uint32Array==="undefined"?o:Uint32Array,"%URIError%":URIError,"%WeakMap%":typeof WeakMap==="undefined"?o:WeakMap,"%WeakRef%":typeof WeakRef==="undefined"?o:WeakRef,"%WeakSet%":typeof WeakSet==="undefined"?o:WeakSet};var d=function doEval(r){var t;if(r==="%AsyncFunction%"){t=getEvalledConstructor("async function () {}")}else if(r==="%GeneratorFunction%"){t=getEvalledConstructor("function* () {}")}else if(r==="%AsyncGeneratorFunction%"){t=getEvalledConstructor("async function* () {}")}else if(r==="%AsyncGenerator%"){var e=doEval("%AsyncGeneratorFunction%");if(e){t=e.prototype}}else if(r==="%AsyncIteratorPrototype%"){var o=doEval("%AsyncGenerator%");if(o){t=u(o.prototype)}}l[r]=t;return t};var g={"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]};var A=e(517);var v=e(793);var b=A.call(Function.call,Array.prototype.concat);var S=A.call(Function.apply,Array.prototype.splice);var m=A.call(Function.call,String.prototype.replace);var P=A.call(Function.call,String.prototype.slice);var h=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;var O=/\\(\\)?/g;var w=function stringToPath(r){var t=P(r,0,1);var e=P(r,-1);if(t==="%"&&e!=="%"){throw new n("invalid intrinsic syntax, expected closing `%`")}else if(e==="%"&&t!=="%"){throw new n("invalid intrinsic syntax, expected opening `%`")}var o=[];m(r,h,(function(r,t,e,n){o[o.length]=e?m(n,O,"$1"):t||r}));return o};var E=function getBaseIntrinsic(r,t){var e=r;var o;if(v(g,e)){o=g[e];e="%"+o[0]+"%"}if(v(l,e)){var i=l[e];if(i===s){i=d(e)}if(typeof i==="undefined"&&!t){throw new a("intrinsic "+r+" exists, but is not available. Please file an issue!")}return{alias:o,name:e,value:i}}throw new n("intrinsic "+r+" does not exist!")};r.exports=function GetIntrinsic(r,t){if(typeof r!=="string"||r.length===0){throw new a("intrinsic name must be a non-empty string")}if(arguments.length>1&&typeof t!=="boolean"){throw new a('"allowMissing" argument must be a boolean')}var e=w(r);var i=e.length>0?e[0]:"";var p=E("%"+i+"%",t);var f=p.name;var u=p.value;var s=false;var c=p.alias;if(c){i=c[0];S(e,b([0,1],c))}for(var d=1,g=true;d<e.length;d+=1){var A=e[d];var m=P(A,0,1);var h=P(A,-1);if((m==='"'||m==="'"||m==="`"||(h==='"'||h==="'"||h==="`"))&&m!==h){throw new n("property names with quotes must have matching quotes")}if(A==="constructor"||!g){s=true}i+="."+A;f="%"+i+"%";if(v(l,f)){u=l[f]}else if(u!=null){if(!(A in u)){if(!t){throw new a("base intrinsic for "+r+" exists, but the property is not available.")}return void o}if(y&&d+1>=e.length){var O=y(u,A);g=!!O;if(g&&"get"in O&&!("originalValue"in O.get)){u=O.get}else{u=u[A]}}else{g=v(u,A);u=u[A]}if(g&&!s){l[f]=u}}}return u}},449:function(r,t,e){"use strict";var o=__webpack_require__.g.Symbol;var n=e(545);r.exports=function hasNativeSymbols(){if(typeof o!=="function"){return false}if(typeof Symbol!=="function"){return false}if(typeof o("foo")!=="symbol"){return false}if(typeof Symbol("bar")!=="symbol"){return false}return n()}},545:function(r){"use strict";r.exports=function hasSymbols(){if(typeof Symbol!=="function"||typeof Object.getOwnPropertySymbols!=="function"){return false}if(typeof Symbol.iterator==="symbol"){return true}var r={};var t=Symbol("test");var e=Object(t);if(typeof t==="string"){return false}if(Object.prototype.toString.call(t)!=="[object Symbol]"){return false}if(Object.prototype.toString.call(e)!=="[object Symbol]"){return false}var o=42;r[t]=o;for(t in r){return false}if(typeof Object.keys==="function"&&Object.keys(r).length!==0){return false}if(typeof Object.getOwnPropertyNames==="function"&&Object.getOwnPropertyNames(r).length!==0){return false}var n=Object.getOwnPropertySymbols(r);if(n.length!==1||n[0]!==t){return false}if(!Object.prototype.propertyIsEnumerable.call(r,t)){return false}if(typeof Object.getOwnPropertyDescriptor==="function"){var i=Object.getOwnPropertyDescriptor(r,t);if(i.value!==o||i.enumerable!==true){return false}}return true}},793:function(r,t,e){"use strict";var o=e(517);r.exports=o.call(Function.call,Object.prototype.hasOwnProperty)},526:function(r){if(typeof Object.create==="function"){r.exports=function inherits(r,t){if(t){r.super_=t;r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:false,writable:true,configurable:true}})}}}else{r.exports=function inherits(r,t){if(t){r.super_=t;var TempCtor=function(){};TempCtor.prototype=t.prototype;r.prototype=new TempCtor;r.prototype.constructor=r}}}},312:function(r){"use strict";var t=typeof Symbol==="function"&&typeof Symbol.toStringTag==="symbol";var e=Object.prototype.toString;var o=function isArguments(r){if(t&&r&&typeof r==="object"&&Symbol.toStringTag in r){return false}return e.call(r)==="[object Arguments]"};var n=function isArguments(r){if(o(r)){return true}return r!==null&&typeof r==="object"&&typeof r.length==="number"&&r.length>=0&&e.call(r)!=="[object Array]"&&e.call(r.callee)==="[object Function]"};var i=function(){return o(arguments)}();o.isLegacyArguments=n;r.exports=i?o:n},906:function(r){"use strict";var t=Object.prototype.toString;var e=Function.prototype.toString;var o=/^\s*(?:function)?\*/;var n=typeof Symbol==="function"&&typeof Symbol.toStringTag==="symbol";var i=Object.getPrototypeOf;var getGeneratorFunc=function(){if(!n){return false}try{return Function("return function*() {}")()}catch(r){}};var a=getGeneratorFunc();var y=a?i(a):{};r.exports=function isGeneratorFunction(r){if(typeof r!=="function"){return false}if(o.test(e.call(r))){return true}if(!n){var a=t.call(r);return a==="[object GeneratorFunction]"}return i(r)===y}},234:function(r,t,e){"use strict";var o=e(219);var n=e(627);var i=e(749);var a=i("Object.prototype.toString");var y=e(449)();var p=y&&typeof Symbol.toStringTag==="symbol";var f=n();var u=i("Array.prototype.indexOf",true)||function indexOf(r,t){for(var e=0;e<r.length;e+=1){if(r[e]===t){return e}}return-1};var s=i("String.prototype.slice");var c={};var l=e(982);var d=Object.getPrototypeOf;if(p&&l&&d){o(f,(function(r){var t=new __webpack_require__.g[r];if(!(Symbol.toStringTag in t)){throw new EvalError("this engine has support for Symbol.toStringTag, but "+r+" does not have the property! Please report this.")}var e=d(t);var o=l(e,Symbol.toStringTag);if(!o){var n=d(e);o=l(n,Symbol.toStringTag)}c[r]=o.get}))}var g=function tryAllTypedArrays(r){var t=false;o(c,(function(e,o){if(!t){try{t=e.call(r)===o}catch(r){}}}));return t};r.exports=function isTypedArray(r){if(!r||typeof r!=="object"){return false}if(!p){var t=s(a(r),8,-1);return u(f,t)>-1}if(!l){return false}return g(r)}},982:function(r,t,e){"use strict";var o=e(879);var n=o("%Object.getOwnPropertyDescriptor%");if(n){try{n([],"length")}catch(r){n=null}}r.exports=n},536:function(r){r.exports=function isBuffer(r){return r instanceof Buffer}},3:function(r,t,e){"use strict";var o=e(312);var n=e(906);var i=e(715);var a=e(234);function uncurryThis(r){return r.call.bind(r)}var y=typeof BigInt!=="undefined";var p=typeof Symbol!=="undefined";var f=uncurryThis(Object.prototype.toString);var u=uncurryThis(Number.prototype.valueOf);var s=uncurryThis(String.prototype.valueOf);var c=uncurryThis(Boolean.prototype.valueOf);if(y){var l=uncurryThis(BigInt.prototype.valueOf)}if(p){var d=uncurryThis(Symbol.prototype.valueOf)}function checkBoxedPrimitive(r,t){if(typeof r!=="object"){return false}try{t(r);return true}catch(r){return false}}t.isArgumentsObject=o;t.isGeneratorFunction=n;t.isTypedArray=a;function isPromise(r){return typeof Promise!=="undefined"&&r instanceof Promise||r!==null&&typeof r==="object"&&typeof r.then==="function"&&typeof r.catch==="function"}t.isPromise=isPromise;function isArrayBufferView(r){if(typeof ArrayBuffer!=="undefined"&&ArrayBuffer.isView){return ArrayBuffer.isView(r)}return a(r)||isDataView(r)}t.isArrayBufferView=isArrayBufferView;function isUint8Array(r){return i(r)==="Uint8Array"}t.isUint8Array=isUint8Array;function isUint8ClampedArray(r){return i(r)==="Uint8ClampedArray"}t.isUint8ClampedArray=isUint8ClampedArray;function isUint16Array(r){return i(r)==="Uint16Array"}t.isUint16Array=isUint16Array;function isUint32Array(r){return i(r)==="Uint32Array"}t.isUint32Array=isUint32Array;function isInt8Array(r){return i(r)==="Int8Array"}t.isInt8Array=isInt8Array;function isInt16Array(r){return i(r)==="Int16Array"}t.isInt16Array=isInt16Array;function isInt32Array(r){return i(r)==="Int32Array"}t.isInt32Array=isInt32Array;function isFloat32Array(r){return i(r)==="Float32Array"}t.isFloat32Array=isFloat32Array;function isFloat64Array(r){return i(r)==="Float64Array"}t.isFloat64Array=isFloat64Array;function isBigInt64Array(r){return i(r)==="BigInt64Array"}t.isBigInt64Array=isBigInt64Array;function isBigUint64Array(r){return i(r)==="BigUint64Array"}t.isBigUint64Array=isBigUint64Array;function isMapToString(r){return f(r)==="[object Map]"}isMapToString.working=typeof Map!=="undefined"&&isMapToString(new Map);function isMap(r){if(typeof Map==="undefined"){return false}return isMapToString.working?isMapToString(r):r instanceof Map}t.isMap=isMap;function isSetToString(r){return f(r)==="[object Set]"}isSetToString.working=typeof Set!=="undefined"&&isSetToString(new Set);function isSet(r){if(typeof Set==="undefined"){return false}return isSetToString.working?isSetToString(r):r instanceof Set}t.isSet=isSet;function isWeakMapToString(r){return f(r)==="[object WeakMap]"}isWeakMapToString.working=typeof WeakMap!=="undefined"&&isWeakMapToString(new WeakMap);function isWeakMap(r){if(typeof WeakMap==="undefined"){return false}return isWeakMapToString.working?isWeakMapToString(r):r instanceof WeakMap}t.isWeakMap=isWeakMap;function isWeakSetToString(r){return f(r)==="[object WeakSet]"}isWeakSetToString.working=typeof WeakSet!=="undefined"&&isWeakSetToString(new WeakSet);function isWeakSet(r){return isWeakSetToString(r)}t.isWeakSet=isWeakSet;function isArrayBufferToString(r){return f(r)==="[object ArrayBuffer]"}isArrayBufferToString.working=typeof ArrayBuffer!=="undefined"&&isArrayBufferToString(new ArrayBuffer);function isArrayBuffer(r){if(typeof ArrayBuffer==="undefined"){return false}return isArrayBufferToString.working?isArrayBufferToString(r):r instanceof ArrayBuffer}t.isArrayBuffer=isArrayBuffer;function isDataViewToString(r){return f(r)==="[object DataView]"}isDataViewToString.working=typeof ArrayBuffer!=="undefined"&&typeof DataView!=="undefined"&&isDataViewToString(new DataView(new ArrayBuffer(1),0,1));function isDataView(r){if(typeof DataView==="undefined"){return false}return isDataViewToString.working?isDataViewToString(r):r instanceof DataView}t.isDataView=isDataView;var g=typeof SharedArrayBuffer!=="undefined"?SharedArrayBuffer:undefined;function isSharedArrayBufferToString(r){return f(r)==="[object SharedArrayBuffer]"}function isSharedArrayBuffer(r){if(typeof g==="undefined"){return false}if(typeof isSharedArrayBufferToString.working==="undefined"){isSharedArrayBufferToString.working=isSharedArrayBufferToString(new g)}return isSharedArrayBufferToString.working?isSharedArrayBufferToString(r):r instanceof g}t.isSharedArrayBuffer=isSharedArrayBuffer;function isAsyncFunction(r){return f(r)==="[object AsyncFunction]"}t.isAsyncFunction=isAsyncFunction;function isMapIterator(r){return f(r)==="[object Map Iterator]"}t.isMapIterator=isMapIterator;function isSetIterator(r){return f(r)==="[object Set Iterator]"}t.isSetIterator=isSetIterator;function isGeneratorObject(r){return f(r)==="[object Generator]"}t.isGeneratorObject=isGeneratorObject;function isWebAssemblyCompiledModule(r){return f(r)==="[object WebAssembly.Module]"}t.isWebAssemblyCompiledModule=isWebAssemblyCompiledModule;function isNumberObject(r){return checkBoxedPrimitive(r,u)}t.isNumberObject=isNumberObject;function isStringObject(r){return checkBoxedPrimitive(r,s)}t.isStringObject=isStringObject;function isBooleanObject(r){return checkBoxedPrimitive(r,c)}t.isBooleanObject=isBooleanObject;function isBigIntObject(r){return y&&checkBoxedPrimitive(r,l)}t.isBigIntObject=isBigIntObject;function isSymbolObject(r){return p&&checkBoxedPrimitive(r,d)}t.isSymbolObject=isSymbolObject;function isBoxedPrimitive(r){return isNumberObject(r)||isStringObject(r)||isBooleanObject(r)||isBigIntObject(r)||isSymbolObject(r)}t.isBoxedPrimitive=isBoxedPrimitive;function isAnyArrayBuffer(r){return typeof Uint8Array!=="undefined"&&(isArrayBuffer(r)||isSharedArrayBuffer(r))}t.isAnyArrayBuffer=isAnyArrayBuffer;["isProxy","isExternal","isModuleNamespaceObject"].forEach((function(r){Object.defineProperty(t,r,{enumerable:false,value:function(){throw new Error(r+" is not supported in userland")}})}))},650:function(r,t,e){var o=Object.getOwnPropertyDescriptors||function getOwnPropertyDescriptors(r){var t=Object.keys(r);var e={};for(var o=0;o<t.length;o++){e[t[o]]=Object.getOwnPropertyDescriptor(r,t[o])}return e};var n=/%[sdj%]/g;t.format=function(r){if(!isString(r)){var t=[];for(var e=0;e<arguments.length;e++){t.push(inspect(arguments[e]))}return t.join(" ")}var e=1;var o=arguments;var i=o.length;var a=String(r).replace(n,(function(r){if(r==="%%")return"%";if(e>=i)return r;switch(r){case"%s":return String(o[e++]);case"%d":return Number(o[e++]);case"%j":try{return JSON.stringify(o[e++])}catch(r){return"[Circular]"}default:return r}}));for(var y=o[e];e<i;y=o[++e]){if(isNull(y)||!isObject(y)){a+=" "+y}else{a+=" "+inspect(y)}}return a};t.deprecate=function(r,e){if(typeof process!=="undefined"&&process.noDeprecation===true){return r}if(typeof process==="undefined"){return function(){return t.deprecate(r,e).apply(this,arguments)}}var o=false;function deprecated(){if(!o){if(process.throwDeprecation){throw new Error(e)}else if(process.traceDeprecation){console.trace(e)}else{console.error(e)}o=true}return r.apply(this,arguments)}return deprecated};var i={};var a=/^$/;if(process.env.NODE_DEBUG){var y=process.env.NODE_DEBUG;y=y.replace(/[|\\{}()[\]^$+?.]/g,"\\$&").replace(/\*/g,".*").replace(/,/g,"$|^").toUpperCase();a=new RegExp("^"+y+"$","i")}t.debuglog=function(r){r=r.toUpperCase();if(!i[r]){if(a.test(r)){var e=process.pid;i[r]=function(){var o=t.format.apply(t,arguments);console.error("%s %d: %s",r,e,o)}}else{i[r]=function(){}}}return i[r]};function inspect(r,e){var o={seen:[],stylize:stylizeNoColor};if(arguments.length>=3)o.depth=arguments[2];if(arguments.length>=4)o.colors=arguments[3];if(isBoolean(e)){o.showHidden=e}else if(e){t._extend(o,e)}if(isUndefined(o.showHidden))o.showHidden=false;if(isUndefined(o.depth))o.depth=2;if(isUndefined(o.colors))o.colors=false;if(isUndefined(o.customInspect))o.customInspect=true;if(o.colors)o.stylize=stylizeWithColor;return formatValue(o,r,o.depth)}t.inspect=inspect;inspect.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]};inspect.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"};function stylizeWithColor(r,t){var e=inspect.styles[t];if(e){return"["+inspect.colors[e][0]+"m"+r+"["+inspect.colors[e][1]+"m"}else{return r}}function stylizeNoColor(r,t){return r}function arrayToHash(r){var t={};r.forEach((function(r,e){t[r]=true}));return t}function formatValue(r,e,o){if(r.customInspect&&e&&isFunction(e.inspect)&&e.inspect!==t.inspect&&!(e.constructor&&e.constructor.prototype===e)){var n=e.inspect(o,r);if(!isString(n)){n=formatValue(r,n,o)}return n}var i=formatPrimitive(r,e);if(i){return i}var a=Object.keys(e);var y=arrayToHash(a);if(r.showHidden){a=Object.getOwnPropertyNames(e)}if(isError(e)&&(a.indexOf("message")>=0||a.indexOf("description")>=0)){return formatError(e)}if(a.length===0){if(isFunction(e)){var p=e.name?": "+e.name:"";return r.stylize("[Function"+p+"]","special")}if(isRegExp(e)){return r.stylize(RegExp.prototype.toString.call(e),"regexp")}if(isDate(e)){return r.stylize(Date.prototype.toString.call(e),"date")}if(isError(e)){return formatError(e)}}var f="",u=false,s=["{","}"];if(isArray(e)){u=true;s=["[","]"]}if(isFunction(e)){var c=e.name?": "+e.name:"";f=" [Function"+c+"]"}if(isRegExp(e)){f=" "+RegExp.prototype.toString.call(e)}if(isDate(e)){f=" "+Date.prototype.toUTCString.call(e)}if(isError(e)){f=" "+formatError(e)}if(a.length===0&&(!u||e.length==0)){return s[0]+f+s[1]}if(o<0){if(isRegExp(e)){return r.stylize(RegExp.prototype.toString.call(e),"regexp")}else{return r.stylize("[Object]","special")}}r.seen.push(e);var l;if(u){l=formatArray(r,e,o,y,a)}else{l=a.map((function(t){return formatProperty(r,e,o,y,t,u)}))}r.seen.pop();return reduceToSingleString(l,f,s)}function formatPrimitive(r,t){if(isUndefined(t))return r.stylize("undefined","undefined");if(isString(t)){var e="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return r.stylize(e,"string")}if(isNumber(t))return r.stylize(""+t,"number");if(isBoolean(t))return r.stylize(""+t,"boolean");if(isNull(t))return r.stylize("null","null")}function formatError(r){return"["+Error.prototype.toString.call(r)+"]"}function formatArray(r,t,e,o,n){var i=[];for(var a=0,y=t.length;a<y;++a){if(hasOwnProperty(t,String(a))){i.push(formatProperty(r,t,e,o,String(a),true))}else{i.push("")}}n.forEach((function(n){if(!n.match(/^\d+$/)){i.push(formatProperty(r,t,e,o,n,true))}}));return i}function formatProperty(r,t,e,o,n,i){var a,y,p;p=Object.getOwnPropertyDescriptor(t,n)||{value:t[n]};if(p.get){if(p.set){y=r.stylize("[Getter/Setter]","special")}else{y=r.stylize("[Getter]","special")}}else{if(p.set){y=r.stylize("[Setter]","special")}}if(!hasOwnProperty(o,n)){a="["+n+"]"}if(!y){if(r.seen.indexOf(p.value)<0){if(isNull(e)){y=formatValue(r,p.value,null)}else{y=formatValue(r,p.value,e-1)}if(y.indexOf("\n")>-1){if(i){y=y.split("\n").map((function(r){return"  "+r})).join("\n").substr(2)}else{y="\n"+y.split("\n").map((function(r){return"   "+r})).join("\n")}}}else{y=r.stylize("[Circular]","special")}}if(isUndefined(a)){if(i&&n.match(/^\d+$/)){return y}a=JSON.stringify(""+n);if(a.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)){a=a.substr(1,a.length-2);a=r.stylize(a,"name")}else{a=a.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'");a=r.stylize(a,"string")}}return a+": "+y}function reduceToSingleString(r,t,e){var o=0;var n=r.reduce((function(r,t){o++;if(t.indexOf("\n")>=0)o++;return r+t.replace(/\u001b\[\d\d?m/g,"").length+1}),0);if(n>60){return e[0]+(t===""?"":t+"\n ")+" "+r.join(",\n  ")+" "+e[1]}return e[0]+t+" "+r.join(", ")+" "+e[1]}t.types=e(3);function isArray(r){return Array.isArray(r)}t.isArray=isArray;function isBoolean(r){return typeof r==="boolean"}t.isBoolean=isBoolean;function isNull(r){return r===null}t.isNull=isNull;function isNullOrUndefined(r){return r==null}t.isNullOrUndefined=isNullOrUndefined;function isNumber(r){return typeof r==="number"}t.isNumber=isNumber;function isString(r){return typeof r==="string"}t.isString=isString;function isSymbol(r){return typeof r==="symbol"}t.isSymbol=isSymbol;function isUndefined(r){return r===void 0}t.isUndefined=isUndefined;function isRegExp(r){return isObject(r)&&objectToString(r)==="[object RegExp]"}t.isRegExp=isRegExp;t.types.isRegExp=isRegExp;function isObject(r){return typeof r==="object"&&r!==null}t.isObject=isObject;function isDate(r){return isObject(r)&&objectToString(r)==="[object Date]"}t.isDate=isDate;t.types.isDate=isDate;function isError(r){return isObject(r)&&(objectToString(r)==="[object Error]"||r instanceof Error)}t.isError=isError;t.types.isNativeError=isError;function isFunction(r){return typeof r==="function"}t.isFunction=isFunction;function isPrimitive(r){return r===null||typeof r==="boolean"||typeof r==="number"||typeof r==="string"||typeof r==="symbol"||typeof r==="undefined"}t.isPrimitive=isPrimitive;t.isBuffer=e(536);function objectToString(r){return Object.prototype.toString.call(r)}function pad(r){return r<10?"0"+r.toString(10):r.toString(10)}var p=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function timestamp(){var r=new Date;var t=[pad(r.getHours()),pad(r.getMinutes()),pad(r.getSeconds())].join(":");return[r.getDate(),p[r.getMonth()],t].join(" ")}t.log=function(){console.log("%s - %s",timestamp(),t.format.apply(t,arguments))};t.inherits=e(526);t._extend=function(r,t){if(!t||!isObject(t))return r;var e=Object.keys(t);var o=e.length;while(o--){r[e[o]]=t[e[o]]}return r};function hasOwnProperty(r,t){return Object.prototype.hasOwnProperty.call(r,t)}var f=typeof Symbol!=="undefined"?Symbol("util.promisify.custom"):undefined;t.promisify=function promisify(r){if(typeof r!=="function")throw new TypeError('The "original" argument must be of type Function');if(f&&r[f]){var t=r[f];if(typeof t!=="function"){throw new TypeError('The "util.promisify.custom" argument must be of type Function')}Object.defineProperty(t,f,{value:t,enumerable:false,writable:false,configurable:true});return t}function t(){var t,e;var o=new Promise((function(r,o){t=r;e=o}));var n=[];for(var i=0;i<arguments.length;i++){n.push(arguments[i])}n.push((function(r,o){if(r){e(r)}else{t(o)}}));try{r.apply(this,n)}catch(r){e(r)}return o}Object.setPrototypeOf(t,Object.getPrototypeOf(r));if(f)Object.defineProperty(t,f,{value:t,enumerable:false,writable:false,configurable:true});return Object.defineProperties(t,o(r))};t.promisify.custom=f;function callbackifyOnRejected(r,t){if(!r){var e=new Error("Promise was rejected with a falsy value");e.reason=r;r=e}return t(r)}function callbackify(r){if(typeof r!=="function"){throw new TypeError('The "original" argument must be of type Function')}function callbackified(){var t=[];for(var e=0;e<arguments.length;e++){t.push(arguments[e])}var o=t.pop();if(typeof o!=="function"){throw new TypeError("The last argument must be of type Function")}var n=this;var cb=function(){return o.apply(n,arguments)};r.apply(this,t).then((function(r){process.nextTick(cb.bind(null,null,r))}),(function(r){process.nextTick(callbackifyOnRejected.bind(null,r,cb))}))}Object.setPrototypeOf(callbackified,Object.getPrototypeOf(r));Object.defineProperties(callbackified,o(r));return callbackified}t.callbackify=callbackify},715:function(r,t,e){"use strict";var o=e(219);var n=e(627);var i=e(749);var a=i("Object.prototype.toString");var y=e(449)();var p=y&&typeof Symbol.toStringTag==="symbol";var f=n();var u=i("String.prototype.slice");var s={};var c=e(850);var l=Object.getPrototypeOf;if(p&&c&&l){o(f,(function(r){if(typeof __webpack_require__.g[r]==="function"){var t=new __webpack_require__.g[r];if(!(Symbol.toStringTag in t)){throw new EvalError("this engine has support for Symbol.toStringTag, but "+r+" does not have the property! Please report this.")}var e=l(t);var o=c(e,Symbol.toStringTag);if(!o){var n=l(e);o=c(n,Symbol.toStringTag)}s[r]=o.get}}))}var d=function tryAllTypedArrays(r){var t=false;o(s,(function(e,o){if(!t){try{var n=e.call(r);if(n===o){t=n}}catch(r){}}}));return t};var g=e(234);r.exports=function whichTypedArray(r){if(!g(r)){return false}if(!p){return u(a(r),8,-1)}return d(r)}},227:function(r,t,e){"use strict";var o;var n=SyntaxError;var i=Function;var a=TypeError;var getEvalledConstructor=function(r){try{return Function('"use strict"; return ('+r+").constructor;")()}catch(r){}};var y=Object.getOwnPropertyDescriptor;if(y){try{y({},"")}catch(r){y=null}}var throwTypeError=function(){throw new a};var p=y?function(){try{arguments.callee;return throwTypeError}catch(r){try{return y(arguments,"callee").get}catch(r){return throwTypeError}}}():throwTypeError;var f=e(449)();var u=Object.getPrototypeOf||function(r){return r.__proto__};var s=getEvalledConstructor("async function* () {}");var c=s?s.prototype:o;var l=c?c.prototype:o;var d=typeof Uint8Array==="undefined"?o:u(Uint8Array);var g={"%AggregateError%":typeof AggregateError==="undefined"?o:AggregateError,"%Array%":Array,"%ArrayBuffer%":typeof ArrayBuffer==="undefined"?o:ArrayBuffer,"%ArrayIteratorPrototype%":f?u([][Symbol.iterator]()):o,"%AsyncFromSyncIteratorPrototype%":o,"%AsyncFunction%":getEvalledConstructor("async function () {}"),"%AsyncGenerator%":c,"%AsyncGeneratorFunction%":s,"%AsyncIteratorPrototype%":l?u(l):o,"%Atomics%":typeof Atomics==="undefined"?o:Atomics,"%BigInt%":typeof BigInt==="undefined"?o:BigInt,"%Boolean%":Boolean,"%DataView%":typeof DataView==="undefined"?o:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":Error,"%eval%":eval,"%EvalError%":EvalError,"%Float32Array%":typeof Float32Array==="undefined"?o:Float32Array,"%Float64Array%":typeof Float64Array==="undefined"?o:Float64Array,"%FinalizationRegistry%":typeof FinalizationRegistry==="undefined"?o:FinalizationRegistry,"%Function%":i,"%GeneratorFunction%":getEvalledConstructor("function* () {}"),"%Int8Array%":typeof Int8Array==="undefined"?o:Int8Array,"%Int16Array%":typeof Int16Array==="undefined"?o:Int16Array,"%Int32Array%":typeof Int32Array==="undefined"?o:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":f?u(u([][Symbol.iterator]())):o,"%JSON%":typeof JSON==="object"?JSON:o,"%Map%":typeof Map==="undefined"?o:Map,"%MapIteratorPrototype%":typeof Map==="undefined"||!f?o:u((new Map)[Symbol.iterator]()),"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":typeof Promise==="undefined"?o:Promise,"%Proxy%":typeof Proxy==="undefined"?o:Proxy,"%RangeError%":RangeError,"%ReferenceError%":ReferenceError,"%Reflect%":typeof Reflect==="undefined"?o:Reflect,"%RegExp%":RegExp,"%Set%":typeof Set==="undefined"?o:Set,"%SetIteratorPrototype%":typeof Set==="undefined"||!f?o:u((new Set)[Symbol.iterator]()),"%SharedArrayBuffer%":typeof SharedArrayBuffer==="undefined"?o:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":f?u(""[Symbol.iterator]()):o,"%Symbol%":f?Symbol:o,"%SyntaxError%":n,"%ThrowTypeError%":p,"%TypedArray%":d,"%TypeError%":a,"%Uint8Array%":typeof Uint8Array==="undefined"?o:Uint8Array,"%Uint8ClampedArray%":typeof Uint8ClampedArray==="undefined"?o:Uint8ClampedArray,"%Uint16Array%":typeof Uint16Array==="undefined"?o:Uint16Array,"%Uint32Array%":typeof Uint32Array==="undefined"?o:Uint32Array,"%URIError%":URIError,"%WeakMap%":typeof WeakMap==="undefined"?o:WeakMap,"%WeakRef%":typeof WeakRef==="undefined"?o:WeakRef,"%WeakSet%":typeof WeakSet==="undefined"?o:WeakSet};var A={"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]};var v=e(517);var b=e(793);var S=v.call(Function.call,Array.prototype.concat);var m=v.call(Function.apply,Array.prototype.splice);var P=v.call(Function.call,String.prototype.replace);var h=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;var O=/\\(\\)?/g;var w=function stringToPath(r){var t=[];P(r,h,(function(r,e,o,n){t[t.length]=o?P(n,O,"$1"):e||r}));return t};var E=function getBaseIntrinsic(r,t){var e=r;var o;if(b(A,e)){o=A[e];e="%"+o[0]+"%"}if(b(g,e)){var i=g[e];if(typeof i==="undefined"&&!t){throw new a("intrinsic "+r+" exists, but is not available. Please file an issue!")}return{alias:o,name:e,value:i}}throw new n("intrinsic "+r+" does not exist!")};r.exports=function GetIntrinsic(r,t){if(typeof r!=="string"||r.length===0){throw new a("intrinsic name must be a non-empty string")}if(arguments.length>1&&typeof t!=="boolean"){throw new a('"allowMissing" argument must be a boolean')}var e=w(r);var o=e.length>0?e[0]:"";var n=E("%"+o+"%",t);var i=n.name;var p=n.value;var f=false;var u=n.alias;if(u){o=u[0];m(e,S([0,1],u))}for(var s=1,c=true;s<e.length;s+=1){var l=e[s];if(l==="constructor"||!c){f=true}o+="."+l;i="%"+o+"%";if(b(g,i)){p=g[i]}else if(p!=null){if(y&&s+1>=e.length){var d=y(p,l);c=!!d;if(!t&&!(l in p)){throw new a("base intrinsic for "+r+" exists, but the property is not available.")}if(c&&"get"in d&&!("originalValue"in d.get)){p=d.get}else{p=p[l]}}else{c=b(p,l);p=p[l]}if(c&&!f){g[i]=p}}}return p}},850:function(r,t,e){"use strict";var o=e(227);var n=o("%Object.getOwnPropertyDescriptor%");if(n){try{n([],"length")}catch(r){n=null}}r.exports=n},627:function(r,t,e){"use strict";var o=e(901);r.exports=function availableTypedArrays(){return o(["BigInt64Array","BigUint64Array","Float32Array","Float64Array","Int16Array","Int32Array","Int8Array","Uint16Array","Uint32Array","Uint8Array","Uint8ClampedArray"],(function(r){return typeof __webpack_require__.g[r]==="function"}))}}};var t={};function __nccwpck_require__(e){var o=t[e];if(o!==undefined){return o.exports}var n=t[e]={exports:{}};var i=true;try{r[e](n,n.exports,__nccwpck_require__);i=false}finally{if(i)delete t[e]}return n.exports}if(typeof __nccwpck_require__!=="undefined")__nccwpck_require__.ab=__dirname+"/";var e=__nccwpck_require__(650);module.exports=e})();

/***/ }),

/***/ 1951:
/***/ (function(module) {

var __dirname = "/";
(function(){var __webpack_modules__={742:function(__unused_webpack_module,exports){var indexOf=function(e,t){if(e.indexOf)return e.indexOf(t);else for(var r=0;r<e.length;r++){if(e[r]===t)return r}return-1};var Object_keys=function(e){if(Object.keys)return Object.keys(e);else{var t=[];for(var r in e)t.push(r);return t}};var forEach=function(e,t){if(e.forEach)return e.forEach(t);else for(var r=0;r<e.length;r++){t(e[r],r,e)}};var defineProp=function(){try{Object.defineProperty({},"_",{});return function(e,t,r){Object.defineProperty(e,t,{writable:true,enumerable:false,configurable:true,value:r})}}catch(e){return function(e,t,r){e[t]=r}}}();var globals=["Array","Boolean","Date","Error","EvalError","Function","Infinity","JSON","Math","NaN","Number","Object","RangeError","ReferenceError","RegExp","String","SyntaxError","TypeError","URIError","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","eval","isFinite","isNaN","parseFloat","parseInt","undefined","unescape"];function Context(){}Context.prototype={};var Script=exports.Script=function NodeScript(e){if(!(this instanceof Script))return new Script(e);this.code=e};Script.prototype.runInContext=function(e){if(!(e instanceof Context)){throw new TypeError("needs a 'context' argument.")}var t=document.createElement("iframe");if(!t.style)t.style={};t.style.display="none";document.body.appendChild(t);var r=t.contentWindow;var n=r.eval,o=r.execScript;if(!n&&o){o.call(r,"null");n=r.eval}forEach(Object_keys(e),(function(t){r[t]=e[t]}));forEach(globals,(function(t){if(e[t]){r[t]=e[t]}}));var c=Object_keys(r);var i=n.call(r,this.code);forEach(Object_keys(r),(function(t){if(t in e||indexOf(c,t)===-1){e[t]=r[t]}}));forEach(globals,(function(t){if(!(t in e)){defineProp(e,t,r[t])}}));document.body.removeChild(t);return i};Script.prototype.runInThisContext=function(){return eval(this.code)};Script.prototype.runInNewContext=function(e){var t=Script.createContext(e);var r=this.runInContext(t);if(e){forEach(Object_keys(t),(function(r){e[r]=t[r]}))}return r};forEach(Object_keys(Script.prototype),(function(e){exports[e]=Script[e]=function(t){var r=Script(t);return r[e].apply(r,[].slice.call(arguments,1))}}));exports.isContext=function(e){return e instanceof Context};exports.createScript=function(e){return exports.Script(e)};exports.createContext=Script.createContext=function(e){var t=new Context;if(typeof e==="object"){forEach(Object_keys(e),(function(r){t[r]=e[r]}))}return t}}};if(typeof __nccwpck_require__!=="undefined")__nccwpck_require__.ab=__dirname+"/";var __webpack_exports__={};__webpack_modules__[742](0,__webpack_exports__);module.exports=__webpack_exports__})();

/***/ }),

/***/ 9008:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(5443)


/***/ }),

/***/ 1664:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(8418)


/***/ }),

/***/ 2703:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(414);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ 5697:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(2703)();
}


/***/ }),

/***/ 414:
/***/ (function(module) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ 7055:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "zt": function() { return /* binding */ Provider; },
  "m7": function() { return /* binding */ positions; },
  "pB": function() { return /* binding */ transitions; },
  "VY": function() { return /* binding */ useAlert; }
});

// UNUSED EXPORTS: types, withAlert

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(3935);
;// CONCATENATED MODULE: ./node_modules/react-transition-group/esm/config.js
/* harmony default export */ var config = ({
  disabled: false
});
;// CONCATENATED MODULE: ./node_modules/react-transition-group/esm/TransitionGroupContext.js

/* harmony default export */ var TransitionGroupContext = (react.createContext(null));
;// CONCATENATED MODULE: ./node_modules/react-transition-group/esm/Transition.js








var UNMOUNTED = 'unmounted';
var EXITED = 'exited';
var ENTERING = 'entering';
var ENTERED = 'entered';
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

var Transition = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  } // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }
  ;

  var _proto = Transition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      if (nextStatus === ENTERING) {
        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;

    var _ref2 = this.props.nodeRef ? [appearing] : [react_dom.findDOMNode(this), appearing],
        maybeNode = _ref2[0],
        maybeAppearing = _ref2[1];

    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter || config.disabled) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }

    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(maybeNode, maybeAppearing);

      _this2.onTransitionEnd(enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };

  _proto.performExit = function performExit() {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? undefined : react_dom.findDOMNode(this); // no exit animation skip right to EXITED

    if (!exit || config.disabled) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(maybeNode);
      });
      return;
    }

    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(maybeNode);

      _this3.onTransitionEnd(timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef ? this.props.nodeRef.current : react_dom.findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback],
          maybeNode = _ref3[0],
          maybeNextCallback = _ref3[1];

      this.props.addEndListener(maybeNode, maybeNextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        _in = _this$props.in,
        _mountOnEnter = _this$props.mountOnEnter,
        _unmountOnExit = _this$props.unmountOnExit,
        _appear = _this$props.appear,
        _enter = _this$props.enter,
        _exit = _this$props.exit,
        _timeout = _this$props.timeout,
        _addEndListener = _this$props.addEndListener,
        _onEnter = _this$props.onEnter,
        _onEntering = _this$props.onEntering,
        _onEntered = _this$props.onEntered,
        _onExit = _this$props.onExit,
        _onExiting = _this$props.onExiting,
        _onExited = _this$props.onExited,
        _nodeRef = _this$props.nodeRef,
        childProps = _objectWithoutPropertiesLoose(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);

    return (
      /*#__PURE__*/
      // allows for nested Transitions
      react.createElement(TransitionGroupContext.Provider, {
        value: null
      }, typeof children === 'function' ? children(status, childProps) : react.cloneElement(react.Children.only(children), childProps))
    );
  };

  return Transition;
}(react.Component);

Transition.contextType = TransitionGroupContext;
Transition.propTypes =  false ? 0 : {}; // Name the function so it is clearer in the documentation

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;
/* harmony default export */ var esm_Transition = (Transition);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}
;// CONCATENATED MODULE: ./node_modules/react-transition-group/esm/utils/ChildMapping.js

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */

function getChildMapping(children, mapFn) {
  var mapper = function mapper(child) {
    return mapFn && (0,react.isValidElement)(child) ? mapFn(child) : child;
  };

  var result = Object.create(null);
  if (children) react.Children.map(children, function (c) {
    return c;
  }).forEach(function (child) {
    // run the map function here instead so that the key is the computed one
    result[child.key] = mapper(child);
  });
  return result;
}
/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */

function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  } // For each key of `next`, the list of keys to insert before that key in
  // the combined list


  var nextKeysPending = Object.create(null);
  var pendingKeys = [];

  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i;
  var childMapping = {};

  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }

    childMapping[nextKey] = getValueForKey(nextKey);
  } // Finally, add the keys which didn't appear before any key in `next`


  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}

function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function (child) {
    return (0,react.cloneElement)(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, 'appear', props),
      enter: getProp(child, 'enter', props),
      exit: getProp(child, 'exit', props)
    });
  });
}
function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function (key) {
    var child = children[key];
    if (!(0,react.isValidElement)(child)) return;
    var hasPrev = (key in prevChildMapping);
    var hasNext = (key in nextChildMapping);
    var prevChild = prevChildMapping[key];
    var isLeaving = (0,react.isValidElement)(prevChild) && !prevChild.props.in; // item is new (entering)

    if (hasNext && (!hasPrev || isLeaving)) {
      // console.log('entering', key)
      children[key] = (0,react.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      // item is old (exiting)
      // console.log('leaving', key)
      children[key] = (0,react.cloneElement)(child, {
        in: false
      });
    } else if (hasNext && hasPrev && (0,react.isValidElement)(prevChild)) {
      // item hasn't changed transition states
      // copy over the last transition props;
      // console.log('unchanged', key)
      children[key] = (0,react.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    }
  });
  return children;
}
;// CONCATENATED MODULE: ./node_modules/react-transition-group/esm/TransitionGroup.js









var values = Object.values || function (obj) {
  return Object.keys(obj).map(function (k) {
    return obj[k];
  });
};

var defaultProps = {
  component: 'div',
  childFactory: function childFactory(child) {
    return child;
  }
};
/**
 * The `<TransitionGroup>` component manages a set of transition components
 * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
 * components, `<TransitionGroup>` is a state machine for managing the mounting
 * and unmounting of components over time.
 *
 * Consider the example below. As items are removed or added to the TodoList the
 * `in` prop is toggled automatically by the `<TransitionGroup>`.
 *
 * Note that `<TransitionGroup>`  does not define any animation behavior!
 * Exactly _how_ a list item animates is up to the individual transition
 * component. This means you can mix and match animations across different list
 * items.
 */

var TransitionGroup = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    var handleExited = _this.handleExited.bind(_assertThisInitialized(_this)); // Initial children should all be entering, dependent on appear


    _this.state = {
      contextValue: {
        isMounting: true
      },
      handleExited: handleExited,
      firstRender: true
    };
    return _this;
  }

  var _proto = TransitionGroup.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.mounted = true;
    this.setState({
      contextValue: {
        isMounting: false
      }
    });
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };

  TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children,
        handleExited = _ref.handleExited,
        firstRender = _ref.firstRender;
    return {
      children: firstRender ? getInitialChildMapping(nextProps, handleExited) : getNextChildMapping(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  } // node is `undefined` when user provided `nodeRef` prop
  ;

  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = getChildMapping(this.props.children);
    if (child.key in currentChildMapping) return;

    if (child.props.onExited) {
      child.props.onExited(node);
    }

    if (this.mounted) {
      this.setState(function (state) {
        var children = (0,esm_extends/* default */.Z)({}, state.children);

        delete children[child.key];
        return {
          children: children
        };
      });
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.component,
        childFactory = _this$props.childFactory,
        props = _objectWithoutPropertiesLoose(_this$props, ["component", "childFactory"]);

    var contextValue = this.state.contextValue;
    var children = values(this.state.children).map(childFactory);
    delete props.appear;
    delete props.enter;
    delete props.exit;

    if (Component === null) {
      return /*#__PURE__*/react.createElement(TransitionGroupContext.Provider, {
        value: contextValue
      }, children);
    }

    return /*#__PURE__*/react.createElement(TransitionGroupContext.Provider, {
      value: contextValue
    }, /*#__PURE__*/react.createElement(Component, props, children));
  };

  return TransitionGroup;
}(react.Component);

TransitionGroup.propTypes =  false ? 0 : {};
TransitionGroup.defaultProps = defaultProps;
/* harmony default export */ var esm_TransitionGroup = (TransitionGroup);
;// CONCATENATED MODULE: ./node_modules/react-alert/dist/esm/react-alert.js





function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function react_alert_objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = react_alert_objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var Context = /*#__PURE__*/(0,react.createContext)();

var positions = {
  TOP_LEFT: 'top left',
  TOP_CENTER: 'top center',
  TOP_RIGHT: 'top right',
  MIDDLE_LEFT: 'middle left',
  MIDDLE: 'middle',
  MIDDLE_RIGHT: 'middle right',
  BOTTOM_LEFT: 'bottom left',
  BOTTOM_CENTER: 'bottom center',
  BOTTOM_RIGHT: 'bottom right'
};
var types = {
  INFO: 'info',
  SUCCESS: 'success',
  ERROR: 'error'
};
var transitions = {
  FADE: 'fade',
  SCALE: 'scale'
};

var getStyles = function getStyles(position) {
  var initialStyles = {
    left: 0,
    position: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    pointerEvents: 'none'
  };

  switch (position) {
    case positions.TOP_LEFT:
      return _objectSpread2(_objectSpread2({}, initialStyles), {}, {
        top: 0,
        alignItems: 'flex-start'
      });

    case positions.TOP_CENTER:
      return _objectSpread2(_objectSpread2({}, initialStyles), {}, {
        top: 0
      });

    case positions.TOP_RIGHT:
      return _objectSpread2(_objectSpread2({}, initialStyles), {}, {
        top: 0,
        alignItems: 'flex-end'
      });

    case positions.MIDDLE_LEFT:
      return _objectSpread2(_objectSpread2({}, initialStyles), {}, {
        top: '50%',
        alignItems: 'flex-start'
      });

    case positions.MIDDLE:
      {
        return _objectSpread2(_objectSpread2({}, initialStyles), {}, {
          top: '50%'
        });
      }

    case positions.MIDDLE_RIGHT:
      return _objectSpread2(_objectSpread2({}, initialStyles), {}, {
        top: '50%',
        alignItems: 'flex-end'
      });

    case positions.BOTTOM_LEFT:
      return _objectSpread2(_objectSpread2({}, initialStyles), {}, {
        bottom: 0,
        alignItems: 'flex-start'
      });

    case positions.BOTTOM_CENTER:
      return _objectSpread2(_objectSpread2({}, initialStyles), {}, {
        bottom: 0
      });

    case positions.BOTTOM_RIGHT:
      return _objectSpread2(_objectSpread2({}, initialStyles), {}, {
        bottom: 0,
        alignItems: 'flex-end'
      });

    default:
      {
        return initialStyles;
      }
  }
};

var Wrapper = function Wrapper(_ref) {
  var children = _ref.children,
      _ref$options = _ref.options,
      position = _ref$options.position,
      containerStyle = _ref$options.containerStyle,
      props = _objectWithoutProperties(_ref, ["children", "options"]);

  var styles = (0,react.useMemo)(function () {
    return getStyles(position);
  }, [position]);
  return children.length > 0 && /*#__PURE__*/react.createElement("div", _extends({
    style: _objectSpread2(_objectSpread2({}, styles), containerStyle)
  }, props), children);
};

var _defaultStyle, _transitionStyles;
var duration = 250;
var defaultStyle = (_defaultStyle = {}, _defineProperty(_defaultStyle, transitions.FADE, {
  transition: "opacity ".concat(duration, "ms ease"),
  opacity: 0
}), _defineProperty(_defaultStyle, transitions.SCALE, {
  transform: 'scale(1)',
  transition: "all ".concat(duration, "ms ease-in-out")
}), _defaultStyle);
var transitionStyles = (_transitionStyles = {}, _defineProperty(_transitionStyles, transitions.FADE, {
  entering: {
    opacity: 0
  },
  entered: {
    opacity: 1
  }
}), _defineProperty(_transitionStyles, transitions.SCALE, {
  entering: {
    transform: 'scale(0)'
  },
  entered: {
    transform: 'scale(1)'
  },
  exiting: {
    transform: 'scale(0)'
  },
  exited: {
    transform: 'scale(1)'
  }
}), _transitionStyles);

var Transtion = function Transtion(_ref) {
  var children = _ref.children,
      type = _ref.type,
      props = _objectWithoutProperties(_ref, ["children", "type"]);

  var ref = (0,react.useRef)(null);
  return (/*#__PURE__*/react.createElement(esm_Transition, _extends({
      nodeRef: ref
    }, props, {
      timeout: duration
    }), function (state) {
      return (/*#__PURE__*/react.createElement("div", {
          ref: ref,
          style: _objectSpread2(_objectSpread2({}, defaultStyle[type]), transitionStyles[type][state])
        }, children)
      );
    })
  );
};

var groupBy = function groupBy(array, fn) {
  return array.reduce(function (result, item) {
    var key = fn(item);
    if (!result[key]) result[key] = [];
    result[key].push(item);
    return result;
  }, {});
};

var Provider = function Provider(_ref) {
  var children = _ref.children,
      offset = _ref.offset,
      position = _ref.position,
      timeout = _ref.timeout,
      type = _ref.type,
      transition = _ref.transition,
      containerStyle = _ref.containerStyle,
      AlertComponent = _ref.template,
      Context = _ref.context,
      props = _objectWithoutProperties(_ref, ["children", "offset", "position", "timeout", "type", "transition", "containerStyle", "template", "context"]);

  var root = (0,react.useRef)(null);
  var alertContext = (0,react.useRef)(null);
  var timersId = (0,react.useRef)([]);

  var _useState = (0,react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      alerts = _useState2[0],
      setAlerts = _useState2[1];

  (0,react.useEffect)(function () {
    root.current = document.createElement('div');
    root.current.id = '__react-alert__';
    document.body.appendChild(root.current);
    var timersIdRef = timersId.current;
    return function () {
      timersIdRef.forEach(clearTimeout);
      if (root.current) document.body.removeChild(root.current);
    };
  }, []);
  var remove = (0,react.useCallback)(function (alert) {
    setAlerts(function (currentAlerts) {
      var lengthBeforeRemove = currentAlerts.length;
      var filteredAlerts = currentAlerts.filter(function (a) {
        return a.id !== alert.id;
      });

      if (lengthBeforeRemove > filteredAlerts.length && alert.options.onClose) {
        alert.options.onClose();
      }

      return filteredAlerts;
    });
  }, []);
  var removeAll = (0,react.useCallback)(function () {
    alertContext.current.alerts.forEach(remove);
  }, [remove]);
  var show = (0,react.useCallback)(function () {
    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var id = Math.random().toString(36).substr(2, 9);

    var alertOptions = _objectSpread2({
      position: options.position || position,
      timeout: timeout,
      type: type
    }, options);

    var alert = {
      id: id,
      message: message,
      options: alertOptions
    };

    alert.close = function () {
      return remove(alert);
    };

    if (alert.options.timeout) {
      var timerId = setTimeout(function () {
        remove(alert);
        timersId.current.splice(timersId.current.indexOf(timerId), 1);
      }, alert.options.timeout);
      timersId.current.push(timerId);
    }

    setAlerts(function (state) {
      return state.concat(alert);
    });
    if (alert.options.onOpen) alert.options.onOpen();
    return alert;
  }, [position, remove, timeout, type]);
  var success = (0,react.useCallback)(function () {
    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    options.type = types.SUCCESS;
    return show(message, options);
  }, [show]);
  var error = (0,react.useCallback)(function () {
    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    options.type = types.ERROR;
    return show(message, options);
  }, [show]);
  var info = (0,react.useCallback)(function () {
    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    options.type = types.INFO;
    return show(message, options);
  }, [show]);
  alertContext.current = {
    alerts: alerts,
    show: show,
    remove: remove,
    removeAll: removeAll,
    success: success,
    error: error,
    info: info
  };
  var alertsByPosition = groupBy(alerts, function (alert) {
    return alert.options.position;
  });
  return (/*#__PURE__*/react.createElement(Context.Provider, {
      value: alertContext
    }, children, root.current && /*#__PURE__*/(0,react_dom.createPortal)( /*#__PURE__*/react.createElement(react.Fragment, null, Object.keys(positions).map(function (key) {
      var position = positions[key];
      return (/*#__PURE__*/react.createElement(esm_TransitionGroup, _extends({
          appear: true,
          key: position,
          options: {
            position: position,
            containerStyle: containerStyle
          },
          component: Wrapper
        }, props), alertsByPosition[position] ? alertsByPosition[position].map(function (alert) {
          return (/*#__PURE__*/react.createElement(Transtion, {
              type: transition,
              key: alert.id
            }, /*#__PURE__*/react.createElement(AlertComponent, _extends({
              style: {
                margin: offset,
                pointerEvents: 'all'
              }
            }, alert)))
          );
        }) : null)
      );
    })), root.current))
  );
};

Provider.propTypes = {
  offset: (prop_types_default()).string,
  position: prop_types_default().oneOf(Object.keys(positions).map(function (position) {
    return positions[position];
  })),
  timeout: (prop_types_default()).number,
  type: prop_types_default().oneOf(Object.keys(types).map(function (type) {
    return types[type];
  })),
  transition: prop_types_default().oneOf(Object.keys(transitions).map(function (transition) {
    return transitions[transition];
  })),
  containerStyle: (prop_types_default()).object,
  template: prop_types_default().oneOfType([(prop_types_default()).element, (prop_types_default()).func, (prop_types_default()).elementType]).isRequired,
  context: prop_types_default().shape({
    Provider: (prop_types_default()).object,
    Consumer: (prop_types_default()).object
  })
};
Provider.defaultProps = {
  offset: '10px',
  position: positions.TOP_CENTER,
  timeout: 0,
  type: types.INFO,
  transition: transitions.FADE,
  containerStyle: {
    zIndex: 100
  },
  context: Context
};

var useAlert = function useAlert(Context$1) {
  var alertContext = (0,react.useContext)(Context$1 || Context);
  var alert = (0,react.useMemo)(function () {
    return alertContext.current;
  }, [alertContext]);
  return alert;
};

var withAlert = function withAlert() {
  var Context$1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Context;
  return function (WrappedComponent) {
    var WithAlert = function WithAlert(props, forwardedRef) {
      return (/*#__PURE__*/React.createElement(Context$1.Consumer, null, function (alert) {
          return (/*#__PURE__*/React.createElement(WrappedComponent, _extends({
              ref: forwardedRef
            }, props, {
              alert: alert.current
            }))
          );
        })
      );
    };

    WithAlert.displayName = "WithAlert(".concat(WrappedComponent.displayName || WrappedComponent.name || 'Component', ")");
    return (/*#__PURE__*/React.forwardRef(WithAlert)
    );
  };
};




/***/ }),

/***/ 8130:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony exports calcTimeDelta, formatTimeDelta, zeroPad */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function zeroPad(value) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var strValue = String(value);
  if (length === 0) return strValue;
  var match = strValue.match(/(.*?)([0-9]+)(.*)/);
  var prefix = match ? match[1] : '';
  var suffix = match ? match[3] : '';
  var strNo = match ? match[2] : strValue;
  var paddedNo = strNo.length >= length ? strNo : (_toConsumableArray(Array(length)).map(function () {
    return '0';
  }).join('') + strNo).slice(length * -1);
  return "".concat(prefix).concat(paddedNo).concat(suffix);
}
var timeDeltaFormatOptionsDefaults = {
  daysInHours: false,
  zeroPadTime: 2
};
function calcTimeDelta(date) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _options$now = options.now,
      now = _options$now === void 0 ? Date.now : _options$now,
      _options$precision = options.precision,
      precision = _options$precision === void 0 ? 0 : _options$precision,
      controlled = options.controlled,
      _options$offsetTime = options.offsetTime,
      offsetTime = _options$offsetTime === void 0 ? 0 : _options$offsetTime,
      overtime = options.overtime;
  var startTimestamp;

  if (typeof date === 'string') {
    startTimestamp = new Date(date).getTime();
  } else if (date instanceof Date) {
    startTimestamp = date.getTime();
  } else {
    startTimestamp = date;
  }

  if (!controlled) {
    startTimestamp += offsetTime;
  }

  var timeLeft = controlled ? startTimestamp : startTimestamp - now();
  var clampedPrecision = Math.min(20, Math.max(0, precision));
  var total = Math.round(parseFloat(((overtime ? timeLeft : Math.max(0, timeLeft)) / 1000).toFixed(clampedPrecision)) * 1000);
  var seconds = Math.abs(total) / 1000;
  return {
    total: total,
    days: Math.floor(seconds / (3600 * 24)),
    hours: Math.floor(seconds / 3600 % 24),
    minutes: Math.floor(seconds / 60 % 60),
    seconds: Math.floor(seconds % 60),
    milliseconds: Number((seconds % 1 * 1000).toFixed()),
    completed: total <= 0
  };
}
function formatTimeDelta(timeDelta, options) {
  var days = timeDelta.days,
      hours = timeDelta.hours,
      minutes = timeDelta.minutes,
      seconds = timeDelta.seconds;

  var _Object$assign = Object.assign(Object.assign({}, timeDeltaFormatOptionsDefaults), options),
      daysInHours = _Object$assign.daysInHours,
      zeroPadTime = _Object$assign.zeroPadTime,
      _Object$assign$zeroPa = _Object$assign.zeroPadDays,
      zeroPadDays = _Object$assign$zeroPa === void 0 ? zeroPadTime : _Object$assign$zeroPa;

  var zeroPadTimeLength = Math.min(2, zeroPadTime);
  var formattedHours = daysInHours ? zeroPad(hours + days * 24, zeroPadTime) : zeroPad(hours, zeroPadTimeLength);
  return {
    days: daysInHours ? '' : zeroPad(days, zeroPadDays),
    hours: formattedHours,
    minutes: zeroPad(minutes, zeroPadTimeLength),
    seconds: zeroPad(seconds, zeroPadTimeLength)
  };
}

var Countdown = function (_React$Component) {
  _inherits(Countdown, _React$Component);

  var _super = _createSuper(Countdown);

  function Countdown() {
    var _this;

    _classCallCheck(this, Countdown);

    _this = _super.apply(this, arguments);
    _this.state = {
      count: _this.props.count || 3
    };

    _this.startCountdown = function () {
      _this.interval = window.setInterval(function () {
        var count = _this.state.count - 1;

        if (count === 0) {
          _this.stopCountdown();

          _this.props.onComplete && _this.props.onComplete();
        } else {
          _this.setState(function (prevState) {
            return {
              count: prevState.count - 1
            };
          });
        }
      }, 1000);
    };

    _this.stopCountdown = function () {
      clearInterval(_this.interval);
    };

    _this.addTime = function (seconds) {
      _this.stopCountdown();

      _this.setState(function (prevState) {
        return {
          count: prevState.count + seconds
        };
      }, _this.startCountdown);
    };

    return _this;
  }

  _createClass(Countdown, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.startCountdown();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.interval);
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children ? (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(this.props.children, {
        count: this.state.count
      }) : null;
    }
  }]);

  return Countdown;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
Countdown.propTypes = {
  count: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1__.element,
  onComplete: prop_types__WEBPACK_IMPORTED_MODULE_1__.func
};

var Countdown$1 = function (_React$Component) {
  _inherits(Countdown$1, _React$Component);

  var _super = _createSuper(Countdown$1);

  function Countdown$1(props) {
    var _this;

    _classCallCheck(this, Countdown$1);

    _this = _super.call(this, props);
    _this.mounted = false;
    _this.initialTimestamp = _this.calcOffsetStartTimestamp();
    _this.offsetStartTimestamp = _this.props.autoStart ? 0 : _this.initialTimestamp;
    _this.offsetTime = 0;
    _this.legacyMode = false;
    _this.legacyCountdownRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)();

    _this.tick = function () {
      var timeDelta = _this.calcTimeDelta();

      var callback = timeDelta.completed && !_this.props.overtime ? undefined : _this.props.onTick;

      _this.setTimeDeltaState(timeDelta, undefined, callback);
    };

    _this.start = function () {
      if (_this.isStarted()) return;
      var prevOffsetStartTimestamp = _this.offsetStartTimestamp;
      _this.offsetStartTimestamp = 0;
      _this.offsetTime += prevOffsetStartTimestamp ? _this.calcOffsetStartTimestamp() - prevOffsetStartTimestamp : 0;

      var timeDelta = _this.calcTimeDelta();

      _this.setTimeDeltaState(timeDelta, "STARTED", _this.props.onStart);

      if (!_this.props.controlled && (!timeDelta.completed || _this.props.overtime)) {
        _this.clearTimer();

        _this.interval = window.setInterval(_this.tick, _this.props.intervalDelay);
      }
    };

    _this.pause = function () {
      if (_this.isPaused()) return;

      _this.clearTimer();

      _this.offsetStartTimestamp = _this.calcOffsetStartTimestamp();

      _this.setTimeDeltaState(_this.state.timeDelta, "PAUSED", _this.props.onPause);
    };

    _this.stop = function () {
      if (_this.isStopped()) return;

      _this.clearTimer();

      _this.offsetStartTimestamp = _this.calcOffsetStartTimestamp();
      _this.offsetTime = _this.offsetStartTimestamp - _this.initialTimestamp;

      _this.setTimeDeltaState(_this.calcTimeDelta(), "STOPPED", _this.props.onStop);
    };

    _this.isStarted = function () {
      return _this.isStatus("STARTED");
    };

    _this.isPaused = function () {
      return _this.isStatus("PAUSED");
    };

    _this.isStopped = function () {
      return _this.isStatus("STOPPED");
    };

    _this.isCompleted = function () {
      return _this.isStatus("COMPLETED");
    };

    _this.handleOnComplete = function (timeDelta) {
      if (_this.props.onComplete) _this.props.onComplete(timeDelta);
    };

    if (props.date) {
      var timeDelta = _this.calcTimeDelta();

      _this.state = {
        timeDelta: timeDelta,
        status: timeDelta.completed ? "COMPLETED" : "STOPPED"
      };
    } else {
      _this.legacyMode = true;
    }

    return _this;
  }

  _createClass(Countdown$1, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.legacyMode) {
        return;
      }

      this.mounted = true;
      if (this.props.onMount) this.props.onMount(this.calcTimeDelta());
      if (this.props.autoStart) this.start();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.legacyMode) {
        return;
      }

      if (this.props.date !== prevProps.date) {
        this.initialTimestamp = this.calcOffsetStartTimestamp();
        this.offsetStartTimestamp = this.initialTimestamp;
        this.offsetTime = 0;
        this.setTimeDeltaState(this.calcTimeDelta());
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.legacyMode) {
        return;
      }

      this.mounted = false;
      this.clearTimer();
    }
  }, {
    key: "calcTimeDelta",
    value: function calcTimeDelta$1() {
      var _this$props = this.props,
          date = _this$props.date,
          now = _this$props.now,
          precision = _this$props.precision,
          controlled = _this$props.controlled,
          overtime = _this$props.overtime;
      return calcTimeDelta(date, {
        now: now,
        precision: precision,
        controlled: controlled,
        offsetTime: this.offsetTime,
        overtime: overtime
      });
    }
  }, {
    key: "calcOffsetStartTimestamp",
    value: function calcOffsetStartTimestamp() {
      return Date.now();
    }
  }, {
    key: "addTime",
    value: function addTime(seconds) {
      this.legacyCountdownRef.current.addTime(seconds);
    }
  }, {
    key: "clearTimer",
    value: function clearTimer() {
      window.clearInterval(this.interval);
    }
  }, {
    key: "isStatus",
    value: function isStatus(status) {
      return this.state.status === status;
    }
  }, {
    key: "setTimeDeltaState",
    value: function setTimeDeltaState(timeDelta, status, callback) {
      var _this2 = this;

      if (!this.mounted) return;
      var completedCallback;

      if (!this.state.timeDelta.completed && timeDelta.completed) {
        if (!this.props.overtime) this.clearTimer();
        completedCallback = this.handleOnComplete;
      }

      var onDone = function onDone() {
        if (callback) callback(_this2.state.timeDelta);
        if (completedCallback) completedCallback(_this2.state.timeDelta);
      };

      return this.setState(function (prevState) {
        var newStatus = status || prevState.status;

        if (timeDelta.completed && !_this2.props.overtime) {
          newStatus = "COMPLETED";
        } else if (!status && newStatus === "COMPLETED") {
          newStatus = "STOPPED";
        }

        return {
          timeDelta: timeDelta,
          status: newStatus
        };
      }, onDone);
    }
  }, {
    key: "getApi",
    value: function getApi() {
      return this.api = this.api || {
        start: this.start,
        pause: this.pause,
        stop: this.stop,
        isStarted: this.isStarted,
        isPaused: this.isPaused,
        isStopped: this.isStopped,
        isCompleted: this.isCompleted
      };
    }
  }, {
    key: "getRenderProps",
    value: function getRenderProps() {
      var _this$props2 = this.props,
          daysInHours = _this$props2.daysInHours,
          zeroPadTime = _this$props2.zeroPadTime,
          zeroPadDays = _this$props2.zeroPadDays;
      var timeDelta = this.state.timeDelta;
      return Object.assign(Object.assign({}, timeDelta), {
        api: this.getApi(),
        props: this.props,
        formatted: formatTimeDelta(timeDelta, {
          daysInHours: daysInHours,
          zeroPadTime: zeroPadTime,
          zeroPadDays: zeroPadDays
        })
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.legacyMode) {
        var _this$props3 = this.props,
            count = _this$props3.count,
            _children = _this$props3.children,
            onComplete = _this$props3.onComplete;
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Countdown, {
          ref: this.legacyCountdownRef,
          count: count,
          onComplete: onComplete
        }, _children);
      }

      var _this$props4 = this.props,
          className = _this$props4.className,
          overtime = _this$props4.overtime,
          children = _this$props4.children,
          renderer = _this$props4.renderer;
      var renderProps = this.getRenderProps();

      if (renderer) {
        return renderer(renderProps);
      }

      if (children && this.state.timeDelta.completed && !overtime) {
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(children, {
          countdown: renderProps
        });
      }

      var _renderProps$formatte = renderProps.formatted,
          days = _renderProps$formatte.days,
          hours = _renderProps$formatte.hours,
          minutes = _renderProps$formatte.minutes,
          seconds = _renderProps$formatte.seconds;
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
        className: className
      }, renderProps.total < 0 ? '-' : '', days, days ? ':' : '', hours, ":", minutes, ":", seconds);
    }
  }]);

  return Countdown$1;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
Countdown$1.defaultProps = Object.assign(Object.assign({}, timeDeltaFormatOptionsDefaults), {
  controlled: false,
  intervalDelay: 1000,
  precision: 0,
  autoStart: true
});
Countdown$1.propTypes = {
  date: (0,prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOfType)([(0,prop_types__WEBPACK_IMPORTED_MODULE_1__.instanceOf)(Date), prop_types__WEBPACK_IMPORTED_MODULE_1__.string, prop_types__WEBPACK_IMPORTED_MODULE_1__.number]),
  daysInHours: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  zeroPadTime: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,
  zeroPadDays: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,
  controlled: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  intervalDelay: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,
  precision: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,
  autoStart: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  overtime: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1__.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1__.element,
  renderer: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  now: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  onMount: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  onStart: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  onPause: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  onStop: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  onTick: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  onComplete: prop_types__WEBPACK_IMPORTED_MODULE_1__.func
};

/* harmony default export */ __webpack_exports__["ZP"] = (Countdown$1);



/***/ }),

/***/ 2553:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



/*<replacement>*/

var Buffer = (__webpack_require__(9509).Buffer);
/*</replacement>*/

var isEncoding = Buffer.isEncoding || function (encoding) {
  encoding = '' + encoding;
  switch (encoding && encoding.toLowerCase()) {
    case 'hex':case 'utf8':case 'utf-8':case 'ascii':case 'binary':case 'base64':case 'ucs2':case 'ucs-2':case 'utf16le':case 'utf-16le':case 'raw':
      return true;
    default:
      return false;
  }
};

function _normalizeEncoding(enc) {
  if (!enc) return 'utf8';
  var retried;
  while (true) {
    switch (enc) {
      case 'utf8':
      case 'utf-8':
        return 'utf8';
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return 'utf16le';
      case 'latin1':
      case 'binary':
        return 'latin1';
      case 'base64':
      case 'ascii':
      case 'hex':
        return enc;
      default:
        if (retried) return; // undefined
        enc = ('' + enc).toLowerCase();
        retried = true;
    }
  }
};

// Do not cache `Buffer.isEncoding` when checking encoding names as some
// modules monkey-patch it to support additional encodings
function normalizeEncoding(enc) {
  var nenc = _normalizeEncoding(enc);
  if (typeof nenc !== 'string' && (Buffer.isEncoding === isEncoding || !isEncoding(enc))) throw new Error('Unknown encoding: ' + enc);
  return nenc || enc;
}

// StringDecoder provides an interface for efficiently splitting a series of
// buffers into a series of JS strings without breaking apart multi-byte
// characters.
exports.StringDecoder = StringDecoder;
function StringDecoder(encoding) {
  this.encoding = normalizeEncoding(encoding);
  var nb;
  switch (this.encoding) {
    case 'utf16le':
      this.text = utf16Text;
      this.end = utf16End;
      nb = 4;
      break;
    case 'utf8':
      this.fillLast = utf8FillLast;
      nb = 4;
      break;
    case 'base64':
      this.text = base64Text;
      this.end = base64End;
      nb = 3;
      break;
    default:
      this.write = simpleWrite;
      this.end = simpleEnd;
      return;
  }
  this.lastNeed = 0;
  this.lastTotal = 0;
  this.lastChar = Buffer.allocUnsafe(nb);
}

StringDecoder.prototype.write = function (buf) {
  if (buf.length === 0) return '';
  var r;
  var i;
  if (this.lastNeed) {
    r = this.fillLast(buf);
    if (r === undefined) return '';
    i = this.lastNeed;
    this.lastNeed = 0;
  } else {
    i = 0;
  }
  if (i < buf.length) return r ? r + this.text(buf, i) : this.text(buf, i);
  return r || '';
};

StringDecoder.prototype.end = utf8End;

// Returns only complete characters in a Buffer
StringDecoder.prototype.text = utf8Text;

// Attempts to complete a partial non-UTF-8 character using bytes from a Buffer
StringDecoder.prototype.fillLast = function (buf) {
  if (this.lastNeed <= buf.length) {
    buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
  }
  buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
  this.lastNeed -= buf.length;
};

// Checks the type of a UTF-8 byte, whether it's ASCII, a leading byte, or a
// continuation byte. If an invalid byte is detected, -2 is returned.
function utf8CheckByte(byte) {
  if (byte <= 0x7F) return 0;else if (byte >> 5 === 0x06) return 2;else if (byte >> 4 === 0x0E) return 3;else if (byte >> 3 === 0x1E) return 4;
  return byte >> 6 === 0x02 ? -1 : -2;
}

// Checks at most 3 bytes at the end of a Buffer in order to detect an
// incomplete multi-byte UTF-8 character. The total number of bytes (2, 3, or 4)
// needed to complete the UTF-8 character (if applicable) are returned.
function utf8CheckIncomplete(self, buf, i) {
  var j = buf.length - 1;
  if (j < i) return 0;
  var nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) self.lastNeed = nb - 1;
    return nb;
  }
  if (--j < i || nb === -2) return 0;
  nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) self.lastNeed = nb - 2;
    return nb;
  }
  if (--j < i || nb === -2) return 0;
  nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) {
      if (nb === 2) nb = 0;else self.lastNeed = nb - 3;
    }
    return nb;
  }
  return 0;
}

// Validates as many continuation bytes for a multi-byte UTF-8 character as
// needed or are available. If we see a non-continuation byte where we expect
// one, we "replace" the validated continuation bytes we've seen so far with
// a single UTF-8 replacement character ('\ufffd'), to match v8's UTF-8 decoding
// behavior. The continuation byte check is included three times in the case
// where all of the continuation bytes for a character exist in the same buffer.
// It is also done this way as a slight performance increase instead of using a
// loop.
function utf8CheckExtraBytes(self, buf, p) {
  if ((buf[0] & 0xC0) !== 0x80) {
    self.lastNeed = 0;
    return '\ufffd';
  }
  if (self.lastNeed > 1 && buf.length > 1) {
    if ((buf[1] & 0xC0) !== 0x80) {
      self.lastNeed = 1;
      return '\ufffd';
    }
    if (self.lastNeed > 2 && buf.length > 2) {
      if ((buf[2] & 0xC0) !== 0x80) {
        self.lastNeed = 2;
        return '\ufffd';
      }
    }
  }
}

// Attempts to complete a multi-byte UTF-8 character using bytes from a Buffer.
function utf8FillLast(buf) {
  var p = this.lastTotal - this.lastNeed;
  var r = utf8CheckExtraBytes(this, buf, p);
  if (r !== undefined) return r;
  if (this.lastNeed <= buf.length) {
    buf.copy(this.lastChar, p, 0, this.lastNeed);
    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
  }
  buf.copy(this.lastChar, p, 0, buf.length);
  this.lastNeed -= buf.length;
}

// Returns all complete UTF-8 characters in a Buffer. If the Buffer ended on a
// partial character, the character's bytes are buffered until the required
// number of bytes are available.
function utf8Text(buf, i) {
  var total = utf8CheckIncomplete(this, buf, i);
  if (!this.lastNeed) return buf.toString('utf8', i);
  this.lastTotal = total;
  var end = buf.length - (total - this.lastNeed);
  buf.copy(this.lastChar, 0, end);
  return buf.toString('utf8', i, end);
}

// For UTF-8, a replacement character is added when ending on a partial
// character.
function utf8End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) return r + '\ufffd';
  return r;
}

// UTF-16LE typically needs two bytes per character, but even if we have an even
// number of bytes available, we need to check if we end on a leading/high
// surrogate. In that case, we need to wait for the next two bytes in order to
// decode the last character properly.
function utf16Text(buf, i) {
  if ((buf.length - i) % 2 === 0) {
    var r = buf.toString('utf16le', i);
    if (r) {
      var c = r.charCodeAt(r.length - 1);
      if (c >= 0xD800 && c <= 0xDBFF) {
        this.lastNeed = 2;
        this.lastTotal = 4;
        this.lastChar[0] = buf[buf.length - 2];
        this.lastChar[1] = buf[buf.length - 1];
        return r.slice(0, -1);
      }
    }
    return r;
  }
  this.lastNeed = 1;
  this.lastTotal = 2;
  this.lastChar[0] = buf[buf.length - 1];
  return buf.toString('utf16le', i, buf.length - 1);
}

// For UTF-16LE we do not explicitly append special replacement characters if we
// end on a partial character, we simply let v8 handle that.
function utf16End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) {
    var end = this.lastTotal - this.lastNeed;
    return r + this.lastChar.toString('utf16le', 0, end);
  }
  return r;
}

function base64Text(buf, i) {
  var n = (buf.length - i) % 3;
  if (n === 0) return buf.toString('base64', i);
  this.lastNeed = 3 - n;
  this.lastTotal = 3;
  if (n === 1) {
    this.lastChar[0] = buf[buf.length - 1];
  } else {
    this.lastChar[0] = buf[buf.length - 2];
    this.lastChar[1] = buf[buf.length - 1];
  }
  return buf.toString('base64', i, buf.length - n);
}

function base64End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) return r + this.lastChar.toString('base64', 0, 3 - this.lastNeed);
  return r;
}

// Pass bytes on through for single-byte encodings (e.g. ascii, latin1, hex)
function simpleWrite(buf) {
  return buf.toString(this.encoding);
}

function simpleEnd(buf) {
  return buf && buf.length ? this.write(buf) : '';
}

/***/ }),

/***/ 6361:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);


function EyeOffIcon(props, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(EyeOffIcon);
/* harmony default export */ __webpack_exports__["Z"] = (ForwardRef);

/***/ }),

/***/ 1782:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);


function HomeIcon(props, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(HomeIcon);
/* harmony default export */ __webpack_exports__["Z"] = (ForwardRef);

/***/ }),

/***/ 5301:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);


function UserIcon(props, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(UserIcon);
/* harmony default export */ __webpack_exports__["Z"] = (ForwardRef);

/***/ }),

/***/ 8100:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": function() { return /* binding */ useSWR; }
/* harmony export */ });
/* unused harmony exports SWRConfig, mutate, unstable_serialize, useSWRConfig */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);


/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var noop = function () { };
// Using noop() as the undefined value as undefined can possibly be replaced
// by something else.  Prettier ignore and extra parentheses are necessary here
// to ensure that tsc doesn't remove the __NOINLINE__ comment.
// prettier-ignore
var UNDEFINED = ( /*#__NOINLINE__*/noop());
var OBJECT = Object;
var isUndefined = function (v) { return v === UNDEFINED; };
var isFunction = function (v) { return typeof v == 'function'; };
var mergeObjects = function (a, b) { return OBJECT.assign({}, a, b); };
var STR_UNDEFINED = 'undefined';
// NOTE: Use function to guarantee it's re-evaluated between jsdom and node runtime for tests.
var hasWindow = function () { return typeof window != STR_UNDEFINED; };
var hasDocument = function () { return typeof document != STR_UNDEFINED; };
var hasRequestAnimationFrame = function () {
    return hasWindow() && typeof window['requestAnimationFrame'] != STR_UNDEFINED;
};

// use WeakMap to store the object->key mapping
// so the objects can be garbage collected.
// WeakMap uses a hashtable under the hood, so the lookup
// complexity is almost O(1).
var table = new WeakMap();
// counter of the key
var counter = 0;
// A stable hash implementation that supports:
// - Fast and ensures unique hash properties
// - Handles unserializable values
// - Handles object key ordering
// - Generates short results
//
// This is not a serialization function, and the result is not guaranteed to be
// parsible.
var stableHash = function (arg) {
    var type = typeof arg;
    var constructor = arg && arg.constructor;
    var isDate = constructor == Date;
    var result;
    var index;
    if (OBJECT(arg) === arg && !isDate && constructor != RegExp) {
        // Object/function, not null/date/regexp. Use WeakMap to store the id first.
        // If it's already hashed, directly return the result.
        result = table.get(arg);
        if (result)
            return result;
        // Store the hash first for circular reference detection before entering the
        // recursive `stableHash` calls.
        // For other objects like set and map, we use this id directly as the hash.
        result = ++counter + '~';
        table.set(arg, result);
        if (constructor == Array) {
            // Array.
            result = '@';
            for (index = 0; index < arg.length; index++) {
                result += stableHash(arg[index]) + ',';
            }
            table.set(arg, result);
        }
        if (constructor == OBJECT) {
            // Object, sort keys.
            result = '#';
            var keys = OBJECT.keys(arg).sort();
            while (!isUndefined((index = keys.pop()))) {
                if (!isUndefined(arg[index])) {
                    result += index + ':' + stableHash(arg[index]) + ',';
                }
            }
            table.set(arg, result);
        }
    }
    else {
        result = isDate
            ? arg.toJSON()
            : type == 'symbol'
                ? arg.toString()
                : type == 'string'
                    ? JSON.stringify(arg)
                    : '' + arg;
    }
    return result;
};

/**
 * Due to bug https://bugs.chromium.org/p/chromium/issues/detail?id=678075,
 * it's not reliable to detect if the browser is currently online or offline
 * based on `navigator.onLine`.
 * As a work around, we always assume it's online on first load, and change
 * the status upon `online` or `offline` events.
 */
var online = true;
var isOnline = function () { return online; };
var hasWin = hasWindow();
var hasDoc = hasDocument();
// For node and React Native, `add/removeEventListener` doesn't exist on window.
var onWindowEvent = hasWin && window.addEventListener
    ? window.addEventListener.bind(window)
    : noop;
var onDocumentEvent = hasDoc ? document.addEventListener.bind(document) : noop;
var offWindowEvent = hasWin && window.removeEventListener
    ? window.removeEventListener.bind(window)
    : noop;
var offDocumentEvent = hasDoc
    ? document.removeEventListener.bind(document)
    : noop;
var isVisible = function () {
    var visibilityState = hasDoc && document.visibilityState;
    return isUndefined(visibilityState) || visibilityState !== 'hidden';
};
var initFocus = function (callback) {
    // focus revalidate
    onDocumentEvent('visibilitychange', callback);
    onWindowEvent('focus', callback);
    return function () {
        offDocumentEvent('visibilitychange', callback);
        offWindowEvent('focus', callback);
    };
};
var initReconnect = function (callback) {
    // revalidate on reconnected
    var onOnline = function () {
        online = true;
        callback();
    };
    // nothing to revalidate, just update the status
    var onOffline = function () {
        online = false;
    };
    onWindowEvent('online', onOnline);
    onWindowEvent('offline', onOffline);
    return function () {
        offWindowEvent('online', onOnline);
        offWindowEvent('offline', onOffline);
    };
};
var preset = {
    isOnline: isOnline,
    isVisible: isVisible
};
var defaultConfigOptions = {
    initFocus: initFocus,
    initReconnect: initReconnect
};

var IS_SERVER = !hasWindow() || 'Deno' in window;
// Polyfill requestAnimationFrame
var rAF = function (f) {
    return hasRequestAnimationFrame() ? window['requestAnimationFrame'](f) : setTimeout(f, 1);
};
// React currently throws a warning when using useLayoutEffect on the server.
// To get around it, we can conditionally useEffect on the server (no-op) and
// useLayoutEffect in the browser.
var useIsomorphicLayoutEffect = IS_SERVER ? react__WEBPACK_IMPORTED_MODULE_0__.useEffect : react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect;
// This assignment is to extend the Navigator type to use effectiveType.
var navigatorConnection = typeof navigator !== 'undefined' &&
    navigator.connection;
// Adjust the config based on slow connection status (<= 70Kbps).
var slowConnection = !IS_SERVER &&
    navigatorConnection &&
    (['slow-2g', '2g'].includes(navigatorConnection.effectiveType) ||
        navigatorConnection.saveData);

var serialize = function (key) {
    if (isFunction(key)) {
        try {
            key = key();
        }
        catch (err) {
            // dependencies not ready
            key = '';
        }
    }
    var args = [].concat(key);
    // If key is not falsy, or not an empty array, hash it.
    key =
        typeof key == 'string'
            ? key
            : (Array.isArray(key) ? key.length : key)
                ? stableHash(key)
                : '';
    var infoKey = key ? '$swr$' + key : '';
    return [key, args, infoKey];
};

// Global state used to deduplicate requests and store listeners
var SWRGlobalState = new WeakMap();

var FOCUS_EVENT = 0;
var RECONNECT_EVENT = 1;
var MUTATE_EVENT = 2;

var broadcastState = function (cache, key, data, error, isValidating, revalidate, broadcast) {
    if (broadcast === void 0) { broadcast = true; }
    var _a = SWRGlobalState.get(cache), EVENT_REVALIDATORS = _a[0], STATE_UPDATERS = _a[1], FETCH = _a[3];
    var revalidators = EVENT_REVALIDATORS[key];
    var updaters = STATE_UPDATERS[key];
    // Cache was populated, update states of all hooks.
    if (broadcast && updaters) {
        for (var i = 0; i < updaters.length; ++i) {
            updaters[i](data, error, isValidating);
        }
    }
    // If we also need to revalidate, only do it for the first hook.
    if (revalidate) {
        // Invalidate the key by deleting the concurrent request markers so new
        // requests will not be deduped.
        delete FETCH[key];
        if (revalidators && revalidators[0]) {
            return revalidators[0](MUTATE_EVENT).then(function () {
                return cache.get(key);
            });
        }
    }
    return cache.get(key);
};

// Global timestamp.
var __timestamp = 0;
var getTimestamp = function () { return ++__timestamp; };

var internalMutate = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var cache, _key, _data, _opts, options, populateCache, revalidate, rollbackOnError, optimisticData, _a, key, keyInfo, _b, MUTATION, data, error, beforeMutationTs, hasOptimisticData, rollbackData, res;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    cache = args[0], _key = args[1], _data = args[2], _opts = args[3];
                    options = typeof _opts === 'boolean' ? { revalidate: _opts } : _opts || {};
                    populateCache = isUndefined(options.populateCache)
                        ? true
                        : options.populateCache;
                    revalidate = options.revalidate !== false;
                    rollbackOnError = options.rollbackOnError !== false;
                    optimisticData = options.optimisticData;
                    _a = serialize(_key), key = _a[0], keyInfo = _a[2];
                    if (!key)
                        return [2 /*return*/];
                    _b = SWRGlobalState.get(cache), MUTATION = _b[2];
                    // If there is no new data provided, revalidate the key with current state.
                    if (args.length < 3) {
                        // Revalidate and broadcast state.
                        return [2 /*return*/, broadcastState(cache, key, cache.get(key), UNDEFINED, UNDEFINED, revalidate, true)];
                    }
                    data = _data;
                    beforeMutationTs = getTimestamp();
                    MUTATION[key] = [beforeMutationTs, 0];
                    hasOptimisticData = !isUndefined(optimisticData);
                    rollbackData = cache.get(key);
                    // Do optimistic data update.
                    if (hasOptimisticData) {
                        cache.set(key, optimisticData);
                        broadcastState(cache, key, optimisticData);
                    }
                    if (isFunction(data)) {
                        // `data` is a function, call it passing current cache value.
                        try {
                            data = data(cache.get(key));
                        }
                        catch (err) {
                            // If it throws an error synchronously, we shouldn't update the cache.
                            error = err;
                        }
                    }
                    if (!(data && isFunction(data.then))) return [3 /*break*/, 2];
                    return [4 /*yield*/, data.catch(function (err) {
                            error = err;
                        })
                        // Check if other mutations have occurred since we've started this mutation.
                        // If there's a race we don't update cache or broadcast the change,
                        // just return the data.
                    ];
                case 1:
                    // This means that the mutation is async, we need to check timestamps to
                    // avoid race conditions.
                    data = _c.sent();
                    // Check if other mutations have occurred since we've started this mutation.
                    // If there's a race we don't update cache or broadcast the change,
                    // just return the data.
                    if (beforeMutationTs !== MUTATION[key][0]) {
                        if (error)
                            throw error;
                        return [2 /*return*/, data];
                    }
                    else if (error && hasOptimisticData && rollbackOnError) {
                        // Rollback. Always populate the cache in this case but without
                        // transforming the data.
                        populateCache = true;
                        data = rollbackData;
                        cache.set(key, rollbackData);
                    }
                    _c.label = 2;
                case 2:
                    // If we should write back the cache after request.
                    if (populateCache) {
                        if (!error) {
                            // Transform the result into data.
                            if (isFunction(populateCache)) {
                                data = populateCache(data, rollbackData);
                            }
                            // Only update cached data if there's no error. Data can be `undefined` here.
                            cache.set(key, data);
                        }
                        // Always update or reset the error.
                        cache.set(keyInfo, mergeObjects(cache.get(keyInfo), { error: error }));
                    }
                    // Reset the timestamp to mark the mutation has ended.
                    MUTATION[key][1] = getTimestamp();
                    return [4 /*yield*/, broadcastState(cache, key, data, error, UNDEFINED, revalidate, !!populateCache)
                        // Throw error or return data
                    ];
                case 3:
                    res = _c.sent();
                    // Throw error or return data
                    if (error)
                        throw error;
                    return [2 /*return*/, populateCache ? res : data];
            }
        });
    });
};

var revalidateAllKeys = function (revalidators, type) {
    for (var key in revalidators) {
        if (revalidators[key][0])
            revalidators[key][0](type);
    }
};
var initCache = function (provider, options) {
    // The global state for a specific provider will be used to deduplicate
    // requests and store listeners. As well as a mutate function that bound to
    // the cache.
    // Provider's global state might be already initialized. Let's try to get the
    // global state associated with the provider first.
    if (!SWRGlobalState.has(provider)) {
        var opts = mergeObjects(defaultConfigOptions, options);
        // If there's no global state bound to the provider, create a new one with the
        // new mutate function.
        var EVENT_REVALIDATORS = {};
        var mutate = internalMutate.bind(UNDEFINED, provider);
        var unmount = noop;
        // Update the state if it's new, or the provider has been extended.
        SWRGlobalState.set(provider, [EVENT_REVALIDATORS, {}, {}, {}, mutate]);
        // This is a new provider, we need to initialize it and setup DOM events
        // listeners for `focus` and `reconnect` actions.
        if (!IS_SERVER) {
            // When listening to the native events for auto revalidations,
            // we intentionally put a delay (setTimeout) here to make sure they are
            // fired after immediate JavaScript executions, which can possibly be
            // React's state updates.
            // This avoids some unnecessary revalidations such as
            // https://github.com/vercel/swr/issues/1680.
            var releaseFocus_1 = opts.initFocus(setTimeout.bind(UNDEFINED, revalidateAllKeys.bind(UNDEFINED, EVENT_REVALIDATORS, FOCUS_EVENT)));
            var releaseReconnect_1 = opts.initReconnect(setTimeout.bind(UNDEFINED, revalidateAllKeys.bind(UNDEFINED, EVENT_REVALIDATORS, RECONNECT_EVENT)));
            unmount = function () {
                releaseFocus_1 && releaseFocus_1();
                releaseReconnect_1 && releaseReconnect_1();
                // When un-mounting, we need to remove the cache provider from the state
                // storage too because it's a side-effect. Otherwise when re-mounting we
                // will not re-register those event listeners.
                SWRGlobalState.delete(provider);
            };
        }
        // We might want to inject an extra layer on top of `provider` in the future,
        // such as key serialization, auto GC, etc.
        // For now, it's just a `Map` interface without any modifications.
        return [provider, mutate, unmount];
    }
    return [provider, SWRGlobalState.get(provider)[4]];
};

// error retry
var onErrorRetry = function (_, __, config, revalidate, opts) {
    var maxRetryCount = config.errorRetryCount;
    var currentRetryCount = opts.retryCount;
    // Exponential backoff
    var timeout = ~~((Math.random() + 0.5) *
        (1 << (currentRetryCount < 8 ? currentRetryCount : 8))) * config.errorRetryInterval;
    if (!isUndefined(maxRetryCount) && currentRetryCount > maxRetryCount) {
        return;
    }
    setTimeout(revalidate, timeout, opts);
};
// Default cache provider
var _a = initCache(new Map()), cache = _a[0], mutate = _a[1];
// Default config
var defaultConfig = mergeObjects({
    // events
    onLoadingSlow: noop,
    onSuccess: noop,
    onError: noop,
    onErrorRetry: onErrorRetry,
    onDiscarded: noop,
    // switches
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
    revalidateIfStale: true,
    shouldRetryOnError: true,
    // timeouts
    errorRetryInterval: slowConnection ? 10000 : 5000,
    focusThrottleInterval: 5 * 1000,
    dedupingInterval: 2 * 1000,
    loadingTimeout: slowConnection ? 5000 : 3000,
    // providers
    compare: function (currentData, newData) {
        return stableHash(currentData) == stableHash(newData);
    },
    isPaused: function () { return false; },
    cache: cache,
    mutate: mutate,
    fallback: {}
}, 
// use web preset by default
preset);

var mergeConfigs = function (a, b) {
    // Need to create a new object to avoid mutating the original here.
    var v = mergeObjects(a, b);
    // If two configs are provided, merge their `use` and `fallback` options.
    if (b) {
        var u1 = a.use, f1 = a.fallback;
        var u2 = b.use, f2 = b.fallback;
        if (u1 && u2) {
            v.use = u1.concat(u2);
        }
        if (f1 && f2) {
            v.fallback = mergeObjects(f1, f2);
        }
    }
    return v;
};

var SWRConfigContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
var SWRConfig$1 = function (props) {
    var value = props.value;
    // Extend parent context values and middleware.
    var extendedConfig = mergeConfigs((0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(SWRConfigContext), value);
    // Should not use the inherited provider.
    var provider = value && value.provider;
    // Use a lazy initialized state to create the cache on first access.
    var cacheContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function () {
        return provider
            ? initCache(provider(extendedConfig.cache || cache), value)
            : UNDEFINED;
    })[0];
    // Override the cache if a new provider is given.
    if (cacheContext) {
        extendedConfig.cache = cacheContext[0];
        extendedConfig.mutate = cacheContext[1];
    }
    // Unsubscribe events.
    useIsomorphicLayoutEffect(function () { return (cacheContext ? cacheContext[2] : UNDEFINED); }, []);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SWRConfigContext.Provider, mergeObjects(props, {
        value: extendedConfig
    }));
};

/**
 * An implementation of state with dependency-tracking.
 */
var useStateWithDeps = function (state, unmountedRef) {
    var rerender = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({})[1];
    var stateRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(state);
    // If a state property (data, error or isValidating) is accessed by the render
    // function, we mark the property as a dependency so if it is updated again
    // in the future, we trigger a rerender.
    // This is also known as dependency-tracking.
    var stateDependenciesRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
        data: false,
        error: false,
        isValidating: false
    });
    /**
     * @param payload To change stateRef, pass the values explicitly to setState:
     * @example
     * ```js
     * setState({
     *   isValidating: false
     *   data: newData // set data to newData
     *   error: undefined // set error to undefined
     * })
     *
     * setState({
     *   isValidating: false
     *   data: undefined // set data to undefined
     *   error: err // set error to err
     * })
     * ```
     */
    var setState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (payload) {
        var shouldRerender = false;
        var currentState = stateRef.current;
        for (var _ in payload) {
            var k = _;
            // If the property has changed, update the state and mark rerender as
            // needed.
            if (currentState[k] !== payload[k]) {
                currentState[k] = payload[k];
                // If the property is accessed by the component, a rerender should be
                // triggered.
                if (stateDependenciesRef.current[k]) {
                    shouldRerender = true;
                }
            }
        }
        if (shouldRerender && !unmountedRef.current) {
            rerender({});
        }
    }, 
    // config.suspense isn't allowed to change during the lifecycle
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []);
    // Always update the state reference.
    useIsomorphicLayoutEffect(function () {
        stateRef.current = state;
    });
    return [stateRef, stateDependenciesRef.current, setState];
};

var normalize = function (args) {
    return isFunction(args[1])
        ? [args[0], args[1], args[2] || {}]
        : [args[0], null, (args[1] === null ? args[2] : args[1]) || {}];
};

var useSWRConfig = function () {
    return mergeObjects(defaultConfig, (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(SWRConfigContext));
};

// It's tricky to pass generic types as parameters, so we just directly override
// the types here.
var withArgs = function (hook) {
    return function useSWRArgs() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // Get the default and inherited configuration.
        var fallbackConfig = useSWRConfig();
        // Normalize arguments.
        var _a = normalize(args), key = _a[0], fn = _a[1], _config = _a[2];
        // Merge configurations.
        var config = mergeConfigs(fallbackConfig, _config);
        // Apply middleware
        var next = hook;
        var use = config.use;
        if (use) {
            for (var i = use.length; i-- > 0;) {
                next = use[i](next);
            }
        }
        return next(key, fn || config.fetcher, config);
    };
};

// Add a callback function to a list of keyed callback functions and return
// the unsubscribe function.
var subscribeCallback = function (key, callbacks, callback) {
    var keyedRevalidators = callbacks[key] || (callbacks[key] = []);
    keyedRevalidators.push(callback);
    return function () {
        var index = keyedRevalidators.indexOf(callback);
        if (index >= 0) {
            // O(1): faster than splice
            keyedRevalidators[index] = keyedRevalidators[keyedRevalidators.length - 1];
            keyedRevalidators.pop();
        }
    };
};

var WITH_DEDUPE = { dedupe: true };
var useSWRHandler = function (_key, fetcher, config) {
    var cache = config.cache, compare = config.compare, fallbackData = config.fallbackData, suspense = config.suspense, revalidateOnMount = config.revalidateOnMount, refreshInterval = config.refreshInterval, refreshWhenHidden = config.refreshWhenHidden, refreshWhenOffline = config.refreshWhenOffline;
    var _a = SWRGlobalState.get(cache), EVENT_REVALIDATORS = _a[0], STATE_UPDATERS = _a[1], MUTATION = _a[2], FETCH = _a[3];
    // `key` is the identifier of the SWR `data` state, `keyInfo` holds extra
    // states such as `error` and `isValidating` inside,
    // all of them are derived from `_key`.
    // `fnArgs` is an array of arguments parsed from the key, which will be passed
    // to the fetcher.
    var _b = serialize(_key), key = _b[0], fnArgs = _b[1], keyInfo = _b[2];
    // If it's the initial render of this hook.
    var initialMountedRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    // If the hook is unmounted already. This will be used to prevent some effects
    // to be called after unmounting.
    var unmountedRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    // Refs to keep the key and config.
    var keyRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(key);
    var fetcherRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(fetcher);
    var configRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(config);
    var getConfig = function () { return configRef.current; };
    var isActive = function () { return getConfig().isVisible() && getConfig().isOnline(); };
    var patchFetchInfo = function (info) {
        return cache.set(keyInfo, mergeObjects(cache.get(keyInfo), info));
    };
    // Get the current state that SWR should return.
    var cached = cache.get(key);
    var fallback = isUndefined(fallbackData)
        ? config.fallback[key]
        : fallbackData;
    var data = isUndefined(cached) ? fallback : cached;
    var info = cache.get(keyInfo) || {};
    var error = info.error;
    var isInitialMount = !initialMountedRef.current;
    // - Suspense mode and there's stale data for the initial render.
    // - Not suspense mode and there is no fallback data and `revalidateIfStale` is enabled.
    // - `revalidateIfStale` is enabled but `data` is not defined.
    var shouldRevalidate = function () {
        // If `revalidateOnMount` is set, we take the value directly.
        if (isInitialMount && !isUndefined(revalidateOnMount))
            return revalidateOnMount;
        // If it's paused, we skip revalidation.
        if (getConfig().isPaused())
            return false;
        return suspense
            ? // Under suspense mode, it will always fetch on render if there is no
                // stale data so no need to revalidate immediately on mount again.
                !isUndefined(data)
            : // If there is no stale data, we need to revalidate on mount;
                // If `revalidateIfStale` is set to true, we will always revalidate.
                isUndefined(data) || config.revalidateIfStale;
    };
    // Resolve the current validating state.
    var resolveValidating = function () {
        if (!key || !fetcher)
            return false;
        if (info.isValidating)
            return true;
        // If it's not mounted yet and it should revalidate on mount, revalidate.
        return isInitialMount && shouldRevalidate();
    };
    var isValidating = resolveValidating();
    var _c = useStateWithDeps({
        data: data,
        error: error,
        isValidating: isValidating
    }, unmountedRef), stateRef = _c[0], stateDependencies = _c[1], setState = _c[2];
    // The revalidation function is a carefully crafted wrapper of the original
    // `fetcher`, to correctly handle the many edge cases.
    var revalidate = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (revalidateOpts) { return __awaiter(void 0, void 0, void 0, function () {
        var currentFetcher, newData, startAt, loading, opts, shouldStartNewRequest, isCurrentKeyMounted, cleanupState, newState, finishRequestAndUpdateState, mutationInfo, err_1;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    currentFetcher = fetcherRef.current;
                    if (!key ||
                        !currentFetcher ||
                        unmountedRef.current ||
                        getConfig().isPaused()) {
                        return [2 /*return*/, false];
                    }
                    loading = true;
                    opts = revalidateOpts || {};
                    shouldStartNewRequest = !FETCH[key] || !opts.dedupe;
                    isCurrentKeyMounted = function () {
                        return !unmountedRef.current &&
                            key === keyRef.current &&
                            initialMountedRef.current;
                    };
                    cleanupState = function () {
                        // Check if it's still the same request before deleting.
                        var requestInfo = FETCH[key];
                        if (requestInfo && requestInfo[1] === startAt) {
                            delete FETCH[key];
                        }
                    };
                    newState = { isValidating: false };
                    finishRequestAndUpdateState = function () {
                        patchFetchInfo({ isValidating: false });
                        // We can only set state if it's safe (still mounted with the same key).
                        if (isCurrentKeyMounted()) {
                            setState(newState);
                        }
                    };
                    // Start fetching. Change the `isValidating` state, update the cache.
                    patchFetchInfo({
                        isValidating: true
                    });
                    setState({ isValidating: true });
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    if (shouldStartNewRequest) {
                        // Tell all other hooks to change the `isValidating` state.
                        broadcastState(cache, key, stateRef.current.data, stateRef.current.error, true);
                        // If no cache being rendered currently (it shows a blank page),
                        // we trigger the loading slow event.
                        if (config.loadingTimeout && !cache.get(key)) {
                            setTimeout(function () {
                                if (loading && isCurrentKeyMounted()) {
                                    getConfig().onLoadingSlow(key, config);
                                }
                            }, config.loadingTimeout);
                        }
                        // Start the request and save the timestamp.
                        FETCH[key] = [currentFetcher.apply(void 0, fnArgs), getTimestamp()];
                    }
                    _a = FETCH[key], newData = _a[0], startAt = _a[1];
                    return [4 /*yield*/, newData];
                case 2:
                    newData = _b.sent();
                    if (shouldStartNewRequest) {
                        // If the request isn't interrupted, clean it up after the
                        // deduplication interval.
                        setTimeout(cleanupState, config.dedupingInterval);
                    }
                    // If there're other ongoing request(s), started after the current one,
                    // we need to ignore the current one to avoid possible race conditions:
                    //   req1------------------>res1        (current one)
                    //        req2---------------->res2
                    // the request that fired later will always be kept.
                    // The timestamp maybe be `undefined` or a number
                    if (!FETCH[key] || FETCH[key][1] !== startAt) {
                        if (shouldStartNewRequest) {
                            if (isCurrentKeyMounted()) {
                                getConfig().onDiscarded(key);
                            }
                        }
                        return [2 /*return*/, false];
                    }
                    // Clear error.
                    patchFetchInfo({
                        error: UNDEFINED
                    });
                    newState.error = UNDEFINED;
                    mutationInfo = MUTATION[key];
                    if (!isUndefined(mutationInfo) &&
                        // case 1
                        (startAt <= mutationInfo[0] ||
                            // case 2
                            startAt <= mutationInfo[1] ||
                            // case 3
                            mutationInfo[1] === 0)) {
                        finishRequestAndUpdateState();
                        if (shouldStartNewRequest) {
                            if (isCurrentKeyMounted()) {
                                getConfig().onDiscarded(key);
                            }
                        }
                        return [2 /*return*/, false];
                    }
                    // Deep compare with latest state to avoid extra re-renders.
                    // For local state, compare and assign.
                    if (!compare(stateRef.current.data, newData)) {
                        newState.data = newData;
                    }
                    else {
                        // data and newData are deeply equal
                        // it should be safe to broadcast the stale data
                        newState.data = stateRef.current.data;
                        // At the end of this function, `brocastState` invokes the `onStateUpdate` function,
                        // which takes care of avoiding the re-render
                    }
                    // For global state, it's possible that the key has changed.
                    // https://github.com/vercel/swr/pull/1058
                    if (!compare(cache.get(key), newData)) {
                        cache.set(key, newData);
                    }
                    // Trigger the successful callback if it's the original request.
                    if (shouldStartNewRequest) {
                        if (isCurrentKeyMounted()) {
                            getConfig().onSuccess(newData, key, config);
                        }
                    }
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _b.sent();
                    cleanupState();
                    // Not paused, we continue handling the error. Otherwise discard it.
                    if (!getConfig().isPaused()) {
                        // Get a new error, don't use deep comparison for errors.
                        patchFetchInfo({ error: err_1 });
                        newState.error = err_1;
                        // Error event and retry logic. Only for the actual request, not
                        // deduped ones.
                        if (shouldStartNewRequest && isCurrentKeyMounted()) {
                            getConfig().onError(err_1, key, config);
                            if ((typeof config.shouldRetryOnError === 'boolean' &&
                                config.shouldRetryOnError) ||
                                (isFunction(config.shouldRetryOnError) &&
                                    config.shouldRetryOnError(err_1))) {
                                // When retrying, dedupe is always enabled
                                if (isActive()) {
                                    // If it's active, stop. It will auto revalidate when refocusing
                                    // or reconnecting.
                                    getConfig().onErrorRetry(err_1, key, config, revalidate, {
                                        retryCount: (opts.retryCount || 0) + 1,
                                        dedupe: true
                                    });
                                }
                            }
                        }
                    }
                    return [3 /*break*/, 4];
                case 4:
                    // Mark loading as stopped.
                    loading = false;
                    // Update the current hook's state.
                    finishRequestAndUpdateState();
                    // Here is the source of the request, need to tell all other hooks to
                    // update their states.
                    if (isCurrentKeyMounted() && shouldStartNewRequest) {
                        broadcastState(cache, key, newState.data, newState.error, false);
                    }
                    return [2 /*return*/, true];
            }
        });
    }); }, 
    // `setState` is immutable, and `eventsCallback`, `fnArgs`, `keyInfo`,
    // and `keyValidating` are depending on `key`, so we can exclude them from
    // the deps array.
    //
    // FIXME:
    // `fn` and `config` might be changed during the lifecycle,
    // but they might be changed every render like this.
    // `useSWR('key', () => fetch('/api/'), { suspense: true })`
    // So we omit the values from the deps array
    // even though it might cause unexpected behaviors.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [key]);
    // Similar to the global mutate, but bound to the current cache and key.
    // `cache` isn't allowed to change during the lifecycle.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    var boundMutate = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
    // By using `bind` we don't need to modify the size of the rest arguments.
    // Due to https://github.com/microsoft/TypeScript/issues/37181, we have to
    // cast it to any for now.
    internalMutate.bind(UNDEFINED, cache, function () { return keyRef.current; }), 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []);
    // Always update fetcher and config refs.
    useIsomorphicLayoutEffect(function () {
        fetcherRef.current = fetcher;
        configRef.current = config;
    });
    // After mounted or key changed.
    useIsomorphicLayoutEffect(function () {
        if (!key)
            return;
        var keyChanged = key !== keyRef.current;
        var softRevalidate = revalidate.bind(UNDEFINED, WITH_DEDUPE);
        // Expose state updater to global event listeners. So we can update hook's
        // internal state from the outside.
        var onStateUpdate = function (updatedData, updatedError, updatedIsValidating) {
            setState(mergeObjects({
                error: updatedError,
                isValidating: updatedIsValidating
            }, 
            // Since `setState` only shallowly compares states, we do a deep
            // comparison here.
            compare(stateRef.current.data, updatedData)
                ? UNDEFINED
                : {
                    data: updatedData
                }));
        };
        // Expose revalidators to global event listeners. So we can trigger
        // revalidation from the outside.
        var nextFocusRevalidatedAt = 0;
        var onRevalidate = function (type) {
            if (type == FOCUS_EVENT) {
                var now = Date.now();
                if (getConfig().revalidateOnFocus &&
                    now > nextFocusRevalidatedAt &&
                    isActive()) {
                    nextFocusRevalidatedAt = now + getConfig().focusThrottleInterval;
                    softRevalidate();
                }
            }
            else if (type == RECONNECT_EVENT) {
                if (getConfig().revalidateOnReconnect && isActive()) {
                    softRevalidate();
                }
            }
            else if (type == MUTATE_EVENT) {
                return revalidate();
            }
            return;
        };
        var unsubUpdate = subscribeCallback(key, STATE_UPDATERS, onStateUpdate);
        var unsubEvents = subscribeCallback(key, EVENT_REVALIDATORS, onRevalidate);
        // Mark the component as mounted and update corresponding refs.
        unmountedRef.current = false;
        keyRef.current = key;
        initialMountedRef.current = true;
        // When `key` updates, reset the state to the initial value
        // and trigger a rerender if necessary.
        if (keyChanged) {
            setState({
                data: data,
                error: error,
                isValidating: isValidating
            });
        }
        // Trigger a revalidation.
        if (shouldRevalidate()) {
            if (isUndefined(data) || IS_SERVER) {
                // Revalidate immediately.
                softRevalidate();
            }
            else {
                // Delay the revalidate if we have data to return so we won't block
                // rendering.
                rAF(softRevalidate);
            }
        }
        return function () {
            // Mark it as unmounted.
            unmountedRef.current = true;
            unsubUpdate();
            unsubEvents();
        };
    }, [key, revalidate]);
    // Polling
    useIsomorphicLayoutEffect(function () {
        var timer;
        function next() {
            // Use the passed interval
            // ...or invoke the function with the updated data to get the interval
            var interval = isFunction(refreshInterval)
                ? refreshInterval(data)
                : refreshInterval;
            // We only start next interval if `refreshInterval` is not 0, and:
            // - `force` is true, which is the start of polling
            // - or `timer` is not 0, which means the effect wasn't canceled
            if (interval && timer !== -1) {
                timer = setTimeout(execute, interval);
            }
        }
        function execute() {
            // Check if it's OK to execute:
            // Only revalidate when the page is visible, online and not errored.
            if (!stateRef.current.error &&
                (refreshWhenHidden || getConfig().isVisible()) &&
                (refreshWhenOffline || getConfig().isOnline())) {
                revalidate(WITH_DEDUPE).then(next);
            }
            else {
                // Schedule next interval to check again.
                next();
            }
        }
        next();
        return function () {
            if (timer) {
                clearTimeout(timer);
                timer = -1;
            }
        };
    }, [refreshInterval, refreshWhenHidden, refreshWhenOffline, revalidate]);
    // Display debug info in React DevTools.
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useDebugValue)(data);
    // In Suspense mode, we can't return the empty `data` state.
    // If there is `error`, the `error` needs to be thrown to the error boundary.
    // If there is no `error`, the `revalidation` promise needs to be thrown to
    // the suspense boundary.
    if (suspense && isUndefined(data) && key) {
        // Always update fetcher and config refs even with the Suspense mode.
        fetcherRef.current = fetcher;
        configRef.current = config;
        unmountedRef.current = false;
        throw isUndefined(error) ? revalidate(WITH_DEDUPE) : error;
    }
    return {
        mutate: boundMutate,
        get data() {
            stateDependencies.data = true;
            return data;
        },
        get error() {
            stateDependencies.error = true;
            return error;
        },
        get isValidating() {
            stateDependencies.isValidating = true;
            return isValidating;
        }
    };
};
var SWRConfig = OBJECT.defineProperty(SWRConfig$1, 'default', {
    value: defaultConfig
});
var unstable_serialize = function (key) { return serialize(key)[0]; };
var useSWR = withArgs(useSWRHandler);

// useSWR




/***/ })

}]);