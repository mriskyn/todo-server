import { Request, Response } from 'express';

async function readTasks(req: Request, res: Response): Promise<Response> {
  return res.json('reads');
}

async function readTask(req: Request, res: Response): Promise<Response> {
  return res.json('read');
}

async function createTask(req: Request, res: Response): Promise<Response> {
  const inputs = req.body;
  return res.json('create');
}

async function updateTask(req: Request, res: Response): Promise<Response> {
  return res.json('update');
}

async function deleteTask(req: Request, res: Response): Promise<Response> {
  return res.json('delete');
}

export { readTasks, createTask, updateTask, deleteTask, readTask };
