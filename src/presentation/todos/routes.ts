import { Router } from "express";
import { TodosController } from "./controller";


export class TodoRoutes {

  static get routes() {

    const router = Router();
    
    const todoController = new TodosController();

    router.get('/', todoController.getTodos); //? podría ser así (req, res) => todoController.getTodos(req, res)
    router.get('/:id', todoController.getTodoById);
    router.post('/', todoController.createTodo);
    router.put('/:id', todoController.updateTodo);
    router.delete('/:id', todoController.deleteTodo)

    return router;
  }

}
