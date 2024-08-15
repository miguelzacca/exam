import z from 'zod'

const createProductSchema = z.object({
  pname: z.string().min(3).max(50),
  amount: z.number().min(1),
  price: z.number().min(1),
})

const createSupplierSchema = z.object({
  sname: z.string().min(3).max(100),
  cnpj: z.coerce.string().length(14),
})

const createOrderSchema = z.object({
  pname: z.string().min(3).max(50),
  amount: z.coerce.number().min(0),
})

const patchProductSchema = createProductSchema.optional()
const patchSupplierSchema = createSupplierSchema.optional()
const patchOrderSchema = createOrderSchema.optional()

const handleSchema: Record<string, z.Schema> = {
  create_product: createProductSchema,
  patch_product: patchProductSchema,
  create_supplier: createSupplierSchema,
  patch_supplier: patchSupplierSchema,
  create_order: createOrderSchema,
  patch_order: patchOrderSchema,
}

export const zodValidator = (data: object, schema: string) => {
  try {
    return handleSchema[schema].parse(data)
  } catch (err: any) {
    const { path, message } = err.issues[0]
    throw { custom: { code: 422, msg: `${path}: ${message}` } }
  }
}
