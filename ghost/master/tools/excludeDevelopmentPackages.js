const fs = require("fs");
const path = require("path");
const shell = require("shelljs");
const normalizePath = require("normalize-path");

const ghostMasterPath = __dirname + "/..";
const ghostRootPath = ghostMasterPath + "/../..";
const developerOptionsPath = ghostRootPath + "/developer_options.txt";

const crlf = "\x0d\x0a";
process.chdir(ghostMasterPath);

const allPackages =
    shell
    .exec("npm ls --parseable", {silent: true})
    .split(/\r?\n/)
    .filter(s => s.length);
const productionPackages =
    shell
    .exec("npm ls --parseable --production", {silent: true})
    .split(/\r?\n/)
    .filter(s => s.length);

const productionPackagesHash = {};
for (const package of productionPackages) productionPackagesHash[package] = true;
const developmentPackages = allPackages.filter(package => !productionPackagesHash[package]);
const normalizedDevelopmentPackages = developmentPackages.map(package => normalizePath(path.relative(ghostRootPath, package)));

const developerOptionsContent = fs.readFileSync(developerOptionsPath, "utf8");
const currentPaths =
    developerOptionsContent
    .split(/\r?\n/)
    .filter(line => line.length)
    .map(line => normalizePath(path.normalize(line.split(",")[0])));
const currentPathsHash = {};
for (const currentPath of currentPaths) currentPathsHash[currentPath] = true;

const notExistPaths = normalizedDevelopmentPackages.filter(package => !currentPathsHash[package]);

fs.writeFileSync(
    developerOptionsPath,
    developerOptionsContent.replace(/\r?\n?$/, crlf) +
    notExistPaths.map(p => `${p},nonar,noupdate${crlf}`).join(""),
);
