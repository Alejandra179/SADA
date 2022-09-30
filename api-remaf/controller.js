const ctrl = {};
const conexion = require("./config/conexion");

ctrl.getValues = async (req, res) => {
  let sql = "select * from estaciones";
  await conexion.query(sql, (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json(rows);
    }
  });
};
ctrl.getLastValues = async (req, res) => {
  const { id } = await req.params;
  let sql = `SELECT * FROM sensores,estaciones WHERE rela_estaciones=id_estaciones and id_estaciones='${id}' ORDER by id_sensores DESC LIMIT 1 `;
  await conexion.query(sql, (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json(rows);
    }
  });
};

ctrl.getWithDate = async (req, res) => {
  const { id, date } = await req.params;
  let sql = `SELECT * FROM sensores,estaciones WHERE rela_estaciones=id_estaciones and id_estaciones='${id}' and date_estaciones like '%${date}%' ORDER by id_sensores DESC`;
  await conexion.query(sql, (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json(rows);
    }
  });
};

ctrl.addValue = async function (req, res) {
  const { temp, hume, prec, dir, vel, estacion } = await req.body;
  if (temp == "" || !temp) {
    res.json({ status: "datos incompletos" });
  } else {
    let sql = `insert into sensores(temperatura_sensores,
	humedad_sensores,
	precipitacion_sensores,
	direcc_viento_sensores,
	veloc_viento_sensores,
	rela_estaciones) 
    values('${temp}'
    ,'${hume}'
    ,'${prec}'
    ,'${dir}'
    ,'${vel}'
    ,'${estacion}')`;
    conexion.query(sql, (err, rows, fields) => {
      if (err) {
        res.json(err);
      } else {
        res.json({ status: "Lectura de sensor agregado" });
      }
    });
  }
};

module.exports = ctrl;
