import { Router, Request, Response } from "express"

const router = Router()

// Exemplo
router.get("/tarefas", (req: Request, res: Response) => {
  res.json({ message: "My firts API", student: "Tatyane Gonçalves"})
})

export { router }