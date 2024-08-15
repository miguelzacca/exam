import { Response } from 'express'

export const handleHttpErrorResponse = (res: Response, err: any) => {
  if (err.custom?.msg) {
    const { code, msg } = err.custom
    res.status(code).json({ msg })
    return
  }

  if (err.custom?.code && !err.custom?.msg) {
    const { code } = err.custom
    res.sendStatus(code)
    return
  }

  console.error(err)
  res.sendStatus(500)
}
