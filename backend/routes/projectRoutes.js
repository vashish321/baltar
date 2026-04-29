const express = require('express');
const router = express.Router();
const ProjectService = require('../services/projectService');
const AuthService = require('../services/authService');

router.post('/', AuthService.requireAuth, async (req, res) => {
  try {
    const projectData = req.body;
    if (!projectData.clientId || !projectData.serviceType || !projectData.title) {
      return res.status(400).json({ error: 'Client ID, service type, and title are required' });
    }
    const project = await ProjectService.createProject(projectData);
    res.status(201).json({ success: true, message: 'Project created successfully', project });
  } catch (error) {
    console.error('Error creating project:', error);
    res.status(500).json({ error: 'Failed to create project', details: error.message });
  }
});

router.get('/:projectId', AuthService.requireAuth, async (req, res) => {
  try {
    const project = await ProjectService.getProjectById(req.params.projectId);
    if (!project) return res.status(404).json({ error: 'Project not found' });
    res.json({ success: true, project });
  } catch (error) {
    console.error('Error fetching project:', error);
    res.status(500).json({ error: 'Failed to fetch project', details: error.message });
  }
});

router.patch('/:projectId', AuthService.requireAuth, async (req, res) => {
  try {
    const project = await ProjectService.updateProject(req.params.projectId, req.body);
    res.json({ success: true, message: 'Project updated successfully', project });
  } catch (error) {
    console.error('Error updating project:', error);
    res.status(500).json({ error: 'Failed to update project', details: error.message });
  }
});

router.patch('/:projectId/status', AuthService.requireAuth, async (req, res) => {
  try {
    const { status } = req.body;
    if (!status) return res.status(400).json({ error: 'Status is required' });
    const validStatuses = ['INQUIRY', 'QUOTED', 'APPROVED', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED'];
    if (!validStatuses.includes(status)) return res.status(400).json({ error: 'Invalid status', validStatuses });
    const project = await ProjectService.updateProjectStatus(req.params.projectId, status);
    res.json({ success: true, message: 'Project status updated successfully', project });
  } catch (error) {
    console.error('Error updating project status:', error);
    res.status(500).json({ error: 'Failed to update project status', details: error.message });
  }
});

router.get('/', AuthService.requireAuth, async (req, res) => {
  try {
    const { page = 1, limit = 10, status, serviceType, clientId } = req.query;
    const filters = {};
    if (status) filters.status = status;
    if (serviceType) filters.serviceType = serviceType;
    if (clientId) filters.clientId = clientId;
    const result = await ProjectService.getAllProjects(parseInt(page), parseInt(limit), filters);
    res.json({ success: true, ...result });
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ error: 'Failed to fetch projects', details: error.message });
  }
});

router.get('/client/:clientId', AuthService.requireAuth, async (req, res) => {
  try {
    const projects = await ProjectService.getClientProjects(req.params.clientId);
    res.json({ success: true, projects });
  } catch (error) {
    console.error('Error fetching client projects:', error);
    res.status(500).json({ error: 'Failed to fetch client projects', details: error.message });
  }
});

router.delete('/:projectId', AuthService.requireAuth, async (req, res) => {
  try {
    await ProjectService.deleteProject(req.params.projectId);
    res.json({ success: true, message: 'Project deleted successfully' });
  } catch (error) {
    console.error('Error deleting project:', error);
    res.status(500).json({ error: 'Failed to delete project', details: error.message });
  }
});

router.post('/:projectId/tasks', AuthService.requireAuth, async (req, res) => {
  try {
    const taskData = req.body;
    if (!taskData.title) return res.status(400).json({ error: 'Task title is required' });
    const task = await ProjectService.addTask(req.params.projectId, taskData);
    res.status(201).json({ success: true, message: 'Task added successfully', task });
  } catch (error) {
    console.error('Error adding task:', error);
    res.status(500).json({ error: 'Failed to add task', details: error.message });
  }
});

router.patch('/tasks/:taskId', AuthService.requireAuth, async (req, res) => {
  try {
    const task = await ProjectService.updateTask(req.params.taskId, req.body);
    res.json({ success: true, message: 'Task updated successfully', task });
  } catch (error) {
    console.error('Error updating task:', error);
    res.status(500).json({ error: 'Failed to update task', details: error.message });
  }
});

module.exports = router;
