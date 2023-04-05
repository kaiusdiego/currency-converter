import InvalidUuidError from "../../../domain/errors/invalid-uuid.error"
import UniqueEntityId from "../unique-entity-id-vo"
import { validate as uuidValidate } from "uuid"




describe("UniqueEntity Unit Tests",()=>{
  
  it("should throw error when uuid is invalid",()=>{
    const validateSpy = jest.spyOn(UniqueEntityId.prototype as any,"validate")
    
    expect( () => new UniqueEntityId("fake id"))
    .toThrow(new InvalidUuidError)

    expect(validateSpy).toHaveBeenCalled()
  })

  it("should have accept an uuid passed in constructor", ()=>{
    const validateSpy = jest.spyOn(UniqueEntityId.prototype as any,"validate")

    const uuid = "32a99b93-276f-4329-b224-47521a34280d"
    const vo = new UniqueEntityId(uuid)

    expect(vo.value).toBe(uuid)
    expect(validateSpy).toHaveBeenCalled()
  })


  it("should create a valid uuid in", ()=>{
    const validateSpy = jest.spyOn(UniqueEntityId.prototype as any,"validate")

    const vo = new UniqueEntityId()

    expect(uuidValidate(vo.value)).toBeTruthy()
    expect(validateSpy).toHaveBeenCalled()
  })


})