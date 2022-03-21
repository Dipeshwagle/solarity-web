(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[7143],{

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

/***/ 8357:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "w_": function() { return /* reexport */ GenIcon; }
});

// UNUSED EXPORTS: DefaultContext, IconBase, IconContext, IconsManifest

;// CONCATENATED MODULE: ./node_modules/react-icons/lib/esm/iconsManifest.js
var IconsManifest = [
  {
    "id": "fa",
    "name": "Font Awesome",
    "projectUrl": "https://fontawesome.com/",
    "license": "CC BY 4.0 License",
    "licenseUrl": "https://creativecommons.org/licenses/by/4.0/"
  },
  {
    "id": "io",
    "name": "Ionicons 4",
    "projectUrl": "https://ionicons.com/",
    "license": "MIT",
    "licenseUrl": "https://github.com/ionic-team/ionicons/blob/master/LICENSE"
  },
  {
    "id": "io5",
    "name": "Ionicons 5",
    "projectUrl": "https://ionicons.com/",
    "license": "MIT",
    "licenseUrl": "https://github.com/ionic-team/ionicons/blob/master/LICENSE"
  },
  {
    "id": "md",
    "name": "Material Design icons",
    "projectUrl": "http://google.github.io/material-design-icons/",
    "license": "Apache License Version 2.0",
    "licenseUrl": "https://github.com/google/material-design-icons/blob/master/LICENSE"
  },
  {
    "id": "ti",
    "name": "Typicons",
    "projectUrl": "http://s-ings.com/typicons/",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/"
  },
  {
    "id": "go",
    "name": "Github Octicons icons",
    "projectUrl": "https://octicons.github.com/",
    "license": "MIT",
    "licenseUrl": "https://github.com/primer/octicons/blob/master/LICENSE"
  },
  {
    "id": "fi",
    "name": "Feather",
    "projectUrl": "https://feathericons.com/",
    "license": "MIT",
    "licenseUrl": "https://github.com/feathericons/feather/blob/master/LICENSE"
  },
  {
    "id": "gi",
    "name": "Game Icons",
    "projectUrl": "https://game-icons.net/",
    "license": "CC BY 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/3.0/"
  },
  {
    "id": "wi",
    "name": "Weather Icons",
    "projectUrl": "https://erikflowers.github.io/weather-icons/",
    "license": "SIL OFL 1.1",
    "licenseUrl": "http://scripts.sil.org/OFL"
  },
  {
    "id": "di",
    "name": "Devicons",
    "projectUrl": "https://vorillaz.github.io/devicons/",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "ai",
    "name": "Ant Design Icons",
    "projectUrl": "https://github.com/ant-design/ant-design-icons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "bs",
    "name": "Bootstrap Icons",
    "projectUrl": "https://github.com/twbs/icons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "ri",
    "name": "Remix Icon",
    "projectUrl": "https://github.com/Remix-Design/RemixIcon",
    "license": "Apache License Version 2.0",
    "licenseUrl": "http://www.apache.org/licenses/"
  },
  {
    "id": "fc",
    "name": "Flat Color Icons",
    "projectUrl": "https://github.com/icons8/flat-color-icons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "gr",
    "name": "Grommet-Icons",
    "projectUrl": "https://github.com/grommet/grommet-icons",
    "license": "Apache License Version 2.0",
    "licenseUrl": "http://www.apache.org/licenses/"
  },
  {
    "id": "hi",
    "name": "Heroicons",
    "projectUrl": "https://github.com/tailwindlabs/heroicons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "si",
    "name": "Simple Icons",
    "projectUrl": "https://simpleicons.org/",
    "license": "CC0 1.0 Universal",
    "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/"
  },
  {
    "id": "im",
    "name": "IcoMoon Free",
    "projectUrl": "https://github.com/Keyamoon/IcoMoon-Free",
    "license": "CC BY 4.0 License"
  },
  {
    "id": "bi",
    "name": "BoxIcons",
    "projectUrl": "https://github.com/atisawd/boxicons",
    "license": "CC BY 4.0 License"
  },
  {
    "id": "cg",
    "name": "css.gg",
    "projectUrl": "https://github.com/astrit/css.gg",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "vsc",
    "name": "VS Code Icons",
    "projectUrl": "https://github.com/microsoft/vscode-codicons",
    "license": "CC BY 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/4.0/"
  }
]
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./node_modules/react-icons/lib/esm/iconContext.js

var DefaultContext = {
  color: undefined,
  size: undefined,
  className: undefined,
  style: undefined,
  attr: undefined
};
var IconContext = react.createContext && react.createContext(DefaultContext);
;// CONCATENATED MODULE: ./node_modules/react-icons/lib/esm/iconBase.js
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};




function Tree2Element(tree) {
  return tree && tree.map(function (node, i) {
    return react.createElement(node.tag, __assign({
      key: i
    }, node.attr), Tree2Element(node.child));
  });
}

function GenIcon(data) {
  return function (props) {
    return react.createElement(IconBase, __assign({
      attr: __assign({}, data.attr)
    }, props), Tree2Element(data.child));
  };
}
function IconBase(props) {
  var elem = function (conf) {
    var attr = props.attr,
        size = props.size,
        title = props.title,
        svgProps = __rest(props, ["attr", "size", "title"]);

    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + ' ' : '') + props.className;
    return react.createElement("svg", __assign({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className: className,
      style: __assign(__assign({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && react.createElement("title", null, title), props.children);
  };

  return IconContext !== undefined ? react.createElement(IconContext.Consumer, null, function (conf) {
    return elem(conf);
  }) : elem(DefaultContext);
}
;// CONCATENATED MODULE: ./node_modules/react-icons/lib/esm/index.js




/***/ }),

/***/ 1182:
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.overrideTailwindClasses = exports.findTailwindProperties = void 0;
var fastMemoize_1 = __importDefault(__webpack_require__(7896));
var rules_1 = __webpack_require__(4200);
var defaultOptions = {
    prefix: '',
    jit: true,
    ruleLookupCache: true,
    ignoreCssVariables: true,
};
var isCssVariable = function (className) {
    return className.startsWith('--');
};
var findTailwindPropertiesRaw = function (className, options) {
    var _a, _b;
    return (_b = (_a = (0, rules_1.getRules)(options)
        .find(function (rule) { return rule.regex.test(className); })) === null || _a === void 0 ? void 0 : _a.properties) === null || _b === void 0 ? void 0 : _b.filter(function (property) { return !options.ignoreCssVariables || !isCssVariable(property); });
};
var findTailwindPropertiesMemoized = (0, fastMemoize_1.default)(findTailwindPropertiesRaw);
var findTailwindProperties = function (className, options) {
    if (options === void 0) { options = defaultOptions; }
    return options.ruleLookupCache ? findTailwindPropertiesMemoized(className, options) : findTailwindPropertiesRaw(className, options);
};
exports.findTailwindProperties = findTailwindProperties;
var tailWindPremableEndIndex = function (className) { return className.lastIndexOf(':'); };
// Premable example: 'md:focus:'
var tailWindPremable = function (className) {
    var index = tailWindPremableEndIndex(className);
    return index === -1 ? '' : className.substring(0, index);
};
var stripTailwindPremable = function (className) {
    return className.substring(tailWindPremableEndIndex(className) + 1);
};
var stripTailwindImportant = function (className) {
    return className.replace(/^!/g, '');
};
// Strip tailwind's /25 opacity at the end of the className
// other examples: /[0.35]
var stripTailwindOpacity = function (className) {
    return className.replace(/\/(\d|\.|\[|\])+$/g, '');
};
var stripeTailwindJit = function (className) {
    return stripTailwindOpacity(stripTailwindImportant(className));
};
var getTailwindClassName = function (className, options) {
    var strippedClassName = stripTailwindPremable(className);
    return options.jit ? stripeTailwindJit(strippedClassName) : strippedClassName;
};
var isTailwindClash = function (classA, classB, options) {
    var premableA = tailWindPremable(classA);
    var premableB = tailWindPremable(classB);
    var classAProperties = (0, exports.findTailwindProperties)(getTailwindClassName(classA, options), options);
    var classBProperties = (0, exports.findTailwindProperties)(getTailwindClassName(classB, options), options);
    return classAProperties && classBProperties && premableA === premableB && classAProperties.some(function (property) { return classBProperties.includes(property); });
};
var overrideTailwindClasses = function (classNamesString, optionsArgs) {
    if (optionsArgs === void 0) { optionsArgs = defaultOptions; }
    var options = __assign(__assign({}, defaultOptions), optionsArgs);
    var classNames = classNamesString.split(/\s+/);
    return classNames
        .reduce(function (resultSoFar, className) {
        var nonClashingClasses = resultSoFar.filter(function (r) { return !isTailwindClash(className, r, options); });
        return __spreadArray(__spreadArray([], nonClashingClasses, true), [className], false);
    }, [])
        .join(' ');
};
exports.overrideTailwindClasses = overrideTailwindClasses;


/***/ }),

/***/ 4200:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getRules = void 0;
var fastMemoize_1 = __importDefault(__webpack_require__(7896));
var MATCHES_NOTHING = "a^";
var lookupRule = function (_a) {
    var prefix = _a.prefix, jit = _a.jit;
    var arbitaryValue = jit ? "\\[.+\\]" : MATCHES_NOTHING;
    var number = "((\\d|\\.|/)+|" + arbitaryValue + ")";
    var maybeDashZero = "($|-0|-" + arbitaryValue + ")";
    var maybeDashNumber = "($|-" + number + ")";
    var numbersOrLetters = "([a-zA-Z]|" + number + ")+";
    var dashNumbersOrLetters = "(-|[a-zA-Z]|" + number + ")+";
    var maybeDashNumbersOrLetters = "($|-" + dashNumbersOrLetters + ")";
    var rules = [
        {
            regex: "content-none",
            properties: ['content'],
        },
        {
            regex: "ease-(linear|in|out|in-out)",
            properties: ['transition-timing-function'],
        },
        {
            regex: "duration-" + number,
            properties: ['transition-duration'],
        },
        {
            regex: "delay-" + number,
            properties: ['transition-delay'],
        },
        {
            regex: "transition($|-all|-colors|-opacity|-shadow|-transform)",
            properties: ['transition-duration', 'transition-property', 'transition-timing-function'],
        },
        {
            regex: "transition-none",
            properties: ['transition-property'],
        },
        {
            regex: "backdrop-sepia" + maybeDashZero,
            properties: ['--tw-backdrop-sepia'],
        },
        {
            regex: "backdrop-saturate-" + number,
            properties: ['--tw-backdrop-saturate'],
        },
        {
            regex: "backdrop-opacity-" + number,
            properties: ['--tw-backdrop-opacity'],
        },
        {
            regex: "backdrop-invert" + maybeDashZero,
            properties: ['--tw-backdrop-invert'],
        },
        {
            regex: "-?backdrop-hue-rotate-" + number,
            properties: ['--tw-backdrop-hue-rotate'],
        },
        {
            regex: "backdrop-grayscale" + maybeDashZero,
            properties: ['--tw-backdrop-grayscale'],
        },
        {
            regex: "backdrop-contrast-" + number,
            properties: ['--tw-backdrop-contrast'],
        },
        {
            regex: "backdrop-brightness-" + number,
            properties: ['--tw-backdrop-brightness'],
        },
        {
            regex: "backdrop-blur" + maybeDashNumbersOrLetters,
            properties: ['--tw-backdrop-blur'],
        },
        {
            regex: "backdrop-filter-none",
            properties: ['-webkit-backdrop-filter', 'backdrop-filter'],
        },
        {
            regex: "backdrop-filter",
            properties: [
                '--tw-backdrop-blur',
                '--tw-backdrop-brightness',
                '--tw-backdrop-contrast',
                '--tw-backdrop-grayscale',
                '--tw-backdrop-hue-rotate',
                '--tw-backdrop-invert',
                '--tw-backdrop-opacity',
                '--tw-backdrop-saturate',
                '--tw-backdrop-sepia',
                '-webkit-backdrop-filter',
                'backdrop-filter',
            ],
        },
        {
            regex: "sepia" + maybeDashZero,
            properties: ['--tw-sepia'],
        },
        {
            regex: "saturate-" + number,
            properties: ['--tw-saturate'],
        },
        {
            regex: "invert" + maybeDashZero,
            properties: ['--tw-invert'],
        },
        {
            regex: "-?hue-rotate-" + number,
            properties: ['--tw-hue-rotate'],
        },
        {
            regex: "grayscale" + maybeDashZero,
            properties: ['--tw-grayscale'],
        },
        {
            regex: "drop-shadow" + maybeDashNumbersOrLetters,
            properties: ['--tw-drop-shadow'],
        },
        {
            regex: "contrast-" + number,
            properties: ['--tw-contrast'],
        },
        {
            regex: "brightness-" + number,
            properties: ['--tw-brightness'],
        },
        {
            regex: "blur" + maybeDashNumbersOrLetters,
            properties: ['--tw-blur'],
        },
        {
            regex: "filter-none",
            properties: ['filter'],
        },
        {
            regex: "filter",
            properties: [
                '--tw-blur',
                '--tw-brightness',
                '--tw-contrast',
                '--tw-drop-shadow',
                '--tw-grayscale',
                '--tw-hue-rotate',
                '--tw-invert',
                '--tw-saturate',
                '--tw-sepia',
                'filter',
            ],
        },
        {
            regex: "ring-offset-[A-Za-z].*",
            properties: ['--tw-ring-offset-color'],
        },
        {
            regex: "ring-offset-" + number,
            properties: ['--tw-ring-offset-width'],
        },
        {
            regex: "ring-opacity-" + number,
            properties: ['--tw-ring-opacity'],
        },
        {
            regex: "ring-(transparent|current)",
            properties: ['--tw-ring-color'],
        },
        {
            regex: "ring" + maybeDashNumber,
            properties: ['--tw-ring-offset-shadow', '--tw-ring-shadow', 'box-shadow'],
        },
        {
            regex: "ring-inset",
            properties: ['--tw-ring-inset'],
        },
        {
            regex: "ring-" + dashNumbersOrLetters,
            properties: ['--tw-ring-color', '--tw-ring-opacity'],
        },
        {
            regex: "outline-(none|white|black)",
            properties: ['outline', 'outline-offset'],
        },
        {
            regex: "shadow" + maybeDashNumbersOrLetters,
            properties: ['--tw-shadow', 'box-shadow'],
        },
        {
            regex: "mix-blend-" + dashNumbersOrLetters,
            properties: ['mix-blend-mode'],
        },
        {
            regex: "bg-blend-" + dashNumbersOrLetters,
            properties: ['background-blend-mode'],
        },
        {
            regex: "opacity-" + number,
            properties: ['opacity'],
        },
        {
            regex: "caret-" + dashNumbersOrLetters,
            properties: ['caret-color'],
        },
        {
            regex: "(subpixel-antialiased|antialiased)",
            properties: ['-moz-osx-font-smoothing', '-webkit-font-smoothing'],
        },
        {
            regex: "(underline|line-through|no-underline)",
            properties: ['text-decoration'],
        },
        {
            regex: "text-opacity-" + number,
            properties: ['--tw-text-opacity'],
        },
        {
            regex: "text-(transparent|current)",
            properties: ['color'],
        },
        {
            regex: "text-(xs|sm|base|lg|xl|\\dxl)",
            properties: ['font-size', 'line-height'],
        },
        {
            regex: "text-(left|center|right|justify)",
            properties: ['text-align'],
        },
        {
            regex: "text-" + dashNumbersOrLetters,
            properties: ['--tw-text-opacity', 'color'],
        },
        {
            regex: "tracking-" + dashNumbersOrLetters,
            properties: ['letter-spacing'],
        },
        {
            regex: "leading-" + dashNumbersOrLetters,
            properties: ['line-height'],
        },
        {
            regex: "(diagonal-fractions|stacked-fractions)",
            properties: ['--tw-numeric-fraction'],
        },
        {
            regex: "(proportional-nums|tabular-nums)",
            properties: ['--tw-numeric-spacing'],
        },
        {
            regex: "(lining-nums|oldstyle-nums)",
            properties: ['--tw-numeric-figure'],
        },
        {
            regex: "slashed-zero",
            properties: ['--tw-slashed-zero'],
        },
        {
            regex: "normal-nums",
            properties: ['font-variant-numeric'],
        },
        {
            regex: "ordinal",
            properties: ['--tw-numeric-figure', '--tw-numeric-fraction', '--tw-numeric-spacing', '--tw-ordinal', '--tw-slashed-zero', 'font-variant-numeric'],
        },
        {
            regex: "(italic|not-italic)",
            properties: ['font-style'],
        },
        {
            regex: "(uppercase|lowercase|capitalize|normal-case)",
            properties: ['text-transform'],
        },
        {
            regex: "font-(sans|serif|mono)",
            properties: ['font-family'],
        },
        {
            regex: "font-" + dashNumbersOrLetters,
            properties: ['font-weight'],
        },
        {
            regex: "align-" + dashNumbersOrLetters,
            properties: ['vertical-align'],
        },
        {
            regex: "pl-" + numbersOrLetters,
            properties: ['padding-left'],
        },
        {
            regex: "pb-" + numbersOrLetters,
            properties: ['padding-bottom'],
        },
        {
            regex: "pr-" + numbersOrLetters,
            properties: ['padding-right'],
        },
        {
            regex: "pt-" + numbersOrLetters,
            properties: ['padding-top'],
        },
        {
            regex: "py-" + numbersOrLetters,
            properties: ['padding-bottom', 'padding-top'],
        },
        {
            regex: "px-" + numbersOrLetters,
            properties: ['padding-left', 'padding-right'],
        },
        {
            regex: "p-" + numbersOrLetters,
            properties: ['padding'],
        },
        {
            regex: "object-(bottom|center|left.*|right.*|top)",
            properties: ['-o-object-position', 'object-position'],
        },
        {
            regex: "object-(contain|cover|fill|none|scale-down)",
            properties: ['-o-object-fit', 'object-fit'],
        },
        {
            regex: "stroke-" + number,
            properties: ['stroke-width'],
        },
        {
            regex: "stroke-current",
            properties: ['stroke'],
        },
        {
            regex: "fill-current",
            properties: ['fill'],
        },
        {
            regex: "bg-origin-" + dashNumbersOrLetters,
            properties: ['background-origin'],
        },
        {
            regex: "bg-(no-)?repeat" + maybeDashNumbersOrLetters,
            properties: ['background-repeat'],
        },
        {
            regex: "bg-(bottom|center|left.*|right.*|top)",
            properties: ['background-position'],
        },
        {
            regex: "bg-clip-text",
            properties: ['-webkit-background-clip', 'background-clip'],
        },
        {
            regex: "bg-clip-(border|padding|content)",
            properties: ['background-clip'],
        },
        {
            regex: "bg-(fixed|local|scroll)",
            properties: ['background-attachment'],
        },
        {
            regex: "bg-(auto|cover|contain)",
            properties: ['background-size'],
        },
        {
            regex: "decoration-(slice|clone)",
            properties: ['-webkit-box-decoration-break', 'box-decoration-break'],
        },
        {
            regex: "to-" + dashNumbersOrLetters,
            properties: ['--tw-gradient-to'],
        },
        {
            regex: "via-" + dashNumbersOrLetters,
            properties: ['--tw-gradient-stops'],
        },
        {
            regex: "from-" + dashNumbersOrLetters,
            properties: ['--tw-gradient-from', '--tw-gradient-stops'],
        },
        {
            regex: "bg-(none|gradient-to-" + dashNumbersOrLetters + ")",
            properties: ['background-image'],
        },
        {
            regex: "bg-opacity-" + number,
            properties: ['--tw-bg-opacity'],
        },
        {
            regex: "bg-(transparent|current)",
            properties: ['background-color'],
        },
        {
            regex: "bg-" + dashNumbersOrLetters,
            properties: ['--tw-bg-opacity', 'background-color'],
        },
        {
            regex: "border-opacity-" + number,
            properties: ['--tw-border-opacity'],
        },
        {
            regex: "border-l" + maybeDashNumber,
            properties: ['border-left-width'],
        },
        {
            regex: "border-b" + maybeDashNumber,
            properties: ['border-bottom-width'],
        },
        {
            regex: "border-r" + maybeDashNumber,
            properties: ['border-right-width'],
        },
        {
            regex: "border-t" + maybeDashNumber,
            properties: ['border-top-width'],
        },
        {
            regex: "(divide-transparent|divide-current|border-transparent|border-current)",
            properties: ['border-color'],
        },
        {
            regex: "(divide|border)-(solid|dashed|dotted|double|none)",
            properties: ['border-style'],
        },
        {
            regex: "border-(collapse|separate)",
            properties: ['border-collapse'],
        },
        {
            regex: "border" + maybeDashNumber,
            properties: ['border-width'],
        },
        {
            regex: "border-" + dashNumbersOrLetters,
            properties: ['--tw-border-opacity', 'border-color'],
        },
        {
            regex: "rounded-bl" + maybeDashNumbersOrLetters,
            properties: ['border-bottom-left-radius'],
        },
        {
            regex: "rounded-br" + maybeDashNumbersOrLetters,
            properties: ['border-bottom-right-radius'],
        },
        {
            regex: "rounded-tr" + maybeDashNumbersOrLetters,
            properties: ['border-top-right-radius'],
        },
        {
            regex: "rounded-tl" + maybeDashNumbersOrLetters,
            properties: ['border-top-left-radius'],
        },
        {
            regex: "rounded-l" + maybeDashNumbersOrLetters,
            properties: ['border-bottom-left-radius', 'border-top-left-radius'],
        },
        {
            regex: "rounded-b" + maybeDashNumbersOrLetters,
            properties: ['border-bottom-left-radius', 'border-bottom-right-radius'],
        },
        {
            regex: "rounded-r" + maybeDashNumbersOrLetters,
            properties: ['border-bottom-right-radius', 'border-top-right-radius'],
        },
        {
            regex: "rounded-t" + maybeDashNumbersOrLetters,
            properties: ['border-top-left-radius', 'border-top-right-radius'],
        },
        {
            regex: "rounded" + maybeDashNumbersOrLetters,
            properties: ['border-radius'],
        },
        {
            regex: "break-all",
            properties: ['word-break'],
        },
        {
            regex: "break-words",
            properties: ['overflow-wrap'],
        },
        {
            regex: "break-normal",
            properties: ['overflow-wrap', 'word-break'],
        },
        {
            regex: "whitespace-(normal|nowrap|pre|pre-line|pre-wrap)",
            properties: ['white-space'],
        },
        {
            regex: "overflow-(clip|ellipsis)",
            properties: ['text-overflow'],
        },
        {
            regex: "truncate",
            properties: ['overflow', 'text-overflow', 'white-space'],
        },
        {
            regex: "overscroll-x-(auto|contain|none)",
            properties: ['overscroll-behavior-x'],
        },
        {
            regex: "overscroll-y-(auto|contain|none)",
            properties: ['overscroll-behavior-y'],
        },
        {
            regex: "overscroll-(auto|contain|none)",
            properties: ['-ms-scroll-chaining', 'overscroll-behavior'],
        },
        {
            regex: "overflow-y-(auto|hidden|visible|scroll)",
            properties: ['overflow-y'],
        },
        {
            regex: "overflow-x-(auto|hidden|visible|scroll)",
            properties: ['overflow-x'],
        },
        {
            regex: "overflow-(auto|hidden|visible|scroll)",
            properties: ['overflow'],
        },
        {
            regex: "justify-self-(auto|start|end|center|stretch)",
            properties: ['justify-self'],
        },
        {
            regex: "self-(auto|start|end|center|stretch|baseline)",
            properties: ['align-self'],
        },
        {
            regex: "place-self-(auto|start|end|center|stretch)",
            properties: ['place-self'],
        },
        {
            regex: "divide-opacity-" + number,
            properties: ['--tw-divide-opacity'],
        },
        {
            regex: "divide-x-reverse",
            properties: ['--tw-divide-x-reverse'],
        },
        {
            regex: "divide-y-reverse",
            properties: ['--tw-divide-y-reverse'],
        },
        {
            regex: "divide-y" + maybeDashNumber,
            properties: ['--tw-divide-y-reverse', 'border-bottom-width', 'border-top-width'],
        },
        {
            regex: "divide-x" + maybeDashNumber,
            properties: ['--tw-divide-x-reverse', 'border-left-width', 'border-right-width'],
        },
        {
            regex: "divide-" + dashNumbersOrLetters,
            properties: ['--tw-divide-opacity', 'border-color'],
        },
        {
            regex: "space-x-reverse",
            properties: ['--tw-space-x-reverse'],
        },
        {
            regex: "space-y-reverse",
            properties: ['--tw-space-y-reverse'],
        },
        {
            regex: "-?space-y-" + numbersOrLetters,
            properties: ['--tw-space-y-reverse', 'margin-bottom', 'margin-top'],
        },
        {
            regex: "-?space-x-" + numbersOrLetters,
            properties: ['--tw-space-x-reverse', 'margin-left', 'margin-right'],
        },
        {
            regex: "gap-y-" + numbersOrLetters,
            properties: ['row-gap'],
        },
        {
            regex: "gap-x-" + numbersOrLetters,
            properties: ['-moz-column-gap', 'column-gap'],
        },
        {
            regex: "gap-" + numbersOrLetters,
            properties: ['gap'],
        },
        {
            regex: "justify-items-(start|end|center|stretch)",
            properties: ['justify-items'],
        },
        {
            regex: "justify-(start|end|center|between|around|evenly)",
            properties: ['justify-content'],
        },
        {
            regex: "items-(start|end|center|baseline|stretch)",
            properties: ['align-items'],
        },
        {
            regex: "content-(center|start|end|between|around|evenly)",
            properties: ['align-content'],
        },
        {
            regex: "place-items-(start|end|center|stretch)",
            properties: ['place-items'],
        },
        {
            regex: "place-content-(center|start|end|between|around|evenly|stretch)",
            properties: ['place-content'],
        },
        {
            regex: "flex-(wrap|wrap-reverse|nowrap)",
            properties: ['flex-wrap'],
        },
        {
            regex: "flex-(row|row-reverse|col|col-reverse)",
            properties: ['flex-direction'],
        },
        {
            regex: "grid-rows-" + numbersOrLetters,
            properties: ['grid-template-rows'],
        },
        {
            regex: "grid-cols-" + dashNumbersOrLetters,
            properties: ['grid-template-columns'],
        },
        {
            regex: "auto-rows-" + dashNumbersOrLetters,
            properties: ['grid-auto-rows'],
        },
        {
            regex: "grid-flow-" + dashNumbersOrLetters,
            properties: ['grid-auto-flow'],
        },
        {
            regex: "auto-cols-" + dashNumbersOrLetters,
            properties: ['grid-auto-columns'],
        },
        {
            regex: "appearance-none",
            properties: ['-moz-appearance', '-webkit-appearance', 'appearance'],
        },
        {
            regex: "list-(none|disc|decimal)",
            properties: ['list-style-type'],
        },
        {
            regex: "list-(inside|outside)",
            properties: ['list-style-position'],
        },
        {
            regex: "resize(-none|-y|-x)?",
            properties: ['resize'],
        },
        {
            regex: "select-all",
            properties: ['-moz-user-select', '-webkit-user-select', 'user-select'],
        },
        {
            regex: "select-(none|text|auto)",
            properties: ['-moz-user-select', '-ms-user-select', '-webkit-user-select', 'user-select'],
        },
        {
            regex: "cursor-" + dashNumbersOrLetters,
            properties: ['cursor'],
        },
        {
            regex: "animate-" + dashNumbersOrLetters,
            properties: ['-webkit-animation', 'animation'],
        },
        {
            regex: "scale-y-" + number,
            properties: ['--tw-scale-y'],
        },
        {
            regex: "scale-x-" + number,
            properties: ['--tw-scale-x'],
        },
        {
            regex: "scale-" + number,
            properties: ['--tw-scale-x', '--tw-scale-y'],
        },
        {
            regex: "-?skew-y-" + number,
            properties: ['--tw-skew-y'],
        },
        {
            regex: "-?skew-x-" + number,
            properties: ['--tw-skew-x'],
        },
        {
            regex: "-?rotate-" + number,
            properties: ['--tw-rotate'],
        },
        {
            regex: "-?translate-y-" + numbersOrLetters,
            properties: ['--tw-translate-y'],
        },
        {
            regex: "-?translate-x-" + numbersOrLetters,
            properties: ['--tw-translate-x'],
        },
        {
            regex: "transform-none",
            properties: ['transform'],
        },
        {
            regex: "transform(-gpu)?",
            properties: ['--tw-rotate', '--tw-scale-x', '--tw-scale-y', '--tw-skew-x', '--tw-skew-y', '--tw-translate-x', '--tw-translate-y', 'transform'],
        },
        {
            regex: "origin-" + dashNumbersOrLetters,
            properties: ['transform-origin'],
        },
        {
            regex: "table-(auto|fixed)",
            properties: ['table-layout'],
        },
        {
            regex: "flex-grow" + maybeDashZero,
            properties: ['flex-grow'],
        },
        {
            regex: "flex-shrink" + maybeDashZero,
            properties: ['flex-shrink'],
        },
        {
            regex: "flex-" + dashNumbersOrLetters,
            properties: ['flex'],
        },
        {
            regex: "max-w-" + dashNumbersOrLetters,
            properties: ['max-width'],
        },
        {
            regex: "min-w-" + dashNumbersOrLetters,
            properties: ['min-width'],
        },
        {
            regex: "w-" + dashNumbersOrLetters,
            properties: ['width'],
        },
        {
            regex: "min-h-" + dashNumbersOrLetters,
            properties: ['min-height'],
        },
        {
            regex: "max-h-" + dashNumbersOrLetters,
            properties: ['max-height'],
        },
        {
            regex: "h-" + dashNumbersOrLetters,
            properties: ['height'],
        },
        {
            regex: "(block|inline-block|inline|flex|inline-flex|table|inline-table|table-caption|table-cell|table-column|table-column-group|table-footer-group|table-header-group|table-row-group|table-row|flow-root|grid|inline-grid|contents|list-item|hidden)",
            properties: ['display'],
        },
        {
            regex: "box-(border|content)",
            properties: ['box-sizing'],
        },
        {
            regex: "-?ml-" + numbersOrLetters,
            properties: ['margin-left'],
        },
        {
            regex: "-?mb-" + numbersOrLetters,
            properties: ['margin-bottom'],
        },
        {
            regex: "-?mr-" + numbersOrLetters,
            properties: ['margin-right'],
        },
        {
            regex: "-?mt-" + numbersOrLetters,
            properties: ['margin-top'],
        },
        {
            regex: "-?my-" + numbersOrLetters,
            properties: ['margin-bottom', 'margin-top'],
        },
        {
            regex: "-?mx-" + numbersOrLetters,
            properties: ['margin-left', 'margin-right'],
        },
        {
            regex: "-?m-" + numbersOrLetters,
            properties: ['margin'],
        },
        {
            regex: "clear-(left|right|both|none)",
            properties: ['clear'],
        },
        {
            regex: "float-(right|left|none)",
            properties: ['float'],
        },
        {
            regex: "row-end-" + numbersOrLetters,
            properties: ['grid-row-end'],
        },
        {
            regex: "row-start-" + numbersOrLetters,
            properties: ['grid-row-start'],
        },
        {
            regex: "row-(auto|span-" + numbersOrLetters + ")",
            properties: ['grid-row'],
        },
        {
            regex: "col-end-" + numbersOrLetters,
            properties: ['grid-column-end'],
        },
        {
            regex: "col-start-" + numbersOrLetters,
            properties: ['grid-column-start'],
        },
        {
            regex: "col-(auto|span-" + numbersOrLetters + ")",
            properties: ['grid-column'],
        },
        {
            regex: "order-" + numbersOrLetters,
            properties: ['order'],
        },
        {
            regex: "z-" + numbersOrLetters,
            properties: ['z-index'],
        },
        {
            regex: "(isolate|isolation-auto)",
            properties: ['isolation'],
        },
        {
            regex: "-?left-" + dashNumbersOrLetters,
            properties: ['left'],
        },
        {
            regex: "-?bottom-" + dashNumbersOrLetters,
            properties: ['bottom'],
        },
        {
            regex: "-?right-" + dashNumbersOrLetters,
            properties: ['right'],
        },
        {
            regex: "-?top-" + dashNumbersOrLetters,
            properties: ['top'],
        },
        {
            regex: "-?inset-y-" + dashNumbersOrLetters,
            properties: ['bottom', 'top'],
        },
        {
            regex: "-?inset-x-" + dashNumbersOrLetters,
            properties: ['left', 'right'],
        },
        {
            regex: "-?inset-" + dashNumbersOrLetters,
            properties: ['bottom', 'left', 'right', 'top'],
        },
        {
            regex: "(static|fixed|absolute|relative|sticky)",
            properties: ['position'],
        },
        {
            regex: "(visible|invisible)",
            properties: ['visibility'],
        },
        {
            regex: "pointer-events-(none|auto)",
            properties: ['pointer-events'],
        },
        {
            regex: "not-sr-only",
            properties: ['clip', 'height', 'margin', 'overflow', 'padding', 'position', 'white-space', 'width'],
        },
        {
            regex: "sr-only",
            properties: ['border-width', 'clip', 'height', 'margin', 'overflow', 'padding', 'position', 'white-space', 'width'],
        },
    ];
    return rules.map(function (rule) { return ({ regex: new RegExp("^" + prefix + rule.regex + "$"), properties: rule.properties }); });
};
var memoizedlookupRule = (0, fastMemoize_1.default)(lookupRule);
var getRules = function (options) { return (options.ruleLookupCache ? memoizedlookupRule(options) : lookupRule(options)); };
exports.getRules = getRules;


/***/ }),

/***/ 7896:
/***/ (function(module) {

"use strict";

/* eslint-disable */
//
// Main
//
function memoize(fn, options) {
    var cache = options && options.cache ? options.cache : cacheDefault;
    var serializer = options && options.serializer ? options.serializer : serializerDefault;
    var strategy = options && options.strategy ? options.strategy : strategyDefault;
    return strategy(fn, {
        cache: cache,
        serializer: serializer,
    });
}
//
// Strategy
//
function isPrimitive(value) {
    return value == null || typeof value === 'number' || typeof value === 'boolean'; // || typeof value === "string" 'unsafe' primitive for our needs
}
function monadic(fn, cache, serializer, arg) {
    var cacheKey = isPrimitive(arg) ? arg : serializer(arg);
    var computedValue = cache.get(cacheKey);
    if (typeof computedValue === 'undefined') {
        computedValue = fn.call(this, arg);
        cache.set(cacheKey, computedValue);
    }
    return computedValue;
}
function variadic(fn, cache, serializer) {
    var args = Array.prototype.slice.call(arguments, 3);
    var cacheKey = serializer(args);
    var computedValue = cache.get(cacheKey);
    if (typeof computedValue === 'undefined') {
        computedValue = fn.apply(this, args);
        cache.set(cacheKey, computedValue);
    }
    return computedValue;
}
function assemble(fn, context, strategy, cache, serialize) {
    return strategy.bind(context, fn, cache, serialize);
}
function strategyDefault(fn, options) {
    var strategy = fn.length === 1 ? monadic : variadic;
    return assemble(fn, this, strategy, options.cache.create(), options.serializer);
}
function strategyVariadic(fn, options) {
    var strategy = variadic;
    return assemble(fn, this, strategy, options.cache.create(), options.serializer);
}
function strategyMonadic(fn, options) {
    var strategy = monadic;
    return assemble(fn, this, strategy, options.cache.create(), options.serializer);
}
//
// Serializer
//
function serializerDefault() {
    return JSON.stringify(arguments);
}
//
// Cache
//
function ObjectWithoutPrototypeCache() {
    this.cache = Object.create(null);
}
ObjectWithoutPrototypeCache.prototype.has = function (key) {
    return key in this.cache;
};
ObjectWithoutPrototypeCache.prototype.get = function (key) {
    return this.cache[key];
};
ObjectWithoutPrototypeCache.prototype.set = function (key, value) {
    this.cache[key] = value;
};
var cacheDefault = {
    create: function create() {
        return new ObjectWithoutPrototypeCache();
    },
};
//
// API
//
module.exports = memoize;
module.exports.strategies = {
    variadic: strategyVariadic,
    monadic: strategyMonadic,
};


/***/ })

}]);