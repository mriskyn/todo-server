import { Request, Response } from 'express';
import { Task } from '../entity/Task';

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

  const task = Task.create(inputs);

  try {
    await Task.save(task);
    return res.json(inputs);
  } catch (err) {
    return res.json({ err });
  }
}

async function updateTask(req: Request, res: Response): Promise<Response> {
  return res.json('update');
}

async function deleteTask(req: Request, res: Response): Promise<Response> {
  return res.json('delete');
}

export { readTasks, createTask, updateTask, deleteTask, readTask };
