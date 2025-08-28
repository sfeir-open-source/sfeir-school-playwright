"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllCssContent = getAllCssContent;
exports.getCssClassUsedInSlide = getCssClassUsedInSlide;
const node_fs_1 = __importDefault(require("node:fs"));
const path_utils_1 = require("./path.utils");
const THEME_CSS_FILES = [
    "web_modules/sfeir-school-theme/sfeir-school-theme.css",
    "web_modules/sfeir-school-theme/fontello-sfeir/css/sfeir.css",
    "css/slides.css",
];
const OTHER_KNOWN_CSS_CLASSES = [
    ".list-fragment",
    ".transition-bg-sfeir-1",
    ".transition-bg-sfeir-2",
    ".transition-bg-sfeir-3",
];
function getAllCssContent(rootDir, extraCssFiles) {
    return (THEME_CSS_FILES.concat(extraCssFiles)).map((cssFilePath) => getCssFile(rootDir, cssFilePath)).concat(OTHER_KNOWN_CSS_CLASSES).join("\n\n\n");
}
function getCssFile(rootDir, cssPath) {
    return node_fs_1.default.readFileSync((0, path_utils_1.docsFilePath)(rootDir, cssPath), "utf-8");
}
function getCssClassUsedInSlide(fileContent) {
    return fileContent.split("\n")
        .filter((row) => row.startsWith("<!--"))
        .map((row) => {
        const classesPart = row.split('class="')[1];
        return classesPart === null || classesPart === void 0 ? void 0 : classesPart.substring(0, classesPart.indexOf('"'));
    })
        .filter((classes) => classes != undefined)
        .flatMap((classes) => classes.split(" "));
}
//# sourceMappingURL=css.utils.js.map