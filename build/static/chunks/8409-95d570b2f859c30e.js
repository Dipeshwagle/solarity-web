(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[8409],{

/***/ 4184:
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ 1131:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cn": function() { return /* binding */ atom; },
/* harmony export */   "KO": function() { return /* binding */ useAtom; }
/* harmony export */ });
/* unused harmony exports Provider, SECRET_INTERNAL_getScopeContext, unstable_createStore, useAtomValue, useSetAtom */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* provided dependency */ var process = __webpack_require__(4155);


const SUSPENSE_PROMISE = Symbol();
const isSuspensePromise = (promise) => !!promise[SUSPENSE_PROMISE];
const isSuspensePromiseAlreadyCancelled = (suspensePromise) => !suspensePromise[SUSPENSE_PROMISE].c;
const cancelSuspensePromise = (suspensePromise) => {
  var _a, _b;
  (_b = (_a = suspensePromise[SUSPENSE_PROMISE]).c) == null ? void 0 : _b.call(_a);
};
const isEqualSuspensePromise = (oldSuspensePromise, newSuspensePromise) => {
  const oldOriginalPromise = oldSuspensePromise[SUSPENSE_PROMISE].o;
  const newOriginalPromise = newSuspensePromise[SUSPENSE_PROMISE].o;
  return oldOriginalPromise === newOriginalPromise || oldSuspensePromise === newOriginalPromise || isSuspensePromise(oldOriginalPromise) && isEqualSuspensePromise(oldOriginalPromise, newSuspensePromise);
};
const createSuspensePromise = (promise) => {
  const objectToAttach = {
    o: promise,
    c: null
  };
  const suspensePromise = new Promise((resolve) => {
    objectToAttach.c = () => {
      objectToAttach.c = null;
      resolve();
    };
    promise.then(objectToAttach.c, objectToAttach.c);
  });
  suspensePromise[SUSPENSE_PROMISE] = objectToAttach;
  return suspensePromise;
};

var __defProp$1 = Object.defineProperty;
var __defProps$1 = Object.defineProperties;
var __getOwnPropDescs$1 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$1 = Object.getOwnPropertySymbols;
var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
var __propIsEnum$1 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1.call(b, prop))
      __defNormalProp$1(a, prop, b[prop]);
  if (__getOwnPropSymbols$1)
    for (var prop of __getOwnPropSymbols$1(b)) {
      if (__propIsEnum$1.call(b, prop))
        __defNormalProp$1(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$1 = (a, b) => __defProps$1(a, __getOwnPropDescs$1(b));
const hasInitialValue = (atom) => "init" in atom;
const READ_ATOM = "r";
const WRITE_ATOM = "w";
const COMMIT_ATOM = "c";
const SUBSCRIBE_ATOM = "s";
const RESTORE_ATOMS = "h";
const DEV_SUBSCRIBE_STATE = "n";
const DEV_GET_MOUNTED_ATOMS = "l";
const DEV_GET_ATOM_STATE = "a";
const DEV_GET_MOUNTED = "m";
const createStore = (initialValues) => {
  const committedAtomStateMap = /* @__PURE__ */ new WeakMap();
  const mountedMap = /* @__PURE__ */ new WeakMap();
  const pendingMap = /* @__PURE__ */ new Map();
  let stateListeners;
  let mountedAtoms;
  if (true) {
    stateListeners = /* @__PURE__ */ new Set();
    mountedAtoms = /* @__PURE__ */ new Set();
  }
  if (initialValues) {
    for (const [atom, value] of initialValues) {
      const atomState = { v: value, r: 0, d: /* @__PURE__ */ new Map() };
      if (true) {
        Object.freeze(atomState);
        if (!hasInitialValue(atom)) {
          console.warn("Found initial value for derived atom which can cause unexpected behavior", atom);
        }
      }
      committedAtomStateMap.set(atom, atomState);
    }
  }
  const suspensePromiseCacheMap = /* @__PURE__ */ new WeakMap();
  const addSuspensePromiseToCache = (version, atom, suspensePromise) => {
    let cache = suspensePromiseCacheMap.get(atom);
    if (!cache) {
      cache = /* @__PURE__ */ new Map();
      suspensePromiseCacheMap.set(atom, cache);
    }
    suspensePromise.then(() => {
      if (cache.get(version) === suspensePromise) {
        cache.delete(version);
        if (!cache.size) {
          suspensePromiseCacheMap.delete(atom);
        }
      }
    });
    cache.set(version, suspensePromise);
  };
  const cancelAllSuspensePromiseInCache = (atom) => {
    const versionSet = /* @__PURE__ */ new Set();
    const cache = suspensePromiseCacheMap.get(atom);
    if (cache) {
      suspensePromiseCacheMap.delete(atom);
      cache.forEach((suspensePromise, version) => {
        cancelSuspensePromise(suspensePromise);
        versionSet.add(version);
      });
    }
    return versionSet;
  };
  const versionedAtomStateMapMap = /* @__PURE__ */ new WeakMap();
  const getVersionedAtomStateMap = (version) => {
    let versionedAtomStateMap = versionedAtomStateMapMap.get(version);
    if (!versionedAtomStateMap) {
      versionedAtomStateMap = /* @__PURE__ */ new Map();
      versionedAtomStateMapMap.set(version, versionedAtomStateMap);
    }
    return versionedAtomStateMap;
  };
  const getAtomState = (version, atom) => {
    if (version) {
      const versionedAtomStateMap = getVersionedAtomStateMap(version);
      let atomState = versionedAtomStateMap.get(atom);
      if (!atomState) {
        atomState = getAtomState(version.p, atom);
        if (atomState) {
          if ("p" in atomState) {
            atomState.p.then(() => versionedAtomStateMap.delete(atom));
          }
          versionedAtomStateMap.set(atom, atomState);
        }
      }
      return atomState;
    }
    return committedAtomStateMap.get(atom);
  };
  const setAtomState = (version, atom, atomState) => {
    if (true) {
      Object.freeze(atomState);
    }
    if (version) {
      const versionedAtomStateMap = getVersionedAtomStateMap(version);
      versionedAtomStateMap.set(atom, atomState);
    } else {
      const prevAtomState = committedAtomStateMap.get(atom);
      committedAtomStateMap.set(atom, atomState);
      if (!pendingMap.has(atom)) {
        pendingMap.set(atom, prevAtomState);
      }
    }
  };
  const createReadDependencies = (version, prevReadDependencies = /* @__PURE__ */ new Map(), dependencies) => {
    if (!dependencies) {
      return prevReadDependencies;
    }
    const readDependencies = /* @__PURE__ */ new Map();
    let changed = false;
    dependencies.forEach((atom) => {
      var _a;
      const revision = ((_a = getAtomState(version, atom)) == null ? void 0 : _a.r) || 0;
      readDependencies.set(atom, revision);
      if (prevReadDependencies.get(atom) !== revision) {
        changed = true;
      }
    });
    if (prevReadDependencies.size === readDependencies.size && !changed) {
      return prevReadDependencies;
    }
    return readDependencies;
  };
  const setAtomValue = (version, atom, value, dependencies, suspensePromise) => {
    const atomState = getAtomState(version, atom);
    if (atomState) {
      if (suspensePromise && (!("p" in atomState) || !isEqualSuspensePromise(atomState.p, suspensePromise))) {
        return atomState;
      }
      if ("p" in atomState) {
        cancelSuspensePromise(atomState.p);
      }
    }
    const nextAtomState = {
      v: value,
      r: (atomState == null ? void 0 : atomState.r) || 0,
      d: createReadDependencies(version, atomState == null ? void 0 : atomState.d, dependencies)
    };
    if (!atomState || !("v" in atomState) || !Object.is(atomState.v, value)) {
      ++nextAtomState.r;
      if (nextAtomState.d.has(atom)) {
        nextAtomState.d = new Map(nextAtomState.d).set(atom, nextAtomState.r);
      }
    } else if (nextAtomState.d !== atomState.d && (nextAtomState.d.size !== atomState.d.size || !Array.from(nextAtomState.d.keys()).every((a) => atomState.d.has(a)))) {
      Promise.resolve().then(() => {
        flushPending(version);
      });
    }
    setAtomState(version, atom, nextAtomState);
    return nextAtomState;
  };
  const setAtomReadError = (version, atom, error, dependencies, suspensePromise) => {
    const atomState = getAtomState(version, atom);
    if (atomState) {
      if (suspensePromise && (!("p" in atomState) || !isEqualSuspensePromise(atomState.p, suspensePromise))) {
        return atomState;
      }
      if ("p" in atomState) {
        cancelSuspensePromise(atomState.p);
      }
    }
    const nextAtomState = {
      e: error,
      r: (atomState == null ? void 0 : atomState.r) || 0,
      d: createReadDependencies(version, atomState == null ? void 0 : atomState.d, dependencies)
    };
    setAtomState(version, atom, nextAtomState);
    return nextAtomState;
  };
  const setAtomSuspensePromise = (version, atom, suspensePromise, dependencies) => {
    const atomState = getAtomState(version, atom);
    if (atomState && "p" in atomState) {
      if (isEqualSuspensePromise(atomState.p, suspensePromise)) {
        return atomState;
      }
      cancelSuspensePromise(atomState.p);
    }
    addSuspensePromiseToCache(version, atom, suspensePromise);
    const nextAtomState = {
      p: suspensePromise,
      r: (atomState == null ? void 0 : atomState.r) || 0,
      d: createReadDependencies(version, atomState == null ? void 0 : atomState.d, dependencies)
    };
    setAtomState(version, atom, nextAtomState);
    return nextAtomState;
  };
  const setAtomPromiseOrValue = (version, atom, promiseOrValue, dependencies) => {
    if (promiseOrValue instanceof Promise) {
      const suspensePromise = createSuspensePromise(promiseOrValue.then((value) => {
        setAtomValue(version, atom, value, dependencies, suspensePromise);
        flushPending(version);
      }).catch((e) => {
        if (e instanceof Promise) {
          if (isSuspensePromise(e)) {
            return e.then(() => {
              readAtomState(version, atom, true);
            });
          }
          return e;
        }
        setAtomReadError(version, atom, e, dependencies, suspensePromise);
        flushPending(version);
      }));
      return setAtomSuspensePromise(version, atom, suspensePromise, dependencies);
    }
    return setAtomValue(version, atom, promiseOrValue, dependencies);
  };
  const setAtomInvalidated = (version, atom) => {
    const atomState = getAtomState(version, atom);
    if (atomState) {
      const nextAtomState = __spreadProps$1(__spreadValues$1({}, atomState), {
        i: atomState.r
      });
      setAtomState(version, atom, nextAtomState);
    } else if (true) {
      console.warn("[Bug] could not invalidate non existing atom", atom);
    }
  };
  const readAtomState = (version, atom, force) => {
    if (!force) {
      const atomState = getAtomState(version, atom);
      if (atomState) {
        if (atomState.r !== atomState.i && "p" in atomState && !isSuspensePromiseAlreadyCancelled(atomState.p)) {
          return atomState;
        }
        atomState.d.forEach((_, a) => {
          if (a !== atom) {
            if (!mountedMap.has(a)) {
              readAtomState(version, a);
            } else {
              const aState = getAtomState(version, a);
              if (aState && aState.r === aState.i) {
                readAtomState(version, a);
              }
            }
          }
        });
        if (Array.from(atomState.d).every(([a, r]) => {
          const aState = getAtomState(version, a);
          return aState && "v" in aState && aState.r === r;
        })) {
          return atomState;
        }
      }
    }
    const dependencies = /* @__PURE__ */ new Set();
    try {
      const promiseOrValue = atom.read((a) => {
        dependencies.add(a);
        const aState = a === atom ? getAtomState(version, a) : readAtomState(version, a);
        if (aState) {
          if ("e" in aState) {
            throw aState.e;
          }
          if ("p" in aState) {
            throw aState.p;
          }
          return aState.v;
        }
        if (hasInitialValue(a)) {
          return a.init;
        }
        throw new Error("no atom init");
      });
      return setAtomPromiseOrValue(version, atom, promiseOrValue, dependencies);
    } catch (errorOrPromise) {
      if (errorOrPromise instanceof Promise) {
        const suspensePromise = createSuspensePromise(errorOrPromise);
        return setAtomSuspensePromise(version, atom, suspensePromise, dependencies);
      }
      return setAtomReadError(version, atom, errorOrPromise, dependencies);
    }
  };
  const readAtom = (readingAtom, version) => {
    const atomState = readAtomState(version, readingAtom);
    return atomState;
  };
  const addAtom = (addingAtom) => {
    let mounted = mountedMap.get(addingAtom);
    if (!mounted) {
      mounted = mountAtom(addingAtom);
    }
    return mounted;
  };
  const canUnmountAtom = (atom, mounted) => !mounted.l.size && (!mounted.t.size || mounted.t.size === 1 && mounted.t.has(atom));
  const delAtom = (deletingAtom) => {
    const mounted = mountedMap.get(deletingAtom);
    if (mounted && canUnmountAtom(deletingAtom, mounted)) {
      unmountAtom(deletingAtom);
    }
  };
  const invalidateDependents = (version, atom) => {
    const mounted = mountedMap.get(atom);
    mounted == null ? void 0 : mounted.t.forEach((dependent) => {
      if (dependent !== atom) {
        setAtomInvalidated(version, dependent);
        invalidateDependents(version, dependent);
      }
    });
  };
  const writeAtomState = (version, atom, update) => {
    let isSync = true;
    const writeGetter = (a, options) => {
      const aState = readAtomState(version, a);
      if ("e" in aState) {
        throw aState.e;
      }
      if ("p" in aState) {
        if (options == null ? void 0 : options.unstable_promise) {
          return aState.p.then(() => writeGetter(a, options));
        }
        if (true) {
          console.info("Reading pending atom state in write operation. We throw a promise for now.", a);
        }
        throw aState.p;
      }
      if ("v" in aState) {
        return aState.v;
      }
      if (true) {
        console.warn("[Bug] no value found while reading atom in write operation. This is probably a bug.", a);
      }
      throw new Error("no value found");
    };
    const setter = (a, v) => {
      let promiseOrVoid2;
      if (a === atom) {
        if (!hasInitialValue(a)) {
          throw new Error("atom not writable");
        }
        const versionSet = cancelAllSuspensePromiseInCache(a);
        versionSet.forEach((cancelledVersion) => {
          if (cancelledVersion !== version) {
            setAtomPromiseOrValue(cancelledVersion, a, v);
          }
        });
        setAtomPromiseOrValue(version, a, v);
        invalidateDependents(version, a);
      } else {
        promiseOrVoid2 = writeAtomState(version, a, v);
      }
      if (!isSync) {
        flushPending(version);
      }
      return promiseOrVoid2;
    };
    const promiseOrVoid = atom.write(writeGetter, setter, update);
    isSync = false;
    version = void 0;
    return promiseOrVoid;
  };
  const writeAtom = (writingAtom, update, version) => {
    const promiseOrVoid = writeAtomState(version, writingAtom, update);
    flushPending(version);
    return promiseOrVoid;
  };
  const isActuallyWritableAtom = (atom) => !!atom.write;
  const mountAtom = (atom, initialDependent) => {
    const mounted = {
      t: new Set(initialDependent && [initialDependent]),
      l: /* @__PURE__ */ new Set()
    };
    mountedMap.set(atom, mounted);
    if (true) {
      mountedAtoms.add(atom);
    }
    const atomState = readAtomState(void 0, atom);
    atomState.d.forEach((_, a) => {
      const aMounted = mountedMap.get(a);
      if (aMounted) {
        aMounted.t.add(atom);
      } else {
        if (a !== atom) {
          mountAtom(a, atom);
        }
      }
    });
    if (isActuallyWritableAtom(atom) && atom.onMount) {
      const setAtom = (update) => writeAtom(atom, update);
      const onUnmount = atom.onMount(setAtom);
      if (onUnmount) {
        mounted.u = onUnmount;
      }
    }
    return mounted;
  };
  const unmountAtom = (atom) => {
    var _a;
    const onUnmount = (_a = mountedMap.get(atom)) == null ? void 0 : _a.u;
    if (onUnmount) {
      onUnmount();
    }
    mountedMap.delete(atom);
    if (true) {
      mountedAtoms.delete(atom);
    }
    const atomState = getAtomState(void 0, atom);
    if (atomState) {
      atomState.d.forEach((_, a) => {
        if (a !== atom) {
          const mounted = mountedMap.get(a);
          if (mounted) {
            mounted.t.delete(atom);
            if (canUnmountAtom(a, mounted)) {
              unmountAtom(a);
            }
          }
        }
      });
    } else if (true) {
      console.warn("[Bug] could not find atom state to unmount", atom);
    }
  };
  const mountDependencies = (atom, atomState, prevReadDependencies) => {
    const dependencies = new Set(atomState.d.keys());
    prevReadDependencies == null ? void 0 : prevReadDependencies.forEach((_, a) => {
      if (dependencies.has(a)) {
        dependencies.delete(a);
        return;
      }
      const mounted = mountedMap.get(a);
      if (mounted) {
        mounted.t.delete(atom);
        if (canUnmountAtom(a, mounted)) {
          unmountAtom(a);
        }
      }
    });
    dependencies.forEach((a) => {
      const mounted = mountedMap.get(a);
      if (mounted) {
        mounted.t.add(atom);
      } else if (mountedMap.has(atom)) {
        mountAtom(a, atom);
      }
    });
  };
  const flushPending = (version) => {
    if (version) {
      const versionedAtomStateMap = getVersionedAtomStateMap(version);
      versionedAtomStateMap.forEach((atomState, atom) => {
        if (atomState !== committedAtomStateMap.get(atom)) {
          const mounted = mountedMap.get(atom);
          mounted == null ? void 0 : mounted.l.forEach((listener) => listener(version));
        }
      });
      return;
    }
    while (pendingMap.size) {
      const pending = Array.from(pendingMap);
      pendingMap.clear();
      pending.forEach(([atom, prevAtomState]) => {
        const atomState = getAtomState(void 0, atom);
        if (atomState && atomState.d !== (prevAtomState == null ? void 0 : prevAtomState.d)) {
          mountDependencies(atom, atomState, prevAtomState == null ? void 0 : prevAtomState.d);
        }
        const mounted = mountedMap.get(atom);
        mounted == null ? void 0 : mounted.l.forEach((listener) => listener());
      });
    }
    if (true) {
      stateListeners.forEach((l) => l());
    }
  };
  const commitVersionedAtomStateMap = (version) => {
    const versionedAtomStateMap = getVersionedAtomStateMap(version);
    versionedAtomStateMap.forEach((atomState, atom) => {
      const prevAtomState = committedAtomStateMap.get(atom);
      if (atomState.r > ((prevAtomState == null ? void 0 : prevAtomState.r) || 0) || "v" in atomState && atomState.r === (prevAtomState == null ? void 0 : prevAtomState.r) && atomState.d !== (prevAtomState == null ? void 0 : prevAtomState.d)) {
        committedAtomStateMap.set(atom, atomState);
        if (atomState.d !== (prevAtomState == null ? void 0 : prevAtomState.d)) {
          mountDependencies(atom, atomState, prevAtomState == null ? void 0 : prevAtomState.d);
        }
      }
    });
  };
  const commitAtom = (_atom, version) => {
    if (version) {
      commitVersionedAtomStateMap(version);
    }
    flushPending(void 0);
  };
  const subscribeAtom = (atom, callback) => {
    const mounted = addAtom(atom);
    const listeners = mounted.l;
    listeners.add(callback);
    return () => {
      listeners.delete(callback);
      delAtom(atom);
    };
  };
  const restoreAtoms = (values, version) => {
    for (const [atom, value] of values) {
      if (hasInitialValue(atom)) {
        setAtomPromiseOrValue(version, atom, value);
        invalidateDependents(version, atom);
      }
    }
    flushPending(version);
  };
  if (true) {
    return {
      [READ_ATOM]: readAtom,
      [WRITE_ATOM]: writeAtom,
      [COMMIT_ATOM]: commitAtom,
      [SUBSCRIBE_ATOM]: subscribeAtom,
      [RESTORE_ATOMS]: restoreAtoms,
      [DEV_SUBSCRIBE_STATE]: (l) => {
        stateListeners.add(l);
        return () => {
          stateListeners.delete(l);
        };
      },
      [DEV_GET_MOUNTED_ATOMS]: () => mountedAtoms.values(),
      [DEV_GET_ATOM_STATE]: (a) => committedAtomStateMap.get(a),
      [DEV_GET_MOUNTED]: (a) => mountedMap.get(a)
    };
  }
  return {
    [READ_ATOM]: readAtom,
    [WRITE_ATOM]: writeAtom,
    [COMMIT_ATOM]: commitAtom,
    [SUBSCRIBE_ATOM]: subscribeAtom,
    [RESTORE_ATOMS]: restoreAtoms
  };
};
const createStoreForExport = (initialValues) => {
  const store = createStore(initialValues);
  const get = (atom) => {
    const atomState = store[READ_ATOM](atom);
    if ("e" in atomState) {
      throw atomState.e;
    }
    if ("p" in atomState) {
      return void 0;
    }
    return atomState.v;
  };
  const asyncGet = (atom) => new Promise((resolve, reject) => {
    const atomState = store[READ_ATOM](atom);
    if ("e" in atomState) {
      reject(atomState.e);
    } else if ("p" in atomState) {
      resolve(atomState.p.then(() => asyncGet(atom)));
    } else {
      resolve(atomState.v);
    }
  });
  const set = (atom, update) => store[WRITE_ATOM](atom, update);
  const sub = (atom, callback) => store[SUBSCRIBE_ATOM](atom, callback);
  return {
    get,
    asyncGet,
    set,
    sub,
    SECRET_INTERNAL_store: store
  };
};

const createScopeContainer = (initialValues, unstable_createStore) => {
  const store = unstable_createStore ? unstable_createStore(initialValues).SECRET_INTERNAL_store : createStore(initialValues);
  return { s: store };
};
const ScopeContextMap = /* @__PURE__ */ new Map();
const getScopeContext = (scope) => {
  if (!ScopeContextMap.has(scope)) {
    ScopeContextMap.set(scope, (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(createScopeContainer()));
  }
  return ScopeContextMap.get(scope);
};

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
const Provider = ({
  children,
  initialValues,
  scope,
  unstable_createStore,
  unstable_enableVersionedWrite
}) => {
  const [version, setVersion] = useState();
  useEffect(() => {
    if (version) {
      scopeContainerRef.current.s[COMMIT_ATOM](null, version);
      delete version.p;
    }
  }, [version]);
  const scopeContainerRef = useRef();
  if (!scopeContainerRef.current) {
    scopeContainerRef.current = createScopeContainer(initialValues, unstable_createStore);
    if (unstable_enableVersionedWrite) {
      scopeContainerRef.current.w = (write) => {
        setVersion((parentVersion) => {
          const nextVersion = parentVersion ? { p: parentVersion } : {};
          write(nextVersion);
          return nextVersion;
        });
      };
    }
  }
  if ( true && (typeof process !== "object" || "production" !== "test")) {
    useDebugState(scopeContainerRef.current);
  }
  const ScopeContainerContext = getScopeContext(scope);
  return createElement(ScopeContainerContext.Provider, {
    value: scopeContainerRef.current
  }, children);
};
const atomToPrintable = (atom) => atom.debugLabel || atom.toString();
const stateToPrintable = ([store, atoms]) => Object.fromEntries(atoms.flatMap((atom) => {
  var _a, _b;
  const mounted = (_a = store[DEV_GET_MOUNTED]) == null ? void 0 : _a.call(store, atom);
  if (!mounted) {
    return [];
  }
  const dependents = mounted.t;
  const atomState = ((_b = store[DEV_GET_ATOM_STATE]) == null ? void 0 : _b.call(store, atom)) || {};
  return [
    [
      atomToPrintable(atom),
      __spreadProps(__spreadValues(__spreadValues(__spreadValues({}, "e" in atomState && { error: atomState.e }), "p" in atomState && { promise: atomState.p }), "v" in atomState && { value: atomState.v }), {
        dependents: Array.from(dependents).map(atomToPrintable)
      })
    ]
  ];
}));
const useDebugState = (scopeContainer) => {
  const { s: store } = scopeContainer;
  const [atoms, setAtoms] = useState([]);
  useEffect(() => {
    var _a;
    const callback = () => {
      var _a2;
      setAtoms(Array.from(((_a2 = store[DEV_GET_MOUNTED_ATOMS]) == null ? void 0 : _a2.call(store)) || []));
    };
    const unsubscribe = (_a = store[DEV_SUBSCRIBE_STATE]) == null ? void 0 : _a.call(store, callback);
    callback();
    return unsubscribe;
  }, [store]);
  useDebugValue([store, atoms], stateToPrintable);
};

let keyCount = 0;
function atom(read, write) {
  const key = `atom${++keyCount}`;
  const config = {
    toString: () => key
  };
  if (typeof read === "function") {
    config.read = read;
  } else {
    config.init = read;
    config.read = (get) => get(config);
    config.write = (get, set, update) => set(config, typeof update === "function" ? update(get(config)) : update);
  }
  if (write) {
    config.write = write;
  }
  return config;
}

function useAtomValue(atom, scope) {
  const ScopeContext = getScopeContext(scope);
  const { s: store } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ScopeContext);
  const getAtomValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((version2) => {
    const atomState = store[READ_ATOM](atom, version2);
    if ("e" in atomState) {
      throw atomState.e;
    }
    if ("p" in atomState) {
      throw atomState.p;
    }
    if ("v" in atomState) {
      return atomState.v;
    }
    throw new Error("no atom value");
  }, [store, atom]);
  const [[version, value, atomFromUseReducer], rerenderIfChanged] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)((0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((prev, nextVersion) => {
    const nextValue = getAtomValue(nextVersion);
    if (Object.is(prev[1], nextValue) && prev[2] === atom) {
      return prev;
    }
    return [nextVersion, nextValue, atom];
  }, [getAtomValue, atom]), void 0, () => {
    const initialVersion = void 0;
    const initialValue = getAtomValue(initialVersion);
    return [initialVersion, initialValue, atom];
  });
  if (atomFromUseReducer !== atom) {
    rerenderIfChanged(void 0);
  }
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const unsubscribe = store[SUBSCRIBE_ATOM](atom, rerenderIfChanged);
    rerenderIfChanged(void 0);
    return unsubscribe;
  }, [store, atom]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    store[COMMIT_ATOM](atom, version);
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useDebugValue)(value);
  return value;
}

function useSetAtom(atom, scope) {
  const ScopeContext = getScopeContext(scope);
  const { s: store, w: versionedWrite } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ScopeContext);
  const setAtom = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((update) => {
    if (!("write" in atom) && typeof process === "object" && "production" !== "production") {}
    const write = (version) => store[WRITE_ATOM](atom, update, version);
    return versionedWrite ? versionedWrite(write) : write();
  }, [store, versionedWrite, atom]);
  return setAtom;
}

function useAtom(atom, scope) {
  if ("scope" in atom) {
    console.warn("atom.scope is deprecated. Please do useAtom(atom, scope) instead.");
    scope = atom.scope;
  }
  return [
    useAtomValue(atom, scope),
    useSetAtom(atom, scope)
  ];
}




/***/ }),

/***/ 7999:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": function() { return /* binding */ Wizard; },
/* harmony export */   "a": function() { return /* binding */ useWizard; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);


/**
 * Log messages in the console with a corresponding urgency
 *
 * @param level The urgency of the message
 * @param message The message to log in the console
 */
const log = (level, message) => {
  if (false) {}
};

const WizardContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);

if (false) {}

const Wizard = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(({
  header,
  footer,
  children,
  startIndex = 0
}) => {
  const [activeStep, setActiveStep] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(startIndex);
  const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const hasNextStep = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(true);
  const hasPreviousStep = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  const nextStepHandler = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(() => {});
  const stepCount = react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).length;
  hasNextStep.current = activeStep < stepCount - 1;
  hasPreviousStep.current = activeStep > 0;
  const goToNextStep = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(() => {
    if (hasNextStep.current) {
      setActiveStep(activeStep => activeStep + 1);
    }
  });
  const goToPreviousStep = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(() => {
    if (hasPreviousStep.current) {
      nextStepHandler.current = null;
      setActiveStep(activeStep => activeStep - 1);
    }
  });
  const goToStep = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(stepIndex => {
    if (stepIndex >= 0 && stepIndex < stepCount) {
      nextStepHandler.current = null;
      setActiveStep(stepIndex);
    } else {
      if (false) {}
    }
  }); // Callback to attach the step handler

  const handleStep = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(handler => {
    nextStepHandler.current = handler;
  });
  const doNextStep = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(async () => {
    if (hasNextStep.current && nextStepHandler.current) {
      try {
        setIsLoading(true);
        await nextStepHandler.current();
        setIsLoading(false);
        nextStepHandler.current = null;
        goToNextStep.current();
      } catch (error) {
        setIsLoading(false);
        throw error;
      }
    } else {
      goToNextStep.current();
    }
  });
  const wizardValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({
    nextStep: doNextStep.current,
    previousStep: goToPreviousStep.current,
    handleStep: handleStep.current,
    isLoading,
    activeStep,
    stepCount,
    isFirstStep: !hasPreviousStep.current,
    isLastStep: !hasNextStep.current,
    goToStep: goToStep.current
  }), [activeStep, stepCount, isLoading]);
  const activeStepContent = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const reactChildren = react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children);

    if (false) {}

    return reactChildren[activeStep];
  }, [activeStep, children, header, footer]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(WizardContext.Provider, {
    value: wizardValue
  }, header, activeStepContent, footer);
});

const useWizard = () => {
  const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(WizardContext);

  if (!context && "production" !== "production") {} else {
    return context;
  }
};


//# sourceMappingURL=react-use-wizard.esm.js.map


/***/ }),

/***/ 5292:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "s": function() { return /* binding */ useFilePicker; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./node_modules/tslib/tslib.es6.js
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
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

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

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

;// CONCATENATED MODULE: ./node_modules/file-selector/dist/es5/file.js
var COMMON_MIME_TYPES = new Map([
    ['avi', 'video/avi'],
    ['gif', 'image/gif'],
    ['ico', 'image/x-icon'],
    ['jpeg', 'image/jpeg'],
    ['jpg', 'image/jpeg'],
    ['mkv', 'video/x-matroska'],
    ['mov', 'video/quicktime'],
    ['mp4', 'video/mp4'],
    ['pdf', 'application/pdf'],
    ['png', 'image/png'],
    ['zip', 'application/zip'],
    ['doc', 'application/msword'],
    ['docx', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
]);
function toFileWithPath(file, path) {
    var f = withMimeType(file);
    if (typeof f.path !== 'string') { // on electron, path is already set to the absolute path
        var webkitRelativePath = file.webkitRelativePath;
        Object.defineProperty(f, 'path', {
            value: typeof path === 'string'
                ? path
                // If <input webkitdirectory> is set,
                // the File will have a {webkitRelativePath} property
                // https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/webkitdirectory
                : typeof webkitRelativePath === 'string' && webkitRelativePath.length > 0
                    ? webkitRelativePath
                    : file.name,
            writable: false,
            configurable: false,
            enumerable: true
        });
    }
    return f;
}
function withMimeType(file) {
    var name = file.name;
    var hasExtension = name && name.lastIndexOf('.') !== -1;
    if (hasExtension && !file.type) {
        var ext = name.split('.')
            .pop().toLowerCase();
        var type = COMMON_MIME_TYPES.get(ext);
        if (type) {
            Object.defineProperty(file, 'type', {
                value: type,
                writable: false,
                configurable: false,
                enumerable: true
            });
        }
    }
    return file;
}
//# sourceMappingURL=file.js.map
;// CONCATENATED MODULE: ./node_modules/file-selector/dist/es5/file-selector.js


var FILES_TO_IGNORE = [
    // Thumbnail cache files for macOS and Windows
    '.DS_Store',
    'Thumbs.db' // Windows
];
/**
 * Convert a DragEvent's DataTrasfer object to a list of File objects
 * NOTE: If some of the items are folders,
 * everything will be flattened and placed in the same list but the paths will be kept as a {path} property.
 * @param evt
 */
function fromEvent(evt) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, isDragEvt(evt) && evt.dataTransfer
                    ? getDataTransferFiles(evt.dataTransfer, evt.type)
                    : getInputFiles(evt)];
        });
    });
}
function isDragEvt(value) {
    return !!value.dataTransfer;
}
function getInputFiles(evt) {
    var files = isInput(evt.target)
        ? evt.target.files
            ? fromList(evt.target.files)
            : []
        : [];
    return files.map(function (file) { return toFileWithPath(file); });
}
function isInput(value) {
    return value !== null;
}
function getDataTransferFiles(dt, type) {
    return __awaiter(this, void 0, void 0, function () {
        var items, files;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!dt.items) return [3 /*break*/, 2];
                    items = fromList(dt.items)
                        .filter(function (item) { return item.kind === 'file'; });
                    // According to https://html.spec.whatwg.org/multipage/dnd.html#dndevents,
                    // only 'dragstart' and 'drop' has access to the data (source node)
                    if (type !== 'drop') {
                        return [2 /*return*/, items];
                    }
                    return [4 /*yield*/, Promise.all(items.map(toFilePromises))];
                case 1:
                    files = _a.sent();
                    return [2 /*return*/, noIgnoredFiles(flatten(files))];
                case 2: return [2 /*return*/, noIgnoredFiles(fromList(dt.files)
                        .map(function (file) { return toFileWithPath(file); }))];
            }
        });
    });
}
function noIgnoredFiles(files) {
    return files.filter(function (file) { return FILES_TO_IGNORE.indexOf(file.name) === -1; });
}
// IE11 does not support Array.from()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#Browser_compatibility
// https://developer.mozilla.org/en-US/docs/Web/API/FileList
// https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItemList
function fromList(items) {
    var files = [];
    // tslint:disable: prefer-for-of
    for (var i = 0; i < items.length; i++) {
        var file = items[i];
        files.push(file);
    }
    return files;
}
// https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItem
function toFilePromises(item) {
    if (typeof item.webkitGetAsEntry !== 'function') {
        return fromDataTransferItem(item);
    }
    var entry = item.webkitGetAsEntry();
    // Safari supports dropping an image node from a different window and can be retrieved using
    // the DataTransferItem.getAsFile() API
    // NOTE: FileSystemEntry.file() throws if trying to get the file
    if (entry && entry.isDirectory) {
        return fromDirEntry(entry);
    }
    return fromDataTransferItem(item);
}
function flatten(items) {
    return items.reduce(function (acc, files) { return __spread(acc, (Array.isArray(files) ? flatten(files) : [files])); }, []);
}
function fromDataTransferItem(item) {
    var file = item.getAsFile();
    if (!file) {
        return Promise.reject(item + " is not a File");
    }
    var fwp = toFileWithPath(file);
    return Promise.resolve(fwp);
}
// https://developer.mozilla.org/en-US/docs/Web/API/FileSystemEntry
function fromEntry(entry) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, entry.isDirectory ? fromDirEntry(entry) : fromFileEntry(entry)];
        });
    });
}
// https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryEntry
function fromDirEntry(entry) {
    var reader = entry.createReader();
    return new Promise(function (resolve, reject) {
        var entries = [];
        function readEntries() {
            var _this = this;
            // https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryEntry/createReader
            // https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryReader/readEntries
            reader.readEntries(function (batch) { return __awaiter(_this, void 0, void 0, function () {
                var files, err_1, items;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!!batch.length) return [3 /*break*/, 5];
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, Promise.all(entries)];
                        case 2:
                            files = _a.sent();
                            resolve(files);
                            return [3 /*break*/, 4];
                        case 3:
                            err_1 = _a.sent();
                            reject(err_1);
                            return [3 /*break*/, 4];
                        case 4: return [3 /*break*/, 6];
                        case 5:
                            items = Promise.all(batch.map(fromEntry));
                            entries.push(items);
                            // Continue reading
                            readEntries();
                            _a.label = 6;
                        case 6: return [2 /*return*/];
                    }
                });
            }); }, function (err) {
                reject(err);
            });
        }
        readEntries();
    });
}
// https://developer.mozilla.org/en-US/docs/Web/API/FileSystemFileEntry
function fromFileEntry(entry) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    entry.file(function (file) {
                        var fwp = toFileWithPath(file, entry.fullPath);
                        resolve(fwp);
                    }, function (err) {
                        reject(err);
                    });
                })];
        });
    });
}
//# sourceMappingURL=file-selector.js.map
;// CONCATENATED MODULE: ./node_modules/file-selector/dist/es5/index.js

//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/use-file-picker/dist/use-file-picker.esm.js



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
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

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      return function () {
        if (i >= o.length) return {
          done: true
        };
        return {
          done: false,
          value: o[i++]
        };
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  it = o[Symbol.iterator]();
  return it.next.bind(it);
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var runtime_1 = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined$1; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined$1) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined$1;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined$1;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined$1;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined$1, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined$1;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined$1;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined$1;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined$1;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined$1;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   module.exports 
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}
});

var BYTES_PER_MEGABYTE = 1000000;

var FileSizeValidator = /*#__PURE__*/function () {
  function FileSizeValidator() {}

  var _proto = FileSizeValidator.prototype;

  _proto.validateBeforeParsing = function validateBeforeParsing(config, plainFiles) {
    var minFileSize = config.minFileSize,
        maxFileSize = config.maxFileSize;

    for (var _iterator = _createForOfIteratorHelperLoose(plainFiles), _step; !(_step = _iterator()).done;) {
      var file = _step.value;

      if (minFileSize || maxFileSize) {
        return checkFileSize({
          minFileSize: minFileSize,
          maxFileSize: maxFileSize,
          fileSize: file.size
        });
      }
    }

    return Promise.resolve();
  };

  _proto.validateAfterParsing = /*#__PURE__*/function () {
    var _validateAfterParsing = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(_config, _file) {
      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", Promise.resolve());

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function validateAfterParsing(_x, _x2) {
      return _validateAfterParsing.apply(this, arguments);
    }

    return validateAfterParsing;
  }();

  return FileSizeValidator;
}();

var checkFileSize = function checkFileSize(_ref) {
  var fileSize = _ref.fileSize,
      maxFileSize = _ref.maxFileSize,
      minFileSize = _ref.minFileSize;
  return new Promise(function (resolve, reject) {
    if (minFileSize) {
      var minBytes = minFileSize * BYTES_PER_MEGABYTE;

      if (fileSize < minBytes) {
        reject({
          fileSizeTooSmall: true
        });
      }
    }

    if (maxFileSize) {
      var maxBytes = maxFileSize * BYTES_PER_MEGABYTE;

      if (fileSize > maxBytes) {
        reject({
          fileSizeToolarge: true
        });
      }
    }

    resolve();
  });
};

var FilesLimitValidator = /*#__PURE__*/function () {
  function FilesLimitValidator() {}

  var _proto = FilesLimitValidator.prototype;

  _proto.validateBeforeParsing = function validateBeforeParsing(config, plainFiles) {
    var limitFilesConfig = config.limitFilesConfig;

    if (limitFilesConfig) {
      if (limitFilesConfig.max && plainFiles.length > limitFilesConfig.max) {
        return Promise.reject({
          maxLimitExceeded: true
        });
      }

      if (limitFilesConfig.min && plainFiles.length < limitFilesConfig.min) {
        return Promise.reject({
          minLimitNotReached: true
        });
      }
    }

    return Promise.resolve();
  };

  _proto.validateAfterParsing = function validateAfterParsing() {
    return Promise.resolve();
  };

  return FilesLimitValidator;
}();

function openFileDialog(accept, multiple, callback) {
  // this function must be called from a user
  // activation event (ie an onclick event)
  // Create an input element
  var inputElement = document.createElement('input'); // Hide element and append to body (required to run on iOS safari)

  inputElement.style.display = 'none';
  document.body.appendChild(inputElement); // Set its type to file

  inputElement.type = 'file'; // Set accept to the file types you want the user to select.
  // Include both the file extension and the mime type

  inputElement.accept = accept; // Accept multiple files

  inputElement.multiple = multiple; // set onchange event to call callback when user has selected file
  //inputElement.addEventListener('change', callback);

  inputElement.addEventListener('change', function (arg) {
    callback(arg); // remove element

    document.body.removeChild(inputElement);
  }); // dispatch a click event to open the file dialog

  inputElement.dispatchEvent(new MouseEvent('click'));
}

var ImageDimensionsValidator = /*#__PURE__*/function () {
  function ImageDimensionsValidator() {}

  var _proto = ImageDimensionsValidator.prototype;

  _proto.validateBeforeParsing = function validateBeforeParsing() {
    return Promise.resolve();
  };

  _proto.validateAfterParsing = function validateAfterParsing(config, file, reader) {
    var readAs = config.readAs,
        imageSizeRestrictions = config.imageSizeRestrictions;

    if (readAs === 'DataURL' && imageSizeRestrictions && isImage(file.type)) {
      return checkImageDimensions(reader.result, imageSizeRestrictions);
    }

    return Promise.resolve();
  };

  return ImageDimensionsValidator;
}();

var isImage = function isImage(fileType) {
  return fileType.startsWith('image');
};

var checkImageDimensions = function checkImageDimensions(imgDataURL, imageSizeRestrictions) {
  return new Promise(function (resolve, reject) {
    var img = new Image();

    img.onload = function () {
      var maxHeight = imageSizeRestrictions.maxHeight,
          maxWidth = imageSizeRestrictions.maxWidth,
          minHeight = imageSizeRestrictions.minHeight,
          minWidth = imageSizeRestrictions.minWidth;
      var width = this.width,
          height = this.height;
      var errors = {};
      if (maxHeight && maxHeight < height) errors = _extends({}, errors, {
        imageHeightTooBig: true
      });
      if (minHeight && minHeight > height) errors = _extends({}, errors, {
        imageHeightTooSmall: true
      });
      if (maxWidth && maxWidth < width) errors = _extends({}, errors, {
        imageWidthTooBig: true
      });
      if (minWidth && minWidth > width) errors = _extends({}, errors, {
        imageWidthTooSmall: true
      });
      Object.keys(errors).length ? reject(errors) : resolve();
    };

    img.onerror = function () {
      reject({
        imageNotLoaded: true
      });
    };

    img.src = imgDataURL;
  });
};

var VALIDATORS = [/*#__PURE__*/new FileSizeValidator(), /*#__PURE__*/new FilesLimitValidator(), /*#__PURE__*/new ImageDimensionsValidator()];

function useFilePicker(_ref) {
  var _ref$accept = _ref.accept,
      accept = _ref$accept === void 0 ? '*' : _ref$accept,
      _ref$multiple = _ref.multiple,
      multiple = _ref$multiple === void 0 ? true : _ref$multiple,
      _ref$readAs = _ref.readAs,
      readAs = _ref$readAs === void 0 ? 'Text' : _ref$readAs,
      minFileSize = _ref.minFileSize,
      maxFileSize = _ref.maxFileSize,
      imageSizeRestrictions = _ref.imageSizeRestrictions,
      limitFilesConfig = _ref.limitFilesConfig,
      _ref$readFilesContent = _ref.readFilesContent,
      readFilesContent = _ref$readFilesContent === void 0 ? true : _ref$readFilesContent,
      _ref$validators = _ref.validators,
      validators = _ref$validators === void 0 ? [] : _ref$validators;

  var _useState = (0,react.useState)([]),
      files = _useState[0],
      setFiles = _useState[1];

  var _useState2 = (0,react.useState)([]),
      filesContent = _useState2[0],
      setFilesContent = _useState2[1];

  var _useState3 = (0,react.useState)([]),
      fileErrors = _useState3[0],
      setFileErrors = _useState3[1];

  var _useState4 = (0,react.useState)(false),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var _useState5 = (0,react.useState)([]),
      plainFiles = _useState5[0],
      setPlainFiles = _useState5[1];

  var plainFileObjectsRef = (0,react.useRef)([]);

  var openFileSelector = function openFileSelector() {
    var fileExtensions = accept instanceof Array ? accept.join(',') : accept;
    openFileDialog(fileExtensions, multiple, function (evt) {
      clear();
      var inputElement = evt.target;
      plainFileObjectsRef.current = inputElement.files ? Array.from(inputElement.files) : [];
      var validations = VALIDATORS.concat(validators).map(function (validator) {
        return validator.validateBeforeParsing({
          accept: accept,
          multiple: multiple,
          readAs: readAs,
          minFileSize: minFileSize,
          maxFileSize: maxFileSize,
          imageSizeRestrictions: imageSizeRestrictions,
          limitFilesConfig: limitFilesConfig,
          readFilesContent: readFilesContent
        }, plainFileObjectsRef.current)["catch"](function (err) {
          return Promise.reject(setFileErrors(function (f) {
            return [_extends({}, err, f)];
          }));
        });
      });
      Promise.all(validations).then(function () {
        if (!readFilesContent) {
          setPlainFiles(plainFileObjectsRef.current);
          return;
        }

        fromEvent(evt).then(function (files) {
          setFiles(files);
        });
      })["catch"](function () {});
    });
  };

  var clear = function clear() {
    setPlainFiles([]);
    setFiles([]);
    setFilesContent([]);
    setFileErrors([]);
  };

  (0,react.useEffect)(function () {
    if (files.length === 0) {
      setFilesContent([]);
      return;
    }

    setLoading(true);
    var fileParsingPromises = files.map(function (file) {
      return new Promise( /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2(resolve, reject) {
          var reader, readStrategy, addError;
          return runtime_1.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  reader = new FileReader(); //availible reader methods: readAsText, readAsBinaryString, readAsArrayBuffer, readAsDataURL

                  readStrategy = reader["readAs" + readAs];
                  readStrategy.call(reader, file);

                  addError = function addError(_ref3) {
                    var _ref3$name = _ref3.name,
                        name = _ref3$name === void 0 ? file.name : _ref3$name,
                        others = _objectWithoutPropertiesLoose(_ref3, ["name"]);

                    reject(_extends({
                      name: name,
                      fileSizeToolarge: false,
                      fileSizeTooSmall: false
                    }, others));
                  };

                  reader.onload = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee() {
                    var validations;
                    return runtime_1.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            validations = VALIDATORS.concat(validators).map(function (validator) {
                              return validator.validateAfterParsing({
                                accept: accept,
                                multiple: multiple,
                                readAs: readAs,
                                minFileSize: minFileSize,
                                maxFileSize: maxFileSize,
                                imageSizeRestrictions: imageSizeRestrictions,
                                limitFilesConfig: limitFilesConfig,
                                readFilesContent: readFilesContent
                              }, file, reader)["catch"](function (err) {
                                return Promise.reject(addError(err));
                              });
                            });
                            Promise.all(validations).then(function () {
                              return resolve({
                                content: reader.result,
                                name: file.name,
                                lastModified: file.lastModified
                              });
                            })["catch"](function () {});

                          case 2:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));

                  reader.onerror = function () {
                    addError({
                      readerError: reader.error
                    });
                  };

                case 6:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function (_x, _x2) {
          return _ref2.apply(this, arguments);
        };
      }());
    });
    Promise.all(fileParsingPromises).then(function (fileContent) {
      setFilesContent(fileContent);
      setPlainFiles(plainFileObjectsRef.current);
      setFileErrors([]);
    })["catch"](function (err) {
      setFileErrors(function (f) {
        return [err].concat(f);
      });
    })["finally"](function () {
      return setLoading(false);
    }); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [files]);
  return [openFileSelector, {
    filesContent: filesContent,
    errors: fileErrors,
    loading: loading,
    plainFiles: plainFiles,
    clear: clear
  }];
}


//# sourceMappingURL=use-file-picker.esm.js.map


/***/ })

}]);