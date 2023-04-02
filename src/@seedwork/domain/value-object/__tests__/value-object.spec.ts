import ValueObject from "../value-object";


class StubValueObject extends ValueObject{

}

describe("ValueObject Unit Tests",()=>{
  it("should set a value", ()=>{
    
    let vo = new StubValueObject('string value')
    expect(vo.value).toBe('string value')
    console.log();
    
    
    vo = new StubValueObject({prop1: 'moeda1'})
    expect(vo.value).toStrictEqual({prop1: 'moeda1'})
  })

  it("should convert to string",()=>{
    const date = new Date()

    let arrange = [
      { received: null, expected: "null"},
      { received: undefined, expected: "undefined"},
      { received: "", expected: ""},
      { received: "fake test", expected: "fake test"},
      { received: 0, expected: "0"},
      { received: 1, expected: "1"},
      { received: 4, expected: "4"},
      { received: true, expected: "true"},
      { received: false, expected: "false"},
      { received: date, expected: date.toString()},
      { 
        received: { prop1: "value1" }, 
        expected: JSON.stringify({ prop1: "value1"})
      },
    ]

    arrange.forEach((value) => {
      let vo = new StubValueObject(value.received)
  
      expect(vo + "").toBe(value.expected)
    })

  })
})