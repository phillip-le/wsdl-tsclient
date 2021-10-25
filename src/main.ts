import { parseAndGenerate } from "./index";

const main = async () => {
    parseAndGenerate("../test/resources/shares.wsdl", "./generated")
}

// main().then()