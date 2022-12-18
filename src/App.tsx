import { PlusCircle } from 'phosphor-react';

import { Header } from './components/Header';

import styles from './App.module.css';
import './global.css';
import { Empty } from './components/Empty';
import { Task } from './components/Task';
import { TaskProps } from './interfaces/ITask';
import { ChangeEvent, FormEvent, useState } from 'react';

const tasks: TaskProps[] = [
  {
    checkedDefault: false,
    content: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'
  },
  {
    checkedDefault: true,
    content: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'
  },
  {
    checkedDefault: true,
    content: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'
  },
]

export function App() {
  const [tasksCreated, setTasksCreated] = useState(tasks);
  const [taskText, setTaskText] = useState('');
  const [taskObject, setTaskObject] = useState({});


  const handleNewTaskChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTaskText(event.target.value)
    const taskObjectTemporary = {
      checkedDefault: false,
      content: `${taskText}`
    }
    setTaskObject(taskObjectTemporary);
  }

  const handleCreateNewTask = (event: FormEvent) => {
    event.preventDefault();
    setTasksCreated([...tasksCreated, taskObject])

  }

  return (
    <div className="App">
      <Header />
      <main>
        <form onSubmit={handleCreateNewTask} className={styles.form}>
          <input 
            placeholder='Adicione uma nova tarefa' 
            name="task" 
            required 
            value={taskText}
            onChange={handleNewTaskChange}
          />
          <button type='submit' >
            <span>Criar</span>
            <PlusCircle size={16} /> 
          </button>
        </form>
        <section className={styles.container}>
          <header className={styles.headerTasks}>
            <div className={styles.tasksCreated}>
              <strong>Tarefas criadas</strong>
              <span>0</span>
            </div>
            <div className={styles.tasksConcluded}>
              <strong>Concluídas</strong>
              <span>0</span>
            </div>
          </header>
          <div className={styles.tasksList}>
            {tasksCreated.length === 0 ? <Empty /> : 
              tasksCreated.map((task) => {
                return <Task content={task.content} checkedDefault={task.checkedDefault} />
              })
              
            }
          </div>
        </section>
      </main>
    </div>
  )

}