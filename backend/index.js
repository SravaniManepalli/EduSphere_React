const express = require('express');
const oracledb = require('oracledb');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
}));

// OracleDB Connection Configuration
const dbConfig = {
  user: 'sys',
  password: 'manager',
  connectString: 'localhost:1521/orcl', // Change the connection string as per your Oracle setup
};

// CRUD operations

// Retrieve all records from regtable
app.get('/regtable', async (req, res) => {
  try {
    const connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute('SELECT * FROM regtable');
    res.json(result.rows);
    connection.close();
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Retrieve a specific record by ID
app.get('/regtable/:id', async (req, res) => {
  const recordId = req.params.id;
  try {
    const connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute('SELECT * FROM regtable WHERE id = :id', [recordId]);
    res.json(result.rows[0]);
    connection.close();
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Insert a new record
app.post('/regtable', async (req, res) => {
  const { id, name, role, email, password, confirm_password } = req.body;
  try {
    const connection = await oracledb.getConnection(dbConfig);
    await connection.execute('INSERT INTO regtable (id, name, role, email, password, confirm_password) VALUES (:id, :name, :role, :email, :password, :confirm_password)',
      [id, name, role, email, password, confirm_password]);
    await connection.commit();
    res.send('Record added successfully');
    connection.close();
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Update a record by ID
app.put('/regtable/:id', async (req, res) => {
  const recordId = req.params.id;
  const { name, role, email, password, confirm_password } = req.body;
  try {
    const connection = await oracledb.getConnection(dbConfig);
    await connection.execute('UPDATE regtable SET name = :name, role = :role, email = :email, password = :password, confirm_password = :confirm_password WHERE id = :id',
      [name, role, email, password, confirm_password, recordId]);
    await connection.commit();
    res.send('Record updated successfully');
    connection.close();
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Delete a record by ID
app.delete('/regtable/:id', async (req, res) => {
  const recordId = req.params.id;
  try {
    const connection = await oracledb.getConnection(dbConfig);
    await connection.execute('DELETE FROM regtable WHERE id = :id', [recordId]);
    await connection.commit();
    res.send('Record deleted successfully');
    connection.close();
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});


// CRUD operations for marks table

// Retrieve all marks
app.get('/marks', async (req, res) => {
    try {
      const connection = await oracledb.getConnection(dbConfig);
      const result = await connection.execute('SELECT * FROM marks');
      res.json(result.rows);
      connection.close();
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });
  
  // Retrieve a specific mark by student_id
  app.get('/marks/:student_id', async (req, res) => {
    const studentId = req.params.student_id;
    try {
      const connection = await oracledb.getConnection(dbConfig);
      const result = await connection.execute('SELECT * FROM marks WHERE student_id = :student_id', [studentId]);
      res.json(result.rows[0]);
      connection.close();
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });
  
  // Insert a new mark
  app.post('/marks', async (req, res) => {
    const { student_id, telugu, english, science, maths, social, exam_date } = req.body;
    try {
      const connection = await oracledb.getConnection(dbConfig);
      await connection.execute('INSERT INTO marks (student_id, telugu, english, science, maths, social, exam_date) VALUES (:student_id, :telugu, :english, :science, :maths, :social, :exam_date)',
        [student_id, telugu, english, science, maths, social, new Date(exam_date)]);
      await connection.commit();
      res.send('Mark added successfully');
      connection.close();
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });
  
  // Update a mark by student_id
  app.put('/marks/:student_id', async (req, res) => {
    const studentId = req.params.student_id;
    const { telugu, english, science, maths, social, exam_date } = req.body;
    try {
      const connection = await oracledb.getConnection(dbConfig);
      await connection.execute('UPDATE marks SET telugu = :telugu, english = :english, science = :science, maths = :maths, social = :social, exam_date = :exam_date WHERE student_id = :student_id',
        [telugu, english, science, maths, social, new Date(exam_date), studentId]);
      await connection.commit();
      res.send('Mark updated successfully');
      connection.close();
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });
  
  // Delete a mark by student_id
  app.delete('/marks/:student_id', async (req, res) => {
    const studentId = req.params.student_id;
    try {
      const connection = await oracledb.getConnection(dbConfig);
      await connection.execute('DELETE FROM marks WHERE student_id = :student_id', [studentId]);
      await connection.commit();
      res.send('Mark deleted successfully');
      connection.close();
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });

  // CRUD operations for the assignment table

// Retrieve all assignments
app.get('/assignments', async (req, res) => {
    try {
      const connection = await oracledb.getConnection(dbConfig);
      const result = await connection.execute('SELECT * FROM assignments');
      res.json(result.rows);
      connection.close();
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });
  
  // Retrieve a specific assignment by subject_id
  app.get('/assignments/:subject_id', async (req, res) => {
    const subjectId = req.params.subject_id;
    try {
      const connection = await oracledb.getConnection(dbConfig);
      const result = await connection.execute('SELECT * FROM assignments WHERE subject_id = :subject_id', [subjectId]);
      res.json(result.rows[0]);
      connection.close();
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });
  
  // Insert a new assignment
  app.post('/assignments', async (req, res) => {
    const { subject_id, assignment_date, duration, max_marks } = req.body;
    try {
      const connection = await oracledb.getConnection(dbConfig);
      await connection.execute('INSERT INTO assignments (subject_id, assignment_date, duration, max_marks) VALUES (:subject_id, :assignment_date, :duration, :max_marks)',
        [subject_id, new Date(assignment_date), duration, max_marks]);
      await connection.commit();
      res.send('Assignment added successfully');
      connection.close();
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });
  
  // Update an assignment by subject_id
  app.put('/assignments/:subject_id', async (req, res) => {
    const subjectId = req.params.subject_id;
    const { assignment_date, duration, max_marks } = req.body;
    try {
      const connection = await oracledb.getConnection(dbConfig);
      await connection.execute('UPDATE assignments SET assignment_date = :assignment_date, duration = :duration, max_marks = :max_marks WHERE subject_id = :subject_id',
        [new Date(assignment_date), duration, max_marks, subjectId]);
      await connection.commit();
      res.send('Assignment updated successfully');
      connection.close();
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });
  
  // Delete an assignment by subject_id
  app.delete('/assignments/:subject_id', async (req, res) => {
    const subjectId = req.params.subject_id;
    try {
      const connection = await oracledb.getConnection(dbConfig);
      await connection.execute('DELETE FROM assignments WHERE subject_id = :subject_id', [subjectId]);
      await connection.commit();
      res.send('Assignment deleted successfully');
      connection.close();
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });


  app.get('/holidays', async (req, res) => {
    try {
      const connection = await oracledb.getConnection(dbConfig);
      const result = await connection.execute('SELECT * FROM holidays');
      res.json(result.rows);
      connection.close();
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });
  

  
  // Insert a new holiday
  app.post('/holidays', async (req, res) => {
    const { cause, holiday_start_date, no_of_days } = req.body;
    try {
      const connection = await oracledb.getConnection(dbConfig);
      await connection.execute('INSERT INTO holidays (cause, holiday_start_date, no_of_days) VALUES (:cause, :holiday_start_date, :no_of_days)',
        [cause, new Date(holiday_start_date), no_of_days]);
      await connection.commit();
      res.send('Holiday added successfully');
      connection.close();
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });
  
  // Update a holiday by cause and start date
  app.put('/holidays/:cause/:holiday_start_date', async (req, res) => {
    const { cause, holiday_start_date } = req.params;
    const { no_of_days } = req.body;
    try {
      const connection = await oracledb.getConnection(dbConfig);
      await connection.execute('UPDATE holidays SET no_of_days = :no_of_days WHERE cause = :cause AND holiday_start_date = :holiday_start_date',
        [no_of_days, cause, new Date(holiday_start_date)]);
      await connection.commit();
      res.send('Holiday updated successfully');
      connection.close();
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });
  
  // Delete a holiday by cause and start date
  app.delete('/holidays/:cause/:holiday_start_date', async (req, res) => {
    const { cause, holiday_start_date } = req.params;
    try {
      const connection = await oracledb.getConnection(dbConfig);
      await connection.execute('DELETE FROM holidays WHERE cause = :cause AND holiday_start_date = :holiday_start_date', [cause, new Date(holiday_start_date)]);
      await connection.commit();
      res.send('Holiday deleted successfully');
      connection.close();
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });

  
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Assuming regtable contains user registration information
    const connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute('SELECT * FROM regtable WHERE email = :email AND password = :password', [email, password]);

    if (result.rows.length === 1) {
      // User is authenticated
      res.status(200).json({ success: true, message: 'Authentication successful' });
    } else {
      // Authentication failed
      res.status(401).json({ success: false, message: 'Invalid email or password' });
    }

    connection.close();
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
