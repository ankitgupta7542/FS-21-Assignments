import React, { useState, useEffect } from 'react';

const App = () => {
  const [subjects, setSubjects] = useState([]);
  const [newSubject, setNewSubject] = useState('');
  const [hours, setHours] = useState(0);

  // Function to add a new subject
  const addSubject = () => {
    if (newSubject.trim() !== '') {
      const subject = { name: newSubject, studyHours: hours };
      setSubjects([...subjects, subject]);
      setNewSubject('');
      setHours(0);
    }
  };

  useEffect(() => {
    const storedSubjects = localStorage.getItem('subjects');
    if (storedSubjects) {
      setSubjects(JSON.parse(storedSubjects));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('subjects', JSON.stringify(subjects));
  }, [subjects]);

  const updateHours = (index, delta) => {
    const updatedSubjects = [...subjects];
    updatedSubjects[index].studyHours += delta;
    if (updatedSubjects[index].studyHours < 0) {
      updatedSubjects[index].studyHours = 0;
    }
    setSubjects(updatedSubjects);
  };

  return (
    <div className='container'>
      <h1>Education Planner</h1>
      <input 
        type="text" 
        placeholder="Add subject" 
        value={newSubject} 
        onChange={(e) => setNewSubject(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Study hours" 
        value={hours} 
        onChange={(e) => setHours(Number(e.target.value))} 
      />
      <button onClick={addSubject}>Add Subject</button>

      <ul>
        {subjects.map((subject, index) => (
          <li key={index}>
            {subject.name}: {subject.studyHours} hours
            <button onClick={() => updateHours(index, 1)}>+</button>
            <button onClick={() => updateHours(index, -1)}>-</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
