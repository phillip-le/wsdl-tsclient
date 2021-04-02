import test from "tape";
import { existsSync } from "fs";
import { parseAndGenerate } from "../src";
import { Logger } from "../src/utils/logger";

test("builtin_types", async t => {
    Logger.disabled();

    const input = "./test/resources/builtin_types.wsdl";
    const outdir = "./test/generated";

    t.test("generate wsdl client", async t => {
        await parseAndGenerate(input, outdir);
        t.end();
    });

    t.test("check definitions", async t => {
        t.equal(existsSync(`${outdir}/builtintypes/definitions/Xsduration.ts`), true);
        t.equal(existsSync(`${outdir}/builtintypes/definitions/XsnonNegativeInteger.ts`), true);
        t.equal(existsSync(`${outdir}/builtintypes/definitions/XsnonNegativeInteger1.ts`), true);
        t.equal(existsSync(`${outdir}/builtintypes/definitions/Xsstring.ts`), true);
        t.end();
    });
});