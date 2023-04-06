import Entity from "../entity/entity"
import UniqueEntityId from "../value-object/unique-entity-id-vo"

export interface RepositoryInterface<E extends Entity>{
  insert(entity: E): Promise<void>
  findById(id: string | UniqueEntityId): Promise<E>
  findAll(): Promise<E[]>
  update(entity: E): Promise<void>
  delete(id): Promise<void>
}