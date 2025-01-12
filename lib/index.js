var __create = Object.create;
var __defProp = Object.defineProperty, __defProps = Object.defineProperties, __getOwnPropDesc = Object.getOwnPropertyDescriptor, __getOwnPropDescs = Object.getOwnPropertyDescriptors, __getOwnPropNames = Object.getOwnPropertyNames, __getOwnPropSymbols = Object.getOwnPropertySymbols, __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty, __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: !0, configurable: !0, writable: !0, value }) : obj[key] = value, __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    __hasOwnProp.call(b, prop) && __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b))
      __propIsEnum.call(b, prop) && __defNormalProp(a, prop, b[prop]);
  return a;
}, __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target, mod));

// node_modules/lodash.shuffle/index.js
var require_lodash = __commonJS({
  "node_modules/lodash.shuffle/index.js"(exports2, module2) {
    var INFINITY = 1 / 0, MAX_SAFE_INTEGER = 9007199254740991, MAX_INTEGER = 17976931348623157e292, NAN = 0 / 0, MAX_ARRAY_LENGTH = 4294967295, argsTag = "[object Arguments]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", objectTag = "[object Object]", promiseTag = "[object Promise]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", weakMapTag = "[object WeakMap]", dataViewTag = "[object DataView]", reRegExpChar = /[\\^$.*+?()[\]{}|]/g, reTrim = /^\s+|\s+$/g, reIsBadHex = /^[-+]0x[0-9a-f]+$/i, reIsBinary = /^0b[01]+$/i, reIsHostCtor = /^\[object .+?Constructor\]$/, reIsOctal = /^0o[0-7]+$/i, reIsUint = /^(?:0|[1-9]\d*)$/, rsAstralRange = "\\ud800-\\udfff", rsComboMarksRange = "\\u0300-\\u036f\\ufe20-\\ufe23", rsComboSymbolsRange = "\\u20d0-\\u20f0", rsVarRange = "\\ufe0e\\ufe0f", rsAstral = "[" + rsAstralRange + "]", rsCombo = "[" + rsComboMarksRange + rsComboSymbolsRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsZWJ = "\\u200d", reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")", reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g"), reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboMarksRange + rsComboSymbolsRange + rsVarRange + "]"), freeParseInt = parseInt, freeGlobal = typeof global == "object" && global && global.Object === Object && global, freeSelf = typeof self == "object" && self && self.Object === Object && self, root = freeGlobal || freeSelf || Function("return this")();
    function arrayMap(array, iteratee) {
      for (var index = -1, length = array ? array.length : 0, result = Array(length); ++index < length; )
        result[index] = iteratee(array[index], index, array);
      return result;
    }
    function asciiToArray(string) {
      return string.split("");
    }
    function baseTimes(n, iteratee) {
      for (var index = -1, result = Array(n); ++index < n; )
        result[index] = iteratee(index);
      return result;
    }
    function baseValues(object2, props) {
      return arrayMap(props, function(key) {
        return object2[key];
      });
    }
    function getValue(object2, key) {
      return object2 == null ? void 0 : object2[key];
    }
    function hasUnicode(string) {
      return reHasUnicode.test(string);
    }
    function isHostObject(value) {
      var result = !1;
      if (value != null && typeof value.toString != "function")
        try {
          result = !!(value + "");
        } catch {
        }
      return result;
    }
    function iteratorToArray(iterator) {
      for (var data, result = []; !(data = iterator.next()).done; )
        result.push(data.value);
      return result;
    }
    function mapToArray(map) {
      var index = -1, result = Array(map.size);
      return map.forEach(function(value, key) {
        result[++index] = [key, value];
      }), result;
    }
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    function setToArray(set2) {
      var index = -1, result = Array(set2.size);
      return set2.forEach(function(value) {
        result[++index] = value;
      }), result;
    }
    function stringToArray(string) {
      return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
    }
    function unicodeToArray(string) {
      return string.match(reUnicode) || [];
    }
    var funcProto = Function.prototype, objectProto = Object.prototype, coreJsData = root["__core-js_shared__"], maskSrcKey = function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
      return uid ? "Symbol(src)_1." + uid : "";
    }(), funcToString = funcProto.toString, hasOwnProperty = objectProto.hasOwnProperty, objectToString = objectProto.toString, reIsNative = RegExp("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), Symbol2 = root.Symbol, iteratorSymbol = Symbol2 ? Symbol2.iterator : void 0, propertyIsEnumerable = objectProto.propertyIsEnumerable, nativeFloor = Math.floor, nativeKeys = overArg(Object.keys, Object), nativeRandom = Math.random, DataView = getNative(root, "DataView"), Map2 = getNative(root, "Map"), Promise2 = getNative(root, "Promise"), Set2 = getNative(root, "Set"), WeakMap = getNative(root, "WeakMap"), dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map2), promiseCtorString = toSource(Promise2), setCtorString = toSource(Set2), weakMapCtorString = toSource(WeakMap);
    function arrayLikeKeys(value, inherited) {
      var result = isArray(value) || isArguments(value) ? baseTimes(value.length, String) : [], length = result.length, skipIndexes = !!length;
      for (var key in value)
        (inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == "length" || isIndex(key, length))) && result.push(key);
      return result;
    }
    function baseClamp(number, lower, upper) {
      return number === number && (upper !== void 0 && (number = number <= upper ? number : upper), lower !== void 0 && (number = number >= lower ? number : lower)), number;
    }
    function baseGetTag(value) {
      return objectToString.call(value);
    }
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value))
        return !1;
      var pattern2 = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
      return pattern2.test(toSource(value));
    }
    function baseKeys(object2) {
      if (!isPrototype(object2))
        return nativeKeys(object2);
      var result = [];
      for (var key in Object(object2))
        hasOwnProperty.call(object2, key) && key != "constructor" && result.push(key);
      return result;
    }
    function baseRandom(lower, upper) {
      return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
    }
    function copyArray(source, array) {
      var index = -1, length = source.length;
      for (array || (array = Array(length)); ++index < length; )
        array[index] = source[index];
      return array;
    }
    function getNative(object2, key) {
      var value = getValue(object2, key);
      return baseIsNative(value) ? value : void 0;
    }
    var getTag = baseGetTag;
    (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) && (getTag = function(value) {
      var result = objectToString.call(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : void 0;
      if (ctorString)
        switch (ctorString) {
          case dataViewCtorString:
            return dataViewTag;
          case mapCtorString:
            return mapTag;
          case promiseCtorString:
            return promiseTag;
          case setCtorString:
            return setTag;
          case weakMapCtorString:
            return weakMapTag;
        }
      return result;
    });
    function isIndex(value, length) {
      return length = length == null ? MAX_SAFE_INTEGER : length, !!length && (typeof value == "number" || reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
    }
    function isIterateeCall(value, index, object2) {
      if (!isObject(object2))
        return !1;
      var type2 = typeof index;
      return (type2 == "number" ? isArrayLike(object2) && isIndex(index, object2.length) : type2 == "string" && index in object2) ? eq(object2[index], value) : !1;
    }
    function isMasked(func) {
      return !!maskSrcKey && maskSrcKey in func;
    }
    function isPrototype(value) {
      var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
      return value === proto;
    }
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch {
        }
        try {
          return func + "";
        } catch {
        }
      }
      return "";
    }
    function sampleSize(collection, n, guard) {
      var index = -1, result = toArray(collection), length = result.length, lastIndex = length - 1;
      for ((guard ? isIterateeCall(collection, n, guard) : n === void 0) ? n = 1 : n = baseClamp(toInteger(n), 0, length); ++index < n; ) {
        var rand = baseRandom(index, lastIndex), value = result[rand];
        result[rand] = result[index], result[index] = value;
      }
      return result.length = n, result;
    }
    function shuffle5(collection) {
      return sampleSize(collection, MAX_ARRAY_LENGTH);
    }
    function eq(value, other) {
      return value === other || value !== value && other !== other;
    }
    function isArguments(value) {
      return isArrayLikeObject(value) && hasOwnProperty.call(value, "callee") && (!propertyIsEnumerable.call(value, "callee") || objectToString.call(value) == argsTag);
    }
    var isArray = Array.isArray;
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }
    function isArrayLikeObject(value) {
      return isObjectLike(value) && isArrayLike(value);
    }
    function isFunction(value) {
      var tag = isObject(value) ? objectToString.call(value) : "";
      return tag == funcTag || tag == genTag;
    }
    function isLength(value) {
      return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }
    function isObject(value) {
      var type2 = typeof value;
      return !!value && (type2 == "object" || type2 == "function");
    }
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    function isString2(value) {
      return typeof value == "string" || !isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag;
    }
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
    }
    function toArray(value) {
      if (!value)
        return [];
      if (isArrayLike(value))
        return isString2(value) ? stringToArray(value) : copyArray(value);
      if (iteratorSymbol && value[iteratorSymbol])
        return iteratorToArray(value[iteratorSymbol]());
      var tag = getTag(value), func = tag == mapTag ? mapToArray : tag == setTag ? setToArray : values;
      return func(value);
    }
    function toFinite(value) {
      if (!value)
        return value === 0 ? value : 0;
      if (value = toNumber(value), value === INFINITY || value === -INFINITY) {
        var sign = value < 0 ? -1 : 1;
        return sign * MAX_INTEGER;
      }
      return value === value ? value : 0;
    }
    function toInteger(value) {
      var result = toFinite(value), remainder = result % 1;
      return result === result ? remainder ? result - remainder : result : 0;
    }
    function toNumber(value) {
      if (typeof value == "number")
        return value;
      if (isSymbol(value))
        return NAN;
      if (isObject(value)) {
        var other = typeof value.valueOf == "function" ? value.valueOf() : value;
        value = isObject(other) ? other + "" : other;
      }
      if (typeof value != "string")
        return value === 0 ? value : +value;
      value = value.replace(reTrim, "");
      var isBinary = reIsBinary.test(value);
      return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
    }
    function keys2(object2) {
      return isArrayLike(object2) ? arrayLikeKeys(object2) : baseKeys(object2);
    }
    function values(object2) {
      return object2 ? baseValues(object2, keys2(object2)) : [];
    }
    module2.exports = shuffle5;
  }
});

// node_modules/lodash.isplainobject/index.js
var require_lodash2 = __commonJS({
  "node_modules/lodash.isplainobject/index.js"(exports2, module2) {
    var objectTag = "[object Object]";
    function isHostObject(value) {
      var result = !1;
      if (value != null && typeof value.toString != "function")
        try {
          result = !!(value + "");
        } catch {
        }
      return result;
    }
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    var funcProto = Function.prototype, objectProto = Object.prototype, funcToString = funcProto.toString, hasOwnProperty = objectProto.hasOwnProperty, objectCtorString = funcToString.call(Object), objectToString = objectProto.toString, getPrototype = overArg(Object.getPrototypeOf, Object);
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    function isPlainObject2(value) {
      if (!isObjectLike(value) || objectToString.call(value) != objectTag || isHostObject(value))
        return !1;
      var proto = getPrototype(value);
      if (proto === null)
        return !0;
      var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
      return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
    }
    module2.exports = isPlainObject2;
  }
});

// node_modules/lodash.intersectionby/index.js
var require_lodash3 = __commonJS({
  "node_modules/lodash.intersectionby/index.js"(exports2, module2) {
    var LARGE_ARRAY_SIZE = 200, FUNC_ERROR_TEXT = "Expected a function", HASH_UNDEFINED = "__lodash_hash_undefined__", UNORDERED_COMPARE_FLAG = 1, PARTIAL_COMPARE_FLAG = 2, INFINITY = 1 / 0, MAX_SAFE_INTEGER = 9007199254740991, argsTag = "[object Arguments]", arrayTag = "[object Array]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", objectTag = "[object Object]", promiseTag = "[object Promise]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", weakMapTag = "[object WeakMap]", arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]", reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/, reLeadingDot = /^\./, rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, reRegExpChar = /[\\^$.*+?()[\]{}|]/g, reEscapeChar = /\\(\\)?/g, reIsHostCtor = /^\[object .+?Constructor\]$/, reIsUint = /^(?:0|[1-9]\d*)$/, typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = !0;
    typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = !1;
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global, freeSelf = typeof self == "object" && self && self.Object === Object && self, root = freeGlobal || freeSelf || Function("return this")(), freeExports = typeof exports2 == "object" && exports2 && !exports2.nodeType && exports2, freeModule = freeExports && typeof module2 == "object" && module2 && !module2.nodeType && module2, moduleExports = freeModule && freeModule.exports === freeExports, freeProcess = moduleExports && freeGlobal.process, nodeUtil = function() {
      try {
        return freeProcess && freeProcess.binding("util");
      } catch {
      }
    }(), nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
    function apply(func, thisArg, args) {
      switch (args.length) {
        case 0:
          return func.call(thisArg);
        case 1:
          return func.call(thisArg, args[0]);
        case 2:
          return func.call(thisArg, args[0], args[1]);
        case 3:
          return func.call(thisArg, args[0], args[1], args[2]);
      }
      return func.apply(thisArg, args);
    }
    function arrayIncludes(array, value) {
      var length = array ? array.length : 0;
      return !!length && baseIndexOf(array, value, 0) > -1;
    }
    function arrayIncludesWith(array, value, comparator) {
      for (var index = -1, length = array ? array.length : 0; ++index < length; )
        if (comparator(value, array[index]))
          return !0;
      return !1;
    }
    function arrayMap(array, iteratee) {
      for (var index = -1, length = array ? array.length : 0, result = Array(length); ++index < length; )
        result[index] = iteratee(array[index], index, array);
      return result;
    }
    function arraySome(array, predicate) {
      for (var index = -1, length = array ? array.length : 0; ++index < length; )
        if (predicate(array[index], index, array))
          return !0;
      return !1;
    }
    function baseFindIndex(array, predicate, fromIndex, fromRight) {
      for (var length = array.length, index = fromIndex + (fromRight ? 1 : -1); fromRight ? index-- : ++index < length; )
        if (predicate(array[index], index, array))
          return index;
      return -1;
    }
    function baseIndexOf(array, value, fromIndex) {
      if (value !== value)
        return baseFindIndex(array, baseIsNaN, fromIndex);
      for (var index = fromIndex - 1, length = array.length; ++index < length; )
        if (array[index] === value)
          return index;
      return -1;
    }
    function baseIsNaN(value) {
      return value !== value;
    }
    function baseProperty(key) {
      return function(object2) {
        return object2 == null ? void 0 : object2[key];
      };
    }
    function baseTimes(n, iteratee) {
      for (var index = -1, result = Array(n); ++index < n; )
        result[index] = iteratee(index);
      return result;
    }
    function baseUnary(func) {
      return function(value) {
        return func(value);
      };
    }
    function cacheHas(cache, key) {
      return cache.has(key);
    }
    function getValue(object2, key) {
      return object2 == null ? void 0 : object2[key];
    }
    function isHostObject(value) {
      var result = !1;
      if (value != null && typeof value.toString != "function")
        try {
          result = !!(value + "");
        } catch {
        }
      return result;
    }
    function mapToArray(map) {
      var index = -1, result = Array(map.size);
      return map.forEach(function(value, key) {
        result[++index] = [key, value];
      }), result;
    }
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    function setToArray(set2) {
      var index = -1, result = Array(set2.size);
      return set2.forEach(function(value) {
        result[++index] = value;
      }), result;
    }
    var arrayProto = Array.prototype, funcProto = Function.prototype, objectProto = Object.prototype, coreJsData = root["__core-js_shared__"], maskSrcKey = function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
      return uid ? "Symbol(src)_1." + uid : "";
    }(), funcToString = funcProto.toString, hasOwnProperty = objectProto.hasOwnProperty, objectToString = objectProto.toString, reIsNative = RegExp("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), Symbol2 = root.Symbol, Uint8Array2 = root.Uint8Array, propertyIsEnumerable = objectProto.propertyIsEnumerable, splice = arrayProto.splice, nativeKeys = overArg(Object.keys, Object), nativeMax = Math.max, nativeMin = Math.min, DataView = getNative(root, "DataView"), Map2 = getNative(root, "Map"), Promise2 = getNative(root, "Promise"), Set2 = getNative(root, "Set"), WeakMap = getNative(root, "WeakMap"), nativeCreate = getNative(Object, "create"), dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map2), promiseCtorString = toSource(Promise2), setCtorString = toSource(Set2), weakMapCtorString = toSource(WeakMap), symbolProto = Symbol2 ? Symbol2.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0, symbolToString = symbolProto ? symbolProto.toString : void 0;
    function Hash(entries) {
      var index = -1, length = entries ? entries.length : 0;
      for (this.clear(); ++index < length; ) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
    }
    function hashDelete(key) {
      return this.has(key) && delete this.__data__[key];
    }
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? void 0 : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : void 0;
    }
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
    }
    function hashSet(key, value) {
      var data = this.__data__;
      return data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value, this;
    }
    Hash.prototype.clear = hashClear;
    Hash.prototype.delete = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;
    function ListCache(entries) {
      var index = -1, length = entries ? entries.length : 0;
      for (this.clear(); ++index < length; ) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function listCacheClear() {
      this.__data__ = [];
    }
    function listCacheDelete(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0)
        return !1;
      var lastIndex = data.length - 1;
      return index == lastIndex ? data.pop() : splice.call(data, index, 1), !0;
    }
    function listCacheGet(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      return index < 0 ? void 0 : data[index][1];
    }
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }
    function listCacheSet(key, value) {
      var data = this.__data__, index = assocIndexOf(data, key);
      return index < 0 ? data.push([key, value]) : data[index][1] = value, this;
    }
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype.delete = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;
    function MapCache(entries) {
      var index = -1, length = entries ? entries.length : 0;
      for (this.clear(); ++index < length; ) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function mapCacheClear() {
      this.__data__ = {
        hash: new Hash(),
        map: new (Map2 || ListCache)(),
        string: new Hash()
      };
    }
    function mapCacheDelete(key) {
      return getMapData(this, key).delete(key);
    }
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }
    function mapCacheSet(key, value) {
      return getMapData(this, key).set(key, value), this;
    }
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype.delete = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;
    function SetCache(values) {
      var index = -1, length = values ? values.length : 0;
      for (this.__data__ = new MapCache(); ++index < length; )
        this.add(values[index]);
    }
    function setCacheAdd(value) {
      return this.__data__.set(value, HASH_UNDEFINED), this;
    }
    function setCacheHas(value) {
      return this.__data__.has(value);
    }
    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
    SetCache.prototype.has = setCacheHas;
    function Stack(entries) {
      this.__data__ = new ListCache(entries);
    }
    function stackClear() {
      this.__data__ = new ListCache();
    }
    function stackDelete(key) {
      return this.__data__.delete(key);
    }
    function stackGet(key) {
      return this.__data__.get(key);
    }
    function stackHas(key) {
      return this.__data__.has(key);
    }
    function stackSet(key, value) {
      var cache = this.__data__;
      if (cache instanceof ListCache) {
        var pairs = cache.__data__;
        if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1)
          return pairs.push([key, value]), this;
        cache = this.__data__ = new MapCache(pairs);
      }
      return cache.set(key, value), this;
    }
    Stack.prototype.clear = stackClear;
    Stack.prototype.delete = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;
    function arrayLikeKeys(value, inherited) {
      var result = isArray(value) || isArguments(value) ? baseTimes(value.length, String) : [], length = result.length, skipIndexes = !!length;
      for (var key in value)
        (inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == "length" || isIndex(key, length))) && result.push(key);
      return result;
    }
    function assocIndexOf(array, key) {
      for (var length = array.length; length--; )
        if (eq(array[length][0], key))
          return length;
      return -1;
    }
    function baseGet(object2, path) {
      path = isKey(path, object2) ? [path] : castPath(path);
      for (var index = 0, length = path.length; object2 != null && index < length; )
        object2 = object2[toKey(path[index++])];
      return index && index == length ? object2 : void 0;
    }
    function baseGetTag(value) {
      return objectToString.call(value);
    }
    function baseHasIn(object2, key) {
      return object2 != null && key in Object(object2);
    }
    function baseIntersection(arrays, iteratee, comparator) {
      for (var includes = comparator ? arrayIncludesWith : arrayIncludes, length = arrays[0].length, othLength = arrays.length, othIndex = othLength, caches = Array(othLength), maxLength = 1 / 0, result = []; othIndex--; ) {
        var array = arrays[othIndex];
        othIndex && iteratee && (array = arrayMap(array, baseUnary(iteratee))), maxLength = nativeMin(array.length, maxLength), caches[othIndex] = !comparator && (iteratee || length >= 120 && array.length >= 120) ? new SetCache(othIndex && array) : void 0;
      }
      array = arrays[0];
      var index = -1, seen = caches[0];
      outer:
        for (; ++index < length && result.length < maxLength; ) {
          var value = array[index], computed = iteratee ? iteratee(value) : value;
          if (value = comparator || value !== 0 ? value : 0, !(seen ? cacheHas(seen, computed) : includes(result, computed, comparator))) {
            for (othIndex = othLength; --othIndex; ) {
              var cache = caches[othIndex];
              if (!(cache ? cacheHas(cache, computed) : includes(arrays[othIndex], computed, comparator)))
                continue outer;
            }
            seen && seen.push(computed), result.push(value);
          }
        }
      return result;
    }
    function baseIsEqual(value, other, customizer, bitmask, stack) {
      return value === other ? !0 : value == null || other == null || !isObject(value) && !isObjectLike(other) ? value !== value && other !== other : baseIsEqualDeep(value, other, baseIsEqual, customizer, bitmask, stack);
    }
    function baseIsEqualDeep(object2, other, equalFunc, customizer, bitmask, stack) {
      var objIsArr = isArray(object2), othIsArr = isArray(other), objTag = arrayTag, othTag = arrayTag;
      objIsArr || (objTag = getTag(object2), objTag = objTag == argsTag ? objectTag : objTag), othIsArr || (othTag = getTag(other), othTag = othTag == argsTag ? objectTag : othTag);
      var objIsObj = objTag == objectTag && !isHostObject(object2), othIsObj = othTag == objectTag && !isHostObject(other), isSameTag = objTag == othTag;
      if (isSameTag && !objIsObj)
        return stack || (stack = new Stack()), objIsArr || isTypedArray(object2) ? equalArrays(object2, other, equalFunc, customizer, bitmask, stack) : equalByTag(object2, other, objTag, equalFunc, customizer, bitmask, stack);
      if (!(bitmask & PARTIAL_COMPARE_FLAG)) {
        var objIsWrapped = objIsObj && hasOwnProperty.call(object2, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
        if (objIsWrapped || othIsWrapped) {
          var objUnwrapped = objIsWrapped ? object2.value() : object2, othUnwrapped = othIsWrapped ? other.value() : other;
          return stack || (stack = new Stack()), equalFunc(objUnwrapped, othUnwrapped, customizer, bitmask, stack);
        }
      }
      return isSameTag ? (stack || (stack = new Stack()), equalObjects(object2, other, equalFunc, customizer, bitmask, stack)) : !1;
    }
    function baseIsMatch(object2, source, matchData, customizer) {
      var index = matchData.length, length = index, noCustomizer = !customizer;
      if (object2 == null)
        return !length;
      for (object2 = Object(object2); index--; ) {
        var data = matchData[index];
        if (noCustomizer && data[2] ? data[1] !== object2[data[0]] : !(data[0] in object2))
          return !1;
      }
      for (; ++index < length; ) {
        data = matchData[index];
        var key = data[0], objValue = object2[key], srcValue = data[1];
        if (noCustomizer && data[2]) {
          if (objValue === void 0 && !(key in object2))
            return !1;
        } else {
          var stack = new Stack();
          if (customizer)
            var result = customizer(objValue, srcValue, key, object2, source, stack);
          if (!(result === void 0 ? baseIsEqual(srcValue, objValue, customizer, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG, stack) : result))
            return !1;
        }
      }
      return !0;
    }
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value))
        return !1;
      var pattern2 = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
      return pattern2.test(toSource(value));
    }
    function baseIsTypedArray(value) {
      return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
    }
    function baseIteratee(value) {
      return typeof value == "function" ? value : value == null ? identity : typeof value == "object" ? isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value) : property(value);
    }
    function baseKeys(object2) {
      if (!isPrototype(object2))
        return nativeKeys(object2);
      var result = [];
      for (var key in Object(object2))
        hasOwnProperty.call(object2, key) && key != "constructor" && result.push(key);
      return result;
    }
    function baseMatches(source) {
      var matchData = getMatchData(source);
      return matchData.length == 1 && matchData[0][2] ? matchesStrictComparable(matchData[0][0], matchData[0][1]) : function(object2) {
        return object2 === source || baseIsMatch(object2, source, matchData);
      };
    }
    function baseMatchesProperty(path, srcValue) {
      return isKey(path) && isStrictComparable(srcValue) ? matchesStrictComparable(toKey(path), srcValue) : function(object2) {
        var objValue = get2(object2, path);
        return objValue === void 0 && objValue === srcValue ? hasIn(object2, path) : baseIsEqual(srcValue, objValue, void 0, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG);
      };
    }
    function basePropertyDeep(path) {
      return function(object2) {
        return baseGet(object2, path);
      };
    }
    function baseRest(func, start) {
      return start = nativeMax(start === void 0 ? func.length - 1 : start, 0), function() {
        for (var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length); ++index < length; )
          array[index] = args[start + index];
        index = -1;
        for (var otherArgs = Array(start + 1); ++index < start; )
          otherArgs[index] = args[index];
        return otherArgs[start] = array, apply(func, this, otherArgs);
      };
    }
    function baseToString(value) {
      if (typeof value == "string")
        return value;
      if (isSymbol(value))
        return symbolToString ? symbolToString.call(value) : "";
      var result = value + "";
      return result == "0" && 1 / value == -INFINITY ? "-0" : result;
    }
    function castArrayLikeObject(value) {
      return isArrayLikeObject(value) ? value : [];
    }
    function castPath(value) {
      return isArray(value) ? value : stringToPath(value);
    }
    function equalArrays(array, other, equalFunc, customizer, bitmask, stack) {
      var isPartial = bitmask & PARTIAL_COMPARE_FLAG, arrLength = array.length, othLength = other.length;
      if (arrLength != othLength && !(isPartial && othLength > arrLength))
        return !1;
      var stacked = stack.get(array);
      if (stacked && stack.get(other))
        return stacked == other;
      var index = -1, result = !0, seen = bitmask & UNORDERED_COMPARE_FLAG ? new SetCache() : void 0;
      for (stack.set(array, other), stack.set(other, array); ++index < arrLength; ) {
        var arrValue = array[index], othValue = other[index];
        if (customizer)
          var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
        if (compared !== void 0) {
          if (compared)
            continue;
          result = !1;
          break;
        }
        if (seen) {
          if (!arraySome(other, function(othValue2, othIndex) {
            if (!seen.has(othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, customizer, bitmask, stack)))
              return seen.add(othIndex);
          })) {
            result = !1;
            break;
          }
        } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
          result = !1;
          break;
        }
      }
      return stack.delete(array), stack.delete(other), result;
    }
    function equalByTag(object2, other, tag, equalFunc, customizer, bitmask, stack) {
      switch (tag) {
        case dataViewTag:
          if (object2.byteLength != other.byteLength || object2.byteOffset != other.byteOffset)
            return !1;
          object2 = object2.buffer, other = other.buffer;
        case arrayBufferTag:
          return !(object2.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object2), new Uint8Array2(other)));
        case boolTag:
        case dateTag:
        case numberTag:
          return eq(+object2, +other);
        case errorTag:
          return object2.name == other.name && object2.message == other.message;
        case regexpTag:
        case stringTag:
          return object2 == other + "";
        case mapTag:
          var convert = mapToArray;
        case setTag:
          var isPartial = bitmask & PARTIAL_COMPARE_FLAG;
          if (convert || (convert = setToArray), object2.size != other.size && !isPartial)
            return !1;
          var stacked = stack.get(object2);
          if (stacked)
            return stacked == other;
          bitmask |= UNORDERED_COMPARE_FLAG, stack.set(object2, other);
          var result = equalArrays(convert(object2), convert(other), equalFunc, customizer, bitmask, stack);
          return stack.delete(object2), result;
        case symbolTag:
          if (symbolValueOf)
            return symbolValueOf.call(object2) == symbolValueOf.call(other);
      }
      return !1;
    }
    function equalObjects(object2, other, equalFunc, customizer, bitmask, stack) {
      var isPartial = bitmask & PARTIAL_COMPARE_FLAG, objProps = keys2(object2), objLength = objProps.length, othProps = keys2(other), othLength = othProps.length;
      if (objLength != othLength && !isPartial)
        return !1;
      for (var index = objLength; index--; ) {
        var key = objProps[index];
        if (!(isPartial ? key in other : hasOwnProperty.call(other, key)))
          return !1;
      }
      var stacked = stack.get(object2);
      if (stacked && stack.get(other))
        return stacked == other;
      var result = !0;
      stack.set(object2, other), stack.set(other, object2);
      for (var skipCtor = isPartial; ++index < objLength; ) {
        key = objProps[index];
        var objValue = object2[key], othValue = other[key];
        if (customizer)
          var compared = isPartial ? customizer(othValue, objValue, key, other, object2, stack) : customizer(objValue, othValue, key, object2, other, stack);
        if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack) : compared)) {
          result = !1;
          break;
        }
        skipCtor || (skipCtor = key == "constructor");
      }
      if (result && !skipCtor) {
        var objCtor = object2.constructor, othCtor = other.constructor;
        objCtor != othCtor && "constructor" in object2 && "constructor" in other && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor) && (result = !1);
      }
      return stack.delete(object2), stack.delete(other), result;
    }
    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
    }
    function getMatchData(object2) {
      for (var result = keys2(object2), length = result.length; length--; ) {
        var key = result[length], value = object2[key];
        result[length] = [key, value, isStrictComparable(value)];
      }
      return result;
    }
    function getNative(object2, key) {
      var value = getValue(object2, key);
      return baseIsNative(value) ? value : void 0;
    }
    var getTag = baseGetTag;
    (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) && (getTag = function(value) {
      var result = objectToString.call(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : void 0;
      if (ctorString)
        switch (ctorString) {
          case dataViewCtorString:
            return dataViewTag;
          case mapCtorString:
            return mapTag;
          case promiseCtorString:
            return promiseTag;
          case setCtorString:
            return setTag;
          case weakMapCtorString:
            return weakMapTag;
        }
      return result;
    });
    function hasPath(object2, path, hasFunc) {
      path = isKey(path, object2) ? [path] : castPath(path);
      for (var result, index = -1, length = path.length; ++index < length; ) {
        var key = toKey(path[index]);
        if (!(result = object2 != null && hasFunc(object2, key)))
          break;
        object2 = object2[key];
      }
      if (result)
        return result;
      var length = object2 ? object2.length : 0;
      return !!length && isLength(length) && isIndex(key, length) && (isArray(object2) || isArguments(object2));
    }
    function isIndex(value, length) {
      return length = length == null ? MAX_SAFE_INTEGER : length, !!length && (typeof value == "number" || reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
    }
    function isKey(value, object2) {
      if (isArray(value))
        return !1;
      var type2 = typeof value;
      return type2 == "number" || type2 == "symbol" || type2 == "boolean" || value == null || isSymbol(value) ? !0 : reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object2 != null && value in Object(object2);
    }
    function isKeyable(value) {
      var type2 = typeof value;
      return type2 == "string" || type2 == "number" || type2 == "symbol" || type2 == "boolean" ? value !== "__proto__" : value === null;
    }
    function isMasked(func) {
      return !!maskSrcKey && maskSrcKey in func;
    }
    function isPrototype(value) {
      var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
      return value === proto;
    }
    function isStrictComparable(value) {
      return value === value && !isObject(value);
    }
    function matchesStrictComparable(key, srcValue) {
      return function(object2) {
        return object2 == null ? !1 : object2[key] === srcValue && (srcValue !== void 0 || key in Object(object2));
      };
    }
    var stringToPath = memoize(function(string) {
      string = toString(string);
      var result = [];
      return reLeadingDot.test(string) && result.push(""), string.replace(rePropName, function(match, number, quote, string2) {
        result.push(quote ? string2.replace(reEscapeChar, "$1") : number || match);
      }), result;
    });
    function toKey(value) {
      if (typeof value == "string" || isSymbol(value))
        return value;
      var result = value + "";
      return result == "0" && 1 / value == -INFINITY ? "-0" : result;
    }
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch {
        }
        try {
          return func + "";
        } catch {
        }
      }
      return "";
    }
    var intersectionBy2 = baseRest(function(arrays) {
      var iteratee = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
      return iteratee === last(mapped) ? iteratee = void 0 : mapped.pop(), mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, baseIteratee(iteratee, 2)) : [];
    });
    function last(array) {
      var length = array ? array.length : 0;
      return length ? array[length - 1] : void 0;
    }
    function memoize(func, resolver) {
      if (typeof func != "function" || resolver && typeof resolver != "function")
        throw new TypeError(FUNC_ERROR_TEXT);
      var memoized = function() {
        var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
        if (cache.has(key))
          return cache.get(key);
        var result = func.apply(this, args);
        return memoized.cache = cache.set(key, result), result;
      };
      return memoized.cache = new (memoize.Cache || MapCache)(), memoized;
    }
    memoize.Cache = MapCache;
    function eq(value, other) {
      return value === other || value !== value && other !== other;
    }
    function isArguments(value) {
      return isArrayLikeObject(value) && hasOwnProperty.call(value, "callee") && (!propertyIsEnumerable.call(value, "callee") || objectToString.call(value) == argsTag);
    }
    var isArray = Array.isArray;
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }
    function isArrayLikeObject(value) {
      return isObjectLike(value) && isArrayLike(value);
    }
    function isFunction(value) {
      var tag = isObject(value) ? objectToString.call(value) : "";
      return tag == funcTag || tag == genTag;
    }
    function isLength(value) {
      return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }
    function isObject(value) {
      var type2 = typeof value;
      return !!value && (type2 == "object" || type2 == "function");
    }
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
    }
    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
    function toString(value) {
      return value == null ? "" : baseToString(value);
    }
    function get2(object2, path, defaultValue) {
      var result = object2 == null ? void 0 : baseGet(object2, path);
      return result === void 0 ? defaultValue : result;
    }
    function hasIn(object2, path) {
      return object2 != null && hasPath(object2, path, baseHasIn);
    }
    function keys2(object2) {
      return isArrayLike(object2) ? arrayLikeKeys(object2) : baseKeys(object2);
    }
    function identity(value) {
      return value;
    }
    function property(path) {
      return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
    }
    module2.exports = intersectionBy2;
  }
});

// node_modules/lodash.orderby/index.js
var require_lodash4 = __commonJS({
  "node_modules/lodash.orderby/index.js"(exports2, module2) {
    var LARGE_ARRAY_SIZE = 200, FUNC_ERROR_TEXT = "Expected a function", HASH_UNDEFINED = "__lodash_hash_undefined__", UNORDERED_COMPARE_FLAG = 1, PARTIAL_COMPARE_FLAG = 2, INFINITY = 1 / 0, MAX_SAFE_INTEGER = 9007199254740991, argsTag = "[object Arguments]", arrayTag = "[object Array]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", objectTag = "[object Object]", promiseTag = "[object Promise]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", weakMapTag = "[object WeakMap]", arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]", reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/, reLeadingDot = /^\./, rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, reRegExpChar = /[\\^$.*+?()[\]{}|]/g, reEscapeChar = /\\(\\)?/g, reIsHostCtor = /^\[object .+?Constructor\]$/, reIsUint = /^(?:0|[1-9]\d*)$/, typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = !0;
    typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = !1;
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global, freeSelf = typeof self == "object" && self && self.Object === Object && self, root = freeGlobal || freeSelf || Function("return this")(), freeExports = typeof exports2 == "object" && exports2 && !exports2.nodeType && exports2, freeModule = freeExports && typeof module2 == "object" && module2 && !module2.nodeType && module2, moduleExports = freeModule && freeModule.exports === freeExports, freeProcess = moduleExports && freeGlobal.process, nodeUtil = function() {
      try {
        return freeProcess && freeProcess.binding("util");
      } catch {
      }
    }(), nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
    function arrayMap(array, iteratee) {
      for (var index = -1, length = array ? array.length : 0, result = Array(length); ++index < length; )
        result[index] = iteratee(array[index], index, array);
      return result;
    }
    function arraySome(array, predicate) {
      for (var index = -1, length = array ? array.length : 0; ++index < length; )
        if (predicate(array[index], index, array))
          return !0;
      return !1;
    }
    function baseProperty(key) {
      return function(object2) {
        return object2 == null ? void 0 : object2[key];
      };
    }
    function baseSortBy(array, comparer) {
      var length = array.length;
      for (array.sort(comparer); length--; )
        array[length] = array[length].value;
      return array;
    }
    function baseTimes(n, iteratee) {
      for (var index = -1, result = Array(n); ++index < n; )
        result[index] = iteratee(index);
      return result;
    }
    function baseUnary(func) {
      return function(value) {
        return func(value);
      };
    }
    function getValue(object2, key) {
      return object2 == null ? void 0 : object2[key];
    }
    function isHostObject(value) {
      var result = !1;
      if (value != null && typeof value.toString != "function")
        try {
          result = !!(value + "");
        } catch {
        }
      return result;
    }
    function mapToArray(map) {
      var index = -1, result = Array(map.size);
      return map.forEach(function(value, key) {
        result[++index] = [key, value];
      }), result;
    }
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    function setToArray(set2) {
      var index = -1, result = Array(set2.size);
      return set2.forEach(function(value) {
        result[++index] = value;
      }), result;
    }
    var arrayProto = Array.prototype, funcProto = Function.prototype, objectProto = Object.prototype, coreJsData = root["__core-js_shared__"], maskSrcKey = function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
      return uid ? "Symbol(src)_1." + uid : "";
    }(), funcToString = funcProto.toString, hasOwnProperty = objectProto.hasOwnProperty, objectToString = objectProto.toString, reIsNative = RegExp("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), Symbol2 = root.Symbol, Uint8Array2 = root.Uint8Array, propertyIsEnumerable = objectProto.propertyIsEnumerable, splice = arrayProto.splice, nativeKeys = overArg(Object.keys, Object), DataView = getNative(root, "DataView"), Map2 = getNative(root, "Map"), Promise2 = getNative(root, "Promise"), Set2 = getNative(root, "Set"), WeakMap = getNative(root, "WeakMap"), nativeCreate = getNative(Object, "create"), dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map2), promiseCtorString = toSource(Promise2), setCtorString = toSource(Set2), weakMapCtorString = toSource(WeakMap), symbolProto = Symbol2 ? Symbol2.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0, symbolToString = symbolProto ? symbolProto.toString : void 0;
    function Hash(entries) {
      var index = -1, length = entries ? entries.length : 0;
      for (this.clear(); ++index < length; ) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
    }
    function hashDelete(key) {
      return this.has(key) && delete this.__data__[key];
    }
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? void 0 : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : void 0;
    }
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
    }
    function hashSet(key, value) {
      var data = this.__data__;
      return data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value, this;
    }
    Hash.prototype.clear = hashClear;
    Hash.prototype.delete = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;
    function ListCache(entries) {
      var index = -1, length = entries ? entries.length : 0;
      for (this.clear(); ++index < length; ) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function listCacheClear() {
      this.__data__ = [];
    }
    function listCacheDelete(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0)
        return !1;
      var lastIndex = data.length - 1;
      return index == lastIndex ? data.pop() : splice.call(data, index, 1), !0;
    }
    function listCacheGet(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      return index < 0 ? void 0 : data[index][1];
    }
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }
    function listCacheSet(key, value) {
      var data = this.__data__, index = assocIndexOf(data, key);
      return index < 0 ? data.push([key, value]) : data[index][1] = value, this;
    }
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype.delete = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;
    function MapCache(entries) {
      var index = -1, length = entries ? entries.length : 0;
      for (this.clear(); ++index < length; ) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function mapCacheClear() {
      this.__data__ = {
        hash: new Hash(),
        map: new (Map2 || ListCache)(),
        string: new Hash()
      };
    }
    function mapCacheDelete(key) {
      return getMapData(this, key).delete(key);
    }
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }
    function mapCacheSet(key, value) {
      return getMapData(this, key).set(key, value), this;
    }
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype.delete = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;
    function SetCache(values) {
      var index = -1, length = values ? values.length : 0;
      for (this.__data__ = new MapCache(); ++index < length; )
        this.add(values[index]);
    }
    function setCacheAdd(value) {
      return this.__data__.set(value, HASH_UNDEFINED), this;
    }
    function setCacheHas(value) {
      return this.__data__.has(value);
    }
    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
    SetCache.prototype.has = setCacheHas;
    function Stack(entries) {
      this.__data__ = new ListCache(entries);
    }
    function stackClear() {
      this.__data__ = new ListCache();
    }
    function stackDelete(key) {
      return this.__data__.delete(key);
    }
    function stackGet(key) {
      return this.__data__.get(key);
    }
    function stackHas(key) {
      return this.__data__.has(key);
    }
    function stackSet(key, value) {
      var cache = this.__data__;
      if (cache instanceof ListCache) {
        var pairs = cache.__data__;
        if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1)
          return pairs.push([key, value]), this;
        cache = this.__data__ = new MapCache(pairs);
      }
      return cache.set(key, value), this;
    }
    Stack.prototype.clear = stackClear;
    Stack.prototype.delete = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;
    function arrayLikeKeys(value, inherited) {
      var result = isArray(value) || isArguments(value) ? baseTimes(value.length, String) : [], length = result.length, skipIndexes = !!length;
      for (var key in value)
        (inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == "length" || isIndex(key, length))) && result.push(key);
      return result;
    }
    function assocIndexOf(array, key) {
      for (var length = array.length; length--; )
        if (eq(array[length][0], key))
          return length;
      return -1;
    }
    var baseEach = createBaseEach(baseForOwn), baseFor = createBaseFor();
    function baseForOwn(object2, iteratee) {
      return object2 && baseFor(object2, iteratee, keys2);
    }
    function baseGet(object2, path) {
      path = isKey(path, object2) ? [path] : castPath(path);
      for (var index = 0, length = path.length; object2 != null && index < length; )
        object2 = object2[toKey(path[index++])];
      return index && index == length ? object2 : void 0;
    }
    function baseGetTag(value) {
      return objectToString.call(value);
    }
    function baseHasIn(object2, key) {
      return object2 != null && key in Object(object2);
    }
    function baseIsEqual(value, other, customizer, bitmask, stack) {
      return value === other ? !0 : value == null || other == null || !isObject(value) && !isObjectLike(other) ? value !== value && other !== other : baseIsEqualDeep(value, other, baseIsEqual, customizer, bitmask, stack);
    }
    function baseIsEqualDeep(object2, other, equalFunc, customizer, bitmask, stack) {
      var objIsArr = isArray(object2), othIsArr = isArray(other), objTag = arrayTag, othTag = arrayTag;
      objIsArr || (objTag = getTag(object2), objTag = objTag == argsTag ? objectTag : objTag), othIsArr || (othTag = getTag(other), othTag = othTag == argsTag ? objectTag : othTag);
      var objIsObj = objTag == objectTag && !isHostObject(object2), othIsObj = othTag == objectTag && !isHostObject(other), isSameTag = objTag == othTag;
      if (isSameTag && !objIsObj)
        return stack || (stack = new Stack()), objIsArr || isTypedArray(object2) ? equalArrays(object2, other, equalFunc, customizer, bitmask, stack) : equalByTag(object2, other, objTag, equalFunc, customizer, bitmask, stack);
      if (!(bitmask & PARTIAL_COMPARE_FLAG)) {
        var objIsWrapped = objIsObj && hasOwnProperty.call(object2, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
        if (objIsWrapped || othIsWrapped) {
          var objUnwrapped = objIsWrapped ? object2.value() : object2, othUnwrapped = othIsWrapped ? other.value() : other;
          return stack || (stack = new Stack()), equalFunc(objUnwrapped, othUnwrapped, customizer, bitmask, stack);
        }
      }
      return isSameTag ? (stack || (stack = new Stack()), equalObjects(object2, other, equalFunc, customizer, bitmask, stack)) : !1;
    }
    function baseIsMatch(object2, source, matchData, customizer) {
      var index = matchData.length, length = index, noCustomizer = !customizer;
      if (object2 == null)
        return !length;
      for (object2 = Object(object2); index--; ) {
        var data = matchData[index];
        if (noCustomizer && data[2] ? data[1] !== object2[data[0]] : !(data[0] in object2))
          return !1;
      }
      for (; ++index < length; ) {
        data = matchData[index];
        var key = data[0], objValue = object2[key], srcValue = data[1];
        if (noCustomizer && data[2]) {
          if (objValue === void 0 && !(key in object2))
            return !1;
        } else {
          var stack = new Stack();
          if (customizer)
            var result = customizer(objValue, srcValue, key, object2, source, stack);
          if (!(result === void 0 ? baseIsEqual(srcValue, objValue, customizer, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG, stack) : result))
            return !1;
        }
      }
      return !0;
    }
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value))
        return !1;
      var pattern2 = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
      return pattern2.test(toSource(value));
    }
    function baseIsTypedArray(value) {
      return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
    }
    function baseIteratee(value) {
      return typeof value == "function" ? value : value == null ? identity : typeof value == "object" ? isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value) : property(value);
    }
    function baseKeys(object2) {
      if (!isPrototype(object2))
        return nativeKeys(object2);
      var result = [];
      for (var key in Object(object2))
        hasOwnProperty.call(object2, key) && key != "constructor" && result.push(key);
      return result;
    }
    function baseMap(collection, iteratee) {
      var index = -1, result = isArrayLike(collection) ? Array(collection.length) : [];
      return baseEach(collection, function(value, key, collection2) {
        result[++index] = iteratee(value, key, collection2);
      }), result;
    }
    function baseMatches(source) {
      var matchData = getMatchData(source);
      return matchData.length == 1 && matchData[0][2] ? matchesStrictComparable(matchData[0][0], matchData[0][1]) : function(object2) {
        return object2 === source || baseIsMatch(object2, source, matchData);
      };
    }
    function baseMatchesProperty(path, srcValue) {
      return isKey(path) && isStrictComparable(srcValue) ? matchesStrictComparable(toKey(path), srcValue) : function(object2) {
        var objValue = get2(object2, path);
        return objValue === void 0 && objValue === srcValue ? hasIn(object2, path) : baseIsEqual(srcValue, objValue, void 0, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG);
      };
    }
    function baseOrderBy(collection, iteratees, orders) {
      var index = -1;
      iteratees = arrayMap(iteratees.length ? iteratees : [identity], baseUnary(baseIteratee));
      var result = baseMap(collection, function(value, key, collection2) {
        var criteria = arrayMap(iteratees, function(iteratee) {
          return iteratee(value);
        });
        return { criteria, index: ++index, value };
      });
      return baseSortBy(result, function(object2, other) {
        return compareMultiple(object2, other, orders);
      });
    }
    function basePropertyDeep(path) {
      return function(object2) {
        return baseGet(object2, path);
      };
    }
    function baseToString(value) {
      if (typeof value == "string")
        return value;
      if (isSymbol(value))
        return symbolToString ? symbolToString.call(value) : "";
      var result = value + "";
      return result == "0" && 1 / value == -INFINITY ? "-0" : result;
    }
    function castPath(value) {
      return isArray(value) ? value : stringToPath(value);
    }
    function compareAscending(value, other) {
      if (value !== other) {
        var valIsDefined = value !== void 0, valIsNull = value === null, valIsReflexive = value === value, valIsSymbol = isSymbol(value), othIsDefined = other !== void 0, othIsNull = other === null, othIsReflexive = other === other, othIsSymbol = isSymbol(other);
        if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive)
          return 1;
        if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive)
          return -1;
      }
      return 0;
    }
    function compareMultiple(object2, other, orders) {
      for (var index = -1, objCriteria = object2.criteria, othCriteria = other.criteria, length = objCriteria.length, ordersLength = orders.length; ++index < length; ) {
        var result = compareAscending(objCriteria[index], othCriteria[index]);
        if (result) {
          if (index >= ordersLength)
            return result;
          var order = orders[index];
          return result * (order == "desc" ? -1 : 1);
        }
      }
      return object2.index - other.index;
    }
    function createBaseEach(eachFunc, fromRight) {
      return function(collection, iteratee) {
        if (collection == null)
          return collection;
        if (!isArrayLike(collection))
          return eachFunc(collection, iteratee);
        for (var length = collection.length, index = fromRight ? length : -1, iterable = Object(collection); (fromRight ? index-- : ++index < length) && iteratee(iterable[index], index, iterable) !== !1; )
          ;
        return collection;
      };
    }
    function createBaseFor(fromRight) {
      return function(object2, iteratee, keysFunc) {
        for (var index = -1, iterable = Object(object2), props = keysFunc(object2), length = props.length; length--; ) {
          var key = props[fromRight ? length : ++index];
          if (iteratee(iterable[key], key, iterable) === !1)
            break;
        }
        return object2;
      };
    }
    function equalArrays(array, other, equalFunc, customizer, bitmask, stack) {
      var isPartial = bitmask & PARTIAL_COMPARE_FLAG, arrLength = array.length, othLength = other.length;
      if (arrLength != othLength && !(isPartial && othLength > arrLength))
        return !1;
      var stacked = stack.get(array);
      if (stacked && stack.get(other))
        return stacked == other;
      var index = -1, result = !0, seen = bitmask & UNORDERED_COMPARE_FLAG ? new SetCache() : void 0;
      for (stack.set(array, other), stack.set(other, array); ++index < arrLength; ) {
        var arrValue = array[index], othValue = other[index];
        if (customizer)
          var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
        if (compared !== void 0) {
          if (compared)
            continue;
          result = !1;
          break;
        }
        if (seen) {
          if (!arraySome(other, function(othValue2, othIndex) {
            if (!seen.has(othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, customizer, bitmask, stack)))
              return seen.add(othIndex);
          })) {
            result = !1;
            break;
          }
        } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
          result = !1;
          break;
        }
      }
      return stack.delete(array), stack.delete(other), result;
    }
    function equalByTag(object2, other, tag, equalFunc, customizer, bitmask, stack) {
      switch (tag) {
        case dataViewTag:
          if (object2.byteLength != other.byteLength || object2.byteOffset != other.byteOffset)
            return !1;
          object2 = object2.buffer, other = other.buffer;
        case arrayBufferTag:
          return !(object2.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object2), new Uint8Array2(other)));
        case boolTag:
        case dateTag:
        case numberTag:
          return eq(+object2, +other);
        case errorTag:
          return object2.name == other.name && object2.message == other.message;
        case regexpTag:
        case stringTag:
          return object2 == other + "";
        case mapTag:
          var convert = mapToArray;
        case setTag:
          var isPartial = bitmask & PARTIAL_COMPARE_FLAG;
          if (convert || (convert = setToArray), object2.size != other.size && !isPartial)
            return !1;
          var stacked = stack.get(object2);
          if (stacked)
            return stacked == other;
          bitmask |= UNORDERED_COMPARE_FLAG, stack.set(object2, other);
          var result = equalArrays(convert(object2), convert(other), equalFunc, customizer, bitmask, stack);
          return stack.delete(object2), result;
        case symbolTag:
          if (symbolValueOf)
            return symbolValueOf.call(object2) == symbolValueOf.call(other);
      }
      return !1;
    }
    function equalObjects(object2, other, equalFunc, customizer, bitmask, stack) {
      var isPartial = bitmask & PARTIAL_COMPARE_FLAG, objProps = keys2(object2), objLength = objProps.length, othProps = keys2(other), othLength = othProps.length;
      if (objLength != othLength && !isPartial)
        return !1;
      for (var index = objLength; index--; ) {
        var key = objProps[index];
        if (!(isPartial ? key in other : hasOwnProperty.call(other, key)))
          return !1;
      }
      var stacked = stack.get(object2);
      if (stacked && stack.get(other))
        return stacked == other;
      var result = !0;
      stack.set(object2, other), stack.set(other, object2);
      for (var skipCtor = isPartial; ++index < objLength; ) {
        key = objProps[index];
        var objValue = object2[key], othValue = other[key];
        if (customizer)
          var compared = isPartial ? customizer(othValue, objValue, key, other, object2, stack) : customizer(objValue, othValue, key, object2, other, stack);
        if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack) : compared)) {
          result = !1;
          break;
        }
        skipCtor || (skipCtor = key == "constructor");
      }
      if (result && !skipCtor) {
        var objCtor = object2.constructor, othCtor = other.constructor;
        objCtor != othCtor && "constructor" in object2 && "constructor" in other && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor) && (result = !1);
      }
      return stack.delete(object2), stack.delete(other), result;
    }
    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
    }
    function getMatchData(object2) {
      for (var result = keys2(object2), length = result.length; length--; ) {
        var key = result[length], value = object2[key];
        result[length] = [key, value, isStrictComparable(value)];
      }
      return result;
    }
    function getNative(object2, key) {
      var value = getValue(object2, key);
      return baseIsNative(value) ? value : void 0;
    }
    var getTag = baseGetTag;
    (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) && (getTag = function(value) {
      var result = objectToString.call(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : void 0;
      if (ctorString)
        switch (ctorString) {
          case dataViewCtorString:
            return dataViewTag;
          case mapCtorString:
            return mapTag;
          case promiseCtorString:
            return promiseTag;
          case setCtorString:
            return setTag;
          case weakMapCtorString:
            return weakMapTag;
        }
      return result;
    });
    function hasPath(object2, path, hasFunc) {
      path = isKey(path, object2) ? [path] : castPath(path);
      for (var result, index = -1, length = path.length; ++index < length; ) {
        var key = toKey(path[index]);
        if (!(result = object2 != null && hasFunc(object2, key)))
          break;
        object2 = object2[key];
      }
      if (result)
        return result;
      var length = object2 ? object2.length : 0;
      return !!length && isLength(length) && isIndex(key, length) && (isArray(object2) || isArguments(object2));
    }
    function isIndex(value, length) {
      return length = length == null ? MAX_SAFE_INTEGER : length, !!length && (typeof value == "number" || reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
    }
    function isKey(value, object2) {
      if (isArray(value))
        return !1;
      var type2 = typeof value;
      return type2 == "number" || type2 == "symbol" || type2 == "boolean" || value == null || isSymbol(value) ? !0 : reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object2 != null && value in Object(object2);
    }
    function isKeyable(value) {
      var type2 = typeof value;
      return type2 == "string" || type2 == "number" || type2 == "symbol" || type2 == "boolean" ? value !== "__proto__" : value === null;
    }
    function isMasked(func) {
      return !!maskSrcKey && maskSrcKey in func;
    }
    function isPrototype(value) {
      var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
      return value === proto;
    }
    function isStrictComparable(value) {
      return value === value && !isObject(value);
    }
    function matchesStrictComparable(key, srcValue) {
      return function(object2) {
        return object2 == null ? !1 : object2[key] === srcValue && (srcValue !== void 0 || key in Object(object2));
      };
    }
    var stringToPath = memoize(function(string) {
      string = toString(string);
      var result = [];
      return reLeadingDot.test(string) && result.push(""), string.replace(rePropName, function(match, number, quote, string2) {
        result.push(quote ? string2.replace(reEscapeChar, "$1") : number || match);
      }), result;
    });
    function toKey(value) {
      if (typeof value == "string" || isSymbol(value))
        return value;
      var result = value + "";
      return result == "0" && 1 / value == -INFINITY ? "-0" : result;
    }
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch {
        }
        try {
          return func + "";
        } catch {
        }
      }
      return "";
    }
    function orderBy8(collection, iteratees, orders, guard) {
      return collection == null ? [] : (isArray(iteratees) || (iteratees = iteratees == null ? [] : [iteratees]), orders = guard ? void 0 : orders, isArray(orders) || (orders = orders == null ? [] : [orders]), baseOrderBy(collection, iteratees, orders));
    }
    function memoize(func, resolver) {
      if (typeof func != "function" || resolver && typeof resolver != "function")
        throw new TypeError(FUNC_ERROR_TEXT);
      var memoized = function() {
        var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
        if (cache.has(key))
          return cache.get(key);
        var result = func.apply(this, args);
        return memoized.cache = cache.set(key, result), result;
      };
      return memoized.cache = new (memoize.Cache || MapCache)(), memoized;
    }
    memoize.Cache = MapCache;
    function eq(value, other) {
      return value === other || value !== value && other !== other;
    }
    function isArguments(value) {
      return isArrayLikeObject(value) && hasOwnProperty.call(value, "callee") && (!propertyIsEnumerable.call(value, "callee") || objectToString.call(value) == argsTag);
    }
    var isArray = Array.isArray;
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }
    function isArrayLikeObject(value) {
      return isObjectLike(value) && isArrayLike(value);
    }
    function isFunction(value) {
      var tag = isObject(value) ? objectToString.call(value) : "";
      return tag == funcTag || tag == genTag;
    }
    function isLength(value) {
      return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }
    function isObject(value) {
      var type2 = typeof value;
      return !!value && (type2 == "object" || type2 == "function");
    }
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
    }
    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
    function toString(value) {
      return value == null ? "" : baseToString(value);
    }
    function get2(object2, path, defaultValue) {
      var result = object2 == null ? void 0 : baseGet(object2, path);
      return result === void 0 ? defaultValue : result;
    }
    function hasIn(object2, path) {
      return object2 != null && hasPath(object2, path, baseHasIn);
    }
    function keys2(object2) {
      return isArrayLike(object2) ? arrayLikeKeys(object2) : baseKeys(object2);
    }
    function identity(value) {
      return value;
    }
    function property(path) {
      return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
    }
    module2.exports = orderBy8;
  }
});

// src/index.js
var import_events2 = require("events"), import_utils = require("ioredis/built/utils/index"), import_command_list = require("../data/command-list.json");

// src/command.js
var import_as_callback = __toESM(require("@ioredis/as-callback")), import_Command = __toESM(require("ioredis/built/Command"));
function isInSubscriberMode(RedisMock2) {
  return RedisMock2.channels === void 0 ? !1 : RedisMock2.subscriberMode;
}
function isNotConnected(RedisMock2) {
  return RedisMock2.connected === void 0 ? !1 : !RedisMock2.connected;
}
function throwIfInSubscriberMode(commandName, RedisMock2) {
  if (isInSubscriberMode(RedisMock2) && !([
    "subscribe",
    "subscribeBuffer",
    "psubscribe",
    "psubscribeBuffer",
    "unsubscribe",
    "unsubscribeBuffer",
    "punsubscribe",
    "punsubscribeBuffer",
    "ping",
    "pingBuffer",
    "quit",
    "quitBuffer",
    "disconnect"
  ].indexOf(commandName) > -1))
    throw new Error("Connection in subscriber mode, only subscriber commands may be used");
}
function throwIfNotConnected(commandName, RedisMock2) {
  if (isNotConnected(RedisMock2) && commandName !== "connect" && commandName !== "defineCommand")
    throw new Error("Stream isn't writeable and enableOfflineQueue options is false");
}
function throwIfCommandIsNotAllowed(commandName, RedisMock2) {
  throwIfInSubscriberMode(commandName, RedisMock2), throwIfNotConnected(commandName, RedisMock2);
}
var Command = {
  transformers: import_Command.default._transformer,
  setArgumentTransformer: (name, func) => {
    Command.transformers.argument[name] = func;
  },
  setReplyTransformer: (name, func) => {
    Command.transformers.reply[name] = func;
  }
}, argMapper = (arg) => arg == null ? "" : arg instanceof Buffer ? arg : arg.toString();
function processArguments(args, commandName) {
  if (commandName === "defineCommand")
    return args;
  let commandArgs = args ? [].concat(...args) : [];
  return Command.transformers.argument[commandName] && (commandArgs = Command.transformers.argument[commandName](args)), commandArgs = commandArgs.map(argMapper), commandArgs;
}
function processReply(result, commandName) {
  if (Command.transformers.reply[commandName]) {
    let newResult = result;
    return commandName === "hgetall" && (newResult = [].concat(...Object.entries(result))), Command.transformers.reply[commandName](newResult);
  }
  return result;
}
function safelyExecuteCommand(commandEmulator, commandName, RedisMock2, ...commandArgs) {
  throwIfCommandIsNotAllowed(commandName, RedisMock2);
  let result = commandEmulator(...commandArgs);
  return processReply(result, commandName.replace(/Buffer$/, ""));
}
function command(commandEmulator, commandName, RedisMock2) {
  return (...args) => {
    let lastArgIndex = args.length - 1, callback = args[lastArgIndex];
    typeof callback != "function" ? callback = void 0 : args.length = lastArgIndex;
    let commandArgs = processArguments(args, commandName.replace(/Buffer$/, ""), RedisMock2);
    return commandName === "defineCommand" ? safelyExecuteCommand(commandEmulator, commandName, RedisMock2, ...commandArgs) : (0, import_as_callback.default)(new Promise((resolve) => resolve(safelyExecuteCommand(commandEmulator, commandName, RedisMock2, ...commandArgs))), callback);
  };
}

// src/commands/index.js
var commands_exports = {};
__export(commands_exports, {
  append: () => append,
  appendBuffer: () => appendBuffer,
  asking: () => asking,
  askingBuffer: () => askingBuffer,
  auth: () => auth,
  authBuffer: () => authBuffer,
  bgrewriteaof: () => bgrewriteaof,
  bgrewriteaofBuffer: () => bgrewriteaofBuffer,
  bgsave: () => bgsave,
  bgsaveBuffer: () => bgsaveBuffer,
  brpoplpush: () => brpoplpush,
  brpoplpushBuffer: () => brpoplpushBuffer,
  cluster: () => cluster,
  clusterBuffer: () => clusterBuffer,
  command: () => command2,
  commandBuffer: () => commandBuffer,
  config: () => config,
  configBuffer: () => configBuffer,
  connect: () => connect,
  customCommand: () => customCommand,
  dbsize: () => dbsize,
  dbsizeBuffer: () => dbsizeBuffer,
  decr: () => decr,
  decrBuffer: () => decrBuffer,
  decrby: () => decrby,
  decrbyBuffer: () => decrbyBuffer,
  defineArgv: () => defineArgv,
  defineCommand: () => defineCommand,
  defineKeys: () => defineKeys,
  defineRedisObject: () => defineRedisObject,
  del: () => del,
  delBuffer: () => delBuffer,
  discard: () => discard,
  discardBuffer: () => discardBuffer,
  echo: () => echo,
  echoBuffer: () => echoBuffer,
  evalBuffer: () => evalBuffer,
  evalsha: () => evalsha,
  evalshaBuffer: () => evalshaBuffer,
  evaluate: () => evaluate,
  exists: () => exists,
  existsBuffer: () => existsBuffer,
  expire: () => expire,
  expireBuffer: () => expireBuffer,
  expireat: () => expireat,
  expireatBuffer: () => expireatBuffer,
  failover: () => failover,
  failoverBuffer: () => failoverBuffer,
  flushall: () => flushall,
  flushallBuffer: () => flushallBuffer,
  flushdb: () => flushdb,
  flushdbBuffer: () => flushdbBuffer,
  get: () => get,
  getBuffer: () => getBuffer,
  getbit: () => getbit,
  getbitBuffer: () => getbitBuffer,
  getdel: () => getdel,
  getdelBuffer: () => getdelBuffer,
  getex: () => getex,
  getexBuffer: () => getexBuffer,
  getrange: () => getrange,
  getrangeBuffer: () => getrangeBuffer,
  getset: () => getset,
  getsetBuffer: () => getsetBuffer,
  hdel: () => hdel,
  hdelBuffer: () => hdelBuffer,
  hexists: () => hexists,
  hexistsBuffer: () => hexistsBuffer,
  hget: () => hget,
  hgetBuffer: () => hgetBuffer,
  hgetall: () => hgetall,
  hgetallBuffer: () => hgetallBuffer,
  hincrby: () => hincrby,
  hincrbyBuffer: () => hincrbyBuffer,
  hincrbyfloat: () => hincrbyfloat,
  hincrbyfloatBuffer: () => hincrbyfloatBuffer,
  hkeys: () => hkeys,
  hkeysBuffer: () => hkeysBuffer,
  hlen: () => hlen,
  hlenBuffer: () => hlenBuffer,
  hmget: () => hmget,
  hmgetBuffer: () => hmgetBuffer,
  hmset: () => hmset,
  hmsetBuffer: () => hmsetBuffer,
  hrandfield: () => hrandfield,
  hrandfieldBuffer: () => hrandfieldBuffer,
  hscan: () => hscan,
  hscanBuffer: () => hscanBuffer,
  hset: () => hset,
  hsetBuffer: () => hsetBuffer,
  hsetnx: () => hsetnx,
  hsetnxBuffer: () => hsetnxBuffer,
  hstrlen: () => hstrlen,
  hstrlenBuffer: () => hstrlenBuffer,
  hvals: () => hvals,
  hvalsBuffer: () => hvalsBuffer,
  incr: () => incr,
  incrBuffer: () => incrBuffer,
  incrby: () => incrby,
  incrbyBuffer: () => incrbyBuffer,
  incrbyfloat: () => incrbyfloat,
  incrbyfloatBuffer: () => incrbyfloatBuffer,
  info: () => info,
  infoBuffer: () => infoBuffer,
  keys: () => keys,
  keysBuffer: () => keysBuffer,
  lastsave: () => lastsave,
  lastsaveBuffer: () => lastsaveBuffer,
  lindex: () => lindex,
  lindexBuffer: () => lindexBuffer,
  linsert: () => linsert,
  linsertBuffer: () => linsertBuffer,
  llen: () => llen,
  llenBuffer: () => llenBuffer,
  lolwut: () => lolwut,
  lolwutBuffer: () => lolwutBuffer,
  lpop: () => lpop,
  lpopBuffer: () => lpopBuffer,
  lpush: () => lpush,
  lpushBuffer: () => lpushBuffer,
  lpushx: () => lpushx,
  lpushxBuffer: () => lpushxBuffer,
  lrange: () => lrange,
  lrangeBuffer: () => lrangeBuffer,
  lrem: () => lrem,
  lremBuffer: () => lremBuffer,
  lset: () => lset,
  lsetBuffer: () => lsetBuffer,
  ltrim: () => ltrim,
  ltrimBuffer: () => ltrimBuffer,
  mget: () => mget,
  mgetBuffer: () => mgetBuffer,
  mset: () => mset,
  msetBuffer: () => msetBuffer,
  msetnx: () => msetnx,
  msetnxBuffer: () => msetnxBuffer,
  object: () => object,
  objectBuffer: () => objectBuffer,
  persist: () => persist,
  persistBuffer: () => persistBuffer,
  pexpire: () => pexpire,
  pexpireBuffer: () => pexpireBuffer,
  pexpireat: () => pexpireat,
  pexpireatBuffer: () => pexpireatBuffer,
  ping: () => ping,
  pingBuffer: () => pingBuffer,
  psetex: () => psetex,
  psetexBuffer: () => psetexBuffer,
  psubscribe: () => psubscribe,
  psubscribeBuffer: () => psubscribeBuffer,
  pttl: () => pttl,
  pttlBuffer: () => pttlBuffer,
  publish: () => publish,
  publishBuffer: () => publishBuffer,
  punsubscribe: () => punsubscribe,
  punsubscribeBuffer: () => punsubscribeBuffer,
  quit: () => quit,
  quitBuffer: () => quitBuffer,
  randomkey: () => randomkey,
  randomkeyBuffer: () => randomkeyBuffer,
  readonly: () => readonly,
  readonlyBuffer: () => readonlyBuffer,
  readwrite: () => readwrite,
  readwriteBuffer: () => readwriteBuffer,
  rename: () => rename,
  renameBuffer: () => renameBuffer,
  renamenx: () => renamenx,
  renamenxBuffer: () => renamenxBuffer,
  replconf: () => replconf,
  replconfBuffer: () => replconfBuffer,
  replicaof: () => replicaof,
  replicaofBuffer: () => replicaofBuffer,
  role: () => role,
  roleBuffer: () => roleBuffer,
  rpop: () => rpop,
  rpopBuffer: () => rpopBuffer,
  rpoplpush: () => rpoplpush,
  rpoplpushBuffer: () => rpoplpushBuffer,
  rpush: () => rpush,
  rpushBuffer: () => rpushBuffer,
  rpushx: () => rpushx,
  rpushxBuffer: () => rpushxBuffer,
  sadd: () => sadd,
  saddBuffer: () => saddBuffer,
  save: () => save,
  saveBuffer: () => saveBuffer,
  scan: () => scan,
  scanBuffer: () => scanBuffer,
  scard: () => scard,
  scardBuffer: () => scardBuffer,
  sdiff: () => sdiff,
  sdiffBuffer: () => sdiffBuffer,
  sdiffstore: () => sdiffstore,
  sdiffstoreBuffer: () => sdiffstoreBuffer,
  set: () => set,
  setBuffer: () => setBuffer,
  setbit: () => setbit,
  setbitBuffer: () => setbitBuffer,
  setex: () => setex,
  setexBuffer: () => setexBuffer,
  setnx: () => setnx,
  setnxBuffer: () => setnxBuffer,
  setrange: () => setrange,
  setrangeBuffer: () => setrangeBuffer,
  sinter: () => sinter,
  sinterBuffer: () => sinterBuffer,
  sinterstore: () => sinterstore,
  sinterstoreBuffer: () => sinterstoreBuffer,
  sismember: () => sismember,
  sismemberBuffer: () => sismemberBuffer,
  slaveof: () => slaveof,
  slaveofBuffer: () => slaveofBuffer,
  smembers: () => smembers,
  smembersBuffer: () => smembersBuffer,
  smismember: () => smismember,
  smismemberBuffer: () => smismemberBuffer,
  smove: () => smove,
  smoveBuffer: () => smoveBuffer,
  spop: () => spop,
  spopBuffer: () => spopBuffer,
  srandmember: () => srandmember,
  srandmemberBuffer: () => srandmemberBuffer,
  srem: () => srem,
  sremBuffer: () => sremBuffer,
  sscan: () => sscan,
  sscanBuffer: () => sscanBuffer,
  strlen: () => strlen,
  strlenBuffer: () => strlenBuffer,
  subscribe: () => subscribe,
  subscribeBuffer: () => subscribeBuffer,
  substr: () => substr,
  substrBuffer: () => substrBuffer,
  sunion: () => sunion,
  sunionBuffer: () => sunionBuffer,
  sunionstore: () => sunionstore,
  sunionstoreBuffer: () => sunionstoreBuffer,
  time: () => time,
  timeBuffer: () => timeBuffer,
  ttl: () => ttl,
  ttlBuffer: () => ttlBuffer,
  type: () => type,
  typeBuffer: () => typeBuffer,
  unlink: () => unlink,
  unlinkBuffer: () => unlinkBuffer,
  unsubscribe: () => unsubscribe,
  unsubscribeBuffer: () => unsubscribeBuffer,
  xadd: () => xadd,
  xaddBuffer: () => xaddBuffer,
  xlen: () => xlen,
  xlenBuffer: () => xlenBuffer,
  xrange: () => xrange,
  xrangeBuffer: () => xrangeBuffer,
  xread: () => xread,
  xreadBuffer: () => xreadBuffer,
  xrevrange: () => xrevrange,
  xrevrangeBuffer: () => xrevrangeBuffer,
  zadd: () => zadd,
  zaddBuffer: () => zaddBuffer,
  zcard: () => zcard,
  zcardBuffer: () => zcardBuffer,
  zcount: () => zcount,
  zcountBuffer: () => zcountBuffer,
  zincrby: () => zincrby,
  zincrbyBuffer: () => zincrbyBuffer,
  zinterstore: () => zinterstore,
  zinterstoreBuffer: () => zinterstoreBuffer,
  zpopmax: () => zpopmax,
  zpopmaxBuffer: () => zpopmaxBuffer,
  zpopmin: () => zpopmin,
  zpopminBuffer: () => zpopminBuffer,
  zrandmember: () => zrandmember,
  zrandmemberBuffer: () => zrandmemberBuffer,
  zrange: () => zrange,
  zrangeBuffer: () => zrangeBuffer,
  zrangebyscore: () => zrangebyscore,
  zrangebyscoreBuffer: () => zrangebyscoreBuffer,
  zrank: () => zrank,
  zrankBuffer: () => zrankBuffer,
  zrem: () => zrem,
  zremBuffer: () => zremBuffer,
  zremrangebyrank: () => zremrangebyrank,
  zremrangebyrankBuffer: () => zremrangebyrankBuffer,
  zremrangebyscore: () => zremrangebyscore,
  zremrangebyscoreBuffer: () => zremrangebyscoreBuffer,
  zrevrange: () => zrevrange,
  zrevrangeBuffer: () => zrevrangeBuffer,
  zrevrangebyscore: () => zrevrangebyscore,
  zrevrangebyscoreBuffer: () => zrevrangebyscoreBuffer,
  zrevrank: () => zrevrank,
  zrevrankBuffer: () => zrevrankBuffer,
  zscan: () => zscan,
  zscanBuffer: () => zscanBuffer,
  zscore: () => zscore,
  zscoreBuffer: () => zscoreBuffer
});

// src/commands/append.js
function append(key, value) {
  return this.data.has(key) || this.data.set(key, ""), value instanceof Buffer ? this.data.set(key, Buffer.concat([Buffer.from(this.data.get(key)), value])) : this.data.set(key, this.data.get(key) + value), this.data.get(key).length;
}
var appendBuffer = append;

// src/commands-utils/convertStringToBuffer.js
function isString(value) {
  return Object.prototype.toString.call(value) === "[object String]";
}
function convertStringToBuffer(value) {
  if (isString(value))
    return Buffer.from(value);
  if (Array.isArray(value)) {
    let { length } = value, res = Array(length);
    for (let i = 0; i < length; ++i)
      res[i] = isString(value[i]) ? Buffer.from(value[i]) : convertStringToBuffer(value[i]);
    return res;
  }
  return value;
}

// src/commands/asking.js
function asking() {
  throw new Error("ERR This instance has cluster support disabled");
}
function askingBuffer() {
  let val = asking.call(this);
  return convertStringToBuffer(val);
}

// src/commands/auth.js
function auth() {
  return "OK";
}
function authBuffer(...args) {
  let val = auth.apply(this, args);
  return convertStringToBuffer(val);
}

// src/commands/bgrewriteaof.js
function bgrewriteaof() {
  return "Background append only file rewriting started";
}
function bgrewriteaofBuffer() {
  let val = bgrewriteaof.apply(this, []);
  return convertStringToBuffer(val);
}

// src/commands/bgsave.js
function bgsave() {
  return "Background saving started";
}
function bgsaveBuffer() {
  let val = bgsave.apply(this, []);
  return convertStringToBuffer(val);
}

// src/commands/brpoplpush.js
function brpoplpush(source, destination) {
  return this.rpoplpush(source, destination);
}
async function brpoplpushBuffer(source, destination) {
  let val = await brpoplpush.call(this, source, destination);
  return convertStringToBuffer(val);
}

// src/commands/cluster.js
function cluster(...args) {
  throw args.length === 0 ? new Error("ERR wrong number of arguments for 'cluster' command") : new Error("ERR This instance has cluster support disabled");
}
function clusterBuffer(...args) {
  let val = cluster.apply(this, args);
  return convertStringToBuffer(val);
}

// src/commands/command.js
async function command2(_subcommand, ...args) {
  if (!_subcommand) {
    let json = await Promise.resolve().then(() => __toESM(require("../data/command-info.json")));
    return json.default || json;
  }
  let subcommand = _subcommand.toUpperCase();
  if (subcommand === "HELP" && args.length === 0)
    return [
      "COMMAND <subcommand> [<arg> [value] [opt] ...]. Subcommands are:",
      "(no subcommand)",
      "    Return details about all Redis commands.",
      "COUNT",
      "    Return the total number of commands in this Redis server.",
      "LIST",
      "    Return a list of all commands in this Redis server.",
      "INFO [<command-name> ...]",
      "    Return details about multiple Redis commands.",
      "    If no command names are given, documentation details for all",
      "    commands are returned.",
      "DOCS [<command-name> ...]",
      "    Return documentation details about multiple Redis commands.",
      "    If no command names are given, documentation details for all",
      "    commands are returned.",
      "GETKEYS <full-command>",
      "    Return the keys from a full Redis command.",
      "GETKEYSANDFLAGS <full-command>",
      "    Return the keys and the access flags from a full Redis command.",
      "HELP",
      "    Prints this help."
    ];
  if (subcommand === "COUNT" && args.length === 0) {
    let { count } = await Promise.resolve().then(() => __toESM(require("../data/command-list.json")));
    return count;
  }
  if (subcommand === "LIST") {
    if (args.length > 0)
      throw new Error("ERR syntax error");
    let { list } = await Promise.resolve().then(() => __toESM(require("../data/command-list.json")));
    return list;
  }
  if (subcommand === "INFO") {
    let json = await Promise.resolve().then(() => __toESM(require("../data/command-info.json"))), data = json.default || json, result = args.length > 0 ? data.filter((item) => args.includes(item[0])) : data;
    return result.length === 0 ? [null] : result;
  }
  if (subcommand === "DOCS") {
    let json = await Promise.resolve().then(() => __toESM(require("../data/command-docs.json"))), data = json.default || json;
    if (args.length === 0)
      return data;
    let result = [];
    for (let arg of args) {
      let index = data.indexOf(arg);
      index !== -1 && result.push(arg, data[index + 1]);
    }
    return result;
  }
  if (subcommand === "GETKEYS" && args.length >= 2) {
    let { getKeyIndexes, exists: exists2 } = await Promise.resolve().then(() => __toESM(require("@ioredis/commands"))), [cmd, ...subArgs] = args;
    if (!exists2(cmd))
      throw new Error("ERR Invalid command specified");
    return getKeyIndexes(cmd, subArgs).map((i) => subArgs[i]);
  }
  throw args.length > 0 ? new Error(`ERR wrong number of arguments for 'command|${_subcommand.toLowerCase()}' command`) : new Error(`ERR unknown subcommand '${_subcommand}'. Try COMMAND HELP.`);
}
async function commandBuffer(...args) {
  let val = await command2.apply(this, args);
  return convertStringToBuffer(val);
}

// src/commands/config.js
function config(_subcommand, ...args) {
  if (!_subcommand)
    throw new Error("ERR wrong number of arguments for 'config' command");
  let subcommand = _subcommand.toUpperCase();
  if (subcommand === "HELP" && args.length === 0)
    return [
      "CONFIG <subcommand> [<arg> [value] [opt] ...]. Subcommands are:",
      "GET <pattern>",
      "    Return parameters matching the glob-like <pattern> and their values.",
      "SET <directive> <value>",
      "    Set the configuration <directive> to <value>.",
      "RESETSTAT",
      "    Reset statistics reported by the INFO command.",
      "REWRITE",
      "    Rewrite the configuration file.",
      "HELP",
      "    Prints this help."
    ];
  if (subcommand === "GET" && args.length > 0)
    return [];
  if (subcommand === "SET" && args.length > 1)
    throw new Error(`ERR Unknown option or number of arguments for CONFIG SET - '${args[0]}'`);
  if (subcommand === "RESETSTAT" && args.length === 0)
    return "OK";
  if (subcommand === "REWRITE" && args.length === 0)
    throw new Error("ERR The server is running without a config file");
  switch (subcommand) {
    case "HELP":
    case "GET":
    case "SET":
    case "RESETSTAT":
    case "REWRITE":
      throw new Error(`ERR wrong number of arguments for 'config|${_subcommand.toLowerCase()}' command`);
    default:
      throw new Error(`ERR unknown subcommand '${_subcommand.toLowerCase()}'. Try CONFIG HELP.`);
  }
}
function configBuffer(...args) {
  let val = config.apply(this, args);
  return convertStringToBuffer(val);
}

// src/commands-utils/emitConnectEvent.js
function emitConnectEvent(redisMock) {
  process.nextTick(() => {
    redisMock.emit("connect"), redisMock.emit("ready");
  });
}

// src/commands/connect.js
function connect() {
  if (this.connected)
    throw new Error("Redis is already connecting/connected");
  this.connected = !0, emitConnectEvent(this);
}

// src/commands/dbsize.js
function dbsize() {
  return this.data.keys().length;
}
var dbsizeBuffer = dbsize;

// src/commands/decr.js
function decr(key) {
  this.data.has(key) || this.data.set(key, "0");
  let nextVal = Number(this.data.get(key)) - 1;
  return this.data.set(key, nextVal.toString()), nextVal;
}
var decrBuffer = decr;

// src/commands/decrby.js
function decrby(key, decrement) {
  if (decrement === void 0)
    throw new Error("ERR wrong number of arguments for 'decrby' command");
  this.data.has(key) || this.data.set(key, "0");
  let nextVal = Number(this.data.get(key)) - parseInt(decrement, 10);
  return this.data.set(key, nextVal.toString()), nextVal;
}
var decrbyBuffer = decrby;

// src/commands/defineCommand.js
var import_fengari2 = __toESM(require("fengari")), import_fengari_interop2 = __toESM(require("fengari-interop"));

// src/lua.js
var import_fengari = __toESM(require("fengari")), import_fengari_interop = __toESM(require("fengari-interop")), {
  lua,
  lualib,
  lauxlib,
  to_luastring: toLuaString,
  to_jsstring: toJsString
} = import_fengari.default, luaExecString = (L) => (str) => {
  if (lauxlib.luaL_dostring(L, toLuaString(str)) !== 0) {
    let message = `Error trying to loading or executing lua code string in VM: ${lua.lua_tojsstring(L, -1)}`;
    throw new Error(message);
  }
}, getTopLength = (L) => {
  lua.lua_len(L, -1);
  let length = lua.lua_tointeger(L, -1);
  return lua.lua_pop(L, 1), length;
}, typeOf = (L) => (pos) => toJsString(lua.lua_typename(L, lua.lua_type(L, pos))), getTopKeys = (L) => {
  if (lua.lua_isnil(L, -1))
    throw new Error("cannot get keys on nil");
  if (!lua.lua_istable(L, -1))
    throw new Error(`non-tables don't have keys! type is "${typeOf(L)(-1)}"`);
  lua.lua_pushnil(L);
  let keys2 = [];
  for (; lua.lua_next(L, -2) !== 0; )
    keys2.push(import_fengari_interop.default.tojs(L, -2)), lua.lua_pop(L, 1);
  return keys2;
}, isTopArray = (L) => () => {
  try {
    return getTopKeys(L).reverse().every((v, i) => v === i + 1);
  } catch {
    return !1;
  }
}, makeReturnValue = (L) => {
  if (!isTopArray(L)()) {
    let retVal2 = import_fengari_interop.default.tojs(L, -1);
    return Array.isArray(retVal2) ? retVal2.slice(1) : retVal2;
  }
  let arrayLength = getTopLength(L), table = import_fengari_interop.default.tojs(L, -1), retVal = [];
  if (arrayLength === 0)
    return lua.lua_pop(L, 1), retVal;
  for (let i = 1; i <= arrayLength; i++)
    import_fengari_interop.default.push(L, table.get(i)), retVal.push(makeReturnValue(L));
  return lua.lua_pop(L, 1), retVal;
}, popReturnValue = (L) => (topBeforeCall) => {
  let numReturn = lua.lua_gettop(L) - topBeforeCall + 1, ret;
  return numReturn > 0 && (ret = makeReturnValue(L)), lua.lua_settop(L, topBeforeCall), ret;
}, pushTable = (L) => (obj) => {
  lua.lua_newtable(L);
  let index = lua.lua_gettop(L);
  Object.keys(obj).forEach((fieldName) => {
    import_fengari_interop.default.push(L, fieldName), push(L)(obj[fieldName]), lua.lua_settable(L, index);
  });
}, pushArray = (L) => (array) => {
  lua.lua_newtable(L);
  let subTableIndex = lua.lua_gettop(L);
  array.forEach((e, i) => {
    import_fengari_interop.default.push(L, i + 1), import_fengari_interop.default.push(L, e), lua.lua_settable(L, subTableIndex);
  });
}, push = (L) => (value) => {
  Array.isArray(value) ? pushArray(L)(value) : value && typeof value == "object" && !Array.isArray(value) ? pushTable(L)(value) : import_fengari_interop.default.push(L, value);
}, defineGlobalArray = (L) => (array, name) => {
  push(L)(array), lua.lua_setglobal(L, toLuaString(name));
}, defineGlobalFunction = (L) => (fn, name) => {
  lua.lua_pushjsfunction(L, fn), lua.lua_setglobal(L, toLuaString(name));
}, extractArgs = (L) => () => {
  let top = lua.lua_gettop(L), args = [], a = -top;
  for (; a < 0; )
    args.push(a), a += 1;
  return args.map((i) => import_fengari_interop.default.tojs(L, i));
}, init = () => {
  let L = lauxlib.luaL_newstate();
  return lualib.luaL_openlibs(L), import_fengari_interop.default.luaopen_js(L), {
    L,
    defineGlobalFunction: defineGlobalFunction(L),
    defineGlobalArray: defineGlobalArray(L),
    luaExecString: luaExecString(L),
    extractArgs: extractArgs(L),
    popReturnValue: popReturnValue(L),
    utils: {
      isTopArray: isTopArray(L),
      push: push(L)
    }
  };
}, dispose = (vm) => {
  let L = vm.L || vm;
  lua.lua_close(L);
};

// src/commands/defineCommand.js
var { lua: lua2, to_luastring: toLuaString2 } = import_fengari2.default, defineRedisObject = (vm) => (fn) => {
  vm.defineGlobalFunction(fn, "call"), vm.luaExecString(`
    local redis = {}
    function repair(val)
      if val == nil then
        return false
      end
      return val
    end
    redis.call = function(...)
        return repair(call(false, ...))
    end
    redis.pcall = function(...)
        return repair(call(true, ...))
    end
    return redis
  `), lua2.lua_setglobal(vm.L, toLuaString2("redis"));
}, callToRedisCommand = (vm) => function() {
  let rawArgs = vm.extractArgs(), returnError = rawArgs[0], result;
  try {
    let args = rawArgs.slice(1), name = args[0].toLowerCase();
    result = commands_exports[name].bind(this)(...args.slice(1)), name === "hgetall" && (result = [].concat(...Object.entries(result)));
  } catch (err) {
    if (!returnError)
      throw err;
    return import_fengari_interop2.default.push(vm.L, ["error", err.toString()]), 1;
  }
  return !!result || result === 0 ? (Array.isArray(result) && (result.unshift(null), result[Symbol.for("__len")] = function() {
    return this.length - 1;
  }), import_fengari_interop2.default.push(vm.L, result), 1) : 0;
};
function defineKeys(vm, numberOfKeys, commandArgs) {
  let keys2 = commandArgs.slice(0, numberOfKeys);
  vm.defineGlobalArray(keys2, "KEYS");
}
function defineArgv(vm, numberOfKeys, commandArgs) {
  let args = commandArgs.slice(numberOfKeys);
  vm.defineGlobalArray(args, "ARGV");
}
var customCommand = (numberOfKeys, luaCode) => function(...luaScriptArgs) {
  let vm = init();
  defineRedisObject(vm)(callToRedisCommand(vm).bind(this)), defineKeys.bind(this)(vm, numberOfKeys, luaScriptArgs), defineArgv.bind(this)(vm, numberOfKeys, luaScriptArgs);
  let topBeforeExecute = lua2.lua_gettop(vm.L);
  vm.luaExecString(luaCode);
  let retVal = vm.popReturnValue(topBeforeExecute);
  return dispose(vm), retVal;
};
function defineCommand(command3, { numberOfKeys, lua: luaCode }) {
  let cmd = command(customCommand(numberOfKeys, luaCode).bind(this), command3, this);
  this[command3] = cmd, this.customCommands[command3] = cmd;
}

// src/keyspace-notifications.js
var allEventsDisabled = {
  g: !1,
  string: !1,
  l: !1,
  s: !1,
  h: !1,
  z: !1,
  x: !1,
  e: !1
};
function parseEvents(keyspaceEventsConfigString) {
  let result = __spreadValues({}, allEventsDisabled), allEvents = "g$lshzxe", unAliasedString = keyspaceEventsConfigString.replace("A", allEvents);
  return result.g = unAliasedString.includes("g"), result.string = unAliasedString.includes("$"), result.l = unAliasedString.includes("l"), result.s = unAliasedString.includes("s"), result.h = unAliasedString.includes("h"), result.z = unAliasedString.includes("z"), result.x = unAliasedString.includes("x"), result.e = unAliasedString.includes("e"), result;
}
function parseKeyspaceEvents(keyspaceEventsConfigString) {
  let keyspaceConfig = {
    K: __spreadValues({}, allEventsDisabled),
    E: __spreadValues({}, allEventsDisabled)
  }, isKeyspace = keyspaceEventsConfigString.includes("K"), isKeyevent = keyspaceEventsConfigString.includes("E");
  return isKeyspace && (keyspaceConfig.K = parseEvents(keyspaceEventsConfigString)), isKeyevent && (keyspaceConfig.E = parseEvents(keyspaceEventsConfigString)), keyspaceConfig;
}
function createChannelString(type2, name) {
  return `__${type2 === "K" ? "keyspace" : "keyevent"}@${0}__:${name}`;
}
function emitNotification(redisMock, notifType, key, event) {
  redisMock.keyspaceEvents.K[notifType] === !0 && redisMock.publish(createChannelString("K", key), event), redisMock.keyspaceEvents.E[notifType] === !0 && redisMock.publish(createChannelString("E", event), key);
}

// src/commands/del.js
function del(...keys2) {
  if (keys2.length === 0 || !keys2[0])
    throw new Error("ERR wrong number of arguments for 'del' command");
  let deleted = 0;
  return keys2.forEach((key) => {
    this.data.has(key) && (deleted++, emitNotification(this, "g", key, "del")), this.data.delete(key);
  }), deleted;
}
var delBuffer = del;

// src/commands/discard.js
function discard() {
  if (!this.batch)
    throw new Error("ERR DISCARD without MULTI");
  return this.batch = void 0, "OK";
}
function discardBuffer() {
  let val = discard.call(this);
  return convertStringToBuffer(val);
}

// src/commands/echo.js
function echo(message) {
  return message;
}
function echoBuffer(message) {
  let val = echo.call(this, message);
  return convertStringToBuffer(val);
}

// src/commands-utils/sha1.js
var import_crypto = __toESM(require("crypto"));
function sha1(inputString) {
  let shasum = import_crypto.default.createHash("sha1");
  return shasum.update(inputString), shasum.digest("hex");
}

// src/commands/eval.js
function evaluate(script, numberOfKeys, ...args) {
  let scriptSha = sha1(script);
  return this.shaScripts[scriptSha] = script, command(customCommand(numberOfKeys, script).bind(this), "", this)(...args);
}
async function evalBuffer(...args) {
  let val = await evaluate.apply(this, args);
  return convertStringToBuffer(val);
}

// src/commands/evalsha.js
function evalsha(sha12, numberOfKeys, ...args) {
  if (!(sha12 in this.shaScripts) || !this.shaScripts[sha12])
    throw new Error("NOSCRIPT No matching script. Please use EVAL.");
  let script = this.shaScripts[sha12];
  return command(customCommand(numberOfKeys, script).bind(this), "", this)(...args);
}
async function evalshaBuffer(...args) {
  let val = await evalsha.apply(this, args);
  return convertStringToBuffer(val);
}

// src/commands/exists.js
function exists(...keys2) {
  return keys2.reduce((totalExists, key) => this.data.has(key) ? totalExists + 1 : totalExists, 0);
}
var existsBuffer = exists;

// src/commands/expire.js
function expire(key, seconds) {
  return this.data.has(key) ? (this.expires.set(key, seconds * 1e3 + Date.now()), emitNotification(this, "g", key, "expire"), 1) : 0;
}
var expireBuffer = expire;

// src/commands/expireat.js
function expireat(key, at) {
  return this.data.has(key) ? (this.expires.set(key, at * 1e3), 1) : 0;
}
var expireatBuffer = expireat;

// src/commands/failover.js
function failover() {
  throw new Error("ERR FAILOVER requires connected replicas.");
}
function failoverBuffer(...args) {
  let val = failover.apply(this, args);
  return convertStringToBuffer(val);
}

// src/commands/flushall.js
function flushall() {
  return this.expires.clear(), this.data.clear(), "OK";
}
function flushallBuffer() {
  let val = flushall.call(this);
  return convertStringToBuffer(val);
}

// src/commands/flushdb.js
function flushdb() {
  return this.flushall(), "OK";
}
function flushdbBuffer() {
  let val = flushdb.call(this);
  return convertStringToBuffer(val);
}

// src/commands/get.js
function get(key) {
  let value = this.data.has(key) ? this.data.get(key) : null;
  return Buffer.isBuffer(value) ? value.toString() : value;
}
function getBuffer(key) {
  return this.data.has(key) ? convertStringToBuffer(this.data.get(key)) : null;
}

// src/commands/getbit.js
function getbit(key, offset) {
  if (offset > 4294967295)
    throw new Error("ERR bit offset is not an integer or out of range");
  if (!this.data.has(key))
    return 0;
  let current = this.data.get(key);
  if (offset > current.length * 8)
    return 0;
  let byteOffset = parseInt(offset / 8, 10), shift = 7 - offset % 8;
  return current.charCodeAt(byteOffset) >> shift & 1;
}
var getbitBuffer = getbit;

// src/commands/getdel.js
function getdel(key) {
  if (!this.data.has(key))
    return null;
  if (type.call(this, key) !== "string")
    throw new Error("WRONGTYPE Operation against a key holding the wrong kind of value");
  let val = this.data.get(key);
  return this.data.delete(key), this.expires.delete(key), val;
}
function getdelBuffer(...args) {
  let val = getdel.apply(this, args);
  return convertStringToBuffer(val);
}

// src/commands/getex.js
function getex(key, _optionKey, optionValue) {
  let optionKey = _optionKey == null ? void 0 : _optionKey.toUpperCase();
  if (!(["EX", "PX", "EXAT", "PXAT"].indexOf(optionKey) !== -1 && optionValue !== void 0) && !(optionKey === "PERSIST" && optionValue === void 0) && optionKey)
    throw new Error("ERR syntax error");
  if (!this.data.has(key))
    return null;
  switch (optionKey) {
    case "PERSIST":
      persist.call(this, key);
      break;
    case "EX":
      expire.call(this, key, optionValue);
      break;
    case "PX":
      pexpire.call(this, key, optionValue);
      break;
    case "EXAT":
      expireat.call(this, key, optionValue);
      break;
    case "PXAT":
      pexpireat.call(this, key, optionValue);
      break;
  }
  return get.call(this, key);
}
function getexBuffer(...args) {
  let val = getex.apply(this, args);
  return convertStringToBuffer(val);
}

// src/commands/getrange.js
function getrange(key, s, e) {
  let val = this.data.get(key), start = parseInt(s, 10), end = parseInt(e, 10);
  return end === -1 ? val.slice(start) : val.slice(start, end + 1);
}
function getrangeBuffer(...args) {
  let val = getrange.apply(this, args);
  return convertStringToBuffer(val);
}
var substr = getrange, substrBuffer = getrangeBuffer;

// src/commands/getset.js
function getset(key, val) {
  let old = this.data.has(key) ? this.data.get(key) : null;
  return this.data.set(key, val), this.expires.delete(key), old;
}
function getsetBuffer(...args) {
  let val = getset.apply(this, args);
  return convertStringToBuffer(val);
}

// src/commands/hdel.js
function hdel(key, ...fields) {
  let value = this.data.get(key);
  if (!value)
    return 0;
  let numDeleted = fields.filter((field) => ({}).hasOwnProperty.call(value, field) ? (delete value[field], !0) : !1).length;
  return Object.getOwnPropertyNames(value).length > 0 ? this.data.set(key, value) : this.data.delete(key), numDeleted;
}
var hdelBuffer = hdel;

// src/commands/hexists.js
function hexists(key, field) {
  let hash = this.data.get(key);
  return !hash || hash[field] === void 0 ? 0 : {}.hasOwnProperty.call(hash, field) ? 1 : 0;
}
var hexistsBuffer = hexists;

// src/commands/hget.js
function hget(key, hashKey) {
  let hash = this.data.get(key);
  return !hash || hash[hashKey] === void 0 ? null : hash[hashKey];
}
function hgetBuffer(key, hashKey) {
  let val = hget.apply(this, [key, hashKey]);
  return convertStringToBuffer(val);
}

// src/commands/hgetall.js
function hgetall(key) {
  return this.data.get(key) || {};
}
function hgetallBuffer(key) {
  let val = hgetall.apply(this, [key]);
  return Object.keys(val).forEach((keyInObject) => {
    val[keyInObject] = convertStringToBuffer(val[keyInObject]);
  }), val;
}

// src/commands/hincrby.js
function hincrby(key, field, increment = 0) {
  this.data.has(key) || this.data.set(key, { [field]: "0" });
  let hash = this.data.get(key);
  ({}).hasOwnProperty.call(hash, field) || (hash[field] = "0");
  let nextVal = Number(hash[field]) + parseInt(increment, 10);
  return hash[field] = nextVal.toString(), this.data.set(key, hash), nextVal;
}
var hincrbyBuffer = hincrby;

// src/commands/hincrbyfloat.js
function hincrbyfloat(key, field, increment) {
  this.data.has(key) || this.data.set(key, { [field]: "0" });
  let hash = this.data.get(key);
  ({}).hasOwnProperty.call(hash, field) || (hash[field] = "0");
  let curVal = parseFloat(hash[field]);
  return hash[field] = (curVal + parseFloat(increment)).toString(), this.data.set(key, hash), hash[field];
}
var hincrbyfloatBuffer = hincrbyfloat;

// src/commands/hkeys.js
function hkeys(key) {
  return this.data.has(key) ? Object.keys(this.data.get(key)) : [];
}
function hkeysBuffer(globString) {
  let val = hkeys.call(this, globString);
  return convertStringToBuffer(val);
}

// src/commands/hlen.js
function hlen(key) {
  return this.data.has(key) ? Object.keys(this.data.get(key)).length : 0;
}
var hlenBuffer = hlen;

// src/commands/hmget.js
function hmget(key, ...fields) {
  let hash = this.data.get(key);
  return fields.map((field) => !hash || hash[field] === void 0 ? null : hash[field]);
}
function hmgetBuffer(...args) {
  let val = hmget.apply(this, args);
  return convertStringToBuffer(val);
}

// src/commands/hmset.js
function hmset(key, ...args) {
  this.data.has(key) || this.data.set(key, {});
  let hash = this.data.get(key);
  for (let i = 0; i < args.length; i += 2)
    hash[args[i]] = args[i + 1];
  return this.data.set(key, hash), "OK";
}
function hmsetBuffer(...args) {
  let val = hmset.apply(this, args);
  return convertStringToBuffer(val);
}

// src/commands/hrandfield.js
var import_lodash = __toESM(require_lodash());

// src/commands-utils/sample.js
function sample(arr) {
  let len = arr == null ? 0 : arr.length;
  return len ? arr[Math.floor(Math.random() * len)] : void 0;
}

// src/commands/hrandfield.js
function hrandfield(key, count, WITHVALUES) {
  if (!key)
    throw new Error("ERR wrong number of arguments for 'hrandfield' command");
  if (!this.data.has(key))
    return null;
  if (type.call(this, key) !== "hash")
    throw new Error("WRONGTYPE Operation against a key holding the wrong kind of value");
  let hash = this.data.get(key), keys2 = Object.keys(hash);
  if (!count)
    return sample(keys2);
  let result = [];
  if (count > 0 && (result = (0, import_lodash.default)(keys2).slice(0, count)), count < 0) {
    let max = count * -1;
    for (let index = 0; index < max; index++)
      result.push(sample(keys2));
  }
  return WITHVALUES && WITHVALUES.toUpperCase() === "WITHVALUES" ? result.reduce((list, item) => list.concat(item, hash[item]), []) : result;
}
function hrandfieldBuffer(...args) {
  let val = hrandfield.apply(this, args);
  return convertStringToBuffer(val);
}

// src/commands-utils/scan-command.common.js
function pattern(str) {
  let string = str.replace(/([+{($^|.\\])/g, "\\$1");
  string = string.replace(/(^|[^\\])([*?])/g, "$1.$2"), string = `^${string}$`;
  let p = new RegExp(string);
  return p.test.bind(p);
}
function getCountAndMatch(args) {
  if (args.length > 4)
    throw new Error("Too many arguments");
  if (args.length % 2 !== 0)
    throw new Error("Args should be provided by pair (name & value)");
  let count = 10, matchPattern = null, test = `${args[0]}${args[2]}`.toUpperCase();
  if (test === "UNDEFINEDUNDEFINED")
    return [count, matchPattern];
  if (test === "MATCHUNDEFINED")
    matchPattern = pattern(args[1]);
  else if (test === "COUNTUNDEFINED")
    count = parseInt(args[1], 10);
  else if (test === "MATCHCOUNT")
    matchPattern = pattern(args[1]), count = parseInt(args[3], 10);
  else
    throw test.startsWith("MATCH") || test.startsWith("COUNT") ? new Error("BAD Syntax") : new Error(`Uknown option ${args[0]}`);
  if (Number.isNaN(count))
    throw new Error("count must be integer");
  return [count, matchPattern];
}
function scanHelper(allKeys, size, cursorStart, ...args) {
  let cursor = parseInt(cursorStart, 10);
  if (Number.isNaN(cursor))
    throw new Error("Cursor must be integer");
  let [count, matchPattern] = getCountAndMatch(args), nextCursor = cursor + count, keys2 = allKeys.slice(cursor, nextCursor);
  if (matchPattern) {
    let i = 0;
    for (; i < keys2.length; )
      matchPattern(keys2[i]) ? i += size : keys2.splice(i, size);
  }
  return nextCursor >= allKeys.length && (nextCursor = 0), [String(nextCursor), keys2];
}

// src/commands/hscan.js
function hscan(key, cursor, ...args) {
  if (!this.data.has(key))
    return ["0", []];
  let hKeys = Object.keys(this.data.get(key));
  return scanHelper(hKeys, 1, cursor, ...args);
}
function hscanBuffer(...args) {
  let val = hscan.apply(this, args);
  return convertStringToBuffer(val);
}

// src/commands/hset.js
function hset(key, ...keyValuePairs) {
  this.data.has(key) || this.data.set(key, {});
  let hash = this.data.get(key), reply = 0;
  for (let i = 0; i < keyValuePairs.length; i += 2) {
    let field = keyValuePairs[i], value = keyValuePairs[i + 1];
    ({}).hasOwnProperty.call(hash, field) || reply++, hash[field] = value;
  }
  return this.data.set(key, hash), reply;
}
var hsetBuffer = hset;

// src/commands/hsetnx.js
function hsetnx(key, hashKey, hashVal) {
  if (this.data.has(key) || this.data.set(key, {}), !{}.hasOwnProperty.call(this.data.get(key), hashKey)) {
    let hash = this.data.get(key);
    return hash[hashKey] = hashVal, this.data.set(key, hash), 1;
  }
  return 0;
}
var hsetnxBuffer = hsetnx;

// src/commands/hstrlen.js
function hstrlen(key, field) {
  if (!key || !field)
    throw new Error("ERR wrong number of arguments for 'hstrlen' command");
  return this.data.has(key) && {}.hasOwnProperty.call(this.data.get(key), field) ? this.data.get(key)[field].length : 0;
}
var hstrlenBuffer = hstrlen;

// src/commands/hvals.js
function hvals(key) {
  return this.data.has(key) ? Object.values(this.data.get(key)) : [];
}
function hvalsBuffer(key) {
  let val = hvals.call(this, key);
  return convertStringToBuffer(val);
}

// src/commands/incr.js
function incr(key) {
  this.data.has(key) || this.data.set(key, "0");
  let nextVal = Number(this.data.get(key)) + 1;
  return this.data.set(key, nextVal.toString()), nextVal;
}
var incrBuffer = incr;

// src/commands/incrby.js
function incrby(key, increment = 0) {
  this.data.has(key) || this.data.set(key, "0");
  let nextVal = Number(this.data.get(key)) + parseInt(increment, 10);
  return this.data.set(key, nextVal.toString()), nextVal;
}
var incrbyBuffer = incrby;

// src/commands/incrbyfloat.js
function incrbyfloat(key, increment) {
  this.data.has(key) || this.data.set(key, "0");
  let curVal = parseFloat(this.data.get(key));
  return this.data.set(key, (curVal + parseFloat(increment)).toString()), this.data.get(key);
}
var incrbyfloatBuffer = incrbyfloat;

// src/commands/info.js
function info() {
  return this.data.has("info") ? this.data.get("info") : [
    "# Server",
    "redis_version:5.0.7",
    "redis_git_sha1:00000000",
    "redis_git_dirty:0",
    "redis_build_id:6eea854fbb5ddd69",
    "redis_mode:standalone",
    "os:Linux 4.19.76-linuxkit x86_64",
    "arch_bits:64",
    "multiplexing_api:epoll",
    "atomicvar_api:atomic-builtin",
    "gcc_version:9.2.0",
    "process_id:1",
    "run_id:4787d20e758149c8d52455abc39cf8cf277a334c",
    "tcp_port:6379",
    "uptime_in_seconds:968",
    "uptime_in_days:0",
    "hz:10",
    "configured_hz:10",
    "lru_clock:642868",
    "executable:/data/redis-server",
    "config_file:",
    "",
    "# Clients",
    "connected_clients:1",
    "client_recent_max_input_buffer:2",
    "client_recent_max_output_buffer:0",
    "blocked_clients:0",
    "",
    "# Memory",
    "used_memory:898376",
    "used_memory_human:877.32K",
    "used_memory_rss:4046848",
    "used_memory_rss_human:3.86M",
    "used_memory_peak:1022480",
    "used_memory_peak_human:998.52K",
    "used_memory_peak_perc:87.86%",
    "used_memory_overhead:847550",
    "used_memory_startup:791264",
    "used_memory_dataset:50826",
    "used_memory_dataset_perc:47.45%",
    "allocator_allocated:1626408",
    "allocator_active:1945600",
    "allocator_resident:8847360",
    "total_system_memory:2086522880",
    "total_system_memory_human:1.94G",
    "used_memory_lua:51200",
    "used_memory_lua_human:50.00K",
    "used_memory_scripts:4528",
    "used_memory_scripts_human:4.42K",
    "number_of_cached_scripts:2",
    "maxmemory:0",
    "maxmemory_human:0B",
    "maxmemory_policy:noeviction",
    "allocator_frag_ratio:1.20",
    "allocator_frag_bytes:319192",
    "allocator_rss_ratio:4.55",
    "allocator_rss_bytes:6901760",
    "rss_overhead_ratio:0.46",
    "rss_overhead_bytes:-4800512",
    "mem_fragmentation_ratio:4.73",
    "mem_fragmentation_bytes:3190472",
    "mem_not_counted_for_evict:0",
    "mem_replication_backlog:0",
    "mem_clients_slaves:0",
    "mem_clients_normal:49694",
    "mem_aof_buffer:0",
    "mem_allocator:jemalloc-5.1.0",
    "active_defrag_running:0",
    "lazyfree_pending_objects:0",
    "",
    "# Persistence",
    "loading:0",
    "rdb_changes_since_last_save:1",
    "rdb_bgsave_in_progress:0",
    "rdb_last_save_time:1577700205",
    "rdb_last_bgsave_status:ok",
    "rdb_last_bgsave_time_sec:-1",
    "rdb_current_bgsave_time_sec:-1",
    "rdb_last_cow_size:0",
    "aof_enabled:0",
    "aof_rewrite_in_progress:0",
    "aof_rewrite_scheduled:0",
    "aof_last_rewrite_time_sec:-1",
    "aof_current_rewrite_time_sec:-1",
    "aof_last_bgrewrite_status:ok",
    "aof_last_write_status:ok",
    "aof_last_cow_size:0",
    "",
    "# Stats",
    "total_connections_received:6",
    "total_commands_processed:32",
    "instantaneous_ops_per_sec:0",
    "total_net_input_bytes:6643",
    "total_net_output_bytes:31254",
    "instantaneous_input_kbps:0.00",
    "instantaneous_output_kbps:0.00",
    "rejected_connections:0",
    "sync_full:0",
    "sync_partial_ok:0",
    "sync_partial_err:0",
    "expired_keys:1",
    "expired_stale_perc:0.00",
    "expired_time_cap_reached_count:0",
    "evicted_keys:0",
    "keyspace_hits:0",
    "keyspace_misses:11",
    "pubsub_channels:0",
    "pubsub_patterns:0",
    "latest_fork_usec:0",
    "migrate_cached_sockets:0",
    "slave_expires_tracked_keys:0",
    "active_defrag_hits:0",
    "active_defrag_misses:0",
    "active_defrag_key_hits:0",
    "active_defrag_key_misses:0",
    "",
    "# Replication",
    "role:master",
    "connected_slaves:0",
    "master_replid:4ca161d4b9cc62b01bb87b9084a71ff229d0bda8",
    "master_replid2:0000000000000000000000000000000000000000",
    "master_repl_offset:0",
    "second_repl_offset:-1",
    "repl_backlog_active:0",
    "repl_backlog_size:1048576",
    "repl_backlog_first_byte_offset:0",
    "repl_backlog_histlen:0",
    "",
    "# CPU",
    "used_cpu_sys:4.571514",
    "used_cpu_user:1.065946",
    "used_cpu_sys_children:0.002352",
    "used_cpu_user_children:0.001369",
    "",
    "# Cluster",
    "cluster_enabled:0",
    "",
    "# Keyspace",
    "db0:keys=38,expires=0,avg_ttl=0"
  ].join(`\r
`);
}
function infoBuffer() {
  let val = info.call(this);
  return convertStringToBuffer(val);
}

// src/commands-utils/patternMatchesString.js
function stringmatchlen(pattern2, p, patternLen, string, s, stringLen, nocase) {
  for (; patternLen && stringLen; ) {
    switch (pattern2[p]) {
      case "*":
        for (; patternLen && pattern2[p + 1] === "*"; )
          p++, patternLen--;
        if (patternLen === 1)
          return !0;
        for (; stringLen; ) {
          if (stringmatchlen(pattern2, p + 1, patternLen - 1, string, s, stringLen, nocase))
            return !0;
          s++, stringLen--;
        }
        return !1;
      case "?":
        s++, stringLen--;
        break;
      case "[": {
        let match = !1;
        p++, patternLen--;
        let not = pattern2[p] === "^";
        for (not && (p++, patternLen--); ; ) {
          if (pattern2[p] === "\\" && patternLen >= 2)
            p++, patternLen--, pattern2[p] === string[s] && (match = !0);
          else {
            if (pattern2[p] === "]")
              break;
            if (patternLen === 0) {
              p--, patternLen++;
              break;
            } else if (patternLen >= 3 && pattern2[p + 1] === "-") {
              let start = pattern2[p], end = pattern2[p + 2], c = string[s];
              if (start > end) {
                let t = start;
                start = end, end = t;
              }
              nocase && (start = start.toLowerCase(), end = end.toLowerCase(), c = c.toLowerCase()), p += 2, patternLen -= 2, c >= start && c <= end && (match = !0);
            } else
              nocase ? pattern2[p].toLowerCase() === string[s].toLowerCase() && (match = !0) : pattern2[p] === string[s] && (match = !0);
          }
          p++, patternLen--;
        }
        if (not && (match = !match), !match)
          return !1;
        s++, stringLen--;
        break;
      }
      case "\\":
        patternLen >= 2 && (p++, patternLen--);
      default:
        if (nocase) {
          if (pattern2[p].toLowerCase() !== string[s].toLowerCase())
            return !1;
        } else if (pattern2[p] !== string[s])
          return !1;
        s++, stringLen--;
        break;
    }
    if (p++, patternLen--, stringLen === 0) {
      for (; pattern2[p] === "*"; )
        p++, patternLen--;
      break;
    }
  }
  return patternLen === 0 && stringLen === 0;
}
function stringmatch(pattern2, string, nocase) {
  return stringmatchlen(pattern2, 0, pattern2.length, string, 0, string.length, nocase);
}
function patternMatchesString(pattern2, string) {
  return stringmatch(pattern2, string, !1);
}

// src/commands/keys.js
function keys(globString) {
  return this.data.keys().filter((key) => patternMatchesString(globString, key));
}
function keysBuffer(globString) {
  let val = keys.call(this, globString);
  return convertStringToBuffer(val);
}

// src/commands/lastsave.js
function lastsave() {
  return Math.floor(new Date().getTime() / 1e3);
}
var lastsaveBuffer = lastsave;

// src/commands/lindex.js
function lindex(key, i) {
  if (this.data.has(key) && !(this.data.get(key) instanceof Array))
    throw new Error(`Key ${key} does not contain a list`);
  let index = parseInt(i, 10), list = this.data.get(key) || [], item = list[index < 0 ? list.length + index : index];
  return item !== void 0 ? item : null;
}
function lindexBuffer(...args) {
  let val = lindex.apply(this, args);
  return convertStringToBuffer(val);
}

// src/commands/linsert.js
function linsert(key, position, pivot, element) {
  if (this.data.has(key) && !(this.data.get(key) instanceof Array))
    throw new Error(`Key ${key} does not contain a list`);
  let list = this.data.get(key) || [], pivotIndex = list.indexOf(pivot);
  if (pivotIndex < 0)
    return -1;
  let elementIndex = pivotIndex;
  switch (position) {
    case "BEFORE":
      elementIndex = pivotIndex;
      break;
    case "AFTER":
      elementIndex = pivotIndex + 1;
      break;
    default:
      throw new Error("The position of the new element must be BEFORE the pivot or AFTER the pivot");
  }
  list.splice(elementIndex, 0, element);
  let { length } = list;
  return this.data.set(key, list), length;
}
var linsertBuffer = linsert;

// src/commands/llen.js
function llen(key) {
  if (this.data.has(key) && !(this.data.get(key) instanceof Array))
    throw new Error(`Key ${key} does not contain a list`);
  return (this.data.get(key) || []).length;
}
var llenBuffer = llen;

// src/commands/lolwut.js
var redisVersion = "7.0.0";
function version5() {
  return `\u28B0\u2812\u28B2\u2812\u28B2\u2812\u28F6\u2812\u2856\u28B2\u2856\u28B2\u2812\u28F6\u2812\u2856\u2812\u2856\u2812\u2846
  \u28B8\u2812\u28BA\u2812\u28BA\u2812\u28FF\u2812\u2857\u28BA\u2857\u28BA\u2812\u28FF\u2812\u2857\u2812\u2857\u2812\u2847
  \u285E\u2812\u28FE\u28DB\u28FB\u28DB\u28FF\u28BB\u285F\u28BB\u281B\u28FF\u28BB\u285F\u28BB\u2813\u28B2\u28D7\u28D2\u2847
  \u28FB\u283F\u28FF\u28C9\u28EF\u28F9\u28CF\u28F9\u28EF\u28F9\u28CF\u28F9\u28C9\u28FF\u28B9\u28DF\u28FB\u28D3\u28FA\u2803
  \u28CC\u28C9\u28FF\u282D\u28E7\u28F8\u28CF\u28F9\u28EF\u28EF\u28EF\u28EF\u28FD\u28EF\u28FF\u28C9\u28F9\u28C4\u28F8\u2800
  \u28EF\u28C1\u28FF\u28ED\u28FD\u28FC\u28FC\u287C\u28FF\u28EC\u28C7\u28F9\u286E\u28FF\u28FB\u28D7\u28FD\u28D2\u287C\u2845
  \u2897\u28C9\u28BF\u28E6\u28FF\u28FF\u28E7\u28B7\u28F7\u28EF\u28E7\u28DF\u28F7\u28FE\u28FC\u28D7\u28FF\u2897\u28F9\u2887
  \u28B3\u281E\u28BA\u2836\u28FF\u283E\u28DF\u28FB\u28FE\u281F\u28B7\u28DF\u28BE\u28B7\u28FF\u28D3\u28A7\u2867\u2834\u284E
  \u287C\u2836\u285E\u2892\u287E\u283E\u285D\u28B2\u2877\u287D\u28BE\u28FF\u28BC\u28FE\u28BF\u2812\u28FE\u287F\u2836\u2867
  \u28B7\u2836\u28F7\u28FA\u28B7\u28F9\u289F\u28F2\u28AB\u2837\u286F\u28BF\u28BD\u28BF\u28BE\u285F\u28BA\u28B3\u28B2\u2801
  \u2878\u283A\u287A\u28FA\u287B\u28BE\u281E\u289B\u28B6\u287B\u289E\u283E\u28F9\u28BF\u28FE\u2819\u28FB\u281B\u283A\u2840
  \u2808\u2822\u280A\u281A\u2812\u281A\u2811\u2814\u2811\u281C\u2823\u281B\u283C\u2825\u283C\u2809\u280B\u2822\u280A\u2800
  
  Georg Nees - schotter, plotter on paper, 1968. Redis ver. ${redisVersion}`;
}
function version6() {
  return `\x1B[0;97;107m \x1B[0m\x1B[0;97;107m \x1B[0m\x1B[0;97;107m \x1B[0m\x1B[0;97;107m \x1B[0m\x1B[0;97;107m \x1B[0m\x1B[0;97;107m \x1B[0m\x1B[0;97;107m \x1B[0m\x1B[0;97;107m \x1B[0m\x1B[0;97;107m \x1B[0m\x1B[0;97;107m \x1B[0m\x1B[0;97;107m \x1B[0m\x1B[0;97;107m \x1B[0m\x1B[0;97;107m \x1B[0m\x1B[0;97;107m \x1B[0m\x1B[0;97;107m \x1B[0m\x1B[0;97;107m \x1B[0m\x1B[0;97;107m \x1B[0m\x1B[0;97;107m \x1B[0m\x1B[0;97;107m \x1B[0m\x1B[0;97;107m \x1B[0m
\x1B[0;97;107m \x1B[0m\x1B[0;97;107m \x1B[0m\x1B[0;97;107m \x1B[0m\x1B[0;97;107m \x1B[0m\x1B[0;37;47m \x1B[0m\x1B[0;37;47m \x1B[0m\x1B[0;37;47m \x1B[0m\x1B[0;37;47m \x1B[0m\x1B[0;37;47m \x1B[0m\x1B[0;37;47m \x1B[0m\x1B[0;37;47m \x1B[0m\x1B[0;97;107m \x1B[0m\x1B[0;97;107m \x1B[0m\x1B[0;97;107m \x1B[0m\x1B[0;97;107m \x1B[0m\x1B[0;97;107m \x1B[0m\x1B[0;97;107m \x1B[0m\x1B[0;97;107m \x1B[0m\x1B[0;97;107m \x1B[0m\x1B[0;97;107m \x1B[0m
\x1B[0;97;107m \x1B[0m\x1B[0;97;107m \x1B[0m\x1B[0;37;47m \x1B[0m\x1B[0;37;47m \x1B[0m\x1B[0;37;47m \x1B[0m\x1B[0;37;47m \x1B[0m\x1B[0;37;47m \x1B[0m\x1B[0;37;47m \x1B[0m\x1B[0;37;47m \x1B[0m\x1B[0;37;47m \x1B[0m\x1B[0;37;47m \x1B[0m\x1B[0;37;47m \x1B[0m\x1B[0;37;47m \x1B[0m\x1B[0;97;107m \x1B[0m\x1B[0;97;107m \x1B[0m\x1B[0;97;107m \x1B[0m\x1B[0;97;107m \x1B[0m\x1B[0;97;107m \x1B[0m\x1B[0;97;107m \x1B[0m\x1B[0;97;107m \x1B[0m
\x1B[0;97;107m \x1B[0m\x1B[0;97;107m \x1B[0m\x1B[0;37;47m \x1B[0m\x1B[0;37;47m \x1B[0m\x1B[0;37;47m \x1B[0m\x1B[0;37;47m \x1B[0m\x1B[0;37;47m \x1B[0m\x1B[0;37;47m \x1B[0m\x1B[0;37;47m \x1B[0m\x1B[0;37;47m \x1B[0m\x1B[0;37;47m \x1B[0m\x1B[0;37;47m \x1B[0m\x1B[0;37;47m \x1B[0m\x1B[0;97;107m \x1B[0m\x1B[0;90;100m \x1B[0m\x1B[0;90;100m \x1B[0m\x1B[0;90;100m \x1B[0m\x1B[0;90;100m \x1B[0m\x1B[0;90;100m \x1B[0m\x1B[0;90;100m \x1B[0m
\x1B[0;97;107m \x1B[0m\x1B[0;97;107m \x1B[0m\x1B[0;37;47m \x1B[0m\x1B[0;37;47m \x1B[0m\x1B[0;37;47m \x1B[0m\x1B[0;37;47m \x1B[0m\x1B[0;37;47m \x1B[0m\x1B[0;37;47m \x1B[0m\x1B[0;37;47m \x1B[0m\x1B[0;37;47m \x1B[0m\x1B[0;37;47m \x1B[0m\x1B[0;37;47m \x1B[0m\x1B[0;90;100m \x1B[0m\x1B[0;90;100m \x1B[0m\x1B[0;90;100m \x1B[0m\x1B[0;90;100m \x1B[0m\x1B[0;90;100m \x1B[0m\x1B[0;90;100m \x1B[0m\x1B[0;90;100m \x1B[0m\x1B[0;90;100m \x1B[0m
\x1B[0;30;40m \x1B[0m\x1B[0;30;40m \x1B[0m\x1B[0;30;40m \x1B[0m\x1B[0;30;40m \x1B[0m\x1B[0;30;40m \x1B[0m\x1B[0;90;100m \x1B[0m\x1B[0;90;100m \x1B[0m\x1B[0;90;100m \x1B[0m\x1B[0;37;47m \x1B[0m\x1B[0;37;47m \x1B[0m\x1B[0;37;47m \x1B[0m\x1B[0;37;47m \x1B[0m\x1B[0;90;100m \x1B[0m\x1B[0;90;100m \x1B[0m\x1B[0;90;100m \x1B[0m\x1B[0;90;100m \x1B[0m\x1B[0;90;100m \x1B[0m\x1B[0;90;100m \x1B[0m\x1B[0;90;100m \x1B[0m\x1B[0;90;100m \x1B[0m
\x1B[0;30;40m \x1B[0m\x1B[0;30;40m \x1B[0m\x1B[0;30;40m \x1B[0m\x1B[0;30;40m \x1B[0m\x1B[0;30;40m \x1B[0m\x1B[0;30;40m \x1B[0m\x1B[0;30;40m \x1B[0m\x1B[0;90;100m \x1B[0m\x1B[0;90;100m \x1B[0m\x1B[0;90;100m \x1B[0m\x1B[0;37;47m \x1B[0m\x1B[0;37;47m \x1B[0m\x1B[0;90;100m \x1B[0m\x1B[0;90;100m \x1B[0m\x1B[0;90;100m \x1B[0m\x1B[0;90;100m \x1B[0m\x1B[0;90;100m \x1B[0m\x1B[0;90;100m \x1B[0m\x1B[0;30;40m \x1B[0m\x1B[0;30;40m \x1B[0m
\x1B[0;30;40m \x1B[0m\x1B[0;30;40m \x1B[0m\x1B[0;30;40m \x1B[0m\x1B[0;37;47m \x1B[0m\x1B[0;37;47m \x1B[0m\x1B[0;30;40m \x1B[0m\x1B[0;30;40m \x1B[0m\x1B[0;90;100m \x1B[0m\x1B[0;90;100m \x1B[0m\x1B[0;90;100m \x1B[0m\x1B[0;37;47m \x1B[0m\x1B[0;37;47m \x1B[0m\x1B[0;90;100m \x1B[0m\x1B[0;90;100m \x1B[0m\x1B[0;90;100m \x1B[0m\x1B[0;90;100m \x1B[0m\x1B[0;90;100m \x1B[0m\x1B[0;90;100m \x1B[0m\x1B[0;30;40m \x1B[0m\x1B[0;30;40m \x1B[0m
\x1B[0;30;40m \x1B[0m\x1B[0;30;40m \x1B[0m\x1B[0;30;40m \x1B[0m\x1B[0;30;40m \x1B[0m\x1B[0;30;40m \x1B[0m\x1B[0;30;40m \x1B[0m\x1B[0;30;40m \x1B[0m\x1B[0;90;100m \x1B[0m\x1B[0;90;100m \x1B[0m\x1B[0;90;100m \x1B[0m\x1B[0;37;47m \x1B[0m\x1B[0;37;47m \x1B[0m\x1B[0;90;100m \x1B[0m\x1B[0;90;100m \x1B[0m\x1B[0;90;100m \x1B[0m\x1B[0;90;100m \x1B[0m\x1B[0;90;100m \x1B[0m\x1B[0;90;100m \x1B[0m\x1B[0;30;40m \x1B[0m\x1B[0;30;40m \x1B[0m
\x1B[0;30;40m \x1B[0m\x1B[0;30;40m \x1B[0m\x1B[0;30;40m \x1B[0m\x1B[0;30;40m \x1B[0m\x1B[0;30;40m \x1B[0m\x1B[0;30;40m \x1B[0m\x1B[0;30;40m \x1B[0m\x1B[0;90;100m \x1B[0m\x1B[0;90;100m \x1B[0m\x1B[0;90;100m \x1B[0m\x1B[0;37;47m \x1B[0m\x1B[0;37;47m \x1B[0m\x1B[0;90;100m \x1B[0m\x1B[0;90;100m \x1B[0m\x1B[0;90;100m \x1B[0m\x1B[0;90;100m \x1B[0m\x1B[0;90;100m \x1B[0m\x1B[0;90;100m \x1B[0m\x1B[0;30;40m \x1B[0m\x1B[0;30;40m \x1B[0m
Dedicated to the 8 bit game developers of past and present.
Original 8 bit image from Plaguemon by hikikomori. Redis ver. ${redisVersion}`;
}
function lolwut(VERSION = "VERSION", version) {
  if (VERSION && VERSION.toUpperCase() !== "VERSION")
    throw new Error("ERR value is not an integer or out of range");
  return version == 6 ? version6() : version == 5 ? version5() : `Redis ver. ${redisVersion}
`;
}
function lolwutBuffer(...args) {
  let val = lolwut.apply(this, args);
  return convertStringToBuffer(val);
}

// src/commands/lpop.js
function lpop(key) {
  if (this.data.has(key) && !(this.data.get(key) instanceof Array))
    throw new Error(`Key ${key} does not contain a list`);
  let list = this.data.get(key) || [], item = list.length > 0 ? list.shift() : null;
  return this.data.set(key, list), item;
}
function lpopBuffer(key) {
  let val = lpop.apply(this, [key]);
  return convertStringToBuffer(val);
}

// src/commands/lpush.js
function lpush(key, ...values) {
  if (this.data.has(key) && !(this.data.get(key) instanceof Array))
    throw new Error(`Key ${key} does not contain a list`);
  let list = this.data.get(key) || [], length = list.unshift(...values.reverse());
  return this.data.set(key, list), length;
}
var lpushBuffer = lpush;

// src/commands/lpushx.js
function lpushx(key, value) {
  return this.data.has(key) ? lpush.call(this, key, value) : 0;
}
var lpushxBuffer = lpushx;

// src/commands/lrange.js
function lrange(key, s, e) {
  if (this.data.has(key) && !(this.data.get(key) instanceof Array))
    throw new Error(`Key ${key} does not contain a list`);
  let start = parseInt(s, 10), end = parseInt(e, 10), list = this.data.get(key) || [];
  return start < 0 && (start = list.length + start), end < 0 && (end = list.length + end), list.slice(start, end + 1);
}
function lrangeBuffer(...args) {
  let val = lrange.apply(this, args);
  return convertStringToBuffer(val);
}

// src/commands/lrem.js
function lrem(key, c, value) {
  if (this.data.has(key) && !(this.data.get(key) instanceof Array))
    return 0;
  let count = parseInt(c, 10), list = [...this.data.get(key) || []], indexFun = count < 0 ? "lastIndexOf" : "indexOf", max = count === 0 ? list.length : Math.abs(count), removed = 0, idx = list[indexFun](value);
  for (; idx !== -1 && removed < max; )
    removed++, list.splice(idx, 1), idx = list[indexFun](value);
  return this.data.set(key, list), removed;
}
var lremBuffer = lrem;

// src/commands/lset.js
function lset(key, i, value) {
  if (!this.data.has(key))
    throw new Error("no such key");
  if (this.data.has(key) && !(this.data.get(key) instanceof Array))
    throw new Error(`Key ${key} does not contain a list`);
  let index = parseInt(i, 10), list = this.data.get(key) || [];
  return list[index < 0 ? list.length + index : index] = value, this.data.set(key, list), "OK";
}
function lsetBuffer(...args) {
  let val = lset.apply(this, args);
  return convertStringToBuffer(val);
}

// src/commands/ltrim.js
function ltrim(key, s, e) {
  if (this.data.has(key) && !(this.data.get(key) instanceof Array))
    throw new Error(`Key ${key} does not contain a list`);
  let start = parseInt(s, 10), end = parseInt(e, 10), list = this.data.get(key) || [];
  return this.data.set(key, list.slice(start, end + 1 || void 0)), "OK";
}
function ltrimBuffer(...args) {
  let val = ltrim.apply(this, args);
  return convertStringToBuffer(val);
}

// src/commands/mget.js
function mget(...keys2) {
  return keys2.map((key) => this.data.has(key) ? this.data.get(key) : null);
}
function mgetBuffer(...args) {
  let val = mget.apply(this, args);
  return convertStringToBuffer(val);
}

// src/commands/mset.js
function mset(...msetData) {
  for (let i = 0; i < msetData.length; i += 2)
    set.call(this, msetData[i], msetData[i + 1]);
  return "OK";
}
function msetBuffer(...args) {
  let val = mset.apply(this, args);
  return convertStringToBuffer(val);
}

// src/commands/msetnx.js
function msetnx(...msetData) {
  for (let i = 0; i < msetData.length; i += 2)
    if (this.data.has(msetData[i]))
      return 0;
  for (let i = 0; i < msetData.length; i += 2)
    set.call(this, msetData[i], msetData[i + 1]);
  return 1;
}
var msetnxBuffer = msetnx;

// src/commands/object.js
function encoding(key) {
  let val = this.data.get(key);
  return val instanceof Set ? [...val].every((n) => n === parseInt(n, 10).toString()) ? "intset" : "hashtable" : val instanceof Map ? "listpack" : Array.isArray(val) ? "quicklist" : typeof val.valueOf() == "string" ? val === parseInt(val, 10).toString() ? "int" : "embstr" : "listpack";
}
function object(_subcommand, key, ...args) {
  if (!_subcommand)
    throw new Error("ERR wrong number of arguments for 'object' command");
  let subcommand = _subcommand.toUpperCase();
  if (subcommand === "HELP" && !key)
    return [
      "OBJECT <subcommand> [<arg> [value] [opt] ...]. Subcommands are:",
      "ENCODING <key>",
      "    Return the kind of internal representation used in order to store the value",
      "    associated with a <key>.",
      "FREQ <key>",
      "    Return the access frequency index of the <key>. The returned integer is",
      "    proportional to the logarithm of the recent access frequency of the key.",
      "IDLETIME <key>",
      "    Return the idle time of the <key>, that is the approximated number of",
      "    seconds elapsed since the last access to the key.",
      "REFCOUNT <key>",
      "    Return the number of references of the value associated with the specified",
      "    <key>.",
      "HELP",
      "    Prints this help."
    ];
  if (!key || args.length > 0)
    switch (subcommand) {
      case "REFCOUNT":
      case "IDLETIME":
      case "HELP":
      case "FREQ":
      case "ENCODING":
        throw new Error(`ERR wrong number of arguments for 'object|${_subcommand.toLowerCase()}' command`);
      default:
        throw new Error(`ERR unknown subcommand '${_subcommand.toLowerCase()}'. Try OBJECT HELP.`);
    }
  if (subcommand !== "HELP" && !this.data.has(key))
    return null;
  switch (subcommand) {
    case "ENCODING":
      return encoding.call(this, key);
    case "FREQ":
      throw new Error("ERR An LFU maxmemory policy is not selected, access frequency not tracked. Please note that when switching between policies at runtime LRU and LFU data will take some time to adjust.");
    case "HELP":
      throw new Error(`ERR wrong number of arguments for 'object|${_subcommand.toLowerCase()}' command`);
    case "IDLETIME":
      return 0;
    case "REFCOUNT":
      return 1;
    default:
      throw new Error(`ERR unknown subcommand '${_subcommand.toLowerCase()}'. Try OBJECT HELP.`);
  }
}
function objectBuffer(...args) {
  let val = object.apply(this, args);
  return convertStringToBuffer(val);
}

// src/commands/persist.js
function persist(key) {
  return !this.data.has(key) || !this.expires.has(key) ? 0 : (this.expires.delete(key), 1);
}
var persistBuffer = persist;

// src/commands/pexpire.js
function pexpire(key, milliseconds) {
  return this.data.has(key) ? (this.expires.set(key, +milliseconds + Date.now()), 1) : 0;
}
var pexpireBuffer = pexpire;

// src/commands/pexpireat.js
function pexpireat(key, at) {
  return this.data.has(key) ? (this.expires.set(key, at), 1) : 0;
}
var pexpireatBuffer = pexpireat;

// src/commands/ping.js
function ping(message = "PONG") {
  return message;
}
function pingBuffer(message) {
  let val = ping.call(this, message);
  return convertStringToBuffer(val);
}

// src/commands/psetex.js
function psetex(key, milliseconds, value) {
  return set.call(this, key, value), pexpire.call(this, key, milliseconds), "OK";
}
function psetexBuffer(...args) {
  let val = psetex.apply(this, args);
  return convertStringToBuffer(val);
}

// src/commands-utils/emitMessage.js
function emitMessage(redisMock, channel, message, pattern2) {
  process.nextTick(() => {
    pattern2 ? redisMock.emit(Buffer.isBuffer(message) ? "pmessageBuffer" : "pmessage", pattern2, channel, message) : redisMock.emit(Buffer.isBuffer(message) ? "messageBuffer" : "message", channel, message);
  });
}

// src/commands-utils/channel-subscription.js
function getSubscribedChannels(instance, channelStore) {
  let subscribedChannels = [];
  return channelStore.instanceListeners ? (channelStore.instanceListeners.forEach((instanceMap, channel) => {
    instanceMap.has(instance) && subscribedChannels.push(channel);
  }), subscribedChannels) : [];
}
function subscribeToChannel(instance, chan, channels, isPattern) {
  if (channels.instanceListeners.has(chan) || channels.instanceListeners.set(chan, /* @__PURE__ */ new Map()), channels.instanceListeners.get(chan).has(instance))
    return;
  let listener = (message, channel) => emitMessage(instance, isPattern ? channel : chan, message, isPattern ? chan : void 0);
  channels.on(chan, listener), channels.instanceListeners.get(chan).set(instance, listener);
}
function unsubscribeFromChannel(instance, chan, channels) {
  if (!channels.instanceListeners || channels.instanceListeners.has(chan) === !1)
    return;
  let channelMap = channels.instanceListeners.get(chan);
  if (channelMap.has(instance) === !1)
    return;
  let listener = channelMap.get(instance);
  channels.removeListener(chan, listener), channelMap.delete(instance), channelMap.size === 0 && channels.instanceListeners.delete(chan);
}

// src/commands/psubscribe.js
function psubscribe(...args) {
  args.forEach((pattern2) => {
    this.patternChannels.instanceListeners || (this.patternChannels.instanceListeners = /* @__PURE__ */ new Map()), subscribeToChannel(this, pattern2, this.patternChannels, !0);
  });
  let numberOfSubscribedChannels = getSubscribedChannels(this, this.patternChannels).length;
  return numberOfSubscribedChannels > 0 && (this.subscriberMode = !0), numberOfSubscribedChannels;
}
var psubscribeBuffer = psubscribe;

// src/commands/pttl.js
function pttl(key) {
  return this.data.has(key) ? this.expires.has(key) ? Math.ceil(this.expires.get(key) - Date.now()) : -1 : -2;
}
var pttlBuffer = pttl;

// src/commands/publish.js
function publish(channel, message) {
  this.channels.emit(channel, message);
  let matchingPatterns = this.patternChannels.eventNames().filter((pattern2) => patternMatchesString(pattern2, channel));
  return matchingPatterns.forEach((matchingChannel) => this.patternChannels.emit(matchingChannel, message, channel)), matchingPatterns.length + this.channels.listenerCount(channel);
}
var publishBuffer = publish;

// src/commands/punsubscribe.js
function punsubscribe(...args) {
  args.length === 0 && getSubscribedChannels(this, this.patternChannels).forEach((channel) => {
    unsubscribeFromChannel(this, channel, this.patternChannels);
  }), args.forEach((pattern2) => {
    unsubscribeFromChannel(this, pattern2, this.patternChannels);
  });
  let numberOfSubscribedChannels = getSubscribedChannels(this, this.patternChannels).length;
  return numberOfSubscribedChannels + getSubscribedChannels(this, this.channels).length === 0 && (this.subscriberMode = !1), numberOfSubscribedChannels;
}
var punsubscribeBuffer = punsubscribe;

// src/commands/quit.js
function quit() {
  return this.disconnect(), "OK";
}
function quitBuffer() {
  let val = quit.call(this);
  return convertStringToBuffer(val);
}

// src/commands-utils/random.js
function random(a = 1, b = 0) {
  let lower = Math.ceil(Math.min(a, b)), upper = Math.floor(Math.max(a, b));
  return Math.floor(lower + Math.random() * (upper - lower + 1));
}

// src/commands/randomkey.js
function randomkey() {
  let keys2 = this.data.keys();
  return keys2.length > 0 ? keys2[random(0, keys2.length - 1)] : null;
}
function randomkeyBuffer() {
  let val = randomkey.call(this);
  return convertStringToBuffer(val);
}

// src/commands/readonly.js
function readonly() {
  throw new Error("ERR This instance has cluster support disabled");
}
function readonlyBuffer() {
  let val = readonly.call(this);
  return convertStringToBuffer(val);
}

// src/commands/readwrite.js
function readwrite() {
  return "OK";
}
function readwriteBuffer() {
  let val = readwrite.call(this);
  return convertStringToBuffer(val);
}

// src/commands/rename.js
function rename(key, newKey) {
  let value = this.data.get(key);
  if (this.expires.has(key)) {
    let expire2 = this.expires.get(key);
    this.expires.delete(key), this.expires.set(newKey, expire2);
  }
  return this.data.set(newKey, value), this.data.delete(key), emitNotification(this, "g", key, "rename_from"), emitNotification(this, "g", newKey, "rename_to"), "OK";
}
function renameBuffer(...args) {
  let val = rename.apply(this, args);
  return convertStringToBuffer(val);
}

// src/commands/renamenx.js
function renamenx(key, newKey) {
  return this.data.has(newKey) ? 0 : (rename.call(this, key, newKey), 1);
}
var renamenxBuffer = renamenx;

// src/commands/replconf.js
function replconf() {
  return "OK";
}
function replconfBuffer() {
  let val = replconf.call(this);
  return convertStringToBuffer(val);
}

// src/commands/replicaof.js
function replicaof(host, port) {
  if (!host || !port)
    throw new Error("ERR wrong number of arguments for 'replicaof' command");
  if (host.toUpperCase() === "NO" && port.toUpperCase() === "ONE")
    return "OK";
  throw new Error("ERR Unsupported operation, PRs welcome ;-)");
}
function replicaofBuffer(...args) {
  let val = replicaof.apply(this, args);
  return convertStringToBuffer(val);
}
var slaveof = replicaof, slaveofBuffer = replicaofBuffer;

// src/commands/role.js
function role() {
  return ["master", 0];
}
function roleBuffer() {
  let val = role.call(this);
  return convertStringToBuffer(val);
}

// src/commands/rpop.js
function rpop(key) {
  if (this.data.has(key) && !(this.data.get(key) instanceof Array))
    throw new Error(`Key ${key} does not contain a list`);
  let list = this.data.get(key) || [], item = list.length > 0 ? list.pop() : null;
  return this.data.set(key, list), item;
}
function rpopBuffer(key) {
  return rpop.apply(this, [key]);
}

// src/commands/rpoplpush.js
function rpoplpush(source, destination) {
  if (this.data.has(source) && !(this.data.get(source) instanceof Array))
    throw new Error("WRONGTYPE Operation against a key holding the wrong kind of value");
  if (this.data.has(destination) && !(this.data.get(destination) instanceof Array) || !this.data.has(source) || this.data.get(source).length === 0)
    return null;
  this.data.has(destination) || this.data.set(destination, []);
  let newSource = this.data.get(source), item = newSource.pop(), newDest = this.data.get(destination);
  return newDest.unshift(item), this.data.set(source, newSource), this.data.set(destination, newDest), item;
}
function rpoplpushBuffer(source, destination) {
  return rpoplpush.call(this, source, destination);
}

// src/commands/rpush.js
function rpush(key, ...values) {
  if (this.data.has(key) && !(this.data.get(key) instanceof Array))
    throw new Error("WRONGTYPE Operation against a key holding the wrong kind of value");
  let list = this.data.get(key) || [], length = list.push(...values);
  return this.data.set(key, list), length;
}
var rpushBuffer = rpush;

// src/commands/rpushx.js
function rpushx(key, value) {
  return this.data.has(key) ? rpush.call(this, key, value) : 0;
}
var rpushxBuffer = rpushx;

// src/commands/sadd.js
function sadd(key, ...vals) {
  this.data.has(key) || this.data.set(key, /* @__PURE__ */ new Set());
  let added = 0, set2 = this.data.get(key);
  return vals.forEach((value) => {
    set2.has(value) || added++, set2.add(value);
  }), this.data.set(key, set2), added;
}
var saddBuffer = sadd;

// src/commands/save.js
function save() {
  return "OK";
}
function saveBuffer() {
  let val = save.call(this);
  return convertStringToBuffer(val);
}

// src/commands/scan.js
function scan(cursor, opt1, opt1val, opt2, opt2val) {
  let allKeys = this.data.keys();
  return scanHelper(allKeys, 1, cursor, opt1, opt1val, opt2, opt2val);
}
function scanBuffer(...args) {
  let val = scan.apply(this, args);
  return convertStringToBuffer(val);
}

// src/commands/scard.js
function scard(key) {
  let set2 = this.data.get(key);
  if (!set2)
    return 0;
  if (!(set2 instanceof Set))
    throw new Error(`Key ${key} does not contain a set`);
  return this.data.get(key).size;
}
var scardBuffer = scard;

// src/commands/sdiff.js
function sdiff(ours, ...theirs) {
  if (this.data.has(ours) && !(this.data.get(ours) instanceof Set))
    throw new Error(`Key ${ours} does not contain a set`);
  theirs.forEach((key) => {
    if (this.data.has(key) && !(this.data.get(key) instanceof Set))
      throw new Error(`Key ${key} does not contain a set`);
  });
  let ourSet = this.data.has(ours) ? this.data.get(ours) : /* @__PURE__ */ new Set(), theirSets = theirs.map((key) => this.data.has(key) ? this.data.get(key) : /* @__PURE__ */ new Set()), difference = new Set(Array.from(ourSet).filter((ourValue) => theirSets.reduce((isUnique, set2) => set2.has(ourValue) ? !1 : isUnique, !0)));
  return Array.from(difference);
}
function sdiffBuffer(...args) {
  let val = sdiff.apply(this, args);
  return convertStringToBuffer(val);
}

// src/commands-utils/makeStoreCommand.js
function makeStoreCommand(baseCommand, ResultType) {
  return function(dest, ...args) {
    let result = baseCommand.call(this, ...args);
    return this.data.set(dest, new ResultType(result)), result.length;
  };
}
function makeStoreSetCommand(baseCommand) {
  return makeStoreCommand(baseCommand, Set);
}

// src/commands/sdiffstore.js
var sdiffstore = makeStoreSetCommand(sdiff), sdiffstoreBuffer = sdiffstore;

// src/commands/set.js
function createGroupedArray(arr, groupSize) {
  let groups = [];
  for (let i = 0; i < arr.length; i += groupSize)
    groups.push(arr.slice(i, i + groupSize));
  return groups;
}
function set(key, value, ...options) {
  let nx = options.indexOf("NX") !== -1, xx = options.indexOf("XX") !== -1, filteredOptions = options.filter((option) => option !== "NX" && option !== "XX");
  if (nx && xx)
    throw new Error("ERR syntax error");
  if (nx && this.data.has(key) || xx && !this.data.has(key))
    return null;
  this.data.set(key, value);
  let expireOptions = new Map(createGroupedArray(filteredOptions, 2)), ttlSeconds = expireOptions.get("EX") || expireOptions.get("PX") / 1e3;
  return ttlSeconds ? expire.call(this, key, ttlSeconds) : this.expires.delete(key), "OK";
}
function setBuffer(...args) {
  let val = set.apply(this, args);
  return convertStringToBuffer(val);
}

// src/commands/setbit.js
var STR_BIT_0 = String.fromCharCode(0), constantLengthOf = (len) => (str) => str + Array(Math.max(0, len - str.length)).fill(STR_BIT_0).join(""), getBitAt = (position) => (byte) => byte >> position & 1, setBitAt = (position) => (byte) => byte | 1 << position, resetBitAt = (position) => (byte) => byte & ~(1 << position), setOrResetBitAt = (bit) => bit === 1 ? setBitAt : resetBitAt, getByteAt = (position) => (str) => str.charCodeAt(position), setByteAt = (byte) => (position) => (str) => str.substr(0, position) + String.fromCharCode(byte) + str.substr(position + 1);
function setbit(key, offset, value) {
  if (offset > 4294967295)
    throw new Error("ERR bit offset is not an integer or out of range");
  let bit = parseInt(value, 10);
  if (bit !== 0 && bit !== 1)
    throw new Error("ERR bit is not an integer or out of range");
  let byteOffset = parseInt(offset / 8, 10), bitOffset = 7 - offset % 8, prev = this.data.has(key) ? this.data.get(key) : "", prevByte = getByteAt(byteOffset)(prev), padded = constantLengthOf(byteOffset + 1)(prev), newByte = setOrResetBitAt(bit)(bitOffset)(prevByte), newValue = setByteAt(newByte)(byteOffset)(padded);
  return this.data.set(key, newValue), getBitAt(bitOffset)(prevByte);
}
var setbitBuffer = setbit;

// src/commands/setex.js
function setex(key, seconds, value) {
  return set.call(this, key, value), expire.call(this, key, seconds), "OK";
}
function setexBuffer(...args) {
  let val = setex.apply(this, args);
  return convertStringToBuffer(val);
}

// src/commands/setnx.js
function setnx(key, val) {
  return this.data.has(key) ? 0 : (this.data.set(key, val), 1);
}
var setnxBuffer = setnx;

// src/commands/setrange.js
function setrange(key, offset, value) {
  let oldVal = this.data.get(key) || "", start = parseInt(offset, 10), end = parseInt(start + value.length, 10), newVal = "";
  return start > 0 && (newVal = oldVal.slice(0, start)), newVal += value, end < oldVal.length && (newVal += oldVal.slice(end, oldVal.length + 1)), newVal.length < end && (newVal = newVal.padStart(end, String.fromCharCode(0))), this.data.set(key, newVal), newVal.length;
}
var setrangeBuffer = setrange;

// src/commands/sinter.js
function sinter(...keys2) {
  let values = sunion.apply(this, keys2), sets = keys2.map((key) => this.data.has(key) ? this.data.get(key) : /* @__PURE__ */ new Set()), intersection = new Set(values.filter((value) => sets.reduce((isShared, set2) => set2.has(value) ? isShared : !1, !0)));
  return Array.from(intersection);
}
function sinterBuffer(...args) {
  let val = sinter.apply(this, args);
  return convertStringToBuffer(val);
}

// src/commands/sinterstore.js
var sinterstore = makeStoreSetCommand(sinter), sinterstoreBuffer = sinterstore;

// src/commands/sismember.js
function sismember(key, val) {
  let data = this.data.get(key);
  return data && data.has(val) ? 1 : 0;
}
var sismemberBuffer = sismember;

// src/commands/smembers.js
function smembers(key) {
  return this.data.has(key) ? Array.from(this.data.get(key)) : [];
}
function smembersBuffer(...args) {
  let val = smembers.apply(this, args);
  return convertStringToBuffer(val);
}

// src/commands/smismember.js
function smismember(key, ...valArray) {
  let data = this.data.get(key);
  return data ? valArray.map((val) => data.has(val) ? 1 : 0) : valArray.map(() => 0);
}
var smismemberBuffer = smismember;

// src/commands/smove.js
function smove(source, destination, member) {
  if (this.data.has(source) && !(this.data.get(source) instanceof Set))
    throw new Error(`Key ${source} does not contain a set`);
  if (this.data.has(destination) && !(this.data.get(destination) instanceof Set))
    throw new Error(`Key ${destination} does not contain a set`);
  if (!this.data.has(source))
    return 0;
  let sourceSet = this.data.get(source);
  if (!sourceSet.has(member))
    return 0;
  sourceSet.delete(member), this.data.set(source, sourceSet), this.data.has(destination) || this.data.set(destination, /* @__PURE__ */ new Set());
  let destSet = this.data.get(destination);
  return destSet.add(member), this.data.set(destination, destSet), 1;
}
var smoveBuffer = smove;

// src/commands/spop.js
var import_lodash2 = __toESM(require_lodash());
var safeCount = (count) => {
  let result = count !== void 0 ? parseInt(count, 10) : 1;
  if (Number.isNaN(result) || result < 0)
    throw new Error("ERR value is not an integer or out of range");
  return result;
};
function spop(key, count) {
  if (this.data.has(key) && !(this.data.get(key) instanceof Set))
    throw new Error(`Key ${key} does not contain a set`);
  let want = safeCount(count), set2 = this.data.get(key) || /* @__PURE__ */ new Set(), total = set2.size;
  if (want === 0)
    return;
  if (total === 0)
    return null;
  let values = Array.from(set2), result;
  return want === 1 ? (result = sample(values), set2.delete(result)) : total <= want ? (result = values, set2.clear()) : (result = (0, import_lodash2.default)(values).slice(0, want), result.map((item) => set2.delete(item))), this.data.set(key, set2), result;
}
function spopBuffer(...args) {
  let val = spop.apply(this, args);
  return convertStringToBuffer(val);
}

// src/commands/srandmember.js
var import_lodash3 = __toESM(require_lodash());
function srandmember(key, count) {
  if (this.data.has(key) && !(this.data.get(key) instanceof Set))
    throw new Error("WRONGTYPE Operation against a key holding the wrong kind of value");
  let set2 = this.data.get(key) || /* @__PURE__ */ new Set(), list = Array.from(set2), total = list.length;
  if (total === 0)
    return null;
  let shouldReturnArray = count !== void 0, max = shouldReturnArray ? Math.abs(count) : 1;
  if (shouldReturnArray && count > -1)
    return (0, import_lodash3.default)(list.splice(0, max));
  let items = [], results = 0;
  for (; results < max; ) {
    let item = list[random(0, total - 1)];
    items.push(item), results += 1;
  }
  return shouldReturnArray ? items : items[0];
}
function srandmemberBuffer(...args) {
  let val = srandmember.apply(this, args);
  return convertStringToBuffer(val);
}

// src/commands/srem.js
function srem(key, ...vals) {
  if (!this.data.has(key))
    return 0;
  if (this.data.has(key) && !(this.data.get(key) instanceof Set))
    throw new Error("WRONGTYPE Operation against a key holding the wrong kind of value");
  let removed = 0, set2 = this.data.get(key);
  return vals.forEach((val) => {
    set2.has(val) && removed++, set2.delete(val);
  }), set2.size === 0 ? this.data.delete(key) : this.data.set(key, set2), removed;
}
var sremBuffer = srem;

// src/commands/sscan.js
function sscan(key, cursor, ...args) {
  if (!this.data.has(key))
    return ["0", []];
  let setKeys = [];
  return this.data.get(key).forEach((value) => setKeys.push(value)), scanHelper(setKeys, 1, cursor, ...args);
}
function sscanBuffer(...args) {
  let val = sscan.apply(this, args);
  return convertStringToBuffer(val);
}

// src/commands/strlen.js
function strlen(key) {
  return this.data.has(key) ? this.data.get(key).length : 0;
}
var strlenBuffer = strlen;

// src/commands/subscribe.js
function subscribe(...args) {
  if (args.forEach((chan) => {
    this.channels.instanceListeners || (this.channels.instanceListeners = /* @__PURE__ */ new Map()), subscribeToChannel(this, chan, this.channels);
  }), !this.channels.instanceListeners)
    return 0;
  let numberOfSubscribedChannels = getSubscribedChannels(this, this.channels).length;
  return numberOfSubscribedChannels > 0 && (this.subscriberMode = !0), numberOfSubscribedChannels;
}
var subscribeBuffer = subscribe;

// src/commands/sunion.js
function sunion(...keys2) {
  keys2.forEach((key) => {
    if (this.data.has(key) && !(this.data.get(key) instanceof Set))
      throw new Error("WRONGTYPE Operation against a key holding the wrong kind of value");
  });
  let sets = keys2.map((key) => this.data.has(key) ? this.data.get(key) : /* @__PURE__ */ new Set()), union = new Set(sets.reduce((combined, set2) => [...combined, ...Array.from(set2)], []));
  return Array.from(union);
}
function sunionBuffer(...args) {
  let val = sunion.apply(this, args);
  return convertStringToBuffer(val);
}

// src/commands/sunionstore.js
var sunionstore = makeStoreSetCommand(sunion), sunionstoreBuffer = sunionstore;

// src/commands/time.js
function time() {
  return [
    `${Math.round(new Date().getTime() / 1e3)}`,
    `${Math.round(process.hrtime()[1] / 1e3)}`
  ];
}
function timeBuffer() {
  let val = time.call(this);
  return convertStringToBuffer(val);
}

// src/commands/ttl.js
function ttl(key) {
  return this.data.has(key) ? this.expires.has(key) ? Math.ceil((this.expires.get(key) - Date.now()) / 1e3) : -1 : -2;
}
var ttlBuffer = ttl;

// src/commands/type.js
var import_lodash4 = __toESM(require_lodash2());
function type(key) {
  if (!this.data.has(key))
    return "none";
  let val = this.data.get(key);
  if (val instanceof Set)
    return "set";
  if (val instanceof Map)
    return "zset";
  if (Array.isArray(val))
    return "list";
  if (val != null && typeof val.valueOf() == "string")
    return "string";
  if ((0, import_lodash4.default)(val))
    return "hash";
}
function typeBuffer(key) {
  let val = type.call(this, key);
  return convertStringToBuffer(val);
}

// src/commands/unlink.js
function unlink(...keys2) {
  return del.bind(this)(...keys2);
}
var unlinkBuffer = unlink;

// src/commands/unsubscribe.js
function unsubscribe(...args) {
  if (args.length === 0)
    return getSubscribedChannels(this, this.channels).forEach((channel) => {
      unsubscribeFromChannel(this, channel, this.channels);
    }), 0;
  args.forEach((chan) => {
    unsubscribeFromChannel(this, chan, this.channels);
  });
  let numberOfSubscribedChannels = getSubscribedChannels(this, this.channels).length;
  return numberOfSubscribedChannels + getSubscribedChannels(this, this.patternChannels).length === 0 && (this.subscriberMode = !1), numberOfSubscribedChannels;
}
var unsubscribeBuffer = unsubscribe;

// src/commands/xadd.js
function xadd(stream, id, ...args) {
  if (!stream || !id || args.length === 0 || (args.includes("~") || args.includes("=") ? args.length < 4 : args.length % 2 !== 0))
    throw new Error("ERR wrong number of arguments for 'xadd' command");
  this.data.has(stream) || this.data.set(stream, []);
  let threshold, keyId = id;
  keyId === "MAXLEN" && (threshold = args.shift(), (threshold === "=" || threshold === "~") && (threshold = args.shift()), keyId = args.shift());
  let eventId = `${keyId === "*" ? this.data.get(stream).length + 1 : keyId}-0`, list = this.data.get(stream);
  if (list.length > 0 && list[0][0] === `${eventId}`)
    throw new Error("ERR The ID specified in XADD is equal or smaller than the target stream top item");
  this.data.set(`stream:${stream}:${eventId}`, { polled: !1 });
  let newData = list.concat([[`${eventId}`, [...args]]]);
  return threshold && newData.length > threshold && (newData = newData.slice(-threshold)), this.data.set(stream, newData), `${eventId}`;
}
function xaddBuffer(...args) {
  let val = xadd.apply(this, args);
  return convertStringToBuffer(val);
}

// src/commands/xlen.js
function xlen(stream) {
  return (this.data.get(stream) || []).length;
}
var xlenBuffer = xlen;

// src/commands/xrange.js
function xrange(stream, start, end, ...args) {
  if (!stream || !start || !end)
    throw new Error("ERR wrong number of arguments for 'xrange' command");
  let [COUNT, count] = args;
  if (COUNT && !count)
    throw new Error("ERR syntax error");
  if (!this.data.has(stream))
    return [];
  let list = this.data.get(stream), min = start === "-" ? -1 / 0 : start, max = end === "+" ? 1 / 0 : end, result = list.filter(([eventId]) => min <= parseInt(eventId, 10) && max >= parseInt(eventId, 10));
  return count ? result.slice(0, count) : result;
}
function xrangeBuffer(...args) {
  let val = xrange.apply(this, args);
  return convertStringToBuffer(val);
}

// src/commands/xread.js
function xread(option, ...args) {
  let { op, opVal, rest } = option === "STREAMS" ? { op: "COUNT", opVal: 1 / 0, rest: args } : {
    op: option,
    opVal: parseInt(args[0], 10),
    rest: args.slice(2)
  };
  if (["COUNT", "BLOCK"].indexOf(op) < 0)
    throw new Error("ERR syntax error");
  if (rest.length % 2 !== 0)
    throw new Error("ERR Unbalanced XREAD list of streams: for each stream key an ID or '$' must be specified.");
  let toPoll = rest.reduce((memo, arg, i) => {
    let chunk = Math.floor(i / 2), tuple = memo[chunk] || [];
    return memo[chunk] = tuple.concat(arg), memo;
  }, []), pollStream = (stream, id, count = 1) => {
    let data = this.data.get(stream);
    return data ? data.reduce((memo, [eventId, ...row]) => {
      let { polled } = this.data.get(`stream:${stream}:${eventId}`);
      return !polled && (id === "$" || eventId >= id) && memo.length < count ? (this.data.set(`stream:${stream}:${eventId}`, { polled: !0 }), memo.concat([[eventId, ...row]])) : memo;
    }, []) : [];
  }, pollEvents = (streams, countVal) => streams.reduce((memo, [stream, id]) => [[stream, pollStream(stream, id, countVal)]].concat(memo), []);
  return op === "BLOCK" ? new Promise((resolve) => {
    let timeElapsed = 0, f = () => setTimeout(() => {
      if (opVal > 0 && timeElapsed < opVal)
        return resolve(null);
      let events = pollEvents(toPoll, 1);
      return events.length > 0 ? resolve(events) : (timeElapsed += 100, f());
    }, 100);
    f();
  }) : new Promise((resolve) => {
    let events = pollEvents(toPoll, opVal);
    return events.length === 0 ? resolve(null) : resolve(events.slice().reverse());
  });
}
async function xreadBuffer(...args) {
  let val = await xread.apply(this, args);
  return convertStringToBuffer(val);
}

// src/commands/xrevrange.js
function xrevrange(stream, end, start, ...args) {
  if (!stream || !start || !end)
    throw new Error("ERR wrong number of arguments for 'xrevrange' command");
  let [COUNT, count] = args;
  if (COUNT && !count)
    throw new Error("ERR syntax error");
  if (!this.data.has(stream))
    return [];
  let list = this.data.get(stream).slice().reverse(), min = start === "-" ? -1 / 0 : start, max = end === "+" ? 1 / 0 : end, result = list.filter(([eventId]) => min <= parseInt(eventId, 10) && max >= parseInt(eventId, 10));
  return count ? result.slice(0, count) : result;
}
function xrevrangeBuffer(...args) {
  let val = xrevrange.apply(this, args);
  return convertStringToBuffer(val);
}

// src/commands/zadd.js
function zadd(key, ...vals) {
  let options = [];
  for (; ["NX", "XX", "CH", "INCR"].includes(vals[0]); )
    options.push(vals.shift());
  let elems = vals.length;
  if (elems % 2 !== 0 || elems < 1)
    throw new Error("ERR syntax error");
  let nx = options.includes("NX"), xx = options.includes("XX"), ch = options.includes("CH"), incr2 = options.includes("INCR");
  if (nx && xx)
    throw new Error("XX and NX options at the same time are not compatible");
  if (incr2 && elems > 2)
    throw new Error("INCR option supports a single increment-element pair");
  if (!this.data.has(key)) {
    if (xx)
      return 0;
    this.data.set(key, /* @__PURE__ */ new Map());
  }
  let map = this.data.get(key), added = 0, updated = 0;
  for (let i = 0; i < elems; i += 2) {
    let score = Number(vals[i]), value = vals[i + 1];
    map.has(value) ? nx || (incr2 && (score += Number(map.get(value).score)), map.set(value, { score, value }), updated++) : xx || (map.set(value, { score, value }), added++);
  }
  return this.data.set(key, map), ch ? added + updated : added;
}
var zaddBuffer = zadd;

// src/commands/zcard.js
function zcard(key) {
  let map = this.data.get(key);
  if (!map)
    return 0;
  if (!(map instanceof Map))
    throw new Error(`Key ${key} does not contain a sorted set`);
  return this.data.get(key).size;
}
var zcardBuffer = zcard;

// src/commands/zrange-command.common.js
function slice(arr, start, end) {
  return arr.slice(start, end === -1 ? void 0 : end + 1);
}
function normalizeCountToIndex(offset, count, array) {
  return count < 0 ? -count > array.length ? 0 : array.length + count : offset + count;
}
function offsetAndLimit(arr, offset, count) {
  if (count === 0)
    return [];
  let end = normalizeCountToIndex(offset, count, arr);
  return arr.slice(offset, end);
}
function parseLimit(input) {
  let str = `${input}`, strict = !1;
  if (str[0] === "(")
    str = str.substr(1, str.length), strict = !0;
  else {
    if (str === "-inf")
      return { value: -1 / 0, isStrict: !0 };
    if (str === "+inf")
      return { value: 1 / 0, isStrict: !0 };
  }
  return {
    value: parseInt(str, 10),
    isStrict: strict
  };
}
function filterPredicate(min, max) {
  return (it) => !(it.score < min.value || min.isStrict && it.score === min.value || it.score > max.value || max.isStrict && it.score === max.value);
}
function getWithScoresAndLimit(args) {
  let remaining = args.length, pos = 0, withScores = !1, limit = null, offset = null;
  for (; remaining > 0; )
    if (remaining >= 1 && args[pos].toUpperCase() === "WITHSCORES")
      withScores = !0, pos += 1, remaining -= 1;
    else if (remaining >= 3 && args[pos].toUpperCase() === "LIMIT")
      offset = parseInt(args[pos + 1], 10), limit = parseInt(args[pos + 2], 10), pos += 3, remaining -= 3;
    else
      throw new Error("ERR syntax error");
  return { withScores, limit, offset };
}

// src/commands/zcount.js
function zcount(key, inputMin, inputMax) {
  let map = this.data.get(key);
  if (!map || this.data.has(key) && !(this.data.get(key) instanceof Map))
    return 0;
  let min = parseLimit(inputMin), max = parseLimit(inputMax);
  return Array.from(map.values()).filter(filterPredicate(min, max)).length;
}
var zcountBuffer = zcount;

// src/commands/zincrby.js
function zincrby(key, increment, value) {
  this.data.has(key) || this.data.set(key, /* @__PURE__ */ new Map());
  let map = this.data.get(key), score = 0;
  return map.has(value) && ({ score } = map.get(value)), score += parseFloat(increment), map.set(value, { value, score }), this.data.set(key, map), score.toString();
}
function zincrbyBuffer(...args) {
  let val = zincrby.apply(this, args);
  return convertStringToBuffer(val);
}

// src/commands/zinterstore.js
var import_lodash5 = __toESM(require_lodash3());
function zinterstore(destKey, numKeys, ...keys2) {
  let srcMaps = [];
  if (parseInt(numKeys, 10) !== keys2.length)
    throw new Error("ERR syntax error");
  for (let i = 0; i < keys2.length; i += 1) {
    if (!this.data.has(keys2[i]) || !(this.data.get(keys2[i]) instanceof Map))
      return 0;
    srcMaps.push(this.data.get(keys2[i]));
  }
  let inputs = srcMaps.map((x) => JSON.parse(JSON.stringify(Array.from(x.values())))), intersected = (0, import_lodash5.default)(...inputs, "value");
  if (intersected.length === 0)
    return this.data.delete(destKey), 0;
  for (let i = 0; i < intersected.length; i += 1) {
    let weightSum = 0;
    for (let j = 0; j < srcMaps.length; j += 1)
      srcMaps[j].get(intersected[i].value) && (weightSum += srcMaps[j].get(intersected[i].value).score);
    intersected[i].score = weightSum, intersected[i] = [intersected[i].value, intersected[i]];
  }
  let intersectedMap = new Map(intersected);
  return this.data.set(destKey, intersectedMap), intersected.length;
}
var zinterstoreBuffer = zinterstore;

// src/commands/zpopmax.js
var import_lodash6 = __toESM(require_lodash4());
function zpopmax(key, count = 1) {
  let map = this.data.get(key);
  if (map == null || !(map instanceof Map))
    return [];
  let ordered = slice((0, import_lodash6.default)(Array.from(map.values()), ["score", "value"]), -count, -1).reverse();
  return ordered.forEach((it) => {
    map.delete(it.value);
  }), this.data.set(key, map), ordered.flatMap((it) => [it.value, it.score]);
}
function zpopmaxBuffer(...args) {
  let val = zpopmax.apply(this, args);
  return convertStringToBuffer(val);
}

// src/commands/zpopmin.js
var import_lodash7 = __toESM(require_lodash4());
function zpopmin(key, count = 1) {
  let map = this.data.get(key);
  if (map == null || !(map instanceof Map))
    return [];
  let ordered = slice((0, import_lodash7.default)(Array.from(map.values()), ["score", "value"]), 0, count - 1);
  return ordered.forEach((it) => {
    map.delete(it.value);
  }), this.data.set(key, map), ordered.flatMap((it) => [it.value, it.score]);
}
function zpopminBuffer(...args) {
  let val = zpopmin.apply(this, args);
  return convertStringToBuffer(val);
}

// src/commands/zrandmember.js
var import_lodash8 = __toESM(require_lodash4()), import_lodash9 = __toESM(require_lodash());
function zrandmember(key, count, withScores) {
  let map = this.data.get(key);
  if (!map)
    return [];
  if (this.data.has(key) && !(this.data.get(key) instanceof Map))
    return [];
  let result = (0, import_lodash9.default)(Array.from(map.values())).slice(0, count);
  return typeof withScores == "string" && withScores.toUpperCase() === "WITHSCORES" ? result.flatMap((it) => [it.value, `${it.score}`]) : result.map((it) => it.value);
}
function zrandmemberBuffer(...args) {
  let val = zrandmember.apply(this, args);
  return convertStringToBuffer(val);
}

// src/commands/zrange.js
var import_lodash10 = __toESM(require_lodash4());
function zrange(key, s, e, withScores) {
  let map = this.data.get(key);
  if (!map)
    return [];
  if (this.data.has(key) && !(this.data.get(key) instanceof Map))
    return [];
  let start = parseInt(s, 10), end = parseInt(e, 10), ordered = slice((0, import_lodash10.default)(Array.from(map.values()), ["score", "value"]), start, end);
  return typeof withScores == "string" && withScores.toUpperCase() === "WITHSCORES" ? ordered.flatMap((it) => [it.value, `${it.score}`]) : ordered.map((it) => it.value);
}
function zrangeBuffer(...args) {
  let val = zrange.apply(this, args);
  return convertStringToBuffer(val);
}

// src/commands/zrangebyscore.js
var import_lodash11 = __toESM(require_lodash4());
function zrangebyscore(key, inputMin, inputMax, ...args) {
  let map = this.data.get(key);
  if (!map)
    return [];
  if (this.data.has(key) && !(this.data.get(key) instanceof Map))
    return [];
  let { withScores, limit, offset } = getWithScoresAndLimit(args), min = parseLimit(inputMin), max = parseLimit(inputMax), filteredArray = Array.from(map.values()).filter(filterPredicate(min, max)), ordered = (0, import_lodash11.default)(filteredArray, ["score", "value"]);
  if (withScores)
    return limit !== null && (ordered = offsetAndLimit(ordered, offset, limit)), ordered.flatMap((it) => [it.value, it.score]);
  let results = ordered.map((it) => it.value);
  return limit !== null ? offsetAndLimit(results, offset, limit) : results;
}
function zrangebyscoreBuffer(...args) {
  let val = zrangebyscore.apply(this, args);
  return convertStringToBuffer(val);
}

// src/commands/zrank.js
function zrank(key, member) {
  let idx = zrange.call(this, key, 0, -1).indexOf(member);
  return idx >= 0 ? idx : null;
}
var zrankBuffer = zrank;

// src/commands/zrem.js
function zrem(key, ...vals) {
  let map = this.data.get(key);
  if (!map)
    return 0;
  let removed = 0;
  return vals.forEach((val) => {
    map.delete(val) && removed++;
  }), this.data.set(key, map), removed;
}
var zremBuffer = zrem;

// src/commands/zremrangebyrank.js
function zremrangebyrank(key, s, e) {
  let vals = zrange.call(this, key, s, e);
  if (!this.data.has(key))
    return 0;
  let map = this.data.get(key);
  return vals.forEach((val) => {
    map.delete(val);
  }), this.data.set(key, map), vals.length;
}
var zremrangebyrankBuffer = zremrangebyrank;

// src/commands/zremrangebyscore.js
function zremrangebyscore(key, inputMin, inputMax) {
  let vals = zrevrangebyscore.call(this, key, inputMax, inputMin);
  if (!this.data.has(key))
    return 0;
  let map = this.data.get(key);
  return vals.forEach((val) => {
    map.delete(val);
  }), this.data.set(key, map), vals.length;
}
var zremrangebyscoreBuffer = zremrangebyscore;

// src/commands/zrevrange.js
var import_lodash12 = __toESM(require_lodash4());
function zrevrange(key, s, e, w) {
  let map = this.data.get(key);
  if (!map)
    return [];
  if (this.data.has(key) && !(this.data.get(key) instanceof Map))
    return [];
  let start = parseInt(s, 10), end = parseInt(e, 10), val = (0, import_lodash12.default)(Array.from(map.values()), ["score", "value"], ["desc", "desc"]).map((it) => w ? [it.value, it.score] : [it.value]);
  return val = slice(val, start, end), [].concat(...val);
}
function zrevrangeBuffer(...args) {
  let val = zrevrange.apply(this, args);
  return convertStringToBuffer(val);
}

// src/commands/zrevrangebyscore.js
var import_lodash13 = __toESM(require_lodash4());
function zrevrangebyscore(key, inputMax, inputMin, ...args) {
  let map = this.data.get(key);
  if (!map)
    return [];
  if (this.data.has(key) && !(this.data.get(key) instanceof Map))
    return [];
  let { withScores, limit, offset } = getWithScoresAndLimit(args), min = parseLimit(inputMin), max = parseLimit(inputMax), filteredArray = Array.from(map.values()).filter(filterPredicate(min, max)), ordered = (0, import_lodash13.default)(filteredArray, ["score", "value"], ["desc", "desc"]);
  if (withScores)
    return limit !== null && (ordered = offsetAndLimit(ordered, offset, limit)), ordered.flatMap((it) => [it.value, it.score]);
  let results = ordered.map((it) => it.value);
  return limit !== null ? offsetAndLimit(results, offset, limit) : results;
}
function zrevrangebyscoreBuffer(...args) {
  let val = zrevrangebyscore.apply(this, args);
  return convertStringToBuffer(val);
}

// src/commands/zrevrank.js
function zrevrank(key, member) {
  let idx = zrevrange.call(this, key, 0, -1).indexOf(member);
  return idx >= 0 ? idx : null;
}
var zrevrankBuffer = zrevrank;

// src/commands/zscan.js
function zscan(key, cursor, ...args) {
  if (!this.data.has(key))
    return ["0", []];
  let zKeys = [];
  this.data.get(key).forEach(({ score, value }) => {
    zKeys.push([value, score.toString()]);
  });
  let [offset, keys2] = scanHelper(zKeys, 1, cursor, ...args);
  return [offset, [].concat(...keys2)];
}
function zscanBuffer(...args) {
  let val = zscan.apply(this, args);
  return convertStringToBuffer(val);
}

// src/commands/zscore.js
function zscore(key, member) {
  let map = this.data.get(key);
  if (!map || !(map instanceof Map))
    return null;
  let entry = map.get(member);
  return entry ? entry.score.toString() : null;
}
function zscoreBuffer(...args) {
  let val = zscore.apply(this, args);
  return convertStringToBuffer(val);
}

// src/commands-stream/index.js
var commands_stream_exports = {};
__export(commands_stream_exports, {
  hscanStream: () => hscanStream,
  scanStream: () => scanStream,
  sscanStream: () => sscanStream,
  zscanStream: () => zscanStream
});

// src/commands-utils/readable-scan.js
var import_stream = require("stream"), ReadableScan = class extends import_stream.Readable {
  constructor(scanCommand, opt = {}) {
    super({ objectMode: !0 }), this._scanCommand = scanCommand, this._cursor = 0, this.opt = opt, this._drained = !1;
  }
  _callScan() {
    let args = [this._cursor];
    return this.opt.key && args.unshift(this.opt.key), this.opt.match && args.push("MATCH", this.opt.match), this.opt.count && args.push("COUNT", this.opt.count), this._scanCommand(...args);
  }
  _read() {
    if (this._drained) {
      this.push(null);
      return;
    }
    this._callScan().then((res) => {
      let [nextCursor, keys2] = res;
      nextCursor === "0" ? this._drained = !0 : this._cursor = nextCursor, keys2.length > 0 ? this.push(keys2) : this._read();
    }).catch((err) => process.nextTick(() => this.emit("error", err)));
  }
};

// src/commands-stream/hscanStream.js
function hscanStream(key, opt = {}) {
  let options = opt instanceof Object ? opt : {};
  return options.key = key, new ReadableScan(this.hscan, options);
}

// src/commands-stream/scanStream.js
function scanStream(opt) {
  return new ReadableScan(this.scan, opt);
}

// src/commands-stream/sscanStream.js
function sscanStream(key, opt = {}) {
  let options = opt instanceof Object ? opt : {};
  return options.key = key, new ReadableScan(this.sscan, options);
}

// src/commands-stream/zscanStream.js
function zscanStream(key, opt = {}) {
  let options = opt instanceof Object ? opt : {};
  return options.key = key, new ReadableScan(this.zscan, options);
}

// src/context.js
var import_events = require("events");

// src/data.js
function createSharedData(sharedExpires) {
  let raw = {};
  return Object.freeze({
    clear() {
      raw = {};
    },
    delete(key) {
      sharedExpires.has(key) && sharedExpires.delete(key), delete raw[key];
    },
    get(key) {
      sharedExpires.has(key) && sharedExpires.isExpired(key) && this.delete(key);
      let value = raw[key];
      return Array.isArray(value) ? value.slice() : Buffer.isBuffer(value) ? Buffer.from(value) : value instanceof Set ? new Set(value) : value instanceof Map ? new Map(value) : typeof value == "object" && value ? __spreadValues({}, value) : value;
    },
    has(key) {
      return sharedExpires.has(key) && sharedExpires.isExpired(key) && this.delete(key), {}.hasOwnProperty.call(raw, key);
    },
    keys(prefix) {
      let keys2 = Object.keys(raw);
      return prefix ? keys2.filter((key) => key.startsWith(prefix)) : keys2;
    },
    set(key, val) {
      let item = val;
      Array.isArray(val) ? item = val.slice() : Buffer.isBuffer(val) ? item = Buffer.from(val) : val instanceof Set ? item = new Set(val) : val instanceof Map ? item = new Map(val) : typeof val == "object" && val && (item = __spreadValues({}, val)), raw[key] = item;
    }
  });
}
function createData(sharedData, expiresInstance, initial = {}, keyPrefix = "") {
  function createInstance(prefix, expires) {
    return Object.freeze({
      clear: () => sharedData.clear(),
      delete: (key) => sharedData.delete(`${prefix}${key}`),
      get: (key) => sharedData.get(`${prefix}${key}`),
      has: (key) => sharedData.has(`${prefix}${key}`),
      keys: () => sharedData.keys(prefix),
      set: (key, val) => sharedData.set(`${prefix}${key}`, val),
      withKeyPrefix(newKeyPrefix) {
        return newKeyPrefix === prefix ? this : createInstance(newKeyPrefix, expires.withKeyPrefix(newKeyPrefix));
      }
    });
  }
  let data = createInstance(keyPrefix, expiresInstance);
  return Object.keys(initial).forEach((key) => data.set(key, initial[key])), data;
}

// src/expires.js
function createSharedExpires() {
  let expires = {};
  return Object.freeze({
    clear() {
      expires = {};
    },
    get(key) {
      return expires[key];
    },
    set(key, timestamp) {
      expires[key] = +timestamp;
    },
    has(key) {
      return {}.hasOwnProperty.call(expires, key);
    },
    isExpired(key) {
      return expires[key] <= Date.now();
    },
    delete(key) {
      delete expires[key];
    }
  });
}
function createExpires(sharedExpires, keyPrefix = "") {
  function createInstance(prefix) {
    return {
      clear: () => sharedExpires.clear(),
      get: (key) => sharedExpires.get(`${prefix}${key}`),
      set: (key, timestamp) => sharedExpires.set(`${prefix}${key}`, timestamp),
      has: (key) => sharedExpires.has(`${prefix}${key}`),
      isExpired: (key) => sharedExpires.isExpired(`${prefix}${key}`),
      delete: (key) => sharedExpires.delete(`${prefix}${key}`),
      withKeyPrefix(newPrefix) {
        return newPrefix === prefix ? this : createInstance(newPrefix);
      }
    };
  }
  return createInstance(keyPrefix);
}

// src/context.js
var contextMap = /* @__PURE__ */ new Map(), context_default = contextMap;
function createContext(keyPrefix) {
  let expires = createSharedExpires();
  return {
    channels: new import_events.EventEmitter(),
    expires,
    data: createSharedData(expires),
    patternChannels: new import_events.EventEmitter(),
    keyPrefix
  };
}

// src/pipeline.js
var import_as_callback2 = __toESM(require("@ioredis/as-callback"));
var Pipeline = class {
  constructor(redis) {
    this.batch = [], this.redis = redis, this._transactions = 0, this.copyCommands();
  }
  copyCommands() {
    Object.keys(commands_exports).forEach((commandName) => {
      let command3 = commands_exports[commandName];
      this[commandName] = this._createCommand(commandName, command3);
    }), Object.keys(this.redis.customCommands).forEach((commandName) => {
      let command3 = this.redis.customCommands[commandName];
      this[commandName] = this._createCommand(commandName, command3);
    });
  }
  _createCommand(commandName, command3) {
    return (...args) => {
      let lastArgIndex = args.length - 1, callback = args[lastArgIndex];
      typeof callback != "function" ? callback = void 0 : args.length = lastArgIndex;
      let commandEmulator = command3.bind(this.redis), commandArgs = processArguments(args, commandName);
      return this._addTransaction(commandEmulator, commandName, commandArgs, callback), this;
    };
  }
  _addTransaction(commandEmulator, commandName, commandArgs, callback) {
    this.batch.push(() => (0, import_as_callback2.default)(new Promise((resolve) => resolve(safelyExecuteCommand(commandEmulator, commandName, this.redis, ...commandArgs))), callback)), this._transactions += 1;
  }
  exec(callback) {
    let batch = this.batch;
    return this.batch = [], (0, import_as_callback2.default)(Promise.all(batch.map((cmd) => cmd())).then((replies) => replies.map((reply) => [null, reply])), callback);
  }
}, pipeline_default = Pipeline;

// src/index.js
var defaultOptions = {
  data: {},
  keyPrefix: "",
  lazyConnect: !1,
  notifyKeyspaceEvents: "",
  host: "localhost",
  port: 6379
}, pathToHostPort = (path) => {
  let { host, port } = (0, import_utils.parseURL)(path);
  return { host, port };
}, routeOptionsArgs = (...args) => {
  switch (args.length) {
    case 3:
      return __spreadProps(__spreadValues({}, args[2]), { port: args[0], host: args[1] });
    case 2:
      return typeof args[0] == "string" ? __spreadValues(__spreadValues({}, args[1]), pathToHostPort(args[0])) : Number.isInteger(args[0]) && typeof args[1] == "string" ? { port: args[0], host: args[1] } : __spreadProps(__spreadValues({}, args[1]), { port: args[0] });
    case 1:
      return typeof args[0] == "string" ? __spreadValues({}, pathToHostPort(args[0])) : Number.isInteger(args[0]) ? { port: args[0] } : __spreadValues({}, args[0]);
    default:
      return {};
  }
}, getOptions = (...args) => {
  let parsed = routeOptionsArgs(...args), port = parsed.port ? parseInt(parsed.port, 10) : defaultOptions.port, { host = defaultOptions.host } = parsed;
  return __spreadProps(__spreadValues({}, parsed), { port, host });
}, RedisMock = class extends import_events2.EventEmitter {
  constructor(...args) {
    super(), this.batch = void 0, this.connected = !1, this.subscriberMode = !1, this.customCommands = {}, this.shaScripts = {};
    let optionsWithDefault = __spreadValues(__spreadValues({}, defaultOptions), getOptions(...args));
    if (this.keyData = `${optionsWithDefault.host}:${optionsWithDefault.port}`, !context_default.get(this.keyData)) {
      let context2 = createContext(optionsWithDefault.keyPrefix);
      context_default.set(this.keyData, context2);
    }
    let context = context_default.get(this.keyData);
    this.expires = createExpires(context.expires, optionsWithDefault.keyPrefix), this.data = createData(context.data, this.expires, optionsWithDefault.data, optionsWithDefault.keyPrefix), this._initCommands(), this.keyspaceEvents = parseKeyspaceEvents(optionsWithDefault.notifyKeyspaceEvents), optionsWithDefault.lazyConnect === !1 && (this.connected = !0, emitConnectEvent(this));
  }
  get channels() {
    return context_default.get(this.keyData).channels;
  }
  set channels(channels) {
    let oldContext = context_default.get(this.keyData), newContext = __spreadProps(__spreadValues({}, oldContext), {
      channels
    });
    context_default.set(this.keyData, newContext);
  }
  get patternChannels() {
    return context_default.get(this.keyData).patternChannels;
  }
  set patternChannels(patternChannels) {
    let oldContext = context_default.get(this.keyData), newContext = __spreadProps(__spreadValues({}, oldContext), {
      patternChannels
    });
    context_default.set(this.keyData, newContext);
  }
  multi(batch = []) {
    var _a;
    return this.batch = new pipeline_default(this), this.batch._transactions += 1, (_a = batch.forEach) == null || _a.call(batch, ([command3, ...options]) => this.batch[command3](...options)), this.batch;
  }
  pipeline(batch = []) {
    return this.batch = new pipeline_default(this), batch.forEach(([command3, ...options]) => this.batch[command3](...options)), this.batch;
  }
  exec(callback) {
    if (!this.batch)
      return Promise.reject(new Error("ERR EXEC without MULTI"));
    let pipeline = this.batch;
    return this.batch = void 0, pipeline.exec(callback);
  }
  duplicate() {
    let mock = new RedisMock();
    return mock.expires = this.expires, mock.data = this.data, mock.channels = this.channels, mock.patternChannels = this.patternChannels, mock;
  }
  disconnect() {
    let removeFrom = ({ instanceListeners }) => {
      !instanceListeners || instanceListeners.forEach((mapOfInstanceToListener) => {
        mapOfInstanceToListener.forEach((listener, instance) => {
          instance === this && mapOfInstanceToListener.delete(instance);
        });
      });
    };
    removeFrom(this.channels), removeFrom(this.patternChannels);
  }
  _initCommands() {
    Object.keys(commands_exports).forEach((command3) => {
      let commandName = command3 === "evaluate" ? "eval" : command3;
      this[commandName] = command(commands_exports[command3].bind(this), commandName, this);
    }), Object.keys(commands_stream_exports).forEach((command3) => {
      this[command3] = commands_stream_exports[command3].bind(this);
    });
    let list = import_command_list.list.filter((cmd) => !cmd.includes("|")), supportedCommands = [
      ...list,
      ...list.map((command3) => `${command3}Buffer`)
    ], docsLink = "https://github.com/stipsan/ioredis-mock/blob/main/compat.md#supported-commands-";
    supportedCommands.forEach((command3) => {
      command3 in this || Object.defineProperty(this, command3, {
        value: () => {
          throw new TypeError(`Unsupported command: ${JSON.stringify(command3)}, please check the full list over mocked commands: ${docsLink}`);
        },
        writable: !1
      });
    });
  }
};
RedisMock.Command = Command;
RedisMock.Cluster = class extends RedisMock {
  constructor(nodesOptions, clusterOptions) {
    clusterOptions && clusterOptions.redisOptions ? super(clusterOptions.redisOptions) : super(), this.nodes = [], nodesOptions.forEach((options) => this.nodes.push(new RedisMock(options)));
  }
};
module.exports = RedisMock;
//# sourceMappingURL=index.js.map
