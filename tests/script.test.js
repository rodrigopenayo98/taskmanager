const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');
const { TextEncoder, TextDecoder } = require('util');


describe('Task Manager Application', () => {
    let window;
    let document;

    beforeAll(async () => {
        global.TextEncoder = TextEncoder;
        global.TextDecoder = TextDecoder;

        const html = `
            <!DOCTYPE html>
            <html>
            <head></head>
            <body>
                <form id="taskForm">
                    <input id="title" type="text" value="Task Title">
                    <input id="description" type="text" value="Task Description">
                    <input id="priority" type="number" value="1">
                    <input id="dueDate" type="date" value="2024-06-25">
                    <input id="status" type="text" value="Pending">
                    <button id="saveButton">Save</button>
                </form>
                <select id="filterPriority">
                    <option value="">All</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                </select>
                <select id="filterStatus">
                    <option value="">All</option>
                    <option value="Pending">Pending</option>
                    <option value="Completed">Completed</option>
                </select>
                <div id="tasks"></div>
                <button class="addButton">Add</button>
            </body>
            </html>
        `;

        const options = { resources: 'usable', runScripts: 'dangerously' };
        const dom = new JSDOM(html, options);
        window = dom.window;
        document = dom.window.document;

        window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
            ok: true,
            json: () => Promise.resolve([
                {
                    taskId: 1,
                    taskName: 'Task 1',
                    description: 'Description of Task 1',
                    priority: 1,
                    dueDate: new Date().toISOString(),
                    status: 'Pending'
                },
                {
                    taskId: 2,
                    taskName: 'Task 2',
                    description: 'Description of Task 2',
                    priority: 2,
                    dueDate: new Date().toISOString(),
                    status: 'Completed'
                }
            ])
        }));

        const scriptPath = path.resolve(__dirname, '../frontend/scripts.js');
        const scriptCode = fs.readFileSync(scriptPath, 'utf8');
        window.eval(scriptCode);
    });

    it('should render tasks correctly', async () => {
        await window.loadTasks();
        const taskElements = document.querySelectorAll('.task');
        expect(taskElements.length).toBe(2);
    });

    it('should filter tasks by priority', async () => {
        const filterPriority = document.getElementById('filterPriority');
        filterPriority.value = '2';
        filterPriority.dispatchEvent(new window.Event('change'));
        await new Promise(resolve => setTimeout(resolve, 500));
        const taskElements = document.querySelectorAll('.task');
        expect(taskElements.length).toBe(1);
    });

    it('should filter tasks by status', async () => {
        const filterStatus = document.getElementById('filterStatus');
        filterStatus.value = 'Completed';
        filterStatus.dispatchEvent(new window.Event('change'));
        await new Promise(resolve => setTimeout(resolve, 500));
        const taskElements = document.querySelectorAll('.task');
        expect(taskElements.length).toBe(1);
    });
});
