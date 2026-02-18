const ConvertHexToRgb = require ('../convert_hex_to_rgb.js')
const expect = require('chai').expect

describe("Hex to rgb conversion test 1", () => {
    it("Testing hex to rgb conversion", () => {
        expect(ConvertHexToRgb("7D1937")).to.equal("R:125,G:25,B:55")
    })
})

describe("Hex to rgb conversion test 2", () => {
    it("Testing hex to rgb conversion", () => {
        expect(ConvertHexToRgb("7DFF7D")).to.equal("R:125,G:255,B:125")
    })
})

describe("Hex to rgb conversion test 3", () => {
    it("Testing hex to rgb conversion", () => {
        expect(ConvertHexToRgb("000091")).to.equal("R:0,G:0,B:145")
    })
})