const knownTypes: Readonly<string[]> = [
    "xsd:date",
    "xsd:int",
    "xsd:decimal"
]

export const inKnownTypes = (type: string) => {
    return knownTypes.includes(type)
}

export const mapTypes = (type: string) => {
    if (type === "xsd:int" || type === "xsd:decimal") {
        return "number"
    } else {
        return "DateTime"
    }
}
