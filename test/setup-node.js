// use test configuration for tsconfig
process.env.TS_NODE_PROJECT = "tsconfig.test.json";

// inject mocha globally to allow custom interface refer without direct import - bypass bundle issue
global.mocha = require("mocha");
global.chai = require("chai");
