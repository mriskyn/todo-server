import { Request, Response } from 'express';
import { Task } from '../entity/Task';

declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

async function readTasks(req: Request, res: Response): Promise<Response> {
  try {
    const tasks = await Task.find();
    return res.json(tasks);
  } catch (err) {
    return res.json({ err });
  }
}

async function readTask(req: Request, res: Response): Promise<Response> {
  const { id } = req.params;
  try {
    const task = await Task.findByIds([id]);
    return res.json(task);
  } catch (err) {
    return res.json({ err });
  }
}

async function createTask(req: Request, res: Response): Promise<Response> {
  const inputs = req.body;
  const userId = req.user.payload.id;

  const task = Task.create({ ...inputs, user: userId });

  try {
    await Task.save(task);
    return res.json(inputs);
  } catch (err) {
    return res.json({ err });
  }
}

async function updateTask(req: Request, res: Response): Promise<Response> {
  const { id } = req.params;
  const inputs = req.body;

  try {
    const updatedTask = await Task.update({ id: parseInt(id) }, inputs);
    return res.json(updatedTask);
  } catch (err) {
    return res.json({ err });
  }
}

async function deleteTask(req: Request, res: Response): Promise<Response> {
  const { id } = req.params;

  try {
    const deletedTask = await Task.delete({ id: parseInt(id) });
    return res.json(deletedTask);
  } catch (err) {
    return res.json({ err });
  }
}

export { readTasks, createTask, updateTask, deleteTask, readTask };
