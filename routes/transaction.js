var express = require("express");
var router = express.Router();

router.get("/api/v1/transcation", (request, response) => {
  const result = getAllData();

  result
    .then((data) => response.json({ data: data }))
    .catch((err) => console.log(err));
});
app.get("/api/v1/transcation/:id", (request, response) => {
  const { id } = request.params;

  const result = searchByID(id);

  result
    .then((data) => response.json({ data: data }))
    .catch((err) => console.log(err));
});

app.post("/api/v1/transcation/:id", (request, response) => {
  const { id } = request.body;

  const result = insertNew(id);

  result
    .then((data) => response.json({ data: data }))
    .catch((err) => console.log(err));
});

app.put("/api/v1/transcation/:id", (request, response) => {
  const { id } = request.body;

  const result = updateById(id);

  result
    .then((data) => response.json({ success: data }))
    .catch((err) => console.log(err));
});

app.delete("/api/v1/transcation/:id", (request, response) => {
  const { id } = request.params;

  const result = deleteRowById(id);

  result
    .then((data) => response.json({ success: data }))
    .catch((err) => console.log(err));
});
module.exports = router;

const getAllData = async () => {
  try {
    const response = await new Promise((resolve, reject) => {
      const query = "SELECT * FROM transcation";

      connection.query(query, (err, results) => {
        if (err) reject(new Error(err.message));
        resolve(results);
      });
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};

const insertNew = async (id) => {
  try {
    const insertId = await new Promise((resolve, reject) => {
      const query = "INSERT INTO transcation  (name) VALUES (?);";

      connection.query(query, [id], (err, result) => {
        if (err) reject(new Error(err.message));
        resolve(result.insertId);
      });
    });
    return {
      id: id,
    };
  } catch (error) {
    console.log(error);
  }
};

const deleteRowById = (id) => {
  try {
    id = parseInt(id, 10);
    const response = await new Promise((resolve, reject) => {
      const query = "DELETE FROM transcation WHERE id = ?";

      connection.query(query, [id], (err, result) => {
        if (err) reject(new Error(err.message));
        resolve(result.affectedRows);
      });
    });

    return response === 1 ? true : false;
  } catch (error) {
    console.log(error);
    return false;
  }
};
const updateById = async (id) => {
  try {
    id = parseInt(id, 10);
    const response = await new Promise((resolve, reject) => {
      const query = "UPDATE id SET id = ? WHERE id = ?";

      connection.query(query, [id], (err, result) => {
        if (err) reject(new Error(err.message));
        resolve(result.affectedRows);
      });
    });

    return response === 1 ? true : false;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const searchByID = async (id) => {
  try {
    const response = await new Promise((resolve, reject) => {
      const query = "SELECT * FROM transcation WHERE name = ?;";

      connection.query(query, [id], (err, results) => {
        if (err) reject(new Error(err.message));
        resolve(results);
      });
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};
